import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles.js";
import { matches } from "../data/matches.js";

export default function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  const match = matches.find((m) => m.id === article.matchId);

  return (
    <div className="layout">
      <section className="main-column">
        <p className="breadcrumb">
          <Link to="/articles">Articles</Link>
          {match && (
            <>
              {" "}
              ·{" "}
              <Link to={`/match/${match.id}`}>
                {match.homeTeam} v {match.awayTeam}
              </Link>
            </>
          )}
        </p>
        <h1 className="page-title">{article.title}</h1>
        <article className="article-body">
          {article.body
            .trim()
            .split("\n")
            .map((para, i) => {
              const text = para.trim();
              if (!text) return null;
              return <p key={i}>{text}</p>;
            })}
        </article>
      </section>

      {match && (
        <aside className="side-column">
          <div className="match-mini-card">
            <h2 className="section-title">Match centre</h2>
            <div className="teams">
              <span>{match.homeTeam}</span>
              <span className="score">
                {match.homeScore} – {match.awayScore}
              </span>
              <span>{match.awayTeam}</span>
            </div>
            <div className="match-meta">
              <span>
                {match.competition} · {match.stage}
              </span>
              <span>
                {match.stadium}, {match.city}
              </span>
            </div>
            <Link to={`/match/${match.id}`} className="view-all-link">
              Go to live match page
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
}
