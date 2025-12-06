// types/match.ts
export type MatchStatus = "not_started" | "live" | "finished";

export interface Match {
  id: string;
  tournament: "AFCON_2025";
  group: string; // e.g. "Group A"
  stage: "Group" | "Quarter Final" | "Semi Final" | "Final";

  homeTeam: string;
  homeBadge: string; // URL
  awayTeam: string;
  awayBadge: string; // URL

  homeScore: number | null;
  awayScore: number | null;

  minute: number | null; // 0-120, null if not started / finished
  status: MatchStatus;

  stadium: string;
  city: string;

  kickOff: string; // ISO string
}
