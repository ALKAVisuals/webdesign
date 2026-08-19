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
- **Fase H — Visueel systeem implementeren: AFGEROND + MAIN via PR #12**
- **Fase I — Page-turn & motion polish: AFGEROND + MAIN via PR #13**
- **Fase J — Mobile visual polish: AFGEROND + MAIN via PR #14**

---

## 6. Wat nu op `main` staat

- nieuwe publieke A+B-shell
- goedgekeurde Technical Line Art cover
- 8 spreads / 16 boekpagina's
- editorial text/gallery/technical/materials/visual/CTA layouts
- minimale controls
- desktop dubbele spread
- mobiel single-page
- autoplay + spreadtimings
- swipe + keyboard navigation
- premium motion/page-turn
- mobiele responsive polish
- asset manifest + image fallback
- reduced-motion basis

---

## 7. Fase J — Mobile polish — OP MAIN

Via PR #14 toegevoegd:

### `mobile-polish.css`
- echte single-page mobiele compositie
- responsive boekhoogte met `svh`
- safe-area ondersteuning
- geen horizontale overflow
- betere typografie op 760px / 390px
- technische tekeningen krijgen meer verticale ruimte
- varianten veranderen van 3 kleine kolommen naar 3 verticale vergelijkingsrijen
- full-bleed visualpagina's blijven gecontroleerd beeldvullend
- compactere materiaalstalen
- 44px tapzones voor controls
- compact-regels voor schermen lager dan 700px
- touch-hover effecten uit op coarse pointers

Browser-screenshot-QA blijft nog apart open omdat de publieke GitHub Pages-route vanuit de huidige tooling niet betrouwbaar bereikbaar is.

---

## 8. Fase K — Performance & accessibility — HUIDIGE BRANCH

Branch:

`agent/performance-accessibility`

### Toegevoegd: `accessibility-polish.css`
- duidelijke `:focus-visible` states
- focuskleur afgestemd op de bestaande A+B-stijl
- reduced-motion timerprogress wordt uitgeschakeld
- forced-colors fallback voor belangrijke controls/rules

### Toegevoegd: `accessibility-performance.js`
- autoplayknop krijgt dynamisch een duidelijk toegankelijk label
- bij `prefers-reduced-motion` wordt automatisch bladeren direct gepauzeerd
- gebruiker kan daarna bewust autoplay opnieuw inschakelen
- `Escape` pauzeert lopende autoplay
- automatische eindfocus wordt niet gestolen wanneer de gebruiker niet bewust met het boek heeft geïnterageerd
- eerstvolgende pagina/spread wordt tijdens idle time voorgeladen
- preload wordt overgeslagen wanneer `navigator.connection.saveData` actief is

### `index.html`
- Google Fonts gebruikt `display=swap`
- live region krijgt `aria-atomic=true`
- dynamische boekpagina's staan niet meer zelf op `aria-live=polite`; één centrale statusregion verzorgt aankondigingen
- boek heeft expliciet `role=region`
- controls hebben `aria-controls=book`
- progresslijn is decoratief voor assistive technology
- nieuwe accessibility CSS/JS worden geladen

### Assetstrategie
Nieuw document:

`ASSET-GUIDELINES.md`

Daarin staan vaste afspraken voor:
- AVIF/WebP-renders
- SVG/WebP technische tekeningen
- resolutie-uitgangspunten
- mobile crop
- bestandsnamen
- alt-tekst
- lazy loading / next-spread preload
- publicatiecontrole

### Validatie
- `accessibility-performance.js` komt door `node --check`
- alle wijzigingen blijven binnen `technischbouwadvies/ontwerpboek/`

---

## 9. Open QA-punt

De openbare GitHub Pages-route kon vanuit de huidige browsertool niet betrouwbaar worden geladen en de container heeft geen DNS-toegang tot GitHub.

Daarom geldt:

- code-/structuur-QA: uitgevoerd
- echte live screenshot-QA desktop/mobile: **nog open**

Dit is een implementatie-QA-punt en geen reden om art direction, cover of spreadlayouts opnieuw te ontwerpen.

---

## 10. Eerstvolgende fase

Na merge van Fase K:

### Fase L — Integratievoorbereiding

Nog **niet** direct de productie-site aanpassen.

Eerst:
1. bepalen welke bestanden/componenten uit de standalone tool naar technischbouwadvies.nl moeten
2. CSS-isolatieplan maken
3. fontstrategie bepalen
4. assetpad + data/config aanpak bepalen
5. homepageplaatsing en beschikbare breedte vastleggen
6. fallback voor reduced motion/mobile vastleggen
7. performancebudget voor de homepage bepalen
8. daarna pas een aparte integratiebranch in de echte productie-repo

---

## 11. Overdracht naar nieuwe chat

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md`, daarna `VISUAL-DESIGN-PROGRESS.md` en indien assets relevant zijn `ASSET-GUIDELINES.md`. Lees ze volledig. De A+B art direction, masterspread, Technical Line Art cover en 8-spread boekflow zijn al goedgekeurd en mogen niet opnieuw worden ontworpen tenzij de gebruiker dat expliciet vraagt. Fase H is via PR #12 naar main, Fase I via PR #13 en Fase J via PR #14. Fase K performance/accessibility staat op branch `agent/performance-accessibility`; controleer of die al is gemerged. Als dat zo is, ga door met Fase L: integratievoorbereiding. De echte website technischbouwadvies.nl nog niet aanpassen zonder aparte integratiebranch.

---

## 12. Snelle status

**GOEDGEKEURD**
- A+B art direction
- masterspread
- Technical Line Art cover
- 8 spreadtypes
- volledige boekflow

**OP MAIN**
- desktopvisuals
- motion polish
- mobile polish

**HUIDIGE BRANCH**
- `agent/performance-accessibility`

**DAARNA**
- integratievoorbereiding
- daarna pas aparte productie-integratiebranch
