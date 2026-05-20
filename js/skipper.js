/* ═══════════════════════════════════════════════════════════════
   SKIPPER UI — Full Interactive Component Scripts
   ═══════════════════════════════════════════════════════════════
   Dependencies: GSAP 3 + ScrollTrigger, Swiper.js 11
   All components use DOM-ready checks to prevent errors.
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ─────────────────────────────────────────────
     1. HOVER EXPAND — Image Gallery
     ───────────────────────────────────────────── */
  (function initHoverExpand() {
    const container = document.querySelector('.skp-hover-expand');
    if (!container) return;

    const items = container.querySelectorAll('.skp-hover-expand__item');
    if (!items.length) return;

    items.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        items.forEach(function(el) {
          el.classList.remove('skp-hover-expand__item--active');
          el.classList.add('skp-hover-expand__item--default');
        });
        this.classList.remove('skp-hover-expand__item--default');
        this.classList.add('skp-hover-expand__item--active');
      });
    });

    container.addEventListener('mouseleave', function() {
      items.forEach(function(el, i) {
        el.classList.remove('skp-hover-expand__item--active');
        el.classList.add('skp-hover-expand__item--default');
      });
      // Set middle item as active by default
      var mid = Math.floor(items.length / 2);
      items[mid].classList.remove('skp-hover-expand__item--default');
      items[mid].classList.add('skp-hover-expand__item--active');
    });
  })();

  /* ─────────────────────────────────────────────
     2. STICKY CARD STACK — Scroll Rotation (GSAP)
     ───────────────────────────────────────────── */
  (function initStickyCards() {
    var container = document.querySelector('.skp-sticky-cards');
    if (!container) return;

    var cards = container.querySelectorAll('.skp-sticky-cards__card');
    if (!cards.length) return;

    // Check if GSAP + ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    var totalCards = cards.length;

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      start: 'top top+=80',
      end: 'bottom+=300 top',
      pin: true,
      pinSpacing: false,
    });

    // Animate each card on scroll
    cards.forEach(function(card, i) {
      if (i === 0) return; // First card stays in place

      var scale = 1 - (i * 0.08);
      var rotate = i % 2 === 0 ? (i * 2) : -(i * 2);
      var yPercent = i * 3;

      gsap.to(card, {
        scale: scale,
        rotate: rotate,
        yPercent: yPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top+=80',
          end: 'bottom+=300 top',
          scrub: 1,
        }
      });
    });

    // Refresh on load
    ScrollTrigger.refresh();
  })();

  /* ─────────────────────────────────────────────
     3. SCROLL IMAGE REVEAL — Scale & Rotate (GSAP)
     ───────────────────────────────────────────── */
  (function initScrollReveal() {
    var container = document.querySelector('.skp-scroll-reveal');
    if (!container) return;

    var img = container.querySelector('.skp-scroll-reveal__img');
    if (!img) return;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set(img, { scale: 0.8, rotation: -8, opacity: 0.6 });

    // Animate on scroll
    gsap.to(img, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'center center',
        scrub: 1.5,
      }
    });
  })();

  /* ─────────────────────────────────────────────
     4. CARD SWIPE CAROUSEL — Swiper Cards Effect
     ───────────────────────────────────────────── */
  (function initCardSwipeCarousel() {
    var container = document.querySelector('.skp-card-swipe-carousel');
    if (!container) return;

    if (typeof Swiper === 'undefined') return;

    var prevBtn = container.querySelector('.skp-carousel-prev');
    var nextBtn = container.querySelector('.skp-carousel-next');

    var swiper = new Swiper(container, {
      effect: 'cards',
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 12,
        perSlideRotate: 4,
        rotate: true,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });

    // Store instance for external access
    container._swiper = swiper;
  })();

  /* ─────────────────────────────────────────────
     5. PERSPECTIVE CAROUSEL — Swiper Coverflow
     ───────────────────────────────────────────── */
  (function initPerspectiveCarousel() {
    var container = document.querySelector('.skp-carousel-perspective');
    if (!container) return;

    if (typeof Swiper === 'undefined') return;

    var prevBtn = container.querySelector('.skp-carousel-perspective__arrow--prev');
    var nextBtn = container.querySelector('.skp-carousel-perspective__arrow--next');
    var pagination = container.querySelector('.skp-carousel-perspective__pagination');

    var swiper = new Swiper(container, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 160,
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
      on: {
        slideChange: function() {
          // Update autoplay bar
          var bars = container.querySelectorAll('.skp-carousel-perspective__autoplay-bar');
          bars.forEach(function(bar) { bar.style.width = '0%'; });
        }
      }
    });

    container._swiper = swiper;
  })();

  /* ─────────────────────────────────────────────
     6. CROWD CANVAS — Canvas Animation
     ───────────────────────────────────────────── */
  (function initCrowdCanvas() {
    var container = document.querySelector('.skp-crowd-canvas');
    if (!container) return;

    var canvas = document.getElementById('crowdCanvas');
    if (!canvas) {
      // Create canvas if it doesn't exist
      canvas = document.createElement('canvas');
      canvas.id = 'crowdCanvas';
      container.appendChild(canvas);
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var people = [];
    var animationId = null;
    var resizeTimeout = null;

    // Person class
    function Person(x, y, color) {
      this.x = x;
      this.y = y;
      this.baseY = y;
      this.color = color || 'rgba(26, 26, 26, 0.7)';
      this.speed = 0.3 + Math.random() * 0.8;
      this.radius = 3 + Math.random() * 4;
      this.headRadius = this.radius * 0.6;
      this.walkPhase = Math.random() * Math.PI * 2;
      this.walkSpeed = 0.03 + Math.random() * 0.04;
      this.walkAmplitude = 2 + Math.random() * 3;
      this.direction = Math.random() > 0.5 ? 1 : -1;
    }

    Person.prototype.update = function(canvasWidth) {
      this.x += this.speed * this.direction;
      this.walkPhase += this.walkSpeed;
      this.y = this.baseY + Math.sin(this.walkPhase) * this.walkAmplitude;

      // Wrap around
      if (this.x > canvasWidth + 20) this.x = -20;
      if (this.x < -20) this.x = canvasWidth + 20;
    };

    Person.prototype.draw = function(ctx) {
      var bobY = Math.sin(this.walkPhase) * 1.5;

      // Body (ellipse)
      ctx.beginPath();
      ctx.ellipse(this.x, this.y - this.headRadius * 2 + bobY, this.radius * 0.7, this.radius * 1.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      // Head (circle)
      ctx.beginPath();
      ctx.arc(this.x, this.y - this.headRadius * 3.5 + bobY, this.headRadius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    function resize() {
      var rect = container.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      // Reinitialize people on resize
      initPeople(rect.width, rect.height);
    }

    function initPeople(width, height) {
      people = [];
      var count = Math.floor(width / 18);
      var colors = [
        'rgba(26, 26, 26, 0.7)',
        'rgba(201, 168, 76, 0.5)',
        'rgba(99, 102, 241, 0.4)',
        'rgba(139, 92, 246, 0.4)',
        'rgba(192, 132, 252, 0.35)',
      ];

      for (var i = 0; i < count; i++) {
        var x = (i / count) * width + Math.random() * 20;
        var y = height - 10 - Math.random() * 30;
        var color = colors[Math.floor(Math.random() * colors.length)];
        var p = new Person(x, y, color);
        p.baseY = y;
        people.push(p);
      }
    }

    function animate() {
      var rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw ground line
      ctx.beginPath();
      ctx.moveTo(0, rect.height - 5);
      ctx.lineTo(rect.width, rect.height - 5);
      ctx.strokeStyle = 'rgba(201, 168, 76, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update and draw people
      people.forEach(function(p) {
        p.update(rect.width);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resize();
    animate();

    // Resize handler with debounce
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    });

    // Cleanup on page visibility change
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        if (animationId) cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
  })();

  /* ─────────────────────────────────────────────
     7. VIDEO PLAYER — Magnetic Button + Popover
     ───────────────────────────────────────────── */
  (function initVideoPlayer() {
    var zone = document.querySelector('.skp-video-zone');
    if (!zone) return;

    var playBtn = zone.querySelector('.skp-play-btn-magnetic');
    var popover = document.querySelector('.skp-video-modal');
    var closeBtn = popover ? popover.querySelector('.skp-video-modal__close') : null;

    if (!playBtn || !popover) return;

    // Magnetic button effect
    var targetX = 0, targetY = 0;
    var currentX = 0, currentY = 0;
    var isOver = false;
    var lerpFactor = 0.15;
    var animFrame = null;

    function animateMagnetic() {
      if (!isOver) return;

      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      playBtn.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';

      animFrame = requestAnimationFrame(animateMagnetic);
    }

    zone.addEventListener('mousemove', function(e) {
      var rect = playBtn.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      var deltaX = e.clientX - centerX;
      var deltaY = e.clientY - centerY;

      // Magnetic pull (max 12px)
      targetX = Math.max(-12, Math.min(12, deltaX * 0.3));
      targetY = Math.max(-12, Math.min(12, deltaY * 0.3));

      if (!isOver) {
        isOver = true;
        animateMagnetic();
      }
    });

    zone.addEventListener('mouseleave', function() {
      isOver = false;
      targetX = 0;
      targetY = 0;
      playBtn.style.transform = 'translate(0px, 0px)';
      if (animFrame) cancelAnimationFrame(animFrame);
    });

    // Popover open with clip-path circle animation
    zone.addEventListener('click', function(e) {
      if (e.target === playBtn || playBtn.contains(e.target)) {
        openPopover();
      }
    });

    function openPopover() {
      popover.style.display = 'flex';
      popover.style.opacity = '0';

      // Get click position for clip-path origin
      var rect = zone.getBoundingClientRect();
      var originX = (rect.left + rect.width / 2) / window.innerWidth * 100;
      var originY = (rect.top + rect.height / 2) / window.innerHeight * 100;

      // Use GSAP if available, fallback to CSS transition
      if (typeof gsap !== 'undefined') {
        gsap.set(popover, { clipPath: 'circle(0% at ' + originX + '% ' + originY + '%)' });
        gsap.to(popover, {
          clipPath: 'circle(80% at 50% 50%)',
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        });
      } else {
        popover.style.transition = 'opacity 0.4s ease, clip-path 0.6s ease';
        popover.style.clipPath = 'circle(0% at ' + originX + '% ' + originY + '%)';
        // Force reflow
        popover.offsetHeight;
        popover.style.clipPath = 'circle(80% at 50% 50%)';
        popover.style.opacity = '1';
      }
    }

    function closePopover() {
      if (typeof gsap !== 'undefined') {
        gsap.to(popover, {
          clipPath: 'circle(0% at 50% 50%)',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in',
          onComplete: function() {
            popover.style.display = 'none';
            popover.style.clipPath = '';
          }
        });
      } else {
        popover.style.clipPath = 'circle(0% at 50% 50%)';
        popover.style.opacity = '0';
        setTimeout(function() {
          popover.style.display = 'none';
          popover.style.clipPath = '';
        }, 400);
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closePopover);
    }

    // Close on backdrop click
    popover.addEventListener('click', function(e) {
      if (e.target === popover) closePopover();
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popover.style.display === 'flex') {
        closePopover();
      }
    });
  })();

})();
