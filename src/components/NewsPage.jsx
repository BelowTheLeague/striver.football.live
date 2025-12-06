// src/components/NewsPage.jsx
import React from "react";
import { getAllNews, getNewsById } from "../data/news";

function NewsPage({ selectedId, onSelect }) {
  const all = getAllNews();
  const activeNews =
    selectedId ? getNewsById(selectedId) : all[0] || null;

  const pageStyle = {
    marginTop: "16px",
  };

  const layoutStyle = {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "16px",
  };

  const leftStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "16px",
  };

  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const listCardStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "10px 12px",
    cursor: "pointer",
    fontSize: "11px",
  };

  const activeListCardStyle = {
    ...listCardStyle,
    borderColor: "#22c55e",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "4px",
  };

  const metaStyle = {
    fontSize: "11px",
    color: "#9ca3af",
    marginBottom: "8px",
  };

  const bodyStyle = {
    fontSize: "12px",
    lineHeight: 1.6,
  };

  if (!activeNews) {
    return (
      <section style={pageStyle}>
        <h2>News</h2>
        <p>No news yet.</p>
      </section>
    );
  }

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Latest News
      </h2>
      <div style={layoutStyle}>
        {/* LEFT – ACTIVE NEWS */}
        <article style={leftStyle}>
          <h3 style={titleStyle}>{activeNews.title}</h3>
          <div style={metaStyle}>
            {new Date(activeNews.date).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div style={bodyStyle}>{activeNews.blurb}</div>
        </article>

        {/* RIGHT – LIST */}
        <aside style={rightStyle}>
          {all.map((item) => (
            <div
              key={item.id}
              style={
                activeNews.id === item.id
                  ? activeListCardStyle
                  : listCardStyle
              }
              onClick={() => onSelect(item.id)}
            >
              <div style={{ fontWeight: 600, marginBottom: "2px" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "10px", color: "#9ca3af" }}>
                {new Date(item.date).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default NewsPage;
