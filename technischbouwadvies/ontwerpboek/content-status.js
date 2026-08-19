// V0.8 — feitelijke contentstatus per hoofdstuk.
// Alleen echte, beoordeelde projectcontent mag later de status 'definitief' krijgen.

export const statusDefinitions = {
  demo: {
    key: 'demo',
    label: 'DEMO',
    description: 'Tijdelijke voorbeeldinhoud'
  },
  progress: {
    key: 'progress',
    label: 'IN UITWERKING',
    description: 'Echte content of koppeling wordt voorbereid'
  },
  final: {
    key: 'final',
    label: 'DEFINITIEF',
    description: 'Definitieve projectcontent geplaatst'
  }
};

export const contentStatus = {
  '01-referentie-briefing': 'demo',
  '02-tutorial-basismodel': 'demo',
  '03-eerste-ontwerpschets': 'demo',
  '04-varianten': 'progress',
  '05-gekozen-ontwerp': 'demo',
  '06-plattegrond': 'progress',
  '07-gevelaanzichten': 'demo',
  '08-doorsnede': 'demo',
  '09-bouwdetail': 'demo',
  '10-materiaalkeuzes': 'demo',
  '11-exterieurmodel': 'demo',
  '12-exterieur-render': 'progress',
  '13-interieur-render': 'demo',
  '14-eindresultaat': 'demo'
};

export function getContentStatus(pageId) {
  const key = contentStatus[pageId] || 'demo';
  return statusDefinitions[key] || statusDefinitions.demo;
}

export function getStatusSummary(pages) {
  const summary = { demo: 0, progress: 0, final: 0, total: pages.length };
  pages.forEach((page) => {
    const status = getContentStatus(page.id).key;
    summary[status] += 1;
  });
  return summary;
}
