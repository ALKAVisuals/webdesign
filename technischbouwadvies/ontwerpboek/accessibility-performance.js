import { pages } from './book-data.js';
import { assetManifest } from './asset-manifest.js';

const bookArea = document.getElementById('bookArea');
const leftPage = document.getElementById('leftPage');
const autoplayToggle = document.getElementById('autoplayToggle');
const restartBookButton = document.getElementById('restartBook');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileQuery = window.matchMedia('(max-width: 760px)');

let trustedInteraction = false;
let reducedMotionOptIn = false;
const preloaded = new Set();

function isRelevantInteractionTarget(target) {
  return Boolean(target?.closest?.('#startBook, #coverStart, #book, #prevPage, #nextPage, #autoplayToggle, #restartBook'));
}

document.addEventListener('pointerdown', (event) => {
  if (event.isTrusted && isRelevantInteractionTarget(event.target)) trustedInteraction = true;
}, true);

document.addEventListener('keydown', (event) => {
  if (event.isTrusted && isRelevantInteractionTarget(event.target)) trustedInteraction = true;
}, true);

const nativeRestartFocus = restartBookButton.focus.bind(restartBookButton);
restartBookButton.focus = (options) => {
  if (trustedInteraction || bookArea.contains(document.activeElement)) {
    nativeRestartFocus(options);
  }
};

function syncAutoplayAccessibility() {
  const running = autoplayToggle.getAttribute('aria-pressed') === 'true';
  autoplayToggle.setAttribute('aria-label', running ? 'Pauzeer automatisch bladeren' : 'Start automatisch bladeren');

  if (reducedMotionQuery.matches && running && !reducedMotionOptIn) {
    queueMicrotask(() => {
      if (autoplayToggle.getAttribute('aria-pressed') === 'true') autoplayToggle.click();
    });
  }
}

autoplayToggle.addEventListener('click', (event) => {
  if (!event.isTrusted || !reducedMotionQuery.matches) return;
  reducedMotionOptIn = autoplayToggle.getAttribute('aria-pressed') === 'true';
});

const autoplayObserver = new MutationObserver(syncAutoplayAccessibility);
autoplayObserver.observe(autoplayToggle, { attributes: true, attributeFilter: ['aria-pressed'] });
syncAutoplayAccessibility();

reducedMotionQuery.addEventListener?.('change', () => {
  reducedMotionOptIn = false;
  syncAutoplayAccessibility();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (autoplayToggle.getAttribute('aria-pressed') !== 'true') return;
  autoplayToggle.click();
});

function assetSources(page) {
  if (!page) return [];
  const asset = assetManifest[page.id] || page.asset;
  if (!asset) return [];
  if (asset.type === 'gallery' && Array.isArray(asset.items)) {
    return asset.items.map((item) => item?.src).filter(Boolean);
  }
  return asset.src ? [asset.src] : [];
}

function schedulePreload() {
  if (navigator.connection?.saveData) return;

  const current = Math.max(0, (Number(leftPage.dataset.page) || 1) - 1);
  const nextStart = current + (mobileQuery.matches ? 1 : 2);
  const nextIndexes = mobileQuery.matches ? [nextStart] : [nextStart, nextStart + 1];
  const sources = nextIndexes.flatMap((index) => assetSources(pages[index]));

  const load = () => {
    sources.forEach((src) => {
      if (!src || preloaded.has(src)) return;
      preloaded.add(src);
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(load, { timeout: 1200 });
  } else {
    window.setTimeout(load, 250);
  }
}

const pageObserver = new MutationObserver(schedulePreload);
pageObserver.observe(leftPage, { attributes: true, attributeFilter: ['data-page'] });
schedulePreload();
