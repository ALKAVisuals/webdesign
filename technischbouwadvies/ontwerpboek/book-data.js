const svgElevation = `
<svg viewBox="0 0 520 330" role="img" aria-label="Technisch gevelaanzicht">
  <path d="M58 268V128L210 59l151 69v140z"/>
  <path d="M361 268v-90h104v90z"/>
  <rect x="90" y="157" width="58" height="66"/><rect x="250" y="157" width="58" height="66"/>
  <rect x="169" y="192" width="61" height="76"/>
  <path d="M379 192h68v76h-68zM401 192v76M425 192v76"/>
  <line x1="35" y1="268" x2="485" y2="268" class="thin"/>
  <path d="M58 292h407M58 285v14M465 285v14" class="thin"/>
  <text x="220" y="313" font-size="9" fill="#777168" stroke="none">GEVEL ZUID · NIEUWE SITUATIE</text>
</svg>`;

const svgSection = `
<svg viewBox="0 0 520 330" role="img" aria-label="Technische doorsnede">
  <path d="M70 270V132L211 64l140 68v138M351 270v-88h101v88"/>
  <path d="M70 132l141 68 140-68M211 64v206"/>
  <path d="M351 182h101v88M351 182l48-31 53 31"/>
  <path d="M49 270h422M47 285h427" class="thin"/>
  <path d="M101 270v-59h72v59M254 270v-59h60v59"/>
  <path d="M482 63v207M474 63h15M474 270h15" class="thin"/>
  <text x="497" y="185" font-size="9" fill="#777168" stroke="none" transform="rotate(-90 497 185)">+ 6.300</text>
</svg>`;

const svgDetail = `
<svg viewBox="0 0 520 360" role="img" aria-label="Bouwdetail dak en gevel">
  <path d="M126 42v265h67V92h146V42z"/>
  <path d="M141 42v265M157 42v265M175 42v265" class="thin"/>
  <path d="M193 92h24v215h-24M217 108h25v199h-25" class="accent"/>
  <path d="M242 108h97M242 128h97M242 148h97" class="thin"/>
  <path d="M105 307h251M105 319h251" class="thin"/>
  <text x="367" y="63" font-size="9" fill="#676159" stroke="none">01 · DAKBEDEKKING</text>
  <text x="367" y="105" font-size="9" fill="#676159" stroke="none">02 · ISOLATIE</text>
  <text x="367" y="147" font-size="9" fill="#676159" stroke="none">03 · GEVELAFWERKING</text>
  <text x="367" y="189" font-size="9" fill="#676159" stroke="none">04 · DAMPREMMING</text>
</svg>`;

const svgWireframe = `
<svg viewBox="0 0 520 350" role="img" aria-label="Architectonische lijntekening">
  <path d="M74 286V131L210 60l142 73v153M74 131l137 76 141-74M211 207v79"/>
  <path d="M352 286v-95l112-28v123M352 191l56-41 56 13M384 185v101M423 176v110"/>
  <path d="M101 145v126M128 160v111M156 175v96M184 190v81M239 190v87M267 176v101M296 161v116M324 146v131" class="thin"/>
  <line x1="45" y1="286" x2="482" y2="286" class="thin"/>
</svg>`;

export const bookConfig = {
  version: 'APPROVED',
  edition: 'A+B VISUAL SYSTEM',
  autoplayMs: 6000,
  projectAssetRoot: 'assets/project/'
};

export const pages = [
  {
    id: '01-projectintro-text',
    spread: '01',
    presentation: 'text',
    kicker: '01',
    title: 'PROJECT INTRO',
    copy: 'Een doordacht ontwerp begint met inzicht in de locatie, de wensen en de mogelijkheden. Hiermee ontstaat een solide basis voor een toekomstbestendig en haalbaar ontwerp.',
    footer: 'TECHNISCH BOUWADVIES'
  },
  {
    id: '01-projectintro-visual',
    spread: '01',
    presentation: 'visual',
    title: 'Projectintro',
    copy: '',
    demoVisual: `<div class="editorial-technical-page">${svgWireframe}</div>`
  },
  {
    id: '02-varianten-text',
    spread: '02',
    presentation: 'text',
    kicker: '02 — VARIANTEN',
    title: 'Ontwerpkeuzes naast elkaar.',
    copy: 'Meerdere richtingen maken verschillen in volume, verhouding en uitstraling direct leesbaar. Zo ontstaat een onderbouwde voorkeursvariant.',
    footer: 'VERGELIJKING · CONCEPTFASE'
  },
  {
    id: '02-varianten-visual',
    spread: '02',
    presentation: 'gallery',
    kicker: 'ONTWERPVARIANTEN',
    title: 'Vergelijking',
    copy: 'Drie richtingen binnen dezelfde randvoorwaarden.',
    demoVisual: `<div class="editorial-technical-page">${svgWireframe}</div>`
  },
  {
    id: '03-plattegrond-text',
    spread: '03',
    presentation: 'text',
    kicker: '03 — PLATTEGROND',
    title: 'Begane grond',
    copy: 'De plattegrond brengt functie, routing en maatvoering samen. Bestaand en nieuw blijven helder van elkaar te onderscheiden.',
    footer: 'SCHAALINDICATIE · 1:100',
    legend: [['Bestaand','licht'],['Nieuw','donker'],['Te slopen','streep']]
  },
  {
    id: '03-plattegrond-visual',
    spread: '03',
    presentation: 'technical',
    kicker: 'TECHNISCHE TEKENING',
    title: 'Plattegrond',
    copy: '',
    demoVisual: `<div class="editorial-technical-page">${svgWireframe}</div>`
  },
  {
    id: '04-gevel-visual',
    spread: '04',
    presentation: 'technical',
    kicker: '04 — GEVEL',
    title: 'Gevelaanzicht',
    copy: 'Verhoudingen, openingen en materialisering worden technisch leesbaar.',
    demoVisual: svgElevation
  },
  {
    id: '04-doorsnede-visual',
    spread: '04',
    presentation: 'technical',
    kicker: 'DOORSNEDE A–A',
    title: 'Doorsnede',
    copy: 'Niveaus, hoogtes en constructieve opbouw in één overzicht.',
    demoVisual: svgSection
  },
  {
    id: '05-bouwdetail-text',
    spread: '05',
    presentation: 'text',
    kicker: '05 — BOUWDETAIL',
    title: 'Detail dakkapel',
    copy: 'Een zorgvuldig detail maakt de aansluiting uitvoerbaar en controleerbaar. Materiaalopbouw en kritische aansluitingen krijgen alle ruimte.',
    footer: 'DETAIL · CONSTRUCTIE & AANSLUITING',
    facts: [['Schaal','1:10'],['Focus','Dak / gevel'],['Uitwerking','Technisch detail']]
  },
  {
    id: '05-bouwdetail-visual',
    spread: '05',
    presentation: 'technical',
    kicker: 'DETAIL D1',
    title: 'Aansluiting',
    copy: '',
    demoVisual: svgDetail
  },
  {
    id: '06-interieur-text',
    spread: '06',
    presentation: 'materials',
    kicker: '06 — INTERIEUR & MATERIALEN',
    title: 'Warm, rustig en helder.',
    copy: 'Materiaal, licht en zichtlijnen vertalen het technische ontwerp naar een overtuigende ruimtelijke ervaring.',
    footer: 'MATERIAALSELECTIE'
  },
  {
    id: '06-interieur-visual',
    spread: '06',
    presentation: 'visual',
    title: 'Interieur',
    copy: '',
    demoVisual: `<div class="interior-scene" role="img" aria-label="Schematische interieurvisualisatie"></div>`
  },
  {
    id: '07-exterieur-text',
    spread: '07',
    presentation: 'text',
    kicker: '07 — EXTERIEUR IMPRESSIE',
    title: 'Architectuur in context.',
    copy: 'Het ontwerp wordt zichtbaar als onderdeel van de bestaande woning en omgeving. Materiaal, licht en verhouding vormen één rustig geheel.',
    footer: 'EXTERIEUR · VISUALISATIE'
  },
  {
    id: '07-exterieur-visual',
    spread: '07',
    presentation: 'visual',
    title: 'Exterieur',
    copy: '',
    demoVisual: `<div class="editorial-technical-page">${svgWireframe}</div>`
  },
  {
    id: '08-resultaat-visual',
    spread: '08',
    presentation: 'visual',
    title: 'Resultaat',
    copy: '',
    demoVisual: `<div class="editorial-technical-page">${svgWireframe}</div>`
  },
  {
    id: '08-resultaat-cta',
    spread: '08',
    presentation: 'cta',
    kicker: '08 — RESULTAAT',
    title: 'Van concept naar een helder uitgewerkt ontwerp.',
    copy: 'Techniek en visualisatie komen samen in een presentatie die keuzes begrijpelijk maakt en het eindresultaat overtuigend laat zien.',
    footer: 'TECHNISCH BOUWADVIES'
  }
];
