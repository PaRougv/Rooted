import React, { useState } from 'react'
import axios from "../api.js"
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [emailDeliveryPending, setEmailDeliveryPending] = useState(false);

  const triggerFlash = (message, type) => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(
        "/api/auth/forgot-password",
        { email: email.trim() }
      );

      triggerFlash(response.data.message, "success");

      if (response.data.debugResetToken) {
        setResetToken(response.data.debugResetToken);
        setShowToken(true);
        setEmailDeliveryPending(false);
      } else {
        setResetToken("");
        setShowToken(false);
        setEmailDeliveryPending(true);
      }

      if (response.data.debugResetToken) {
        setTimeout(() => {
          navigate(`/reset-password?token=${response.data.debugResetToken}`);
        }, 3000);
      }
      
    } catch (error) {
      console.error(error.response?.data || error.message);
      triggerFlash(error.response?.data?.message || "Failed to send reset link", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <BackButton to="/login" className="back-button--fixed" />
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
          <h2>{t("forgotPw.title")}</h2>
          <p className="login-subtitle">{t("forgotPw.subtitle")}</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-field">
            <span>{t("login.email")}</span>
            <input
              type="email"
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? t("forgotPw.sending") : t("forgotPw.sendBtn")}
          </button>
        </form>

        {showToken && (
          <div style={{ 
            marginTop: "1rem", 
            padding: "1rem", 
            background: "#f0f9ff", 
            borderRadius: "8px",
            border: "1px solid #3b82f6"
          }}>
            <p style={{ fontSize: "0.875rem", color: "#374151", marginBottom: "0.5rem" }}>
              <strong>Development Reset Token:</strong> Only shown because insecure token responses are enabled locally.
            </p>
            <code style={{ 
              display: "block", 
              padding: "0.5rem", 
              background: "#fff", 
              borderRadius: "4px",
              fontSize: "0.75rem",
              wordBreak: "break-all"
            }}>
              {resetToken}
            </code>
          </div>
        )}

        {emailDeliveryPending && (
          <p className="login-note" style={{ marginTop: "1rem" }}>
            {t("forgotPw.checkEmail")}
          </p>
        )}

        <p className="login-note">
          {t("forgotPw.rememberPw")} <Link to="/login" className="login-link">{t("nav.login")}</Link>
        </p>
      </section>
    </div>
  )
}

export default ForgotPassword
