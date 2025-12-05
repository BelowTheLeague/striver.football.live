import { useParams, Link } from "react-router-dom";
import { nations } from "../data/nations.js";
import { matches } from "../data/matches.js";
import { articles } from "../data/articles.js";
import { players } from "../data/players.js";

export default function Nation() {
  const { id } = useParams();
  const nation = nations.find((n) => n.id === id);

  if (!nation) {
    return <div>Nation not found.</div>;
  }

  const nationMatches = matches.filter(
    (m) => m.nationIds && m.nationIds.includes(nation.id)
  );

  const nextNationMatch =
    nationMatches
      .filter((m) => m.status === "upcoming")
      .sort(
        (a, b) => new Date(a.kickoffTime) - new Date(b.kickoffTime)
      )[0] || null;

  const nationArticles = articles.filter(
    (a) =>
      a.nationId === nation.id ||
      (a.nationIds && a.nationIds.includes(nation.id))
  );

  const nationPlayers = players.filter((p) => p.nationId === nation.id);

  return (
    <div className="layout">
      <section className="main-column">
        <div className="nation-hero">
          <div className="nation-hero-flag">
            <img src={nation.flagUrl} alt={nation.name} />
          </div>
          <div className="nation-hero-text">
            <p className="breadcrumb">
              <Link to="/nations">Nations</Link> · {nation.group}
            </p>
            <h1 className="page-title">{nation.name}</h1>
            <p className="page-intro">{nation.shortBio}</p>

            {nextNationMatch && (
              <div className="next-game-card small">
                <div className="next-game-left">
                  <div className="next-game-label">Next game live</div>
                  <div className="next-game-teams">
                    {nextNationMatch.homeTeam} v {nextNationMatch.awayTeam}
                  </div>
                  <div className="next-game-meta">
                    <span>
                      {nextNationMatch.competition} ·{" "}
                      {nextNationMatch.stage}
                    </span>
                  </div>
                </div>
                <div className="next-game-right">
                  <div className="next-game-channel">
                    {nextNationMatch.tvChannel || "Channel 4"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="section-title">Squad</h2>
        {nationPlayers.length === 0 ? (
          <p className="muted">
            Squad list coming soon. Check back for full player cards.
          </p>
        ) : (
          <div className="player-grid">
            {nationPlayers.map((p) => (
              <div key={p.id} className="player-card">
                <div className="player-rating">{p.rating}</div>
                <div className="player-flag-mini">
                  <img src={nation.flagUrl} alt={nation.name} />
                </div>
                <div className="player-image-wrap">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="player-image"
                  />
                </div>
                <div className="player-info">
                  <div className="player-position">{p.position}</div>
                  <div className="player-name">{p.name}</div>
                  <div className="player-meta">
                    #{p.number} · {p.club}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <aside className="side-column">
        <section className="related-articles">
          <h2 className="section-title">Nation news</h2>
          {nationArticles.length === 0 ? (
            <p className="muted">
              No stories yet for {nation.name}. Once reports drop, they&apos;ll
              appear here.
            </p>
          ) : (
            <ul className="article-list">
              {nationArticles.map((a) => (
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
