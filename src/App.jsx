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
import AfconHeader from "./components/AfconHeader";

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

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* New AFCON Header */}
        <AfconHeader />

        {/* Top info row (next KO, top scorer, etc) */}
        <TopInfoRow matches={allMatches} />

        {/* Live logic */}
        {hasSingleLive && (
          <LiveNowStrip matches={live} layout="single" />
        )}

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
