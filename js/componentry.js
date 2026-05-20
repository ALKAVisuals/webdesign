/* ═══════════════════════════════════════════════════════════════
   COMPONENTRY.FUN — Full Interactive Component Scripts
   ═══════════════════════════════════════════════════════════════
   Components:
   1. ClosingPlasma — WebGL shader plasma background
   2. NoiseField — Animated noise-based pattern generator
   3. GradientMesh — Mesh gradient with mouse parallax
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     1. CLOSING PLASMA — WebGL Shader Background
     ═══════════════════════════════════════════════════════════ */
  (function initClosingPlasma() {
    const container = document.getElementById('crp-demo');
    if (!container) return;

    // Remove old canvas if exists
    const oldCanvas = document.getElementById('crpCanvas');
    if (oldCanvas) oldCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'crpCanvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    const overlay = container.querySelector('.crp-overlay');
    container.insertBefore(canvas, overlay);

    const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false });
    if (!gl) {
      container.style.background = 'linear-gradient(135deg, #0d0d14 0%, #1f2540 50%, #4a6191 100%)';
      return;
    }

    const VERTEX_SHADER = 'attribute vec2 position;void main(){gl_Position=vec4(position,0.0,1.0);}';

    const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;
uniform float u_isDark;uniform float u_speed;uniform float u_turbulence;
uniform float u_mouseInfluence;uniform float u_grain;uniform float u_sparkle;
uniform float u_vignette;uniform float u_opacity;
uniform vec3 u_darkA;uniform vec3 u_darkB;uniform vec3 u_darkC;
uniform vec3 u_lightA;uniform vec3 u_lightB;uniform vec3 u_lightC;
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
float fbm(vec2 p,float turbulence){
  float total=0.0,amp=0.5,freq=1.0;
  mat2 rot=mat2(cos(0.45),sin(0.45),-sin(0.45),cos(0.45));
  for(int i=0;i<5;i++){total+=snoise(p*freq)*amp;p=rot*p;freq*=mix(1.85,2.35,clamp(turbulence,0.0,2.0)*0.5);amp*=0.5;}
  return total;
}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  float aspect=u_res.x/max(u_res.y,1.0);
  vec2 p=(uv-0.5)*vec2(aspect,1.0);
  float t=u_time*(0.15*u_speed);
  vec2 mouse=(u_mouse-0.5)*vec2(aspect,1.0);
  float dMouse=length(p-mouse);
  p+=(mouse-p)*0.02*u_mouseInfluence*smoothstep(0.45,0.0,dMouse);
  vec2 flow=vec2(fbm(p+vec2(t*0.2,t*0.1),u_turbulence),fbm(p+vec2(-t*0.1,t*0.3),u_turbulence));
  float n=fbm(p*2.0+flow*1.45,u_turbulence);
  float ridges=1.0-abs(snoise(p*4.0+n)*2.0);ridges=pow(ridges,3.0);
  vec3 colorA=mix(u_lightA,u_darkA,u_isDark);
  vec3 colorB=mix(u_lightB,u_darkB,u_isDark);
  vec3 colorC=mix(u_lightC,u_darkC,u_isDark);
  vec3 col=mix(colorA,colorB,smoothstep(-0.5,0.5,n));
  col=mix(col,colorC,smoothstep(0.25,1.0,n*0.52+ridges*0.48));
  float sparkle=pow(max(0.0,snoise(gl_FragCoord.xy*0.2+t*2.0)),18.0)*0.5*u_sparkle;
  vec3 sparkleColor=mix(vec3(0.56,0.58,0.72),vec3(0.8,0.9,1.0),u_isDark);
  col+=sparkleColor*sparkle;
  float vigDark=1.0-smoothstep(0.5,mix(1.8,1.55,u_isDark),length(p));
  mix(col,col*vigDark,u_isDark*u_vignette);
  float vigLight=1.0-smoothstep(0.4,1.45,length(p));
  col=mix(mix(vec3(1.0),col,vigLight),col,u_isDark);
  float grain=(fract(sin(dot(gl_FragCoord.xy+t*50.0,vec2(12.9898,78.233)))*43758.5453)-0.5)*(0.06*u_grain);
  col+=grain;
  gl_FragColor=vec4(clamp(col,0.0,1.0),u_opacity);
}`;

    function compileShader(type, source) {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { gl.deleteShader(s); return null; }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const posLoc = gl.getAttribLocation(program, 'position');
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uniforms = {};
    ['u_res','u_time','u_mouse','u_isDark','u_speed','u_turbulence','u_mouseInfluence','u_grain','u_sparkle','u_vignette','u_opacity','u_darkA','u_darkB','u_darkC','u_lightA','u_lightB','u_lightC'].forEach(function(name) {
      uniforms[name] = gl.getUniformLocation(program, name);
    });

    const settings = { speed: 1, turbulence: 1, mouseInfluence: 1, grain: 1, sparkle: 1, vignette: 1, opacity: 1 };
    let isDark = 1, mouseX = 0.5, mouseY = 0.5, targetMouseX = 0.5, targetMouseY = 0.5;
    let animFrame = 0, startTime = performance.now();
    let frameCount = 0, lastFpsTime = 0, currentFps = 60;

    function hexToRgb(hex) {
      const h = hex.replace('#', '');
      return [parseInt(h.slice(0,2),16)/255, parseInt(h.slice(2,4),16)/255, parseInt(h.slice(4,6),16)/255];
    }

    const palettes = {
      default: { dA:'#0d0d14', dB:'#1f2540', dC:'#4a6191', lA:'#f0f2f7', lB:'#d7dceb', lC:'#bcc5e0' },
      neon:    { dA:'#050708', dB:'#143929', dC:'#72ff88', lA:'#f0f2f7', lB:'#d7dceb', lC:'#bcc5e0' },
      sunset:  { dA:'#1a0a2e', dB:'#3c141e', dC:'#ff6b6b', lA:'#fff0e6', lB:'#ffc8b4', lC:'#ffaa96' },
      ocean:   { dA:'#0a1628', dB:'#143250', dC:'#4facfe', lA:'#e6f0ff', lB:'#c8dcfa', lC:'#aaf0f0' },
      gold:    { dA:'#1a0a0a', dB:'#3c280a', dC:'#c9a84c', lA:'#fff8e6', lB:'#f0dcc0', lC:'#dcc896' },
      purple:  { dA:'#2d1b69', dB:'#501e78', dC:'#e879f9', lA:'#f5ebff', lB:'#dcc8fa', lC:'#c8aaf0' },
      inferno: { dA:'#000000', dB:'#4a0000', dC:'#ff4500', lA:'#fff5e6', lB:'#ffcc99', lC:'#ff9966' },
      aurora:  { dA:'#0a1a1a', dB:'#0a3a3a', dC:'#00ff88', lA:'#e6fff0', lB:'#b3ffcc', lC:'#66ffaa' },
      cosmic:  { dA:'#0a0a1a', dB:'#1a0a3a', dC:'#8b5cf6', lA:'#f0e6ff', lB:'#d4b3ff', lC:'#a78bfa' },
      ember:   { dA:'#1a0a00', dB:'#3a1a00', dC:'#f59e0b', lA:'#fffbe6', lB:'#fef3c7', lC:'#fcd34d' },
    };

    function applyPalette(name) {
      const pal = palettes[name] || palettes.default;
      const dA = hexToRgb(pal.dA), dB = hexToRgb(pal.dB), dC = hexToRgb(pal.dC);
      const lA = hexToRgb(pal.lA), lB = hexToRgb(pal.lB), lC = hexToRgb(pal.lC);
      gl.uniform3f(uniforms.uDarkA, dA[0], dA[1], dA[2]);
      gl.uniform3f(uniforms.uDarkB, dB[0], dB[1], dB[2]);
      gl.uniform3f(uniforms.uDarkC, dC[0], dC[1], dC[2]);
      gl.uniform3f(uniforms.uLightA, lA[0], lA[1], lA[2]);
      gl.uniform3f(uniforms.uLightB, lB[0], lB[1], lB[2]);
      gl.uniform3f(uniforms.uLightC, lC[0], lC[1], lC[2]);
    }
    applyPalette('default');

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.uRes, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    container.addEventListener('pointermove', function(e) {
      const rect = container.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width;
      targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    });
    container.addEventListener('pointerleave', function() { targetMouseX = 0.5; targetMouseY = 0.5; });
    container.addEventListener('pointerdown', function() {
      const prev = settings.mouseInfluence;
      settings.mouseInfluence = Math.min(3, prev * 2.5);
      setTimeout(function() { settings.mouseInfluence = prev; }, 400);
    });

    function render(now) {
      const elapsed = (now - startTime) / 1000;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // FPS counter
      frameCount++;
      if (now - lastFpsTime >= 1000) {
        currentFps = frameCount;
        frameCount = 0;
        lastFpsTime = now;
        const fpsEl = document.getElementById('crp-fps');
        if (fpsEl) fpsEl.textContent = currentFps + ' FPS';
      }

      gl.uniform1f(uniforms.uTime, elapsed);
      gl.uniform2f(uniforms.uMouse, mouseX, mouseY);
      gl.uniform1f(uniforms.uIsDark, isDark);
      gl.uniform1f(uniforms.uSpeed, settings.speed);
      gl.uniform1f(uniforms.uTurbulence, settings.turbulence);
      gl.uniform1f(uniforms.uMouseInfluence, settings.mouseInfluence);
      gl.uniform1f(uniforms.uGrain, settings.grain);
      gl.uniform1f(uniforms.uSparkle, settings.sparkle);
      gl.uniform1f(uniforms.uVignette, settings.vignette);
      gl.uniform1f(uniforms.uOpacity, settings.opacity);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrame = requestAnimationFrame(render);
    }
    animFrame = requestAnimationFrame(render);

    // Controls
    function bindSlider(id, key) {
      const el = document.getElementById(id);
      const valEl = document.getElementById('crp-val-' + id.replace('crp-', ''));
      if (!el) return;
      el.addEventListener('input', function() {
        settings[key] = parseFloat(this.value);
        if (valEl) valEl.textContent = parseFloat(this.value).toFixed(2);
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
      if (theme === 'neon') { applyPalette('neon'); }
      else if (theme === 'dark') { applyPalette('default'); }
      else { applyPalette('default'); }
      document.querySelectorAll('.crp-theme-btn').forEach(function(btn) { btn.classList.remove('active'); });
      const btn = document.getElementById('crp-theme-' + theme);
      if (btn) btn.classList.add('active');
    }
    document.getElementById('crp-theme-dark')?.addEventListener('click', function() { setTheme('dark'); });
    document.getElementById('crp-theme-light')?.addEventListener('click', function() { setTheme('light'); });
    document.getElementById('crp-theme-neon')?.addEventListener('click', function() { setTheme('neon'); });

    // Color presets
    document.querySelectorAll('.crp-color-swatch .swatch').forEach(function(swatch) {
      swatch.addEventListener('click', function() {
        const preset = this.getAttribute('data-preset');
        if (preset && palettes[preset]) {
          isDark = 1;
          applyPalette(preset);
          document.querySelectorAll('.crp-theme-btn').forEach(function(btn) { btn.classList.remove('active'); });
        }
      });
    });

    // Randomize button
    document.getElementById('crp-randomize')?.addEventListener('click', function() {
      settings.speed = +(Math.random() * 2 + 0.5).toFixed(2);
      settings.turbulence = +(Math.random() * 1.5 + 0.3).toFixed(2);
      settings.mouseInfluence = +(Math.random() * 2 + 0.5).toFixed(2);
      settings.grain = +(Math.random() * 1.5).toFixed(2);
      settings.sparkle = +(Math.random() * 1.5).toFixed(2);
      settings.vignette = +(Math.random() * 1.5 + 0.3).toFixed(2);
      ['speed','turbulence','mouseInfluence','grain','sparkle','vignette'].forEach(function(key) {
        const el = document.getElementById('crp-' + key);
        const valEl = document.getElementById('crp-val-' + key);
        if (el) el.value = settings[key];
        if (valEl) valEl.textContent = settings[key].toFixed(2);
      });
      const paletteNames = Object.keys(palettes);
      const randomPal = paletteNames[Math.floor(Math.random() * paletteNames.length)];
      applyPalette(randomPal);
    });

    // Pause/Play button
    let isPaused = false;
    document.getElementById('crp-pause')?.addEventListener('click', function() {
      isPaused = !isPaused;
      this.textContent = isPaused ? '▶ Play' : '⏸ Pause';
      if (isPaused) {
        cancelAnimationFrame(animFrame);
      } else {
        startTime = performance.now();
        animFrame = requestAnimationFrame(render);
      }
    });

    document.addEventListener('visibilitychange', function() {
      if (document.hidden) { cancelAnimationFrame(animFrame); }
      else { startTime = performance.now(); animFrame = requestAnimationFrame(render); }
    });
  })();

  /* ═══════════════════════════════════════════════════════════
     2. NOISE FIELD — Animated Pattern Generator
     ═══════════════════════════════════════════════════════════ */
  (function initNoiseField() {
    const container = document.getElementById('crp-noise-field');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let time = 0;

    function resize() {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    function hash(x, y) {
      let h = (x * 374761393 + y * 668265263) | 0;
      h = ((h ^ (h >> 13)) * 1274126177) | 0;
      return ((h ^ (h >> 16)) & 0x7fffffff) / 0x7fffffff;
    }

    function noise2d(x, y) {
      const ix = Math.floor(x), iy = Math.floor(y);
      const fx = x - ix, fy = y - iy;
      const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
      return hash(ix, iy) * (1-sx)*(1-sy) + hash(ix+1, iy) * sx*(1-sy) + hash(ix, iy+1) * (1-sx)*sy + hash(ix+1, iy+1) * sx*sy;
    }

    function render() {
      const w = canvas.width, h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      const t = time * 0.008;
      const scale = 3;

      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const nx = x / w * scale, ny = y / h * scale;
          const n1 = noise2d(nx + t, ny + t * 0.7);
          const n2 = noise2d(nx * 2 + t * 1.3, ny * 2 - t * 0.5);
          const n3 = noise2d(nx * 4 + n1 * 2, ny * 4 + n2 * 2);
          const v = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);
          const r = Math.floor(v * 200 + 30);
          const g = Math.floor(v * 180 + 50);
          const b = Math.floor(v * 255);
          for (let sy = 0; sy < 2 && y + sy < h; sy++) {
            for (let sx = 0; sx < 2 && x + sx < w; sx++) {
              const idx = ((y + sy) * w + (x + sx)) * 4;
              data[idx] = r; data[idx+1] = g; data[idx+2] = b; data[idx+3] = 255;
            }
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      time++;
      animId = requestAnimationFrame(render);
    }
    animId = requestAnimationFrame(render);

    document.addEventListener('visibilitychange', function() {
      if (document.hidden) cancelAnimationFrame(animId);
      else animId = requestAnimationFrame(render);
    });
  })();

  /* ═══════════════════════════════════════════════════════════
     3. GRADIENT MESH — Mouse Parallax Gradient
     ═══════════════════════════════════════════════════════════ */
  (function initGradientMesh() {
    const container = document.getElementById('crp-gradient-mesh');
    if (!container) return;

    let mouseX = 0.5, mouseY = 0.5, targetX = 0.5, targetY = 0.5;
    let animId = null;

    const colors = [
      { x: 0.2, y: 0.3, r: 201, g: 168, b: 76, size: 0.6 },
      { x: 0.7, y: 0.2, r: 99, g: 102, b: 241, size: 0.5 },
      { x: 0.5, y: 0.7, r: 139, g: 92, b: 246, size: 0.55 },
      { x: 0.8, y: 0.8, r: 192, g: 132, b: 252, size: 0.45 },
      { x: 0.3, y: 0.8, r: 74, g: 222, b: 128, size: 0.4 },
    ];

    function lerp(a, b, t) { return a + (b - a) * t; }

    function render() {
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      const rect = container.getBoundingClientRect();
      const w = rect.width, h = rect.height;

      // Build gradient CSS
      let gradientParts = [];
      colors.forEach(function(c, i) {
        const offsetX = (mouseX - 0.5) * 0.15 * (i % 2 === 0 ? 1 : -1);
        const offsetY = (mouseY - 0.5) * 0.15 * (i % 2 === 0 ? -1 : 1);
        const cx = (c.x + offsetX) * 100;
        const cy = (c.y + offsetY) * 100;
        const size = c.size * 100;
        gradientParts.push('radial-gradient(circle ' + size + '% at ' + cx.toFixed(1) + '% ' + cy.toFixed(1) + '%, rgba(' + c.r + ',' + c.g + ',' + c.b + ',0.6) 0%, transparent 100%)');
      });

      container.style.background = gradientParts.join(', ') + ', #0a0a0a';
      animId = requestAnimationFrame(render);
    }

    container.addEventListener('pointermove', function(e) {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    });
    container.addEventListener('pointerleave', function() { targetX = 0.5; targetY = 0.5; });

    animId = requestAnimationFrame(render);
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) cancelAnimationFrame(animId);
      else animId = requestAnimationFrame(render);
    });
  })();

})();
