// src/data/news.js

export const newsItems = [
  {
    id: "news-1",
    title: "AFCON 2025: Opening day talking points",
    date: "2025-01-11T23:00:00Z",
    blurb:
      "Late drama, big calls and early shocks – here are the key stories from day one.",
  },
  {
    id: "news-2",
    title: "Five players to watch at AFCON 2025",
    date: "2025-01-10T18:00:00Z",
    blurb:
      "From breakout stars to seasoned pros, these players could define the tournament.",
  },
  {
    id: "news-3",
    title: "How Striver.Football is covering AFCON 2025",
    date: "2025-01-09T12:30:00Z",
    blurb:
      "Live match centres, fan chat, podcasts and non-stop social coverage across the tournament.",
  },
];

export const getLatestNews = (limit = 3) =>
  newsItems
    .slice()
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, limit);

export const getAllNews = () =>
  newsItems
    .slice()
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

export const getNewsById = (id) =>
  newsItems.find((n) => n.id === id);
