import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";
import { matches } from "../data/matches.js";

export default function MatchReports() {
  const reports = articles
    .filter(
      (a) => a.category === "report" || (a.matchId && !a.category)
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const getMatch = (id) => matches.find((m) => m.id === id);

  return (
    <div className="layout">
      <section className="main-column">
        <div className="reports-header">
          <div>
            <h1 className="page-title">Match Reports Centre</h1>
            <p className="page-intro">
              Full-time write ups from every AFCON game we cover, all in one
              place.
            </p>
          </div>
          <span className="report-tag">{reports.length} reports</span>
        </div>

        <ul className="article-list article-list-large">
          {reports.map((a) => {
            const match = a.matchId ? getMatch(a.matchId) : null;
            return (
              <li key={a.id} className="article-list-item">
                <Link
                  to={`/articles/${a.id}`}
                  className="article-link"
                >
                  <div className="article-title">{a.title}</div>
                  {match && (
                    <div className="report-meta">
                      {match.homeTeam} {match.homeScore}–
                      {match.awayScore} {match.awayTeam} ·{" "}
                      {match.competition} · {match.stage}
                    </div>
                  )}
                  <div className="article-summary">{a.summary}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
