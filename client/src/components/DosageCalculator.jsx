import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../api.js";
import {
  Pill,
  User,
  Leaf,
  AlertTriangle,
  FlaskConical,
  Scale,
  Search,
  ChevronDown,
  Loader2,
} from "lucide-react";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./DosageCalculator.css";

const DosageCalculator = () => {
  const { t } = useTranslation();

  const [plants, setPlants] = useState([]);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [plantSearch, setPlantSearch] = useState("");
  const [showPlantDropdown, setShowPlantDropdown] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const triggerFlash = (message, type = "success") => {
    setFlashMessage(message);
    setFlashType(type);
    setShowFlash(true);
  };

  // Load plants and family members in parallel
  useEffect(() => {
    const load = async () => {
      try {
        const [plantsRes, membersRes] = await Promise.all([
          axios.get("/api/safety/plants", { withCredentials: true }),
          axios.get("/api/input/takeuser", { withCredentials: true }),
        ]);

        const plantList = plantsRes.data?.data || [];
        setPlants(plantList);

        const memberData = membersRes.data?.data || [];
        const members = Array.isArray(memberData)
          ? memberData
          : memberData
          ? [memberData]
          : [];
        setFamilyMembers(members);
      } catch (error) {
        console.error("Failed to load data:", error);
        triggerFlash(t("common.error"), "error");
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  const filteredPlants = plants.filter((p) => {
    const q = plantSearch.toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      (p.scientificName && p.scientificName.toLowerCase().includes(q)) ||
      (p.commonNames || []).some((cn) => cn.toLowerCase().includes(q))
    );
  });

  const handleSelectPlant = (plant) => {
    setSelectedPlant(plant);
    setPlantSearch(plant.name);
    setShowPlantDropdown(false);
    setResult(null);
  };

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setResult(null);
  };

  const getAgeCategory = (member) => {
    // Infer from weight as a heuristic if no age field
    const weight = Number(member.weight);
    if (weight && weight < 30) return t("dosageCalc.child");
    if (weight && weight > 0) return t("dosageCalc.adult");
    return t("dosageCalc.adult");
  };

  const handleCalculate = async () => {
    if (!selectedPlant) {
      triggerFlash(t("dosageCalc.selectPlant"), "error");
      return;
    }
    if (!selectedMember) {
      triggerFlash(t("dosageCalc.selectMember"), "error");
      return;
    }

    setIsCalculating(true);
    try {
      const response = await axios.post(
        "/api/safety/check",
        {
          plantName: selectedPlant.name,
          probability: 1,
          familyMemberId: selectedMember._id || selectedMember.id,
        },
        { withCredentials: true }
      );

      if (response.data?.success) {
        setResult(response.data.data);
      } else {
        triggerFlash(response.data?.message || t("common.error"), "error");
      }
    } catch (error) {
      console.error("Dosage calculation error:", error);
      triggerFlash(
        error.response?.data?.message || t("common.error"),
        "error"
      );
    } finally {
      setIsCalculating(false);
    }
  };

  // Extract dosage line from recommendations
  const getDosageInfo = () => {
    if (!result) return null;
    const dosageLine = result.recommendations?.find((r) =>
      r.includes("Dosage:")
    );
    // Also check the selected plant's dosage field directly
    return dosageLine || (selectedPlant?.dosage ? `📏 Dosage: ${selectedPlant.dosage}` : null);
  };

  if (isLoading) {
    return (
      <div className="dc-page">
        <div className="dc-loading">
          <Loader2 className="dc-spinner" size={32} />
          <p>{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dc-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <div className="dc-container">
        {/* Header */}
        <div className="dc-header">
          <Pill className="dc-header-icon" size={28} />
          <h1 className="dc-title">{t("dosageCalc.title")}</h1>
          <p className="dc-subtitle">{t("dosageCalc.subtitle")}</p>
        </div>

        {/* Plant Selection */}
        <div className="dc-card">
          <div className="dc-card-label">
            <Leaf size={16} />
            <span>{t("dosageCalc.selectPlant")}</span>
          </div>
          <div className="dc-plant-search">
            <Search className="dc-search-icon" size={16} />
            <input
              type="text"
              className="dc-input"
              placeholder={t("dosageCalc.selectPlant")}
              value={plantSearch}
              onChange={(e) => {
                setPlantSearch(e.target.value);
                setShowPlantDropdown(true);
                if (!e.target.value) setSelectedPlant(null);
              }}
              onFocus={() => setShowPlantDropdown(true)}
            />
            <ChevronDown
              className={`dc-chevron ${showPlantDropdown ? "dc-chevron--open" : ""}`}
              size={16}
            />
            {showPlantDropdown && (
              <div className="dc-dropdown">
                {filteredPlants.length === 0 ? (
                  <div className="dc-dropdown-empty">
                    {t("dashboard.noResults")}
                  </div>
                ) : (
                  filteredPlants.slice(0, 30).map((plant) => (
                    <button
                      key={plant.name}
                      className={`dc-dropdown-item ${
                        selectedPlant?.name === plant.name ? "dc-dropdown-item--active" : ""
                      }`}
                      onClick={() => handleSelectPlant(plant)}
                    >
                      <span className="dc-dropdown-name">{plant.name}</span>
                      {plant.scientificName && (
                        <span className="dc-dropdown-sci">
                          {plant.scientificName}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Family Member Selection */}
        <div className="dc-card">
          <div className="dc-card-label">
            <User size={16} />
            <span>{t("dosageCalc.selectMember")}</span>
          </div>
          {familyMembers.length === 0 ? (
            <p className="dc-no-members">{t("safetyCheck.noMembers")}</p>
          ) : (
            <div className="dc-member-list">
              {familyMembers.map((member) => {
                const memberId = member._id || member.id;
                const currentId = selectedMember?._id || selectedMember?.id;
                const isSelected = memberId === currentId;
                return (
                  <button
                    key={memberId}
                    className={`dc-member-chip ${isSelected ? "dc-member-chip--active" : ""}`}
                    onClick={() => handleSelectMember(member)}
                  >
                    <span className="dc-member-name">
                      {member.name || "Unnamed"}
                    </span>
                    {member.weight && (
                      <span className="dc-member-meta">
                        {member.weight} kg
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Calculate Button */}
        <button
          className="dc-calculate-btn"
          onClick={handleCalculate}
          disabled={isCalculating || !selectedPlant || !selectedMember}
        >
          {isCalculating ? (
            <>
              <Loader2 className="dc-spinner" size={18} />
              {t("common.loading")}
            </>
          ) : (
            <>
              <Scale size={18} />
              {t("dosageCalc.calculate")}
            </>
          )}
        </button>

        {/* Result */}
        {result && (
          <div className="dc-result-card">
            <div
              className="dc-result-banner"
              data-rating={result.safetyRating}
            >
              <span className="dc-result-rating">{result.safetyRating}</span>
            </div>

            <div className="dc-result-header">
              <h3 className="dc-result-plant">{result.plantName}</h3>
              <p className="dc-result-for">
                {t("safetyCheck.for")}{" "}
                <strong>{result.familyMemberName}</strong>
                {selectedMember?.weight && (
                  <span className="dc-result-weight">
                    {" "}
                    ({t("dosageCalc.weight")}: {selectedMember.weight} kg
                    {" · "}
                    {getAgeCategory(selectedMember)})
                  </span>
                )}
              </p>
            </div>

            {/* Dosage Section */}
            {getDosageInfo() && (
              <div className="dc-result-section dc-result-dosage">
                <h4>
                  <Pill size={15} />
                  {t("dosageCalc.result")}
                </h4>
                <p className="dc-dosage-text">
                  {getDosageInfo().replace(/^📏\s*Dosage:\s*/, "")}
                </p>
              </div>
            )}

            {/* Warnings */}
            {result.warnings?.length > 0 && (
              <div className="dc-result-section">
                <h4>
                  <AlertTriangle size={15} />
                  {t("safetyCheck.warnings")}
                </h4>
                <ul className="dc-list dc-list--warnings">
                  {result.warnings.map((warning, i) => (
                    <li key={i}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Medicinal Uses */}
            {result.medicinalUses?.length > 0 && (
              <div className="dc-result-section">
                <h4>
                  <Leaf size={15} />
                  {t("safetyCheck.uses")}
                </h4>
                <ul className="dc-list">
                  {result.medicinalUses.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preparation Methods */}
            {result.preparationMethods?.length > 0 && (
              <div className="dc-result-section">
                <h4>
                  <FlaskConical size={15} />
                  {t("safetyCheck.howToUse")}
                </h4>
                <ul className="dc-list">
                  {result.preparationMethods.map((method, i) => (
                    <li key={i}>{method}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations (excluding dosage since it's shown separately) */}
            {result.recommendations?.filter((r) => !r.includes("Dosage:"))
              .length > 0 && (
              <div className="dc-result-section">
                <h4>{t("safetyCheck.recommendations")}</h4>
                <ul className="dc-list dc-list--recommendations">
                  {result.recommendations
                    .filter((r) => !r.includes("Dosage:"))
                    .map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div className="dc-disclaimer">
          <AlertTriangle size={16} />
          <p>{t("dosageCalc.disclaimer")}</p>
        </div>
      </div>
    </div>
  );
};

export default DosageCalculator;
