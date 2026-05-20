/* ═══════════════════════════════════════════════════════════════
   CLOSING PLASMA — Canvas 2D Atmospheric Background
   ═══════════════════════════════════════════════════════════════
   Optimized plasma effect using scaled canvas + ImageData.
   Designed for real-time 30fps performance in the browser.
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const canvas = document.getElementById('crpCanvas');
  const container = document.getElementById('crp-demo');
  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  // ── State ──
  let displayW = 0, displayH = 0;
  let renderW = 0, renderH = 0; // lower-res render target
  let scale = 4; // render at 1/4 resolution
  let mouseX = 0.5, mouseY = 0.5;
  let targetMouseX = 0.5, targetMouseY = 0.5;
  let time = 0;
  let isDark = 1;
  let animFrame = 0;
  let lastTime = 0;
  let imageData = null;
  let pixels = null;

  const settings = {
    speed: 1,
    turbulence: 1,
    mouseInfluence: 1,
    grain: 1,
    sparkle: 1,
    vignette: 1,
    opacity: 1,
  };

  // Color palettes [r, g, b] 0-255
  const palettes = {
    default: { A: [13,13,20], B: [31,37,64], C: [74,97,145] },
    neon:    { A: [5,7,8],    B: [20,57,41],  C: [114,255,136] },
    sunset:  { A: [26,10,46], B: [60,20,30],  C: [255,107,107] },
  ocean:   { A: [10,22,40], B: [20,50,80],  C: [79,172,254] },
    gold:    { A: [26,10,10], B: [60,40,10],  C: [201,168,76] },
    purple:  { A: [45,27,105],B: [80,30,120], C: [232,121,240] },
  };

  let currentPalette = 'default';

  // ── Fast noise (hash-based, no allocation) ──
  function hash(x, y) {
    let h = x * 374761393 + y * 668265263;
    h = (h ^ (h >> 13)) * 1274126177;
    h = h ^ (h >> 16);
    return (h & 0x7fffffff) / 0x7fffffff;
  }

  function smoothNoise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx);
    const sy = fy * fy * (3 - 2 * fy);
    const n00 = hash(ix, iy);
    const n10 = hash(ix + 1, iy);
    const n01 = hash(ix, iy + 1);
    const n11 = hash(ix + 1, iy + 1);
    return n00 * (1-sx)*(1-sy) + n10 * sx*(1-sy) + n01 * (1-sx)*sy + n11 * sx*sy;
  }

  function fbm(x, y, turb) {
    let v = 0, amp = 0.5, freq = 1;
    for (let i = 0; i < 4; i++) {
      v += smoothNoise(x * freq, y * freq) * amp;
      freq *= 2.0 + turb * 0.15;
      amp *= 0.5;
    }
    return v;
  }

  // ── Resize ──
  function resize() {
    const rect = container.getBoundingClientRect();
    displayW = rect.width;
    displayH = rect.height;
    // Render at reduced resolution
    renderW = Math.max(1, Math.ceil(displayW / scale));
    renderH = Math.max(1, Math.ceil(displayH / scale));
    canvas.width = displayW;
    canvas.height = displayH;
    imageData = ctx.createImageData(renderW, renderH);
    pixels = imageData.data;
  }

  resize();
  window.addEventListener('resize', resize);

  // ── Mouse ──
  container.addEventListener('pointermove', function(e) {
    const rect = container.getBoundingClientRect();
    targetMouseX = (e.clientX - rect.left) / rect.width;
    targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
  });
  container.addEventListener('pointerleave', function() {
    targetMouseX = 0.5;
    targetMouseY = 0.5;
  });

  // ── Render ──
  function render(now) {
    const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0.016;
    lastTime = now;
    time += dt * settings.speed;

    // Smooth mouse
    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;

    const pal = palettes[currentPalette] || palettes.default;
    const cA = pal.A, cB = pal.B, cC = pal.C;
    const t = time * 0.12;
    const turb = settings.turbulence;
    const mInf = settings.mouseInfluence;
    const aspect = renderW / renderH;

    // Mouse in normalized space
    const mx = (mouseX - 0.5) * aspect;
    const my = (mouseY - 0.5);

    const invRW = 1 / renderW;
    const invRH = 1 / renderH;

    for (let py = 0; py < renderH; py++) {
      for (let px = 0; px < renderW; px++) {
        let ux = px * invRW;
        let uy = py * invRH;

        // Aspect-corrected position
        let x = (ux - 0.5) * aspect;
        let y = (uy - 0.5);

        // Mouse influence
        const dx = x - mx;
        const dy = y - my;
        const dMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseStrength = Math.max(0, 1 - dMouse / 0.5) * 0.025 * mInf;
        x += (mx - x) * mouseStrength;
        y += (my - y) * mouseStrength;

        // Flow field
        const flowX = fbm(x + t * 0.15, y + t * 0.08, turb) - 0.5;
        const flowY = fbm(x - t * 0.08, y + t * 0.2, turb) - 0.5;

        // Main noise
        let n = fbm(x * 1.8 + flowX * 1.2, y * 1.8 + flowY * 1.2, turb);
        n = n * 0.5 + 0.5; // normalize to 0-1

        // Ridges
        const ridgeVal = smoothNoise(x * 3.5 + n * 2, y * 3.5 + n * 2);
        const ridges = Math.pow(1 - Math.abs(ridgeVal * 2 - 1), 2.5);

        // Color mixing
        const blend1 = Math.max(0, Math.min(1, n));
        const blend2 = Math.max(0, Math.min(1, n * 0.6 + ridges * 0.4));

        let r = cA[0] + (cB[0] - cA[0]) * blend1;
        let g = cA[1] + (cB[1] - cA[1]) * blend1;
        let b = cA[2] + (cB[2] - cA[2]) * blend1;

        r = r + (cC[0] - r) * blend2;
        g = g + (cC[1] - g) * blend2;
        b = b + (cC[2] - b) * blend2;

        // Sparkle
        if (settings.sparkle > 0) {
          const sp = Math.pow(Math.max(0, smoothNoise(px * 0.15 + t * 3, py * 0.15 + t * 2.5)), 12) * settings.sparkle;
          const spBright = isDark ? 220 : 180;
          r += sp * spBright;
          g += sp * spBright;
          b += sp * (isDark ? 255 : 200);
        }

        // Vignette
        const dist = Math.sqrt(x * x + y * y);
        if (isDark) {
          const vig = 1 - Math.max(0, Math.min(1, (dist - 0.4) / 1.2)) * settings.vignette;
          r *= vig; g *= vig; b *= vig;
        } else {
          const vig = 1 - Math.max(0, Math.min(1, (dist - 0.3) / 0.9)) * settings.vignette * 0.5;
          r = 255 - (255 - r) * vig;
          g = 255 - (255 - g) * vig;
          b = 255 - (255 - b) * vig;
        }

        // Grain
        if (settings.grain > 0) {
          const grain = (hash(px + time * 100, py) - 0.5) * 15 * settings.grain;
          r += grain; g += grain; b += grain;
        }

        // Light mode: blend towards white
        if (!isDark) {
          r = r * 0.3 + 240 * 0.7;
          g = g * 0.3 + 242 * 0.7;
          b = b * 0.3 + 247 * 0.7;
        }

        // Clamp
        r = r < 0 ? 0 : r > 255 ? 255 : r;
        g = g < 0 ? 0 : g > 255 ? 255 : g;
        b = b < 0 ? 0 : b > 255 ? 255 : b;

        const idx = (py * renderW + px) * 4;
        pixels[idx] = r;
        pixels[idx + 1] = g;
        pixels[idx + 2] = b;
        pixels[idx + 3] = settings.opacity * 255;
      }
    }

    // Draw scaled-up image
    // Use OffscreenCanvas if available, otherwise draw directly
    if (typeof OffscreenCanvas !== 'undefined') {
      try {
        const offscreen = new OffscreenCanvas(renderW, renderH);
        const offCtx = offscreen.getContext('2d');
        offCtx.putImageData(imageData, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';
        ctx.drawImage(offscreen, 0, 0, displayW, displayH);
      } catch(e) {
        // Fallback: put at native size (will be small but visible)
        ctx.putImageData(imageData, 0, 0);
      }
    } else {
      // Fallback: create temp canvas
      const tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = renderW;
      tmpCanvas.height = renderH;
      tmpCanvas.getContext('2d').putImageData(imageData, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(tmpCanvas, 0, 0, displayW, displayH);
    }

    animFrame = requestAnimationFrame(render);
  }

  animFrame = requestAnimationFrame(render);

  // ── Controls ──
  function bindSlider(id, key) {
    const el = document.getElementById(id);
    const valEl = document.getElementById('crp-val-' + id.replace('crp-', ''));
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

  const td = document.getElementById('crp-theme-dark');
  const tl = document.getElementById('crp-theme-light');
  const tn = document.getElementById('crp-theme-neon');
  if (td) td.addEventListener('click', function() { setTheme('dark'); });
  if (tl) tl.addEventListener('click', function() { setTheme('light'); });
  if (tn) tn.addEventListener('click', function() { setTheme('neon'); });

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

  // Cleanup on visibility change
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(animFrame);
    } else {
      lastTime = 0;
      animFrame = requestAnimationFrame(render);
    }
  });

})();
