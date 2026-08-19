import { bookConfig, pages } from './book-data.js';
import { assetManifest } from './asset-manifest.js';
import { getViewDuration } from './book-timings.js';

const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const nextButton = document.getElementById('nextPage');
const prevButton = document.getElementById('prevPage');
const dotsHost = document.getElementById('pageDots');
const autoplayToggle = document.getElementById('autoplayToggle');
const autoplayText = document.getElementById('autoplayText');
const pageTurn = document.getElementById('pageTurn');
const book = document.getElementById('book');
const bookArea = document.getElementById('bookArea');
const bookEnd = document.getElementById('bookEnd');
const coverStart = document.getElementById('coverStart');
const restartBookButton = document.getElementById('restartBook');
const startBook = document.getElementById('startBook');
const currentChapter = document.getElementById('currentChapter');
const metaCount = document.getElementById('metaCount');
const metaProgressBar = document.getElementById('metaProgressBar');
const minimalProgress = document.getElementById('minimalProgress');

let currentPage = 0;
let autoplay = false;
let timer = null;
let autoOpenTimer = null;
let pointerStartX = null;
let pointerStartY = null;
let lifecycle = 'closed';
let mobileState = window.matchMedia('(max-width: 760px)').matches;

const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const viewCount = () => isMobile() ? pages.length : Math.ceil(pages.length / 2);
const stepSize = () => isMobile() ? 1 : 2;
const spreadCount = () => Math.ceil(pages.length / 2);
const spreadNumber = (pageIndex) => Math.min(spreadCount(), Math.floor(pageIndex / 2) + 1);

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

function assetLayout(asset) {
  if (!asset) return 'demo';
  if (asset.type === 'gallery' && Array.isArray(asset.items) && asset.items.some((item) => item?.src)) return 'gallery';
  if ((asset.type === 'single' || asset.type === 'full' || !asset.type) && asset.src) return asset.type === 'full' ? 'full' : 'single';
  return 'demo';
}

function fitValue(value) {
  return value === 'contain' ? 'contain' : 'cover';
}

function imageMarkup(page, item, className = '') {
  const alt = escapeHtml(item.alt || page.title);
  const fit = fitValue(item.fit);
  const classAttr = className ? ` class="${className}"` : '';
  return `<img${classAttr} data-page-id="${escapeHtml(page.id)}" src="${escapeHtml(item.src)}" alt="${alt}" loading="lazy" decoding="async" style="object-fit:${fit};object-position:center;">`;
}

function assetVisual(page) {
  const asset = resolvedAsset(page);
  const layout = assetLayout(asset);
  if (layout === 'demo') return page.demoVisual || '';

  if (layout === 'gallery') {
    const columns = Math.max(1, Math.min(Number(asset.columns) || asset.items.length, 4));
    const tiles = asset.items
      .filter((item) => item?.src)
      .map((item, index) => {
        const label = escapeHtml(item.label || `Beeld ${index + 1}`);
        return `<figure class="asset-tile">${imageMarkup(page, item)}<figcaption class="asset-label">${label}</figcaption></figure>`;
      })
      .join('');
    return `<div class="asset-gallery" style="--asset-columns:${columns}">${tiles}</div>`;
  }

  if (layout === 'full') {
    return `<div class="asset-full">${imageMarkup(page, asset)}</div>`;
  }

  return `<div class="asset-single">${imageMarkup(page, asset)}</div>`;
}

function factsMarkup(items = [], className = 'editorial-facts') {
  if (!Array.isArray(items) || !items.length) return '';
  return `<dl class="${className}">${items.map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd><strong>${escapeHtml(value)}</strong></dd>`).join('')}</dl>`;
}

function textPageMarkup(page) {
  return `
    <p class="editorial-kicker">${escapeHtml(page.kicker || '')}</p>
    <h2 class="editorial-title${page.presentation === 'cta' ? ' large' : ''}">${escapeHtml(page.title)}</h2>
    <span class="editorial-rule" aria-hidden="true"></span>
    <p class="editorial-copy">${escapeHtml(page.copy || '')}</p>
    ${factsMarkup(page.facts)}
    ${factsMarkup(page.legend, 'editorial-legend')}
    ${page.footer ? `<span class="editorial-footer-label">${escapeHtml(page.footer)}</span>` : ''}
  `;
}

function pageTemplate(page, index) {
  if (!page) return '<div class="editorial-layout"></div>';

  const presentation = page.presentation || 'text';
  let markup = '';

  if (presentation === 'visual') {
    markup = `<div class="visual">${assetVisual(page)}</div>`;
  } else if (presentation === 'gallery') {
    markup = `
      <p class="editorial-kicker">${escapeHtml(page.kicker || '')}</p>
      <h2 class="editorial-title">${escapeHtml(page.title)}</h2>
      <p class="editorial-copy variation-intro">${escapeHtml(page.copy || '')}</p>
      <div class="visual">${assetVisual(page)}</div>
    `;
  } else if (presentation === 'technical') {
    markup = `
      <p class="editorial-kicker">${escapeHtml(page.kicker || '')}</p>
      <h2 class="editorial-title">${escapeHtml(page.title)}</h2>
      ${page.copy ? `<p class="editorial-copy">${escapeHtml(page.copy)}</p>` : ''}
      <div class="visual">${assetVisual(page)}</div>
    `;
  } else if (presentation === 'materials') {
    markup = `
      ${textPageMarkup(page)}
      <div class="material-swatches" aria-label="Materiaalpalet"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="material-swatches-labels" aria-hidden="true"><span>hout</span><span>steen</span><span>bekleding</span><span>kozijn</span><span>glas</span></div>
    `;
  } else if (presentation === 'cta') {
    markup = `
      ${textPageMarkup(page)}
      <a class="presentation-link editorial-cta" href="https://technischbouwadvies.nl/">Bespreek uw bouwplan <span>→</span></a>
    `;
  } else {
    markup = textPageMarkup(page);
  }

  return `<div class="editorial-layout editorial-${escapeHtml(presentation)}-page" data-spread="${escapeHtml(page.spread || '')}">${markup}</div>`;
}

function bindAssetFallbacks() {
  document.querySelectorAll('.visual img[data-page-id]').forEach((image) => {
    image.addEventListener('error', () => {
      const page = pages.find((item) => item.id === image.dataset.pageId);
      const visual = image.closest('.visual');
      if (!page || !visual) return;
      visual.innerHTML = page.demoVisual || '';
    }, { once: true });
  });
}

function updateMeta(activeIndex) {
  const total = spreadCount();
  if (lifecycle === 'closed' || lifecycle === 'opening') {
    currentChapter.textContent = 'Ontwerpboek klaar om te openen';
    metaCount.textContent = `00 / ${String(total).padStart(2, '0')}`;
    metaProgressBar.style.width = '0%';
    if (minimalProgress) minimalProgress.style.width = '0%';
    return;
  }

  if (lifecycle === 'ended' || lifecycle === 'ending') {
    currentChapter.textContent = 'Ontwerpverhaal compleet';
    metaCount.textContent = `${String(total).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    metaProgressBar.style.width = '100%';
    if (minimalProgress) minimalProgress.style.width = '100%';
    return;
  }

  const currentSpread = spreadNumber(activeIndex);
  const page = pages[activeIndex] || pages[pages.length - 1];
  currentChapter.textContent = `${String(currentSpread).padStart(2, '0')} · ${page.title}`;
  metaCount.textContent = `${String(currentSpread).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  const percentage = (currentSpread / total) * 100;
  metaProgressBar.style.width = `${percentage}%`;
  if (minimalProgress) minimalProgress.style.width = `${percentage}%`;
}

function normalizedPage(pageIndex) {
  const maxIndex = pages.length - 1;
  const clamped = Math.max(0, Math.min(pageIndex, maxIndex));
  return isMobile() ? clamped : Math.floor(clamped / 2) * 2;
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

  prevButton.disabled = lifecycle !== 'open' || currentPage === 0;
}

function setLifecycle(nextState) {
  lifecycle = nextState;
  bookArea.dataset.lifecycle = nextState;
  bookArea.classList.remove('is-closed', 'is-opening', 'is-open', 'is-ending', 'is-ended');
  bookArea.classList.add(`is-${nextState}`);
  const interactive = nextState === 'open';
  prevButton.disabled = !interactive || currentPage === 0;
  nextButton.disabled = !interactive;
  autoplayToggle.disabled = !interactive;
  book.setAttribute('aria-hidden', String(nextState === 'closed'));
  bookEnd.setAttribute('aria-hidden', String(nextState !== 'ended'));
  updateMeta(currentPage);
}

function pauseAutoplayTimer() {
  window.clearTimeout(timer);
  timer = null;
  autoplayToggle.classList.remove('timer-running');
}

function currentViewDuration() {
  return getViewDuration({
    pages,
    currentPage,
    mobile: isMobile(),
    fallbackMs: bookConfig.autoplayMs || 6000
  });
}

function restartAutoplay() {
  pauseAutoplayTimer();
  if (!autoplay || lifecycle !== 'open') return;
  const duration = currentViewDuration();
  bookArea.style.setProperty('--view-duration', `${duration}ms`);
  void autoplayToggle.offsetWidth;
  autoplayToggle.classList.add('timer-running');
  timer = window.setTimeout(() => {
    autoplayToggle.classList.remove('timer-running');
    next(false);
  }, duration);
}

function syncAutoplayUi() {
  autoplayToggle.setAttribute('aria-pressed', String(autoplay));
  autoplayText.textContent = autoplay ? 'Autoplay aan' : 'Autoplay uit';
  autoplayToggle.querySelector('.play-icon').textContent = autoplay ? 'Ⅱ' : '▶';
  if (!autoplay) autoplayToggle.classList.remove('timer-running');
}

function setAutoplay(value) {
  autoplay = value;
  syncAutoplayUi();
  restartAutoplay();
}

function openBook({ userInitiated = false } = {}) {
  if (lifecycle === 'open' || lifecycle === 'opening') return;
  window.clearTimeout(autoOpenTimer);
  pauseAutoplayTimer();
  currentPage = 0;
  renderView();
  setLifecycle('opening');
  window.setTimeout(() => {
    setLifecycle('open');
    setAutoplay(true);
    if (userInitiated) book.focus({ preventScroll: true });
  }, prefersReducedMotion() ? 0 : 1000);
}

function finishBook() {
  if (lifecycle !== 'open') return;
  pauseAutoplayTimer();
  autoplay = false;
  syncAutoplayUi();
  setLifecycle('ending');
  window.setTimeout(() => {
    setLifecycle('ended');
    restartBookButton.focus({ preventScroll: true });
  }, prefersReducedMotion() ? 0 : 700);
}

function restartExperience() {
  pauseAutoplayTimer();
  currentPage = 0;
  renderView();
  setLifecycle('closed');
  window.setTimeout(() => openBook({ userInitiated: true }), prefersReducedMotion() ? 0 : 380);
}

function animate(direction) {
  if (prefersReducedMotion()) return;
  pageTurn.classList.remove('turning-next', 'turning-prev');
  void pageTurn.offsetWidth;
  pageTurn.classList.add(direction === 1 ? 'turning-next' : 'turning-prev');
}

function goToPage(nextPageIndex, direction = 1) {
  if (lifecycle !== 'open') return;
  const target = normalizedPage(nextPageIndex);
  if (target === currentPage) return;
  pauseAutoplayTimer();
  animate(direction);
  window.setTimeout(() => {
    currentPage = target;
    renderView();
    if (autoplay) restartAutoplay();
  }, prefersReducedMotion() ? 0 : 480);
}

function isLastView() {
  return currentPage + stepSize() >= pages.length;
}

function next(userInitiated = false) {
  if (lifecycle === 'closed' || lifecycle === 'ended') {
    openBook({ userInitiated });
    return;
  }
  if (lifecycle !== 'open') return;
  if (isLastView()) {
    finishBook();
    return;
  }
  goToPage(currentPage + stepSize(), 1);
}

function previous() {
  if (lifecycle !== 'open' || currentPage === 0) return;
  goToPage(currentPage - stepSize(), -1);
}

function buildDots() {
  dotsHost.replaceChildren();
  for (let i = 0; i < viewCount(); i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('tabindex', '-1');
    dot.setAttribute('aria-hidden', 'true');
    dot.addEventListener('click', () => {
      if (lifecycle !== 'open') return;
      const targetPage = isMobile() ? i : i * 2;
      goToPage(targetPage, targetPage >= currentPage ? 1 : -1);
    });
    dotsHost.appendChild(dot);
  }
}

function handleResponsiveChange() {
  const nowMobile = isMobile();
  if (nowMobile === mobileState) return;
  mobileState = nowMobile;
  currentPage = normalizedPage(currentPage);
  buildDots();
  renderView();
  restartAutoplay();
}

nextButton.addEventListener('click', () => next(true));
prevButton.addEventListener('click', previous);
autoplayToggle.addEventListener('click', () => setAutoplay(!autoplay));
coverStart.addEventListener('click', () => openBook({ userInitiated: true }));
restartBookButton.addEventListener('click', restartExperience);
startBook.addEventListener('click', () => {
  bookArea.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
  openBook({ userInitiated: true });
});

book.addEventListener('mouseenter', pauseAutoplayTimer);
book.addEventListener('mouseleave', restartAutoplay);
book.addEventListener('focusin', pauseAutoplayTimer);
book.addEventListener('focusout', restartAutoplay);
book.addEventListener('pointerdown', (event) => {
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});
book.addEventListener('pointerup', (event) => {
  if (lifecycle !== 'open' || pointerStartX === null || pointerStartY === null) return;
  const deltaX = event.clientX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;
  pointerStartX = null;
  pointerStartY = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  if (deltaX < 0) next(true); else previous();
});
book.addEventListener('pointercancel', () => {
  pointerStartX = null;
  pointerStartY = null;
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') next(true);
  if (event.key === 'ArrowLeft') previous();
  if ((event.key === 'Enter' || event.key === ' ') && lifecycle === 'closed') openBook({ userInitiated: true });
});
window.addEventListener('resize', handleResponsiveChange);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pauseAutoplayTimer(); else restartAutoplay();
});

buildDots();
renderView();
syncAutoplayUi();
setLifecycle('closed');
autoOpenTimer = window.setTimeout(() => openBook(), prefersReducedMotion() ? 500 : 2000);
