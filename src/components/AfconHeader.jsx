// src/components/AfconHeader.jsx

import React from "react";
import striverLogo from "../striver-logo.png"; 
// ⬆️ Change this path if your logo file is somewhere else,
// for example: "./striver-logo.png" or "../../public/striver-logo.png"

const AfconHeader = () => {
  return (
    <header className="afcon-header">
      {/* Main header row */}
      <div className="afcon-header-main">
        {/* LEFT: Striver logo */}
        <div className="afcon-header-left">
          <a href="/" className="afcon-header-logo-link">
            <img
              src={striverLogo}
              alt="Striver.Football"
              className="afcon-header-logo"
            />
          </a>
        </div>

        {/* CENTER: Title and tagline */}
        <div className="afcon-header-center">
          <h1 className="afcon-header-title">
            AFCON 2025 Live
          </h1>
          <p className="afcon-header-subtitle">
            Powered by <span>BelowTheLeague.com</span>
          </p>
        </div>

        {/* RIGHT: Placeholder for future nav / buttons if needed */}
        <div className="afcon-header-right">
          {/* You can add buttons, links or icons here later */}
        </div>
      </div>
    </header>
  );
};

export default AfconHeader;
