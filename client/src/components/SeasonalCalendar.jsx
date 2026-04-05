import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sun, CloudRain, Snowflake, Leaf, Wind, Repeat } from "lucide-react";
import BackButton from "./BackButton.jsx";
import "./SeasonalCalendar.css";

const SEASONS = [
  { key: "spring",    icon: Leaf,      months: "Feb – Mar",  color: "#22c55e" },
  { key: "summer",    icon: Sun,       months: "Apr – Jun",  color: "#f59e0b" },
  { key: "monsoon",   icon: CloudRain, months: "Jul – Sep",  color: "#3b82f6" },
  { key: "autumn",    icon: Wind,      months: "Oct – Nov",  color: "#f97316" },
  { key: "winter",    icon: Snowflake, months: "Dec – Jan",  color: "#06b6d4" },
  { key: "yearRound", icon: Repeat,    months: "All Year",   color: "#8b5cf6" },
];

const PLANT_SEASONS = [
  // Spring
  { plant: "Neem",        season: "spring",    region: "All India",             use: "Blood purifier, skin care",           note: "Tender leaves harvested in spring, used in Ugadi festivals" },
  { plant: "Moringa",     season: "spring",    region: "South & Central India", use: "Nutrition, immunity",                 note: "New shoots and pods appear; drumstick flowers peak" },
  { plant: "Brahmi",      season: "spring",    region: "Wetlands, pan-India",   use: "Memory, cognition",                  note: "Best harvested in warm, moist early spring" },

  // Summer
  { plant: "Aloe Vera",   season: "summer",    region: "Rajasthan, Gujarat",    use: "Skin cooling, digestion",            note: "Thrives in intense heat; gel is most potent in summer" },
  { plant: "Vetiver",     season: "summer",    region: "South India",           use: "Cooling, stress relief",             note: "Roots harvested pre-monsoon for maximum fragrance" },
  { plant: "Amla",        season: "summer",    region: "North & Central India", use: "Vitamin C, immunity",                note: "Trees flower in summer; fruit sets for winter harvest" },
  { plant: "Peppermint",  season: "summer",    region: "Uttar Pradesh",         use: "Cooling, digestion",                 note: "Peak oil content during hot months; major harvest season" },

  // Monsoon
  { plant: "Tulsi",       season: "monsoon",   region: "All India",             use: "Immunity, respiratory health",       note: "Rapid growth during monsoon; leaves most aromatic" },
  { plant: "Ashwagandha", season: "monsoon",   region: "MP, Rajasthan",         use: "Stress, vitality",                   note: "Planted at monsoon onset; roots develop over 5-6 months" },
  { plant: "Turmeric",    season: "monsoon",   region: "Kerala, Andhra Pradesh",use: "Anti-inflammatory, cooking",         note: "Rhizomes planted with first rains; 8-month growth cycle" },
  { plant: "Ginger",      season: "monsoon",   region: "Kerala, Karnataka",     use: "Digestion, nausea",                  note: "Planted in early monsoon; needs consistent moisture" },
  { plant: "Shatavari",   season: "monsoon",   region: "Himalayan foothills",   use: "Women's health, immunity",           note: "Tuberous roots develop best with monsoon moisture" },

  // Autumn
  { plant: "Ashwagandha", season: "autumn",    region: "MP, Rajasthan",         use: "Stress, vitality",                   note: "Root harvest season — 150-180 days after planting" },
  { plant: "Saffron",     season: "autumn",    region: "Kashmir",               use: "Antioxidant, mood",                  note: "Flowers bloom October-November; hand-harvested at dawn" },
  { plant: "Hibiscus",    season: "autumn",    region: "South India, Bengal",    use: "Hair care, blood pressure",          note: "Peak flowering in post-monsoon months" },
  { plant: "Chamomile",   season: "autumn",    region: "Himachal Pradesh",      use: "Sleep, relaxation",                  note: "Autumn-sown crop; flowers in spring at altitude" },

  // Winter
  { plant: "Amla",        season: "winter",    region: "North India",           use: "Vitamin C, immunity",                note: "Fruit matures Dec-Feb; richest Vitamin C source" },
  { plant: "Garlic",      season: "winter",    region: "Gujarat, MP",           use: "Heart health, immunity",             note: "Planted Oct-Nov, bulbs harvested in late winter" },
  { plant: "Fenugreek",   season: "winter",    region: "Rajasthan, Gujarat",    use: "Blood sugar, lactation",             note: "Cool-season crop; leaves (methi) harvested all winter" },
  { plant: "Cinnamon",    season: "winter",    region: "Kerala",                use: "Blood sugar, warming",               note: "Bark harvested year-round but traditionally in cool months" },
  { plant: "Eucalyptus",  season: "winter",    region: "Nilgiri Hills",         use: "Respiratory, decongestant",          note: "Oil distillation peaks in winter when leaves are most potent" },

  // Year-round
  { plant: "Basil",       season: "yearRound", region: "All India",             use: "Cooking, digestion",                 note: "Grows year-round in tropical climates; pinch flowers to extend" },
  { plant: "Curry Leaf",  season: "yearRound", region: "South India",           use: "Digestion, hair health",             note: "Evergreen in south India; continuous harvest possible" },
  { plant: "Aloe Vera",   season: "yearRound", region: "Arid regions",          use: "Skin, burns, digestion",             note: "Survives all seasons with minimal water" },
  { plant: "Lavender",    season: "yearRound", region: "Kashmir, Himachal",     use: "Relaxation, sleep",                  note: "Perennial in highland areas; peak bloom June-August" },
  { plant: "Lemongrass",  season: "yearRound", region: "Kerala, NE India",      use: "Tea, fever, pain relief",            note: "Tropical perennial; cut-and-grow throughout the year" },
];

// Current season based on month
const getCurrentSeason = () => {
  const month = new Date().getMonth(); // 0-indexed
  if (month >= 1 && month <= 2) return "spring";
  if (month >= 3 && month <= 5) return "summer";
  if (month >= 6 && month <= 8) return "monsoon";
  if (month >= 9 && month <= 10) return "autumn";
  return "winter";
};

const SeasonalCalendar = () => {
  const { t } = useTranslation();
  const [activeSeason, setActiveSeason] = useState(getCurrentSeason());

  const filtered = PLANT_SEASONS.filter((p) => p.season === activeSeason);
  const activeMeta = SEASONS.find((s) => s.key === activeSeason);

  return (
    <div className="scal-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      <div className="scal-container">
        <header className="scal-header">
          <p className="scal-kicker">Rooted</p>
          <h1>{t("calendar.title")}</h1>
          <p>{t("calendar.subtitle")}</p>
        </header>

        {/* ── Season tabs ── */}
        <div className="scal-tabs">
          {SEASONS.map((s) => {
            const Icon = s.icon;
            const active = activeSeason === s.key;
            const isCurrent = getCurrentSeason() === s.key;
            return (
              <button
                key={s.key}
                className={`scal-tab ${active ? "active" : ""}`}
                onClick={() => setActiveSeason(s.key)}
                style={{ "--tab-color": s.color }}
              >
                <Icon size={16} />
                <span className="scal-tab-label">{t(`calendar.${s.key}`)}</span>
                <span className="scal-tab-months">{s.months}</span>
                {isCurrent && <span className="scal-tab-now">Now</span>}
              </button>
            );
          })}
        </div>

        {/* ── Plant cards ── */}
        <div className="scal-grid">
          {filtered.map((p, i) => (
            <div key={`${p.plant}-${i}`} className="scal-card" style={{ "--card-accent": activeMeta?.color || "var(--accent)" }}>
              <div className="scal-card-header">
                <h3 className="scal-plant-name">{p.plant}</h3>
                <span className="scal-region">{p.region}</span>
              </div>
              <p className="scal-use">{p.use}</p>
              <p className="scal-note">{p.note}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="scal-empty">No plants listed for this season yet.</div>
        )}
      </div>
    </div>
  );
};

export default SeasonalCalendar;
