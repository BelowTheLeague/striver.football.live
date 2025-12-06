// src/components/LatestNewsSection.jsx
import React from "react";
import { getLatestNews } from "../data/news";

function LatestNewsSection({ onViewAll, onOpenNews }) {
  const latest = getLatestNews(3);

  const sectionStyle = {
    marginTop: "8px",
    marginBottom: "24px",
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
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const cardStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    cursor: "pointer",
  };

  const cardTitleStyle = {
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "2px",
  };

  const metaStyle = {
    fontSize: "10px",
    color: "#9ca3af",
    marginBottom: "4px",
  };

  const blurbStyle = {
    fontSize: "11px",
    color: "#e5e7eb",
  };

  return (
    <section style={sectionStyle}>
      <div style={headerRowStyle}>
        <h2 style={titleStyle}>Latest News</h2>
        <span style={viewAllStyle} onClick={onViewAll}>
          View all
        </span>
      </div>
      <div style={listStyle}>
        {latest.map((item) => (
          <article
            key={item.id}
            style={cardStyle}
            onClick={() => onOpenNews(item.id)}
          >
            <h3 style={cardTitleStyle}>{item.title}</h3>
            <div style={metaStyle}>
              {new Date(item.date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <p style={blurbStyle}>{item.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LatestNewsSection;
