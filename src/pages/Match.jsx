import { useParams, Link } from "react-router-dom";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";

function formatStatus(match) {
  if (match.status === "upcoming") return "Upcoming";
  if (match.status === "live") return `Live · ${match.minute}`;
  if (match.status === "finished") return "Full time";
  return match.status;
}

export default function Match() {
  const { id } = useParams();
  const match = matches.find((m) => m.id === id);

  if (!match) {
    return <div>Match not found.</div>;
  }

  const relatedArticles = articles.filter((a) => a.matchId === match.id);

  return (
    <div className="match-layout">
      <section className="main-column">
        <header className="match-header">
          <div className="match-status">{formatStatus(match)}</div>
          <h1 className="match-title">
            {match.homeTeam} v {match.awayTeam}
          </h1>
          <div className="match-meta">
            <span>
              {match.competition} · {match.stage}
            </span>
            <span>
              {match.stadium}, {match.city}
            </span>
          </div>
          <div className="match-scoreline">
            <span className="team">{match.homeTeam}</span>
            <span className="score">
              {match.homeScore} – {match.awayScore}
            </span>
            <span className="team">{match.awayTeam}</span>
          </div>
        </header>

        <section className="live-updates">
          <h2 className="section-title">Live text commentary</h2>
          {match.events.length === 0 && (
            <p className="muted">Updates will appear here once the match kicks off.</p>
          )}
          <ul className="events-list">
            {match.events
              .slice()
              .reverse()
              .map((e) => (
                <li key={e.id} className={`event event-${e.type}`}>
                  <div className="event-minute">{e.minute}</div>
                  <div className="event-body">
                    <div className="event-type">{e.team}</div>
                    <div className="event-text">{e.text}</div>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </section>

      <aside className="side-column">
        <section className="stats-card">
          <h2 className="section-title">Match stats</h2>
          {match.stats ? (
            <table className="stats-table">
              <tbody>
                <tr>
                  <td>Possession</td>
                  <td>{match.stats.possessionHome}%</td>
                  <td>{match.stats.possessionAway}%</td>
                </tr>
                <tr>
                  <td>Shots (on target)</td>
                  <td>
                    {match.stats.shotsHome} ({match.stats.shotsOnTargetHome})
                  </td>
                  <td>
                    {match.stats.shotsAway} ({match.stats.shotsOnTargetAway})
                  </td>
                </tr>
                <tr>
                  <td>Corners</td>
                  <td>{match.stats.cornersHome}</td>
                  <td>{match.stats.cornersAway}</td>
                </tr>
                <tr>
                  <td>Fouls</td>
                  <td>{match.stats.foulsHome}</td>
                  <td>{match.stats.foulsAway}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="muted">Stats will appear once the match is under way.</p>
          )}
        </section>

        <section className="related-articles">
          <h2 className="section-title">Related articles</h2>
          {relatedArticles.length === 0 ? (
            <p className="muted">No articles yet for this match.</p>
          ) : (
            <ul className="article-list">
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
      </aside>
    </div>
  );
}
