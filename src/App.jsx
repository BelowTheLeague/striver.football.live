import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Match from "./pages/Match.jsx";
import Articles from "./pages/Articles.jsx";
import Article from "./pages/Article.jsx";
import Nations from "./pages/Nations.jsx";
import Nation from "./pages/Nation.jsx";
import MatchReports from "./pages/MatchReports.jsx";
import Admin from "./pages/Admin.jsx";
import PlayerFocus from "./pages/PlayerFocus.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-brand">
          <div className="brand-main">
            <span className="brand-striver">Striver.Football</span>
            <span className="brand-tagline">AFCON Live Football Centre</span>
          </div>
          <div className="brand-partners">
            Official AFCON digital coverage hub
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Live Centre
          </NavLink>
          <NavLink to="/matches" className="nav-link">
            Matches
          </NavLink>
          <NavLink to="/match-reports" className="nav-link">
            Match Reports
          </NavLink>
          <NavLink to="/articles" className="nav-link">
            Articles
          </NavLink>
          <NavLink to="/nations" className="nav-link">
            Nations
          </NavLink>
          <NavLink to="/player/macauley-bonne" className="nav-link">
            Player Focus
          </NavLink>
          {/* Admin is intentionally NOT linked from the public nav.
              /admin will be protected behind authentication. */}
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Home showOnlyMatches />} />
          <Route path="/match/:id" element={<Match />} />
          <Route path="/match-reports" element={<MatchReports />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/nations" element={<Nations />} />
          <Route path="/nation/:id" element={<Nation />} />
          <Route
            path="/player/macauley-bonne"
            element={<PlayerFocus />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-line-main">
          AFCON Live Football Centre brought to you by{" "}
          <a
            href="https://joinstriver.com"
            target="_blank"
            rel="noreferrer"
          >
            Striver.Football
          </a>{" "}
          in partnership with{" "}
          <a
            href="https://belowtheleague.com"
            target="_blank"
            rel="noreferrer"
          >
            BelowTheLeague.com
          </a>
        </div>
        <div className="footer-line-sub">
          Built for live AFCON coverage, match reports and stories from across
          the continent.
        </div>
      </footer>
    </div>
  );
}
