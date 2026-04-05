import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "../api.js";
import { Sparkles } from "lucide-react";
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";
import "./PlantSafetyCheck.css";

const PlantSafetyCheck = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { identification, capturedImage, selectedLocation } = location.state || {};

  const [familyMembers, setFamilyMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [safetyResult, setSafetyResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoadingMembers, setIsLoadingMembers] = useState(true);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [aiSummary, setAiSummary] = useState("");
  const [isFetchingSummary, setIsFetchingSummary] = useState(false);

  const plantName = identification?.plant?.name || "Unknown Plant";
  const probability = identification?.plant?.probability || 0;

  const triggerFlash = (message, type = "success") => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  // Load family members
  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        const response = await axios.get("/api/input/takeuser", {
          withCredentials: true
        });
        const data = response.data?.data || [];
        const members = Array.isArray(data) ? data : data ? [data] : [];
        setFamilyMembers(members);
        if (members.length > 0) {
          setSelectedMember(members[0]);
        }
      } catch (error) {
        console.error(error);
        triggerFlash("Failed to load family members", "error");
      } finally {
        setIsLoadingMembers(false);
      }
    };

    loadFamilyMembers();
  }, []);

  const handleCheckSafety = async () => {
    if (!selectedMember) {
      triggerFlash(t("safetyCheck.pleaseSelect"), "error");
      return;
    }

    setIsChecking(true);
    try {
      const response = await axios.post(
        "/api/safety/check",
        {
          plantName,
          probability,
          familyMemberId: selectedMember._id || selectedMember.id,
          lat: selectedLocation?.lat ?? null,
          lng: selectedLocation?.lng ?? null
        },
        { withCredentials: true }
      );

      if (response.data?.success) {
        setSafetyResult(response.data.data);
        triggerFlash(t("safetyCheck.completed"), "success");
      } else {
        triggerFlash(response.data?.message || "Safety check failed", "error");
      }
    } catch (error) {
      console.error(error);
      triggerFlash(
        error.response?.data?.message || "Failed to check safety",
        "error"
      );
    } finally {
      setIsChecking(false);
    }
  };

  const handleGetSummary = async () => {
    if (!safetyResult || !selectedMember) return;
    setIsFetchingSummary(true);
    setAiSummary("");
    try {
      const response = await axios.post(
        "/api/input/summary",
        {
          familyMemberId: selectedMember._id || selectedMember.id,
          plantName,
          safetyRating: safetyResult.safetyRating,
          warnings: safetyResult.warnings,
          medicinalUses: safetyResult.medicinalUses,
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

  if (!identification) {
    return (
      <div className="safety-page">
        <div className="safety-card">
          <h2>{t("safetyCheck.noPlant")}</h2>
          <p>{t("safetyCheck.scanFirst")}</p>
          <button
            className="safety-btn safety-btn--primary"
            onClick={() => navigate("/camera")}
          >
            {t("safetyCheck.goCamera")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="safety-page">
      <BackButton to="/camera" label={t("safetyCheck.backCamera")} />
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
            <img
              src={capturedImage}
              alt="Captured plant"
              className="safety-plant-image"
            />
          )}
          <div className="safety-plant-info">
            <h3 className="safety-plant-name">{plantName}</h3>
            <p className="safety-confidence">
              {t("safetyCheck.confidence")} {(probability * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Family Member Selection */}
        {!safetyResult && (
          <div className="safety-member-section">
            <h3>{t("safetyCheck.selectMember")}</h3>
            {isLoadingMembers ? (
              <p>{t("safetyCheck.loadingMembers")}</p>
            ) : familyMembers.length === 0 ? (
              <div className="safety-no-members">
                <p>{t("safetyCheck.noMembers")}</p>
                <button
                  className="safety-btn safety-btn--secondary"
                  onClick={() => navigate("/dashboard")}
                >
                  {t("dashboard.addFamily")}
                </button>
              </div>
            ) : (
              <>
                <div className="safety-member-list">
                  {familyMembers.map((member) => (
                    <div
                      key={member._id || member.id}
                      className={`safety-member-card ${
                        selectedMember?._id === member._id ||
                        selectedMember?.id === member.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => setSelectedMember(member)}
                    >
                      <span className="safety-member-name">
                        {member.name || "Unnamed"}
                      </span>
                      {member.anyOtherCondition && (
                        <span className="safety-member-condition">
                          {member.anyOtherCondition}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="safety-btn safety-btn--primary"
                  onClick={handleCheckSafety}
                  disabled={isChecking || !selectedMember}
                >
                  {isChecking
                    ? t("safetyCheck.checking")
                    : t("safetyCheck.checkBtn")}
                </button>
              </>
            )}
          </div>
        )}

        {/* Safety Result */}
        {safetyResult && (
          <div className="safety-result-card">
            <div
              className="safety-rating-banner"
              data-rating={safetyResult.safetyRating}
            >
              <span className="safety-rating-text">
                {safetyResult.safetyRating}
              </span>
            </div>

            <div className="safety-for">
              {t("safetyCheck.for")} <strong>{safetyResult.familyMemberName}</strong>
            </div>

            {/* Warnings */}
            {safetyResult.warnings && safetyResult.warnings.length > 0 && (
              <div className="safety-section">
                <h4>{t("safetyCheck.warnings")}</h4>
                <ul className="safety-list safety-list--warnings">
                  {safetyResult.warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Medicinal Uses */}
            {safetyResult.medicinalUses &&
              safetyResult.medicinalUses.length > 0 && (
                <div className="safety-section">
                  <h4>{t("safetyCheck.uses")}</h4>
                  <ul className="safety-list">
                    {safetyResult.medicinalUses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Preparation Methods */}
            {safetyResult.preparationMethods &&
              safetyResult.preparationMethods.length > 0 && (
                <div className="safety-section">
                  <h4>{t("safetyCheck.howToUse")}</h4>
                  <ul className="safety-list">
                    {safetyResult.preparationMethods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Recommendations */}
            {safetyResult.recommendations &&
              safetyResult.recommendations.length > 0 && (
                <div className="safety-section">
                  <h4>{t("safetyCheck.recommendations")}</h4>
                  <ul className="safety-list safety-list--recommendations">
                    {safetyResult.recommendations.map((rec, index) => (
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
                onClick={() => { setSafetyResult(null); setAiSummary(""); }}
              >
                {t("safetyCheck.checkAnother")}
              </button>
              <button
                className="safety-btn safety-btn--primary"
                onClick={() => navigate("/dashboard")}
              >
                {t("nav.dashboard")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantSafetyCheck;
