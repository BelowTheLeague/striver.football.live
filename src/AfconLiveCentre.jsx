import React, { useEffect, useState } from "react";
import "./AfconLiveCentre.css"; // or your own path

const AfconLiveCentre = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY + 10 && currentY > 80) {
        // scrolling down
        setHeaderHidden(true);
      } else if (currentY < lastScrollY - 10) {
        // scrolling up
        setHeaderHidden(false);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // lock scroll when nav is open
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <div className="sf-page">
      {/* HEADER */}
      <header
        className={`sf-header ${headerHidden ? "sf-header-hidden" : ""}`}
      >
        <div className="sf-header-top">
          <div className="sf-container sf-header-top-inner">
            <div className="sf-header-logo sf-header-logo-left">
              {/* Replace with your actual Striver logo path */}
              <img src="/assets/striver-logo.png" alt="Striver.Football" />
            </div>

            <div className="sf-header-centre">
              <span className="sf-header-pill">AFCON 2025</span>
              <span className="sf-header-title">AFCON Live Football Centre</span>
              <span className="sf-header-subtitle">
                Brought to you by <strong>Striver.Football</strong>
                <br />
                in partnership with <strong>BelowTheLeague.com</strong>
              </span>
            </div>

            <div className="sf-header-logo sf-header-logo-right">
              {/* Replace with your actual BTL logo path */}
              <img src="/assets/btl-logo.png" alt="BelowTheLeague" />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="sf-menu-toggle"
              aria-label="Open navigation"
              onClick={() => setNavOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="sf-nav">
          <div className="sf-container">
            <ul className="sf-nav-list">
              <li>
                <a href="#top" className="sf-nav-link sf-nav-link-active">
                  Live Centre
                </a>
              </li>
              <li>
                <a href="#reports" className="sf-nav-link">
                  Match Reports
                </a>
              </li>
              <li>
                <a href="#news" className="sf-nav-link">
                  News
                </a>
              </li>
              <li>
                <a href="#fixtures" className="sf-nav-link">
                  Fixtures
                </a>
              </li>
              <li>
                <a href="#tables" className="sf-nav-link">
                  Tables
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* MOBILE FULL SCREEN NAV */}
        <div
          className={`sf-nav-overlay ${navOpen ? "sf-nav-overlay-open" : ""}`}
        >
          <button
            className="sf-nav-close"
            aria-label="Close navigation"
            onClick={closeNav}
          >
            &times;
          </button>
          <ul className="sf-nav-overlay-list">
            <li>
              <a
                href="#top"
                className="sf-nav-overlay-link sf-active"
                onClick={closeNav}
              >
                Live Centre
              </a>
            </li>
            <li>
              <a
                href="#reports"
                className="sf-nav-overlay-link"
                onClick={closeNav}
              >
                Match Reports
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="sf-nav-overlay-link"
                onClick={closeNav}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#fixtures"
                className="sf-nav-overlay-link"
                onClick={closeNav}
              >
                Fixtures
              </a>
            </li>
            <li>
              <a
                href="#tables"
                className="sf-nav-overlay-link"
                onClick={closeNav}
              >
                Tables
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="sf-main" id="top">
        {/* HERO ROW */}
        <section className="sf-hero">
          <div className="sf-container sf-hero-inner">
            <div className="sf-hero-copy">
              <h1>Live from AFCON 2025</h1>
              <p>
                Real time scores, breaking updates, match reports and tournament
                features, curated by Striver.Football and BelowTheLeague.
              </p>
              <div className="sf-hero-meta">
                <span className="sf-hero-pill">Every match covered</span>
                <span className="sf-hero-pill">Safe, moderated football space</span>
              </div>
            </div>

            <div className="sf-hero-card">
              <h2>Live right now</h2>

              <div className="sf-live-card">
                <div className="sf-live-row">
                  <span className="sf-live-pill">Live</span>
                  <span className="sf-live-minute">67&apos;</span>
                </div>
                <div className="sf-live-teams">
                  <div className="sf-live-team">
                    <span className="sf-team-name">Morocco</span>
                    <span className="sf-team-score">2</span>
                  </div>
                  <div className="sf-live-team">
                    <span className="sf-team-name">Nigeria</span>
                    <span className="sf-team-score">1</span>
                  </div>
                </div>
                <div className="sf-live-meta">
                  Group A • Matchday 3 • Casablanca
                </div>
              </div>

              <div className="sf-live-card sf-live-card-secondary">
                <div className="sf-live-row">
                  <span className="sf-live-pill sf-live-pill-soon">Next</span>
                  <span className="sf-live-minute">KO 20:00</span>
                </div>
                <div className="sf-live-teams">
                  <div className="sf-live-team">
                    <span className="sf-team-name">Senegal</span>
                  </div>
                  <div className="sf-live-team">
                    <span className="sf-team-name">Ghana</span>
                  </div>
                </div>
                <div className="sf-live-meta">Group C • Yamoussoukro</div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="sf-container sf-grid">
          {/* LIVE FEED COLUMN */}
          <section className="sf-col sf-col-live">
            <h2 className="sf-section-title">Live text commentary</h2>

            <article className="sf-live-feed">
              <div className="sf-feed-header">
                <span className="sf-feed-match">Morocco v Nigeria</span>
                <span className="sf-feed-status">Live • 67&apos;</span>
              </div>
              <ul className="sf-feed-list">
                <li>
                  <span className="sf-feed-time">67&apos;</span>
                  <p className="sf-feed-text">
                    Big chance for Nigeria. A deep cross finds the back post but the
                    header is straight at the keeper.
                  </p>
                </li>
                <li>
                  <span className="sf-feed-time">61&apos;</span>
                  <p className="sf-feed-text">
                    Morocco slow the tempo and keep the ball in midfield, happy to draw
                    Nigeria onto them before breaking wide.
                  </p>
                </li>
                <li>
                  <span className="sf-feed-time">54&apos;</span>
                  <p className="sf-feed-text">
                    Goal for Morocco. A low cutback is swept into the far corner and
                    the stadium explodes.
                  </p>
                </li>
                <li>
                  <span className="sf-feed-time">HT</span>
                  <p className="sf-feed-text">
                    Level at the break. End to end, frantic and full of noise inside
                    the host city.
                  </p>
                </li>
              </ul>
            </article>
          </section>

          {/* MATCH REPORTS COLUMN */}
          <section className="sf-col" id="reports">
            <h2 className="sf-section-title">Latest match reports</h2>

            <article className="sf-card sf-card-report">
              <div className="sf-card-hero">
                {/* 1920x1080 hero, will crop in the card */}
                <img
                  src="https://picsum.photos/1920/1080?random=11"
                  alt="Match hero"
                />
              </div>
              <div className="sf-card-body">
                <div className="sf-card-meta-row">
                  <span className="sf-card-meta">Group A • FT</span>
                  <span className="sf-card-meta-strong">MOR 2–1 NIG</span>
                </div>
                <h3 className="sf-card-title">
                  Morocco edge Nigeria in a frantic opener to light up AFCON 2025
                </h3>
                <p className="sf-card-text">
                  A late winner and a wall of sound under the lights in Casablanca
                  as the host nation start with three points.
                </p>
                <div className="sf-card-footer">
                  <span className="sf-card-author">Striver Match Centre</span>
                  <span className="sf-card-time">Published 12 mins ago</span>
                </div>
              </div>
            </article>

            <article className="sf-card sf-card-report">
              <div className="sf-card-hero">
                <img
                  src="https://picsum.photos/1920/1080?random=12"
                  alt="Match hero"
                />
              </div>
              <div className="sf-card-body">
                <div className="sf-card-meta-row">
                  <span className="sf-card-meta">Group B • FT</span>
                  <span className="sf-card-meta-strong">EGY 3–0 GHA</span>
                </div>
                <h3 className="sf-card-title">
                  Salah show as Egypt cruise past Ghana to take control of the group
                </h3>
                <p className="sf-card-text">
                  Two goals from the captain and a ruthless display move Egypt into a
                  strong position ahead of the final round of games.
                </p>
                <div className="sf-card-footer">
                  <span className="sf-card-author">BelowTheLeague</span>
                  <span className="sf-card-time">Today • 18:05</span>
                </div>
              </div>
            </article>
          </section>

          {/* NEWS COLUMN */}
          <section className="sf-col" id="news">
            <h2 className="sf-section-title">Tournament news</h2>

            <article className="sf-card sf-card-news">
              <div className="sf-card-news-image">
                <img
                  src="https://picsum.photos/640/640?random=21"
                  alt="News"
                />
              </div>
              <div className="sf-card-body">
                <div className="sf-card-meta-row">
                  <span className="sf-live-badge">
                    <span className="sf-live-dot"></span>
                    Live
                  </span>
                  <span className="sf-card-time">Updated 2 mins ago</span>
                </div>
                <h3 className="sf-card-title">
                  Fan zones open early after record ticket demand across the host
                  cities
                </h3>
                <p className="sf-card-text">
                  Extra big screens, more food vendors and extended hours as
                  supporters pour into fan parks from sunrise.
                </p>
              </div>
            </article>

            <article className="sf-card sf-card-news">
              <div className="sf-card-news-image">
                <img
                  src="https://picsum.photos/640/640?random=22"
                  alt="News"
                />
              </div>
              <div className="sf-card-body">
                <div className="sf-card-meta-row">
                  <span className="sf-card-tag">Feature</span>
                  <span className="sf-card-time">Today • 15:40</span>
                </div>
                <h3 className="sf-card-title">
                  Street football, colour and drums: a day inside AFCON fan culture
                </h3>
                <p className="sf-card-text">
                  From painted faces to late night sing songs, we follow one group of
                  supporters through a full matchday.
                </p>
              </div>
            </article>
          </section>
        </section>

        {/* FIXTURES AND TABLES */}
        <section className="sf-container sf-grid sf-grid-secondary" id="fixtures">
          <section className="sf-col">
            <h2 className="sf-section-title">Today&apos;s fixtures</h2>
            <div className="sf-card sf-card-list">
              <ul className="sf-list">
                <li>
                  <span className="sf-list-match">Senegal v Ghana</span>
                  <span className="sf-list-meta">Group C • 20:00</span>
                </li>
                <li>
                  <span className="sf-list-match">Ivory Coast v DR Congo</span>
                  <span className="sf-list-meta">Group D • 17:00</span>
                </li>
                <li>
                  <span className="sf-list-match">Cameroon v Mali</span>
                  <span className="sf-list-meta">Group E • 14:00</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="sf-col" id="tables">
            <h2 className="sf-section-title">Group A table</h2>
            <div className="sf-card sf-card-table">
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>P</th>
                    <th>GD</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Morocco</td>
                    <td>2</td>
                    <td>+3</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Nigeria</td>
                    <td>2</td>
                    <td>+1</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Egypt</td>
                    <td>2</td>
                    <td>-1</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Guinea</td>
                    <td>2</td>
                    <td>-3</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>

      <footer className="sf-footer">
        <div className="sf-container sf-footer-inner">
          <p>
            AFCON Live Football Centre by <strong>Striver.Football</strong> in
            partnership with <strong>BelowTheLeague.com</strong> • Football social
            media, done safely.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AfconLiveCentre;
