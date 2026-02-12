import React, { useState } from 'react'
import axios from "axios"
import "./Login.css"

const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

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
      alert("Login Successfull")
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Login failed");
    }
  }

  return (
    <div className="login-page">
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
