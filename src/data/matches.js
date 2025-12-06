// src/data/matches.js

// Basic AFCON-style fixtures with statuses for the UI
export const matches = [
  {
    id: "mor-nig-2025-01-11",
    date: "2025-01-11",
    kickOff: "2025-01-11T20:00:00Z",
    stadium: "Abidjan Stadium",
    stage: "Group A",
    group: "Group A",
    homeTeam: "Morocco",
    awayTeam: "Nigeria",
    homeScore: 1,
    awayScore: 0,
    status: "live", // "live" | "finished" | "not_started"
    minute: 55,
    homeBadge: "/badges/morocco.png",
    awayBadge: "/badges/nigeria.png",
    isFeatured: true,
  },
  {
    id: "civ-ghi-2025-01-11",
    date: "2025-01-11",
    kickOff: "2025-01-11T17:00:00Z",
    stadium: "Yamoussoukro Stadium",
    stage: "Group A",
    group: "Group A",
    homeTeam: "Ivory Coast",
    awayTeam: "Ghana",
    homeScore: 2,
    awayScore: 2,
    status: "finished",
    minute: 90,
    homeBadge: "/badges/ivory-coast.png",
    awayBadge: "/badges/ghana.png",
    isFeatured: true,
  },
  {
    id: "sen-tun-2025-01-12",
    date: "2025-01-12",
    kickOff: "2025-01-12T16:00:00Z",
    stadium: "Dakar Arena",
    stage: "Group B",
    group: "Group B",
    homeTeam: "Senegal",
    awayTeam: "Tunisia",
    homeScore: 0,
    awayScore: 0,
    status: "not_started",
    minute: 0,
    homeBadge: "/badges/senegal.png",
    awayBadge: "/badges/tunisia.png",
    isFeatured: true,
  },
  {
    id: "egy-cam-2025-01-12",
    date: "2025-01-12",
    kickOff: "2025-01-12T19:00:00Z",
    stadium: "Cairo International Stadium",
    stage: "Group B",
    group: "Group B",
    homeTeam: "Egypt",
    awayTeam: "Cameroon",
    homeScore: 0,
    awayScore: 0,
    status: "not_started",
    minute: 0,
    homeBadge: "/badges/egypt.png",
    awayBadge: "/badges/cameroon.png",
    isFeatured: false,
  },
  {
    id: "alg-mar-2025-01-13",
    date: "2025-01-13",
    kickOff: "2025-01-13T18:00:00Z",
    stadium: "Algiers Stadium",
    stage: "Group C",
    group: "Group C",
    homeTeam: "Algeria",
    awayTeam: "Morocco",
    homeScore: 0,
    awayScore: 0,
    status: "not_started",
    minute: 0,
    homeBadge: "/badges/algeria.png",
    awayBadge: "/badges/morocco.png",
    isFeatured: true,
  },
  {
    id: "nga-gha-2025-01-14",
    date: "2025-01-14",
    kickOff: "2025-01-14T20:00:00Z",
    stadium: "Lagos Stadium",
    stage: "Group C",
    group: "Group C",
    homeTeam: "Nigeria",
    awayTeam: "Ghana",
    homeScore: 0,
    awayScore: 0,
    status: "not_started",
    minute: 0,
    homeBadge: "/badges/nigeria.png",
    awayBadge: "/badges/ghana.png",
    isFeatured: false,
  },
];

export const getAllMatches = () => matches;

export const getLiveMatches = () =>
  matches.filter((m) => m.status === "live");

export const getFixtures = () =>
  matches.filter((m) => m.status === "not_started");

export const getFeaturedMatches = () => {
  const live = getLiveMatches();
  const total = matches.length;

  if (!live.length) return [];

  const maxFeatured = total >= 6 ? 2 : 1;
  return live.slice(0, maxFeatured);
};
