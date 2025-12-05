import { Link } from "react-router-dom";
import { nations } from "../data/nations.js";

export default function Nations() {
  return (
    <div className="layout">
      <section className="main-column">
        <h1 className="page-title">AFCON Nations</h1>
        <p className="page-intro">
          Browse every nation at AFCON 2025, view their squads and catch up on
          all the latest news.
        </p>

        <div className="nation-grid">
          {nations.map((n) => (
            <Link key={n.id} to={`/nation/${n.id}`} className="nation-card">
              <div className="nation-flag-wrap">
                <img src={n.flagUrl} alt={n.name} className="nation-flag" />
              </div>
              <div className="nation-info">
                <div className="nation-name">{n.name}</div>
                <div className="nation-group">{n.group}</div>
                <p className="nation-bio">{n.shortBio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
