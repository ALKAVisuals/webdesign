/* Phase M mobile behavior QA patch.
   Mobile should not auto-open or begin autoplay while Safari is still composing the page. */
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
    if (!area || !autoplay) return;

    let initialOpenHandled = false;
    const observer = new MutationObserver(() => {
      if (initialOpenHandled || !area.classList.contains('is-open')) return;
      initialOpenHandled = true;

      nativeSetTimeout(() => {
        if (autoplay.getAttribute('aria-pressed') === 'true') autoplay.click();
        observer.disconnect();
      }, 0);
    });

    observer.observe(area, { attributes: true, attributeFilter: ['class'] });
  }, { once: true });
})();
