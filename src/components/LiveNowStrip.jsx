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
    padding: "10px",
    color: "#e5e7eb",
    flexShrink: 0,
    minWidth: isSingleLayout ? "100%" : "calc(50% - 8px)", // 2 cards per view in multi
    maxWidth: isSingleLayout ? "100%" : "calc(50% - 8px)",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    marginBottom: "8px",
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

  const centreRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  };

  const badgeStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    objectFit: "cover",
    backgroundColor: "#020617",
  };

  const scoreStyle = {
    minWidth: "56px",
    textAlign: "center",
    fontSize: isSingleLayout ? "22px" : "18px",
    fontWeight: 700,
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>
          {isSingleLayout ? "Live Match" : "Live Matches"}
        </h2>
        <span style={countStyle}>
          {live.length} match{live.length !== 1 && "es"}
        </span>
      </div>

      <div style={stripStyle}>
        {live.map((match) => (
          <article key={match.id} style={cardStyle}>
            <div style={topRowStyle}>
              <span style={liveBadgeStyle}>
                {match.minute != null ? `${match.minute}' Live` : "Live"}
              </span>
              {match.group && <span style={groupStyle}>{match.group}</span>}
            </div>

            <div style={centreRowStyle}>
              {/* Home flag */}
              {match.homeBadge && (
                <img
                  src={match.homeBadge}
                  alt={match.homeTeam}
                  style={badgeStyle}
                />
              )}

              {/* Score */}
              <div style={scoreStyle}>
                {match.homeScore}–{match.awayScore}
              </div>

              {/* Away flag */}
              {match.awayBadge && (
                <img
                  src={match.awayBadge}
                  alt={match.awayTeam}
                  style={badgeStyle}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LiveNowStrip;
