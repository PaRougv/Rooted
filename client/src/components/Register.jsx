import React from 'react'
import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
  return (
    <main className="register-page">
      <section className="register-card">
        <p className="register-kicker">Rooted</p>
        <h2>Register Page</h2>
        <p className="register-copy">Registration UI can be added here. Your route is now ready.</p>

        <Link to="/login" className="register-link">Go to Login</Link>
      </section>
    </main>
  )
}

export default Register
