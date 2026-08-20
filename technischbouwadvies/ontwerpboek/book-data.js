const svgElevation = `
<svg viewBox="0 0 620 380" role="img" aria-label="Technisch gevelaanzicht van de nieuwe situatie">
  <path d="M72 286V151L239 76l164 75v135" class="section-cut"/>
  <path d="M403 286v-92h136v92" class="section-cut"/>
  <path d="M72 151l167-75 164 75M403 194l68-30 68 30"/>

  <rect x="108" y="177" width="61" height="70"/>
  <rect x="306" y="177" width="61" height="70"/>
  <rect x="205" y="209" width="67" height="77"/>
  <path d="M122 177v70M155 177v70M320 177v70M353 177v70" class="thin"/>
  <path d="M420 207h101v79M445 207v79M470 207v79M495 207v79" class="accent"/>

  <path d="M82 163h312M82 170h312M82 264h312" class="ghost"/>
  <path d="M415 198h111M415 205h111" class="ghost"/>
  <path d="M72 286h467" class="section-cut"/>
  <path d="M47 297h520" class="thin"/>

  <path d="M72 322h467M72 314v16M539 314v16" class="thin"/>
  <path d="M72 347h331M72 339v16M403 339v16" class="thin"/>
  <path d="M403 347h136M403 339v16M539 339v16" class="thin"/>
  <text x="286" y="318" font-size="9">10.200</text>
  <text x="222" y="343" font-size="8">7.400</text>
  <text x="458" y="343" font-size="8">2.800</text>

  <path d="M43 286V76M35 286h16M35 151h16M35 76h16" class="thin"/>
  <text x="27" y="192" font-size="8" transform="rotate(-90 27 192)">+ 6.300</text>
  <path d="M554 286V194M547 286h14M547 194h14" class="thin"/>
  <text x="574" y="245" font-size="8" transform="rotate(-90 574 245)">+ 2.850</text>

  <path d="M55 286h12M55 243h12M55 194h12M55 151h12" class="accent"/>
  <text x="75" y="302" font-size="7" class="accent-text">± 0.000</text>
  <text x="75" y="146" font-size="7" class="accent-text">+ 3.150</text>

  <text x="72" y="35" font-size="9" class="accent-text">GEVEL ZUID · NIEUWE SITUATIE</text>
  <text x="72" y="52" font-size="7">SCHAALINDICATIE 1:100 · MAATVOERING IN MM</text>
  <text x="416" y="185" font-size="7" class="accent-text">NIEUWE UITBOUW</text>
</svg>`;

const svgSection = `
<svg viewBox="0 0 620 380" role="img" aria-label="Technische doorsnede A-A van de nieuwe situatie">
  <path d="M82 286V153L242 78l158 75v133" class="section-cut"/>
  <path d="M400 286v-94h139v94" class="section-cut"/>
  <path d="M82 153l160 66 158-66M242 78v208"/>
  <path d="M400 192h139M400 192l66-31 73 31"/>

  <path d="M82 286h457" class="section-cut"/>
  <path d="M58 298h510" class="thin"/>
  <path d="M73 306h476" class="ghost"/>

  <path d="M112 286v-62h74v62M288 286v-62h67v62"/>
  <path d="M118 224h62M294 224h55" class="thin"/>
  <path d="M416 286v-62h105v62M451 224v62M486 224v62" class="accent"/>

  <path d="M91 157l151 62 149-62M99 164l143 59 141-59" class="ghost"/>
  <path d="M242 219h158M242 227h158" class="thin"/>
  <path d="M400 191v95M409 191v95" class="ghost"/>

  <path d="M73 286v25h-18v20h36v-20h-18M391 286v25h-18v20h36v-20h-18M530 286v25h-17v20h34v-20h-17" class="section-cut"/>
  <path d="M52 331h500" class="ghost"/>

  <path d="M45 286V78M37 286h16M37 219h16M37 153h16M37 78h16" class="thin"/>
  <text x="28" y="190" font-size="8" transform="rotate(-90 28 190)">+ 6.300</text>
  <text x="60" y="217" font-size="7" class="accent-text">+ 2.850</text>
  <text x="60" y="150" font-size="7" class="accent-text">+ 3.150</text>
  <text x="60" y="302" font-size="7" class="accent-text">± 0.000</text>

  <path d="M565 286V192M557 286h16M557 192h16" class="thin"/>
  <text x="585" y="245" font-size="8" transform="rotate(-90 585 245)">2.850</text>

  <path d="M82 348h318M82 340v16M400 340v16" class="thin"/>
  <path d="M400 348h139M400 340v16M539 340v16" class="thin"/>
  <text x="228" y="344" font-size="8">7.400</text>
  <text x="456" y="344" font-size="8">2.800</text>

  <text x="82" y="35" font-size="9" class="accent-text">DOORSNEDE A–A · NIEUWE SITUATIE</text>
  <text x="82" y="52" font-size="7">SCHAALINDICATIE 1:100 · NIVEAUS EN HOOFDMAATVOERING</text>
  <text x="414" y="183" font-size="7" class="accent-text">UITBREIDING</text>
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
