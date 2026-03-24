import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    // Get token from URL query params
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, [searchParams]);

  const triggerFlash = (message, type) => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      triggerFlash("Passwords do not match", "error");
      return;
    }

    if (newPassword.length < 6) {
      triggerFlash("Password must be at least 6 characters", "error");
      return;
    }

    if (!token) {
      triggerFlash("Reset token is required", "error");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(
        "/api/auth/reset-password",
        { 
          token,
          newPassword 
        }
      );

      triggerFlash(response.data.message, "success");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (error) {
      console.error(error.response?.data || error.message);
      triggerFlash(error.response?.data?.message || "Failed to reset password", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <BackButton to="/forgot-password" className="back-button--fixed" />
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
          <h2>Reset Password</h2>
          <p className="login-subtitle">Enter your new password below.</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-field">
            <span>Reset Token</span>
            <input
              type="text"
              placeholder='Enter reset token'
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </label>

          <label className="login-field">
            <span>New Password</span>
            <div className="password-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder='Enter new password (min 6 chars)'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? (
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

          <label className="login-field">
            <span>Confirm Password</span>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder='Confirm new password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
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

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="login-note">
          Remember your password? <Link to="/login" className="login-link">Login</Link>
        </p>
      </section>
    </div>
  )
}

export default ResetPassword
