export const pipelineConfig = {
  version: 'APPROVED',
  edition: 'A+B VISUAL SYSTEM'
};

export const assetManifest = {
  '01-projectintro-visual': {
    type: 'full',
    src: 'assets/project/12-exterieur-render.svg',
    alt: 'Architectonische projectvisualisatie als introductie van het ontwerpverhaal',
    fit: 'cover',
    label: 'Projectintro'
  },
  '02-varianten-visual': {
    type: 'gallery',
    columns: 3,
    label: 'Ontwerpvarianten',
    items: [
      {
        src: 'assets/project/04-variant-a.svg',
        alt: 'Ontwerpvariant A',
        fit: 'contain',
        label: 'Variant A'
      },
      {
        src: 'assets/project/04-variant-b.svg',
        alt: 'Ontwerpvariant B',
        fit: 'contain',
        label: 'Variant B'
      },
      {
        src: 'assets/project/04-variant-c.svg',
        alt: 'Ontwerpvariant C',
        fit: 'contain',
        label: 'Variant C'
      }
    ]
  },
  '03-plattegrond-visual': {
    type: 'single',
    src: 'assets/project/06-plattegrond.svg',
    alt: 'Technische plattegrond van het ontwerp',
    fit: 'contain',
    label: 'Plattegrond'
  },
  '07-exterieur-visual': {
    type: 'full',
    src: 'assets/project/12-exterieur-render.svg',
    alt: 'Exterieurvisualisatie van het ontwerp',
    fit: 'cover',
    label: 'Exterieur impressie'
  },
  '08-resultaat-visual': {
    type: 'full',
    src: 'assets/project/12-exterieur-render.svg',
    alt: 'Eindvisualisatie van het uitgewerkte ontwerp',
    fit: 'cover',
    label: 'Projectresultaat'
  }
};
