# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste beslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Publiek geen tutorial/TD Vision U, prototype V0.x, DEMO/IN UITWERKING/DEFINITIEF, ontwikkelaarsstatus of asset-pipelinecopy.
- Doel: een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor latere integratie in technischbouwadvies.nl.
- De echte website technischbouwadvies.nl wordt voorlopig niet aangepast.
- Standalone werkmap: `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- De goedgekeurde art direction wordt niet opnieuw ontworpen tenzij de gebruiker dat expliciet vraagt.

---

## 2. Definitieve art direction — GOEDGEKEURD

### A+B

- ca. 65% Swiss / Architectural Editorial
- ca. 25% Warm Architectural Monograph
- ca. 10% subtiele digitale motion

Vaste kenmerken:
- warm off-white papier
- charcoal tekst
- subtiel bronsaccent
- editorial serif + neutrale sans
- ruime marges en streng grid
- rustige gutter/rug
- subtiele paginadikte en contactschaduw
- technische tekeningen groot en helder
- renders groot / bijna full bleed waar passend
- minimale publieke UI

De goedgekeurde `06 — Plattegrond`-masterspread blijft de design foundation.

---

## 3. Cover — GOEDGEKEURD

**Technical Line Art + rust van Pure Typography**

- warm off-white cover
- grote rustige titel `ONTWERPBOEK`
- subtitel `VAN CONCEPT NAAR TECHNISCH ONTWERP`
- zeer subtiele architectuurlijntekening
- charcoal typografie
- één klein bronsaccent
- onderaan subtiel `TECHNISCH BOUWADVIES`
- geen render als coverbasis
- geen prototype-/statusinformatie

---

## 4. Definitief spread system — GOEDGEKEURD

1. Projectintro / hero
2. Variantenvergelijking
3. Plattegrond
4. Gevel & doorsnede
5. Bouwdetail
6. Interieur & materialen
7. Exterieur impressie
8. Resultaat / CTA

Vaste flow:

**Cover → Projectintro → Varianten → Plattegrond → Gevel & doorsnede → Bouwdetail → Interieur & materialen → Exterieur impressie → Resultaat / CTA**

---

## 5. Afgeronde fasen

- **Fase A — Visual audit: AFGEROND**
- **Fase B — Online reference research: AFGEROND**
- **Fase C — Visuele richtingen: AFGEROND**
- **Fase D — Masterspread: AFGEROND + GOEDGEKEURD**
- **Fase E — Cover redesign: AFGEROND + GOEDGEKEURD**
- **Fase F — Spread template system: AFGEROND + GOEDGEKEURD**
- **Fase G — Volledige statische boekflow: AFGEROND + GOEDGEKEURD**
- **Fase H — Visueel systeem implementeren: AFGEROND + GEMERGED NAAR MAIN via PR #12**
- **Fase I — Page-turn & motion polish: AFGEROND + GEMERGED NAAR MAIN via PR #13**

---

## 6. Publieke UI — vaste richting

Niet tonen:
- prototypeversies
- contentstatusbadges
- statusdots
- ontwikkelaarsinformatie
- grote toolbar
- zichtbare autoplaytekst
- uitgebreide interaction hints
- tutorial-/leeromgevingcopy

Wel behouden, zeer subtiel:
- vorige/volgende pijlen
- kleine spreadteller
- minimale autoplaybediening
- swipe
- keyboard navigation

---

## 7. Technische basis die behouden blijft

- desktop dubbele spread
- mobiel single-page
- swipe
- keyboard navigation
- previous/next
- autoplay
- hoofdstuktiming
- open/closed lifecycle
- premium page-turn
- asset manifest
- single/gallery/full assettypes
- image fallback
- reduced motion

---

## 8. Fase I — Motion polish — OP MAIN

Toegevoegd via PR #13:

### `motion-polish.css`
- rustiger cover-open beweging
- groter maar rustiger perspectief
- subtielere contactschaduw
- realistischere bewegende paginaschaduw
- zachtere page-turn acceleratie/afremming
- subtiele reactie van boek en onderliggende pagina
- rustigere eindanimatie
- kortere mobile motion
- `prefers-reduced-motion` ondersteuning

### `motion-polish.js`
- observeert bestaande page-turn status
- koppelt tijdelijk voorwaartse/achterwaartse status aan shadow/depth feedback
- `book.js` zelf blijft onaangeraakt

---

## 9. Fase J — Mobile visual polish — HUIDIGE BRANCH

Branch:

`agent/mobile-polish-phase-j`

Toegevoegd:

### `mobile-polish.css`
- mobiel boek als echte single-page compositie
- responsive boekhoogte met `svh`
- safe-area ondersteuning
- geen horizontale overflow
- betere titel/body-schaal op 760 / 390px breakpoints
- technische tekeningen krijgen gegarandeerd meer verticale ruimte
- variantenpagina verandert op mobiel van 3 kleine kolommen naar 3 verticale vergelijkingsrijen
- full-bleed visualpagina's blijven gecontroleerd beeldvullend
- materiaalstalen schalen compacter
- CTA en bediening blijven bruikbaar op korte schermen
- previous/next/autoplay krijgen 44px tapzones
- touch hover-effecten worden op coarse pointers uitgeschakeld
- aparte compact-regels voor schermen lager dan 700px

### `index.html`
- laadt `mobile-polish.css` als laatste stylesheet zodat uitsluitend mobile overrides de desktopstijl niet wijzigen

### Scopecontrole
- branch staat 0 commits achter op `main`
- vóór documentatie-update veranderden alleen `index.html` en `mobile-polish.css`
- alle wijzigingen blijven binnen `technischbouwadvies/ontwerpboek/`

### Browser-QA beperking
De openbare GitHub Pages-route kon vanuit de huidige browsertool niet rechtstreeks worden geladen en de container heeft geen DNS-toegang tot GitHub. Daarom is **echte screenshot/browser-QA nog niet als afgerond gemarkeerd**. De mobile fase is op code/CSS-structuur gecontroleerd; live visuele QA blijft een expliciete vervolgcontrole zodra de route toegankelijk is.

---

## 10. Eerstvolgende fase

Na merge van Fase J:

### Fase K — Performance & accessibility polish

1. toetsenbord/focusstates nalopen
2. ARIA en button labels controleren
3. reduced-motion gedrag nalopen
4. image loading / lazy loading controleren
5. WebP/AVIF-strategie voor echte projectassets vastleggen
6. CLS/overflow-risico's beperken
7. CSS-lagen opschonen waar veilig
8. daarna integratievoorbereiding voor technischbouwadvies.nl

Belangrijk: de visuele art direction, cover en spreadlayouts niet opnieuw ontwerpen.

---

## 11. Overdracht naar nieuwe chat

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig. De A+B art direction, masterspread, Technical Line Art cover en 8-spread boekflow zijn al goedgekeurd en mogen niet opnieuw worden ontworpen tenzij de gebruiker dat expliciet vraagt. Fase H is via PR #12 naar main gemerged en Fase I motion polish via PR #13. Fase J mobile polish staat op branch `agent/mobile-polish-phase-j`; controleer of die al is gemerged. Als dat zo is, ga door met Fase K: performance & accessibility polish. De echte website technischbouwadvies.nl nog niet aanpassen.

---

## 12. Snelle status

**GOEDGEKEURD**
- A+B art direction
- masterspread
- Technical Line Art cover
- 8 spreadtypes
- volledige boekflow

**OP MAIN**
- nieuwe publieke shell
- nieuwe cover
- 8 spreads
- editorial layouts
- minimale controls
- assetmapping/timings
- premium motion polish

**HUIDIGE BRANCH**
- `agent/mobile-polish-phase-j`
- mobile single-page polish

**DAARNA**
- performance/accessibility
- integratievoorbereiding
- pas daarna implementatie in technischbouwadvies.nl
