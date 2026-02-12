import React, { useState } from 'react'
import axios from "axios"

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
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <input 
          type="email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input 
          type="password"
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login