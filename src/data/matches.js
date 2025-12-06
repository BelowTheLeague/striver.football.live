export const matches = [ /* ...AFCON fixtures... */ ];

export const getAllMatches = () => matches;
export const getLiveMatches = () => matches.filter((m) => m.status === "live");
export const getFixtures = () => matches.filter((m) => m.status === "not_started");
export const getFeaturedMatches = () => {
  const live = getLiveMatches();
  const total = matches.length;
  if (!live.length) return [];
  const maxFeatured = total >= 6 ? 2 : 1;
  return live.slice(0, maxFeatured);
};
