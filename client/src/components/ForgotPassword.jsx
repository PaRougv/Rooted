import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [showToken, setShowToken] = useState(false);

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
      
      // Show reset token (in production, this would be sent via email)
      if (response.data.resetToken) {
        setResetToken(response.data.resetToken);
        setShowToken(true);
      }
      
      setTimeout(() => {
        // Navigate to reset password page with token
        navigate(`/reset-password?token=${response.data.resetToken}`);
      }, 3000);
      
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
          <h2>Forgot Password</h2>
          <p className="login-subtitle">Enter your email to receive a reset link.</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-field">
            <span>Email</span>
            <input
              type="email"
              placeholder='Enter your email'
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
            {loading ? "Sending..." : "Send Reset Link"}
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
              <strong>Your Reset Token:</strong> (Copy this - would be emailed in production)
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

        <p className="login-note">
          Remember your password? <Link to="/login" className="login-link">Login</Link>
        </p>
      </section>
    </div>
  )
}

export default ForgotPassword
