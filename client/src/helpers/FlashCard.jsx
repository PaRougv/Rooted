import React, { useEffect } from "react";
import "./FlashCard.css";

const FlashCard = ({ message, type = "success", visible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`flash-card flash-card--${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      <button type="button" className="flash-card__close" onClick={onClose} aria-label="Close notification">
        x
      </button>
    </div>
  );
};

export default FlashCard;
