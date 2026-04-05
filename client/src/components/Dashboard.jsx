import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  Camera, Search, Leaf, Map, Clock, Heart, BarChart3,
  MessageCircle, BookOpen, Calendar, GitCompare, LogOut,
  Plus, Pencil, Trash2, ChevronDown, ChevronUp, User, X,
  Scale, AlertTriangle, Bookmark
} from "lucide-react";
import FlashCard from "../helpers/FlashCard.jsx";
import PlantOfTheDay from "./PlantOfTheDay.jsx";
import "./Dashboard.css";

const API_BASE = "/api/input/takeuser";

const emptyForm = () => ({
  name: "", weight: "", height: "",
  bloodpressure: "", heartrate: "", anyothercondition: ""
});

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [profiles, setProfiles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm());
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);
  const [isLoadingHealth, setIsLoadingHealth] = useState(true);
  const [showFamily, setShowFamily] = useState(false);

  const loadProfiles = async () => {
    try {
      const response = await axios.get(API_BASE, { withCredentials: true });
      const data = response.data?.data || [];
      const list = Array.isArray(data) ? data : data ? [data] : [];
      setProfiles(list);
      if (!selectedId && list.length) setSelectedId(list[0]?.id ?? list[0]?._id);
    } catch (error) {
      console.error(error.response?.data || error.message);
    } finally {
      setIsLoadingHealth(false);
    }
  };

  useEffect(() => { loadProfiles(); }, []);

  const selectedProfile = profiles.find((p) => (p.id || p._id) === selectedId) || profiles[0];

  const openAddForm = () => { setForm(emptyForm()); setEditId(null); setShowInfoForm(true); setShowFamily(true); };
  const openEditForm = (profile) => {
    setForm({
      name: profile.name ?? "", weight: profile.weight ?? "", height: profile.height ?? "",
      bloodpressure: profile.bloodPressure ?? "", heartrate: profile.heartRate ?? "",
      anyothercondition: profile.anyOtherCondition ?? ""
    });
    setEditId(profile.id || profile._id);
    setShowInfoForm(true);
    setShowFamily(true);
  };
  const closeForm = () => { setShowInfoForm(false); setEditId(null); setForm(emptyForm()); };

  const flash = (msg, type = "success") => { setFlashMessage(msg); setFlashType(type); setShowFlash(true); };

  const handleSaveInfo = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { flash(t("dashboard.nameRequired"), "error"); return; }
    try {
      const payload = {
        name: form.name, weight: form.weight, height: form.height,
        bloodpressure: form.bloodpressure, heartrate: form.heartrate,
        anyothercondition: form.anyothercondition
      };
      if (editId) {
        await axios.put(`${API_BASE}/${editId}`, payload, { withCredentials: true });
        await loadProfiles();
        flash(t("dashboard.profileUpdated"));
      } else {
        const response = await axios.post(API_BASE, payload, { withCredentials: true });
        await loadProfiles();
        if (response.data?.data?.id) setSelectedId(response.data.data.id);
        flash(t("dashboard.profileCreated"));
      }
      closeForm();
    } catch (error) {
      flash(error.response?.data?.message || error.message || "Failed to save", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this family member?")) return;
    const idStr = String(id ?? "");
    try {
      await axios.delete(`${API_BASE}/${idStr}`, { withCredentials: true });
      setProfiles((prev) => {
        const next = prev.filter((p) => String(p.id || p._id) !== idStr);
        if (selectedId === idStr || selectedId === id) {
          setSelectedId(next[0] ? (next[0].id || next[0]._id) : null);
        }
        return next;
      });
      flash(t("dashboard.profileRemoved"));
    } catch (error) {
      flash(error.response?.data?.message || "Failed to delete", "error");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", { withCredentials: true });
      flash("Logged out");
      setTimeout(() => navigate("/login"), 400);
    } catch (error) {
      flash(error.response?.data?.message || "Logout failed", "error");
    }
  };

  // Navigation items grouped by category
  const NAV_GROUPS = [
    {
      label: "Identify",
      items: [
        { icon: Camera, label: t("nav.camera"), path: "/camera", state: { selectedFamilyMember: selectedProfile }, primary: true, disabled: !selectedProfile },
        { icon: Search, label: t("nav.plantSearch"), path: "/plant-search" },
        { icon: Leaf, label: t("nav.plantDetails"), path: "/plant" },
        { icon: GitCompare, label: t("nav.compare"), path: "/compare" },
        { icon: Scale, label: t("nav.dosage"), path: "/dosage" },
      ]
    },
    {
      label: "Track",
      items: [
        { icon: Clock, label: t("nav.history"), path: "/history" },
        { icon: BookOpen, label: t("nav.journal"), path: "/journal" },
        { icon: Bookmark, label: t("nav.bookmarks"), path: "/bookmarks" },
        { icon: BarChart3, label: t("nav.results"), path: "/results" },
      ]
    },
    {
      label: "Explore",
      items: [
        { icon: MessageCircle, label: t("nav.chat"), path: "/chat" },
        { icon: Map, label: t("nav.maps"), path: "/maps" },
        { icon: Heart, label: t("nav.firstAid"), path: "/first-aid" },
        { icon: Calendar, label: t("nav.calendar"), path: "/calendar" },
        { icon: AlertTriangle, label: t("emergency.title"), path: "/emergency" },
      ]
    }
  ];

  return (
    <main className="dash">
      <FlashCard message={flashMessage} type={flashType} visible={showFlash} onClose={() => setShowFlash(false)} />

      {/* ── Top bar ── */}
      <div className="dash-topbar">
        <span className="dash-logo">Rooted</span>
        <button className="dash-logout" onClick={handleLogout}>
          <LogOut size={15} /> {t("nav.logout")}
        </button>
      </div>

      {/* ── Active member strip ── */}
      {selectedProfile && (
        <div className="dash-member-strip">
          <div className="dash-member-avatar">
            <User size={18} />
          </div>
          <div className="dash-member-info">
            <span className="dash-member-name">{selectedProfile.name}</span>
            <span className="dash-member-details">
              {[
                selectedProfile.weight && `${selectedProfile.weight}kg`,
                selectedProfile.height && `${selectedProfile.height}cm`,
                selectedProfile.bloodPressure && `BP ${selectedProfile.bloodPressure}`,
                selectedProfile.heartRate && `${selectedProfile.heartRate}bpm`,
              ].filter(Boolean).join(" · ") || "No health data"}
            </span>
          </div>
          {selectedProfile.anyOtherCondition && (
            <span className="dash-member-condition">{selectedProfile.anyOtherCondition}</span>
          )}
          <button className="dash-member-change" onClick={() => setShowFamily((v) => !v)}>
            {showFamily ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}

      {!selectedProfile && !isLoadingHealth && (
        <div className="dash-member-strip dash-member-strip--empty">
          <p>No family members yet.</p>
          <button className="dash-add-first" onClick={openAddForm}>
            <Plus size={14} /> {t("dashboard.addFamily")}
          </button>
        </div>
      )}

      {/* ── Family panel (collapsible) ── */}
      {showFamily && (
        <div className="dash-family-panel">
          <div className="dash-family-header">
            <h3>{t("dashboard.familyMembers")}</h3>
            <button className="dash-family-add" onClick={openAddForm}>
              <Plus size={14} /> {t("dashboard.add")}
            </button>
          </div>

          <div className="dash-family-list">
            {profiles.map((p) => {
              const pid = p.id || p._id;
              const active = selectedId === pid;
              return (
                <div key={pid} className={`dash-family-chip ${active ? "active" : ""}`} onClick={() => { setSelectedId(pid); setShowFamily(false); }}>
                  <span className="dash-family-chip-name">{p.name || "Unnamed"}</span>
                  <div className="dash-family-chip-actions">
                    <button onClick={(e) => { e.stopPropagation(); openEditForm(p); }} title={t("dashboard.edit")}>
                      <Pencil size={12} />
                    </button>
                    <button className="danger" onClick={(e) => { e.stopPropagation(); handleDelete(pid); }} title={t("dashboard.remove")}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inline form */}
          {showInfoForm && (
            <div className="dash-form-card">
              <div className="dash-form-top">
                <h4>{editId ? t("dashboard.editFamily") : t("dashboard.addFamily")}</h4>
                <button className="dash-form-x" onClick={closeForm}><X size={16} /></button>
              </div>
              <form className="dash-form" onSubmit={handleSaveInfo}>
                <label><span>{t("dashboard.name")} *</span>
                  <input type="text" placeholder={t("dashboard.namePlaceholder")} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
                </label>
                <div className="dash-form-row">
                  <label><span>{t("dashboard.weight")}</span>
                    <input type="text" placeholder="kg" value={form.weight} onChange={(e) => setForm((f) => ({ ...f, weight: e.target.value }))} />
                  </label>
                  <label><span>{t("dashboard.height")}</span>
                    <input type="text" placeholder="cm" value={form.height} onChange={(e) => setForm((f) => ({ ...f, height: e.target.value }))} />
                  </label>
                </div>
                <div className="dash-form-row">
                  <label><span>{t("dashboard.bloodPressure")}</span>
                    <input type="text" placeholder={t("dashboard.bpPlaceholder")} value={form.bloodpressure} onChange={(e) => setForm((f) => ({ ...f, bloodpressure: e.target.value }))} />
                  </label>
                  <label><span>{t("dashboard.heartRate")}</span>
                    <input type="text" placeholder="bpm" value={form.heartrate} onChange={(e) => setForm((f) => ({ ...f, heartrate: e.target.value }))} />
                  </label>
                </div>
                <label><span>{t("dashboard.conditions")}</span>
                  <input type="text" placeholder={t("dashboard.condPlaceholder")} value={form.anyothercondition} onChange={(e) => setForm((f) => ({ ...f, anyothercondition: e.target.value }))} />
                </label>
                <div className="dash-form-btns">
                  <button type="submit" className="dash-form-save">{editId ? t("dashboard.updateProfile") : t("dashboard.saveProfile")}</button>
                  <button type="button" className="dash-form-cancel" onClick={closeForm}>{t("dashboard.cancel")}</button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ── Plant of the Day ── */}
      <PlantOfTheDay />

      {/* ── Navigation grid ── */}
      <div className="dash-nav-grid">
        {NAV_GROUPS.map((group) => (
          <section key={group.label} className="dash-nav-section">
            <h2 className="dash-nav-label">{group.label}</h2>
            <div className="dash-nav-items">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    className={`dash-nav-card ${item.primary ? "dash-nav-card--primary" : ""}`}
                    onClick={() => navigate(item.path, item.state ? { state: item.state } : undefined)}
                    disabled={item.disabled}
                  >
                    <span className="dash-nav-icon"><Icon size={20} /></span>
                    <span className="dash-nav-text">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
