import './content.js';

const cover = document.querySelector('#book-cover');
const reader = document.querySelector('#book-reader');
const sequence = document.querySelector('#book-sequence');
const spreads = [...document.querySelectorAll('.spread-frame')];
const openButton = document.querySelector('#open-book');
const previousButton = document.querySelector('#previous-page');
const nextButton = document.querySelector('#next-page');
const progressLabel = document.querySelector('#progress-label');
const progressValue = document.querySelector('#progress-value');
const progressBar = document.querySelector('#progress-bar');
const previewStatus = document.querySelector('#preview-status');
const liveRegion = document.querySelector('#reader-live');
const mobileQuery = window.matchMedia('(max-width: 48rem)');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const state = {
  open: false,
  spread: 0,
  mobilePage: 0,
  turning: false
};

const pad = (value) => String(value).padStart(2, '0');

const mobileCandidates = (spread) => {
  const canvasPages = [...spread.querySelectorAll('.mobile-canvas-page')];
  return canvasPages.length ? canvasPages : [...spread.querySelectorAll('.book-spread > .book-page')];
};

const activeTitle = () => spreads[state.spread]?.querySelector('.spread-heading h2')?.textContent?.trim() || 'Ontwerpboek';

const updateHash = () => {
  const hash = state.open ? `#spread-${pad(state.spread + 1)}` : '#cover';
  if (window.location.hash !== hash) history.replaceState(null, '', hash);
};

const setInteractiveState = (spread, active) => {
  spread.hidden = !active;
  spread.setAttribute('aria-hidden', String(!active));
  if ('inert' in spread) spread.inert = !active;
};

const updateMobilePage = () => {
  spreads.forEach((spread, spreadIndex) => {
    if (!mobileQuery.matches) {
      spread.querySelectorAll('.book-spread > .book-page').forEach((page) => {
        page.classList.remove('is-mobile-active');
        page.setAttribute('aria-hidden', 'false');
      });
      spread.querySelectorAll('.mobile-canvas-page').forEach((page) => {
        page.classList.remove('is-mobile-active');
        page.setAttribute('aria-hidden', 'true');
      });
      return;
    }

    mobileCandidates(spread).forEach((page, pageIndex) => {
      const active = spreadIndex === state.spread && pageIndex === state.mobilePage % 2;
      page.classList.toggle('is-mobile-active', active);
      page.setAttribute('aria-hidden', String(!active));
    });
  });
};

const render = ({ announce = true, focus = false } = {}) => {
  cover.hidden = state.open;
  reader.hidden = !state.open;

  spreads.forEach((spread, index) => setInteractiveState(spread, state.open && index === state.spread));

  const mobile = mobileQuery.matches;
  const current = mobile ? state.mobilePage + 1 : state.spread + 1;
  const total = mobile ? spreads.length * 2 : spreads.length;

  if (state.open) {
    updateMobilePage();
    progressLabel.textContent = mobile ? 'Pagina' : 'Spread';
    progressValue.textContent = `${pad(current)} / ${pad(total)}`;
    progressBar.style.setProperty('--progress', `${(current / total) * 100}%`);
    previewStatus.textContent = mobile ? `Boekpagina ${pad(current)} van ${pad(total)}` : `Spread ${pad(current)} van ${pad(total)}`;
    previousButton.disabled = current === 1;
    nextButton.disabled = current === total;
    nextButton.setAttribute('aria-label', current === total ? 'Einde van het ontwerpboek' : 'Volgende pagina');

    if (announce) {
      liveRegion.textContent = `${mobile ? 'Pagina' : 'Spread'} ${current} van ${total}: ${activeTitle()}`;
    }

    if (focus) sequence.focus({ preventScroll: true });
  } else {
    previewStatus.textContent = 'Interactief ontwerpboek · 08 spreads';
    if (announce) liveRegion.textContent = 'Omslag van het ontwerpboek De Houtkavel';
    if (focus) openButton.focus({ preventScroll: true });
  }

  updateHash();
};

const openBook = ({ spread = 0, focus = true } = {}) => {
  state.open = true;
  state.spread = Math.max(0, Math.min(spreads.length - 1, spread));
  state.mobilePage = state.spread * 2;
  render({ focus });
};

const closeBook = ({ focus = true } = {}) => {
  if (state.turning) return;
  state.open = false;
  render({ focus });
};

const commitStep = (direction) => {
  if (mobileQuery.matches) {
    state.mobilePage = Math.max(0, Math.min(spreads.length * 2 - 1, state.mobilePage + direction));
    state.spread = Math.floor(state.mobilePage / 2);
  } else {
    state.spread = Math.max(0, Math.min(spreads.length - 1, state.spread + direction));
    state.mobilePage = state.spread * 2;
  }
};

const turnPage = (direction) => {
  if (!state.open || state.turning) return;

  const mobile = mobileQuery.matches;
  const current = mobile ? state.mobilePage : state.spread;
  const maximum = mobile ? spreads.length * 2 - 1 : spreads.length - 1;
  if ((direction < 0 && current === 0) || (direction > 0 && current === maximum)) return;

  if (reducedMotionQuery.matches) {
    commitStep(direction);
    render();
    return;
  }

  state.turning = true;
  const activeScene = spreads[state.spread].querySelector('.book-scene');
  const layer = document.createElement('div');
  layer.className = `page-turn-layer page-turn-layer--${direction > 0 ? 'next' : 'previous'}`;
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = '<i></i>';
  activeScene.append(layer);

  window.setTimeout(() => {
    commitStep(direction);
    render();
    spreads[state.spread].querySelector('.book-scene')?.append(layer);
  }, 300);

  window.setTimeout(() => {
    layer.remove();
    state.turning = false;
  }, 620);
};

openButton.addEventListener('click', () => openBook());
previousButton.addEventListener('click', () => turnPage(-1));
nextButton.addEventListener('click', () => turnPage(1));

document.querySelectorAll('[data-action="cover"]').forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    closeBook();
  });
});

document.addEventListener('keydown', (event) => {
  if (!state.open) {
    if (event.key === 'Enter' && document.activeElement === openButton) openBook();
    return;
  }

  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    event.preventDefault();
    turnPage(1);
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    turnPage(-1);
  }
  if (event.key === 'Home') {
    event.preventDefault();
    state.spread = 0;
    state.mobilePage = 0;
    render();
  }
  if (event.key === 'End') {
    event.preventDefault();
    state.spread = spreads.length - 1;
    state.mobilePage = spreads.length * 2 - 1;
    render();
  }
  if (event.key === 'Escape') closeBook();
});

let pointerStart = null;

reader.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button, a')) return;
  pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
});

reader.addEventListener('pointerup', (event) => {
  if (!pointerStart || pointerStart.id !== event.pointerId) return;
  const horizontal = event.clientX - pointerStart.x;
  const vertical = event.clientY - pointerStart.y;
  pointerStart = null;
  if (Math.abs(horizontal) > 45 && Math.abs(horizontal) > Math.abs(vertical) * 1.2) {
    turnPage(horizontal < 0 ? 1 : -1);
  }
});

reader.addEventListener('pointercancel', () => {
  pointerStart = null;
});

mobileQuery.addEventListener('change', (event) => {
  state.mobilePage = event.matches ? state.spread * 2 : Math.floor(state.mobilePage / 2) * 2;
  state.spread = Math.floor(state.mobilePage / 2);
  render({ announce: false });
});

window.addEventListener('hashchange', () => {
  const match = window.location.hash.match(/^#spread-(0[1-8])$/);
  if (match) openBook({ spread: Number(match[1]) - 1, focus: false });
  if (window.location.hash === '#cover') closeBook({ focus: false });
});

sequence.setAttribute('tabindex', '-1');

const initialSpread = window.location.hash.match(/^#spread-(0[1-8])$/);
if (initialSpread) openBook({ spread: Number(initialSpread[1]) - 1, focus: false });
else render({ announce: false });
