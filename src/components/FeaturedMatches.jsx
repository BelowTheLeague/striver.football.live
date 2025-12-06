// src/components/FeaturedMatches.jsx
import React from "react";

function FeaturedMatches({ matches }) {
  if (!matches || matches.length === 0) return null;

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #020617, #020617, #000000)",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    padding: "16px",
    color: "#f9fafb",
  };

  const metaStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#22c55e", // same green as minute
    marginBottom: "8px",
  };

  const teamsRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  };

  const teamColumnStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const badgeStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "999px",
    objectFit: "contain",
    marginBottom: "8px",
    backgroundColor: "#020617",
  };

  const teamNameStyle = {
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
  };

  const centreStyle = {
    minWidth: "80px",
    textAlign: "center",
  };

  const scoreStyle = {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: "4px",
  };

  const statusStyle = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
    color: "#22c55e",
  };

  const getStatusLabel = (match) => {
    if (match.status === "live") return `${match.minute}' Live`;
    if (match.status === "finished") return "Full Time";
    return "Kick-off";
  };

  return (
    <section style={{ marginTop: "24px" }}>
      <h2
        style={{
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        Featured Matches
      </h2>
      <div style={containerStyle}>
        {matches.map((match) => (
          <article key={match.id} style={cardStyle}>
            <div style={metaStyle}>
              <span>{match.stage || "Group Stage"}</span>
              <span>{match.stadium}</span>
            </div>

            <div style={teamsRowStyle}>
              {/* Home */}
              <div style={teamColumnStyle}>
                {match.homeBadge && (
                  <img
                    src={match.homeBadge}
                    alt={match.homeTeam}
                    style={badgeStyle}
                  />
                )}
                <span style={teamNameStyle}>{match.homeTeam}</span>
              </div>

              {/* Centre */}
              <div style={centreStyle}>
                <div style={scoreStyle}>
                  {match.homeScore}–{match.awayScore}
                </div>
                <div style={statusStyle}>{getStatusLabel(match)}</div>
              </div>

              {/* Away */}
              <div style={teamColumnStyle}>
                {match.awayBadge && (
                  <img
                    src={match.awayBadge}
                    alt={match.awayTeam}
                    style={badgeStyle}
                  />
                )}
                <span style={teamNameStyle}>{match.awayTeam}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMatches;
