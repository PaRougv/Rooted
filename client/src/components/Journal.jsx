import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Plus, Trash2, Edit3, Star, ChevronDown, ChevronUp } from "lucide-react";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./Journal.css";

const USAGE_TYPES = ["tea", "topical", "tincture", "capsule", "raw", "cooked", "oil", "other"];

const emptyForm = () => ({
  plantName: "",
  familyMemberId: "",
  familyMemberName: "",
  usageType: "other",
  dosage: "",
  notes: "",
  effectsObserved: "",
  rating: 0,
  sideEffects: "",
  wouldUseAgain: true,
});

const Journal = () => {
  const { t } = useTranslation();
  const [entries, setEntries] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm());
  const [expandedId, setExpandedId] = useState(null);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const flash = (msg, type = "success") => {
    setFlashMessage(msg);
    setFlashType(type);
    setShowFlash(true);
  };

  const loadData = async () => {
    try {
      const [entRes, memRes] = await Promise.all([
        axios.get("/api/journal", { withCredentials: true }),
        axios.get("/api/input/takeuser", { withCredentials: true }),
      ]);
      setEntries(entRes.data?.data || []);
      const raw = memRes.data?.data || [];
      setMembers(Array.isArray(raw) ? raw : raw ? [raw] : []);
    } catch {
      flash(t("common.error"), "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const openAdd = () => {
    setForm(emptyForm());
    setEditId(null);
    setShowForm(true);
  };

  const openEdit = (entry) => {
    setForm({
      plantName: entry.plantName || "",
      familyMemberId: entry.familyMemberId || "",
      familyMemberName: entry.familyMemberName || "",
      usageType: entry.usageType || "other",
      dosage: entry.dosage || "",
      notes: entry.notes || "",
      effectsObserved: entry.effectsObserved || "",
      rating: entry.rating || 0,
      sideEffects: entry.sideEffects || "",
      wouldUseAgain: entry.wouldUseAgain !== false,
    });
    setEditId(entry._id);
    setShowForm(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.plantName.trim()) {
      flash(t("journal.plantName") + " is required", "error");
      return;
    }

    // Attach member name from selected ID
    const payload = { ...form };
    if (payload.familyMemberId) {
      const mem = members.find((m) => (m._id || m.id) === payload.familyMemberId);
      if (mem) payload.familyMemberName = mem.name;
    }

    try {
      if (editId) {
        await axios.put(`/api/journal/${editId}`, payload, { withCredentials: true });
      } else {
        await axios.post("/api/journal", payload, { withCredentials: true });
      }
      setShowForm(false);
      setEditId(null);
      setForm(emptyForm());
      await loadData();
      flash(editId ? "Entry updated" : "Entry saved");
    } catch (err) {
      flash(err.response?.data?.message || t("common.error"), "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this journal entry?")) return;
    try {
      await axios.delete(`/api/journal/${id}`, { withCredentials: true });
      setEntries((prev) => prev.filter((e) => e._id !== id));
      flash("Entry deleted");
    } catch {
      flash(t("common.error"), "error");
    }
  };

  const setField = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="journal-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />
      <FlashCard message={flashMessage} type={flashType} visible={showFlash} onClose={() => setShowFlash(false)} />

      <div className="journal-container">
        <header className="journal-header">
          <p className="journal-kicker">Rooted</p>
          <h1>{t("journal.title")}</h1>
          <p>{t("journal.subtitle")}</p>
        </header>

        <button className="journal-add-btn" onClick={openAdd}>
          <Plus size={16} /> {t("journal.addEntry")}
        </button>

        {/* ── Form ── */}
        {showForm && (
          <div className="journal-form-card">
            <form className="journal-form" onSubmit={handleSave}>
              <label className="journal-field">
                <span>{t("journal.plantName")} *</span>
                <input type="text" value={form.plantName} onChange={(e) => setField("plantName", e.target.value)} required />
              </label>

              {members.length > 0 && (
                <label className="journal-field">
                  <span>{t("plantSearch.selectMember")}</span>
                  <select value={form.familyMemberId} onChange={(e) => setField("familyMemberId", e.target.value)}>
                    <option value="">-- optional --</option>
                    {members.map((m) => (
                      <option key={m._id || m.id} value={m._id || m.id}>{m.name}</option>
                    ))}
                  </select>
                </label>
              )}

              <label className="journal-field">
                <span>{t("journal.usageType")}</span>
                <select value={form.usageType} onChange={(e) => setField("usageType", e.target.value)}>
                  {USAGE_TYPES.map((u) => (
                    <option key={u} value={u}>{t(`journal.usageTypes.${u}`)}</option>
                  ))}
                </select>
              </label>

              <label className="journal-field">
                <span>{t("journal.dosage")}</span>
                <input type="text" value={form.dosage} onChange={(e) => setField("dosage", e.target.value)} placeholder="e.g. 2 cups, 5ml" />
              </label>

              <label className="journal-field">
                <span>{t("journal.effects")}</span>
                <textarea value={form.effectsObserved} onChange={(e) => setField("effectsObserved", e.target.value)} rows={2} />
              </label>

              <label className="journal-field">
                <span>{t("journal.sideEffects")}</span>
                <textarea value={form.sideEffects} onChange={(e) => setField("sideEffects", e.target.value)} rows={2} />
              </label>

              <label className="journal-field">
                <span>{t("journal.notes")}</span>
                <textarea value={form.notes} onChange={(e) => setField("notes", e.target.value)} rows={2} />
              </label>

              {/* Rating */}
              <div className="journal-field">
                <span>{t("journal.rating")}</span>
                <div className="journal-stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button type="button" key={n} className={`journal-star ${form.rating >= n ? "active" : ""}`} onClick={() => setField("rating", form.rating === n ? 0 : n)}>
                      <Star size={20} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Would use again */}
              <label className="journal-field journal-field--inline">
                <input type="checkbox" checked={form.wouldUseAgain} onChange={(e) => setField("wouldUseAgain", e.target.checked)} />
                <span>{t("journal.wouldUseAgain")}</span>
              </label>

              <div className="journal-form-actions">
                <button type="submit" className="journal-save-btn">
                  {editId ? t("journal.update") : t("journal.save")}
                </button>
                <button type="button" className="journal-cancel-btn" onClick={() => { setShowForm(false); setEditId(null); }}>
                  {t("common.cancel")}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Entries ── */}
        {loading ? (
          <div className="journal-empty">{t("common.loading")}</div>
        ) : entries.length === 0 ? (
          <div className="journal-empty">{t("journal.noEntries")}</div>
        ) : (
          <ul className="journal-list">
            {entries.map((entry) => {
              const isOpen = expandedId === entry._id;
              return (
                <li key={entry._id} className="journal-item">
                  <button className="journal-item-summary" onClick={() => setExpandedId(isOpen ? null : entry._id)}>
                    <div className="journal-item-main">
                      <span className="journal-item-plant">{entry.plantName}</span>
                      <span className="journal-item-meta">
                        {entry.familyMemberName && `${entry.familyMemberName} · `}
                        {t(`journal.usageTypes.${entry.usageType || "other"}`)} · {formatDate(entry.createdAt)}
                      </span>
                    </div>
                    {entry.rating > 0 && (
                      <span className="journal-item-rating">
                        {Array.from({ length: entry.rating }, (_, i) => (
                          <Star key={i} size={12} fill="var(--accent)" stroke="var(--accent)" />
                        ))}
                      </span>
                    )}
                    <span className="journal-chevron">{isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
                  </button>

                  {isOpen && (
                    <div className="journal-item-detail">
                      {entry.dosage && <p><strong>{t("journal.dosage")}:</strong> {entry.dosage}</p>}
                      {entry.effectsObserved && <p><strong>{t("journal.effects")}:</strong> {entry.effectsObserved}</p>}
                      {entry.sideEffects && <p><strong>{t("journal.sideEffects")}:</strong> {entry.sideEffects}</p>}
                      {entry.notes && <p><strong>{t("journal.notes")}:</strong> {entry.notes}</p>}
                      <p><strong>{t("journal.wouldUseAgain")}:</strong> {entry.wouldUseAgain ? t("common.yes") : t("common.no")}</p>

                      <div className="journal-item-actions">
                        <button className="journal-action-btn" onClick={() => openEdit(entry)}>
                          <Edit3 size={14} /> {t("common.edit")}
                        </button>
                        <button className="journal-action-btn journal-action-btn--danger" onClick={() => handleDelete(entry._id)}>
                          <Trash2 size={14} /> {t("journal.delete")}
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Journal;
