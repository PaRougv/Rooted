import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import FlashCard from "../helpers/FlashCard.jsx";
import BackButton from "./BackButton.jsx";
import "./PlantSafetyCheck.css";

const PlantSafetyCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { identification, capturedImage } = location.state || {};

  const [familyMembers, setFamilyMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [safetyResult, setSafetyResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoadingMembers, setIsLoadingMembers] = useState(true);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

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
      triggerFlash("Please select a family member", "error");
      return;
    }

    setIsChecking(true);
    try {
      const response = await axios.post(
        "/api/safety/check",
        {
          plantName,
          probability,
          familyMemberId: selectedMember._id || selectedMember.id
        },
        { withCredentials: true }
      );

      if (response.data?.success) {
        setSafetyResult(response.data.data);
        triggerFlash("Safety check completed!", "success");
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

  const getSafetyColor = (rating) => {
    switch (rating) {
      case "SAFE":
        return "#22c55e"; // Green
      case "CAUTION":
        return "#f59e0b"; // Orange/Yellow
      case "AVOID":
        return "#ef4444"; // Red
      default:
        return "#6b7280"; // Gray
    }
  };

  const getSafetyIcon = (rating) => {
    switch (rating) {
      case "SAFE":
        return "✅";
      case "CAUTION":
        return "⚠️";
      case "AVOID":
        return "❌";
      default:
        return "❓";
    }
  };

  if (!identification) {
    return (
      <div className="safety-page">
        <div className="safety-card">
          <h2>No plant identified</h2>
          <p>Please scan a plant first.</p>
          <button
            className="safety-btn safety-btn--primary"
            onClick={() => navigate("/camera")}
          >
            Go to Camera
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="safety-page">
      <BackButton to="/camera" label="Back to Camera" />
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
            <img
              src={capturedImage}
              alt="Captured plant"
              className="safety-plant-image"
            />
          )}
          <div className="safety-plant-info">
            <h3 className="safety-plant-name">{plantName}</h3>
            <p className="safety-confidence">
              Confidence: {(probability * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Family Member Selection */}
        {!safetyResult && (
          <div className="safety-member-section">
            <h3>👤 Select Family Member</h3>
            {isLoadingMembers ? (
              <p>Loading family members...</p>
            ) : familyMembers.length === 0 ? (
              <div className="safety-no-members">
                <p>No family members found.</p>
                <button
                  className="safety-btn safety-btn--secondary"
                  onClick={() => navigate("/dashboard")}
                >
                  Add Family Member
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
                    ? "Checking Safety..."
                    : "🔍 Check Safety for This Member"}
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
              style={{
                backgroundColor: getSafetyColor(safetyResult.safetyRating)
              }}
            >
              <span className="safety-rating-icon">
                {getSafetyIcon(safetyResult.safetyRating)}
              </span>
              <span className="safety-rating-text">
                {safetyResult.safetyRating}
              </span>
            </div>

            <div className="safety-for">
              For: <strong>{safetyResult.familyMemberName}</strong>
            </div>

            {/* Warnings */}
            {safetyResult.warnings && safetyResult.warnings.length > 0 && (
              <div className="safety-section">
                <h4>⚠️ Warnings & Interactions</h4>
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
                  <h4>🌱 Medicinal Uses</h4>
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
                  <h4>🍵 How to Use</h4>
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
                  <h4>📋 Recommendations</h4>
                  <ul className="safety-list safety-list--recommendations">
                    {safetyResult.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Action Buttons */}
            <div className="safety-actions">
              <button
                className="safety-btn safety-btn--secondary"
                onClick={() => setSafetyResult(null)}
              >
                Check Another Family Member
              </button>
              <button
                className="safety-btn safety-btn--primary"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantSafetyCheck;
