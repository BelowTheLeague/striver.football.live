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

  const teamBlockHomeStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: 1,
    justifyContent: "flex-start",
  };

  const teamBlockAwayStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: 1,
    justifyContent: "flex-end",
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
    minWidth: "80px",
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

  // Stats styles
  const statsContainerStyle = {
    borderTop: "1px solid #111827",
    paddingTop: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "11px",
  };

  const groupPositionRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
  };

  const statRowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const statLabelStyle = {
    textAlign: "center",
    color: "#e5e7eb",
    fontSize: "11px",
    fontWeight: 500,
  };

  const statBarOuterStyle = {
    position: "relative",
    width: "100%",
    height: "10px",
    borderRadius: "999px",
    overflow: "hidden",
    backgroundColor: "#1f2937",
  };

  const statBarSegmentsStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
  };

  const statBarInnerHomeStyle = (widthPercent) => ({
    flexBasis: `${widthPercent}%`,
    height: "100%",
    backgroundColor: "#22c55e",
  });

  const statBarInnerAwayStyle = (widthPercent) => ({
    flexBasis: `${widthPercent}%`,
    height: "100%",
    backgroundColor: "#ef4444",
  });

  const statValueLeftStyle = {
    position: "absolute",
    left: "6px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "10px",
    fontWeight: 600,
    color: "#f9fafb",
  };

  const statValueRightStyle = {
    position: "absolute",
    right: "6px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "10px",
    fontWeight: 600,
    color: "#f9fafb",
  };

  const formatValue = (label, value) => {
    if (label.toLowerCase().includes("possession")) {
      return `${value}%`;
    }
    return value;
  };

  const renderStatRow = (label, homeValue, awayValue) => {
    const home = Number(homeValue) || 0;
    const away = Number(awayValue) || 0;
    const total = home + away;
    const homePct = total > 0 ? Math.round((home / total) * 100) : 0;
    const awayPct = total > 0 ? Math.round((away / total) * 100) : 0;

    const homeDisplay = formatValue(label, home);
    const awayDisplay = formatValue(label, away);

    return (
      <div style={statRowStyle}>
        <div style={statLabelStyle}>{label}</div>
        <div style={statBarOuterStyle}>
          <div style={statBarSegmentsStyle}>
            <div style={statBarInnerHomeStyle(homePct)} />
            <div style={statBarInnerAwayStyle(awayPct)} />
          </div>
          <span style={statValueLeftStyle}>{homeDisplay}</span>
          <span style={statValueRightStyle}>{awayDisplay}</span>
        </div>
      </div>
    );
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
        {live.map((match) => {
          const s = match.stats || {};

          const showYellows =
            (s.yellowCardsHome || 0) + (s.yellowCardsAway || 0) > 0;
          const showReds =
            (s.redCardsHome || 0) + (s.redCardsAway || 0) > 0;

          return (
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
                {/* Home: flag left, name right */}
                <div style={teamBlockHomeStyle}>
                  <img
                    src={match.homeBadge}
                    style={flagStyle}
                    alt={match.homeTeam}
                  />
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

                {/* Away: name left, flag right */}
                <div style={teamBlockAwayStyle}>
                  <span style={{ ...teamNameStyle, textAlign: "right" }}>
                    {match.awayTeam}
                  </span>
                  <img
                    src={match.awayBadge}
                    style={flagStyle}
                    alt={match.awayTeam}
                  />
                </div>
              </div>

              {/* LIVE STATS */}
              <div style={statsContainerStyle}>
                {/* Current Group Position */}
                <div style={groupPositionRowStyle}>
                  <span>
                    Pos: {s.groupPositionHome || "-"} ({match.homeTeam})
                  </span>
                  <span>
                    Pos: {s.groupPositionAway || "-"} ({match.awayTeam})
                  </span>
                </div>

                {/* Possession */}
                {renderStatRow(
                  "Possession",
                  s.possessionHome,
                  s.possessionAway
                )}

                {/* Shots on target */}
                {renderStatRow(
                  "Shots on Target",
                  s.shotsOnTargetHome,
                  s.shotsOnTargetAway
                )}

                {/* Shots off target */}
                {renderStatRow(
                  "Shots off Target",
                  s.shotsOffTargetHome,
                  s.shotsOffTargetAway
                )}

                {/* Corners */}
                {renderStatRow("Corners", s.cornersHome, s.cornersAway)}

                {/* Free kicks */}
                {renderStatRow(
                  "Free Kicks",
                  s.freeKicksHome,
                  s.freeKicksAway
                )}

                {/* Yellow cards – only if any */}
                {showYellows &&
                  renderStatRow(
                    "Yellow Cards",
                    s.yellowCardsHome,
                    s.yellowCardsAway
                  )}

                {/* Red cards – only if any */}
                {showReds &&
                  renderStatRow(
                    "Red Cards",
                    s.redCardsHome,
                    s.redCardsAway
                  )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LiveNowStrip;
