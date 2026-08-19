// Kijktijd per pagina. Op desktop gebruikt een spread de langste tijd van de twee zichtbare pagina's.
export const chapterTimings = {
  '01-projectintro-text': 6200,
  '01-projectintro-visual': 6200,
  '02-varianten-text': 6800,
  '02-varianten-visual': 6800,
  '03-plattegrond-text': 6200,
  '03-plattegrond-visual': 6200,
  '04-gevel-visual': 6500,
  '04-doorsnede-visual': 6500,
  '05-bouwdetail-text': 6500,
  '05-bouwdetail-visual': 6500,
  '06-interieur-text': 7000,
  '06-interieur-visual': 7000,
  '07-exterieur-text': 7600,
  '07-exterieur-visual': 7600,
  '08-resultaat-visual': 8200,
  '08-resultaat-cta': 8200
};

export function getViewDuration({ pages, currentPage, mobile, fallbackMs = 6000 }) {
  const visiblePages = mobile ? [pages[currentPage]] : [pages[currentPage], pages[currentPage + 1]];
  const durations = visiblePages
    .filter(Boolean)
    .map((page) => Number(page.durationMs || chapterTimings[page.id] || fallbackMs))
    .filter((duration) => Number.isFinite(duration) && duration > 0);

  return durations.length ? Math.max(...durations) : fallbackMs;
}
