/* Phase M mobile behavior QA patch.
   Mobile should not auto-open or begin autoplay while Safari is still composing the page.
   The permanent book region also releases programmatic focus after opening so iOS does
   not draw a full-page accessibility ring around the physical sheet. */
(() => {
  if (!window.matchMedia('(max-width: 760px)').matches) return;

  const nativeSetTimeout = window.setTimeout.bind(window);
  let suppressedAutoOpen = false;

  window.setTimeout = function patchedSetTimeout(handler, delay, ...args) {
    if (!suppressedAutoOpen && Number(delay) === 2000) {
      suppressedAutoOpen = true;
      return 0;
    }
    return nativeSetTimeout(handler, delay, ...args);
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout = nativeSetTimeout;

    const area = document.getElementById('bookArea');
    const autoplay = document.getElementById('autoplayToggle');
    const book = document.getElementById('book');
    if (!area || !autoplay) return;

    let initialOpenHandled = false;
    const observer = new MutationObserver(() => {
      if (initialOpenHandled || !area.classList.contains('is-open')) return;
      initialOpenHandled = true;

      nativeSetTimeout(() => {
        /* book.js intentionally focuses the book after a user-initiated open so desktop
           keyboard users can continue immediately. On touch-sized layouts that focus
           creates the bronze full-page ring seen in real-device QA. Release only that
           programmatic region focus on mobile; controls remain individually focusable. */
        if (book && document.activeElement === book) book.blur();

        if (autoplay.getAttribute('aria-pressed') === 'true') autoplay.click();
        observer.disconnect();
      }, 0);
    });

    observer.observe(area, { attributes: true, attributeFilter: ['class'] });
  }, { once: true });
})();
