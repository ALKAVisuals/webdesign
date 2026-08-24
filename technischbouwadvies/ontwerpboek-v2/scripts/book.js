import './content.js';

const cover = document.querySelector('#book-cover');
const reader = document.querySelector('#book-reader');
const closedBook = cover.querySelector('.closed-book');
const stage = document.querySelector('.preview-stage');
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
const mobileQuery = window.matchMedia('(max-width: 48rem), (max-width: 60rem) and (max-height: 34rem) and (orientation: landscape)');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const pageTurnDuration = 880;
const bookTransitionDuration = 720;

const state = {
  open: false,
  spread: 0,
  mobilePage: 0,
  turning: false,
  transitioning: false
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
  stage.classList.toggle('is-book-open', state.open);
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

const transitionGhost = (source, className) => {
  const rect = source.getBoundingClientRect();
  const ghost = source.cloneNode(true);
  ghost.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
  ghost.querySelectorAll('img').forEach((image) => {
    image.loading = 'eager';
  });
  ghost.classList.add(className);
  ghost.setAttribute('aria-hidden', 'true');
  ghost.style.setProperty('--transition-top', `${rect.top}px`);
  ghost.style.setProperty('--transition-left', `${rect.left}px`);
  ghost.style.setProperty('--transition-width', `${rect.width}px`);
  ghost.style.setProperty('--transition-height', `${rect.height}px`);
  document.body.append(ghost);
  return ghost;
};

const openBook = ({ spread = 0, focus = true, animate = true } = {}) => {
  if (state.transitioning) return;

  if (state.open) {
    state.spread = Math.max(0, Math.min(spreads.length - 1, spread));
    state.mobilePage = state.spread * 2;
    render({ focus });
    return;
  }

  const shouldAnimate = animate && !reducedMotionQuery.matches;
  const ghost = shouldAnimate ? transitionGhost(closedBook, 'book-transition-cover') : null;
  state.open = true;
  state.spread = Math.max(0, Math.min(spreads.length - 1, spread));
  state.mobilePage = state.spread * 2;
  if (!shouldAnimate) {
    render({ focus });
    return;
  }

  state.transitioning = true;
  stage.classList.add('is-opening');
  render({ announce: false });
  reader.inert = true;

  window.setTimeout(() => {
    ghost.remove();
    stage.classList.remove('is-opening');
    reader.inert = false;
    state.transitioning = false;
    render({ focus });
  }, bookTransitionDuration);
};

const closeBook = ({ focus = true, animate = true } = {}) => {
  if (state.turning || state.transitioning || !state.open) return;

  const activeScene = spreads[state.spread].querySelector('.book-scene');
  const shouldAnimate = animate && !reducedMotionQuery.matches;
  const ghost = shouldAnimate ? transitionGhost(activeScene, 'book-transition-spread') : null;
  state.open = false;
  if (!shouldAnimate) {
    render({ focus });
    return;
  }

  state.transitioning = true;
  stage.classList.add('is-closing');
  render({ announce: false });
  cover.inert = true;

  window.setTimeout(() => {
    ghost.remove();
    stage.classList.remove('is-closing');
    cover.inert = false;
    state.transitioning = false;
    render({ focus });
  }, bookTransitionDuration);
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

const turnClone = (spread, mobilePageIndex) => {
  const clone = spread.querySelector('.book-spread').cloneNode(true);
  clone.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
  clone.querySelectorAll('img').forEach((image) => {
    image.loading = 'eager';
  });

  if (mobileQuery.matches) {
    const canvasPages = [...clone.querySelectorAll('.mobile-canvas-page')];
    const pages = canvasPages.length ? canvasPages : [...clone.querySelectorAll(':scope > .book-page')];
    pages.forEach((page, index) => {
      page.classList.toggle('is-mobile-active', index === mobilePageIndex % 2);
    });
  }

  return clone;
};

const turnFace = ({ spread, side, mobilePageIndex, back = false }) => {
  const face = document.createElement('div');
  face.className = `page-turn-face page-turn-face--${back ? 'back' : 'front'}`;

  const crop = document.createElement('div');
  crop.className = `page-turn-face__crop page-turn-face__crop--${side}`;

  const content = document.createElement('div');
  content.className = 'page-turn-face__content';
  content.append(turnClone(spread, mobilePageIndex));
  crop.append(content);
  face.append(crop);
  return face;
};

const turnPage = (direction) => {
  if (!state.open || state.turning || state.transitioning) return;

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
  const currentSpread = spreads[state.spread];
  const targetMobilePage = state.mobilePage + direction;
  const targetSpreadIndex = mobile ? Math.floor(targetMobilePage / 2) : state.spread + direction;
  const targetSpread = spreads[targetSpreadIndex];
  const activeScene = currentSpread.querySelector('.book-scene');
  const viewport = document.createElement('div');
  viewport.className = 'page-turn-viewport';
  viewport.setAttribute('aria-hidden', 'true');
  const layer = document.createElement('div');
  layer.className = `page-turn-layer page-turn-layer--${direction > 0 ? 'next' : 'previous'}`;
  layer.setAttribute('aria-hidden', 'true');
  layer.append(
    turnFace({
      spread: currentSpread,
      side: direction > 0 ? 'right' : 'left',
      mobilePageIndex: state.mobilePage
    }),
    turnFace({
      spread: targetSpread,
      side: direction > 0 ? 'left' : 'right',
      mobilePageIndex: targetMobilePage,
      back: true
    })
  );
  const sceneRect = activeScene.getBoundingClientRect();
  const readerRect = reader.getBoundingClientRect();
  const layerWidth = mobile ? sceneRect.width : sceneRect.width / 2;
  const sceneLeft = sceneRect.left - readerRect.left;
  const pageLeft = direction > 0 && !mobile ? layerWidth : 0;

  viewport.style.setProperty('--turn-top', `${sceneRect.top - readerRect.top}px`);
  viewport.style.setProperty('--turn-left', `${sceneLeft}px`);
  viewport.style.setProperty('--turn-width', `${sceneRect.width}px`);
  viewport.style.setProperty('--turn-height', `${sceneRect.height}px`);
  viewport.style.setProperty('--turn-page-left', `${pageLeft}px`);
  viewport.style.setProperty('--turn-page-width', `${layerWidth}px`);

  const underlay = turnFace({
    spread: targetSpread,
    side: direction > 0 ? 'right' : 'left',
    mobilePageIndex: targetMobilePage
  });
  underlay.className = `page-turn-underlay page-turn-underlay--${direction > 0 ? 'next' : 'previous'}`;
  underlay.setAttribute('aria-hidden', 'true');
  viewport.append(underlay, layer);
  reader.append(viewport);

  reader.classList.add('is-turning');
  reader.setAttribute('aria-busy', 'true');

  let turnCommitted = false;
  const finishTurn = () => {
    if (turnCommitted) return;
    turnCommitted = true;
    commitStep(direction);
    render();
    viewport.remove();
    reader.classList.remove('is-turning');
    reader.removeAttribute('aria-busy');
    state.turning = false;
  };

  layer.addEventListener('animationend', finishTurn, { once: true });
  window.setTimeout(finishTurn, pageTurnDuration + 120);
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
  if (state.transitioning) return;

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
  if (reader.setPointerCapture) {
    try {
      reader.setPointerCapture(event.pointerId);
    } catch {
      // Safari kan pointer capture weigeren wanneer een systeemgebaar de aanraking overneemt.
    }
  }
});

reader.addEventListener('pointerup', (event) => {
  if (!pointerStart || pointerStart.id !== event.pointerId) return;
  const horizontal = event.clientX - pointerStart.x;
  const vertical = event.clientY - pointerStart.y;
  if (reader.hasPointerCapture?.(event.pointerId)) reader.releasePointerCapture(event.pointerId);
  pointerStart = null;
  if (Math.abs(horizontal) > 45 && Math.abs(horizontal) > Math.abs(vertical) * 1.2) {
    turnPage(horizontal < 0 ? 1 : -1);
  }
});

reader.addEventListener('pointercancel', (event) => {
  if (reader.hasPointerCapture?.(event.pointerId)) reader.releasePointerCapture(event.pointerId);
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
if (initialSpread) openBook({ spread: Number(initialSpread[1]) - 1, focus: false, animate: false });
else render({ announce: false });
