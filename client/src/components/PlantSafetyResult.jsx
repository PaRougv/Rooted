import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./PlantSafetyCheck.css";

const PlantSafetyResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialState = location.state || {};
  
  const [plantData] = useState(initialState.plantData);
  const [capturedImage] = useState(initialState.capturedImage);
  const [safetyData, setSafetyData] = useState(initialState.safetyData);
  const [currentFamilyMember, setCurrentFamilyMember] = useState(initialState.familyMember);
  
  const [familyMembers, setFamilyMembers] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

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
        setSafetyData(response.data.data);
        setCurrentFamilyMember(member);
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

  if (!plantData || !safetyData) {
    return (
      <div className="safety-page">
        <div className="safety-card">
          <h2>No safety data available</h2>
          <p>Please scan a plant first.</p>
          <button
            className="safety-btn safety-btn--primary"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getSafetyColor = (rating) => {
    switch (rating) {
      case "SAFE": return "#22c55e";
      case "CAUTION": return "#f59e0b";
      case "AVOID": return "#ef4444";
      default: return "#6b7280";
    }
  };

  const getSafetyIcon = (rating) => {
    switch (rating) {
      case "SAFE": return "✅";
      case "CAUTION": return "⚠️";
      case "AVOID": return "❌";
      default: return "❓";
    }
  };

  return (
    <div className="safety-page">
      <BackButton to="/dashboard" label="Back to Dashboard" />
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <div className="safety-container">
        {/* Plant Info Card */}
        <div className="safety-plant-card">
          <h2 className="safety-title">🌿 Plant Identified</h2>
          {capturedImage && (
            <img src={capturedImage} alt="Captured plant" className="safety-plant-image" />
          )}
          <div className="safety-plant-info">
            <h3 className="safety-plant-name">{plantData.plant.name}</h3>
            <p className="safety-confidence">
              Confidence: {(plantData.plant.probability * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Family Member Selector */}
        {familyMembers.length > 1 && (
          <div className="safety-member-selector-card">
            <h4>👤 Check this plant for:</h4>
            {isChecking ? (
              <div className="safety-checking">Checking safety...</div>
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
                      onClick={() => handleCheckForMember(member)}
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
            style={{ backgroundColor: getSafetyColor(safetyData.safetyRating) }}
          >
            <span className="safety-rating-icon">{getSafetyIcon(safetyData.safetyRating)}</span>
            <span className="safety-rating-text">{safetyData.safetyRating}</span>
          </div>

          <div className="safety-for">
            For: <strong>{safetyData.familyMemberName || currentFamilyMember?.name}</strong>
          </div>

          {/* Warnings */}
          {safetyData.warnings?.length > 0 && (
            <div className="safety-section">
              <h4>⚠️ Warnings & Interactions</h4>
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
              <h4>🌱 Medicinal Uses</h4>
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
              <h4>🍵 How to Use</h4>
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
              <h4>📋 Recommendations</h4>
              <ul className="safety-list safety-list--recommendations">
                {safetyData.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="safety-actions">
            <button
              className="safety-btn safety-btn--secondary"
              onClick={() => navigate("/camera", { state: { selectedFamilyMember: currentFamilyMember } })}
            >
              Scan Another Plant
            </button>
            <button
              className="safety-btn safety-btn--primary"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantSafetyResult;
