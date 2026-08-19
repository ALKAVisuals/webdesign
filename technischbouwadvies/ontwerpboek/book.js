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
  <path d="M318 111q23-19 53-4" class="thin"/>
</svg>`;

const svgPlan = `
<svg class="plan-svg" viewBox="0 0 420 310" role="img" aria-label="Schematische technische plattegrond">
  <rect x="54" y="39" width="301" height="220"/>
  <path d="M54 130h301M170 39v91M255 39v91M120 130v129M260 130v129"/>
  <path class="accent" d="M260 166h95v93h-95zM275 188h65v71"/>
  <path d="M43 39v220M37 39h12M37 259h12M54 278h301M54 272v12M355 272v12" class="thin"/>
  <path d="M170 130a35 35 0 0 1 35 35M120 188a28 28 0 0 0-28 28" opacity=".72"/>
  <text x="164" y="298" font-size="9" fill="#66625d" stroke="none">7.200 mm</text>
  <text x="18" y="160" font-size="9" fill="#66625d" stroke="none" transform="rotate(-90 18 160)">5.400 mm</text>
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
  <line x1="304" y1="273" x2="379" y2="273" class="thin"/><line x1="304" y1="267" x2="304" y2="279" class="thin"/><line x1="379" y1="267" x2="379" y2="279" class="thin"/>
  <text x="304" y="290" font-size="8" fill="#6d675e" stroke="none">4.800 mm</text>
</svg>`;

const svgSection = `
<svg class="section-svg" viewBox="0 0 420 310" role="img" aria-label="Schematische bouwkundige doorsnede">
  <path d="M61 246V123L175 61l114 62v123M289 246v-79h81v79"/>
  <path d="M61 123l114 61 114-61M175 61v185"/>
  <path class="accent" d="M289 167h81v79M289 167l38-27 43 27"/>
  <path d="M45 246h341M42 260h347" class="thin"/>
  <path d="M86 246V193h58v53M210 246v-53h48v53"/>
  <line x1="386" y1="61" x2="386" y2="246" class="thin"/><line x1="380" y1="61" x2="392" y2="61" class="thin"/><line x1="380" y1="246" x2="392" y2="246" class="thin"/>
  <text x="399" y="158" font-size="8" fill="#6d675e" stroke="none" transform="rotate(-90 399 158)">ca. 5.600 mm</text>
</svg>`;

const svgDetail = `
<svg class="detail-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch bouwdetail van gevel en dak">
  <path d="M104 34v216h56V74h116V34z"/>
  <path d="M117 34v216M132 34v216M147 34v216" class="thin"/>
  <path class="accent" d="M160 74h20v176h-20M180 88h21v162h-21"/>
  <path d="M201 88h75M201 105h75M201 122h75" class="thin"/>
  <line x1="286" y1="53" x2="367" y2="53" class="thin"/><line x1="286" y1="95" x2="367" y2="95" class="thin"/><line x1="286" y1="137" x2="367" y2="137" class="thin"/>
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
  <line x1="88" y1="132" x2="28" y2="101" class="thin"/>
</svg>`;

const pages = [
  {
    title: 'Referentie & briefing',
    copy: 'Bestaande situatie, wensen en ontwerpambitie worden samengebracht voordat er wordt gemodelleerd.',
    visual: `<div class="briefing-grid"><div class="photo-placeholder"></div><div class="note-card"><strong>Projectwensen</strong>• meer daglicht<br>• sterke tuinrelatie<br>• rustig gevelbeeld</div><div class="note-card"><strong>Materiaalrichting</strong><div class="swatches"><i></i><i></i><i></i></div></div><div class="photo-placeholder"></div></div>`
  },
  { title: 'Tutorial & basismodel', copy: 'De tutorialfase wordt gebruikt om levels, wanden, openingen en modelopbouw stap voor stap te begrijpen.', visual: `<div class="visual-paper"><span class="sheet-title">TD VISION U · LEERFASE</span>${svgWireframe}<span class="visual-caption">Van oefening naar eigen model</span></div>` },
  { title: 'Eerste ontwerpschets', copy: 'De eerste eigen ontwerpbeslissingen worden snel vastgelegd voordat alles technisch wordt uitgewerkt.', visual: `<div class="visual-paper">${svgSketch}<span class="sketch-note one">meer licht<br>+ rustige lijn</span><span class="sketch-note two">open relatie<br>met tuin ↗</span><span class="visual-caption">Concept · niet maatvast</span></div>` },
  { title: 'Varianten vergelijken', copy: 'Meerdere volumes maken zichtbaar welke richting ruimtelijk en technisch het beste aansluit.', visual: `<div class="variant-grid"><div class="variant-card">${svgMassing}<strong>VARIANT A</strong></div><div class="variant-card selected">${svgMassing}<strong>VARIANT B</strong></div><div class="variant-card">${svgMassing}<strong>VARIANT C</strong></div></div>` },
  { title: 'Gekozen ontwerp', copy: 'De voorkeursvariant wordt verfijnd in verhouding, raamopeningen en aansluiting op de bestaande woning.', visual: `<div class="visual-paper"><span class="sheet-title">GEVELSTUDIE · CONCEPT</span>${svgElevation}<span class="visual-caption">Gekozen richting</span></div>` },
  { title: 'Plattegrond', copy: 'Het ontwerp wordt maatvast en controleerbaar. Functie, looplijnen en afmetingen komen samen.', visual: `<div class="visual-paper">${svgPlan}<span class="visual-caption">Plattegrond · schaalindicatie 1:100</span></div>` },
  { title: 'Gevelaanzichten', copy: 'De nieuwe situatie wordt technisch leesbaar gemaakt vanuit de relevante gevelrichtingen.', visual: `<div class="visual-paper"><span class="sheet-title">ACHTERGEVEL · NIEUW</span>${svgElevation}<span class="visual-caption">Gevelaanzicht · maatvoering</span></div>` },
  { title: 'Doorsnede', copy: 'Hoogtes, vloerniveaus, dakopbouw en ruimtelijke aansluiting worden in doorsnede zichtbaar.', visual: `<div class="visual-paper"><span class="sheet-title">DOORSNEDE A-A</span>${svgSection}<span class="visual-caption">Doorsnede · hoogtecontrole</span></div>` },
  { title: 'Bouwdetail', copy: 'Kritische aansluitingen worden op kleinere schaal uitgewerkt voor technische duidelijkheid.', visual: `<div class="visual-paper"><span class="sheet-title">DETAIL D1 · 1:10</span>${svgDetail}<span class="visual-caption">Aansluiting gevel / dak</span></div>` },
  { title: 'Materiaalkeuzes', copy: 'Materiaal en kleur worden gekoppeld aan de technische opbouw en de gewenste architectonische uitstraling.', visual: `<div class="briefing-grid"><div class="note-card"><strong>Gevel</strong>licht metselwerk<div class="swatches"><i></i><i></i><i></i></div></div><div class="note-card"><strong>Kozijnen</strong>donker aluminium<br><br><strong>Dak</strong>rustige donkere afwerking</div><div class="photo-placeholder"></div><div class="note-card"><strong>Doel</strong>modern, technisch logisch en rustig in beeld</div></div>` },
  { title: 'Exterieurmodel', copy: 'Het technische model wordt opgeschoond en voorbereid op materialen, omgeving, camera en verlichting.', visual: `<div class="visual-paper">${svgWireframe}<span class="visual-caption">Render-ready model</span></div>` },
  { title: 'Exterieur render', copy: 'Het eindontwerp wordt gepresenteerd als overtuigende buitenvisualisatie met materiaal, licht en context.', visual: `<div class="render-scene"><span class="render-badge">EXTERIEUR · CONCEPT RENDER</span><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>` },
  { title: 'Interieur render', copy: 'Binnenruimte, zichtlijnen en daglicht worden zichtbaar gemaakt vanuit dezelfde ontwerpkeuzes.', visual: `<div class="interior-scene"><span class="render-badge">INTERIEUR · CONCEPT RENDER</span><div class="interior-window"><i></i><i></i><i></i></div><div class="table"></div><div class="chair c1"></div><div class="chair c2"></div><div class="chair c3"></div><div class="pendant p1"></div><div class="pendant p2"></div></div>` },
  { title: 'Eindresultaat', copy: 'Het verhaal eindigt met één samenhangende presentatie: van leerstap naar een technisch onderbouwd en visueel uitgewerkt ontwerp.', visual: `<div class="render-scene"><span class="render-badge">EINDPRESENTATIE · PRAKTIJKPROJECT</span><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>` }
];

const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const nextButton = document.getElementById('nextPage');
const prevButton = document.getElementById('prevPage');
const dotsHost = document.getElementById('pageDots');
const autoplayToggle = document.getElementById('autoplayToggle');
const autoplayText = document.getElementById('autoplayText');
const pageTurn = document.getElementById('pageTurn');
const book = document.getElementById('book');
const startBook = document.getElementById('startBook');
const currentChapter = document.getElementById('currentChapter');
const metaCount = document.getElementById('metaCount');
const metaProgressBar = document.getElementById('metaProgressBar');

let spread = 0;
let autoplay = true;
let timer = null;
let pointerStartX = null;
let pointerStartY = null;
const spreadCount = Math.ceil(pages.length / 2);
const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function pageTemplate(page, index) {
  if (!page) return `<div class="page-heading"><span class="step-number">—</span><h2>EINDE</h2></div><p class="page-copy">Dit is het einde van het prototype.</p>`;
  return `<div class="page-heading"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><h2>${page.title.toUpperCase()}</h2></div><p class="page-copy">${page.copy}</p><div class="visual">${page.visual}</div>`;
}

function visiblePrimaryIndex() {
  const leftIndex = spread * 2;
  return isMobile() ? Math.min(leftIndex + 1, pages.length - 1) : leftIndex;
}

function updateMeta() {
  const index = visiblePrimaryIndex();
  const page = pages[index];
  currentChapter.textContent = `${String(index + 1).padStart(2, '0')} · ${page.title}`;
  metaCount.textContent = `${index + 1} / ${pages.length}`;
  metaProgressBar.style.width = `${((index + 1) / pages.length) * 100}%`;
}

function renderSpread() {
  const leftIndex = spread * 2;
  const rightIndex = leftIndex + 1;
  leftPage.innerHTML = pageTemplate(pages[leftIndex], leftIndex);
  rightPage.innerHTML = pageTemplate(pages[rightIndex], rightIndex);
  leftPage.dataset.page = String(leftIndex + 1).padStart(2, '0');
  rightPage.dataset.page = pages[rightIndex] ? String(rightIndex + 1).padStart(2, '0') : '—';

  [...dotsHost.children].forEach((dot, index) => {
    const active = index === spread;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
  });
  updateMeta();
}

function animate(direction) {
  pageTurn.classList.remove('turning-next', 'turning-prev');
  void pageTurn.offsetWidth;
  pageTurn.classList.add(direction === 1 ? 'turning-next' : 'turning-prev');
}

function goToSpread(nextSpread, direction = 1, userInitiated = false) {
  const normalized = (nextSpread + spreadCount) % spreadCount;
  if (normalized === spread) return;
  animate(direction);
  window.setTimeout(() => {
    spread = normalized;
    renderSpread();
  }, prefersReducedMotion() ? 0 : 405);
  if (userInitiated) restartAutoplay();
}

function next(userInitiated = false) { goToSpread(spread + 1, 1, userInitiated); }
function previous(userInitiated = false) { goToSpread(spread - 1, -1, userInitiated); }

function restartAutoplay() {
  window.clearInterval(timer);
  if (autoplay) timer = window.setInterval(() => next(false), 5000);
}

function setAutoplay(value) {
  autoplay = value;
  autoplayToggle.setAttribute('aria-pressed', String(value));
  autoplayText.textContent = value ? 'Autoplay aan' : 'Autoplay uit';
  autoplayToggle.querySelector('.play-icon').textContent = value ? '▶' : 'Ⅱ';
  restartAutoplay();
}

for (let i = 0; i < spreadCount; i += 1) {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'dot';
  dot.setAttribute('aria-label', `Ga naar spread ${i + 1}`);
  dot.addEventListener('click', () => goToSpread(i, i >= spread ? 1 : -1, true));
  dotsHost.appendChild(dot);
}

nextButton.addEventListener('click', () => next(true));
prevButton.addEventListener('click', () => previous(true));
autoplayToggle.addEventListener('click', () => setAutoplay(!autoplay));
startBook.addEventListener('click', () => {
  book.focus({ preventScroll: true });
  book.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
  next(true);
});

book.addEventListener('mouseenter', () => window.clearInterval(timer));
book.addEventListener('mouseleave', restartAutoplay);
book.addEventListener('focusin', () => window.clearInterval(timer));
book.addEventListener('focusout', restartAutoplay);
book.addEventListener('pointerdown', (event) => {
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});
book.addEventListener('pointerup', (event) => {
  if (pointerStartX === null || pointerStartY === null) return;
  const deltaX = event.clientX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;
  pointerStartX = null;
  pointerStartY = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaY) > Math.abs(deltaX)) return;
  if (deltaX < 0) next(true); else previous(true);
});
book.addEventListener('pointercancel', () => { pointerStartX = null; pointerStartY = null; });

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') next(true);
  if (event.key === 'ArrowLeft') previous(true);
});
window.addEventListener('resize', updateMeta);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) window.clearInterval(timer); else restartAutoplay();
});

renderSpread();
restartAutoplay();
