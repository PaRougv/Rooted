import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./ScanHistoryPage.css";
import { ChevronUp, ChevronDown, Download } from "lucide-react";
import { exportToPdf } from "../helpers/exportPdf.js";

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const ScanHistoryPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [scans, setScans] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("error");
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [historyRes, membersRes] = await Promise.all([
          axios.get("/api/safety/history", { withCredentials: true }),
          axios.get("/api/input/takeuser", { withCredentials: true }),
        ]);
        setScans(historyRes.data?.data || []);
        const raw = membersRes.data?.data || [];
        setMembers(Array.isArray(raw) ? raw : [raw]);
      } catch (err) {
        setFlashMessage("Failed to load scan history.");
        setFlashType("error");
        setShowFlash(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const filtered =
    selectedMemberId === "all"
      ? scans
      : scans.filter((s) => s.familyMemberId === selectedMemberId);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="history-page">
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <BackButton to="/dashboard" label={t("nav.dashboard")} className="back-button--fixed" />

      <div className="history-container">
        <header className="history-header">
          <p className="history-kicker">Rooted</p>
          <h1>{t("history.title")}</h1>
          <p>{t("history.subtitle")}</p>
          <button className="export-pdf-btn" onClick={() => exportToPdf(".history-page", "rooted-scan-history")} style={{ marginTop: 10 }}>
            <Download size={14} /> {t("history.exportPdf")}
          </button>
        </header>

        {/* Member filter */}
        {members.length > 1 && (
          <div className="history-filter">
            <button
              className={`history-filter-chip ${selectedMemberId === "all" ? "active" : ""}`}
              onClick={() => setSelectedMemberId("all")}
            >
              {t("history.allMembers")}
            </button>
            {members.map((m) => {
              const mid = m.id || m._id;
              return (
                <button
                  key={mid}
                  className={`history-filter-chip ${selectedMemberId === mid ? "active" : ""}`}
                  onClick={() => setSelectedMemberId(mid)}
                >
                  {m.name || "Unnamed"}
                </button>
              );
            })}
          </div>
        )}

        {/* Content */}
        {isLoading ? (
          <div className="history-empty">{t("common.loading")}</div>
        ) : filtered.length === 0 ? (
          <div className="history-empty">
            <p>{t("history.noScans")}</p>
            <button
              className="history-btn history-btn--primary"
              onClick={() => navigate("/camera")}
            >
              {t("history.scanPlant")}
            </button>
          </div>
        ) : (
          <ul className="history-list">
            {filtered.map((scan) => {
              const isOpen = expandedId === scan._id;
              return (
                <li key={scan._id} className="history-item">
                  {/* Summary row */}
                  <button
                    className="history-item-summary"
                    onClick={() => toggleExpand(scan._id)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="history-rating-dot"
                      data-rating={scan.safetyRating}
                      title={scan.safetyRating}
                    />
                    <div className="history-item-main">
                      <span className="history-plant-name">{scan.plantName}</span>
                      <span className="history-meta">
                        {scan.familyMemberName} &middot; {formatDate(scan.createdAt)}
                      </span>
                    </div>
                    <span
                      className="history-rating-label"
                      data-rating={scan.safetyRating}
                    >
                      {scan.safetyRating}
                    </span>
                    <span className="history-chevron">{isOpen ? <ChevronUp size={14} strokeWidth={2} /> : <ChevronDown size={14} strokeWidth={2} />}</span>
                  </button>

                  {/* Expanded details */}
                  {isOpen && (
                    <div className="history-item-detail">
                      {scan.probability > 0 && (
                        <p className="history-confidence">
                          {t("safetyCheck.confidence")} {(scan.probability * 100).toFixed(1)}%
                        </p>
                      )}

                      {scan.warnings?.length > 0 && (
                        <div className="history-section">
                          <h4>{t("safetyCheck.warnings")}</h4>
                          <ul className="history-detail-list history-detail-list--warnings">
                            {scan.warnings.map((w, i) => <li key={i}>{w}</li>)}
                          </ul>
                        </div>
                      )}

                      {scan.medicinalUses?.length > 0 && (
                        <div className="history-section">
                          <h4>{t("safetyCheck.uses")}</h4>
                          <ul className="history-detail-list">
                            {scan.medicinalUses.map((u, i) => <li key={i}>{u}</li>)}
                          </ul>
                        </div>
                      )}

                      {scan.preparationMethods?.length > 0 && (
                        <div className="history-section">
                          <h4>{t("safetyCheck.howToUse")}</h4>
                          <ul className="history-detail-list">
                            {scan.preparationMethods.map((p, i) => <li key={i}>{p}</li>)}
                          </ul>
                        </div>
                      )}

                      {scan.recommendations?.length > 0 && (
                        <div className="history-section">
                          <h4>{t("safetyCheck.recommendations")}</h4>
                          <ul className="history-detail-list history-detail-list--recommendations">
                            {scan.recommendations.map((r, i) => <li key={i}>{r}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScanHistoryPage;
