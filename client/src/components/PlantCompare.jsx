import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api.js";
import { GitCompare, Search, ChevronDown, Shield, AlertTriangle, Leaf, Pill } from "lucide-react";
import BackButton from "./BackButton.jsx";
import "./PlantCompare.css";

const PlantCompare = () => {
  const { t } = useTranslation();
  const [allPlants, setAllPlants] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [plantA, setPlantA] = useState(null);
  const [plantB, setPlantB] = useState(null);
  const [searchA, setSearchA] = useState("");
  const [searchB, setSearchB] = useState("");
  const [focusA, setFocusA] = useState(false);
  const [focusB, setFocusB] = useState(false);
  const [safetyA, setSafetyA] = useState(null);
  const [safetyB, setSafetyB] = useState(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get("/api/safety/plants", { withCredentials: true }),
      axios.get("/api/input/takeuser", { withCredentials: true }),
    ]).then(([pRes, mRes]) => {
      setAllPlants(pRes.data?.data || []);
      const raw = mRes.data?.data || [];
      const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
      setMembers(list);
      if (list.length) setSelectedMember(list[0]);
    });
  }, []);

  const filteredA = searchA.trim().length >= 1
    ? allPlants.filter((p) => p.name.toLowerCase().includes(searchA.toLowerCase())).slice(0, 8)
    : [];

  const filteredB = searchB.trim().length >= 1
    ? allPlants.filter((p) => p.name.toLowerCase().includes(searchB.toLowerCase())).slice(0, 8)
    : [];

  const selectPlant = (plant, side) => {
    if (side === "A") { setPlantA(plant); setSearchA(plant.name); setFocusA(false); }
    else { setPlantB(plant); setSearchB(plant.name); setFocusB(false); }
    setSafetyA(null); setSafetyB(null);
  };

  const handleCompare = async () => {
    if (!plantA || !plantB || !selectedMember) return;
    setChecking(true);
    setSafetyA(null); setSafetyB(null);
    try {
      const [resA, resB] = await Promise.all([
        axios.post("/api/safety/check", {
          plantName: plantA.name, probability: 1,
          familyMemberId: selectedMember._id || selectedMember.id,
        }, { withCredentials: true }),
        axios.post("/api/safety/check", {
          plantName: plantB.name, probability: 1,
          familyMemberId: selectedMember._id || selectedMember.id,
        }, { withCredentials: true }),
      ]);
      if (resA.data?.success) setSafetyA(resA.data.data);
      if (resB.data?.success) setSafetyB(resB.data.data);
    } catch { /* silent */ }
    finally { setChecking(false); }
  };

  const RATING_COLOR = { SAFE: "var(--color-safe)", CAUTION: "var(--color-caution)", AVOID: "var(--color-avoid)" };

  const renderSide = (plant, safety) => {
    if (!plant) return <div className="cmp-empty">Select a plant</div>;
    return (
      <div className="cmp-side-content">
        <h3 className="cmp-plant-name">{plant.name}</h3>
        {plant.scientificName && <p className="cmp-sci">{plant.scientificName}</p>}

        {safety && (
          <div className="cmp-rating" style={{ "--rc": RATING_COLOR[safety.safetyRating] || "var(--accent)" }}>
            <Shield size={14} /> {safety.safetyRating}
          </div>
        )}

        {/* Uses */}
        {plant.medicinalUses?.length > 0 && (
          <div className="cmp-info">
            <h4><Leaf size={13} /> {t("plantSearch.uses")}</h4>
            <ul>{plant.medicinalUses.map((u, i) => <li key={i}>{u}</li>)}</ul>
          </div>
        )}

        {/* Interactions */}
        {(safety?.warnings || plant.interactions)?.length > 0 && (
          <div className="cmp-info">
            <h4><Pill size={13} /> {t("plantSearch.interactions")}</h4>
            <ul>{(safety ? safety.warnings : plant.interactions).map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>
        )}

        {/* Contraindications */}
        {plant.contraindications?.length > 0 && !safety && (
          <div className="cmp-info">
            <h4><AlertTriangle size={13} /> {t("plantSearch.contraindications")}</h4>
            <ul>{plant.contraindications.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        )}

        {/* Recommendations */}
        {safety?.recommendations?.length > 0 && (
          <div className="cmp-info">
            <h4>Recommendations</h4>
            <ul>{safety.recommendations.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </div>
        )}

        {/* Preparation */}
        {plant.preparationMethods?.length > 0 && (
          <div className="cmp-info">
            <h4>{t("plantSearch.preparation")}</h4>
            <ul>{plant.preparationMethods.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="cmp-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      <div className="cmp-container">
        <header className="cmp-header">
          <p className="cmp-kicker">Rooted</p>
          <h1>{t("compare.title")}</h1>
          <p>{t("compare.subtitle")}</p>
        </header>

        {/* ── Search pickers ── */}
        <div className="cmp-pickers">
          {/* Plant A */}
          <div className="cmp-picker">
            <label>{t("compare.plant1")}</label>
            <div className="cmp-search-wrap">
              <Search size={14} className="cmp-search-icon" />
              <input
                type="text" value={searchA} placeholder={t("compare.selectPlant")}
                onChange={(e) => { setSearchA(e.target.value); setPlantA(null); setSafetyA(null); setSafetyB(null); }}
                onFocus={() => setFocusA(true)} onBlur={() => setTimeout(() => setFocusA(false), 200)}
              />
            </div>
            {focusA && filteredA.length > 0 && (
              <ul className="cmp-dropdown">{filteredA.map((p) => (
                <li key={p.name} onMouseDown={() => selectPlant(p, "A")}>{p.name}</li>
              ))}</ul>
            )}
          </div>

          <span className="cmp-vs">{t("compare.vs")}</span>

          {/* Plant B */}
          <div className="cmp-picker">
            <label>{t("compare.plant2")}</label>
            <div className="cmp-search-wrap">
              <Search size={14} className="cmp-search-icon" />
              <input
                type="text" value={searchB} placeholder={t("compare.selectPlant")}
                onChange={(e) => { setSearchB(e.target.value); setPlantB(null); setSafetyA(null); setSafetyB(null); }}
                onFocus={() => setFocusB(true)} onBlur={() => setTimeout(() => setFocusB(false), 200)}
              />
            </div>
            {focusB && filteredB.length > 0 && (
              <ul className="cmp-dropdown">{filteredB.map((p) => (
                <li key={p.name} onMouseDown={() => selectPlant(p, "B")}>{p.name}</li>
              ))}</ul>
            )}
          </div>
        </div>

        {/* ── Member selector + compare button ── */}
        {plantA && plantB && (
          <div className="cmp-action-bar">
            {members.length > 0 && (
              <div className="cmp-member-row">
                <span>Check safety for:</span>
                <div className="cmp-member-chips">
                  {members.map((m) => {
                    const mid = m._id || m.id;
                    const active = (selectedMember?._id || selectedMember?.id) === mid;
                    return (
                      <button key={mid} className={`cmp-member-chip ${active ? "active" : ""}`}
                        onClick={() => { setSelectedMember(m); setSafetyA(null); setSafetyB(null); }}>
                        {m.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <button className="cmp-compare-btn" onClick={handleCompare} disabled={checking || !selectedMember}>
              <GitCompare size={16} />
              {checking ? "Comparing..." : `Compare for ${selectedMember?.name || "..."}`}
            </button>
          </div>
        )}

        {/* ── Side-by-side results ── */}
        {(plantA || plantB) && (
          <div className="cmp-results">
            <div className="cmp-side">{renderSide(plantA, safetyA)}</div>
            <div className="cmp-divider" />
            <div className="cmp-side">{renderSide(plantB, safetyB)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCompare;
