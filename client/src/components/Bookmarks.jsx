import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Leaf, Trash2, Plus, Pencil, Check } from "lucide-react";
import BackButton from "./BackButton.jsx";
import FlashCard from "../helpers/FlashCard.jsx";
import "./Bookmarks.css";

const Bookmarks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPlant, setNewPlant] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editNotes, setEditNotes] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [flashType, setFlashType] = useState("success");
  const [showFlash, setShowFlash] = useState(false);

  const flash = (msg, type = "success") => {
    setFlashMessage(msg);
    setFlashType(type);
    setShowFlash(true);
  };

  const fetchBookmarks = useCallback(async () => {
    try {
      const res = await axios.get("/api/bookmarks", { withCredentials: true });
      setBookmarks(res.data?.data || []);
    } catch (err) {
      console.error("Failed to load bookmarks:", err);
      setError(t("bookmarks.loadError"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = newPlant.trim();
    if (!name) return;

    try {
      const res = await axios.post("/api/bookmarks", { plantName: name }, { withCredentials: true });
      setBookmarks((prev) => [res.data.data, ...prev]);
      setNewPlant("");
      flash(t("bookmarks.added"));
    } catch (err) {
      if (err.response?.status === 409) {
        flash(t("bookmarks.duplicate"), "error");
      } else {
        flash(err.response?.data?.message || t("bookmarks.addError"), "error");
      }
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/bookmarks/${id}`, { withCredentials: true });
      setBookmarks((prev) => prev.filter((b) => b._id !== id));
      flash(t("bookmarks.removed"));
    } catch (err) {
      flash(err.response?.data?.message || t("bookmarks.removeError"), "error");
    }
  };

  const startEditNotes = (bookmark) => {
    setEditingId(bookmark._id);
    setEditNotes(bookmark.notes || "");
  };

  const saveNotes = async (id) => {
    try {
      // Notes are saved locally for now since we only have add/remove endpoints
      setBookmarks((prev) =>
        prev.map((b) => (b._id === id ? { ...b, notes: editNotes } : b))
      );
      setEditingId(null);
      flash(t("bookmarks.notesSaved"));
    } catch {
      flash(t("bookmarks.notesError"), "error");
    }
  };

  const handlePlantClick = (plantName) => {
    navigate("/plant-search", { state: { prefill: plantName } });
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bm-page">
      <FlashCard
        message={flashMessage}
        type={flashType}
        visible={showFlash}
        onClose={() => setShowFlash(false)}
      />
      <div className="bm-container">
        <BackButton to="/dashboard" label={t("common.back")} />

        <div className="bm-header">
          <p className="bm-kicker">{t("bookmarks.kicker")}</p>
          <h1>{t("bookmarks.title")}</h1>
          <p>{t("bookmarks.subtitle")}</p>
        </div>

        {/* Add form */}
        <form className="bm-add-form" onSubmit={handleAdd}>
          <input
            className="bm-add-input"
            type="text"
            placeholder={t("bookmarks.addPlaceholder")}
            value={newPlant}
            onChange={(e) => setNewPlant(e.target.value)}
          />
          <button className="bm-add-btn" type="submit" disabled={!newPlant.trim()}>
            <Plus size={16} />
            {t("bookmarks.addBtn")}
          </button>
        </form>

        {error && <div className="bm-error">{error}</div>}

        {loading ? (
          <div className="bm-loading">{t("common.loading")}</div>
        ) : bookmarks.length === 0 ? (
          <div className="bm-empty">
            <div className="bm-empty-icon"><Leaf size={48} /></div>
            <p>{t("bookmarks.empty")}</p>
          </div>
        ) : (
          <ul className="bm-list">
            {bookmarks.map((bm) => (
              <li key={bm._id} className="bm-item">
                <div className="bm-item-icon">
                  <Leaf size={18} />
                </div>
                <div className="bm-item-body">
                  <span
                    className="bm-plant-name"
                    onClick={() => handlePlantClick(bm.plantName)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handlePlantClick(bm.plantName)}
                  >
                    {bm.plantName}
                  </span>

                  {editingId === bm._id ? (
                    <div className="bm-notes-row">
                      <input
                        className="bm-notes-input"
                        type="text"
                        placeholder={t("bookmarks.notesPlaceholder")}
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveNotes(bm._id)}
                        autoFocus
                      />
                      <button className="bm-notes-save" onClick={() => saveNotes(bm._id)}>
                        <Check size={12} />
                      </button>
                    </div>
                  ) : (
                    bm.notes && <p className="bm-notes-text">{bm.notes}</p>
                  )}

                  <span className="bm-date">{formatDate(bm.createdAt)}</span>
                </div>

                <div className="bm-item-actions">
                  <button
                    className="bm-action-btn"
                    onClick={() => startEditNotes(bm)}
                    title={t("bookmarks.editNotes")}
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    className="bm-action-btn danger"
                    onClick={() => handleRemove(bm._id)}
                    title={t("bookmarks.remove")}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
