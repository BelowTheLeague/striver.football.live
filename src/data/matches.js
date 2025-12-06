// src/data/matches.js

// Using national flags from flagcdn.com (w80 wide PNGs)
// ISO country codes are lowercase: https://flagcdn.com/w80/{code}.png

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
    homeBadge: "https://flagcdn.com/w80/ma.png",
    awayBadge: "https://flagcdn.com/w80/ng.png",
    isFeatured: true,
  },
  {
    id: "civ-gha-2025-01-11",
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
    homeBadge: "https://flagcdn.com/w80/ci.png",
    awayBadge: "https://flagcdn.com/w80/gh.png",
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
    homeBadge: "https://flagcdn.com/w80/sn.png",
    awayBadge: "https://flagcdn.com/w80/tn.png",
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
    homeBadge: "https://flagcdn.com/w80/eg.png",
    awayBadge: "https://flagcdn.com/w80/cm.png",
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
    awayTeam: "South Africa",
    homeScore: 0,
    awayScore: 0,
    status: "not_started",
    minute: 0,
    homeBadge: "https://flagcdn.com/w80/dz.png",
    awayBadge: "https://flagcdn.com/w80/za.png",
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
    homeBadge: "https://flagcdn.com/w80/ng.png",
    awayBadge: "https://flagcdn.com/w80/gh.png",
    isFeatured: false,
  },
];

export const getAllMatches = () => matches;

export const getLiveMatches = () =>
  matches.filter((m) => m.status === "live");

export const getFixtures = () =>
  matches.filter((m) => m.status === "not_started");

// Max 2 featured if 6+ total, else 1 – only from live games
export const getFeaturedMatches = () => {
  const live = getLiveMatches();
  const total = matches.length;

  if (!live.length) return [];

  const maxFeatured = total >= 6 ? 2 : 1;
  return live.slice(0, maxFeatured);
};
