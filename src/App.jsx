import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Match from "./pages/Match.jsx";
import Articles from "./pages/Articles.jsx";
import Article from "./pages/Article.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-title">
          <span className="badge">AFCON</</span> Live Football Centre
        </div>
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Live Centre
          </NavLink>
          <NavLink to="/matches" className="nav-link">
            Matches
          </NavLink>
          <NavLink to="/articles" className="nav-link">
            Articles
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Home showOnlyMatches />} />
          <Route path="/match/:id" element={<Match />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
      </main>

      <footer className="site-footer">
        AFCON Live Centre · Built for live football coverage and post-match reports
      </footer>
    </div>
  );
}
