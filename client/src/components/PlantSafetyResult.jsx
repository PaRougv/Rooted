import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./PlantSafetyCheck.css";
import { AlertTriangle, Leaf, FlaskConical, ClipboardList, User, Sparkles } from "lucide-react";

const PlantSafetyResult = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const initialState = location.state || {};
  
  const [plantData] = useState(initialState.plantData);
  const [capturedImage] = useState(initialState.capturedImage);
  const [safetyData, setSafetyData] = useState(initialState.safetyData);
  const [currentFamilyMember, setCurrentFamilyMember] = useState(initialState.familyMember);
  const [scientificName, setScientificName] = useState(initialState.safetyData?.scientificName || null);
  const [commonNames, setCommonNames] = useState(initialState.safetyData?.commonNames || []);
  
  const [familyMembers, setFamilyMembers] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [aiSummary, setAiSummary] = useState("");
  const [isFetchingSummary, setIsFetchingSummary] = useState(false);

  // Load all family members
  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        const response = await axios.get("/api/input/takeuser", {
          withCredentials: true
        });
        const data = response.data?.data || [];
        const members = Array.isArray(data) ? data : data ? [data] : [];
        setFamilyMembers(members);
      } catch (error) {
        console.error("Failed to load family members:", error);
      }
    };
    loadFamilyMembers();
  }, []);

  const triggerFlash = (message, type = "success") => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  const handleCheckForMember = async (member) => {
    if (!member || (member._id || member.id) === (currentFamilyMember?._id || currentFamilyMember?.id)) return;
    
    setIsChecking(true);
    try {
      const response = await axios.post(
        "/api/safety/check",
        {
          plantName: plantData.plant.name,
          probability: plantData.plant.probability,
          familyMemberId: member._id || member.id
        },
        { withCredentials: true }
      );

      if (response.data?.success) {
        const data = response.data.data;
        setSafetyData(data);
        setCurrentFamilyMember(member);
        if (data.scientificName) setScientificName(data.scientificName);
        if (data.commonNames?.length) setCommonNames(data.commonNames);
        triggerFlash(`Safety checked for ${member.name}!`, "success");
      } else {
        triggerFlash(response.data?.message || "Safety check failed", "error");
      }
    } catch (error) {
      console.error(error);
      triggerFlash("Failed to check safety. Please try again.", "error");
    } finally {
      setIsChecking(false);
    }
  };

  const handleGetSummary = async () => {
    const memberId = currentFamilyMember?._id || currentFamilyMember?.id;
    if (!memberId || !safetyData) return;
    setIsFetchingSummary(true);
    setAiSummary("");
    try {
      const response = await axios.post(
        "/api/input/summary",
        {
          familyMemberId: memberId,
          plantName: plantData.plant.name,
          safetyRating: safetyData.safetyRating,
          warnings: safetyData.warnings,
          medicinalUses: safetyData.medicinalUses,
        },
        { withCredentials: true }
      );
      if (response.data?.success) {
        setAiSummary(response.data.data.summary);
      } else {
        triggerFlash(response.data?.message || "Failed to generate summary", "error");
      }
    } catch (error) {
      triggerFlash(
        error.response?.data?.message || "Failed to generate summary",
        "error"
      );
    } finally {
      setIsFetchingSummary(false);
    }
  };

  // Clear summary when switching family members
  const handleCheckForMemberWithReset = (member) => {
    setAiSummary("");
    handleCheckForMember(member);
  };

  if (!plantData || !safetyData) {
    return (
      <div className="safety-page">
        <div className="safety-card">
          <h2>{t("safetyCheck.noData")}</h2>
          <p>{t("safetyCheck.scanFirst")}</p>
          <button
            className="safety-btn safety-btn--primary"
            onClick={() => navigate("/dashboard")}
          >
            {t("nav.dashboard")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="safety-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <div className="safety-container">
        {/* Plant Info Card */}
        <div className="safety-plant-card">
          <h2 className="safety-title">{t("safetyCheck.plantIdentified")}</h2>
          {capturedImage && (
            <img src={capturedImage} alt="Captured plant" className="safety-plant-image" />
          )}
          <div className="safety-plant-info">
            {/* Common name: prefer Plant.id common names, fall back to scientific name */}
            <h3 className="safety-plant-name">
              {plantData.plant.commonNames?.[0] || plantData.plant.name}
            </h3>
            {/* Scientific name always in italics */}
            <p className="safety-scientific-name">
              <em>{plantData.plant.name}</em>
            </p>
            {/* Additional common names from Plant.id or our DB */}
            {(() => {
              const apiAlt = (plantData.plant.commonNames || []).slice(1);
              const dbNames = commonNames.filter(
                n => n.toLowerCase() !== (plantData.plant.commonNames?.[0] || "").toLowerCase()
              );
              const all = [...new Set([...apiAlt, ...dbNames])];
              return all.length > 0 ? (
                <p className="safety-common-names">({all.join(", ")})</p>
              ) : null;
            })()}
            <p className="safety-confidence">
              {t("safetyCheck.confidence")} {(plantData.plant.probability * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Family Member Selector */}
        {familyMembers.length > 1 && (
          <div className="safety-member-selector-card">
            <h4>{t("safetyCheck.checkForMember")}</h4>
            {isChecking ? (
              <div className="safety-checking">{t("safetyCheck.checking")}</div>
            ) : (
              <div className="safety-member-chips">
                {familyMembers.map((member) => {
                  const memberId = member._id || member.id;
                  const currentId = currentFamilyMember?._id || currentFamilyMember?.id;
                  const isCurrent = memberId === currentId;
                  return (
                    <button
                      key={memberId}
                      className={`safety-member-chip ${isCurrent ? 'active' : ''}`}
                      onClick={() => handleCheckForMemberWithReset(member)}
                      disabled={isCurrent}
                    >
                      {member.name || "Unnamed"}
                      {isCurrent && <span className="current-badge">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Safety Result Card */}
        <div className="safety-result-card">
          <div
            className="safety-rating-banner"
            data-rating={safetyData.safetyRating}
          >
            <span className="safety-rating-text">{safetyData.safetyRating}</span>
          </div>

          <div className="safety-for">
            {t("safetyCheck.for")} <strong>{safetyData.familyMemberName || currentFamilyMember?.name}</strong>
          </div>

          {/* Warnings */}
          {safetyData.warnings?.length > 0 && (
            <div className="safety-section">
              <h4>{t("safetyCheck.warnings")}</h4>
              <ul className="safety-list safety-list--warnings">
                {safetyData.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Medicinal Uses */}
          {safetyData.medicinalUses?.length > 0 && (
            <div className="safety-section">
              <h4>{t("safetyCheck.uses")}</h4>
              <ul className="safety-list">
                {safetyData.medicinalUses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Preparation Methods */}
          {safetyData.preparationMethods?.length > 0 && (
            <div className="safety-section">
              <h4>{t("safetyCheck.howToUse")}</h4>
              <ul className="safety-list">
                {safetyData.preparationMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {safetyData.recommendations?.length > 0 && (
            <div className="safety-section">
              <h4>{t("safetyCheck.recommendations")}</h4>
              <ul className="safety-list safety-list--recommendations">
                {safetyData.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* AI Summary */}
          {aiSummary && (
            <div className="safety-section safety-ai-summary">
              <h4>
                <Sparkles size={14} />
                {t("safetyCheck.aiSummary")}
              </h4>
              <p className="safety-ai-summary-text">{aiSummary}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="safety-actions">
            <button
              className="safety-btn safety-btn--ai"
              onClick={handleGetSummary}
              disabled={isFetchingSummary}
            >
              <Sparkles size={15} />
              {isFetchingSummary ? t("safetyCheck.generating") : aiSummary ? t("safetyCheck.regenerate") : t("safetyCheck.getSummary")}
            </button>
            <button
              className="safety-btn safety-btn--secondary"
              onClick={() => navigate("/camera", { state: { selectedFamilyMember: currentFamilyMember } })}
            >
              {t("safetyCheck.scanAnother")}
            </button>
            <button
              className="safety-btn safety-btn--primary"
              onClick={() => navigate("/dashboard")}
            >
              {t("nav.dashboard")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantSafetyResult;
