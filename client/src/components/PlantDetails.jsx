import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "./BackButton.jsx";
import "./PlantDetails.css";

const getPlantName = (suggestion) => {
  const details = suggestion?.details || suggestion?.plant_details || suggestion;
  const commonNames = details?.common_names || details?.common_name;
  if (Array.isArray(commonNames) && commonNames[0]) return commonNames[0];
  if (typeof commonNames === "string") return commonNames;
  return suggestion?.name || suggestion?.plant_name || suggestion?.scientific_name || null;
};

const getDescription = (details) => {
  const desc = details?.description || details?.wiki_description;
  if (typeof desc === "string") return desc;
  return desc?.value || null;
};

const PlantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { identification, selectedIndex = 0, capturedImage } = location.state || {};

  const getSuggestions = () => {
    if (!identification) return [];
    const result = identification?.result || identification;
    const classification = result?.classification || result;
    const suggestions = classification?.suggestions || result?.suggestions || identification?.suggestions || [];
    return Array.isArray(suggestions) ? suggestions : [];
  };

  const suggestions = getSuggestions();
  const suggestion = suggestions[selectedIndex];
  const details = suggestion?.details || suggestion?.plant_details || {};
  const description = getDescription(details);
  const taxonomy = details?.taxonomy || (details?.structured_name ? { genus: details.structured_name.genus, family: details.scientific_name?.split(" ")[0] } : null);
  const wikiUrl = details?.url;
  const commonNames = details?.common_names || details?.common_name;
  const plantImage = details?.image?.value || suggestion?.similar_images?.[0]?.url;

  if (!suggestion) {
    return (
      <main className="plant-details-page">
        <BackButton to="/camera" className="back-button--fixed" />
        <div className="plant-details-card">
          <p className="plant-details-empty">No plant data found. Identify a plant from the camera first.</p>
          <button type="button" className="plant-details-btn" onClick={() => navigate("/camera")}>
            Go to Camera
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="plant-details-page">
      <BackButton to="/camera" className="back-button--fixed" />
      <div className="plant-details-card">
        <header className="plant-details-header">
          <h1>{getPlantName(suggestion) || suggestion.name || "Unknown Plant"}</h1>
          {suggestion.name && getPlantName(suggestion) !== suggestion.name && (
            <p className="plant-details-scientific">{suggestion.name}</p>
          )}
          {suggestion.probability != null && (
            <span className="plant-details-match">{(suggestion.probability * 100).toFixed(0)}% match</span>
          )}
        </header>

        <div className="plant-details-content">
          {(capturedImage || plantImage) && (
            <div className="plant-details-image-wrap">
              <img
                src={capturedImage || plantImage}
                alt={getPlantName(suggestion)}
                className="plant-details-image"
              />
            </div>
          )}

          {taxonomy && (
            <section className="plant-details-section">
              <h2>Taxonomy</h2>
              <div className="plant-details-taxonomy">
                {taxonomy.genus && <span><strong>Genus:</strong> {taxonomy.genus}</span>}
                {taxonomy.family && <span><strong>Family:</strong> {taxonomy.family}</span>}
                {taxonomy.order && <span><strong>Order:</strong> {taxonomy.order}</span>}
                {taxonomy.class && <span><strong>Class:</strong> {taxonomy.class}</span>}
              </div>
            </section>
          )}

          {Array.isArray(commonNames) && commonNames.length > 1 && (
            <section className="plant-details-section">
              <h2>Also known as</h2>
              <p>{commonNames.join(", ")}</p>
            </section>
          )}

          {description && (
            <section className="plant-details-section">
              <h2>Description</h2>
              <p className="plant-details-desc">{description}</p>
            </section>
          )}

          {wikiUrl && (
            <a
              href={wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="plant-details-wiki-link"
            >
              Read more on Wikipedia →
            </a>
          )}

          {suggestions.length > 1 && (
            <section className="plant-details-section plant-details-others">
              <h2>Other possibilities</h2>
              <ul>
                {suggestions.slice(1, 5).map((s, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className="plant-details-other-btn"
                      onClick={() => navigate("/plant", { state: { identification, selectedIndex: i + 1, capturedImage } })}
                    >
                      {getPlantName(s) || s.name} ({(s.probability * 100).toFixed(0)}%)
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default PlantDetails;
