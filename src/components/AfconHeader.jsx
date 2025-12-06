// src/components/AfconHeader.jsx
import React from "react";

function AfconHeader() {
  const wrapperStyle = {
    marginBottom: "12px",
    borderBottom: "1px solid #111827",
    paddingBottom: "10px",
  };

  // TOP ROW
  const topRowStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    textAlign: "center",
  };

  const logoRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const logoStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    objectFit: "contain",
    backgroundColor: "#020617",
  };

  const titleTextStyle = {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  };

  const poweredStyle = {
    fontSize: "10px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#9ca3af",
  };

  // MIDDLE ROW – SCROLLING FEATURE CARDS
  const middleRowWrapperStyle = {
    marginTop: "10px",
    marginBottom: "8px",
  };

  const middleRowStyle = {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "6px",
  };

  const cardStyle = {
    position: "relative",
    minWidth: "220px",
    maxWidth: "260px",
    borderRadius: "12px",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #22c55e, #0f766e, #020617)",
    border: "1px solid #1f2937",
    flexShrink: 0,
  };

  const cardInnerStyle = {
    position: "relative",
    padding: "10px 12px",
    height: "100px", // close to 16:9 on these widths
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardTagStyle = {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#d1d5db",
    marginBottom: "4px",
  };

  const cardTitleStyle = {
    fontSize: "14px",
    fontWeight: 700,
    color: "#f9fafb",
  };

  const cardMetaStyle = {
    fontSize: "11px",
    color: "#e5e7eb",
    marginTop: "4px",
  };

  const cardLinkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const featureCards = [
    {
      id: "highlights",
      tag: "Match Highlights",
      title: "Latest Goals and Highlights",
      meta: "Watch the big moments from AFCON 2025",
      href: "#highlights",
    },
    {
      id: "var",
      tag: "VAR Watch",
      title: "VAR Controversy Centre",
      meta: "All the key checks and big calls",
      href: "#var",
    },
    {
      id: "goal-of-tournament",
      tag: "Goal of the Tournament",
      title: "Vote for Goal of the Tournament",
      meta: "Have your say on the top strikes",
      href: "#goal-of-tournament",
    },
    {
      id: "podcast",
      tag: "Striver AFCON Podcast",
      title: "Daily AFCON Recap Show",
      meta: "Listen on Striver.Football",
      href: "#podcast",
    },
    {
      id: "fan-chat",
      tag: "Fan Chat",
      title: "Join the AFCON Fan Chat",
      meta: "Live reaction inside Striver.Football",
      href: "https://joinstriver.com",
    },
  ];

  // BOTTOM ROW – NAV AND SOCIAL
  const bottomRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    paddingTop: "6px",
    borderTop: "1px solid #111827",
  };

  const navItemsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  };

  const navItemStyle = {
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    cursor: "pointer",
  };

  const socialRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const socialIconStyle = {
    width: "24px",
    height: "24px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    color: "#e5e7eb",
    textDecoration: "none",
  };

  return (
    <header style={wrapperStyle}>
      {/* TOP ROW */}
      <div style={topRowStyle}>
        <div style={logoRowStyle}>
          {/* Striver logo */}
          <img
            src="/logos/striver.png"
            alt="Striver.Football"
            style={logoStyle}
          />
          <span style={titleTextStyle}>AFCON 2025 Live</span>
        </div>
        <div style={poweredStyle}>
          Powered by BelowTheLeague.com
        </div>
      </div>

      {/* MIDDLE ROW – FEATURE CARDS */}
      <div style={middleRowWrapperStyle}>
        <div style={middleRowStyle}>
          {featureCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              style={cardLinkStyle}
              target={card.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <article style={cardStyle}>
                <div style={cardInnerStyle}>
                  <div>
                    <div style={cardTagStyle}>{card.tag}</div>
                    <div style={cardTitleStyle}>{card.title}</div>
                  </div>
                  {card.meta && (
                    <div style={cardMetaStyle}>{card.meta}</div>
                  )}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW – NAV + SOCIAL */}
      <div style={bottomRowStyle}>
        <nav style={navItemsRowStyle}>
          <span style={navItemStyle}>Live Games</span>
          <span style={navItemStyle}>Fixtures</span>
          <span style={navItemStyle}>Results</span>
          <span style={navItemStyle}>Tables</span>
          <span style={navItemStyle}>Reports</span>
          <span style={navItemStyle}>News</span>
        </nav>

        <div style={socialRowStyle}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={socialIconStyle}
          >
            f
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            style={socialIconStyle}
          >
            X
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={socialIconStyle}
          >
            IG
          </a>
        </div>
      </div>
    </header>
  );
}

export default AfconHeader;
