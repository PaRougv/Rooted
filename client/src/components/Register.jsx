import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const triggerFlash = (message, type) => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/auth/register",
        {
          name,
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      console.log(response.data);
      triggerFlash("Registration successful", "success");
      setTimeout(() => navigate("/dashboard"), 500);
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      const message = error.response?.data?.message 
        || (error.code === "ERR_NETWORK" ? "Cannot connect to server. Is the backend running on port 3000?" 
          : "Registration failed");
      triggerFlash(message, "error");
    }
  };

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
          <h2>Create Account</h2>
          <p className="login-subtitle">Register and start your plant care journey.</p>
        </header>

        <form onSubmit={handleRegister} className="login-form">
          <label className="login-field">
            <span>Name</span>
            <input
              type="text"
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="login-field">
            <span>Email</span>
            <input
              type="email"
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="login-field">
            <span>Password</span>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter Password'
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

          <button type="submit" className="login-button">Register</button>
        </form>

        <p className="login-note">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </section>
    </div>
  )
}

export default Register
