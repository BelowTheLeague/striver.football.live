// src/components/GroupsTable.jsx
import React from "react";
import { groups } from "../data/groups";

function GroupsTable() {
  if (!groups || groups.length === 0) return null;

  const sectionStyle = {
    marginTop: "32px",
  };

  const titleStyle = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    marginBottom: "12px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
  };

  const cardStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    fontSize: "12px",
  };

  const groupHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  };

  const groupNameStyle = {
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  };

  const columnsHeaderStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr 1fr 1fr 1fr 1fr",
    gap: "4px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9ca3af",
    marginBottom: "4px",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr 1fr 1fr 1fr 1fr",
    gap: "4px",
    alignItems: "center",
    padding: "3px 0",
  };

  const teamCellStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    overflow: "hidden",
  };

  const flagStyle = {
    width: "18px",
    height: "18px",
    borderRadius: "999px",
    objectFit: "cover",
    backgroundColor: "#020617",
  };

  const teamNameStyle = {
    fontSize: "11px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const statCellStyle = {
    textAlign: "center",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Group Standings</h2>
      <div style={gridStyle}>
        {groups.map((group) => (
          <article key={group.id} style={cardStyle}>
            <div style={groupHeaderStyle}>
              <span style={groupNameStyle}>{group.name}</span>
            </div>

            {/* Column headers */}
            <div style={columnsHeaderStyle}>
              <span>#</span>
              <span>Team</span>
              <span>P</span>
              <span>W</span>
              <span>D</span>
              <span>L</span>
              <span>Pts</span>
            </div>

            {/* Teams – placeholder stats for now */}
            {group.teams.map((team, index) => (
              <div key={team.name} style={rowStyle}>
                <span style={statCellStyle}>{index + 1}</span>
                <div style={teamCellStyle}>
                  {team.flag && (
                    <img
                      src={team.flag}
                      alt={team.name}
                      style={flagStyle}
                    />
                  )}
                  <span style={teamNameStyle}>{team.name}</span>
                </div>
                <span style={statCellStyle}>0</span>
                <span style={statCellStyle}>0</span>
                <span style={statCellStyle}>0</span>
                <span style={statCellStyle}>0</span>
                <span style={statCellStyle}>0</span>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default GroupsTable;
