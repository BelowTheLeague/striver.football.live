// src/App.jsx
import React from "react";
import {
  getAllMatches,
  getFixtures,
  getLiveMatches,
} from "./data/matches";
import FeaturedMatches from "./components/FeaturedMatches";
import LiveNowStrip from "./components/LiveNowStrip";
import FixturesList from "./components/FixturesList";
import GroupsTable from "./components/GroupsTable";
import TopInfoRow from "./components/TopInfoRow";

function App() {
  const allMatches = getAllMatches();
  const live = getLiveMatches();
  const fixtures = getFixtures();

  const hasSingleLive = live.length === 1;
  const hasMultipleLive = live.length >= 2;

  // If 2 or 3 live matches, use the first one as featured
  const featured = hasMultipleLive ? [live[0]] : [];

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "#f9fafb",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const containerStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "16px",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "8px",
  };

  const titleRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: 700,
  };

  const subtitleStyle = {
    fontSize: "12px",
    color: "#9ca3af",
  };

  const navRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "6px",
  };

  const navChipStyle = {
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header / Nav */}
        <header style={headerStyle}>
          <div style={titleRowStyle}>
            <div>
              <h1 style={titleStyle}>AFCON 2025 Live Centre</h1>
              <p style={subtitleStyle}>
                Powered by Striver.Football · In partnership with BelowTheLeague
              </p>
            </div>
            <div style={{ textAlign: "right", fontSize: "11px" }}>
              <div>Live scores · Fixtures · Results</div>
              <div style={{ color: "#9ca3af" }}>
                Non league energy for AFCON
              </div>
            </div>
          </div>

          {/* Simple nav row */}
          <div style={navRowStyle}>
            <span style={navChipStyle}>Live</span>
            <span style={navChipStyle}>Fixtures</span>
            <span style={navChipStyle}>Results</span>
            <span style={navChipStyle}>Tables</span>
          </div>
        </header>

        {/* Top 4-box info row */}
        <TopInfoRow matches={allMatches} />

        {/* Live logic */}
        {hasSingleLive && <LiveNowStrip matches={live} layout="single" />}

        {hasMultipleLive && (
          <>
            <LiveNowStrip matches={live} layout="multi" />
            <FeaturedMatches matches={featured} />
          </>
        )}

        {/* Fixtures & Groups */}
        <FixturesList fixtures={fixtures} />
        <GroupsTable />
      </div>
    </div>
  );
}

export default App;
