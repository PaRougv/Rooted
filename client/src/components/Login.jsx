import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./Login.css"
import FlashCard from "../helpers/FlashCard.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
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
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      )

      console.log(response.data);
      triggerFlash("Login successful", "success");
      setTimeout(() => navigate("/dashboard"), 500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      triggerFlash(error.response?.data?.message || "Login failed", "error");
    }
  }

  return (
    <div className="login-page">
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
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in and continue your plant care routine.</p>
        </header>

        <form onSubmit={handleLogin} className="login-form">
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
            <input
              type="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-note">Your account session is protected and secure.</p>
      </section>
    </div>
  )
}

export default Login
