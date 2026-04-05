import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton.jsx";
import "./HomePage.css"

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      <BackButton className="back-button--fixed" />
      <div className="home-overlay home-overlay--top" />
      <div className="home-overlay home-overlay--bottom" />

      <section className="home-hero">
        <p className="home-kicker">Rooted: Your Smart Plant Companion</p>
        <h1>{t("home.title")}</h1>
        <p className="home-subtitle">
          {t("home.subtitle")}
        </p>

        <div className="home-actions">
          <Link to="/login" className="home-btn home-btn--primary">{t("nav.login")}</Link>
          <Link to="/register" className="home-btn home-btn--secondary">{t("nav.register")}</Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage
