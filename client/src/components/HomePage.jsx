import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
  return (
    <main className="home-page">
      <div className="home-overlay home-overlay--top" />
      <div className="home-overlay home-overlay--bottom" />

      <section className="home-hero">
        <p className="home-kicker">Rooted: Your Smart Plant Companion</p>
        <h1>Grow Better, Care Smarter</h1>
        <p className="home-subtitle">
          Track your plants, capture health snapshots, and build a greener routine in one calm space.
        </p>

        <div className="home-actions">
          <Link to="/login" className="home-btn home-btn--primary">Login</Link>
          <Link to="/register" className="home-btn home-btn--secondary">Register</Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage
