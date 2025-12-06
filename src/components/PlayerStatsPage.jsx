// src/components/PlayerStatsPage.jsx
import React from "react";
import {
  topScorers,
  topAssists,
  goldenGloves,
  mostYellows,
  mostReds,
} from "../data/playerStats";

function simpleTable(title, rows, columns) {
  const containerStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    fontSize: "11px",
  };

  const titleStyle = {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    marginBottom: "6px",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1.4fr 0.6fr",
    gap: "4px",
    padding: "2px 0",
  };

  const headerRowStyle = {
    ...rowStyle,
    fontSize: "10px",
    color: "#9ca3af",
    borderBottom: "1px solid #111827",
    marginBottom: "4px",
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={headerRowStyle}>
        <span>Player</span>
        <span>Country</span>
        <span style={{ textAlign: "right" }}>{columns[2]}</span>
      </div>
      {rows.map((r) => (
        <div key={r.player + r.country} style={rowStyle}>
          <span>{r.player}</span>
          <span>{r.country}</span>
          <span style={{ textAlign: "right" }}>{r[columns[2]]}</span>
        </div>
      ))}
    </div>
  );
}

function PlayerStatsPage() {
  const pageStyle = {
    marginTop: "16px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
  };

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Player Stats
      </h2>
      <div style={gridStyle}>
        {simpleTable("Top Scorers", topScorers, [
          "Player",
          "Country",
          "goals",
        ])}
        {simpleTable("Top Assists", topAssists, [
          "Player",
          "Country",
          "assists",
        ])}
        {simpleTable("Golden Gloves", goldenGloves, [
          "Player",
          "Country",
          "cleanSheets",
        ])}
        {simpleTable("Most Yellow Cards", mostYellows, [
          "Player",
          "Country",
          "yellowCards",
        ])}
        {simpleTable("Most Red Cards", mostReds, [
          "Player",
          "Country",
          "redCards",
        ])}
      </div>
    </section>
  );
}

export default PlayerStatsPage;
