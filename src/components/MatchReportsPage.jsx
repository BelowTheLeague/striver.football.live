// src/components/MatchReportsPage.jsx
import React from "react";
import { getAllReports, getReportById } from "../data/reports";
import { matches } from "../data/matches";
import GroupsTable from "./GroupsTable";

function MatchReportsPage({ selectedId, onSelect }) {
  const all = getAllReports();
  const activeReport =
    selectedId ? getReportById(selectedId) : all[0] || null;

  const findMatch = (matchId) =>
    matches.find((m) => m.id === matchId);

  const pageStyle = {
    marginTop: "16px",
  };

  const layoutStyle = {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "16px",
  };

  const leftStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "16px",
  };

  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const listCardStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    cursor: "pointer",
    fontSize: "11px",
  };

  const activeListCardStyle = {
    ...listCardStyle,
    borderColor: "#22c55e",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "4px",
  };

  const metaStyle = {
    fontSize: "11px",
    color: "#9ca3af",
    marginBottom: "8px",
  };

  const bodyStyle = {
    fontSize: "12px",
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
  };

  const subHeaderStyle = {
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "12px",
    marginBottom: "4px",
  };

  const statsBoxStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    fontSize: "11px",
  };

  if (!activeReport) {
    return (
      <section style={pageStyle}>
        <h2>Match Reports</h2>
        <p>No reports yet.</p>
      </section>
    );
  }

  const match = findMatch(activeReport.matchId);

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Match Reports
      </h2>
      <div style={layoutStyle}>
        {/* LEFT – ACTIVE REPORT */}
        <article style={leftStyle}>
          <h3 style={titleStyle}>{activeReport.title}</h3>
          <div style={metaStyle}>
            {activeReport.scoreline} · {activeReport.stadium} ·{" "}
            {new Date(activeReport.date).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>

          <div style={bodyStyle}>{activeReport.body}</div>

          {match && (
            <>
              <h4 style={subHeaderStyle}>Match Stats</h4>
              <div style={statsBoxStyle}>
                <div>
                  Score: {match.homeTeam} {match.homeScore}–{match.awayScore}{" "}
                  {match.awayTeam}
                </div>
                <div>Group: {match.group}</div>
                {match.stats && (
                  <>
                    <div>
                      Possession: {match.stats.possessionHome}% –{" "}
                      {match.stats.possessionAway}%
                    </div>
                    <div>
                      Shots on Target:{" "}
                      {match.stats.shotsOnTargetHome}–{" "}
                      {match.stats.shotsOnTargetAway}
                    </div>
                    <div>
                      Shots off Target:{" "}
                      {match.stats.shotsOffTargetHome}–{" "}
                      {match.stats.shotsOffTargetAway}
                    </div>
                  </>
                )}
              </div>

              <h4 style={subHeaderStyle}>Group Table</h4>
              {/* Reuse GroupsTable component */}
              <GroupsTable />
            </>
          )}
        </article>

        {/* RIGHT – LIST OF REPORTS */}
        <aside style={rightStyle}>
          {all.map((report) => (
            <div
              key={report.id}
              style={
                activeReport.id === report.id
                  ? activeListCardStyle
                  : listCardStyle
              }
              onClick={() => onSelect(report.id)}
            >
              <div style={{ fontWeight: 600, marginBottom: "2px" }}>
                {report.title}
              </div>
              <div style={{ fontSize: "10px", color: "#9ca3af" }}>
                {report.scoreline} ·{" "}
                {new Date(report.date).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default MatchReportsPage;
