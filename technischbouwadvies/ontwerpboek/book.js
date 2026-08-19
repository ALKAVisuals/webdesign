import { bookConfig, pages } from './book-data.js';
import { assetManifest, pipelineConfig } from './asset-manifest.js';

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

let currentPage = 0;
let autoplay = true;
let timer = null;
let pointerStartX = null;
let pointerStartY = null;
let mobileState = window.matchMedia('(max-width: 760px)').matches;

const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const viewCount = () => isMobile() ? pages.length : Math.ceil(pages.length / 2);

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function resolvedAsset(page) {
  return assetManifest[page.id] || page.asset || null;
}

function assetVisual(page) {
  const asset = resolvedAsset(page);
  if (!asset?.src) return page.demoVisual;

  const alt = escapeHtml(asset.alt || page.title);
  const fit = asset.fit === 'contain' ? 'contain' : 'cover';
  const label = escapeHtml(asset.label || 'Echt projectbeeld');
  return `<div class="visual-paper" data-real-asset="true">
    <img data-page-id="${escapeHtml(page.id)}" src="${escapeHtml(asset.src)}" alt="${alt}" loading="lazy" decoding="async" style="width:100%;height:100%;display:block;object-fit:${fit};object-position:center;">
    <span class="visual-caption">${label}</span>
  </div>`;
}

function pageTemplate(page, index) {
  if (!page) {
    return `<div class="page-heading"><span class="step-number">—</span><h2>EINDE</h2></div><p class="page-copy">Dit is het einde van het prototype.</p>`;
  }

  const assetState = resolvedAsset(page)?.src ? 'ECHTE CONTENT' : 'DEMO';
  return `
    <div class="page-heading">
      <span class="step-number">${String(index + 1).padStart(2, '0')}</span>
      <h2>${escapeHtml(page.title.toUpperCase())}</h2>
    </div>
    <p class="page-copy">${escapeHtml(page.copy)}</p>
    <div class="visual" data-page-id="${escapeHtml(page.id)}" data-content-state="${assetState}">${assetVisual(page)}</div>`;
}

function bindAssetFallbacks() {
  document.querySelectorAll('.visual img[data-page-id]').forEach((image) => {
    image.addEventListener('error', () => {
      const page = pages.find((item) => item.id === image.dataset.pageId);
      const visual = image.closest('.visual');
      if (!page || !visual) return;
      visual.innerHTML = page.demoVisual;
      visual.dataset.contentState = 'DEMO-FALLBACK';
    }, { once: true });
  });
}

function updateMeta(activeIndex) {
  const page = pages[activeIndex] || pages[pages.length - 1];
  currentChapter.textContent = `${String(activeIndex + 1).padStart(2, '0')} · ${page.title}`;
  metaCount.textContent = `${activeIndex + 1} / ${pages.length}`;
  metaProgressBar.style.width = `${((activeIndex + 1) / pages.length) * 100}%`;
}

function normalizedPage(pageIndex) {
  const length = pages.length;
  let normalized = ((pageIndex % length) + length) % length;
  if (!isMobile()) normalized = Math.floor(normalized / 2) * 2;
  return normalized;
}

function renderView() {
  currentPage = normalizedPage(currentPage);
  const leftIndex = currentPage;
  const rightIndex = leftIndex + 1;

  leftPage.innerHTML = pageTemplate(pages[leftIndex], leftIndex);
  rightPage.innerHTML = pageTemplate(pages[rightIndex], rightIndex);
  leftPage.dataset.page = String(leftIndex + 1).padStart(2, '0');
  rightPage.dataset.page = pages[rightIndex] ? String(rightIndex + 1).padStart(2, '0') : '—';
  rightPage.hidden = isMobile();
  updateMeta(leftIndex);
  bindAssetFallbacks();

  const activeDot = isMobile() ? leftIndex : Math.floor(leftIndex / 2);
  [...dotsHost.children].forEach((dot, index) => {
    const active = index === activeDot;
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

function goToPage(nextPageIndex, direction = 1, userInitiated = false) {
  const target = normalizedPage(nextPageIndex);
  if (target === currentPage) return;
  animate(direction);
  window.setTimeout(() => {
    currentPage = target;
    renderView();
  }, prefersReducedMotion() ? 0 : 360);
  if (userInitiated) restartAutoplay();
}

function next(userInitiated = false) {
  goToPage(currentPage + (isMobile() ? 1 : 2), 1, userInitiated);
}

function previous(userInitiated = false) {
  goToPage(currentPage - (isMobile() ? 1 : 2), -1, userInitiated);
}

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
  for (let i = 0; i < viewCount(); i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', isMobile() ? `Ga naar pagina ${i + 1}` : `Ga naar spread ${i + 1}`);
    dot.addEventListener('click', () => {
      const targetPage = isMobile() ? i : i * 2;
      goToPage(targetPage, targetPage >= currentPage ? 1 : -1, true);
    });
    dotsHost.appendChild(dot);
  }
}

function applyBookConfig() {
  const version = pipelineConfig.version || bookConfig.version;
  const edition = pipelineConfig.edition || bookConfig.edition;
  if (versionBadge) versionBadge.textContent = `Prototype ${version}`;
  if (coverEdition) coverEdition.textContent = `${version} · ${edition}`;
}

function handleResponsiveChange() {
  const nowMobile = isMobile();
  if (nowMobile === mobileState) return;
  mobileState = nowMobile;
  buildDots();
  renderView();
  restartAutoplay();
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
window.addEventListener('resize', handleResponsiveChange);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) window.clearInterval(timer); else restartAutoplay();
});

applyBookConfig();
buildDots();
renderView();
restartAutoplay();
