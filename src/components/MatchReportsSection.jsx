// src/components/MatchReportsSection.jsx
import React from "react";
import { getLatestReports } from "../data/reports";

function MatchReportsSection({ onViewAll, onOpenReport }) {
  const latest = getLatestReports(3);

  const sectionStyle = {
    marginTop: "24px",
    marginBottom: "16px",
  };

  const headerRowStyle = {
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

  const viewAllStyle = {
    fontSize: "11px",
    color: "#22c55e",
    cursor: "pointer",
  };

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "12px",
  };

  const cardStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    background:
      "linear-gradient(145deg, #020617 0%, #020617 40%, #111827 100%)",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  };

  const imageWrapperStyle = {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
  };

  const contentStyle = {
    padding: "10px 12px 12px 12px",
  };

  const cardTitleStyle = {
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "4px",
  };

  const metaStyle = {
    fontSize: "10px",
    color: "#9ca3af",
    marginBottom: "6px",
  };

  const summaryStyle = {
    fontSize: "11px",
    color: "#e5e7eb",
  };

  return (
    <section style={sectionStyle}>
      <div style={headerRowStyle}>
        <h2 style={titleStyle}>Match Reports</h2>
        <span style={viewAllStyle} onClick={onViewAll}>
          View all
        </span>
      </div>
      <div style={listStyle}>
        {latest.map((report) => (
          <article
            key={report.id}
            style={cardStyle}
            onClick={() => onOpenReport(report.id)}
          >
            <div style={imageWrapperStyle}>
              <img
                src={
                  report.heroImage ||
                  "/images/reports/placeholder-afcon-1920x1080.jpg"
                }
                alt={report.title}
                style={imageStyle}
              />
            </div>
            <div style={contentStyle}>
              <h3 style={cardTitleStyle}>{report.title}</h3>
              <div style={metaStyle}>
                {report.scoreline} · {report.stadium} ·{" "}
                {new Date(report.date).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <p style={summaryStyle}>{report.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MatchReportsSection;
