import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LANGUAGES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "hi", label: "हिन्दी", flag: "HI" },
  { code: "ta", label: "தமிழ்", flag: "TA" },
  { code: "ml", label: "മലയാളം", flag: "ML" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("rooted-lang", code);
    setOpen(false);
  };

  return (
    <div className="lang-selector">
      <button className="lang-toggle" onClick={() => setOpen((o) => !o)} aria-label="Change language">
        {current.flag}
      </button>

      {open && (
        <>
          <div className="lang-backdrop" onClick={() => setOpen(false)} />
          <div className="lang-dropdown">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${lang.code === i18n.language ? "active" : ""}`}
                onClick={() => handleChange(lang.code)}
              >
                <span className="lang-option-flag">{lang.flag}</span>
                <span className="lang-option-label">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
