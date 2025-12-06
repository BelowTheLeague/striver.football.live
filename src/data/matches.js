// src/data/matches.ts

export type MatchStatus = "not_started" | "live" | "finished";

export interface Match {
  id: string;
  tournament: "AFCON_2025";
  group: string; // e.g. "Group A" or "Quarter Finals"
  stage: "Group" | "Quarter Final" | "Semi Final" | "Final";

  homeTeam: string;
  homeBadge: string;
  awayTeam: string;
  awayBadge: string;

  homeScore: number | null;
  awayScore: number | null;

  minute: number | null; // null when not started or finished
  status: MatchStatus;

  stadium: string;
  city: string;

  // ISO string in UTC – adjust dates/times as needed
  kickOff: string;
}

// ---- CORE DATA ----

export const matches: Match[] = [
  // GROUP A
  {
    id: "afcon-2025-g1-1",
    tournament: "AFCON_2025",
    group: "Group A",
    stage: "Group",
    homeTeam: "Morocco",
    homeBadge: "/badges/morocco.png",
    awayTeam: "Ghana",
    awayBadge: "/badges/ghana.png",
    homeScore: 2,
    awayScore: 1,
    minute: 90,
    status: "finished",
    stadium: "Mohammed V Stadium",
    city: "Casablanca",
    kickOff: "2025-07-10T19:00:00Z",
  },
  {
    id: "afcon-2025-g1-2",
    tournament: "AFCON_2025",
    group: "Group A",
    stage: "Group",
    homeTeam: "DR Congo",
    homeBadge: "/badges/dr-congo.png",
    awayTeam: "Cape Verde",
    awayBadge: "/badges/cape-verde.png",
    homeScore: 0,
    awayScore: 0,
    minute: 55,
    status: "live",
    stadium: "Grand Stade de Tanger",
    city: "Tangier",
    kickOff: "2025-07-10T16:00:00Z",
  },

  // GROUP B
  {
    id: "afcon-2025-g2-1",
    tournament: "AFCON_2025",
    group: "Group B",
    stage: "Group",
    homeTeam: "Senegal",
    homeBadge: "/badges/senegal.png",
    awayTeam: "Cameroon",
    awayBadge: "/badges/cameroon.png",
    homeScore: 1,
    awayScore: 1,
    minute: 34,
    status: "live",
    stadium: "Stade de Marrakech",
    city: "Marrakesh",
    kickOff: "2025-07-11T19:00:00Z",
  },
  {
    id: "afcon-2025-g2-2",
    tournament: "AFCON_2025",
    group: "Group B",
    stage: "Group",
    homeTeam: "Guinea",
    homeBadge: "/badges/guinea.png",
    awayTeam: "Burkina Faso",
    awayBadge: "/badges/burkina-faso.png",
    homeScore: null,
    awayScore: null,
    minute: null,
    status: "not_started",
    stadium: "Stade Agadir",
    city: "Agadir",
    kickOff: "2025-07-11T16:00:00Z",
  },

  // GROUP C
  {
    id: "afcon-2025-g3-1",
    tournament: "AFCON_2025",
    group: "Group C",
    stage: "Group",
    homeTeam: "Nigeria",
    homeBadge: "/badges/nigeria.png",
    awayTeam: "Ivory Coast",
    awayBadge: "/badges/ivory-coast.png",
    homeScore: 3,
    awayScore: 2,
    minute: 90,
    status: "finished",
    stadium: "Stade de Rabat",
    city: "Rabat",
    kickOff: "2025-07-12T19:00:00Z",
  },
  {
    id: "afcon-2025-g3-2",
    tournament: "AFCON_2025",
    group: "Group C",
    stage: "Group",
    homeTeam: "Equatorial Guinea",
    homeBadge: "/badges/equatorial-guinea.png",
    awayTeam: "Mali",
    awayBadge: "/badges/mali.png",
    homeScore: null,
    awayScore: null,
    minute: null,
    status: "not_started",
    stadium: "Stade de Fes",
    city: "Fez",
    kickOff: "2025-07-12T16:00:00Z",
  },

  // GROUP D
  {
    id: "afcon-2025-g4-1",
    tournament: "AFCON_2025",
    group: "Group D",
    stage: "Group",
    homeTeam: "Egypt",
    homeBadge: "/badges/egypt.png",
    awayTeam: "Algeria",
    awayBadge: "/badges/algeria.png",
    homeScore: 0,
    awayScore: 0,
    minute: null,
    status: "not_started",
    stadium: "Stade de Casablanca",
    city: "Casablanca",
    kickOff: "2025-07-13T19:00:00Z",
  },
  {
    id: "afcon-2025-g4-2",
    tournament: "AFCON_2025",
    group: "Group D",
    stage: "Group",
    homeTeam: "Tunisia",
    homeBadge: "/badges/tunisia.png",
    awayTeam: "South Africa",
    awayBadge: "/badges/south-africa.png",
    homeScore: 2,
    awayScore: 0,
    minute: 90,
    status: "finished",
    stadium: "Stade de Marrakech",
    city: "Marrakesh",
    kickOff: "2025-07-13T16:00:00Z",
  },

  // KNOCKOUTS (EXAMPLE)
  {
    id: "afcon-2025-qf-1",
    tournament: "AFCON_2025",
    group: "Quarter Finals",
    stage: "Quarter Final",
    homeTeam: "Morocco",
    homeBadge: "/badges/morocco.png",
    awayTeam: "Senegal",
    awayBadge: "/badges/senegal.png",
    homeScore: null,
    awayScore: null,
    minute: null,
    status: "not_started",
    stadium: "Mohammed V Stadium",
    city: "Casablanca",
    kickOff: "2025-07-20T19:00:00Z",
  },
  {
    id: "afcon-2025-qf-2",
    tournament: "AFCON_2025",
    group: "Quarter Finals",
    stage: "Quarter Final",
    homeTeam: "Nigeria",
    homeBadge: "/badges/nigeria.png",
    awayTeam: "Egypt",
    awayBadge: "/badges/egypt.png",
    homeScore: null,
    awayScore: null,
    minute: null,
    status: "not_started",
    stadium: "Stade de Rabat",
    city: "Rabat",
    kickOff: "2025-07-20T16:00:00Z",
  },
];

// ---- SIMPLE HELPERS (so App.jsx stays clean) ----

export const getAllMatches = (): Match[] => matches;

export const getLiveMatches = (): Match[] =>
  matches.filter((m) => m.status === "live");

export const getFixtures = (): Match[] =>
  matches.filter((m) => m.status === "not_started");

// Max 2 featured if 6+ total, else 1 – only from live games
export const getFeaturedMatches = (): Match[] => {
  const live = getLiveMatches();
  const total = matches.length;

  if (!live.length) return [];
  const maxFeatured = total >= 6 ? 2 : 1;

  return live.slice(0, maxFeatured);
};
