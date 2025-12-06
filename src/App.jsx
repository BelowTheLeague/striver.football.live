// src/App.jsx
import React, { useState } from "react";
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
import MatchReportsSection from "./components/MatchReportsSection";
import LatestNewsSection from "./components/LatestNewsSection";

import MatchReportsPage from "./components/MatchReportsPage";
import NewsPage from "./components/NewsPage";
import LiveGamesPage from "./components/LiveGamesPage";
import FixturesPage from "./components/FixturesPage";
import ResultsPage from "./components/ResultsPage";
import PlayerStatsPage from "./components/PlayerStatsPage";
import TablesPage from "./components/TablesPage";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const allMatches = getAllMatches();
  const live = getLiveMatches();
  const fixtures = getFixtures();

  const hasSingleLive = live.length === 1;
  const hasMultipleLive = live.length >= 2;

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

  const renderHome = () => (
    <>
      <TopInfoRow matches={allMatches} />

      {hasSingleLive && (
        <LiveNowStrip matches={live} layout="single" />
      )}

      {hasMultipleLive && (
        <>
          <LiveNowStrip matches={live} layout="multi" />
          <FeaturedMatches matches={featured} />
        </>
      )}

      {/* Match Reports section */}
      <MatchReportsSection
        onViewAll={() => setActivePage("reports")}
        onOpenReport={(id) => {
          setSelectedReportId(id);
          setActivePage("reports");
        }}
      />

      {/* Latest News section */}
      <LatestNewsSection
        onViewAll={() => setActivePage("news")}
        onOpenNews={(id) => {
          setSelectedNewsId(id);
          setActivePage("news");
        }}
      />

      {/* Fixtures & Tables */}
      <FixturesList fixtures={fixtures} />
      <GroupsTable />
    </>
  );

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return renderHome();
      case "live":
        return <LiveGamesPage />;
      case "fixtures":
        return <FixturesPage />;
      case "results":
        return <ResultsPage />;
      case "reports":
        return (
          <MatchReportsPage
            selectedId={selectedReportId}
            onSelect={setSelectedReportId}
          />
        );
      case "news":
        return (
          <NewsPage
            selectedId={selectedNewsId}
            onSelect={setSelectedNewsId}
          />
        );
      case "players":
        return <PlayerStatsPage />;
      case "tables":
        return <TablesPage />;
      default:
        return renderHome();
    }
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <AfconHeader onNavChange={setActivePage} />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
