# Legend Stories — Style Guide & Design Reference

Dark luxury × streetwear design system for Legend Stories wall stickers brand.

## 🎨 Live Preview

**Style Guide:** https://alkavisuals.github.io/webdesign/

## 📁 Structure

```
webdesign/
├── index.html              # Style guide (main entry)
├── css/
│   ├── tokens.css          # Design tokens (colors, fonts, spacing)
│   └── components.css      # Component styles (buttons, cards, badges)
├── js/
│   └── (your scripts)
├── assets/
│   ├── images/             # Upload product photos, hero images
│   ├── fonts/              # Upload custom fonts (.woff2, .ttf)
│   ├── icons/              # Upload icons (.svg, .png)
│   └── uploads/            # General uploads
├── pages/
│   ├── index.html          # Home page template
│   ├── shop.html           # Shop/product grid
│   ├── about.html          # About page
│   └── contact.html        # Contact form
└── README.md
```

## 🎯 How to Upload Styles

### Option 1: Via the Style Guide
1. Open the live style guide
2. Go to **Upload Styles** section
3. Drag & drop or click to upload CSS, images, fonts, icons
4. Click **Push to GitHub**

### Option 2: Via GitHub
1. Go to https://github.com/ALKAVisuals/webdesign
2. Navigate to the target folder
3. Click **Add file → Upload files**

### Option 3: Via Git
```bash
git clone https://github.com/ALKAVisuals/webdesign.git
# add your files
git add .
git commit -m "Add new styles"
git push
```

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-gold` | `#c9a84c` | Primary accent |
| `--color-crimson` | `#8b1a1a` | Danger/limited |
| `--color-black` | `#0a0a0a` | Background |
| `--font-display` | Bebas Neue | Headlines |
| `--font-heading` | Montserrat | Subheadings |
| `--font-body` | Inter | Body text |

## 📝 Fonts Used

- **Bebas Neue** — Display/headlines
- **Montserrat** — Subheadings (400–900)
- **Inter** — Body text (300–700)
- **JetBrains Mono** — Code/monospace

All loaded via Google Fonts CDN.

## 🔧 Tech Stack

- Tailwind CSS (CDN)
- Custom CSS tokens & components
- Vanilla JS (no build step)
- GitHub Pages hosting

## 📄 License

© 2026 Legend Stories. All rights reserved.
