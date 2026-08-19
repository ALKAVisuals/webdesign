import { bookConfig, pages } from './book-data.js';

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
const versionBadge = document.getElementById('prototypeVersion');
const coverEdition = document.getElementById('coverEdition');

let spread = 0;
let autoplay = true;
let timer = null;
let pointerStartX = null;
let pointerStartY = null;
const spreadCount = Math.ceil(pages.length / 2);
const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function assetVisual(page) {
  if (!page.asset?.src) return page.demoVisual;
  const alt = escapeHtml(page.asset.alt || page.title);
  const fit = page.asset.fit === 'contain' ? 'contain' : 'cover';
  return `<div class="visual-paper" data-real-asset="true"><img src="${escapeHtml(page.asset.src)}" alt="${alt}" loading="lazy" decoding="async" style="width:100%;height:100%;display:block;object-fit:${fit};object-position:center;"><span class="visual-caption">Echt projectbeeld</span></div>`;
}

function pageTemplate(page, index) {
  if (!page) {
    return `<div class="page-heading"><span class="step-number">—</span><h2>EINDE</h2></div><p class="page-copy">Dit is het einde van het prototype.</p>`;
  }
  const assetState = page.asset?.src ? 'ECHTE CONTENT' : 'DEMO';
  return `
    <div class="page-heading">
      <span class="step-number">${String(index + 1).padStart(2, '0')}</span>
      <h2>${escapeHtml(page.title.toUpperCase())}</h2>
    </div>
    <p class="page-copy">${escapeHtml(page.copy)}</p>
    <div class="visual" data-page-id="${escapeHtml(page.id)}" data-content-state="${assetState}">${assetVisual(page)}</div>`;
}

function updateMeta(activeIndex) {
  const page = pages[activeIndex] || pages[pages.length - 1];
  currentChapter.textContent = `${String(activeIndex + 1).padStart(2, '0')} · ${page.title}`;
  metaCount.textContent = `${activeIndex + 1} / ${pages.length}`;
  metaProgressBar.style.width = `${((activeIndex + 1) / pages.length) * 100}%`;
}

function renderSpread() {
  const leftIndex = spread * 2;
  const rightIndex = leftIndex + 1;
  leftPage.innerHTML = pageTemplate(pages[leftIndex], leftIndex);
  rightPage.innerHTML = pageTemplate(pages[rightIndex], rightIndex);
  leftPage.dataset.page = String(leftIndex + 1).padStart(2, '0');
  rightPage.dataset.page = pages[rightIndex] ? String(rightIndex + 1).padStart(2, '0') : '—';
  rightPage.hidden = isMobile();
  updateMeta(leftIndex);

  [...dotsHost.children].forEach((dot, index) => {
    const active = index === spread;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
  });
}

function animate(direction) {
  if (prefersReducedMotion()) return;
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
  }, prefersReducedMotion() ? 0 : 360);
  if (userInitiated) restartAutoplay();
}

function next(userInitiated = false) { goToSpread(spread + 1, 1, userInitiated); }
function previous(userInitiated = false) { goToSpread(spread - 1, -1, userInitiated); }

function restartAutoplay() {
  window.clearInterval(timer);
  if (autoplay) timer = window.setInterval(() => next(false), bookConfig.autoplayMs);
}

function setAutoplay(value) {
  autoplay = value;
  autoplayToggle.setAttribute('aria-pressed', String(value));
  autoplayText.textContent = value ? 'Autoplay aan' : 'Autoplay uit';
  autoplayToggle.querySelector('.play-icon').textContent = value ? '▶' : 'Ⅱ';
  restartAutoplay();
}

function buildDots() {
  dotsHost.replaceChildren();
  for (let i = 0; i < spreadCount; i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Ga naar spread ${i + 1}`);
    dot.addEventListener('click', () => goToSpread(i, i >= spread ? 1 : -1, true));
    dotsHost.appendChild(dot);
  }
}

function applyBookConfig() {
  if (versionBadge) versionBadge.textContent = `Prototype ${bookConfig.version}`;
  if (coverEdition) coverEdition.textContent = `${bookConfig.version} · ${bookConfig.edition}`;
}

nextButton.addEventListener('click', () => next(true));
prevButton.addEventListener('click', () => previous(true));
autoplayToggle.addEventListener('click', () => setAutoplay(!autoplay));
startBook.addEventListener('click', () => {
  document.getElementById('boek').scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
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
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  if (deltaX < 0) next(true); else previous(true);
});
book.addEventListener('pointercancel', () => {
  pointerStartX = null;
  pointerStartY = null;
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') next(true);
  if (event.key === 'ArrowLeft') previous(true);
});
window.addEventListener('resize', renderSpread);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) window.clearInterval(timer); else restartAutoplay();
});

applyBookConfig();
buildDots();
renderSpread();
restartAutoplay();
