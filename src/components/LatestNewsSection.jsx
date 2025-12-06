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
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "8px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "stretch",
    gap: "10px",
  };

  const imageWrapperStyle = {
    flexShrink: 0,
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#111827",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "2px",
  };

  const cardTitleStyle = {
    fontSize: "13px",
    fontWeight: 700,
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

  const liveBadgeBase = {
    fontSize: "9px",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "2px 6px",
    borderRadius: "999px",
    backgroundColor: "#b91c1c",
    color: "#fef2f2",
  };

  // Add blinking animation like PlanetRugby "Live" vibes
  const styleTag = `
    @keyframes livePulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.97); }
    }
    .live-badge-pulse {
      animation: livePulse 1.1s infinite;
    }
  `;

  return (
    <>
      <style>{styleTag}</style>
      <section style={sectionStyle}>
        <div style={headerRowStyle}>
          <h2 style={titleStyle}>Latest News</h2>
          <span style={viewAllStyle} onClick={onViewAll}>
            View all
          </span>
        </div>
        <div style={listStyle}>
          {latest.map((item, index) => {
            const showLive = item.isLive || index === 0; // force latest to look live

            return (
              <article
                key={item.id}
                style={cardStyle}
                onClick={() => onOpenNews(item.id)}
              >
                <div style={imageWrapperStyle}>
                  <img
                    src={
                      item.image ||
                      "/images/news/placeholder-news-square.jpg"
                    }
                    alt={item.title}
                    style={imageStyle}
                  />
                </div>
                <div style={contentStyle}>
                  <div style={titleRowStyle}>
                    <h3 style={cardTitleStyle}>{item.title}</h3>
                    {showLive && (
                      <span
                        className="live-badge-pulse"
                        style={liveBadgeBase}
                      >
                        LIVE!
                      </span>
                    )}
                  </div>
                  <div style={metaStyle}>
                    {new Date(item.date).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <p style={blurbStyle}>{item.blurb}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default LatestNewsSection;
