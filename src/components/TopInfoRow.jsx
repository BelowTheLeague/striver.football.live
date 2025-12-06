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
    const diffMs = ko.getTime() - now.getTime();
    if (diffMs <= 0) return "Kicking off now";

    const totalMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;

    if (hours <= 0) return `${mins} min`;
    return `${hours}h ${mins}m`;
  };

  const nextCountdown = nextFixture
    ? getCountdown(nextFixture.kickOff)
    : "No upcoming fixture";

  const nextFixtureLabel = nextFixture
    ? `${nextFixture.homeTeam} v ${nextFixture.awayTeam}`
    : "—";

  const nextFixtureTime =
    nextFixture && nextFixture.kickOff
      ? new Date(nextFixture.kickOff).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

  // Placeholder stats – swap for real data later
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
    marginBottom: "8px",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const cardBase = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    fontSize: "11px",
    minWidth: "180px",
    flex: "1 1 180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "4px",
  };

  const cardTitle = {
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    color: "#9ca3af",
    fontSize: "10px",
  };

  const mainText = {
    fontSize: "13px",
    fontWeight: 500,
  };

  const subText = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const highlight = {
    fontSize: "11px",
    color: "#22c55e",
    fontWeight: 600,
  };

  const playerRow = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const badgeStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "999px",
    objectFit: "cover",
    backgroundColor: "#020617",
  };

  const playerTextCol = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  };

  const playerNameStyle = {
    fontSize: "12px",
    fontWeight: 600,
  };

  const playerCountryStyle = {
    fontSize: "10px",
    color: "#9ca3af",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const joinCard = {
    ...cardBase,
    alignItems: "flex-start",
  };

  const joinTitle = {
    ...cardTitle,
    textTransform: "none",
    letterSpacing: "0.06em",
    color: "#e5e7eb",
  };

  const joinSub = {
    fontSize: "10px",
    color: "#9ca3af",
  };

  return (
    <section style={sectionStyle}>
      <div style={rowStyle}>
        {/* Box 1 – Next Kick-off */}
        <div style={cardBase}>
          <div style={cardTitle}>Next Kick-off</div>
          <div style={mainText}>{nextFixtureLabel}</div>
          {nextFixture && (
            <>
              <div style={subText}>{nextFixtureTime}</div>
              <div style={highlight}>{nextCountdown}</div>
            </>
          )}
          {!nextFixture && <div style={highlight}>{nextCountdown}</div>}
        </div>

        {/* Box 2 – Top Goalscorer */}
        <div style={cardBase}>
          <div style={cardTitle}>Top Goalscorer</div>
          <div style={playerRow}>
            {topScorer.badge && (
              <img
                src={topScorer.badge}
                alt={topScorer.country}
                style={badgeStyle}
              />
            )}
            <div style={playerTextCol}>
              <span style={playerNameStyle}>{topScorer.name}</span>
              <span style={highlight}>{topScorer.goals} goals</span>
              <span style={playerCountryStyle}>{topScorer.country}</span>
            </div>
          </div>
        </div>

        {/* Box 3 – Top Assists */}
        <div style={cardBase}>
          <div style={cardTitle}>Top Assists</div>
          <div style={playerRow}>
            {topAssist.badge && (
              <img
                src={topAssist.badge}
                alt={topAssist.country}
                style={badgeStyle}
              />
            )}
            <div style={playerTextCol}>
              <span style={playerNameStyle}>{topAssist.name}</span>
              <span style={highlight}>{topAssist.assists} assists</span>
              <span style={playerCountryStyle}>{topAssist.country}</span>
            </div>
          </div>
        </div>

        {/* Box 4 – JoinStriver.com */}
        <a
          href="https://joinstriver.com"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          <div style={joinCard}>
            <div style={joinTitle}>JoinStriver.com</div>
            <div style={joinSub}>
              The football social app · Abuse free
            </div>
            <div style={highlight}>Tap to join the movement</div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default TopInfoRow;
