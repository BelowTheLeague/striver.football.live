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
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    overflow: "hidden",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "10px 12px",
    borderBottom: "1px solid "#111827",
    fontSize: "13px",
  };

  const lastRowStyle = {
    ...rowStyle,
    borderBottom: "none",
  };

  const topRowStyle = {
    fontWeight: 500,
  };

  const bottomRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    fontSize: "12px",
    color: "#9ca3af",
  };

  const labelStyle = {
    color: "#e5e7eb",
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
        {fixtures.map((m, index) => {
          const countdown = getCountdown(m.kickOff);
          const time = formatTime(m.kickOff);
          const isLast = index === fixtures.length - 1;

          return (
            <div key={m.id} style={isLast ? lastRowStyle : rowStyle}>
              <div style={topRowStyle}>
                {m.homeTeam} v {m.awayTeam}
              </div>
              <div style={bottomRowStyle}>
                <span style={labelStyle}>{m.stadium}</span>
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
