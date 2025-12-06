// lib/matchSelectors.ts
import { matches } from "@/data/matches";

export type Match = (typeof matches)[number];

export function getAllMatches(): Match[] {
  return matches;
}

export function getLiveMatches(): Match[] {
  return matches.filter((m) => m.status === "live");
}

export function getFixtures(): Match[] {
  return matches.filter((m) => m.status === "not_started");
}

// Max 2 featured if 6+ total, else 1 (and only from live games)
export function getFeaturedMatches(): Match[] {
  const live = getLiveMatches();
  const total = matches.length;

  if (!live.length) return [];

  const maxFeatured = total >= 6 ? 2 : 1;
  return live.slice(0, maxFeatured);
}
