// src/components/TopInfoRow.jsx
import React from "react";

function TopInfoRow({ matches }) {
  const all = matches || [];
  const now = new Date();

  // Find next upcoming fixture
  const upcoming = all
    .filter((m) => m.status === "not_started" && m.kickOff)
    .sort(
      (a, b) =>
        new Date(a.kickOff).getTime() - new Date(b.kickOff).getTime()
    );

  const nextFixture = upcoming[0] || null;

  const getCountdown = (kickOff) => {
    if (!kickOff) return "";
    const ko = new Date(kickOff);
    const diffMs = ko - now;
    if (diffMs <= 0) return "Kicking off now";

    const mins = Math.floor(diffMs / 60000);
    const hours = Math.floor(mins / 60);
    const rem = mins % 60;

    return hours > 0 ? `${hours}h ${rem}m` : `${rem} min`;
  };

  // Fake data until real stats added
  const topScorer = {
    name: "Vincent Aboubakar",
    goals: 5,
    country: "Cameroon",
    badge: "https://flagcdn.com/w80/cm.png",
  };

  const topAssist = {
    name: "Hakim Ziyech",
    assists: 4,
    country: "Morocco",
    badge: "https://flagcdn.com/w80/ma.png",
  };

  const sectionStyle = {
    marginTop: "16px",
    marginBottom: "12px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",

    /* Tablet & Desktop: 2x2 grid */
    gridAutoRows: "1fr",
  };

  const cardBase = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "6px",
    minHeight: "100px", // all cards same height
  };

  const cardTitle = {
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    fontSize: "10px",
    color: "#9ca3af",
  };

  const mainText = {
    fontSize: "13px",
    fontWeight: 600,
  };

  const subText = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const highlight = {
    fontSize: "11px",
    fontWeight: 600,
    color: "#22c55e",
  };

  const row = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const badgeStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  // Media query injection to match fixtures layout
  const styleTag = `
    @media (min-width: 640px) {
      .top-info-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  return (
    <>
      <style>{styleTag}</style>

      <section style={sectionStyle}>
        <div className="top-info-grid" style={gridStyle}>
          {/* BOX 1 – Next Kick Off */}
          <div style={cardBase}>
            <div style={cardTitle}>Next Kick-off</div>
            <div style={mainText}>
              {nextFixture
                ? `${nextFixture.homeTeam} v ${nextFixture.awayTeam}`
                : "—"}
            </div>
            {nextFixture && (
              <>
                <div style={subText}>
                  {new Date(nextFixture.kickOff).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div style={highlight}>{getCountdown(nextFixture.kickOff)}</div>
              </>
            )}
          </div>

          {/* BOX 2 – Top Goalscorer */}
          <div style={cardBase}>
            <div style={cardTitle}>Top Goalscorer</div>
            <div style={row}>
              <img src={topScorer.badge} style={badgeStyle} />
              <div>
                <div style={mainText}>{topScorer.name}</div>
                <div style={highlight}>{topScorer.goals} goals</div>
                <div style={subText}>{topScorer.country}</div>
              </div>
            </div>
          </div>

          {/* BOX 3 – Top Assists */}
          <div style={cardBase}>
            <div style={cardTitle}>Top Assists</div>
            <div style={row}>
              <img src={topAssist.badge} style={badgeStyle} />
              <div>
                <div style={mainText}>{topAssist.name}</div>
                <div style={highlight}>{topAssist.assists} assists</div>
                <div style={subText}>{topAssist.country}</div>
              </div>
            </div>
          </div>

          {/* BOX 4 – JoinStriver.com */}
          <a href="https://joinstriver.com" target="_blank" style={linkStyle}>
            <div style={cardBase}>
              <div style={mainText}>JoinStriver.com</div>
              <div style={subText}>The Football Soci
