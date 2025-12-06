// src/components/LiveNowStrip.jsx
import React from "react";

function LiveNowStrip({ matches }) {
  const all = matches || [];
  const live = all.filter((m) => m.status === "live");

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

  // Placeholder top scorer data – swap later when you have real stats
  const topScorer = {
    name: "Vincent Aboubakar",
    goals: 5,
    country: "Cameroon",
    photo: "/players/aboubakar.png", // update path when you have it
    badge: "/badges/cameroon.png",
  };

  const sectionStyle = {
    marginTop: "24px",
  };

  const summaryRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "12px",
  };

  const summaryCardBase = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "8px 10px",
    fontSize: "11px",
    minWidth: "140px",
    flex: "1 1 140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "4px",
  };

  const cardTitleStyle = {
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    color: "#9ca3af",
    fontSize: "10px",
  };

  const cardMainStyle = {
    fontSize: "13px",
  };

  const liveCountStyle = {
    fontSize: "16px",
    fontWeight: 700,
  };

  const liveSubStyle = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const kickoffCardMain = {
    fontSize: "12px",
    fontWeight: 500,
  };

  const kickoffTimeStyle = {
    fontSize: "11px",
    color: "#9ca3af",
  };

  const kickoffCountdownStyle = {
    fontSize: "11px",
    color: "#22c55e",
    fontWeight: 600,
  };

  const topScorerRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const playerPhotoStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    objectFit: "cover",
    backgroundColor: "#020617",
  };

  const scorerTextColumnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  };

  const scorerNameStyle = {
    fontSize: "12px",
    fontWeight: 600,
  };

  const scorerGoalsStyle = {
    fontSize: "11px",
    color: "#22c55e",
    fontWeight: 600,
  };

  const scorerCountryRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "10px",
    color: "#9ca3af",
  };

  const smallBadgeStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "999px",
    objectFit: "cover",
    backgroundColor: "#020617",
  };

  const striverCardStyle = {
    ...summaryCardBase,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const striverTextStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    fontSize: "11px",
  };

  const striverLogoStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    objectFit: "contain",
    backgroundColor: "#020617",
  };

  const striverTitleStyle = {
    ...cardTitleStyle,
    textTransform: "none",
    letterSpacing: "0.04em",
    fontSize: "11px",
    color: "#e5e7eb",
  };

  const striverSubStyle = {
    fontSize: "10px",
    color: "#9ca3af",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const btlCardStyle = {
    ...summaryCardBase,
    backgroundColor: "#f97316",
    borderColor: "#f97316",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
  };

  const btlTitleStyle = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 700,
    color: "#000000",
  };

  const btlMainStyle = {
    fontSize: "13px",
    fontWeight: 600,
    color: "#000000",
  };

  const stripHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  const stripTitleStyle = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
  };

  const stripCountStyle = {
    fontSize: "12px",
    color: "#9ca3af",
  };

  const stripStyle = {
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "6px",
  };

  const matchCardStyle = {
    minWidth: "220px",
    maxWidth: "260px",
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
    width: "36px",
    height: "36px",
    borderRadius: "999px",
    objectFit: "contain",
    backgroundColor: "#020617",
  };

  const scoreStyle = {
    minWidth: "56px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 700,
  };

  return (
    <section style={sectionStyle}>
      {/* Summary row with multiple small cards */}
      <div style={summaryRowStyle}>
        {/* Live matches count */}
        <div style={summaryCardBase}>
          <div style={cardTitleStyle}>Live Right Now</div>
          <div style={cardMainStyle}>
            <div style={liveCountStyle}>{live.length}</div>
            <div style={liveSubStyle}>
              match{live.length !== 1 && "es"} currently live
            </div>
          </div>
        </div>

        {/* Next kick-off */}
        <div style={summaryCardBase}>
          <div style={cardTitleStyle}>Next Kick-off</div>
          <div style={cardMainStyle}>
            <div style={kickoffCardMain}>{nextFixtureLabel}</div>
            {nextFixture && (
              <>
                <div style={kickoffTimeStyle}>{nextFixtureTime}</div>
                <div style={kickoffCountdownStyle}>{nextCountdown}</div>
              </>
            )}
            {!nextFixture && (
              <div style={kickoffCountdownStyle}>{nextCountdown}</div>
            )}
          </div>
        </div>

        {/* Top goalscorer */}
        <div style={summaryCardBase}>
          <div style={cardTitleStyle}>Top Goalscorer</div>
          <div style={topScorerRowStyle}>
            {topScorer.photo && (
              <img
                src={topScorer.photo}
                alt={topScorer.name}
                style={playerPhotoStyle}
              />
            )}
            <div style={scorerTextColumnStyle}>
              <span style={scorerNameStyle}>{topScorer.name}</span>
              <span style={scorerGoalsStyle}>
                {topScorer.goals} goals
              </span>
              <div style={scorerCountryRowStyle}>
                {topScorer.badge && (
                  <img
                    src={topScorer.badge}
                    alt={topScorer.country}
                    style={smallBadgeStyle}
                  />
                )}
                <span>{topScorer.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join Striver card */}
        <a
          href="https://striver.football"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          <div style={striverCardStyle}>
            <div style={striverTextStyle}>
              <span style={striverTitleStyle}>Join Striver</span>
              <span style={striverSubStyle}>
                The football social app · Abuse free
              </span>
            </div>
            <img
              src="/logos/striver.png"
              alt="Striver.Football"
              style={striverLogoStyle}
            />
          </div>
        </a>

        {/* BelowTheLeague button card */}
        <a
          href="https://belowtheleague.com"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          <div style={btlCardStyle}>
            <div style={btlTitleStyle}>Non-league stories</div>
            <div style={btlMainStyle}>Visit BelowTheLeague</div>
          </div>
        </a>
      </div>

      {/* Live matches strip (badges + score) */}
      {live.length > 0 && (
        <>
          <div style={stripHeaderStyle}>
            <h2 style={stripTitleStyle}>Live Matches</h2>
            <span style={stripCountStyle}>
              {live.length} match{live.length !== 1 && "es"}
            </span>
          </div>

          <div style={stripStyle}>
            {live.map((match) => (
              <article key={match.id} style={matchCardStyle}>
                <div style={topRowStyle}>
                  <span style={liveBadgeStyle}>{match.minute}' Live</span>
                  {match.group && (
                    <span style={groupStyle}>{match.group}</span>
                  )}
                </div>

                <div style={centreRowStyle}>
                  {/* Home badge */}
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

                  {/* Away badge */}
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
        </>
      )}
    </section>
  );
}

export default LiveNowStrip;
