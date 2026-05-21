/* ═══════════════════════════════════════════════════════════════
   SKIPPER UI — Full Interactive Component Scripts v3
   ═══════════════════════════════════════════════════════════════
   Dependencies: GSAP 3 + ScrollTrigger, Swiper.js 11
   All components use DOM-ready checks to prevent errors.
   Mobile-first: touch support, responsive fallbacks, ARIA.
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Detect touch device
  var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  var mqMobile = window.matchMedia('(max-width: 768px)');
  var mqReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ─────────────────────────────────────────────
     1. HOVER EXPAND — Image Gallery
     Touch: tap to activate, tap another to switch
     ───────────────────────────────────────────── */
  (function initHoverExpand() {
    var container = document.querySelector('.skp-hover-expand');
    if (!container) return;
    var items = container.querySelectorAll('.skp-hover-expand__item');
    if (!items.length) return;

    function activateItem(item) {
      items.forEach(function(el) {
        el.classList.remove('skp-hover-expand__item--active');
        el.classList.add('skp-hover-expand__item--default');
        el.setAttribute('aria-selected', 'false');
      });
      item.classList.remove('skp-hover-expand__item--default');
      item.classList.add('skp-hover-expand__item--active');
      item.setAttribute('aria-selected', 'true');
    }

    // Hover (desktop)
    items.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        if (!isTouch) activateItem(this);
      });
    });

    // Touch/click support
    items.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        activateItem(this);
      });
      // Keyboard
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateItem(this);
        }
      });
    });

    container.addEventListener('mouseleave', function() {
      if (isTouch) return;
      items.forEach(function(el) {
        el.classList.remove('skp-hover-expand__item--active');
        el.classList.add('skp-hover-expand__item--default');
        el.setAttribute('aria-selected', 'false');
      });
      var mid = Math.floor(items.length / 2);
      items[mid].classList.remove('skp-hover-expand__item--default');
      items[mid].classList.add('skp-hover-expand__item--active');
      items[mid].setAttribute('aria-selected', 'true');
    });

    // ARIA
    container.setAttribute('role', 'tablist');
    container.setAttribute('aria-label', 'Image gallery');
    items.forEach(function(item, i) {
      item.setAttribute('role', 'tab');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', 'Image ' + (i + 1));
    });
  })();

  /* ─────────────────────────────────────────────
     2. STICKY CARD STACK — Scroll Rotation
     Mobile: CSS-only stacked cards (no GSAP)
     ───────────────────────────────────────────── */
  (function initStickyCards() {
    var container = document.querySelector('.skp-sticky-cards');
    if (!container) return;
    var cards = container.querySelectorAll('.skp-sticky-cards__card');
    if (!cards.length) return;

    // Mobile fallback: CSS-only stacked cards
    if (isTouch || mqMobile.matches) {
      container.classList.add('skp-sticky-cards--mobile');
      return;
    }

    // Desktop: GSAP ScrollTrigger
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    container.style.position = 'relative';
    container.style.overflow = 'visible';

    ScrollTrigger.create({
      trigger: container,
      start: 'top top+=100',
      end: 'bottom+=400 top',
      pin: true,
      pinSpacing: false,
    });

    cards.forEach(function(card, i) {
      if (i === 0) return;
      var scale = 1 - (i * 0.07);
      var rotate = i % 2 === 0 ? (i * 1.5) : -(i * 1.5);
      gsap.to(card, {
        scale: scale,
        rotate: rotate,
        yPercent: i * 2,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top+=100',
          end: 'bottom+=400 top',
          scrub: 1,
        }
      });
    });

    window.addEventListener('load', function() {
      ScrollTrigger.refresh();
    });
  })();

  /* ─────────────────────────────────────────────
     3. SCROLL IMAGE REVEAL — Scale & Rotate
     Mobile: CSS-only reveal (no GSAP)
     ───────────────────────────────────────────── */
  (function initScrollReveal() {
    var container = document.querySelector('.skp-scroll-reveal');
    if (!container) return;
    var img = container.querySelector('.skp-scroll-reveal__img');
    if (!img) return;

    // Mobile: use IntersectionObserver for simple reveal
    if (isTouch || mqMobile.matches || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      container.classList.add('skp-scroll-reveal--mobile');
      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              img.style.transform = 'scale(1) rotate(0deg)';
              img.style.opacity = '1';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        observer.observe(container);
      } else {
        // Fallback: just show it
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.opacity = '1';
      }
      return;
    }

    // Desktop: GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(img, { scale: 0.75, rotation: -10, opacity: 0.5 });

    gsap.to(img, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'center center',
        scrub: 1.5,
      }
    });

    window.addEventListener('load', function() {
      ScrollTrigger.refresh();
    });
  })();

  /* ─────────────────────────────────────────────
     4. CARD SWIPE CAROUSEL — Swiper Cards Effect
     ───────────────────────────────────────────── */
  (function initCardSwipeCarousel() {
    var container = document.querySelector('.skp-card-swipe-carousel');
    if (!container) return;
    if (typeof Swiper === 'undefined') return;

    var prevBtn = document.querySelector('#skp-card-swipe-prev');
    var nextBtn = document.querySelector('#skp-card-swipe-next');

    var swiper = new Swiper(container, {
      effect: 'cards',
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 3,
        rotate: true,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous card',
        nextSlideMessage: 'Next card',
      },
    });

    // Pause on hover
    container.addEventListener('mouseenter', function() { swiper.autoplay.stop(); });
    container.addEventListener('mouseleave', function() { swiper.autoplay.start(); });
  })();

  /* ─────────────────────────────────────────────
     5. PERSPECTIVE CAROUSEL — Swiper Coverflow
     ───────────────────────────────────────────── */
  (function initPerspectiveCarousel() {
    var container = document.querySelector('.skp-carousel-perspective');
    if (!container) return;
    if (typeof Swiper === 'undefined') return;

    var prevBtn = document.querySelector('#skp-perspective-prev');
    var nextBtn = document.querySelector('#skp-perspective-next');
    var pagination = container.querySelector('.swiper-pagination');

    var swiper = new Swiper(container, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 180,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      breakpoints: {
        320: {
          coverflowEffect: { rotate: 15, depth: 80, stretch: 10 },
        },
        768: {
          coverflowEffect: { rotate: 30, depth: 180, stretch: 0 },
        },
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
    });

    container.addEventListener('mouseenter', function() { swiper.autoplay.stop(); });
    container.addEventListener('mouseleave', function() { swiper.autoplay.start(); });
  })();

  /* ─────────────────────────────────────────────
     6. CROWD CANVAS — Canvas Animation
     Touch: tap to add people, performance limiter
     ───────────────────────────────────────────── */
  (function initCrowdCanvas() {
    var container = document.querySelector('.skp-crowd-canvas');
    if (!container) return;

    var canvas = document.getElementById('crowdCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'crowdCanvas';
      container.insertBefore(canvas, container.firstChild);
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var people = [];
    var animId = null;
    var isPaused = false;

    // Performance limiter based on device
    var maxPeople = isTouch ? 25 : 50;

    function Person(x, y, color) {
      this.x = x;
      this.y = y;
      this.baseY = y;
      this.color = color || 'rgba(201,168,76,0.6)';
      this.speed = 0.2 + Math.random() * 0.6;
      this.radius = 2.5 + Math.random() * 3;
      this.headR = this.radius * 0.55;
      this.phase = Math.random() * Math.PI * 2;
      this.speed = 0.02 + Math.random() * 0.03;
      this.amp = 1.5 + Math.random() * 2;
      this.dir = Math.random() > 0.5 ? 1 : -1;
    }

    Person.prototype.update = function(w) {
      this.x += this.speed * this.dir;
      this.phase += 0.03;
      this.y = this.baseY + Math.sin(this.phase) * this.amp;
      if (this.x > w + 20) this.x = -20;
      if (this.x < -20) this.x = w + 20;
    };

    Person.prototype.draw = function(ctx) {
      var bob = Math.sin(this.phase) * 1.2;
      ctx.beginPath();
      ctx.ellipse(this.x, this.y - this.headR * 2 + bob, this.radius * 0.6, this.radius * 1.1, 0, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y - this.headR * 3.2 + bob, this.headR, 0, Math.PI * 2);
      ctx.fill();
    };

    function resize() {
      var rect = container.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initPeople(rect.width, rect.height);
    }

    function initPeople(w, h) {
      people = [];
      var count = Math.min(maxPeople, Math.max(10, Math.floor(w / 25)));
      var colors = [
        'rgba(201,168,76,0.6)',
        'rgba(99,102,241,0.45)',
        'rgba(139,92,246,0.4)',
        'rgba(192,132,252,0.35)',
        'rgba(26,26,26,0.7)',
      ];
      for (var i = 0; i < count; i++) {
        var x = Math.random() * w;
        var y = h - 5 - Math.random() * 25;
        var c = colors[Math.floor(Math.random() * colors.length)];
        var p = new Person(x, y, c);
        p.baseY = y;
        people.push(p);
      }
    }

    function animate() {
      if (isPaused) { animId = requestAnimationFrame(animate); return; }
      var rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Ground
      ctx.beginPath();
      ctx.moveTo(0, rect.height - 3);
      ctx.lineTo(rect.width, rect.height - 3);
      ctx.strokeStyle = 'rgba(201,168,76,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      people.forEach(function(p) {
        p.update(rect.width);
        p.draw(ctx);
      });

      animId = requestAnimationFrame(animate);
    }

    // Touch: tap to add person
    container.addEventListener('click', function(e) {
      var rect = container.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      if (people.length < maxPeople + 10) {
        var p = new Person(x, y, 'rgba(201,168,76,0.8)');
        p.baseY = y;
        people.push(p);
      }
    });

    resize();
    animate();

    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animate();
      }
    });
  })();

  /* ─────────────────────────────────────────────
     7. VIDEO PLAYER — Magnetic Button + Popover
     Functional controls, keyboard shortcuts
     ───────────────────────────────────────────── */
  (function initVideoPlayer() {
    var zone = document.querySelector('.skp-video-zone');
    if (!zone) return;
    var playBtn = zone.querySelector('.skp-play-btn-magnetic');
    var popover = document.querySelector('.skp-video-modal');
    if (!playBtn || !popover) return;
    var closeBtn = popover.querySelector('.skp-video-modal__close');

    // Find controls inside modal
    var modalPlayBtn = popover.querySelector('.skp-video-play');
    var modalSeekBar = popover.querySelector('.skp-video-seek');
    var modalSeekFill = popover.querySelector('.skp-video-seek-fill');
    var modalTime = popover.querySelector('.skp-video-time');
    var modalMuteBtn = popover.querySelector('.skp-video-mute');

    var isPlaying = false;
    var currentTime = 83; // 1:23
    var totalTime = 296;  // 4:56
    var isMuted = false;

    function formatTime(s) {
      var m = Math.floor(s / 60);
      var sec = Math.floor(s % 60);
      return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function updateTime() {
      if (modalTime) modalTime.textContent = formatTime(currentTime) + ' / ' + formatTime(totalTime);
      if (modalSeekFill) modalSeekFill.style.width = (currentTime / totalTime * 100) + '%';
    }

    // Magnetic button (desktop only)
    if (!isTouch) {
      var targetX = 0, targetY = 0, curX = 0, curY = 0;
      var isOver = false, lerp = 0.12, magFrame = null;

      function tickMagnetic() {
        if (!isOver) return;
        curX += (targetX - curX) * lerp;
        curY += (targetY - curY) * lerp;
        playBtn.style.transform = 'translate(' + curX.toFixed(1) + 'px, ' + curY.toFixed(1) + 'px)';
        magFrame = requestAnimationFrame(tickMagnetic);
      }

      zone.addEventListener('mousemove', function(e) {
        var rect = playBtn.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        targetX = Math.max(-10, Math.min(10, dx * 0.25));
        targetY = Math.max(-10, Math.min(10, dy * 0.25));
        if (!isOver) { isOver = true; tickMagnetic(); }
      });

      zone.addEventListener('mouseleave', function() {
        isOver = false;
        targetX = 0; targetY = 0;
        playBtn.style.transform = 'translate(0px, 0px)';
        if (magFrame) cancelAnimationFrame(magFrame);
      });
    }

    // Open popover
    zone.addEventListener('click', function() { openPopover(); });
    zone.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopover(); }
    });
    zone.setAttribute('tabindex', '0');
    zone.setAttribute('role', 'button');
    zone.setAttribute('aria-label', 'Open video player');

    function openPopover() {
      popover.style.display = 'flex';
      popover.style.opacity = '0';
      var rect = zone.getBoundingClientRect();
      var ox = ((rect.left + rect.width / 2) / window.innerWidth * 100).toFixed(1);
      var oy = ((rect.top + rect.height / 2) / window.innerHeight * 100).toFixed(1);

      if (typeof gsap !== 'undefined') {
        gsap.set(popover, { clipPath: 'circle(0% at ' + ox + '% ' + oy + '%)' });
        gsap.to(popover, { clipPath: 'circle(75% at 50% 50%)', opacity: 1, duration: 0.5, ease: 'power3.out' });
      } else {
        popover.style.transition = 'opacity 0.4s ease, clip-path 0.5s ease';
        popover.style.clipPath = 'circle(0% at ' + ox + '% ' + oy + '%)';
        popover.offsetHeight;
        popover.style.clipPath = 'circle(75% at 50% 50%)';
        popover.style.opacity = '1';
      }
      document.body.style.overflow = 'hidden';
    }

    function closePopover() {
      if (typeof gsap !== 'undefined') {
        gsap.to(popover, {
          clipPath: 'circle(0% at 50% 50%)', opacity: 0, duration: 0.35, ease: 'power3.in',
          onComplete: function() { popover.style.display = 'none'; popover.style.clipPath = ''; document.body.style.overflow = ''; }
        });
      } else {
        popover.style.clipPath = 'circle(0% at 50% 50%)';
        popover.style.opacity = '0';
        setTimeout(function() { popover.style.display = 'none'; popover.style.clipPath = ''; document.body.style.overflow = ''; }, 400);
      }
    }

    // Play/Pause toggle
    function togglePlay() {
      isPlaying = !isPlaying;
      if (modalPlayBtn) modalPlayBtn.textContent = isPlaying ? '⏸' : '▶';
      if (playBtn) playBtn.textContent = isPlaying ? '⏸' : '▶';
    }

    if (modalPlayBtn) modalPlayBtn.addEventListener('click', togglePlay);

    // Seek bar click
    if (modalSeekBar) {
      modalSeekBar.addEventListener('click', function(e) {
        var rect = modalSeekBar.getBoundingClientRect();
        var pct = (e.clientX - rect.left) / rect.width;
        currentTime = Math.floor(pct * totalTime);
        updateTime();
      });
    }

    // Mute toggle
    if (modalMuteBtn) {
      modalMuteBtn.addEventListener('click', function() {
        isMuted = !isMuted;
        modalMuteBtn.textContent = isMuted ? '🔇' : '🔊';
      });
    }

    // Close handlers
    if (closeBtn) closeBtn.addEventListener('click', closePopover);
    popover.addEventListener('click', function(e) { if (e.target === popover) closePopover(); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popover.style.display === 'flex') closePopover();
      if (e.key === ' ' && popover.style.display === 'flex') { e.preventDefault(); togglePlay(); }
    });

    // Simulate playback
    setInterval(function() {
      if (isPlaying && currentTime < totalTime) {
        currentTime++;
        updateTime();
      }
    }, 1000);

    updateTime();
  })();

})();
