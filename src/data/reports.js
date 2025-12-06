// src/data/reports.js

// Simple placeholder match reports – you can expand these.
export const reports = [
  {
    id: "mor-nig-2025-01-11",
    matchId: "mor-nig-2025-01-11",
    title: "Morocco edge Nigeria in tight AFCON opener",
    date: "2025-01-11T21:45:00Z",
    stadium: "Abidjan Stadium",
    scoreline: "Morocco 1–0 Nigeria",
    group: "Group A",
    // 1920x1080-style hero image (add this asset in /public/images)
    heroImage: "/images/reports/morocco-nigeria-1920x1080.jpg",
    summary:
      "A disciplined Morocco side took three crucial points against Nigeria in the opening game of Group A.",
    body: `
Morocco started their AFCON 2025 campaign with a statement win over Nigeria.

A high tempo first half saw Morocco dominate long spells of possession, with the breakthrough coming shortly before half-time. Nigeria pushed late on but could not find a way past a stubborn back line.

The result leaves Morocco top of Group A and Nigeria with work to do in their remaining group fixtures.
    `,
  },
  {
    id: "civ-gha-2025-01-11",
    matchId: "civ-gha-2025-01-11",
    title: "Four-goal thriller as Ivory Coast draw with Ghana",
    date: "2025-01-11T19:30:00Z",
    stadium: "Yamoussoukro Stadium",
    scoreline: "Ivory Coast 2–2 Ghana",
    group: "Group A",
    heroImage: "/images/reports/ivorycoast-ghana-1920x1080.jpg",
    summary:
      "Ivory Coast and Ghana shared the points in a classic AFCON group-stage battle.",
    body: `
Two AFCON heavyweights went toe-to-toe and neither side blinked.

Ivory Coast took the lead twice, but Ghana showed serious character to respond on both occasions. Chances came and went at both ends in the final ten minutes.

On another night either team could have nicked it, but a draw felt a fair result.
    `,
  },
];

export const getLatestReports = (limit = 3) =>
  reports
    .slice()
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, limit);

export const getAllReports = () =>
  reports
    .slice()
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

export const getReportById = (id) =>
  reports.find((r) => r.id === id);
