export const pipelineConfig = {
  version: 'PHASE-M',
  edition: 'A+B VISUAL QA'
};

const prodAsset = (path) => `https://raw.githubusercontent.com/ALKAVisuals/alkabouwadvies/main/images/website-2026/${path}`;

export const assetManifest = {
  '01-projectintro-visual': {
    type: 'full',
    src: prodAsset('diensten/aanbouw-ontwerp-volledig-hout.webp'),
    alt: 'Architectonische visualisatie van een eigentijdse woningaanbouw met houten materialisering',
    fit: 'cover',
    label: 'Projectintro'
  },
  '02-varianten-visual': {
    type: 'gallery',
    columns: 3,
    label: 'Ontwerpvarianten',
    items: [
      {
        src: prodAsset('diensten/aanbouw-ontwerp-antraciet.webp'),
        alt: 'Ontwerpvariant met een rustige antraciete materialisering',
        fit: 'cover',
        label: 'Variant A'
      },
      {
        src: prodAsset('diensten/aanbouw-ontwerp-houten-lamellen.webp'),
        alt: 'Ontwerpvariant met houten lamellen',
        fit: 'cover',
        label: 'Variant B'
      },
      {
        src: prodAsset('diensten/aanbouw-ontwerp-metselwerk-hout.webp'),
        alt: 'Ontwerpvariant met metselwerk en houtaccenten',
        fit: 'cover',
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
  '06-interieur-visual': {
    type: 'full',
    src: prodAsset('3d-visualisatie-aanbouw-schets-naar-realisatie.webp'),
    alt: 'Architectonische 3D-visualisatie van een woningaanbouw',
    fit: 'cover',
    label: 'Ruimtelijke visualisatie'
  },
  '07-exterieur-visual': {
    type: 'full',
    src: prodAsset('projecten/illustratieve-case-aanbouw-rijwoning.webp'),
    alt: 'Architectonische exterieurvisualisatie van een woning met aanbouw',
    fit: 'cover',
    label: 'Exterieur impressie'
  },
  '08-resultaat-visual': {
    type: 'full',
    src: prodAsset('homepage-hero-ontwerp-naar-realisatie.webp'),
    alt: 'Van technische ontwerpschets naar een overtuigende architectonische eindvisualisatie',
    fit: 'cover',
    label: 'Projectresultaat'
  }
};
