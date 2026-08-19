// V0.7 — kijktijd per hoofdstuk. Waarden zijn in milliseconden.
// Op desktop gebruikt een spread de langste tijd van de twee zichtbare hoofdstukken.
export const chapterTimings = {
  '01-referentie-briefing': 6200,
  '02-tutorial-basismodel': 5600,
  '03-eerste-ontwerpschets': 5600,
  '04-varianten': 6500,
  '05-gekozen-ontwerp': 5600,
  '06-plattegrond': 5800,
  '07-gevelaanzichten': 5800,
  '08-doorsnede': 5800,
  '09-bouwdetail': 6000,
  '10-materiaalkeuzes': 5600,
  '11-exterieurmodel': 5400,
  '12-exterieur-render': 7200,
  '13-interieur-render': 7200,
  '14-eindresultaat': 8000
};

export function getViewDuration({ pages, currentPage, mobile, fallbackMs = 5000 }) {
  const visiblePages = mobile ? [pages[currentPage]] : [pages[currentPage], pages[currentPage + 1]];
  const durations = visiblePages
    .filter(Boolean)
    .map((page) => Number(page.durationMs || chapterTimings[page.id] || fallbackMs))
    .filter((duration) => Number.isFinite(duration) && duration > 0);

  return durations.length ? Math.max(...durations) : fallbackMs;
}
