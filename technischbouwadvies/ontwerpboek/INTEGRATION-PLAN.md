# Ontwerpboek — Integratieplan technischbouwadvies.nl

**Status:** productie-repo bevestigd; geïsoleerde preview staat op een draft productiebranch. Nog niet mergen / live zetten.

**Doel:** de goedgekeurde standalone boektool veilig integreren in technischbouwadvies.nl zonder bestaande styling, performance of deployment te verstoren.

---

## 1. Repo's en rollen

### Prototype/testlab
`ALKAVisuals/webdesign`

Bron van waarheid voor:
- goedgekeurde art direction
- standalone interactie
- documentatie
- assetrichtlijnen

### Productie
`ALKAVisuals/alkabouwadvies`

Bevestigd als repo van `https://technischbouwadvies.nl/`.

### Niet verwarren met
`ALKAVisuals/technischbouwadvies-dashboard` — dashboard, niet de publieke website.

---

## 2. Productiestack — bevestigd

De productie is een statische website.

Relevant:
- homepage `index.html`
- veel CSS/JS inline in homepage
- bestaand font: Inter
- gedeelde bestanden o.a. `site-header.css/js`, `site-responsive.css`, contact/footer bestanden
- GSAP + ScrollTrigger aanwezig
- Lenis aanwezig
- `netlify.toml` aanwezig

`netlify.toml` bevat onder andere:

```toml
[build]
  publish = "."
```

plus headers en redirects voor technischbouwadvies.nl.

**Veiligheidsregel:** een merge naar productie-`main` behandelen als potentieel live-impactvol. De gebruiker heeft eerder aangegeven dat automatische Netlify-updates bewust waren uitgeschakeld/beperkt; controleer de actuele Netlify-site-instelling opnieuw vóór uiteindelijke merge. Zet deploys niet automatisch aan.

---

## 3. Vaste visuele bron

Niet opnieuw ontwerpen.

Leidend:
- A+B art direction
- goedgekeurde masterspread
- Technical Line Art cover
- 8 goedgekeurde spreads
- premium page-turn
- mobile single-page gedrag

---

## 4. Homepageplaatsing — huidige keuze

De actuele homepagevolgorde is geïnspecteerd.

Relevante flow:
- Hero
- Toepassingen/projectcategorieën
- USP-strip
- Proces/Werkwijze
- Diensten
- overige commerciële secties

**Plaats het ontwerpboek na de USP-strip en vóór Proces/Werkwijze.**

Dit geeft de logica:

`Waarmee helpen we? → Zo wordt een ontwerp zichtbaar → Zo werken we samen.`

---

## 5. Productiecomponent

Root:

```html
<section class="tba-designbook" data-designbook></section>
```

De homepagevariant bevat alleen:
1. korte sectie-intro
2. boekobject
3. minimale controls
4. subtiele CTA

Geen tweede siteheader of prototype-uitleg.

---

## 6. CSS-isolatie — verplicht en al toegepast in preview

Productie-CSS blijft volledig onder:

```css
.tba-designbook { ... }
.tba-designbook .db-book { ... }
```

Verboden in component-CSS:
- globale `body`
- globale `html`
- globale `button`
- globale `a`
- globale `*` reset buiten de component
- globale `:root` variabelen

Doel: geen invloed op header, formulieren, bestaande CTA's of paginaopmaak.

---

## 7. JavaScript-isolatie — al toegepast in preview

Component wordt geïnitialiseerd via:

```js
const roots = document.querySelectorAll('[data-designbook]');
```

Alle componentselecties gebeuren vervolgens binnen de root.

Geen afhankelijkheid van globale homepage-ID's voor de boekinternals.

---

## 8. Productie-integratiebranch — ACTIEF

Repo:
`ALKAVisuals/alkabouwadvies`

Branch:
`agent/design-process-book-integration`

Draft PR:
**#7 — Prepare isolated designbook integration preview**

Op deze branch zijn uitsluitend nieuwe bestanden toegevoegd:

```text
designbook-preview.html
designbook/
├── designbook-data.js
├── designbook.css
└── designbook.js
```

Nog NIET gewijzigd:
- `index.html`
- `site-header.js`
- bestaande site-CSS
- Netlify-config

PR #7 blijft draft en mag nog niet worden gemerged.

---

## 9. Previewcomponent — huidige technische aanpak

### `designbook-data.js`
- 8 spreads / 16 pagina's
- tijdelijke previewassets komen uit bestaande productie-assets
- technische plattegrond/gevel/doorsnede deels als inline SVG
- echte projectcontent later vervangbaar zonder componentarchitectuur te wijzigen

### `designbook.css`
- volledig namespaced
- cover
- desktop dubbele spread
- mobile single-page
- editorial layouts
- page-turn
- controls
- focus/reduced-motion states

### `designbook.js`
- root-scoped rendering
- autoplay
- previous/next
- swipe
- keyboard arrows
- Escape pauze
- `prefers-reduced-motion`
- IntersectionObserver: autoplay alleen voldoende in viewport
- pauze wanneer tab verborgen is
- idle preload van volgende pagina/spread
- respecteert `saveData`

### `designbook-preview.html`
- `noindex,nofollow`
- laadt productiecomponent los van homepage
- bedoeld voor visuele/functionele QA

---

## 10. Fonts

Productie heeft Inter al.

Goedgekeurde boekstijl gebruikt aanvullend een editorial serif.
Preview gebruikt:
- Inter
- Libre Baskerville 400/700

Voor homepage-hook:
- Inter niet dubbel laden
- alleen Libre Baskerville toevoegen indien preview-QA de fontkeuze bevestigt
- `display=swap`

---

## 11. Assets

Zie `ASSET-GUIDELINES.md`.

Productiepreview gebruikt voorlopig bestaande repo-assets zodat geen nieuwe zware renderbestanden nodig zijn voor integratietest.

Definitieve projectassets later bij voorkeur onder bijvoorbeeld:

```text
images/designbook/
```

of een vergelijkbare eigen map.

---

## 12. Performance

Voor uiteindelijke homepage:
- componentinitialisatie pas wanneer relevant / nabij viewport waar praktisch
- autoplay alleen wanneer boek open én sectie voldoende zichtbaar
- volgende spread idle-preloaden
- preload overslaan bij `saveData`
- technische tekeningen `contain`
- renders geoptimaliseerd
- geen 4K/8K-bronbestanden rechtstreeks publiceren

---

## 13. Accessibility

Behouden:
- zichtbare pauze/autoplaycontrol
- keyboard arrows
- Escape pauze
- focus-visible
- centrale statusaankondiging
- reduced motion standaard zonder autoplay
- functionele alt-teksten

---

## 14. No-JS fallback

Voor de definitieve homepage-hook moet er minimaal statische inhoud zichtbaar blijven als JS niet laadt.

Opties:
- cover + korte intro/CTA in HTML
- of een statische eerste spread

De preview mag voor nu JS vereisen; vóór homepage-merge moet fallback expliciet worden toegevoegd/gecontroleerd.

---

## 15. Analytics — optioneel

Alleen met bestaande analytics/privacyarchitectuur.

Mogelijke events:
- `designbook_open`
- `designbook_spread_view`
- `designbook_pause`
- `designbook_complete`
- `designbook_cta_click`

Geen nieuw trackingpakket alleen voor deze tool.

---

## 16. QA vóór homepage-hook

Eerst draft PR #7 / Deploy Preview testen:

### Desktop
- 1440px
- 1280px
- 1024px

### Mobile
- 390px
- 360px
- korte viewporthoogte

### Functioneel
- cover openen
- autoplay
- pauze
- previous/next
- swipe
- keyboard
- Escape
- reduced motion
- einde/CTA
- viewport pause/resume

### Visueel
- boekverhouding t.o.v. goedgekeurde masterspread
- technische tekeningen leesbaar
- render crops correct
- geen clipping
- geen goedkope card/UI-look

---

## 17. Minimale homepage-hook — PAS NA PREVIEW-QA

De latere wijziging aan `index.html` moet zo klein mogelijk zijn:

1. eventueel Libre Baskerville `<link>` toevoegen
2. `designbook/designbook.css` laden
3. sectieroot toevoegen na USP-strip en vóór Proces
4. `designbook/designbook.js` als module laden

Conceptueel:

```html
<link rel="stylesheet" href="designbook/designbook.css">
...
<section class="tba-designbook" data-designbook></section>
...
<script type="module" src="designbook/designbook.js"></script>
```

### Belangrijk
`index.html` is groot. De GitHub connector vervangt bij update het volledige bestand. Daarom:
- actuele SHA opnieuw ophalen
- exacte invoegpunten opnieuw controleren
- geen oude versie overschrijven
- diff na wijziging zorgvuldig controleren

---

## 18. Rollback

Component blijft geïsoleerd.

Rollback van latere homepage-integratie:
- sectieroot verwijderen
- CSS-link verwijderen
- JS-module verwijderen
- eventueel serif-fontlink verwijderen
- eigen `designbook/` bestanden kunnen blijven of apart verwijderd worden

Geen database- of globale CSS-afhankelijkheid.

---

## 19. Go/no-go

### Nu GO voor
- productiepreview op branch
- draft PR
- Deploy Preview / browser-QA
- bugs herstellen op branch

### Nu NO-GO voor
- PR #7 mergen
- homepage wijzigen vóór preview-QA
- automatische Netlify-deployinstellingen wijzigen
- echte site live zetten

---

## 20. Exacte volgende actie

1. draft PR #7 status/checks inspecteren
2. zoeken of Netlify een Deploy Preview heeft aangemaakt
3. `designbook-preview.html` in die preview openen
4. desktop/mobile QA
5. bugs herstellen
6. daarna pas minimale homepage-hook op dezelfde branch toevoegen
7. opnieuw diff + deploycontrole
8. pas na expliciete beoordeling mergebesluit nemen
