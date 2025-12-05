import { Link } from "react-router-dom";
import { articles } from "../data/articles.js";

export default function Articles() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <div className="layout">
      <section className="main-column">
        <h1 className="page-title">AFCON Articles</h1>
        <p className="page-intro">
          Match reports, previews and opinion from across the tournament.
        </p>
        <ul className="article-list article-list-large">
          {sorted.map((a) => (
            <li key={a.id} className="article-list-item">
              <Link to={`/articles/${a.id}`} className="article-link">
                <div className="article-title">{a.title}</div>
                <div className="article-summary">{a.summary}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
