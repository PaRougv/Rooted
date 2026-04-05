import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Camera, ShieldCheck, Users, Search, MessageCircle, MapPin, BookOpen, Pill } from "lucide-react";
import BackButton from "./BackButton.jsx";
import "./HomePage.css"

const FEATURES = [
  { icon: Camera,        key: "scan",    label: "Plant Scanner",       desc: "Identify any plant instantly using your camera" },
  { icon: ShieldCheck,   key: "safety",  label: "Safety Checker",      desc: "Check herb-drug interactions for your family" },
  { icon: Users,         key: "family",  label: "Family Profiles",     desc: "Personalised safety for each family member" },
  { icon: Search,        key: "search",  label: "Plant Database",      desc: "Explore 200+ medicinal plants with full details" },
  { icon: MessageCircle, key: "chat",    label: "AI Assistant",        desc: "Ask anything about plants and herbal remedies" },
  { icon: MapPin,        key: "maps",    label: "Nearby Stores",       desc: "Find herbal and medical stores near you" },
  { icon: BookOpen,      key: "journal", label: "Plant Journal",       desc: "Log and track your plant discoveries" },
  { icon: Pill,          key: "dosage",  label: "Dosage Calculator",   desc: "Get weight-based dosage guidance for herbs" },
];

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
        <p className="home-subtitle">{t("home.subtitle")}</p>

        <div className="home-actions">
          <Link to="/login" className="home-btn home-btn--primary">{t("nav.login")}</Link>
          <Link to="/register" className="home-btn home-btn--secondary">{t("nav.register")}</Link>
        </div>

        <div className="home-features-divider">
          <span>What Rooted offers</span>
        </div>

        <div className="home-features">
          {FEATURES.map(({ icon: Icon, key, label, desc }) => (
            <div className="home-feature-card" key={key}>
              <div className="home-feature-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div className="home-feature-text">
                <p className="home-feature-label">{label}</p>
                <p className="home-feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
