import { Link } from "react-router-dom";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";

export default function PlayerFocus() {
  const playerId = "macauley-bonne";

  const upcoming = matches.filter(
    (m) => m.nationIds && m.nationIds.includes("zimbabwe")
  );
  const relatedArticles = articles.filter((a) => a.playerId === playerId);

  return (
    <div className="layout">
      <section className="main-column">
        <div className="player-focus-hero">
          <div className="player-focus-card">
            <div className="player-focus-header">
              <img
                src="https://via.placeholder.com/200x200?text=Macauley+Bonne"
                alt="Macauley Bonne"
                className="player-focus-avatar"
              />
              <div>
                <div className="player-focus-name">
                  Macauley Bonne · Zimbabwe
                </div>
                <div className="player-focus-meta">
                  Striker · Official Striver.Football AFCON creator
                </div>
                <div className="player-focus-badges">
                  <span className="player-focus-badge">Striver Creator</span>
                  <span className="player-focus-badge">
                    AFCON 2025 Player Focus
                  </span>
                </div>
              </div>
            </div>
            <p className="page-intro">
              Macauley Bonne is front and centre of Zimbabwe&apos;s AFCON
              campaign and also an official Striver.Football creator, taking
              fans behind the scenes throughout the tournament.
            </p>
          </div>

          <div className="player-focus-card">
            <h2 className="section-title">Upcoming AFCON fixtures</h2>
            {upcoming.length === 0 ? (
              <p className="muted">
                Zimbabwe&apos;s AFCON fixtures will drop here once confirmed.
              </p>
            ) : (
              <ul className="focus-list">
                {upcoming.map((m) => (
                  <li key={m.id}>
                    <Link to={`/match/${m.id}`} className="article-link">
                      {m.homeTeam} v {m.awayTeam} · {m.stage} ·{" "}
                      {m.competition}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <h2 className="section-title">Bonne content centre</h2>
        {relatedArticles.length === 0 ? (
          <p className="muted">
            Features, interviews and match reports focused on Macauley Bonne
            will appear here once published.
          </p>
        ) : (
          <ul className="article-list article-list-large">
            {relatedArticles.map((a) => (
              <li key={a.id} className="article-list-item">
                <Link to={`/articles/${a.id}`} className="article-link">
                  <div className="article-title">{a.title}</div>
                  <div className="article-summary">{a.summary}</div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <aside className="side-column">
        <div className="stats-card">
          <h2 className="section-title">About Macauley Bonne</h2>
          <p className="muted">
            Zimbabwe international striker and official Striver.Football
            creator for AFCON 2025. Expect goals, graft and behind the scenes
            content from camp.
          </p>
          <p className="muted">
            Follow his journey on Striver.Football and across social as he
            represents Zimbabwe on the biggest stage in African football.
          </p>
        </div>
      </aside>
    </div>
  );
}
