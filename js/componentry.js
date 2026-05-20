/* ═══════════════════════════════════════════════════════════════
   CLOSING PLASMA — Canvas 2D Atmospheric Background
   ═══════════════════════════════════════════════════════════════
   Adapted from the WebGL GLSL shader (closing-plasma.tsx).
   Uses Canvas 2D + requestAnimationFrame for a plasma-like effect
   with FBM noise, mouse interaction, grain, sparkle, and vignette.
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const canvas = document.getElementById('crpCanvas');
  const container = document.getElementById('crp-demo');
  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // ── State ──
  let width = 0, height = 0;
  let dpr = 1;
  let mouseX = 0.5, mouseY = 0.5;
  let targetMouseX = 0.5, targetMouseY = 0.5;
  let time = 0;
  let isDark = 1;
  let animFrame = 0;
  let lastFrameTime = 0;

  // Settings
  const settings = {
    speed: 1,
    turbulence: 1,
    mouseInfluence: 1,
    grain: 1,
    sparkle: 1,
    vignette: 1,
    opacity: 1,
  };

  // Color palettes
  const palettes = {
    default: { darkA: [13,13,20], darkB: [31,37,64], darkC: [74,97,145], lightA: [240,242,247], lightB: [215,220,235], lightC: [188,197,224] },
    neon:    { darkA: [5,7,8],     darkB: [20,57,41],  darkC: [114,255,136], lightA: [240,242,247], lightB: [215,220,235], lightC: [188,197,224] },
    sunset:  { darkA: [26,10,46],  darkB: [60,20,30],  darkC: [255,107,107],  lightA: [255,240,230], lightB: [255,200,180], lightC: [255,170,150] },
    ocean:   { darkA: [10,22,40],  darkB: [20,50,80],  darkC: [79,172,254],   lightA: [230,240,255], lightB: [200,220,250], lightC: [170,200,240] },
    gold:    { darkA: [26,10,10],  darkB: [60,40,10],  darkC: [201,168,76],   lightA: [255,248,230], lightB: [240,220,180], lightC: [220,200,150] },
    purple:  { darkA: [45,27,105], darkB: [80,30,120], darkC: [232,121,249],  lightA: [245,235,255], lightB: [220,200,250], lightC: [200,170,240] },
  };

  let currentPalette = 'default';

  // ── Simplex-like noise (fast hash-based) ──
  const PERM_SIZE = 256;
  const perm = new Uint8Array(PERM_SIZE * 2);
  const gradP = new Array(PERM_SIZE);

  function seedNoise(seed) {
    const p = new Uint8Array(PERM_SIZE);
    for (let i = 0; i < PERM_SIZE; i++) p[i] = i;
    // Fisher-Yates with seed
    let s = seed;
    for (let i = PERM_SIZE - 1; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647;
      const j = s % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < PERM_SIZE; i++) {
      perm[i] = perm[i + PERM_SIZE] = p[i];
      gradP[i] = {
        x: Math.cos(p[i] / PERM_SIZE * Math.PI * 2),
        y: Math.sin(p[i] / PERM_SIZE * Math.PI * 2),
      };
    }
  }
  seedNoise(42);

  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + t * (b - a); }

  function grad2d(hash, x, y) {
    const g = gradP[hash & 255];
    return g.x * x + g.y * y;
  }

  function noise2D(x, y) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const aa = perm[perm[X] + Y];
    const ab = perm[perm[X] + Y + 1];
    const ba = perm[perm[X + 1] + Y];
    const bb = perm[perm[X + 1] + Y + 1];
    return lerp(
      lerp(grad2d(aa, xf, yf), grad2d(ba, xf - 1, yf), u),
      lerp(grad2d(ab, xf, yf - 1), grad2d(bb, xf - 1, yf - 1), u),
      v
    );
  }

  function fbm(x, y, turb) {
    let total = 0, amp = 0.5, freq = 1;
    const rotAngle = 0.45;
    const cosR = Math.cos(rotAngle), sinR = Math.sin(rotAngle);
    for (let i = 0; i < 5; i++) {
      total += noise2D(x * freq, y * freq) * amp;
      const rx = x * cosR - y * sinR;
      const ry = x * sinR + y * cosR;
      x = rx; y = ry;
      freq *= lerp(1.85, 2.35, Math.min(turb, 2) * 0.5);
      amp *= 0.5;
    }
    return total;
  }

  // ── Resize ──
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const rect = container.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width * dpr));
    height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }

  resize();
  const resizeObserver = new ResizeObserver(function() { resize(); });
  resizeObserver.observe(container);

  // ── Mouse ──
  container.addEventListener('pointermove', function(e) {
    const rect = container.getBoundingClientRect();
    targetMouseX = (e.clientX - rect.left) / rect.width;
    targetMouseY = 1 - (e.clientY - rect.top) / rect.height;
  });
  container.addEventListener('pointerleave', function() {
    targetMouseX = 0.5;
    targetMouseY = 0.5;
  });

  // ── Render ──
  function render(now) {
    const delta = lastFrameTime ? (now - lastFrameTime) / 1000 : 0.016;
    lastFrameTime = now;
    time += delta * settings.speed;

    // Smooth mouse
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    const pal = palettes[currentPalette] || palettes.default;
    const darkA = pal.darkA, darkB = pal.darkB, darkC = pal.darkC;
    const lightA = pal.lightA, lightB = pal.lightB, lightC = pal.lightC;

    const aspect = width / Math.max(height, 1);
    const invW = 1 / width;
    const invH = 1 / height;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const t = time * 0.15;
    const turb = settings.turbulence;
    const mouseInf = settings.mouseInfluence;
    const grainAmt = settings.grain;
    const sparkleAmt = settings.sparkle;
    const vignetteAmt = settings.vignette;
    const alpha = settings.opacity;

    // Mouse in aspect-corrected space
    const mx = (mouseX - 0.5) * aspect;
    const my = (mouseY - 0.5);

    // Render at reduced resolution for performance, then scale
    const step = dpr > 1 ? 2 : 1;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const uvx = x * invW;
        const uvy = y * invH;

        // Aspect-corrected position
        let px = (uvx - 0.5) * aspect;
        let py = (uvy - 0.5);

        // Mouse influence
        const dx = px - mx;
        const dy = py - my;
        const dMouse = Math.sqrt(dx * dx + dy * dy);
        px += (mx - px) * 0.02 * mouseInf * Math.max(0, 1 - dMouse / 0.45);
        py += (my - py) * 0.02 * mouseInf * Math.max(0, 1 - dMouse / 0.45);

        // Flow field
        const flowX = fbm(px + t * 0.2, px + t * 0.1, turb);
        const flowY = fbm(px - t * 0.1, px + t * 0.3, turb);

        // Noise
        let n = fbm(px * 2 + flowX * 1.45, py * 2 + flowY * 1.45, turb);

        // Ridges
        const ridgeNoise = noise2D(px * 4 + n, py * 4 + n);
        let ridges = 1 - Math.abs(ridgeNoise * 2);
        ridges = ridges * ridges * ridges;

        // Color mixing
        const colorA = isDark ? darkA : lightA;
        const colorB = isDark ? darkB : lightB;
        const colorC = isDark ? darkC : lightC;

        const t1 = Math.max(0, Math.min(1, n * 0.5 + 0.5));
        const t2 = Math.max(0, Math.min(1, n * 0.52 + ridges * 0.48));

        let r = colorA[0] + (colorB[0] - colorA[0]) * t1;
        let g = colorA[1] + (colorB[1] - colorA[1]) * t1;
        let b = colorA[2] + (colorB[2] - colorA[2]) * t1;

        r = r + (colorC[0] - r) * t2;
        g = g + (colorC[1] - g) * t2;
        b = b + (colorC[2] - b) * t2;

        // Sparkle
        if (sparkleAmt > 0) {
          const sparkleNoise = Math.pow(Math.max(0, noise2D(x * 0.2 + t * 2, y * 0.2 + t * 2)), 18) * 0.5 * sparkleAmt;
          const sr = isDark ? 0.8 : 0.56;
          const sg = isDark ? 0.9 : 0.58;
          const sb = isDark ? 1.0 : 0.72;
          r += sr * sparkleNoise * 255;
          g += sg * sparkleNoise * 255;
          b += sb * sparkleNoise * 255;
        }

        // Vignette
        const dist = Math.sqrt(px * px + py * py);
        if (isDark && vignetteAmt > 0) {
          const vig = 1 - Math.max(0, Math.min(1, (dist - 0.5) / (1.8 - 0.25 * isDark)));
          r *= (1 - vig * vignetteAmt);
          g *= (1 - vig * vignetteAmt);
          b *= (1 - vig * vignetteAmt);
        } else if (!isDark && vignetteAmt > 0) {
          const vig = 1 - Math.max(0, Math.min(1, (dist - 0.4) / 1.05));
          r = 255 + (r - 255) * vig;
          g = 255 + (g - 255) * vig;
          b = 255 + (b - 255) * vig;
        }

        // Grain
        if (grainAmt > 0) {
          const grainVal = (Math.sin((x + y * 127 + t * 50) * 0.012345) * 0.5 + 0.5 - 0.5) * 0.06 * grainAmt * 255;
          r += grainVal;
          g += grainVal;
          b += grainVal;
        }

        // Clamp
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));

        // Write pixels (fill step x step block)
        for (let sy = 0; sy < step && y + sy < height; sy++) {
          for (let sx = 0; sx < step && x + sx < width; sx++) {
            const idx = ((y + sy) * width + (x + sx)) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = alpha * 255;
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
    animFrame = requestAnimationFrame(render);
  }

  animFrame = requestAnimationFrame(render);

  // ── Controls ──
  function bindSlider(id, key) {
    const el = document.getElementById(id);
    const valEl = document.getElementById(id.replace('crp-', 'crp-val-'));
    if (!el) return;
    el.addEventListener('input', function() {
      settings[key] = parseFloat(this.value);
      if (valEl) valEl.textContent = parseFloat(this.value).toFixed(1);
    });
  }

  bindSlider('crp-speed', 'speed');
  bindSlider('crp-turbulence', 'turbulence');
  bindSlider('crp-mouse', 'mouseInfluence');
  bindSlider('crp-grain', 'grain');
  bindSlider('crp-sparkle', 'sparkle');
  bindSlider('crp-vignette', 'vignette');
  bindSlider('crp-opacity', 'opacity');

  // Theme buttons
  function setTheme(theme) {
    isDark = (theme === 'dark' || theme === 'neon') ? 1 : 0;
    if (theme === 'neon') currentPalette = 'neon';
    else if (theme === 'dark') currentPalette = 'default';
    else currentPalette = 'default';

    document.querySelectorAll('.crp-theme-btn').forEach(function(btn) {
      btn.classList.remove('active');
    });
    const btn = document.getElementById('crp-theme-' + theme);
    if (btn) btn.classList.add('active');
  }

  const themeDark = document.getElementById('crp-theme-dark');
  const themeLight = document.getElementById('crp-theme-light');
  const themeNeon = document.getElementById('crp-theme-neon');

  if (themeDark) themeDark.addEventListener('click', function() { setTheme('dark'); });
  if (themeLight) themeLight.addEventListener('click', function() { setTheme('light'); });
  if (themeNeon) themeNeon.addEventListener('click', function() { setTheme('neon'); });

  // Color presets
  document.querySelectorAll('.crp-color-swatch .swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      const preset = this.getAttribute('data-preset');
      if (preset && palettes[preset]) {
        currentPalette = preset;
        isDark = 1;
        document.querySelectorAll('.crp-theme-btn').forEach(function(btn) {
          btn.classList.remove('active');
        });
      }
    });
  });

  // Cleanup
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(animFrame);
    } else {
      lastFrameTime = 0;
      animFrame = requestAnimationFrame(render);
    }
  });

})();
