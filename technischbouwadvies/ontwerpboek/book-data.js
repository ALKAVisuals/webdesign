const svgWireframe = `
<svg class="wireframe-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch basismodel in draadmodelweergave">
  <path d="M64 251V112L176 51l116 63v137M64 112l113 64 115-62M177 176v78M292 251h77V151l-77-37M292 179l77-28M369 151l-47-43"/>
  <path d="M86 125V238M108 137v101M130 149v89M152 161v77M203 161v83M226 149v95M249 137v107M272 125v119" class="thin"/>
  <path class="accent" d="M292 179h77v72h-77zM305 191h22v60M339 191h18v60"/>
  <line x1="38" y1="251" x2="392" y2="251"/><line x1="38" y1="270" x2="392" y2="270" class="thin"/>
  <text x="42" y="292" font-size="9" fill="#777168" stroke="none">BASISMODEL · LESFASE</text>
</svg>`;

const svgSketch = `
<svg class="sketch-svg" viewBox="0 0 420 310" role="img" aria-label="Conceptschets van een woninguitbouw">
  <path d="M34 255L49 119 168 56l112 65-4 134z" opacity=".48"/>
  <path d="M276 255v-96l113 16v80z" class="accent"/>
  <path d="M288 171v82M319 175v78M350 180v73M380 184v69" class="accent" opacity=".68"/>
  <path d="M276 159l56-40 58 56M302 144l30-25 31 34" opacity=".68"/>
  <line x1="26" y1="261" x2="401" y2="261"/>
</svg>`;

const svgPlan = `
<svg class="plan-svg" viewBox="0 0 420 310" role="img" aria-label="Schematische technische plattegrond">
  <rect x="54" y="39" width="301" height="220"/>
  <path d="M54 130h301M170 39v91M255 39v91M120 130v129M260 130v129"/>
  <path class="accent" d="M260 166h95v93h-95zM275 188h65v71"/>
  <path d="M43 39v220M37 39h12M37 259h12M54 278h301M54 272v12M355 272v12" class="thin"/>
  <path d="M170 130a35 35 0 0 1 35 35M120 188a28 28 0 0 0-28 28" opacity=".72"/>
  <text x="164" y="298" font-size="9" fill="#66625d" stroke="none">7.200 mm</text>
  <text x="71" y="58" font-size="7" fill="#8a8378" stroke="none">BEGANE GROND · NIEUW</text>
</svg>`;

const svgElevation = `
<svg class="elevation-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch gevelaanzicht">
  <path d="M52 248V126L178 61l126 65v122z"/>
  <path d="M304 248v-81h75v81z" class="accent"/>
  <rect x="82" y="149" width="45" height="57"/><rect x="210" y="149" width="45" height="57"/>
  <rect x="144" y="181" width="51" height="67"/>
  <path d="M315 181h53v67h-53zM333 181v67M351 181v67"/>
  <line x1="33" y1="248" x2="393" y2="248"/>
  <text x="304" y="290" font-size="8" fill="#6d675e" stroke="none">4.800 mm</text>
</svg>`;

const svgSection = `
<svg class="section-svg" viewBox="0 0 420 310" role="img" aria-label="Schematische bouwkundige doorsnede">
  <path d="M61 246V123L175 61l114 62v123M289 246v-79h81v79"/>
  <path d="M61 123l114 61 114-61M175 61v185"/>
  <path class="accent" d="M289 167h81v79M289 167l38-27 43 27"/>
  <path d="M45 246h341M42 260h347" class="thin"/>
  <path d="M86 246V193h58v53M210 246v-53h48v53"/>
  <text x="399" y="158" font-size="8" fill="#6d675e" stroke="none" transform="rotate(-90 399 158)">ca. 5.600 mm</text>
</svg>`;

const svgDetail = `
<svg class="detail-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch bouwdetail van gevel en dak">
  <path d="M104 34v216h56V74h116V34z"/>
  <path d="M117 34v216M132 34v216M147 34v216" class="thin"/>
  <path class="accent" d="M160 74h20v176h-20M180 88h21v162h-21"/>
  <path d="M201 88h75M201 105h75M201 122h75" class="thin"/>
  <text x="293" y="47" font-size="8" fill="#625d56" stroke="none">dakopbouw</text>
  <text x="293" y="89" font-size="8" fill="#625d56" stroke="none">isolatie Rc 6,3</text>
  <text x="293" y="131" font-size="8" fill="#625d56" stroke="none">gevelafwerking</text>
</svg>`;

const svgMassing = `
<svg class="massing-svg" viewBox="0 0 180 210" aria-hidden="true">
  <polygon points="28,142 82,111 143,142 88,175"/>
  <polygon points="28,142 28,91 82,61 82,111"/>
  <polygon points="82,111 82,61 143,91 143,142"/>
  <polygon class="accent" points="88,175 88,132 155,116 155,158"/>
</svg>`;

export const bookConfig = {
  version: 'V0.3',
  edition: 'CONTENT SYSTEM',
  autoplayMs: 5000,
  projectAssetRoot: 'assets/project/'
};

export const pages = [
  {
    id: '01-referentie-briefing',
    title: 'Referentie & briefing',
    copy: 'Bestaande situatie, wensen en ontwerpambitie worden samengebracht voordat er wordt gemodelleerd.',
    expectedAsset: 'assets/project/01-referentie-briefing.webp',
    asset: null,
    demoVisual: `<div class="briefing-grid"><div class="photo-placeholder"></div><div class="note-card"><strong>Projectwensen</strong>• meer daglicht<br>• sterke tuinrelatie<br>• rustig gevelbeeld</div><div class="note-card"><strong>Materiaalrichting</strong><div class="swatches"><i></i><i></i><i></i></div></div><div class="photo-placeholder"></div></div>`
  },
  {
    id: '02-tutorial-basismodel', title: 'Tutorial & basismodel',
    copy: 'De tutorialfase wordt gebruikt om levels, wanden, openingen en modelopbouw stap voor stap te begrijpen.',
    expectedAsset: 'assets/project/02-tutorial-basismodel.webp', asset: null,
    demoVisual: `<div class="visual-paper"><span class="sheet-title">TD VISION U · LEERFASE</span>${svgWireframe}<span class="visual-caption">Van oefening naar eigen model</span></div>`
  },
  {
    id: '03-eerste-ontwerpschets', title: 'Eerste ontwerpschets',
    copy: 'De eerste eigen ontwerpbeslissingen worden snel vastgelegd voordat alles technisch wordt uitgewerkt.',
    expectedAsset: 'assets/project/03-eerste-ontwerpschets.webp', asset: null,
    demoVisual: `<div class="visual-paper">${svgSketch}<span class="sketch-note one">meer licht<br>+ rustige lijn</span><span class="sketch-note two">open relatie<br>met tuin ↗</span><span class="visual-caption">Concept · niet maatvast</span></div>`
  },
  {
    id: '04-varianten', title: 'Varianten vergelijken',
    copy: 'Meerdere volumes maken zichtbaar welke richting ruimtelijk en technisch het beste aansluit.',
    expectedAsset: 'assets/project/04-varianten.webp', asset: null,
    demoVisual: `<div class="variant-grid"><div class="variant-card">${svgMassing}<strong>VARIANT A</strong></div><div class="variant-card selected">${svgMassing}<strong>VARIANT B</strong></div><div class="variant-card">${svgMassing}<strong>VARIANT C</strong></div></div>`
  },
  {
    id: '05-gekozen-ontwerp', title: 'Gekozen ontwerp',
    copy: 'De voorkeursvariant wordt verfijnd in verhouding, raamopeningen en aansluiting op de bestaande woning.',
    expectedAsset: 'assets/project/05-gekozen-ontwerp.webp', asset: null,
    demoVisual: `<div class="visual-paper"><span class="sheet-title">GEVELSTUDIE · CONCEPT</span>${svgElevation}<span class="visual-caption">Gekozen richting</span></div>`
  },
  {
    id: '06-plattegrond', title: 'Plattegrond',
    copy: 'Het ontwerp wordt maatvast en controleerbaar. Functie, looplijnen en afmetingen komen samen.',
    expectedAsset: 'assets/project/06-plattegrond.webp', asset: null,
    demoVisual: `<div class="visual-paper">${svgPlan}<span class="visual-caption">Plattegrond · schaalindicatie 1:100</span></div>`
  },
  {
    id: '07-gevelaanzichten', title: 'Gevelaanzichten',
    copy: 'De nieuwe situatie wordt technisch leesbaar gemaakt vanuit de relevante gevelrichtingen.',
    expectedAsset: 'assets/project/07-gevelaanzichten.webp', asset: null,
    demoVisual: `<div class="visual-paper"><span class="sheet-title">ACHTERGEVEL · NIEUW</span>${svgElevation}<span class="visual-caption">Gevelaanzicht · maatvoering</span></div>`
  },
  {
    id: '08-doorsnede', title: 'Doorsnede',
    copy: 'Hoogtes, vloerniveaus, dakopbouw en ruimtelijke aansluiting worden in doorsnede zichtbaar.',
    expectedAsset: 'assets/project/08-doorsnede.webp', asset: null,
    demoVisual: `<div class="visual-paper"><span class="sheet-title">DOORSNEDE A-A</span>${svgSection}<span class="visual-caption">Doorsnede · hoogtecontrole</span></div>`
  },
  {
    id: '09-bouwdetail', title: 'Bouwdetail',
    copy: 'Kritische aansluitingen worden op kleinere schaal uitgewerkt voor technische duidelijkheid.',
    expectedAsset: 'assets/project/09-bouwdetail.webp', asset: null,
    demoVisual: `<div class="visual-paper"><span class="sheet-title">DETAIL D1 · 1:10</span>${svgDetail}<span class="visual-caption">Aansluiting gevel / dak</span></div>`
  },
  {
    id: '10-materiaalkeuzes', title: 'Materiaalkeuzes',
    copy: 'Materiaal en kleur worden gekoppeld aan de technische opbouw en de gewenste architectonische uitstraling.',
    expectedAsset: 'assets/project/10-materiaalkeuzes.webp', asset: null,
    demoVisual: `<div class="briefing-grid"><div class="note-card"><strong>Gevel</strong>licht metselwerk<div class="swatches"><i></i><i></i><i></i></div></div><div class="note-card"><strong>Kozijnen</strong>donker aluminium<br><br><strong>Dak</strong>rustige donkere afwerking</div><div class="photo-placeholder"></div><div class="note-card"><strong>Doel</strong>modern, technisch logisch en rustig in beeld</div></div>`
  },
  {
    id: '11-exterieurmodel', title: 'Exterieurmodel',
    copy: 'Het technische model wordt opgeschoond en voorbereid op materialen, omgeving, camera en verlichting.',
    expectedAsset: 'assets/project/11-exterieurmodel.webp', asset: null,
    demoVisual: `<div class="visual-paper">${svgWireframe}<span class="visual-caption">Render-ready model</span></div>`
  },
  {
    id: '12-exterieur-render', title: 'Exterieur render',
    copy: 'Het eindontwerp wordt gepresenteerd als overtuigende buitenvisualisatie met materiaal, licht en context.',
    expectedAsset: 'assets/project/12-exterieur-render.webp', asset: null,
    demoVisual: `<div class="render-scene"><span class="render-badge">EXTERIEUR · CONCEPT RENDER</span><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>`
  },
  {
    id: '13-interieur-render', title: 'Interieur render',
    copy: 'Binnenruimte, zichtlijnen en daglicht worden zichtbaar gemaakt vanuit dezelfde ontwerpkeuzes.',
    expectedAsset: 'assets/project/13-interieur-render.webp', asset: null,
    demoVisual: `<div class="interior-scene"><span class="render-badge">INTERIEUR · CONCEPT RENDER</span><div class="interior-window"><i></i><i></i><i></i></div><div class="table"></div><div class="chair c1"></div><div class="chair c2"></div><div class="chair c3"></div><div class="pendant p1"></div><div class="pendant p2"></div></div>`
  },
  {
    id: '14-eindresultaat', title: 'Eindresultaat',
    copy: 'Het verhaal eindigt met één samenhangende presentatie: van leerstap naar een technisch onderbouwd en visueel uitgewerkt ontwerp.',
    expectedAsset: 'assets/project/14-eindresultaat.webp', asset: null,
    demoVisual: `<div class="render-scene"><span class="render-badge">EINDPRESENTATIE · PRAKTIJKPROJECT</span><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>`
  }
];
