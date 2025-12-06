import React from "react";
import {
  getAllMatches,
  getFeaturedMatches,
  getFixtures,
  getLiveMatches,
} from "./data/matches";

import FeaturedMatches from "./components/FeaturedMatches";
import LiveNowStrip from "./components/LiveNowStrip";
import FixturesList from "./components/FixturesList";

function App() {
  const allMatches = getAllMatches();
  const featured = getFeaturedMatches();
  const live = getLiveMatches();
  const fixtures = getFixtures();

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "#f9fafb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
    marginBottom: "16px",
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

  const chipRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "6px",
  };

  const chipStyle = {
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
      <main style={containerStyle}>
        <header style={headerStyle}>
          <div style={titleRowStyle}>
            <div>
              <h1 style={titleStyle}>AFCON 2025 Live Centre</h1>
              <p style={subtitleStyle}>Powered by Striver.Football</p>
            </div>
            <div style={{ textAlign: "right", fontSize: "12px", color: "#9ca3af" }}>
              <div>BelowTheLeague x Striver</div>
              <div>Live scores • Fixtures • Non league energy</div>
            </div>
          </div>
          <div style={chipRowStyle}>
            <span style={chipStyle}>Live</span>
            <span style={chipStyle}>Fixtures</span>
            <span style={chipStyle}>Results</span>
            <span style={chipStyle}>Table</span>
          </div>
        </header>

        <FeaturedMatches matches={featured} />
        <LiveNowStrip matches={live.length ? live : allMatches} />
        <FixturesList fixtures={fixtures} />
      </main>
    </div>
  );
}

export default App;
