// Articles: previews, reports and features.
// Tag with matchId + nationId / nationIds for filtering.

export const articles = [
  {
    id: "senegal-nigeria-report",
    title: "Senegal battle back to hold Nigeria in AFCON thriller",
    summary:
      "Senegal came from behind to earn a point against Nigeria as Sadio Mané’s penalty cancelled out Victor Osimhen’s early header.",
    body: `
Senegal and Nigeria shared the points in a high tempo AFCON Group D clash in Dakar.

Nigeria started on the front foot and took an early lead when Victor Osimhen rose highest to nod home a pinpoint cross from the right.

Senegal grew into the game either side of the break and finally levelled from the spot after Sadio Mané was tripped inside the area. The forward sent the keeper the wrong way to lift the roof off the Stade de Dakar.

Both sides pushed for a late winner but a mixture of tired legs and smart goalkeeping kept the score locked at 1–1.

The draw leaves Group D wide open heading into the final round of fixtures, with Nigeria set to face Egypt and Senegal meeting Tunisia in what already feel like knockout matches.
    `,
    matchId: "senegal-v-nigeria",
    nationIds: ["senegal", "nigeria"],
    publishedAt: "2025-12-23T21:30:00Z"
  },
  {
    id: "afcon-hosts-morocco-preview",
    title: "Hosts Morocco look to make a statement in Group A opener",
    summary:
      "Morocco open their AFCON campaign in front of a packed Casablanca crowd and a nation expecting a deep run.",
    body: `
All eyes will be on Casablanca as hosts Morocco begin their AFCON journey.

Walid Regragui’s side arrive with huge expectation after an impressive World Cup run and a strong qualifying campaign. With a mix of European based stars and domestic talents, the Atlas Lions believe this is their moment on home soil.

Egypt, Comoros and Mali provide very different tests, but Morocco know a strong start is vital if they are to control Group A from the outset.

With colour, noise and pressure in equal measure, this feels like a statement night for whoever handles the occasion best.
    `,
    matchId: "morocco-v-comoros",
    nationId: "morocco",
    publishedAt: "2025-12-20T10:00:00Z"
  },
  {
    id: "super-eagles-focus",
    title: "Where Nigeria’s goals will come from at AFCON 2025",
    summary:
      "Nigeria arrive with serious firepower. We look at the forwards expected to carry the goal threat.",
    body: `
Nigeria rarely arrive at a major tournament short on attacking options and AFCON 2025 is no different.

Victor Osimhen leads the line after another big season in Europe, but support will come from wide areas and midfield runners crashing the box late.

If the Super Eagles find the right balance between freedom and structure in the final third, they will fancy themselves against anyone in the knockouts.
    `,
    nationId: "nigeria",
    publishedAt: "2025-12-18T12:00:00Z"
  }
];
