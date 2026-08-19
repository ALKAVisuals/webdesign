const svgWireframe = `
<svg class="wireframe-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch basismodel in draadmodelweergave">
  <path d="M72 255V115L181 54l111 62v139M72 115l110 63 110-62M182 178v111M292 255h74V152l-74-36M292 179l74-27M366 152l-46-42"/>
  <path d="M91 122V242M110 133v109M129 143v99M148 154v88M201 165v91M220 154v102M239 144v112M258 133v123M277 123v133" opacity=".38"/>
  <path class="accent" d="M292 179h74v76h-74zM304 191h22v64M337 191h18v64"/>
  <line x1="40" y1="255" x2="390" y2="255"/><line x1="40" y1="273" x2="390" y2="273" opacity=".35"/>
</svg>`;

const svgSketch = `
<svg class="sketch-svg" viewBox="0 0 420 310" role="img" aria-label="Conceptschets van een woninguitbouw">
  <path d="M35 256L50 119 170 57l111 65-4 133z" opacity=".48"/>
  <path d="M275 255v-97l115 17v80z" class="accent"/>
  <path d="M287 171v82M318 175v78M349 180v73M380 183v70" class="accent" opacity=".7"/>
  <path d="M275 158l58-40 58 57M303 143l30-25 30 35" opacity=".7"/>
  <line x1="28" y1="261" x2="400" y2="261"/>
</svg>`;

const svgPlan = `
<svg class="plan-svg" viewBox="0 0 420 310" role="img" aria-label="Schematische technische plattegrond">
  <rect x="55" y="40" width="300" height="220"/>
  <path d="M55 130h300M170 40v90M255 40v90M120 130v130M260 130v130"/>
  <path class="accent" d="M260 166h95v94h-95zM275 188h65v72"/>
  <path d="M44 40v220M38 40h12M38 260h12M55 277h300M55 271v12M355 271v12" opacity=".65"/>
  <path d="M170 130a35 35 0 0 1 35 35M120 188a28 28 0 0 0-28 28" opacity=".7"/>
  <text x="169" y="297" font-size="11" fill="#565650" stroke="none">7.200 mm</text>
  <text x="18" y="160" font-size="11" fill="#565650" stroke="none" transform="rotate(-90 18 160)">5.400 mm</text>
</svg>`;

const svgElevation = `
<svg class="elevation-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch gevelaanzicht">
  <path d="M55 250V126L180 62l125 64v124z"/>
  <path d="M305 250v-82h74v82z"/>
  <rect x="85" y="150" width="44" height="58"/><rect x="211" y="150" width="44" height="58"/>
  <rect x="145" y="182" width="51" height="68"/>
  <path d="M316 182h52v68h-52zM333 182v68M350 182v68"/>
  <line x1="35" y1="250" x2="392" y2="250"/>
  <line x1="305" y1="273" x2="379" y2="273"/><line x1="305" y1="267" x2="305" y2="279"/><line x1="379" y1="267" x2="379" y2="279"/>
</svg>`;

const svgDetail = `
<svg class="detail-svg" viewBox="0 0 420 310" role="img" aria-label="Schematisch bouwdetail van gevel en dak">
  <path d="M110 35v215h54V75h110v-40z"/>
  <path d="M121 35v215M136 35v215M151 35v215" opacity=".5"/>
  <path class="accent" d="M164 75h20v175h-20M184 88h20v162h-20"/>
  <path d="M204 88h70M204 105h70M204 122h70" opacity=".55"/>
  <line x1="286" y1="54" x2="362" y2="54"/><line x1="286" y1="96" x2="362" y2="96"/><line x1="286" y1="138" x2="362" y2="138"/>
  <text x="292" y="48" font-size="10" fill="#555" stroke="none">dakopbouw</text>
  <text x="292" y="90" font-size="10" fill="#555" stroke="none">isolatie</text>
  <text x="292" y="132" font-size="10" fill="#555" stroke="none">gevelafwerking</text>
</svg>`;

const pages = [
  {
    title: 'Referentie & briefing',
    copy: 'We verzamelen de bestaande situatie, projectwensen en visuele richting.',
    visual: `<div class="briefing-grid"><div class="photo-placeholder"></div><div class="note-card"><strong>Wensen</strong>• meer daglicht<br>• verbinding met tuin<br>• heldere gevel</div><div class="note-card"><strong>Referenties</strong><div class="swatches"><i></i><i></i><i></i></div></div><div class="photo-placeholder"></div></div>`
  },
  { title: 'Tutorial & basismodel', copy: 'De TD Vision U-stappen worden gebruikt om de software en modelopbouw te begrijpen.', visual: `<div class="visual-paper">${svgWireframe}</div>` },
  { title: 'Eerste ontwerpschets', copy: 'De kennis uit de tutorial wordt vertaald naar een eerste eigen ontwerpidee.', visual: `<div class="visual-paper">${svgSketch}<span class="sketch-note one">meer licht<br>+ strakke lijn</span><span class="sketch-note two">verbinding<br>met tuin ↗</span></div>` },
  { title: 'Ontwerpontwikkeling', copy: 'Verhoudingen, openingen en de relatie tussen bestaand en nieuw worden verfijnd.', visual: `<div class="visual-paper">${svgElevation}</div>` },
  { title: 'Plattegrond', copy: 'Het ontwerp wordt maatvast en controleerbaar uitgewerkt.', visual: `<div class="visual-paper">${svgPlan}</div>` },
  { title: 'Gevelaanzichten', copy: 'De nieuwe situatie wordt vanuit meerdere zijden technisch leesbaar gemaakt.', visual: `<div class="visual-paper">${svgElevation}</div>` },
  { title: 'Doorsnede', copy: 'Hoogtes, vloerniveaus en ruimtelijke aansluiting worden zichtbaar.', visual: `<div class="visual-paper">${svgDetail}</div>` },
  { title: 'Bouwdetail', copy: 'Belangrijke aansluitingen worden op kleinere schaal technisch uitgewerkt.', visual: `<div class="visual-paper">${svgDetail}</div>` },
  { title: 'Materiaalkeuzes', copy: 'Materialen en kleuren worden gekoppeld aan de technische uitwerking.', visual: `<div class="briefing-grid"><div class="note-card"><strong>Gevel</strong>licht metselwerk<div class="swatches"><i></i><i></i><i></i></div></div><div class="note-card"><strong>Kozijnen</strong>donker aluminium</div><div class="photo-placeholder"></div><div class="note-card"><strong>Doel</strong>rustig, modern en uitvoerbaar</div></div>` },
  { title: 'Exterieurmodel', copy: 'Het technische model wordt voorbereid op materiaal, omgeving en licht.', visual: `<div class="visual-paper">${svgWireframe}</div>` },
  { title: 'Exterieur render', copy: 'Het eindontwerp wordt gepresenteerd als realistische buitenvisualisatie.', visual: `<div class="render-scene"><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>` },
  { title: 'Interieurmodel', copy: 'Binnenruimte, zichtlijnen en inrichting worden afgestemd op hetzelfde ontwerp.', visual: `<div class="visual-paper">${svgSketch}</div>` },
  { title: 'Interieur render', copy: 'De ruimtelijke kwaliteit wordt zichtbaar met een realistische interieurvisualisatie.', visual: `<div class="interior-scene"><div class="interior-window"><i></i><i></i><i></i></div><div class="table"></div><div class="chair c1"></div><div class="chair c2"></div><div class="chair c3"></div><div class="pendant p1"></div><div class="pendant p2"></div></div>` },
  { title: 'Eindresultaat', copy: 'Van eerste leerstap tot compleet technisch en visueel gepresenteerd ontwerp.', visual: `<div class="render-scene"><div class="render-house"><div class="render-extension"><i></i><i></i><i></i><i></i></div></div></div>` }
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

let spread = 0;
let autoplay = true;
let timer = null;
let pointerStartX = null;
const spreadCount = Math.ceil(pages.length / 2);

function pageTemplate(page, index) {
  if (!page) return `<div class="page-heading"><span class="step-number">—</span><h2>EINDE</h2></div><p class="page-copy">Dit is het einde van het prototype.</p>`;
  return `<div class="page-heading"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><h2>${page.title.toUpperCase()}</h2></div><p class="page-copy">${page.copy}</p><div class="visual">${page.visual}</div>`;
}

function renderSpread() {
  const leftIndex = spread * 2;
  const rightIndex = leftIndex + 1;
  leftPage.innerHTML = pageTemplate(pages[leftIndex], leftIndex);
  rightPage.innerHTML = pageTemplate(pages[rightIndex], rightIndex);
  leftPage.dataset.page = String(leftIndex + 1).padStart(2, '0');
  rightPage.dataset.page = pages[rightIndex] ? String(rightIndex + 1).padStart(2, '0') : '—';
  [...dotsHost.children].forEach((dot, index) => {
    dot.classList.toggle('active', index === spread);
    dot.setAttribute('aria-current', index === spread ? 'true' : 'false');
  });
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
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 360);
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
  document.getElementById('boek').scrollIntoView({ behavior: 'smooth', block: 'center' });
  next(true);
});

book.addEventListener('mouseenter', () => window.clearInterval(timer));
book.addEventListener('mouseleave', restartAutoplay);
book.addEventListener('focusin', () => window.clearInterval(timer));
book.addEventListener('focusout', restartAutoplay);
book.addEventListener('pointerdown', (event) => { pointerStartX = event.clientX; });
book.addEventListener('pointerup', (event) => {
  if (pointerStartX === null) return;
  const delta = event.clientX - pointerStartX;
  pointerStartX = null;
  if (Math.abs(delta) < 45) return;
  if (delta < 0) next(true); else previous(true);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') next(true);
  if (event.key === 'ArrowLeft') previous(true);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) window.clearInterval(timer); else restartAutoplay();
});

renderSpread();
restartAutoplay();
