import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const triggerFlash = (message, type) => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "/api/auth/login",
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      )

      console.log(response.data);
      triggerFlash(t("login.success"), "success");
      setTimeout(() => navigate("/dashboard"), 500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      triggerFlash(error.response?.data?.message || "Login failed", "error");
    }
  }

  return (
    <div className="login-page">
      <BackButton to="/" className="back-button--fixed" />
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />
      <div className="login-blur login-blur--one" />
      <div className="login-blur login-blur--two" />

      <section className="login-card">
        <header className="login-header">
          <p className="login-kicker">Rooted</p>
          <h2>{t("login.welcomeBack")}</h2>
          <p className="login-subtitle">{t("login.subtitle")}</p>
        </header>

        <form onSubmit={handleLogin} className="login-form">
          <label className="login-field">
            <span>{t("login.email")}</span>
            <input
              type="email"
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="login-field">
            <span>{t("login.password")}</span>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("login.passwordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </label>

          <div className="forgot-password-wrapper">
            <Link to="/forgot-password" className="forgot-password-link">
              {t("login.forgotPassword")}
            </Link>
          </div>

          <button type="submit" className="login-button">{t("login.loginBtn")}</button>
        </form>

        <p className="login-note">
          {t("login.noAccount")} <Link to="/register" className="login-link">{t("nav.register")}</Link>
        </p>
      </section>
    </div>
  )
}

export default Login
