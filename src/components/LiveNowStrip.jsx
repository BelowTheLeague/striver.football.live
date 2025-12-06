// src/components/LiveNowStrip.jsx
import React from "react";

function LiveNowStrip({ matches }) {
  const live = (matches || []).filter((m) => m.status === "live");
  if (live.length === 0) return null;

  const sectionStyle = {
    marginTop: "24px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
  };

  const countStyle = {
    fontSize: "12px",
    color: "#9ca3af",
  };

  const stripStyle = {
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "6px",
  };

  const cardStyle = {
    minWidth: "260px",
    maxWidth: "320px",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px",
    color: "#e5e7eb",
    flexShrink: 0,
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    marginBottom: "4px",
  };

  const liveBadgeStyle = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#22c55e",
    fontWeight: 600,
  };

  const groupStyle = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const teamsRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  };

  const sideTeamStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minWidth: 0,
    flex: 1,
  };

  const badgeStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    objectFit: "contain",
    backgroundColor: "#020617",
  };

  const teamNameStyle = {
    fontSize: "13px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const scoreStyle = {
    minWidth: "56px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 700,
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Live Right Now</h2>
        <span style={countStyle}>
          {live.length} match{live.length !== 1 && "es"}
        </span>
      </div>

      <div style={stripStyle}>
        {live.map((match) => (
          <article key={match.id} style={cardStyle}>
            <div style={topRowStyle}>
              <span style={liveBadgeStyle}>{match.minute}' LIVE</span>
              {match.group && <span style={groupStyle}>{match.group}</span>}
            </div>

            <div style={teamsRowStyle}>
              {/* Home */}
              <div style={sideTeamStyle}>
                {match.homeBadge && (
                  <img
                    src={match.homeBadge}
                    alt={match.homeTeam}
                    style={badgeStyle}
                  />
                )}
                <span style={teamNameStyle}>{match.homeTeam}</span>
              </div>

              {/* Score */}
              <div style={scoreStyle}>
                {match.homeScore}–{match.awayScore}
              </div>

              {/* Away */}
              <div style={{ ...sideTeamStyle, justifyContent: "flex-end" }}>
                <span style={{ ...teamNameStyle, textAlign: "right" }}>
                  {match.awayTeam}
                </span>
                {match.awayBadge && (
                  <img
                    src={match.awayBadge}
                    alt={match.awayTeam}
                    style={badgeStyle}
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LiveNowStrip;
