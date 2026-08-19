export const pipelineConfig = {
  version: 'V0.8',
  edition: 'CONTENT STATUS SYSTEM'
};

export const assetManifest = {
  '04-varianten': {
    type: 'gallery',
    columns: 3,
    label: 'Ontwerpvarianten',
    items: [
      {
        src: 'assets/project/04-variant-a.svg',
        alt: 'Ontwerpvariant A, compacte uitbouw',
        fit: 'contain',
        label: 'Variant A · compact'
      },
      {
        src: 'assets/project/04-variant-b.svg',
        alt: 'Ontwerpvariant B, gekozen uitbouw',
        fit: 'contain',
        label: 'Variant B · gekozen'
      },
      {
        src: 'assets/project/04-variant-c.svg',
        alt: 'Ontwerpvariant C, maximale uitbouw',
        fit: 'contain',
        label: 'Variant C · maximaal'
      }
    ]
  },
  '06-plattegrond': {
    type: 'single',
    src: 'assets/project/06-plattegrond.svg',
    alt: 'Testplattegrond voor de contentpijplijn van Technisch Bouwadvies',
    fit: 'contain',
    label: 'Technische tekening · plattegrond'
  },
  '12-exterieur-render': {
    type: 'full',
    src: 'assets/project/12-exterieur-render.svg',
    alt: 'Tijdelijke exterieurrender voor de full-page contenttest',
    fit: 'cover',
    label: 'Exterieur render · full page'
  }
};
