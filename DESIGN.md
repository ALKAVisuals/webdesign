# Legend Stories — Design System Protocol

## Purpose
This repository is the **single source of truth** for all Legend Stories visual styles.
All bots and team members read from and write to this repo.

## Base URL
- **Repo:** https://github.com/ALKAVisuals/webdesign
- **Live:** https://alkavisuals.github.io/webdesign/
- **Raw CDN:** https://raw.githubusercontent.com/ALKAVisuals/webdesign/main/

## File Map

| Path | Purpose | Who writes |
|------|---------|------------|
| `css/tokens.css` | Design tokens (colors, fonts, spacing) | OWL / K |
| `css/components.css` | Component styles (buttons, cards, badges) | OWL / K |
| `css/custom.css` | Custom overrides (upload zone) | Anyone / Bots |
| `css/bot-*.css` | Bot-specific style contributions | Bots |
| `assets/images/` | Product photos, hero images | K / OWL |
| `assets/fonts/` | Custom font files (.woff2, .ttf) | K |
| `assets/icons/` | SVG/PNG icons | K / Bots |
| `assets/uploads/` | General uploads | Anyone |
| `pages/*.html` | Page templates | OWL / Bots |
| `templates/*.html` | Reusable template parts | OWL |
| `DESIGN.md` | This file — protocol & conventions | OWL |

## Design Tokens (Quick Reference)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gold` | `#c9a84c` | Primary accent |
| `--color-gold-light` | `#e0c56a` | Hover states |
| `--color-gold-dark` | `#a07830` | Dark accent |
| `--color-crimson` | `#8b1a1a` | Danger / limited |
| `--color-crimson-glow` | `#cc2222` | Glow effects |
| `--color-black` | `#0a0a0a` | BG primary |
| `--color-charcoal` | `#1a1a1a` | BG secondary |
| `--color-dark-gray` | `#2a2a2a` | BG tertiary / borders |
| `--color-white` | `#f5f5f5` | Text primary |

### Fonts
| Token | Family |
|-------|--------|
| `--font-display` | Bebas Neue |
| `--font-heading` | Montserrat |
| `--font-body` | Inter |
| `--font-mono` | JetBrains Mono |

## How Bots Read Styles

### Option A: Raw CSS (recommended)
```
GET https://raw.githubusercontent.com/ALKAVisuals/webdesign/main/css/tokens.css
GET https://raw.githubusercontent.com/ALKAVisuals/webdesign/main/css/components.css
GET https://raw.githubusercontent.com/ALKAVisuals/webdesign/main/css/custom.css
```

### Option B: GitHub API
```
GET https://api.github.com/repos/ALKAVisuals/webdesign/contents/css/tokens.css
```
Returns JSON with `content` field (base64 encoded).

### Option C: Live Site
Embed in any page:
```html
<link rel="stylesheet" href="https://alkavisuals.github.io/webdesign/css/tokens.css">
<link rel="stylesheet" href="https://alkavisuals.github.io/webdesign/css/components.css">
```

## How Bots Upload Styles

### Upload via GitHub API

**Step 1:** Read current file (get SHA if exists)
```
GET https://api.github.com/repos/ALKAVisuals/webdesign/contents/css/custom.css
```

**Step 2:** Create or update file
```
PUT https://api.github.com/repos/ALKAVisuals/webdesign/contents/{path}
```
Body:
```json
{
  "message": "bot-name: description of changes",
  "content": "<base64-encoded-content>",
  "sha": "<sha-if-updating>"
}
```

### Naming Convention for Bot Uploads
- Custom CSS: `css/bot-{name}-{description}.css`
- Images: `assets/images/{product-code}-{variant}.png`
- Icons: `assets/icons/{name}.svg`
- Templates: `templates/{name}.html`

### Example: Upload a new color scheme
```bash
# File: css/bot-owl-darkmode.css
# Content:
:root {
  --color-gold: #c9a84c;
  --color-bg-primary: #050505;
  /* ... */
}

# API call:
curl -X PUT \
  -H "Authorization: token <PAT>" \
  -H "Content-Type: application/json" \
  https://api.github.com/repos/ALKAVisuals/webdesign/contents/css/bot-owl-darkmode.css \
  -d '{"message":"bot-owl: add dark mode variant","content":"'$(base64 -w0 css/bot-owl-darkmode.css)'"}'
```

## Style Guide Sections

The live style guide at `index.html` has these sections:
1. **Colors** — Click swatches to copy hex
2. **Typography** — Font families, sizes, weights
3. **Buttons** — All variants with code snippets
4. **Components** — Cards, badges, inputs, dividers
5. **Upload** — Drag & drop upload interface
6. **Assets** — Browse uploaded files
7. **Pages** — Page template previews

## Contribution Rules

1. **Never overwrite** `tokens.css` or `components.css` directly — create a new file
2. **Use `css/custom.css`** for quick overrides
3. **Use `css/bot-*.css`** for experimental / bot-specific styles
4. **Always commit** with descriptive messages: `bot-name: what changed`
5. **Test on live** before pushing major changes
6. **Keep it dark luxury** — black backgrounds, gold accents, bold typography

## Brand Guidelines

- **Aesthetic:** Dark luxury × streetwear
- **Tone:** Bold, unapologetic, premium
- **Colors:** Black base, gold accent, crimson for alerts
- **Typography:** Bebas Neue for display, Montserrat for headings, Inter for body
- **Animations:** Subtle shimmer, glow effects, smooth transitions
- **Mobile-first:** All styles must work on mobile

## Contact
- **Owner:** K (karhan112)
- **Co-owner:** Compagnon
- **Design lead:** OWL
- **Repo:** https://github.com/ALKAVisuals/webdesign

## Integrated Libraries

### Metal FX — Liquid Metal Effect
- **Source:** https://github.com/Jakubantalik/metal-fx
- **CSS:** `css/metal-fx.css` (CSS fallback + core styles)
- **Presets:** `--gold`, `--silver`, `--chromatic`, `--rose-gold`, `--legend` (custom)
- **Variants:** `--button` (pill, 1px ring), `--circle` (compact, 2px ring)
- **Effects:** `--shimmer` (animated sweep), `--legend-shimmer` (gold sweep), `--interactive` (hover glow)
- **Strength:** `--strength-25`, `--strength-50`, `--strength-75`, `--strength-100`
- **Sizes:** `--xs` (32px), `--sm` (40px), `--md` (48px), `--lg` (64px), `--xl` (80px)
- **Theme:** `--light` (light mode override)
- **Full WebGL:** `npm install metal-fx` for animated shader version
- **Usage:** See style guide Metal FX section for live demos and code

### Matrix — Dot Matrix Loaders
- **Source:** https://github.com/zzzzshawn/matrix
- **CSS:** `css/matrix.css` (full CSS fallback with all keyframes)
- **Families:** Square (23), Circular (20), Triangle (20), Hex (10), Icon (1)
- **Animation types:** Ripple, Center Ripple, Diagonal Sweep, Spiral Snake, Ring Snake, Column Snake, Glyph Pulse, Collapse, Hover Ripple, Echo
- **Dot shapes:** Circle, Square, Diamond, Hearts
- **Effects:** Bloom (selective glow), Halo (uniform glow), Muted
- **Color presets:** solid-theme, solid-mint, grad-sunset, grad-ocean, grad-neon, grad-aurora, grad-fire, grad-prism
- **CSS variables:** `--dmx-dot-fill`, `--dmx-cycle`, `--dmx-speed`, `--dmx-opacity-base/mid/peak`, `--dmx-dot-size`
- **Reduced motion:** Full `prefers-reduced-motion` support
- **Install full lib:** `npx shadcn@latest add https://dotmatrix.zzzzshawn.cloud/r/registry.json`
- **Usage:** See style guide Matrix section for live demos and code
