import { Link } from "react-router-dom";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";

export default function Home({ showOnlyMatches = false }) {
  const sortedMatches = [...matches];

  const latestArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <div className="layout">
      <section className="main-column">
        <h1 className="page-title">AFCON Live Centre</h1>
        <p className="page-intro">
          Live scores, text commentary and quick fire reports from across the AFCON tournament.
        </p>

        <h2 className="section-title">Matches</h2>
        <div className="cards">
          {sortedMatches.map((m) => (
            <Link key={m.id} to={`/match/${m.id}`} className="card match-card">
              <div className="match-card-header">
                <span className={`status status-${m.status}`}>
                  {m.status.toUpperCase()}
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
                  <span>{m.minute}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {!showOnlyMatches && (
        <aside className="side-column">
          <h2 className="section-title">Latest articles</h2>
          <ul className="article-list">
            {latestArticles.slice(0, 4).map((a) => (
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
        </aside>
      )}
    </div>
  );
}
