// src/components/FixturesList.jsx
import React from "react";

function FixturesList({ fixtures }) {
  if (!fixtures || fixtures.length === 0) return null;

  const sectionStyle = {
    marginTop: "32px",
  };

  const titleStyle = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  };

  const cardStyle = {
    flex: "1 1 180px",
    maxWidth: "220px",
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
  };

  const teamsStyle = {
    fontWeight: 500,
  };

  const metaStyle = {
    fontSize: "12px",
    color: "#9ca3af",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  };

  const now = new Date();

  const getCountdown = (kickOff) => {
    const ko = new Date(kickOff);
    const diffMs = ko.getTime() - now.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins <= 0) return "";
    return `${diffMins} min to KO`;
  };

  const formatTime = (kickOff) => {
    const ko = new Date(kickOff);
    return ko.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Fixtures</h2>
      <div style={listStyle}>
        {fixtures.map((m) => {
          const countdown = getCountdown(m.kickOff);
          const time = formatTime(m.kickOff);

          return (
            <div key={m.id} style={cardStyle}>
              <div style={teamsStyle}>
                {m.homeTeam} v {m.awayTeam}
              </div>
              <div style={metaStyle}>
                <span>{m.stadium}</span>
                <span>{time}</span>
                {countdown && <span>({countdown})</span>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FixturesList;
