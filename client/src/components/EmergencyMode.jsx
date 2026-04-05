import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton.jsx";
import "./EmergencyMode.css";

const EmergencyMode = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  // Data from route state (passed from PlantSafetyResult or PlantSafetyCheck)
  const plantName = state.plantName || null;
  const safetyRating = state.safetyRating || null;
  const familyMember = state.familyMember || null;

  const [coords, setCoords] = useState(null);
  const [locError, setLocError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auto-detect location on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocError(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setLocError(true),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  const hospitalUrl = coords
    ? `https://www.google.com/maps/search/hospital/@${coords.lat},${coords.lng},14z`
    : "https://www.google.com/maps/search/hospital+near+me";

  const buildReport = useCallback(() => {
    const lines = ["EMERGENCY - Plant Exposure Report"];
    if (plantName) lines.push(`Plant: ${plantName}`);
    if (safetyRating) lines.push(`Safety: ${safetyRating}`);
    if (familyMember) {
      const condStr = familyMember.anyOtherCondition || "None listed";
      const medStr =
        familyMember.medications?.length > 0
          ? familyMember.medications.map((m) => m.name || m).join(", ")
          : "None listed";
      lines.push(`Person: ${familyMember.name}, Conditions: ${condStr}, Medications: ${medStr}`);
    }
    if (coords) lines.push(`Location: ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`);
    lines.push(`Time: ${new Date().toLocaleString()}`);
    return lines.join("\n");
  }, [plantName, safetyRating, familyMember, coords]);

  const handleCopyReport = async () => {
    try {
      await navigator.clipboard.writeText(buildReport());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = buildReport();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="em-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      <div className="em-container">
        {/* Urgent header */}
        <div className="em-header">
          <span className="em-header__icon" aria-hidden="true">!</span>
          <h1 className="em-header__title">{t("emergency.title")}</h1>
          <p className="em-header__subtitle">{t("emergency.subtitle")}</p>
        </div>

        {/* Primary action: Call Poison Control */}
        <a href="tel:18001116117" className="em-call-btn em-call-btn--poison">
          <span className="em-call-btn__icon" aria-hidden="true">&#9742;</span>
          <span className="em-call-btn__text">
            <strong>{t("emergency.callPoison")}</strong>
            <small>1800-11-6117</small>
          </span>
        </a>

        {/* Emergency contacts */}
        <div className="em-card em-contacts">
          <h2 className="em-card__heading">{t("emergency.contacts")}</h2>
          <div className="em-contacts__grid">
            <a href="tel:112" className="em-contact-btn">
              <span className="em-contact-btn__label">{t("emergency.emergency112")}</span>
              <span className="em-contact-btn__number">112</span>
            </a>
            <a href="tel:102" className="em-contact-btn">
              <span className="em-contact-btn__label">{t("emergency.ambulance")}</span>
              <span className="em-contact-btn__number">102</span>
            </a>
          </div>
        </div>

        {/* Find hospital */}
        <a
          href={hospitalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="em-hospital-btn"
        >
          <span className="em-hospital-btn__icon" aria-hidden="true">+</span>
          <span>
            <strong>{t("emergency.findHospital")}</strong>
            {coords && (
              <small className="em-hospital-btn__coords">
                {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
              </small>
            )}
            {locError && <small className="em-hospital-btn__err">{t("emergency.locationFailed")}</small>}
          </span>
        </a>

        {/* Recent scan info */}
        {plantName && (
          <div className="em-card em-scan-info">
            <h2 className="em-card__heading">{t("emergency.plantExposure")}</h2>
            <div className="em-scan-info__row">
              <span className="em-scan-info__label">{t("emergency.plant")}</span>
              <span className="em-scan-info__value">{plantName}</span>
            </div>
            {safetyRating && (
              <div className="em-scan-info__row">
                <span className="em-scan-info__label">{t("emergency.safetyRating")}</span>
                <span className={`em-scan-info__badge em-scan-info__badge--${safetyRating.toLowerCase()}`}>
                  {safetyRating}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Family member info */}
        {familyMember && (
          <div className="em-card em-member-info">
            <h2 className="em-card__heading">{t("emergency.personInfo")}</h2>
            <div className="em-scan-info__row">
              <span className="em-scan-info__label">{t("emergency.name")}</span>
              <span className="em-scan-info__value">{familyMember.name}</span>
            </div>
            {familyMember.anyOtherCondition && (
              <div className="em-scan-info__row">
                <span className="em-scan-info__label">{t("emergency.conditions")}</span>
                <span className="em-scan-info__value">{familyMember.anyOtherCondition}</span>
              </div>
            )}
            {familyMember.medications?.length > 0 && (
              <div className="em-scan-info__row">
                <span className="em-scan-info__label">{t("emergency.medications")}</span>
                <span className="em-scan-info__value">
                  {familyMember.medications.map((m) => m.name || m).join(", ")}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Copy report */}
        <button className="em-report-btn" onClick={handleCopyReport}>
          {copied ? t("emergency.copied") : t("emergency.copyReport")}
        </button>

        {/* Back to dashboard */}
        <button className="em-dash-btn" onClick={() => navigate("/dashboard")}>
          {t("nav.dashboard")}
        </button>
      </div>
    </div>
  );
};

export default EmergencyMode;
