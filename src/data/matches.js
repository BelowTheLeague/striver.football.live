export const matches = [
  {
    id: "morocco-v-comoros",
    homeTeam: "Morocco",
    awayTeam: "Comoros",
    competition: "AFCON 2025",
    stage: "Group A",
    stadium: "Stade de Casablanca",
    city: "Casablanca",
    status: "upcoming",
    kickoffTime: "2025-12-21T19:00:00Z", // 7pm UK, adjust if needed
    homeScore: 0,
    awayScore: 0,
    minute: "KO",
    tvChannel: "E4",
    tvPlatforms: ["Channel 4 Streaming", "C4 Sport YouTube"],
    nationIds: ["morocco", "comoros"],
    stats: null,
    events: []
  },
  {
    id: "mali-v-zambia",
    homeTeam: "Mali",
    awayTeam: "Zambia",
    competition: "AFCON 2025",
    stage: "Group A",
    stadium: "Stade de Marrakech",
    city: "Marrakech",
    status: "upcoming",
    kickoffTime: "2025-12-22T14:00:00Z",
    homeScore: 0,
    awayScore: 0,
    minute: "KO",
    tvChannel: "4seven",
    tvPlatforms: ["Channel 4 Streaming", "C4 Sport YouTube"],
    nationIds: ["mali", "zambia"],
    stats: null,
    events: []
  },
  // keep your Senegal v Nigeria “live” example, but add tv info:
  {
    id: "senegal-v-nigeria",
    homeTeam: "Senegal",
    awayTeam: "Nigeria",
    competition: "AFCON 2025",
    stage: "Group D",
    stadium: "Stade de Dakar",
    city: "Dakar",
    status: "live",
    kickoffTime: "2025-12-23T15:00:00Z",
    homeScore: 1,
    awayScore: 1,
    minute: "63'",
    tvChannel: "4seven",
    tvPlatforms: ["Channel 4 Streaming", "C4 Sport YouTube"],
    nationIds: ["senegal", "nigeria"],
    stats: {
      possessionHome: 52,
      possessionAway: 48,
      shotsHome: 7,
      shotsAway: 6,
      shotsOnTargetHome: 4,
      shotsOnTargetAway: 3,
      cornersHome: 3,
      cornersAway: 2,
      foulsHome: 8,
      foulsAway: 10
    },
    events: [
      // (your existing events)
    ]
  },
  // ...add the rest of the AFCON schedule as you go
];
