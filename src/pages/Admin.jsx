import { useState } from "react";
import { authors } from "../data/authors.js";
import { matches } from "../data/matches.js";
import { nations } from "../data/nations.js";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    body: "",
    matchId: "",
    nationId: "",
    category: "report",
    authorId: "",
    playerId: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
    featuredImage: ""
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const articleJson = {
    id: form.slug || "your-article-id",
    title: form.title,
    summary: form.summary,
    body: form.body,
    matchId: form.matchId || undefined,
    nationId: form.nationId || undefined,
    category: form.category || undefined,
    authorId: form.authorId || undefined,
    playerId: form.playerId || undefined,
    publishedAt: new Date().toISOString(),
    metaTitle: form.metaTitle || undefined,
    metaDescription: form.metaDescription || undefined,
    slug: form.slug || undefined,
    featuredImage: form.featuredImage || undefined
  };

  return (
    <div className="admin-layout">
      <h1 className="page-title">Admin panel</h1>
      <p className="page-intro">
        Internal tools for AFCON journalists. Fill in reports, features and
        previews with full SEO fields, then copy the JSON into the live data
        store.
      </p>

      <div className="admin-grid">
        <section className="admin-card">
          <h2>New article</h2>
          <p className="admin-help">
            Complete the fields, then copy the JSON preview on the right into{" "}
            <code>articles.js</code> (or into your future API).
          </p>

          <div className="form-row">
            <label>Title</label>
            <input
              value={form.title}
              onChange={handleChange("title")}
              placeholder="Senegal battle back to hold Nigeria in AFCON thriller"
            />
          </div>

          <div className="form-row">
            <label>Short summary</label>
            <textarea
              value={form.summary}
              onChange={handleChange("summary")}
              placeholder="One or two sentences for lists and previews."
            />
          </div>

          <div className="form-row">
            <label>Body</label>
            <textarea
              value={form.body}
              onChange={handleChange("body")}
              placeholder="Write the full report or feature here. Paragraphs separated by line breaks."
            />
            <div className="form-hint">
              Use plain text. Paragraphs are split on line breaks in the front
              end.
            </div>
          </div>

          <div className="form-row">
            <label>Category</label>
            <select
              value={form.category}
              onChange={handleChange("category")}
            >
              <option value="report">Report</option>
              <option value="preview">Preview</option>
              <option value="feature">Feature</option>
              <option value="news">News</option>
            </select>
          </div>

          <div className="form-row">
            <label>Match (optional)</label>
            <select
              value={form.matchId}
              onChange={handleChange("matchId")}
            >
              <option value="">Not linked to a single match</option>
              {matches.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.homeTeam} v {m.awayTeam} · {m.competition} ·{" "}
                  {m.stage}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Nation (optional)</label>
            <select
              value={form.nationId}
              onChange={handleChange("nationId")}
            >
              <option value="">No specific nation</option>
              {nations.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Player (optional, e.g. Macauley Bonne)</label>
            <input
              value={form.playerId}
              onChange={handleChange("playerId")}
              placeholder="macauley-bonne"
            />
          </div>

          <div className="form-row">
            <label>Author</label>
            <select
              value={form.authorId}
              onChange={handleChange("authorId")}
            >
              <option value="">Select author</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          <h2>SEO</h2>

          <div className="form-row">
            <label>Meta title</label>
            <input
              value={form.metaTitle}
              onChange={handleChange("metaTitle")}
              placeholder="Page title for search engines"
            />
          </div>

          <div className="form-row">
            <label>Meta description</label>
            <textarea
              value={form.metaDescription}
              onChange={handleChange("metaDescription")}
              placeholder="One or two sentences for Google snippets."
            />
          </div>

          <div className="form-row">
            <label>Slug</label>
            <input
              value={form.slug}
              onChange={handleChange("slug")}
              placeholder="senegal-1-1-nigeria-afcon-2025-report"
            />
            <div className="form-hint">
              URL friendly. Lowercase, hyphens instead of spaces.
            </div>
          </div>

          <div className="form-row">
            <label>Featured image URL</label>
            <input
              value={form.featuredImage}
              onChange={handleChange("featuredImage")}
              placeholder="https://..."
            />
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() =>
              console.log("Generated article JSON:", articleJson)
            }
          >
            Log JSON to console
          </button>
        </section>

        <aside className="admin-card">
          <h2>Article JSON preview</h2>
          <p className="admin-help">
            Copy this object into <code>articles.js</code> or your future CMS /
            API.
          </p>
          <pre className="admin-preview">
            {JSON.stringify(articleJson, null, 2)}
          </pre>

          <h2>Author profiles</h2>
          <p className="admin-help">
            Journalists filing reports should have a profile here with their
            Striver and social handles.
          </p>
          <ul className="author-list">
            {authors.map((a) => (
              <li key={a.id}>
                <div className="author-name">{a.name}</div>
                <div className="author-handles">
                  {a.bio && <div>{a.bio}</div>}
                  {a.handles && (
                    <div>
                      {a.handles.striver && (
                        <span>Striver: {a.handles.striver} · </span>
                      )}
                      {a.handles.x && (
                        <span>X: {a.handles.x} · </span>
                      )}
                      {a.handles.linkedin && (
                        <span>LinkedIn ✓ </span>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
