import React, { useEffect, useState, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import axios from "axios";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton.jsx";
import { exportToPdf } from "../helpers/exportPdf.js";
import "./ResultsAnalysis.css";

const COLORS = { SAFE: "#22c55e", CAUTION: "#f59e0b", AVOID: "#ef4444" };
const PIE_COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

const CustomBarLabel = ({ x, y, width, value }) => (
  <text x={x + width / 2} y={y - 5} fill="#a8d5b5" fontSize={10} textAnchor="middle">
    {value}%
  </text>
);

const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
  if (!value) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill={COLORS[name]} fontSize={11} fontWeight={700}
      textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {name}: {value}
    </text>
  );
};

const tooltipStyle = {
  contentStyle: {
    background: "#0c1f14",
    border: "1px solid rgba(56,169,111,0.35)",
    borderRadius: 10,
    color: "#e8fff0",
    fontSize: 12,
  },
  cursor: { fill: "rgba(56,169,111,0.08)" },
};

export default function ResultsAnalysis() {
  const { t } = useTranslation();
  const [history, setHistory]       = useState([]);
  const [profiles, setProfiles]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [histRes, profRes] = await Promise.all([
          axios.get("/api/safety/history", { withCredentials: true }),
          axios.get("/api/input/takeuser",  { withCredentials: true }),
        ]);
        const h = histRes.data?.data || [];
        const p = profRes.data?.data  || [];
        setHistory(h);
        setProfiles(Array.isArray(p) ? p : p ? [p] : []);
      } catch (e) {
        setError("Could not load data. Make sure you're logged in.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // ── Derived stats ──────────────────────────────────────────────────
  const stats = useMemo(() => {
    const safe    = history.filter(h => h.safetyRating === "SAFE").length;
    const caution = history.filter(h => h.safetyRating === "CAUTION").length;
    const avoid   = history.filter(h => h.safetyRating === "AVOID").length;
    const uniquePlants = new Set(history.map(h => h.plantName).filter(Boolean)).size;
    const withProb = history.filter(h => h.probability > 0);
    const avgConf = withProb.length
      ? (withProb.reduce((s, h) => s + h.probability, 0) / withProb.length * 100).toFixed(1)
      : null;
    return { total: history.length, safe, caution, avoid, uniquePlants, avgConf };
  }, [history]);

  // ── Plant confidence chart — from real scan data ───────────────────
  const plantConfidenceData = useMemo(() => {
    const map = {};
    history.forEach(h => {
      if (!h.plantName || h.probability == null) return;
      if (!map[h.plantName]) map[h.plantName] = { total: 0, count: 0 };
      map[h.plantName].total += h.probability * 100;
      map[h.plantName].count += 1;
    });
    return Object.entries(map)
      .map(([plant, { total, count }]) => ({
        plant: plant.length > 14 ? plant.slice(0, 13) + "…" : plant,
        fullName: plant,
        confidence: parseFloat((total / count).toFixed(1)),
      }))
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 12);
  }, [history]);

  // ── Safety distribution ───────────────────────────────────────────
  const safetyDistribution = [
    { name: "SAFE",    value: stats.safe    },
    { name: "CAUTION", value: stats.caution },
    { name: "AVOID",   value: stats.avoid   },
  ];

  // ── Per-member scan breakdown (radar) ─────────────────────────────
  const memberBreakdown = useMemo(() => {
    const map = {};
    history.forEach(h => {
      const name = h.familyMemberName || "Unknown";
      if (!map[name]) map[name] = { member: name, scans: 0, safe: 0, caution: 0, avoid: 0 };
      map[name].scans += 1;
      if (h.safetyRating === "SAFE")    map[name].safe    += 1;
      if (h.safetyRating === "CAUTION") map[name].caution += 1;
      if (h.safetyRating === "AVOID")   map[name].avoid   += 1;
    });
    return Object.values(map).slice(0, 6);
  }, [history]);

  // ── Radar — one axis per member, value = total scans ──────────────
  const radarData = memberBreakdown.map(m => ({
    member: m.member.length > 10 ? m.member.slice(0, 9) + "…" : m.member,
    scans:  m.scans,
  }));

  // ── Recent scans table ─────────────────────────────────────────────
  const recentScans = history.slice(0, 15);

  // ── Key findings — generated from real data ───────────────────────
  const findings = useMemo(() => {
    if (!history.length) return [];
    const safeRate = stats.total > 0
      ? ((stats.safe / stats.total) * 100).toFixed(0) : 0;
    const topPlant = plantConfidenceData[0];
    const mostScannedMember = memberBreakdown.sort((a, b) => b.scans - a.scans)[0];
    return [
      {
        title: `${stats.total} Safety Checks Completed`,
        body: `${stats.safe} SAFE · ${stats.caution} CAUTION · ${stats.avoid} AVOID across ${stats.uniquePlants} distinct plant species. ${safeRate}% of scans returned a safe result.`,
        accent: "#22c55e",
      },
      topPlant ? {
        title: "Highest Confidence Identification",
        body: `${topPlant.fullName} achieved the highest average identification confidence at ${topPlant.confidence}% across all scans via Plant.id API v3.`,
        accent: "#38a96f",
      } : null,
      {
        title: "Context-Aware Personalization",
        body: `Safety results are tailored per family member — the same plant can be SAFE for one profile and AVOID for another based on their conditions, medications, and vitals.`,
        accent: "#6366f1",
      },
      mostScannedMember ? {
        title: `Most Active Profile: ${mostScannedMember.member}`,
        body: `${mostScannedMember.member} has ${mostScannedMember.scans} recorded scan${mostScannedMember.scans !== 1 ? "s" : ""} — ${mostScannedMember.safe} safe, ${mostScannedMember.caution} caution, ${mostScannedMember.avoid} avoid results.`,
        accent: "#f59e0b",
      } : null,
    ].filter(Boolean);
  }, [history, stats, plantConfidenceData, memberBreakdown]);

  const live = (val, fallback = "—") => loading ? "…" : val != null ? String(val) : fallback;

  const STAT_CARDS = [
    { label: t("results.totalScans"),       value: live(stats.total),        sub: t("results.safetyChecksPerformed")     },
    { label: t("results.safeResults"),      value: live(stats.safe),         sub: t("results.plantsSafe") },
    { label: t("results.cautionResults"),   value: live(stats.caution),      sub: t("results.useWithCare")               },
    { label: t("results.avoidResults"),     value: live(stats.avoid),        sub: t("results.flaggedHarmful")          },
    { label: t("results.plantsIdentified"), value: live(stats.uniquePlants), sub: t("results.distinctSpecies")    },
    { label: t("results.familyProfiles"),   value: live(profiles.length || null), sub: t("results.membersTracked")       },
    { label: t("results.avgConfidence"),    value: stats.avgConf ? `${stats.avgConf}%` : live(null), sub: t("results.viaPlantId") },
  ];

  if (loading) {
    return (
      <div className="ra-page">
        <BackButton to="/dashboard" label={t("nav.dashboard")} />
        <div className="ra-hero">
          <p className="ra-kicker">ROOTED · Review 2</p>
          <h1 className="ra-title">{t("results.title")}</h1>
          <p className="ra-subtitle">{t("results.loading")}</p>
        </div>
      </div>
    );
  }

  const handleExport = () => exportToPdf(".ra-page", "rooted-results-analysis");

  return (
    <div className="ra-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      {/* ── Hero ── */}
      <div className="ra-hero">
        <div className="ra-hero-glow" />
        <p className="ra-kicker">ROOTED · Review 2</p>
        <h1 className="ra-title">{t("results.title")}</h1>
        <p className="ra-subtitle">{t("results.subtitle")}</p>
        <button className="ra-export-btn" onClick={handleExport}>
          <Download size={14} /> {t("results.exportPdf")}
        </button>

        {error ? (
          <div className="ra-live-pill" style={{ color: "#ef4444", borderColor: "#ef444455" }}>
            {error}
          </div>
        ) : (
          <div className="ra-live-pill">
            <span className="ra-live-dot" />
            Live &mdash; <strong>{stats.total}</strong> scan{stats.total !== 1 ? "s" : ""} &nbsp;·&nbsp;
            <strong>{profiles.length}</strong> profile{profiles.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      <div className="ra-container">

        {/* ── Stat cards ── */}
        <section className="ra-section">
          <h2 className="ra-section-title"><span className="ra-title-bar" />{t("results.overview")}</h2>
          <div className="ra-stats-grid">
            {STAT_CARDS.map((s) => (
              <div key={s.label} className="ra-stat-card ra-stat-card--live">
                <span className="ra-stat-live-dot" />
                <p className="ra-stat-value">{s.value}</p>
                <p className="ra-stat-label">{s.label}</p>
                <p className="ra-stat-sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Safety distribution ── */}
        <section className="ra-section">
          <h2 className="ra-section-title"><span className="ra-title-bar" />{t("results.safetyResults")}</h2>
          <div className="ra-two-col">

            {/* Pie chart */}
            <div className="ra-chart-card">
              <p className="ra-chart-caption">Live scan distribution — {stats.total} total checks</p>
              {stats.total === 0 ? (
                <div className="ra-empty">{t("results.noScansYet")}</div>
              ) : (
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie data={safetyDistribution} cx="50%" cy="50%"
                      innerRadius={64} outerRadius={95} paddingAngle={4}
                      dataKey="value" labelLine={false} label={renderPieLabel}>
                      {safetyDistribution.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i]} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip {...tooltipStyle} formatter={(v, name) => [v, name]} />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <div className="ra-pie-legend">
                {safetyDistribution.map((d, i) => (
                  <span key={d.name} className="ra-pie-legend-item">
                    <span className="ra-pie-dot" style={{ background: PIE_COLORS[i] }} />
                    {d.name} ({d.value})
                  </span>
                ))}
              </div>
            </div>

            {/* Recent scans table */}
            <div className="ra-chart-card ra-test-wrap">
              <p className="ra-chart-caption">
                {recentScans.length > 0
                  ? `Recent scans — latest ${recentScans.length}`
                  : "No scans recorded yet"}
              </p>
              {recentScans.length === 0 ? (
                <div className="ra-empty">{t("results.scanToPopulate")}</div>
              ) : (
                <div className="ra-test-table">
                  {recentScans.map((scan, i) => (
                    <div key={scan._id || i} className="ra-test-row">
                      <span className="ra-test-plant">{scan.plantName || "Unknown"}</span>
                      <span className="ra-test-cond">{scan.familyMemberName || "—"}</span>
                      <span
                        className="ra-test-badge"
                        style={{
                          color: COLORS[scan.safetyRating] || "#ccc",
                          background: (COLORS[scan.safetyRating] || "#ccc") + "1a",
                          borderColor: (COLORS[scan.safetyRating] || "#ccc") + "55",
                        }}
                      >
                        {scan.safetyRating}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Plant ID confidence ── */}
        <section className="ra-section">
          <h2 className="ra-section-title">
            <span className="ra-title-bar" />
            {t("results.plantConfidence")}
            {stats.avgConf && (
              <span className="ra-avg-badge">Avg {stats.avgConf}%</span>
            )}
          </h2>
          <div className="ra-chart-card">
            <p className="ra-chart-caption">
              {plantConfidenceData.length > 0
                ? `Plant.id API v3 · ${plantConfidenceData.length} species from your scan history`
                : t("results.noData")}
            </p>
            {plantConfidenceData.length === 0 ? (
              <div className="ra-empty">{t("results.scanForConfidence")}</div>
            ) : (
              <ResponsiveContainer width="100%" height={290}>
                <BarChart data={plantConfidenceData} margin={{ top: 24, right: 16, left: -10, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,169,111,0.1)" vertical={false} />
                  <XAxis dataKey="plant" tick={{ fill: "#7aad90", fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fill: "#547464", fontSize: 11 }} unit="%" axisLine={false} tickLine={false} />
                  <Tooltip
                    {...tooltipStyle}
                    formatter={(v, _, props) => [`${v}%`, props.payload?.fullName || "Confidence"]}
                  />
                  <Bar dataKey="confidence" radius={[8, 8, 0, 0]} label={<CustomBarLabel />}>
                    {plantConfidenceData.map((entry, i) => (
                      <Cell key={i}
                        fill={entry.confidence >= 90 ? "#22c55e" : entry.confidence >= 75 ? "#38a96f" : "#f59e0b"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
            <div className="ra-conf-legend">
              <span><span className="ra-conf-dot" style={{ background: "#22c55e" }} />≥90% High</span>
              <span><span className="ra-conf-dot" style={{ background: "#38a96f" }} />75–89% Good</span>
              <span><span className="ra-conf-dot" style={{ background: "#f59e0b" }} />Below 75%</span>
            </div>
          </div>
        </section>

        {/* ── Per-member radar ── */}
        {memberBreakdown.length > 0 && (
          <section className="ra-section">
            <h2 className="ra-section-title"><span className="ra-title-bar" />{t("results.scansPerMember")}</h2>
            <div className="ra-chart-card ra-radar-wrap">
              <p className="ra-chart-caption">Total scans per profile — {memberBreakdown.length} member{memberBreakdown.length !== 1 ? "s" : ""}</p>
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={radarData} outerRadius={110}>
                  <PolarGrid stroke="rgba(56,169,111,0.15)" />
                  <PolarAngleAxis dataKey="member" tick={{ fill: "#7aad90", fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} tick={{ fill: "#547464", fontSize: 9 }} axisLine={false} />
                  <Radar name="Scans" dataKey="scans" stroke="#38a96f" strokeWidth={2} fill="#38a96f" fillOpacity={0.25} />
                  <Tooltip {...tooltipStyle} formatter={(v) => [v, "Scans"]} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {/* ── Per-member breakdown bar ── */}
        {memberBreakdown.length > 0 && (
          <section className="ra-section">
            <h2 className="ra-section-title"><span className="ra-title-bar" />{t("results.breakdownByMember")}</h2>
            <div className="ra-chart-card">
              <p className="ra-chart-caption">SAFE / CAUTION / AVOID counts per family member</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={memberBreakdown} margin={{ top: 16, right: 16, left: -10, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,169,111,0.1)" vertical={false} />
                  <XAxis dataKey="member" tick={{ fill: "#7aad90", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#547464", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="safe"    fill="#22c55e" radius={[4,4,0,0]} name="SAFE"    stackId="a" />
                  <Bar dataKey="caution" fill="#f59e0b" radius={[0,0,0,0]} name="CAUTION" stackId="a" />
                  <Bar dataKey="avoid"   fill="#ef4444" radius={[4,4,0,0]} name="AVOID"   stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {/* ── Key findings ── */}
        {findings.length > 0 && (
          <section className="ra-section">
            <h2 className="ra-section-title"><span className="ra-title-bar" />{t("results.keyFindings")}</h2>
            <div className="ra-findings-grid">
              {findings.map((f) => (
                <div key={f.title} className="ra-finding-card" style={{ "--accent": f.accent }}>
                  <div className="ra-finding-top">
                    <div className="ra-finding-accent-bar" />
                  </div>
                  <h4 className="ra-finding-title">{f.title}</h4>
                  <p className="ra-finding-body">{f.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Empty state ── */}
        {stats.total === 0 && !loading && (
          <section className="ra-section">
            <div className="ra-chart-card" style={{ textAlign: "center", padding: "48px 24px" }}>
              <p style={{ fontSize: "2.5rem", marginBottom: 12 }}>🌿</p>
              <h3 style={{ color: "var(--text-primary)", marginBottom: 8 }}>{t("results.noData")}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {t("results.noDataDesc")}
              </p>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
