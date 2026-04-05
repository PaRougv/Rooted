import React, { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "../api.js";
import {
  Store, MapPin, Globe, Leaf, Search, Crosshair, X,
  Navigation, LocateFixed, ChevronRight, Clock, Phone,
  MapPinned, AlertCircle,
} from "lucide-react";
import BackButton from "./BackButton.jsx";
import "./Maps.css";

const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron";

const SAFETY_COLORS = { SAFE: "#16a34a", CAUTION: "#d97706", AVOID: "#dc2626" };

const PLANT_COLORS = {
  "Aloe Vera":   "#22c55e", "Turmeric":   "#f59e0b", "Ginger":      "#f97316",
  "Garlic":      "#a78bfa", "Tulsi":      "#34d399", "Neem":        "#16a34a",
  "Ashwagandha": "#fbbf24", "Peppermint": "#06b6d4", "Chamomile":   "#facc15",
  "Lavender":    "#c084fc", "Eucalyptus": "#2dd4bf", "Basil":       "#4ade80",
};

const PLANT_LIST = ["All", ...Object.keys(PLANT_COLORS)];

const PLANT_REGIONS = [
  { plant: "Aloe Vera",    region: "Arabian Peninsula (Origin)",    country: "Yemen / Oman",        lat: 15.5,  lng: 44.2,  note: "Primary centre of origin — wild stands in Yemen highlands",             climate: "Arid / Semi-arid" },
  { plant: "Aloe Vera",    region: "East Africa",                   country: "Kenya / Ethiopia",    lat: 1.0,   lng: 37.5,  note: "Wild populations across savanna grasslands",                            climate: "Tropical dry" },
  { plant: "Aloe Vera",    region: "Rajasthan, India",              country: "India",               lat: 25.5,  lng: 72.0,  note: "Major commercial cultivation — 60% of India's supply",                  climate: "Semi-arid" },
  { plant: "Aloe Vera",    region: "Canary Islands",                country: "Spain",               lat: 28.1,  lng: -15.4, note: "Long-standing cultivation since Spanish colonisation",                   climate: "Subtropical" },
  { plant: "Turmeric",     region: "Kerala & Tamil Nadu (Origin)",  country: "India",               lat: 10.8,  lng: 76.3,  note: "Genetic diversity centre; over 30 cultivars in Kerala",                 climate: "Tropical humid" },
  { plant: "Turmeric",     region: "Andhra Pradesh",                country: "India",               lat: 16.5,  lng: 80.6,  note: "Khammam & Nizamabad — highest yield in India",                         climate: "Tropical" },
  { plant: "Turmeric",     region: "Bangladesh",                    country: "Bangladesh",          lat: 23.7,  lng: 90.4,  note: "Intensively cultivated in Mymensingh region",                           climate: "Tropical monsoon" },
  { plant: "Turmeric",     region: "Thailand",                      country: "Thailand",            lat: 15.0,  lng: 101.0, note: "Cultivated across central plains",                                      climate: "Tropical" },
  { plant: "Ginger",       region: "Kerala, India",                 country: "India",               lat: 10.5,  lng: 76.5,  note: "Highest quality 'Cochin ginger'",                                       climate: "Tropical humid" },
  { plant: "Ginger",       region: "Southern China (Origin)",       country: "China",               lat: 22.5,  lng: 113.5, note: "Domesticated ~5,000 years ago in Guangdong",                            climate: "Subtropical" },
  { plant: "Ginger",       region: "Nigeria",                       country: "Nigeria",             lat: 8.5,   lng: 8.5,   note: "Africa's top ginger exporter",                                          climate: "Tropical" },
  { plant: "Ginger",       region: "Jamaica",                       country: "Jamaica",             lat: 18.1,  lng: -77.3, note: "Prized aromatic variety for exports",                                   climate: "Tropical" },
  { plant: "Garlic",       region: "Central Asia (Origin)",         country: "Kyrgyzstan",          lat: 42.0,  lng: 75.0,  note: "Wild ancestor Allium longicuspis still found here",                    climate: "Continental" },
  { plant: "Garlic",       region: "Shandong, China",               country: "China",               lat: 36.0,  lng: 117.0, note: "China produces 80% of world supply",                                   climate: "Temperate" },
  { plant: "Garlic",       region: "Gujarat & MP, India",           country: "India",               lat: 22.5,  lng: 73.5,  note: "India 2nd largest producer",                                           climate: "Semi-arid" },
  { plant: "Tulsi",        region: "Indian Subcontinent (Origin)",  country: "India",               lat: 23.0,  lng: 80.0,  note: "Present in virtually every Hindu household",                           climate: "Tropical" },
  { plant: "Tulsi",        region: "Northeast India",               country: "India",               lat: 26.2,  lng: 92.5,  note: "Rich biodiversity of wild varieties in Assam",                         climate: "Tropical humid" },
  { plant: "Tulsi",        region: "Thailand / SE Asia",            country: "Thailand",            lat: 13.7,  lng: 100.5, note: "Kra Prao — staple of Thai cuisine and medicine",                       climate: "Tropical" },
  { plant: "Neem",         region: "Myanmar / India (Origin)",      country: "Myanmar",             lat: 21.0,  lng: 96.0,  note: "Originated in Assam-Myanmar dry forests",                              climate: "Tropical dry" },
  { plant: "Neem",         region: "Andhra Pradesh, India",         country: "India",               lat: 15.5,  lng: 79.5,  note: "Highest Neem oil quality; mass cultivation",                           climate: "Tropical" },
  { plant: "Neem",         region: "Sahel, West Africa",            country: "Mali / Senegal",      lat: 14.0,  lng: -3.0,  note: "Planted across Sahel for land restoration",                           climate: "Arid" },
  { plant: "Ashwagandha",  region: "Rajasthan & MP (Core)",         country: "India",               lat: 24.5,  lng: 74.0,  note: "MP & Rajasthan produce 75% of India's supply",                        climate: "Semi-arid" },
  { plant: "Ashwagandha",  region: "Pakistan (Balochistan)",        country: "Pakistan",            lat: 28.5,  lng: 67.5,  note: "Wild plants in dry rocky terrain",                                     climate: "Arid" },
  { plant: "Ashwagandha",  region: "Iran",                          country: "Iran",                lat: 33.0,  lng: 53.5,  note: "Used in Unani medicine; grows wild in Isfahan plateau",                climate: "Semi-arid" },
  { plant: "Peppermint",   region: "Barabanki, Uttar Pradesh",      country: "India",               lat: 26.9,  lng: 81.2,  note: "India is world's #1 peppermint oil exporter",                         climate: "Subtropical" },
  { plant: "Peppermint",   region: "Willamette Valley, Oregon",     country: "USA",                 lat: 44.9,  lng: -123.0,note: "USA's primary peppermint belt",                                        climate: "Oceanic" },
  { plant: "Peppermint",   region: "Mitcham, England (Origin)",     country: "UK",                  lat: 51.4,  lng: -0.17, note: "First cultivated here in late 1600s",                                  climate: "Temperate" },
  { plant: "Chamomile",    region: "Hungary (Top Producer)",        country: "Hungary",             lat: 47.2,  lng: 19.5,  note: "Highest chamazulene content; EU standard",                             climate: "Temperate" },
  { plant: "Chamomile",    region: "Egypt (Top Exporter)",          country: "Egypt",               lat: 30.8,  lng: 30.0,  note: "Largest global exporter of dried flowers",                            climate: "Mediterranean" },
  { plant: "Chamomile",    region: "Himachal Pradesh, India",       country: "India",               lat: 31.8,  lng: 77.2,  note: "Introduced cultivation at 1500–2500m altitude",                       climate: "Subtropical highland" },
  { plant: "Lavender",     region: "Provence, France (Heartland)",  country: "France",              lat: 43.8,  lng: 5.5,   note: "80% of world fine lavender; UNESCO heritage",                         climate: "Mediterranean" },
  { plant: "Lavender",     region: "Bulgarian Rose Valley",         country: "Bulgaria",            lat: 42.5,  lng: 25.5,  note: "Second-largest lavender oil producer",                                 climate: "Temperate" },
  { plant: "Lavender",     region: "Castile, Spain",                country: "Spain",               lat: 40.5,  lng: -2.5,  note: "Lavandin dominates; used in folk medicine",                           climate: "Continental Mediterranean" },
  { plant: "Eucalyptus",   region: "Victoria, Australia (Origin)",  country: "Australia",           lat: -37.0, lng: 145.0, note: "E. globulus native to coastal Victoria/Tasmania",                     climate: "Temperate" },
  { plant: "Eucalyptus",   region: "Nilgiri Hills, India",          country: "India",               lat: 11.4,  lng: 76.7,  note: "Mass-planted from 1800s; dominant landscape species",                 climate: "Subtropical highland" },
  { plant: "Eucalyptus",   region: "Portugal",                      country: "Portugal",            lat: 39.5,  lng: -8.0,  note: "World's largest plantation per capita",                               climate: "Mediterranean" },
  { plant: "Basil",        region: "South Asia (Origin)",           country: "India / Nepal",       lat: 27.0,  lng: 83.0,  note: "Greatest genetic diversity here",                                     climate: "Tropical" },
  { plant: "Basil",        region: "Liguria, Italy",                country: "Italy",               lat: 44.4,  lng: 8.9,   note: "Genovese Basil DOP — authentic pesto",                                climate: "Mediterranean" },
  { plant: "Basil",        region: "Karnataka & Tamil Nadu, India", country: "India",               lat: 13.5,  lng: 77.5,  note: "Krishna Tulsi and Sabja widely grown",                                climate: "Tropical" },
];

const haversineKm = (lat1, lng1, lat2, lng2) => {
  const R = 6371, dLat = ((lat2 - lat1) * Math.PI) / 180, dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const formatDist = (km) => km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;

const TABS = [
  { label: "maps.nearbyStores", Icon: Store   },
  { label: "maps.myFinds",      Icon: MapPin  },
  { label: "maps.community",    Icon: Globe   },
  { label: "maps.plantRanges",  Icon: Leaf    },
];

const RADIUS_OPTIONS = [2000, 5000, 10000, 20000];
const RADIUS_LABELS  = ["2 km", "5 km", "10 km", "20 km"];

const STORE_FILTERS = ["all", "pharmacy", "clinic", "ayurvedic", "herbal", "health"];
const STORE_FILTER_LABELS = {
  all: "All", pharmacy: "Pharmacy", clinic: "Hospital / Clinic",
  ayurvedic: "Ayurvedic", herbal: "Herbal", health: "Health Food",
};

const CAT_COLORS = {
  pharmacy:  { bg: "#dbeafe", text: "#1e40af", dot: "#3b82f6" },
  clinic:    { bg: "#fee2e2", text: "#991b1b", dot: "#ef4444" },
  ayurvedic: { bg: "#dcfce7", text: "#166534", dot: "#22c55e" },
  herbal:    { bg: "#d1fae5", text: "#065f46", dot: "#10b981" },
  health:    { bg: "#fef9c3", text: "#854d0e", dot: "#eab308" },
};

// Map markers
const Dot = ({ color = "#16a34a", size = 12, onClick }) => (
  <div onClick={onClick} style={{
    width: size, height: size, borderRadius: "50%",
    background: color, border: "2px solid #fff",
    boxShadow: "0 1px 5px rgba(0,0,0,0.3)", cursor: "pointer",
  }} />
);

const UserPin = () => (
  <div style={{ position: "relative", width: 20, height: 28, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
    <svg viewBox="0 0 20 28" style={{ width: 20, height: 28 }}>
      <path d="M10 0C4.48 0 0 4.48 0 10c0 7.5 10 18 10 18s10-10.5 10-18C20 4.48 15.52 0 10 0z" fill="#dc2626"/>
      <circle cx="10" cy="10" r="4" fill="white"/>
    </svg>
  </div>
);

const SearchPin = () => (
  <div style={{ position: "relative", width: 20, height: 28, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
    <svg viewBox="0 0 20 28" style={{ width: 20, height: 28 }}>
      <path d="M10 0C4.48 0 0 4.48 0 10c0 7.5 10 18 10 18s10-10.5 10-18C20 4.48 15.52 0 10 0z" fill="#7c3aed"/>
      <circle cx="10" cy="10" r="4" fill="white"/>
    </svg>
  </div>
);

const hasValidCoords = (item) => {
  const lat = Number(item?.location?.lat ?? item?.lat);
  const lng = Number(item?.location?.lng ?? item?.lng);
  return Number.isFinite(lat) && Number.isFinite(lng);
};

const normalizeCoords = (item) => {
  if (!hasValidCoords(item)) return null;
  return {
    ...item,
    lat: item?.location?.lat != null ? Number(item.location.lat) : Number(item?.lat),
    lng: item?.location?.lng != null ? Number(item.location.lng) : Number(item?.lng),
    location: item?.location
      ? {
          ...item.location,
          lat: Number(item.location.lat),
          lng: Number(item.location.lng),
        }
      : item?.lat != null && item?.lng != null
        ? { lat: Number(item.lat), lng: Number(item.lng) }
        : item?.location,
  };
};

const Maps = () => {
  const { t } = useTranslation();
  const mapRef        = useRef(null);
  const searchTimeout = useRef(null);
  const pendingFly    = useRef(null);

  const [activeTab, setActiveTab]               = useState(0);
  const [userLocation, setUserLocation]         = useState(null);  // GPS or manual
  const [searchLocation, setSearchLocation]     = useState(null);  // searched pin (separate from user's actual GPS)
  const [locationMode, setLocationMode]         = useState("gps");
  const [locationError, setLocationError]       = useState(null);
  const [locSearch, setLocSearch]               = useState("");
  const [locResults, setLocResults]             = useState([]);
  const [locSearching, setLocSearching]         = useState(false);
  const [showLocDrop, setShowLocDrop]           = useState(false);
  const [clickMode, setClickMode]               = useState(false);
  const [overpassError, setOverpassError]       = useState("");
  const [stores, setStores]                     = useState([]);
  const [myFinds, setMyFinds]                   = useState([]);
  const [community, setCommunity]               = useState([]);
  const [radius, setRadius]                     = useState(5000);
  const [loadingStores, setLoadingStores]       = useState(false);
  const [loadingFinds, setLoadingFinds]         = useState(false);
  const [loadingCommunity, setLoadingCommunity] = useState(false);
  const [storeTypeFilter, setStoreTypeFilter]   = useState("all");
  const [plantFilter, setPlantFilter]           = useState("All");
  const [rangeSearch, setRangeSearch]           = useState("");
  const [selectedMarker, setSelectedMarker]     = useState(null);
  const [storeSearch, setStoreSearch]           = useState("");

  // The active location used for store searches (searched location takes priority over GPS)
  const activeLocation = searchLocation || userLocation;

  const flyTo = useCallback((lat, lng, zoom = 15) => {
    if (mapRef.current) {
      mapRef.current.flyTo({ center: [lng, lat], zoom, duration: 900 });
    } else {
      pendingFly.current = { lat, lng, zoom };
    }
  }, []);

  // GPS
  const getGPS = useCallback(() => {
    if (!navigator.geolocation) { setLocationError("Geolocation not supported."); return; }
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(loc);
        setSearchLocation(null);   // clear any manual search pin
        setLocationMode("gps");
        setLocSearch("");
        setStores([]);
        flyTo(loc.lat, loc.lng, 15);
      },
      () => setLocationError("Location access denied. Enable it in browser settings.")
    );
  }, [flyTo]);

  useEffect(() => { getGPS(); }, []);

  // Nominatim location search
  const handleLocInput = (e) => {
    const val = e.target.value;
    setLocSearch(val);
    setShowLocDrop(true);
    clearTimeout(searchTimeout.current);
    if (!val.trim()) { setLocResults([]); return; }
    searchTimeout.current = setTimeout(async () => {
      setLocSearching(true);
      try {
        const res = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: { q: val, format: "json", limit: 7, addressdetails: 1, countrycodes: "" },
          headers: { "Accept-Language": "en" },
          withCredentials: false,
        });
        setLocResults(res.data || []);
      } catch { setLocResults([]); }
      finally { setLocSearching(false); }
    }, 350);
  };

  const pickLocResult = (r) => {
    const loc = { lat: parseFloat(r.lat), lng: parseFloat(r.lon) };
    setSearchLocation(loc);
    setLocationMode("manual");
    const label = [r.address?.city || r.address?.town || r.address?.village, r.address?.state, r.address?.country]
      .filter(Boolean).slice(0, 2).join(", ") || r.display_name.split(",").slice(0, 2).join(", ");
    setLocSearch(label);
    setLocResults([]);
    setShowLocDrop(false);
    setStores([]);
    setSelectedMarker(null);
    flyTo(loc.lat, loc.lng, 14);
  };

  // Map click pin
  const handleMapClick = useCallback((e) => {
    if (!clickMode) return;
    const loc = { lat: e.lngLat.lat, lng: e.lngLat.lng };
    setSearchLocation(loc);
    setLocationMode("manual");
    setLocSearch(`${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`);
    setStores([]);
    setClickMode(false);
    setSelectedMarker(null);
    flyTo(loc.lat, loc.lng, 15);
  }, [clickMode, flyTo]);

  // Fetch stores with Overpass — triggered whenever activeLocation or radius changes
  const fetchStores = useCallback(async () => {
    if (!activeLocation) return;
    setLoadingStores(true);
    setOverpassError("");
    setStores([]);
    try {
      const { lat, lng } = activeLocation;
      const query = `[out:json][timeout:20];
(
  nwr["amenity"~"^(pharmacy|hospital|clinic|doctors|health_centre|dentist|veterinary)$"](around:${radius},${lat},${lng});
  nwr["healthcare"](around:${radius},${lat},${lng});
  nwr["shop"~"^(herbalist|chemist|medical_supply|nutrition_supplements|organic)$"](around:${radius},${lat},${lng});
);
out body center;`;
      const res = await axios.post(
        "https://overpass-api.de/api/interpreter",
        "data=" + encodeURIComponent(query),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          timeout: 25000,
          withCredentials: false,
        }
      );
      const elements = res.data?.elements || [];
      const mapped = elements.map((el) => {
        const elLat = Number(el.lat ?? el.center?.lat);
        const elLng = Number(el.lon ?? el.center?.lon);
        if (!Number.isFinite(elLat) || !Number.isFinite(elLng)) return null;
        const tags = el.tags || {};
        const name = tags.name || tags["name:en"] || "";
        if (!name) return null;
        const dist = haversineKm(lat, lng, elLat, elLng);
        if (dist > radius / 1000 + 0.5) return null; // strict range check
        return {
          id:       el.id.toString(),
          name,
          lat:      elLat,
          lng:      elLng,
          dist,
          types:    [tags.amenity, tags.healthcare, tags.shop].filter(Boolean),
          vicinity: [tags["addr:housenumber"], tags["addr:street"], tags["addr:suburb"], tags["addr:city"]]
            .filter(Boolean).join(", "),
          phone:        tags.phone || tags["contact:phone"] || "",
          opening_hours: tags.opening_hours || "",
          website:      tags.website || tags["contact:website"] || "",
          rawTags:  tags,
        };
      }).filter(Boolean).sort((a, b) => a.dist - b.dist);
      setStores(mapped);
    } catch (err) {
      console.error("Overpass error:", err);
      setOverpassError(
        err?.response?.status === 504
          ? "Nearby-store search timed out. Try again, reduce the radius, or switch location."
          : "Could not load nearby stores right now."
      );
    } finally {
      setLoadingStores(false);
    }
  }, [activeLocation, radius]);

  useEffect(() => { if (activeTab === 0) fetchStores(); }, [activeTab, fetchStores]);

  // My Finds
  useEffect(() => {
    if (activeTab !== 1 || myFinds.length > 0) return;
    setLoadingFinds(true);
    axios.get("/api/safety/history", { withCredentials: true })
      .then((res) => setMyFinds((res.data?.data || []).map(normalizeCoords).filter(Boolean)))
      .catch(() => {})
      .finally(() => setLoadingFinds(false));
  }, [activeTab]);

  // Community
  useEffect(() => {
    if (activeTab !== 2 || community.length > 0) return;
    setLoadingCommunity(true);
    axios.get("/api/safety/community-sightings", { withCredentials: true })
      .then((res) => setCommunity((res.data?.data || []).map(normalizeCoords).filter(Boolean)))
      .catch(() => {})
      .finally(() => setLoadingCommunity(false));
  }, [activeTab]);

  const getStoreType = (el) => {
    const types = el.types || [];
    const tags  = el.rawTags || {};
    const name  = (el.name || "").toLowerCase();
    if (types.includes("pharmacy") || tags.shop === "chemist")      return { label: "Pharmacy",       cat: "pharmacy"  };
    if (types.includes("hospital"))                                  return { label: "Hospital",        cat: "clinic"    };
    if (types.includes("doctors") || types.includes("clinic"))      return { label: "Clinic",          cat: "clinic"    };
    if (types.includes("health_centre"))                             return { label: "Health Centre",   cat: "clinic"    };
    if (types.includes("dentist"))                                   return { label: "Dental Clinic",   cat: "clinic"    };
    if (types.includes("veterinary"))                                return { label: "Veterinary",      cat: "clinic"    };
    if (tags.shop === "herbalist")                                   return { label: "Herbal Store",    cat: "herbal"    };
    if (tags.shop === "medical_supply")                              return { label: "Medical Supply",  cat: "clinic"    };
    if (tags.shop === "nutrition_supplements" || tags.shop === "organic") return { label: "Health Food", cat: "health" };
    if (tags.healthcare === "pharmacy")                              return { label: "Pharmacy",        cat: "pharmacy"  };
    if (tags.healthcare === "hospital")                              return { label: "Hospital",        cat: "clinic"    };
    if (tags.healthcare === "clinic")                                return { label: "Clinic",          cat: "clinic"    };
    if (/apollo/i.test(name))       return { label: "Apollo Pharmacy",   cat: "pharmacy"  };
    if (/medplus/i.test(name))      return { label: "MedPlus",           cat: "pharmacy"  };
    if (/netmeds/i.test(name))      return { label: "Netmeds",           cat: "pharmacy"  };
    if (/ayurved|siddha|panchakarma|vaidya|aushadhi|kottakkal/i.test(name)) return { label: "Ayurvedic", cat: "ayurvedic" };
    if (/unani|hakeem/i.test(name)) return { label: "Unani Medicine",    cat: "ayurvedic" };
    if (/herbal|herb/i.test(name))  return { label: "Herbal Store",      cat: "herbal"    };
    if (/homeo/i.test(name))        return { label: "Homeopathy",        cat: "herbal"    };
    if (/hospital|nursing/i.test(name)) return { label: "Hospital",      cat: "clinic"    };
    if (/clinic|dispensary/i.test(name)) return { label: "Clinic",       cat: "clinic"    };
    if (/pharmacy|chemist|medical|medicine/i.test(name)) return { label: "Pharmacy", cat: "pharmacy" };
    if (/wellness|naturo/i.test(name)) return { label: "Wellness",       cat: "ayurvedic" };
    return { label: "Medical Store", cat: "health" };
  };

  const filteredStores = stores.filter((el) => {
    if (storeTypeFilter !== "all" && getStoreType(el).cat !== storeTypeFilter) return false;
    if (storeSearch && !el.name.toLowerCase().includes(storeSearch.toLowerCase())) return false;
    return true;
  });

  const filteredRegions = PLANT_REGIONS.filter((r) => {
    const matchPlant = plantFilter === "All" || r.plant === plantFilter;
    const q = rangeSearch.toLowerCase();
    return matchPlant && (!q || r.plant.toLowerCase().includes(q) || r.region.toLowerCase().includes(q) || r.country.toLowerCase().includes(q));
  });

  const dirUrl = (el) => activeLocation
    ? `https://www.google.com/maps/dir/?api=1&origin=${activeLocation.lat},${activeLocation.lng}&destination=${el.lat},${el.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${el.lat},${el.lng}`;

  return (
    <div className="mp-page">
      <header className="mp-header">
        <BackButton to="/dashboard" label={t("nav.dashboard")} />
        <span className="mp-header-title">{t("maps.title")}</span>
      </header>

      <div className="mp-layout">
        {/* ── Sidebar ── */}
        <aside className="mp-sidebar">

          {/* Tabs */}
          <nav className="mp-tabs">
            {TABS.map(({ label, Icon }, i) => (
              <button key={i} className={`mp-tab ${activeTab === i ? "mp-tab--active" : ""}`} onClick={() => setActiveTab(i)}>
                <Icon size={18} strokeWidth={1.75} />
                <span className="mp-tab-label">{t(label)}</span>
              </button>
            ))}
          </nav>

          {/* Location bar */}
          <div className="mp-loc-bar">
            <div className="mp-loc-search-wrap">
              <Search size={14} strokeWidth={2} className="mp-loc-icon" />
              <input
                className="mp-loc-input"
                type="text"
                placeholder={t("maps.searchLocation")}
                value={locSearch}
                onChange={handleLocInput}
                onFocus={() => setShowLocDrop(true)}
                onBlur={() => setTimeout(() => setShowLocDrop(false), 200)}
              />
              {locSearching && <div className="mp-loc-spinner" />}
              {locSearch && !locSearching && (
                <button className="mp-loc-clear" onClick={() => { setLocSearch(""); setLocResults([]); setSearchLocation(null); setLocationMode("gps"); setStores([]); }}>
                  <X size={12} strokeWidth={2.5} />
                </button>
              )}
            </div>

            {showLocDrop && locResults.length > 0 && (
              <ul className="mp-loc-drop">
                {locResults.map((r) => (
                  <li key={r.place_id} className="mp-loc-drop-item" onMouseDown={() => pickLocResult(r)}>
                    <MapPinned size={13} strokeWidth={1.75} className="mp-loc-drop-icon" />
                    <div className="mp-loc-drop-text">
                      <span className="mp-loc-drop-main">{r.display_name.split(",")[0]}</span>
                      <span className="mp-loc-drop-sub">{r.display_name.split(",").slice(1, 3).join(",")}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mp-loc-actions">
              <button className={`mp-loc-btn ${clickMode ? "mp-loc-btn--active" : ""}`} onClick={() => setClickMode((v) => !v)}>
                <MapPin size={12} strokeWidth={2} />
                {clickMode ? t("maps.clickMap") : t("maps.pinOnMap")}
              </button>
              <button className="mp-loc-btn" onClick={getGPS}>
                <LocateFixed size={12} strokeWidth={2} />
                {t("maps.myLocation")}
              </button>
              {locationMode === "manual" && <span className="mp-loc-badge">{t("maps.customPin")}</span>}
            </div>
          </div>

          {/* Panel */}
          <div className="mp-panel">

            {/* Tab 0: Nearby Stores */}
            {activeTab === 0 && (
              <>
                <div className="mp-panel-top">
                  <p className="mp-panel-title">{t("maps.nearbyMedicalStores")}</p>
                  {activeLocation && (
                    <p className="mp-panel-sub">
                      {locationMode === "manual" ? t("maps.resultsSelectedLocation") : t("maps.resultsCurrentLocation")}
                    </p>
                  )}
                  <div className="mp-radius-row">
                    {RADIUS_OPTIONS.map((r, i) => (
                      <button key={r} className={`mp-radius-chip ${radius === r ? "active" : ""}`} onClick={() => setRadius(r)}>
                        {RADIUS_LABELS[i]}
                      </button>
                    ))}
                  </div>
                  <div className="mp-store-search-wrap">
                    <Search size={13} strokeWidth={2} className="mp-store-search-icon" />
                    <input
                      className="mp-store-search"
                      type="text"
                      placeholder={t("maps.filterByName")}
                      value={storeSearch}
                      onChange={(e) => setStoreSearch(e.target.value)}
                    />
                    {storeSearch && <button className="mp-loc-clear" onClick={() => setStoreSearch("")}><X size={11} /></button>}
                  </div>
                  <div className="mp-type-filter">
                    {STORE_FILTERS.map((f) => (
                      <button key={f} className={`mp-type-chip ${storeTypeFilter === f ? "active" : ""}`} onClick={() => setStoreTypeFilter(f)}>
                        {STORE_FILTER_LABELS[f]}
                      </button>
                    ))}
                  </div>
                </div>

                {locationError && (
                  <div className="mp-banner mp-banner--warn">
                    <AlertCircle size={14} strokeWidth={2} style={{ flexShrink: 0 }} />
                    {locationError}
                  </div>
                )}
                {overpassError && (
                  <div className="mp-banner mp-banner--warn">
                    <AlertCircle size={14} strokeWidth={2} style={{ flexShrink: 0 }} />
                    {overpassError}
                  </div>
                )}
                {!activeLocation && !locationError && (
                  <div className="mp-empty">
                    <div className="mp-empty-icon-wrap"><LocateFixed size={20} /></div>
                    <p className="mp-empty-title">{t("maps.noLocationSet")}</p>
                    <p className="mp-empty-hint">{t("maps.allowGps")}</p>
                  </div>
                )}
                {loadingStores && (
                  <div className="mp-loading"><div className="mp-spinner" /><span>{t("maps.searchingNearby")}</span></div>
                )}
                {!loadingStores && stores.length > 0 && (
                  <p className="mp-result-count">{filteredStores.length} of {stores.length} results</p>
                )}
                {!loadingStores && activeLocation && stores.length === 0 && (
                  <div className="mp-empty">
                    <div className="mp-empty-icon-wrap"><Store size={20} /></div>
                    <p className="mp-empty-title">{t("maps.noStoresFound")}</p>
                    <p className="mp-empty-hint">{t("maps.tryLargerRadius")}</p>
                  </div>
                )}

                <ul className="mp-list">
                  {filteredStores.map((el) => {
                    const type = getStoreType(el);
                    const cc   = CAT_COLORS[type.cat] || CAT_COLORS.health;
                    return (
                      <li key={el.id}
                        className={`mp-card ${selectedMarker?.data?.id === el.id ? "mp-card--active" : ""}`}
                        onClick={() => { setSelectedMarker({ type: "store", data: el }); flyTo(el.lat, el.lng, 17); }}>
                        <div className="mp-card-dot" style={{ background: cc.dot }} />
                        <div className="mp-card-body">
                          <div className="mp-card-top-row">
                            <p className="mp-card-title">{el.name}</p>
                            <span className="mp-card-dist">{formatDist(el.dist)}</span>
                          </div>
                          <span className="mp-card-tag" style={{ background: cc.bg, color: cc.text }}>{type.label}</span>
                          {el.vicinity && <p className="mp-card-sub"><span>{el.vicinity}</span></p>}
                          {el.opening_hours && <p className="mp-card-sub">{el.opening_hours}</p>}
                        </div>
                        <a href={dirUrl(el)} target="_blank" rel="noopener noreferrer"
                          className="mp-dir-btn" onClick={(e) => e.stopPropagation()}
                          title="Get directions">
                          <Navigation size={15} strokeWidth={1.75} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* Tab 1: My Finds */}
            {activeTab === 1 && (
              <>
                <div className="mp-panel-top">
                  <p className="mp-panel-title">{t("maps.myPlantFinds")}</p>
                  <p className="mp-panel-sub">{t("maps.plantsScannedWithLocation")}</p>
                </div>
                {loadingFinds && <div className="mp-loading"><div className="mp-spinner" /><span>{t("maps.loadingFinds")}</span></div>}
                {!loadingFinds && myFinds.length === 0 && (
                  <div className="mp-empty">
                    <div className="mp-empty-icon-wrap"><MapPin size={20} /></div>
                    <p className="mp-empty-title">{t("maps.noPinnedFinds")}</p>
                    <p className="mp-empty-hint">{t("maps.allowLocationAccess")}</p>
                  </div>
                )}
                <ul className="mp-list">
                  {myFinds.map((scan) => {
                    const color = SAFETY_COLORS[scan.safetyRating] || "#6b7280";
                    return (
                      <li key={scan._id}
                        className={`mp-card ${selectedMarker?.data?._id === scan._id ? "mp-card--active" : ""}`}
                        onClick={() => { setSelectedMarker({ type: "find", data: scan }); flyTo(scan.location.lat, scan.location.lng, 16); }}>
                        <div className="mp-card-dot" style={{ background: color }} />
                        <div className="mp-card-body">
                          <div className="mp-card-top-row">
                            <p className="mp-card-title">{scan.plantName}</p>
                            <span className="mp-card-badge" style={{ background: color + "18", color }}>{scan.safetyRating}</span>
                          </div>
                          <p className="mp-card-sub">{t("maps.for")} {scan.familyMemberName}</p>
                          <p className="mp-card-sub">{new Date(scan.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                        </div>
                        <ChevronRight size={14} strokeWidth={2} className="mp-card-chevron" />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* Tab 2: Community */}
            {activeTab === 2 && (
              <>
                <div className="mp-panel-top">
                  <p className="mp-panel-title">{t("maps.communitySightings")}</p>
                  <p className="mp-panel-sub">{t("maps.plantsSpottedByAll")}</p>
                </div>
                {loadingCommunity && <div className="mp-loading"><div className="mp-spinner" /><span>{t("maps.loading")}</span></div>}
                {!loadingCommunity && community.length === 0 && (
                  <div className="mp-empty">
                    <div className="mp-empty-icon-wrap"><Globe size={20} /></div>
                    <p className="mp-empty-title">{t("maps.noSightingsYet")}</p>
                    <p className="mp-empty-hint">{t("maps.scanPlantToContribute")}</p>
                  </div>
                )}
                {!loadingCommunity && community.length > 0 && (
                  <p className="mp-result-count">{community.length} sighting{community.length !== 1 ? "s" : ""}</p>
                )}
                <ul className="mp-list">
                  {community.map((s, i) => {
                    const color = SAFETY_COLORS[s.safetyRating] || "#6b7280";
                    return (
                      <li key={i} className="mp-card"
                        onClick={() => { setSelectedMarker({ type: "community", data: s }); flyTo(s.location.lat, s.location.lng, 15); }}>
                        <div className="mp-card-dot" style={{ background: color }} />
                        <div className="mp-card-body">
                          <div className="mp-card-top-row">
                            <p className="mp-card-title">{s.plantName}</p>
                            <span className="mp-card-badge" style={{ background: color + "18", color }}>{s.safetyRating}</span>
                          </div>
                          <p className="mp-card-sub">{new Date(s.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                        </div>
                        <ChevronRight size={14} strokeWidth={2} className="mp-card-chevron" />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {/* Tab 3: Plant Ranges */}
            {activeTab === 3 && (
              <>
                <div className="mp-panel-top">
                  <p className="mp-panel-title">{t("maps.nativeGrowingRegions")}</p>
                  <p className="mp-panel-sub">{t("maps.whereRootedPlantsGrow")}</p>
                  <div className="mp-store-search-wrap" style={{ marginTop: 10 }}>
                    <Search size={13} strokeWidth={2} className="mp-store-search-icon" />
                    <input
                      className="mp-store-search"
                      type="text"
                      placeholder={t("maps.searchPlantRegionCountry")}
                      value={rangeSearch}
                      onChange={(e) => setRangeSearch(e.target.value)}
                    />
                    {rangeSearch && <button className="mp-loc-clear" onClick={() => setRangeSearch("")}><X size={11} /></button>}
                  </div>
                  <div className="mp-plant-filter">
                    {PLANT_LIST.map((p) => (
                      <button key={p}
                        className={`mp-plant-chip ${plantFilter === p ? "active" : ""}`}
                        style={p !== "All" && plantFilter === p ? { borderColor: PLANT_COLORS[p], color: PLANT_COLORS[p], background: PLANT_COLORS[p] + "18" } : {}}
                        onClick={() => {
                          setPlantFilter(p);
                          if (p !== "All") { const first = PLANT_REGIONS.find((r) => r.plant === p); if (first) flyTo(first.lat, first.lng, 4); }
                          else flyTo(20, 78, 3);
                        }}
                      >
                        {p === "All" ? t("maps.allPlants") : p}
                      </button>
                    ))}
                  </div>
                </div>
                {filteredRegions.length > 0 && (
                  <p className="mp-result-count">{filteredRegions.length} region{filteredRegions.length !== 1 ? "s" : ""}</p>
                )}
                <ul className="mp-list">
                  {filteredRegions.map((r, i) => (
                    <li key={i} className="mp-card"
                      onClick={() => { setSelectedMarker({ type: "range", data: r }); flyTo(r.lat, r.lng, 6); }}>
                      <div className="mp-card-dot" style={{ background: PLANT_COLORS[r.plant] || "#f59e0b" }} />
                      <div className="mp-card-body">
                        <p className="mp-card-title">{r.plant}</p>
                        <p className="mp-card-region">{r.region}</p>
                        <p className="mp-card-sub">{r.country} · {r.climate}</p>
                        <p className="mp-card-note">{r.note}</p>
                      </div>
                      <ChevronRight size={14} strokeWidth={2} className="mp-card-chevron" />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Legend */}
          <div className="mp-legend">
            {userLocation && <span className="mp-legend-item"><span className="mp-legend-dot" style={{ background: "#dc2626" }} />{t("maps.yourLocation")}</span>}
            {locationMode === "manual" && searchLocation && <span className="mp-legend-item"><span className="mp-legend-dot" style={{ background: "#7c3aed" }} />{t("maps.searchPin")}</span>}
            {activeTab === 0 && stores.length > 0 && (
              Object.entries(CAT_COLORS).map(([cat, c]) =>
                stores.some(s => getStoreType(s).cat === cat) ? (
                  <span key={cat} className="mp-legend-item">
                    <span className="mp-legend-dot" style={{ background: c.dot }} />{STORE_FILTER_LABELS[cat]}
                  </span>
                ) : null
              )
            )}
            {(activeTab === 1 || activeTab === 2) && <>
              <span className="mp-legend-item"><span className="mp-legend-dot" style={{ background: "#16a34a" }} />{t("maps.safe")}</span>
              <span className="mp-legend-item"><span className="mp-legend-dot" style={{ background: "#d97706" }} />{t("maps.caution")}</span>
              <span className="mp-legend-item"><span className="mp-legend-dot" style={{ background: "#dc2626" }} />{t("maps.avoid")}</span>
            </>}
          </div>
        </aside>

        {/* ── Map ── */}
        <div className="mp-map" style={{ cursor: clickMode ? "crosshair" : "default" }}>
          {clickMode && <div className="mp-click-hint">{t("maps.clickToDropPin")}</div>}
          <Map
            ref={mapRef}
            initialViewState={{ longitude: 78, latitude: 20, zoom: 4 }}
            style={{ width: "100%", height: "100%" }}
            mapStyle={MAP_STYLE}
            onClick={handleMapClick}
            onLoad={() => {
              if (pendingFly.current) {
                const { lat, lng, zoom } = pendingFly.current;
                pendingFly.current = null;
                mapRef.current?.flyTo({ center: [lng, lat], zoom, duration: 800 });
              }
            }}
          >
            <NavigationControl position="top-right" />

            {/* GPS user pin */}
            {userLocation && (
              <Marker longitude={userLocation.lng} latitude={userLocation.lat} anchor="bottom">
                <UserPin />
              </Marker>
            )}

            {/* Searched/manual location pin */}
            {searchLocation && (
              <Marker longitude={searchLocation.lng} latitude={searchLocation.lat} anchor="bottom">
                <SearchPin />
              </Marker>
            )}

            {/* Store markers — color-coded by category */}
            {activeTab === 0 && filteredStores.map((el) => {
              const cc = CAT_COLORS[getStoreType(el).cat] || CAT_COLORS.health;
              return (
                <Marker key={el.id} longitude={el.lng} latitude={el.lat} anchor="center">
                  <Dot color={cc.dot} onClick={() => { setSelectedMarker({ type: "store", data: el }); flyTo(el.lat, el.lng, 17); }} />
                </Marker>
              );
            })}

            {/* My Finds markers */}
            {activeTab === 1 && myFinds.map((scan) => (
              <Marker key={scan._id} longitude={scan.location.lng} latitude={scan.location.lat} anchor="center">
                <Dot color={SAFETY_COLORS[scan.safetyRating] || "#6b7280"} onClick={() => setSelectedMarker({ type: "find", data: scan })} />
              </Marker>
            ))}

            {/* Community markers */}
            {activeTab === 2 && community.map((s, i) => (
              <Marker key={i} longitude={s.location.lng} latitude={s.location.lat} anchor="center">
                <Dot color={SAFETY_COLORS[s.safetyRating] || "#6b7280"} size={10} onClick={() => setSelectedMarker({ type: "community", data: s })} />
              </Marker>
            ))}

            {/* Plant range markers */}
            {activeTab === 3 && filteredRegions.map((r, i) => (
              <Marker key={i} longitude={r.lng} latitude={r.lat} anchor="center">
                <Dot color={PLANT_COLORS[r.plant] || "#f59e0b"} onClick={() => { setSelectedMarker({ type: "range", data: r }); }} />
              </Marker>
            ))}

            {/* Popup */}
            {selectedMarker && (() => {
              const { type, data } = selectedMarker;
              const pLng = type === "store" ? data.lng : type === "range" ? data.lng : data.location?.lng;
              const pLat = type === "store" ? data.lat : type === "range" ? data.lat : data.location?.lat;
              if (pLng == null || pLat == null) return null;
              return (
                <Popup longitude={pLng} latitude={pLat} anchor="bottom"
                  onClose={() => setSelectedMarker(null)} closeOnClick={false} maxWidth="250px">
                  <div className="mp-popup">
                    {type === "store" && (() => {
                      const st = getStoreType(data);
                      const cc = CAT_COLORS[st.cat] || CAT_COLORS.health;
                      return <>
                        <span className="mp-popup-tag" style={{ background: cc.bg, color: cc.text }}>{st.label}</span>
                        <p className="mp-popup-title">{data.name}</p>
                        {data.vicinity      && <p className="mp-popup-row"><span>{t("maps.address")}</span>{data.vicinity}</p>}
                        {data.phone         && <p className="mp-popup-row"><span>{t("maps.phone")}</span>{data.phone}</p>}
                        {data.opening_hours && <p className="mp-popup-row"><span>{t("maps.hours")}</span>{data.opening_hours}</p>}
                        <p className="mp-popup-dist">{formatDist(data.dist)} away</p>
                        <a href={dirUrl(data)} target="_blank" rel="noopener noreferrer" className="mp-popup-dir-btn">
                          <Navigation size={13} strokeWidth={2} /> {t("maps.getDirections")}
                        </a>
                      </>;
                    })()}
                    {type === "find" && <>
                      <p className="mp-popup-title">{data.commonNames?.[0] || data.plantName}</p>
                      {data.scientificName && <p className="mp-popup-scientific"><em>{data.scientificName}</em></p>}
                      <p className="mp-popup-row"><span>{t("maps.for")}</span>{data.familyMemberName}</p>
                      <p className="mp-popup-row"><span>{t("maps.safety")}</span><strong style={{ color: SAFETY_COLORS[data.safetyRating] }}>{data.safetyRating}</strong></p>
                    </>}
                    {type === "community" && <>
                      <p className="mp-popup-title">{data.commonNames?.[0] || data.plantName}</p>
                      {data.scientificName && <p className="mp-popup-scientific"><em>{data.scientificName}</em></p>}
                      <p className="mp-popup-row"><span>{t("maps.type")}</span>{t("maps.communitySighting")}</p>
                      <p className="mp-popup-row"><span>{t("maps.safety")}</span><strong style={{ color: SAFETY_COLORS[data.safetyRating] }}>{data.safetyRating}</strong></p>
                    </>}
                    {type === "range" && <>
                      <p className="mp-popup-title">{data.region}</p>
                      <p className="mp-popup-row"><span>{t("maps.plant")}</span>{data.plant}</p>
                      <p className="mp-popup-row"><span>{t("maps.country")}</span>{data.country}</p>
                      <p className="mp-popup-row"><span>{t("maps.climate")}</span>{data.climate}</p>
                      <p className="mp-popup-note">{data.note}</p>
                    </>}
                  </div>
                </Popup>
              );
            })()}
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Maps;
