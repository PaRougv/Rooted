import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ to, label = "Back", className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      return; // Link handles navigation
    }
    e.preventDefault();
    navigate(-1);
  };

  const content = (
    <>
      <span className="back-button__arrow">←</span>
      <span>{label}</span>
    </>
  );

  const classes = ["back-button", className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={label}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={handleClick} aria-label={label}>
      {content}
    </button>
  );
};

export default BackButton;
