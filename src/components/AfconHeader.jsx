// src/components/AfconHeader.jsx
import React, { useState } from "react";

function AfconHeader({ onNavChange }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const wrapperStyle = {
    marginBottom: "12px",
    borderBottom: "1px solid #111827",
    paddingBottom: "10px",
  };

  // TOP ROW
  const topRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  };

  const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    objectFit: "contain",
    backgroundColor: "#020617",
  };

  const centreTextWrapperStyle = {
    textAlign: "center",
    flex: 1,
  };

  const titleTextStyle = {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  };

  const poweredStyle = {
    fontSize: "9px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#9ca3af",
    marginTop: "2px",
  };

  const menuButtonStyle = {
    fontSize: "11px",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
  };

  // FULL SCREEN NAV OVERLAY
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
  };

  const overlayTopBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #111827",
  };

  const overlayLogoRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const overlayTitleStyle = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
  };

  const closeButtonStyle = {
    fontSize: "11px",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
  };

  const overlayNavStyle = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayNavListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const overlayNavItemStyle = {
    fontSize: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    cursor: "pointer",
  };

  const overlayNavSubStyle = {
    fontSize: "11px",
    color: "#9ca3af",
    marginTop: "4px",
  };

  const socialRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    paddingBottom: "18px",
  };

  const socialIconStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    color: "#e5e7eb",
    textDecoration: "none",
  };

  const handleNavClick = (page) => {
    if (onNavChange) onNavChange(page);
    setIsNavOpen(false);
  };

  return (
    <>
      <header style={wrapperStyle}>
        {/* TOP ROW ONLY – LOGOS + TEXT + MENU BUTTON */}
        <div style={topRowStyle}>
          {/* Left – Striver Logo */}
          <img
            src="/logos/striver.png"
            alt="Striver.Football"
            style={logoStyle}
          />

          {/* Centre – AFCON 2025 LIVE / Powered by BTL */}
          <div style={centreTextWrapperStyle}>
            <div style={titleTextStyle}>AFCON 2025 Live</div>
            <div style={poweredStyle}>Powered by BelowTheLeague.com</div>
          </div>

          {/* Right – BTL Logo + Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/logos/btl.png"
              alt="BelowTheLeague"
              style={logoStyle}
            />
            <button
              type="button"
              style={menuButtonStyle}
              onClick={() => setIsNavOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN NAV OVERLAY */}
      {isNavOpen && (
        <div style={overlayStyle}>
          {/* Top bar inside overlay */}
          <div style={overlayTopBarStyle}>
            <div style={overlayLogoRowStyle}>
              <img
                src="/logos/striver.png"
                alt="Striver.Football"
                style={{ ...logoStyle, width: 30, height: 30 }}
              />
              <span style={overlayTitleStyle}>AFCON 2025 Live</span>
            </div>
            <button
              type="button"
              style={closeButtonStyle}
              onClick={() => setIsNavOpen(false)}
            >
              Close
            </button>
          </div>

          {/* Main nav items */}
          <div style={overlayNavStyle}>
            <ul style={overlayNavListStyle}>
              <li onClick={() => handleNavClick("home")}>
                <div style={overlayNavItemStyle}>Home</div>
                <div style={overlayNavSubStyle}>
                  Dashboard · Live · Reports · News
                </div>
              </li>
              <li onClick={() => handleNavClick("live")}>
                <div style={overlayNavItemStyle}>Live Games</div>
                <div style={overlayNavSubStyle}>
                  Every match currently in play
                </div>
              </li>
              <li onClick={() => handleNavClick("fixtures")}>
                <div style={overlayNavItemStyle}>Fixtures</div>
                <div style={overlayNavSubStyle}>
                  All upcoming AFCON 2025 games
                </div>
              </li>
              <li onClick={() => handleNavClick("results")}>
                <div style={overlayNavItemStyle}>Results</div>
                <div style={overlayNavSubStyle}>
                  Finals scores and match stats
                </div>
              </li>
              <li onClick={() => handleNavClick("tables")}>
                <div style={overlayNavItemStyle}>Tables</div>
                <div style={overlayNavSubStyle}>
                  Group standings and positions
                </div>
              </li>
              <li onClick={() => handleNavClick("reports")}>
                <div style={overlayNavItemStyle}>Match Reports</div>
                <div style={overlayNavSubStyle}>
                  Write ups, stats, pictures, reaction
                </div>
              </li>
              <li onClick={() => handleNavClick("news")}>
                <div style={overlayNavItemStyle}>News</div>
                <div style={overlayNavSubStyle}>
                  Tournament headlines and updates
                </div>
              </li>
              <li onClick={() => handleNavClick("players")}>
                <div style={overlayNavItemStyle}>Player Stats</div>
                <div style={overlayNavSubStyle}>
                  Goals, assists, cards, clean sheets
                </div>
              </li>
            </ul>
          </div>

          {/* Social row at bottom */}
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
      )}
    </>
  );
}

export default AfconHeader;
