const bookArea = document.getElementById('bookArea');
const pageTurn = document.getElementById('pageTurn');

if (bookArea && pageTurn) {
  const clearTurnState = () => {
    bookArea.classList.remove('is-turning-next', 'is-turning-prev');
  };

  const syncTurnState = () => {
    const next = pageTurn.classList.contains('turning-next');
    const prev = pageTurn.classList.contains('turning-prev');

    if (!next && !prev) {
      clearTurnState();
      return;
    }

    bookArea.classList.toggle('is-turning-next', next);
    bookArea.classList.toggle('is-turning-prev', prev);
  };

  const observer = new MutationObserver(syncTurnState);
  observer.observe(pageTurn, { attributes: true, attributeFilter: ['class'] });

  pageTurn.addEventListener('animationend', clearTurnState);
  pageTurn.addEventListener('animationcancel', clearTurnState);
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}
