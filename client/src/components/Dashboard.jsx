import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FlashCard from "../helpers/FlashCard.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bloodpressure, setBloodPressure] = useState("");
  const [heartrate, setHeartRate] = useState("");
  const [anyothercondition, setAnyOtherCondition] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const handleSaveInfo = (e) => {
    e.preventDefault();
    setFlashMessage("Personal information saved locally");
    setFlashType("success");
    setShowFlash(true);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/logout", {
        withCredentials: true
      });
      console.log(response.data);
      setFlashMessage("Logged out successfully");
      setFlashType("success");
      setShowFlash(true);
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setFlashMessage(error.response?.data?.message || "Logout failed");
      setFlashType("error");
      setShowFlash(true);
    }
  };

  return (
    <main className="dashboard-page">
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <section className="dashboard-card">
        <button
          type="button"
          className="dashboard-top-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

        <header className="dashboard-header">
          <p className="dashboard-kicker">Rooted Dashboard</p>
          <h1>Your Green Control Center</h1>
          <p>Start by adding your personal details, open camera, or continue with maps later.</p>
        </header>

        <div className="dashboard-actions">
          <button
            type="button"
            className="dashboard-btn dashboard-btn--primary"
            onClick={() => setShowInfoForm((prev) => !prev)}
          >
            {showInfoForm ? "Close Personal Information" : "Add Personal Information"}
          </button>

          <button
            type="button"
            className="dashboard-btn dashboard-btn--secondary"
            onClick={() => navigate("/camera")}
          >
            Open Camera
          </button>

          <button type="button" className="dashboard-btn dashboard-btn--ghost">
            Maps
          </button>
        </div>

        {showInfoForm && (
          <form className="dashboard-form" onSubmit={handleSaveInfo}>
            <label className="dashboard-field">
              <span>Weight</span>
              <input
                type="text"
                placeholder="Enter your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <label className="dashboard-field">
              <span>Height</span>
              <input
                type="text"
                placeholder="Enter Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>

            <label className="dashboard-field">
              <span>BloodPressure</span>
              <input
                type="text"
                placeholder="Enter your BloodPressure"
                value={bloodpressure}
                onChange={(e) => setBloodPressure(e.target.value)}
              />
            </label>

            <label className="dashboard-field">
              <span>HeartRate</span>
              <input
                type="text"
                placeholder="Enter your HeartRate"
                value={heartrate}
                onChange={(e) => setHeartRate(e.target.value)}
              />
            </label>

            <label className="dashboard-field">
              <span>AnyOtherCondition</span>
              <input
                type="text"
                placeholder="AnyOtherCondition ? Eg: Pregnancy , Dibeties "
                value={anyothercondition}
                onChange={(e) => setAnyOtherCondition(e.target.value)}
              />
            </label>

            <button type="submit" className="dashboard-save-btn">Save Information</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
