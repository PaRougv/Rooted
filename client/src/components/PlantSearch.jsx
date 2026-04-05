import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search, Shield, Loader2 } from "lucide-react";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./PlantSearch.css";

const RATING_COLORS = {
  SAFE: "var(--color-safe)",
  CAUTION: "var(--color-caution)",
  AVOID: "var(--color-avoid)",
};

const PlantSearch = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [safetyResult, setSafetyResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const debounceRef = useRef(null);

  const flash = (msg, type = "success") => {
    setFlashMessage(msg);
    setFlashType(type);
    setShowFlash(true);
  };

  // Load family members
  useEffect(() => {
    const loadMembers = async () => {
      try {
        const res = await axios.get("/api/input/takeuser", { withCredentials: true });
        const raw = res.data?.data || [];
        const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
        setMembers(list);
        if (list.length > 0) setSelectedMember(list[0]);
      } catch {
        // silent
      }
    };
    loadMembers();
  }, []);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await axios.get(`/api/safety/search?q=${encodeURIComponent(query.trim())}`, {
          withCredentials: true,
        });
        setResults(res.data?.data || []);
      } catch {
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 350);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const handleSelectPlant = (plant) => {
    setSelectedPlant(plant);
    setQuery(plant.name);
    setResults([]);
    setSafetyResult(null);
  };

  const handleCheckSafety = async () => {
    if (!selectedPlant) {
      flash("Select a plant first", "error");
      return;
    }
    if (!selectedMember) {
      flash(t("plantSearch.selectMember"), "error");
      return;
    }

    setIsChecking(true);
    setSafetyResult(null);

    try {
      const res = await axios.post(
        "/api/safety/check",
        {
          plantName: selectedPlant.name,
          probability: 1,
          familyMemberId: selectedMember._id || selectedMember.id,
        },
        { withCredentials: true }
      );

      if (res.data?.success) {
        setSafetyResult(res.data.data);
      } else {
        flash(res.data?.message || t("common.error"), "error");
      }
    } catch (err) {
      flash(err.response?.data?.message || t("common.error"), "error");
    } finally {
      setIsChecking(false);
    }
  };

  const resetSearch = () => {
    setQuery("");
    setSelectedPlant(null);
    setSafetyResult(null);
    setResults([]);
  };

  return (
    <div className="psearch-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />
      <FlashCard message={flashMessage} type={flashType} visible={showFlash} onClose={() => setShowFlash(false)} />

      <div className="psearch-container">
        <header className="psearch-header">
          <p className="psearch-kicker">Rooted</p>
          <h1>{t("plantSearch.title")}</h1>
          <p>{t("plantSearch.subtitle")}</p>
        </header>

        {/* ── Search ── */}
        <div className="psearch-bar">
          <Search size={18} className="psearch-icon" />
          <input
            type="text"
            className="psearch-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (selectedPlant && e.target.value !== selectedPlant.name) {
                setSelectedPlant(null);
                setSafetyResult(null);
              }
            }}
            placeholder={t("plantSearch.placeholder")}
          />
          {isSearching && <Loader2 size={16} className="psearch-spinner" />}
        </div>

        {/* ── Search Results ── */}
        {results.length > 0 && !selectedPlant && (
          <ul className="psearch-results">
            {results.map((plant) => (
              <li key={plant.name} className="psearch-result-item" onClick={() => handleSelectPlant(plant)}>
                <span className="psearch-result-name">{plant.name}</span>
                {plant.scientificName && (
                  <span className="psearch-result-sci">{plant.scientificName}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {query.trim().length >= 2 && results.length === 0 && !isSearching && !selectedPlant && (
          <p className="psearch-no-results">{t("plantSearch.noResults")}</p>
        )}

        {/* ── Selected Plant Info ── */}
        {selectedPlant && !safetyResult && (
          <div className="psearch-selected-card">
            <h3 className="psearch-plant-name">{selectedPlant.name}</h3>
            {selectedPlant.scientificName && (
              <p className="psearch-sci-name">{selectedPlant.scientificName}</p>
            )}

            {selectedPlant.medicinalUses?.length > 0 && (
              <div className="psearch-info-section">
                <h4>{t("plantSearch.uses")}</h4>
                <ul>{selectedPlant.medicinalUses.map((u, i) => <li key={i}>{u}</li>)}</ul>
              </div>
            )}

            {selectedPlant.interactions?.length > 0 && (
              <div className="psearch-info-section">
                <h4>{t("plantSearch.interactions")}</h4>
                <ul>{selectedPlant.interactions.map((u, i) => <li key={i}>{u}</li>)}</ul>
              </div>
            )}

            {/* ── Family Member Selection ── */}
            <div className="psearch-member-section">
              <h4>{t("plantSearch.selectMember")}</h4>
              {members.length === 0 ? (
                <p className="psearch-no-members">No family members found. <button onClick={() => navigate("/dashboard")}>Add one</button></p>
              ) : (
                <div className="psearch-member-list">
                  {members.map((m) => {
                    const mid = m._id || m.id;
                    const isSelected = (selectedMember?._id || selectedMember?.id) === mid;
                    return (
                      <button
                        key={mid}
                        className={`psearch-member-chip ${isSelected ? "active" : ""}`}
                        onClick={() => setSelectedMember(m)}
                      >
                        {m.name || "Unnamed"}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              className="psearch-check-btn"
              onClick={handleCheckSafety}
              disabled={isChecking || !selectedMember}
            >
              <Shield size={16} />
              {isChecking ? t("plantSearch.checking") : t("plantSearch.checkSafety")}
            </button>
          </div>
        )}

        {/* ── Safety Result ── */}
        {safetyResult && (
          <div className="psearch-safety-card">
            <div className="psearch-rating-banner" style={{ "--rating-color": RATING_COLORS[safetyResult.safetyRating] || "var(--accent)" }}>
              <span className="psearch-rating-text">{safetyResult.safetyRating}</span>
            </div>

            <p className="psearch-safety-for">
              <strong>{safetyResult.plantName}</strong> for <strong>{safetyResult.familyMemberName}</strong>
            </p>

            {safetyResult.warnings?.length > 0 && (
              <div className="psearch-safety-section">
                <h4>Warnings & Interactions</h4>
                <ul>{safetyResult.warnings.map((w, i) => <li key={i}>{w}</li>)}</ul>
              </div>
            )}

            {safetyResult.medicinalUses?.length > 0 && (
              <div className="psearch-safety-section">
                <h4>{t("plantSearch.uses")}</h4>
                <ul>{safetyResult.medicinalUses.map((u, i) => <li key={i}>{u}</li>)}</ul>
              </div>
            )}

            {safetyResult.preparationMethods?.length > 0 && (
              <div className="psearch-safety-section">
                <h4>{t("plantSearch.preparation")}</h4>
                <ul>{safetyResult.preparationMethods.map((p, i) => <li key={i}>{p}</li>)}</ul>
              </div>
            )}

            {safetyResult.recommendations?.length > 0 && (
              <div className="psearch-safety-section">
                <h4>Recommendations</h4>
                <ul>{safetyResult.recommendations.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}

            <div className="psearch-safety-actions">
              <button className="psearch-check-btn" onClick={resetSearch}>
                Search Another Plant
              </button>
              <button className="psearch-ghost-btn" onClick={() => navigate("/dashboard")}>
                {t("nav.dashboard")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantSearch;
