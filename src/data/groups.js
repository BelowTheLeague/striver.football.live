// src/data/groups.js
// Group data using national flags (w80) from flagcdn.com

export const groups = [
  {
    id: "group-a",
    name: "Group A",
    teams: [
      { name: "Morocco", flag: "https://flagcdn.com/w80/ma.png" },
      { name: "Nigeria", flag: "https://flagcdn.com/w80/ng.png" },
      { name: "Ivory Coast", flag: "https://flagcdn.com/w80/ci.png" },
      { name: "Ghana", flag: "https://flagcdn.com/w80/gh.png" },
    ],
  },
  {
    id: "group-b",
    name: "Group B",
    teams: [
      { name: "Senegal", flag: "https://flagcdn.com/w80/sn.png" },
      { name: "Tunisia", flag: "https://flagcdn.com/w80/tn.png" },
      { name: "Egypt", flag: "https://flagcdn.com/w80/eg.png" },
      { name: "Cameroon", flag: "https://flagcdn.com/w80/cm.png" },
    ],
  },
  {
    id: "group-c",
    name: "Group C",
    teams: [
      { name: "Algeria", flag: "https://flagcdn.com/w80/dz.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w80/za.png" },
      { name: "Mali", flag: "https://flagcdn.com/w80/ml.png" },
      { name: "Burkina Faso", flag: "https://flagcdn.com/w80/bf.png" },
    ],
  },
  {
    id: "group-d",
    name: "Group D",
    teams: [
      { name: "DR Congo", flag: "https://flagcdn.com/w80/cd.png" },
      { name: "Cape Verde", flag: "https://flagcdn.com/w80/cv.png" },
      {
        name: "Equatorial Guinea",
        flag: "https://flagcdn.com/w80/gq.png",
      },
      { name: "Guinea", flag: "https://flagcdn.com/w80/gn.png" },
    ],
  },
  {
    id: "group-e",
    name: "Group E",
    teams: [
      { name: "Angola", flag: "https://flagcdn.com/w80/ao.png" },
      { name: "Zambia", flag: "https://flagcdn.com/w80/zm.png" },
      { name: "Tanzania", flag: "https://flagcdn.com/w80/tz.png" },
      { name: "Namibia", flag: "https://flagcdn.com/w80/na.png" },
    ],
  },
  {
    id: "group-f",
    name: "Group F",
    teams: [
      // Reuse Cape Verde flag for "Cape Verde B"
      { name: "Cape Verde B", flag: "https://flagcdn.com/w80/cv.png" },
      { name: "Gabon", flag: "https://flagcdn.com/w80/ga.png" },
      { name: "Mozambique", flag: "https://flagcdn.com/w80/mz.png" },
      {
        name: "Central African Rep.",
        flag: "https://flagcdn.com/w80/cf.png",
      },
    ],
  },
];
