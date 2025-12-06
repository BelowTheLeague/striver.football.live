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
    gridTemplateColumns: "1.5fr 1fr",
    gap: "16px",
  };

  const leftStyle = {
    borderRadius: "12px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.45)",
  };

  const heroWrapperStyle = {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    backgroundColor: "#111827",
  };

  const heroImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const leftInnerStyle = {
    padding: "14px 16px 16px 16px",
  };

  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const listCardStyle = {
    borderRadius: "10px",
    border: "1px solid #1f2937",
    backgroundColor: "#020617",
    padding: "8px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
  };

  const activeListCardStyle = {
    ...listCardStyle,
    borderColor: "#22c55e",
  };

  const thumbWrapperStyle = {
    width: "52px",
    height: "52px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#111827",
    flexShrink: 0,
  };

  const thumbStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
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
        {/* LEFT – ACTIVE NEWS WITH BIG IMAGE */}
        <article style={leftStyle}>
          <div style={heroWrapperStyle}>
            <img
              src={
                activeNews.image ||
                "/images/news/placeholder-news-square.jpg"
              }
              alt={activeNews.title}
              style={heroImageStyle}
            />
          </div>
          <div style={leftInnerStyle}>
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
          </div>
        </article>

        {/* RIGHT – LIST OF NEWS ITEMS WITH THUMBS */}
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
              <div style={thumbWrapperStyle}>
                <img
                  src={
                    item.image ||
                    "/images/news/placeholder-news-square.jpg"
                  }
                  alt={item.title}
                  style={thumbStyle}
                />
              </div>
              <div style={{ flex: 1 }}>
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
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default NewsPage;
