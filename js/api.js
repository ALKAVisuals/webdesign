/* ============================================
   JS — Style Guide Interactions
   ============================================ */

// GitHub API token — set at runtime
// In production, this should come from a secure source
const GITHUB_TOKEN = localStorage.getItem('gh_token') || '';

/**
 * Upload a file to the webdesign repo via GitHub API
 * @param {string} path - File path in repo (e.g. 'css/custom.css')
 * @param {string} content - Raw file content (will be base64 encoded)
 * @param {string} message - Commit message
 * @returns {Promise<object>} API response
 */
async function uploadToRepo(path, content, message) {
  const base64 = btoa(unescape(encodeURIComponent(content)));
  
  // Check if file exists (need SHA to update)
  let sha = null;
  try {
    const existing = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
    });
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }
  } catch (e) { /* file doesn't exist yet */ }

  const body = {
    message: message,
    content: base64
  };
  if (sha) body.sha = sha;

  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return resp.json();
}

/**
 * List files in a repo directory
 * @param {string} dirPath - Directory path (e.g. 'css', 'assets/images')
 * @returns {Promise<Array>} List of file objects
 */
async function listFiles(dirPath) {
  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${dirPath}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!resp.ok) return [];
  return resp.json();
}

/**
 * Read a file from the repo
 * @param {string} path - File path in repo
 * @returns {Promise<string>} Decoded file content
 */
async function readFile(path) {
  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  return atob(data.content);
}

/**
 * Delete a file from the repo
 * @param {string} path - File path in repo
 * @param {string} message - Commit message
 * @returns {Promise<object>} API response
 */
async function deleteFile(path, message) {
  // Get SHA first
  const existing = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
  });
  if (!existing.ok) return { error: 'File not found' };
  const data = await existing.json();

  const resp = await fetch(`https://api.github.com/repos/ALKAVisuals/webdesign/contents/${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      sha: data.sha
    })
  });

  return resp.json();
}

// Export for inline use
window.LS = { uploadToRepo, listFiles, readFile, deleteFile };

/* ============================================
   PERSPECTIVE CAROUSEL — Coverflow Logic
   ============================================ */

(function() {
  const track = document.getElementById('skp-carousel-track');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.skp-carousel-perspective__slide'));
  const dots = Array.from(document.querySelectorAll('.skp-carousel-perspective__dot'));
  const prevBtn = document.getElementById('skp-carousel-prev');
  const nextBtn = document.getElementById('skp-carousel-next');
  const totalSlides = slides.length;
  const AUTOPLAY_MS = 3500;

  // Position classes in order from left to right
  const positionClasses = [
    'skp-carousel-perspective__slide--far-left',
    'skp-carousel-perspective__slide--left',
    'skp-carousel-perspective__slide--center',
    'skp-carousel-perspective__slide--right',
    'skp-carousel-perspective__slide--far-right',
  ];

  let currentIndex = 3; // Start at center (Legend slide)
  let autoplayTimer = null;
  let autoplayPaused = false;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  function getVisibleCount() {
    // How many slides are visible at once (center + 2 on each side = 5)
    return Math.min(5, totalSlides);
  }

  function getOffset(index) {
    // Calculate offset from center: negative = left, positive = right
    return index - currentIndex;
  }

  function getPositionClass(offset) {
    const half = Math.floor(getVisibleCount() / 2);
    if (offset < -half) return 'skp-carousel-perspective__slide--hidden';
    if (offset > half) return 'skp-carousel-perspective__slide--hidden';
    const idx = offset + half;
    return positionClasses[idx] || 'skp-carousel-perspective__slide--hidden';
  }

  function updateClasses() {
    slides.forEach((slide, i) => {
      const offset = getOffset(i);
      // Remove all position classes
      positionClasses.forEach(c => slide.classList.remove(c));
      slide.classList.remove('skp-carousel-perspective__slide--hidden');
      // Add correct position class
      slide.classList.add(getPositionClass(offset));
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('skp-carousel-perspective__dot--active', i === currentIndex);
    });

    // Update autoplay bar on center slide
    slides.forEach((slide, i) => {
      const bar = slide.querySelector('.skp-carousel-perspective__autoplay-bar');
      if (bar) bar.style.width = (i === currentIndex) ? '0%' : '0%';
    });
  }

  function goTo(index) {
    currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    updateClasses();
    resetAutoplay();
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayPaused = false;
    const startTime = Date.now();
    const bar = slides[currentIndex]?.querySelector('.skp-carousel-perspective__autoplay-bar');

    autoplayTimer = setInterval(() => {
      if (autoplayPaused) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      if (bar) bar.style.width = progress + '%';
      if (progress >= 100) {
        next();
        startAutoplay(); // restart with new center
      }
    }, 50);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Drag / Swipe
  function onPointerDown(e) {
    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    currentTranslate = startX;
    track.style.cursor = 'grabbing';
    autoplayPaused = true;
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = clientX - currentTranslate;
    // Threshold for swipe
    if (Math.abs(diff) > 60) {
      if (diff > 0) prev();
      else next();
      isDragging = false;
      track.style.cursor = 'grab';
      autoplayPaused = false;
      resetAutoplay();
    }
  }

  function onPointerUp() {
    isDragging = false;
    track.style.cursor = 'grab';
    autoplayPaused = false;
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); });
  });

  // Mouse drag
  track.addEventListener('mousedown', onPointerDown);
  document.addEventListener('mousemove', onPointerMove);
  document.addEventListener('mouseup', onPointerUp);

  // Touch drag
  track.addEventListener('touchstart', onPointerDown, { passive: false });
  document.addEventListener('touchmove', onPointerMove, { passive: false });
  document.addEventListener('touchend', onPointerUp);

  // Pause autoplay on hover
  const carousel = document.getElementById('skp-perspective-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => { autoplayPaused = true; });
    carousel.addEventListener('mouseleave', () => { autoplayPaused = false; });
  }

  // Keyboard nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); resetAutoplay(); }
    if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
  });

  // Init
  updateClasses();
  startAutoplay();
})();
