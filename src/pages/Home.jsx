import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";

export default function Home({ showOnlyMatches = false }) {
  const [tab, setTab] = useState("live"); // "live" | "upcoming" | "all"

  const sortedMatches = useMemo(() => {
    return [...matches].sort(
      (a, b) => new Date(a.kickoffTime) - new Date(b.kickoffTime)
    );
  }, []);

  const liveMatches = sortedMatches.filter((m) => m.status === "live");
  const upcomingMatches = sortedMatches.filter((m) => m.status === "upcoming");
  const finishedMatches = sortedMatches.filter((m) => m.status === "finished");

  const filteredMatches = useMemo(() => {
    if (tab === "live") return liveMatches;
    if (tab === "upcoming") return upcomingMatches;
    return sortedMatches;
  }, [tab, liveMatches, upcomingMatches, sortedMatches]);

  const latestArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const heroMatch = liveMatches[0] || upcomingMatches[0] || sortedMatches[0];

  return (
    <div className="layout">
      <section className="main-column">
        {/* TICKER / STRAPLINE */}
        <div className="ticker">
          <span className="ticker-label">Latest</span>
          <div className="ticker-items">
            {liveMatches.length > 0 ? (
              liveMatches.map((m) => (
                <Link
                  key={m.id}
                  to={`/match/${m.id}`}
                  className="ticker-link"
                >
                  {m.homeTeam} {m.homeScore}–{m.awayScore} {m.awayTeam} ·{" "}
                  <span className="ticker-minute">{m.minute}</span>
                </Link>
              ))
            ) : (
              <span className="ticker-empty">
                No live games right now. Check upcoming fixtures.
              </span>
            )}
          </div>
        </div>

        {/* HERO MATCH */}
        {heroMatch && (
          <Link to={`/match/${heroMatch.id}`} className="hero-match">
            <div className="hero-top">
              <span className="hero-tag">
                {heroMatch.status === "live"
                  ? "Live now"
                  : heroMatch.status === "upcoming"
                  ? "Next up"
                  : "Latest result"}
              </span>
              <span className="hero-comp">
                {heroMatch.competition} · {heroMatch.stage}
              </span>
            </div>
            <div className="hero-main">
              <div className="hero-team">
                <span className="hero-team-name">{heroMatch.homeTeam}</span>
              </div>
              <div className="hero-score">
                <span className="hero-score-number">
                  {heroMatch.homeScore}
                </span>
                <span className="hero-score-divider">–</span>
                <span className="hero-score-number">
                  {heroMatch.awayScore}
                </span>
                <span className="hero-minute-pill">
                  {heroMatch.status === "live"
                    ? heroMatch.minute
                    : heroMatch.status === "upcoming"
                    ? "KO soon"
                    : "FT"}
                </span>
              </div>
              <div className="hero-team hero-team-right">
                <span className="hero-team-name">{heroMatch.awayTeam}</span>
              </div>
            </div>
            <div className="hero-bottom">
              <span>
                {heroMatch.stadium}, {heroMatch.city}
              </span>
            </div>
          </Link>
        )}

        {/* TABS */}
        <div className="matches-header">
          <h2 className="section-title">AFCON centre</h2>
          <div className="tabs">
            <button
              className={`tab-btn ${tab === "live" ? "tab-btn-active" : ""}`}
              onClick={() => setTab("live")}
            >
              Live{" "}
              {liveMatches.length > 0 && (
                <span className="tab-count">{liveMatches.length}</span>
              )}
            </button>
            <button
              className={`tab-btn ${
                tab === "upcoming" ? "tab-btn-active" : ""
              }`}
              onClick={() => setTab("upcoming")}
            >
              Fixtures{" "}
              {upcomingMatches.length > 0 && (
                <span className="tab-count">{upcomingMatches.length}</span>
              )}
            </button>
            <button
              className={`tab-btn ${tab ===
