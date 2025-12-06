// src/components/LiveGamesPage.jsx
import React from "react";
import { getLiveMatches, getAllMatches } from "../data/matches";
import LiveNowStrip from "./LiveNowStrip";

function LiveGamesPage() {
  const live = getLiveMatches();
  const all = getAllMatches();

  const pageStyle = {
    marginTop: "16px",
  };

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Live Games
      </h2>
      {live.length === 0 && (
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>
          No games are live right now.
        </p>
      )}
      {live.length > 0 && (
        <LiveNowStrip matches={all} layout={live.length === 1 ? "single" : "multi"} />
      )}
    </section>
  );
}

export default LiveGamesPage;
