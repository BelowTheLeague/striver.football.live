import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";

export default function Home({ showOnlyMatches = false }) {
  const [tab, setTab] = useState("live"); // "live" | "upcoming" | "all"

  const sortedMatches = useMemo(() => {
    return [...matches].sort(
      (a, b) => new Date(a.kickoffTime) - new Date(b.kickoffTime)
    );
  }, []);

  const liveMatches = sortedMatches.filter((m) => m.status === "live");
  const upcomingMatches = sortedMatches.filter((m) => m.status === "upcoming");
  const finishedMatches = sortedMatches.filter((m) => m.status === "finished");

  const filteredMatches = useMemo(() => {
    if (tab === "live") return liveMatches;
    if (tab === "upcoming") return upcomingMatches;
    return sortedMatches;
  const nextGame = useMemo(() => {
    if (upcomingMatches.length === 0) return null;
    return upcomingMatches[0]; // they’re already time-sorted
  }, [upcomingMatches]);
  
  }, [tab, liveMatches, upcomingMatches, sortedMatches]);

  const latestArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const heroMatch = liveMatches[0] || upcomingMatches[0] || sortedMatches[0];

  return (
    <div className="layout">
      <section className="main-column">
        {/* TICKER / STRAPLINE */}
        <div className="ticker">
          <span className="ticker-label">Latest</span>
          <div className="ticker-items">
            {liveMatches.length > 0 ? (
              liveMatches.map((m) => (
                <Link
                  key={m.id}
                  to={`/match/${m.id}`}
                  className="ticker-link"
                >
                  {m.homeTeam} {m.homeScore}–{m.awayScore} {m.awayTeam} ·{" "}
                  <span className="ticker-minute">{m.minute}</span>
                </Link>
              ))
            ) : (
              <span className="ticker-empty">
                No live games right now. Check upcoming fixtures.
              </span>
            )}
          </div>
        </div>

        {/* HERO MATCH */}
        {heroMatch && (
          <Link to={`/match/${heroMatch.id}`} className="hero-match">
            <div className="hero-top">
              <span className="hero-tag">
                {heroMatch.status === "live"
                  ? "Live now"
                  : heroMatch.status === "upcoming"
                  ? "Next up"
                  : "Latest result"}
              </span>
              <span className="hero-comp">
                {heroMatch.competition} · {heroMatch.stage}
              </span>
            </div>
            <div className="hero-main">
              <div className="hero-team">
                <span className="hero-team-name">{heroMatch.homeTeam}</span>
              </div>
              <div className="hero-score">
                <span className="hero-score-number">
                  {heroMatch.homeScore}
                </span>
                <span className="hero-score-divider">–</span>
                <span className="hero-score-number">
                  {heroMatch.awayScore}
                </span>
                <span className="hero-minute-pill">
                  {heroMatch.status === "live"
                    ? heroMatch.minute
                    : heroMatch.status === "upcoming"
                    ? "KO soon"
                    : "FT"}
                </span>
              </div>
              <div className="hero-team hero-team-right">
                <span className="hero-team-name">{heroMatch.awayTeam}</span>
              </div>
            </div>
            <div className="hero-bottom">
              <span>
                {heroMatch.stadium}, {heroMatch.city}
              </span>
            </div>
          </Link>
        )}
                {/* NEXT GAME LIVE ON CHANNEL 4 */}
        {nextGame && (
          <div className="next-game-card">
            <div className="next-game-left">
              <div className="next-game-label">Next game live</div>
              <div className="next-game-teams">
                {nextGame.homeTeam} v {nextGame.awayTeam}
              </div>
              <div className="next-game-meta">
                <span>
                  {nextGame.competition} · {nextGame.stage}
                </span>
                <span>
                  {nextGame.stadium}, {nextGame.city}
                </span>
              </div>
            </div>
            <div className="next-game-right">
              <div className="next-game-channel">
                {nextGame.tvChannel || "Channel 4"}
              </div>
              {nextGame.tvPlatforms && (
                <div className="next-game-platforms">
                  {nextGame.tvPlatforms.join(" · ")}
                </div>
              )}
              <Link to={`/match/${nextGame.id}`} className="view-all-link">
                Go to match centre
              </Link>
            </div>
          </div>
        )}


        {/* TABS */}
        <div className="matches-header">
          <h2 className="section-title">AFCON centre</h2>
          <div className="tabs">
            <button
              className={`tab-btn ${tab === "live" ? "tab-btn-active" : ""}`}
              onClick={() => setTab("live")}
            >
              Live{" "}
              {liveMatches.length > 0 && (
                <span className="tab-count">{liveMatches.length}</span>
              )}
            </button>
            <button
              className={`tab-btn ${
                tab === "upcoming" ? "tab-btn-active" : ""
              }`}
              onClick={() => setTab("upcoming")}
            >
              Fixtures{" "}
              {upcomingMatches.length > 0 && (
                <span className="tab-count">{upcomingMatches.length}</span>
              )}
            </button>
            <button
              className={`tab-btn ${tab === "all" ? "tab-btn-active" : ""}`}
              onClick={() => setTab("all")}
            >
              All{" "}
              {sortedMatches.length > 0 && (
                <span className="tab-count">{sortedMatches.length}</span>
              )}
            </button>
          </div>
        </div>

        {/* MATCH LIST */}
        <div className="cards">
          {filteredMatches.length === 0 ? (
            <div className="empty-state">
              No matches in this view. Try another tab.
            </div>
          ) : (
            filteredMatches.map((m) => (
              <Link key={m.id} to={`/match/${m.id}`} className="card match-card">
                <div className="match-card-header">
                  <span className={`status status-${m.status}`}>
                    {m.status === "live"
                      ? "LIVE"
                      : m.status === "upcoming"
                      ? "FIXTURE"
                      : "FT"}
                  </span>
                  <span className="match-competition">
                    {m.competition} · {m.stage}
                  </span>
                </div>
                <div className="match-card-body">
                  <div className="teams">
                    <span>{m.homeTeam}</span>
                    <span className="score">
                      {m.homeScore} – {m.awayScore}
                    </span>
                    <span>{m.awayTeam}</span>
                  </div>
                  <div className="match-meta">
                    <span>
                      {m.stadium}, {m.city}
                    </span>
                    <span>{m.status === "live" ? m.minute : ""}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* RESULTS STRIP (recent finished) */}
        {finishedMatches.length > 0 && (
          <div className="results-strip">
            <h3 className="results-title">Latest results</h3>
            <div className="results-chips">
              {finishedMatches.slice(0, 6).map((m) => (
                <Link
                  key={m.id}
                  to={`/match/${m.id}`}
                  className="result-chip"
                >
                  {m.homeTeam} {m.homeScore}–{m.awayScore} {m.awayTeam}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {!showOnlyMatches && (
        <aside className="side-column">
          <div className="stats-card">
            <h2 className="section-title">Tournament snapshot</h2>
            <p className="muted">
              Live scores, fixtures and instant reports from every game at this
              year&apos;s AFCON.
            </p>
            <ul className="snapshot-list">
              <li>
                <span>Live games</span>
                <strong>{liveMatches.length}</strong>
              </li>
              <li>
                <span>Upcoming fixtures</span>
                <strong>{upcomingMatches.length}</strong>
              </li>
              <li>
                <span>Total matches tracked</span>
                <strong>{sortedMatches.length}</strong>
              </li>
            </ul>
          </div>

          <section className="related-articles">
            <h2 className="section-title">Latest articles</h2>
            <ul className="article-list">
              {latestArticles.slice(0, 5).map((a) => (
                <li key={a.id} className="article-list-item">
                  <Link to={`/articles/${a.id}`} className="article-link">
                    <div className="article-title">{a.title}</div>
                    <div className="article-summary">{a.summary}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/articles" className="view-all-link">
              View all articles
            </Link>
          </section>
        </aside>
      )}
    </div>
  );
}
