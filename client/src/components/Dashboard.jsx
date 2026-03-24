import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FlashCard from "../helpers/FlashCard.jsx";
import "./Dashboard.css";

const API_BASE = "/api/input/takeuser";

const emptyForm = () => ({
  name: "",
  weight: "",
  height: "",
  bloodpressure: "",
  heartrate: "",
  anyothercondition: ""
});

const Dashboard = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm());
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [isLoadingHealth, setIsLoadingHealth] = useState(true);
  const [scans, setScans] = useState([]);

  const loadProfiles = async () => {
    try {
      const response = await axios.get(API_BASE, { withCredentials: true });
      const data = response.data?.data || [];
      const list = Array.isArray(data) ? data : data ? [data] : [];
      setProfiles(list);
      if (!selectedId && list.length) {
        setSelectedId(list[0]?.id ?? list[0]?._id);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setIsLoadingHealth(false);
    }
  };

  const fetchLatestScans = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/safety/history' , {
        withCredentials: true
      })

      const scans = result.data.data;

    // 👇 take only top 5
    const top5 = scans.slice(0, 5);

    // 👇 format data
    const formatted = top5.map(item => ({
      name: item.familyMemberName,
      plant: item.plantName,
      recommendation: item.recommendations[0] // short one
    }));

      console.log(formatted);

      setScans(formatted);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    loadProfiles();
    fetchLatestScans()
  }, []);

  const selectedProfile = profiles.find((p) => (p.id || p._id) === selectedId) || profiles[0];

  const openAddForm = () => {
    setForm(emptyForm());
    setEditId(null);
    setShowInfoForm(true);
  };

  const openEditForm = (profile) => {
    setForm({
      name: profile.name ?? "",
      weight: profile.weight ?? "",
      height: profile.height ?? "",
      bloodpressure: profile.bloodPressure ?? "",
      heartrate: profile.heartRate ?? "",
      anyothercondition: profile.anyOtherCondition ?? ""
    });
    setEditId(profile.id || profile._id);
    setShowInfoForm(true);
  };

  const closeForm = () => {
    setShowInfoForm(false);
    setEditId(null);
    setForm(emptyForm());
  };

  const handleSaveInfo = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setFlashMessage("Name is required");
      setFlashType("error");
      setShowFlash(true);
      return;
    }
    try {
      if (editId) {
        const response = await axios.put(
          `${API_BASE}/${editId}`,
          {
            name: form.name,
            weight: form.weight,
            height: form.height,
            bloodpressure: form.bloodpressure,
            heartrate: form.heartrate,
            anyothercondition: form.anyothercondition
          },
          { withCredentials: true }
        );
        await loadProfiles(); // Refresh the list from server
        setFlashMessage("Profile updated successfully");
      } else {
        const response = await axios.post(
          API_BASE,
          {
            name: form.name,
            weight: form.weight,
            height: form.height,
            bloodpressure: form.bloodpressure,
            heartrate: form.heartrate,
            anyothercondition: form.anyothercondition
          },
          { withCredentials: true }
        );
        await loadProfiles(); // Refresh the list from server
        // Select the newly created member if we have the ID
        if (response.data?.data?.id) {
          setSelectedId(response.data.data.id);
        }
        setFlashMessage("Family member added successfully");
      }
      setFlashType("success");
      setShowFlash(true);
      closeForm();
    } catch (error) {
      console.error("Save error:", error);
      console.error("Response:", error.response?.data);
      setFlashMessage(error.response?.data?.message || error.message || "Failed to save");
      setFlashType("error");
      setShowFlash(true);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this family member?")) return;
    const idStr = String(id ?? "");
    if (!idStr) return;
    try {
      await axios.delete(`${API_BASE}/${idStr}`, { withCredentials: true });
      setProfiles((prev) => {
        const next = prev.filter((p) => String(p.id || p._id) !== idStr);
        if (selectedId === idStr || selectedId === id) {
          const nextProfile = next[0];
          setSelectedId(nextProfile ? (nextProfile.id || nextProfile._id) : null);
        }
        return next;
      });
      setFlashMessage("Profile removed");
      setFlashType("success");
      setShowFlash(true);
    } catch (error) {
      setFlashMessage(error.response?.data?.message || "Failed to delete");
      setFlashType("error");
      setShowFlash(true);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", { withCredentials: true });
      setFlashMessage("Logged out successfully");
      setFlashType("success");
      setShowFlash(true);
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      setFlashMessage(error.response?.data?.message || "Logout failed");
      setFlashType("error");
      setShowFlash(true);
    }
  };

  const renderSummary = (profile) => {
    const hasData =
      profile.weight != null ||
      profile.height != null ||
      profile.bloodPressure ||
      profile.heartRate != null ||
      profile.anyOtherCondition;
    return (
      <div className="dashboard-summary">
        <div className="dashboard-summary-header">
          <span className="dashboard-summary-greeting">
            {profile.name ? `Hi, ${profile.name}` : "Your profile"}
          </span>
        </div>
        {hasData && (
          <div className="dashboard-summary-grid">
            {profile.weight != null && (
              <div className="dashboard-summary-item">
                <span className="dashboard-summary-label">Weight</span>
                <span className="dashboard-summary-value">{profile.weight} kg</span>
              </div>
            )}
            {profile.height != null && (
              <div className="dashboard-summary-item">
                <span className="dashboard-summary-label">Height</span>
                <span className="dashboard-summary-value">{profile.height} cm</span>
              </div>
            )}
            {profile.bloodPressure && (
              <div className="dashboard-summary-item">
                <span className="dashboard-summary-label">Blood pressure</span>
                <span className="dashboard-summary-value">{profile.bloodPressure}</span>
              </div>
            )}
            {profile.heartRate != null && (
              <div className="dashboard-summary-item">
                <span className="dashboard-summary-label">Heart rate</span>
                <span className="dashboard-summary-value">{profile.heartRate} bpm</span>
              </div>
            )}
            {profile.anyOtherCondition && (
              <div className="dashboard-summary-item dashboard-summary-item--full">
                <span className="dashboard-summary-label">Conditions</span>
                <span className="dashboard-summary-value">{profile.anyOtherCondition}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="dashboard-page">
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />

      <div className="scans-container">
  <h2 className="scans-title">🌿 Latest Scans</h2>

  <div className="scans-grid">
    {scans.map((scan, index) => (
      <div key={index} className="scan-card">
        <div className="scan-header">
          <span className="scan-name">{scan.name}</span>
        </div>

        <div className="scan-body">
          <p className="scan-plant">{scan.plant}</p>
          <p className="scan-note">{scan.recommendation}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <section className="dashboard-card">
        <button type="button" className="dashboard-top-logout" onClick={handleLogout}>
          Logout
        </button>

        <header className="dashboard-header">
          <p className="dashboard-kicker">Rooted Dashboard</p>
          <h1>Your Green Control Center</h1>
          <p>
            Add family members, track health info, open camera, or continue with maps later.
          </p>
        </header>

        <div className="dashboard-actions">
          <button
            type="button"
            className="dashboard-btn dashboard-btn--primary"
            onClick={openAddForm}
          >
            Add Family Member
          </button>
          <button
            type="button"
            className="dashboard-btn dashboard-btn--secondary"
            onClick={() => navigate("/camera", { state: { selectedFamilyMember: selectedProfile } })}
            disabled={!selectedProfile}
            title={selectedProfile ? `Scan for ${selectedProfile.name}` : "Select a family member first"}
          >
            {selectedProfile ? `🔍 Identify for ${selectedProfile.name}` : "Select Member to Scan"}
          </button>
          <button
            type="button"
            className="dashboard-btn dashboard-btn--ghost"
            onClick={() => navigate("/plant")}
          >
            Plant Details
          </button>
          <button type="button" className="dashboard-btn dashboard-btn--ghost">
            Maps
          </button>
        </div>

        {/* Add/Edit Form - shows inline */}
        {showInfoForm && !isLoadingHealth && (
          <div className="dashboard-form-container">
            <div className="dashboard-form-header">
              <h3 className="dashboard-form-title">
                {editId ? "✏️ Edit Family Member" : "➕ Add New Family Member"}
              </h3>
              <button 
                type="button" 
                className="dashboard-form-close"
                onClick={closeForm}
                title="Close"
              >
                ✕
              </button>
            </div>
            <form className="dashboard-form" onSubmit={handleSaveInfo}>
              <label className="dashboard-field">
                <span>Name *</span>
                <input
                  type="text"
                  placeholder="e.g. Mom, Dad, Alex"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </label>
              <label className="dashboard-field">
                <span>Weight (kg)</span>
                <input
                  type="text"
                  placeholder="Enter weight (kg)"
                  value={form.weight}
                  onChange={(e) => setForm((f) => ({ ...f, weight: e.target.value }))}
                />
              </label>
              <label className="dashboard-field">
                <span>Height (cm)</span>
                <input
                  type="text"
                  placeholder="Enter height (cm)"
                  value={form.height}
                  onChange={(e) => setForm((f) => ({ ...f, height: e.target.value }))}
                />
              </label>
              <label className="dashboard-field">
                <span>Blood pressure</span>
                <input
                  type="text"
                  placeholder="e.g. 120/80"
                  value={form.bloodpressure}
                  onChange={(e) => setForm((f) => ({ ...f, bloodpressure: e.target.value }))}
                />
              </label>
              <label className="dashboard-field">
                <span>Heart rate</span>
                <input
                  type="text"
                  placeholder="bpm"
                  value={form.heartrate}
                  onChange={(e) => setForm((f) => ({ ...f, heartrate: e.target.value }))}
                />
              </label>
              <label className="dashboard-field">
                <span>Other conditions</span>
                <input
                  type="text"
                  placeholder="e.g. Pregnancy, Diabetes, Blood thinners"
                  value={form.anyothercondition}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, anyothercondition: e.target.value }))
                  }
                />
              </label>
              <div className="dashboard-form-actions">
                <button type="submit" className="dashboard-save-btn">
                  {editId ? "Update" : "Save"} Profile
                </button>
                <button type="button" className="dashboard-cancel-btn" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
            
          </div>
          
        )}

        {/* Always show family members list */}
        {profiles.length > 0 && !isLoadingHealth && (
          <div className="dashboard-profiles">
            <div className="dashboard-profiles-header">
              <h3 className="dashboard-profiles-title">Family members</h3>
              {!showInfoForm && (
                <button
                  type="button"
                  className="dashboard-add-btn-small"
                  onClick={openAddForm}
                  title="Add new family member"
                >
                  + Add
                </button>
              )}
            </div>
            <div className="dashboard-profile-tabs">
              {profiles.map((p) => {
                const pid = p.id || p._id;
                const isSelected = selectedId === pid;
                return (
                  <div
                    key={pid}
                    className={`dashboard-profile-tab ${isSelected ? "dashboard-profile-tab--active" : ""}`}
                    onClick={() => setSelectedId(pid)}
                  >
                    <span>{p.name || "Unnamed"}</span>
                    <div className="dashboard-profile-tab-actions">
                      <button
                        type="button"
                        className="dashboard-tab-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditForm(p);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="dashboard-tab-btn dashboard-tab-btn--danger"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(pid);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {selectedProfile && renderSummary(selectedProfile)}
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
