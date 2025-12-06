// src/components/ResultsPage.jsx
import React from "react";
import { matches } from "../data/matches";

function ResultsPage() {
  const results = matches.filter((m) => m.status === "finished");

  const pageStyle = {
    marginTop: "16px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const cardStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    fontSize: "11px",
  };

  const teamsRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
  };

  const teamNameStyle = {
    fontWeight: 600,
  };

  const metaStyle = {
    fontSize: "10px",
    color: "#9ca3af",
  };

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Results
      </h2>
      {results.length === 0 && (
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>
          No completed fixtures yet.
        </p>
      )}
      {results.length > 0 && (
        <div style={listStyle}>
          {results.map((match) => (
            <article key={match.id} style={cardStyle}>
              <div style={teamsRowStyle}>
                <span style={teamNameStyle}>
                  {match.homeTeam} {match.homeScore}
                </span>
                <span style={teamNameStyle}>
                  {match.awayScore} {match.awayTeam}
                </span>
              </div>
              <div style={metaStyle}>
                {match.group} · {match.stadium} ·{" "}
                {new Date(match.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ResultsPage;
