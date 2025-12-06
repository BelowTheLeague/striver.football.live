// src/components/LiveNowStrip.jsx
import React from "react";

function LiveNowStrip({ matches, layout = "multi" }) {
  const live = (matches || []).filter((m) => m.status === "live");
  if (!live.length) return null;

  const isSingleLayout = layout === "single" && live.length === 1;

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
    overflowX: isSingleLayout ? "hidden" : "auto",
    paddingBottom: "6px",
  };

  const cardStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "12px",
    color: "#e5e7eb",
    flexShrink: 0,
    minWidth: isSingleLayout ? "100%" : "calc(50% - 8px)",
    maxWidth: isSingleLayout ? "100%" : "calc(50% - 8px)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
  };

  const liveBadgeStyle = {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#22c55e",
    fontWeight: 700,
  };

  const groupStyle = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const centreRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  };

  const teamBlockStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: 1,
  };

  const flagStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const teamNameStyle = {
    fontSize: "12px",
    fontWeight: 600,
  };

  const centreColumnStyle = {
    textAlign: "center",
    minWidth: "70px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const clockStyle = {
    fontSize: "11px",
    fontWeight: 600,
    color: "#22c55e",
  };

  const scoreStyle = {
    fontSize: isSingleLayout ? "28px" : "22px",
    fontWeight: 700,
  };

  const stadiumStyle = {
    fontSize: "10px",
    color: "#9ca3af",
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>{isSingleLayout ? "Live Match" : "Live Matches"}</h2>
        <span style={countStyle}>
          {live.length} match{live.length !== 1 && "es"}
        </span>
      </div>

      <div style={stripStyle}>
        {live.map((match) => (
          <article key={match.id} style={cardStyle}>
            {/* TOP ROW */}
            <div style={topRowStyle}>
              <span style={liveBadgeStyle}>
                {match.minute ? `${match.minute}'` : "Live"}
              </span>
              {match.group && <span style={groupStyle}>{match.group}</span>}
            </div>

            {/* MAIN CONTENT — FLAGS + NAMES + SCORE BLOCK */}
            <div style={centreRowStyle}>
              {/* Home */}
              <div style={teamBlockStyle}>
                <img src={match.homeBadge} style={flagStyle} alt={match.homeTeam} />
                <span style={teamNameStyle}>{match.homeTeam}</span>
              </div>

              {/* Score Column */}
              <div style={centreColumnStyle}>
                <span style={clockStyle}>
                  {match.minute ? `${match.minute}'` : "Live"}
                </span>
                <span style={scoreStyle}>
                  {match.homeScore}–{match.awayScore}
                </span>
                <span style={stadiumStyle}>{match.stadium}</span>
              </div>

              {/* Away */}
              <div style={teamBlockStyle}>
                <span style={teamNameStyle}>{match.awayTeam}</span>
                <img src={match.awayBadge} style={flagStyle} alt={match.awayTeam} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LiveNowStrip;
