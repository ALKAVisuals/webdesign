# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste beslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Publiek geen tutorial/TD Vision U, prototype V0.x, DEMO/IN UITWERKING/DEFINITIEF, ontwikkelaarsstatus of asset-pipelinecopy.
- Doel: een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor latere integratie in technischbouwadvies.nl.
- De goedgekeurde art direction wordt niet opnieuw ontworpen tenzij de gebruiker dat expliciet vraagt.
- Standalone werkmap: `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- De echte productie-site wordt pas gewijzigd via een aparte integratiebranch nadat de juiste productie-repo en stack zijn bevestigd.

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
- **Fase H — Visueel systeem implementeren: MAIN via PR #12**
- **Fase I — Page-turn & motion polish: MAIN via PR #13**
- **Fase J — Mobile visual polish: MAIN via PR #14**
- **Fase K — Performance & accessibility: MAIN via PR #15**

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
- accessibility/focus polish
- reduced-motion autoplaybehandeling
- next-spread idle preload
- asset manifest + image fallback
- assetoptimalisatierichtlijnen

---

## 7. Fase K — Performance & accessibility — OP MAIN

Via PR #15 toegevoegd:

### `accessibility-polish.css`
- duidelijke `:focus-visible` states
- reduced-motion timerprogress uit
- forced-colors fallback

### `accessibility-performance.js`
- dynamisch toegankelijk autoplaylabel
- `prefers-reduced-motion` pauzeert autoplay standaard
- bewuste opt-in blijft mogelijk
- `Escape` pauzeert autoplay
- automatische eindfocus wordt niet gestolen zonder bewuste interactie
- volgende pagina/spread idle-preload
- geen preload bij `saveData`

### `index.html`
- `display=swap` voor fonts
- centrale `aria-live` statusregion
- dynamische boekpagina's zelf niet meer live-announcen
- boek als expliciete region
- controls gekoppeld via `aria-controls`

### `ASSET-GUIDELINES.md`
Vaste afspraken voor:
- AVIF/WebP renders
- SVG/WebP technische tekeningen
- resolutie
- crop
- bestandsnamen
- alt-tekst
- loading
- publicatiecheck

---

## 8. Open QA-punt

De openbare GitHub Pages-route kon vanuit de huidige browsertool niet betrouwbaar worden geladen en de container heeft geen DNS-toegang tot GitHub.

Daarom:
- code-/structuur-QA: uitgevoerd
- live screenshot-QA desktop/mobile: **nog open**

Dit is een implementatie-QA-punt en geen reden om de art direction opnieuw te ontwerpen.

---

## 9. Fase L — Integratievoorbereiding — HUIDIGE BRANCH

Branch:

`agent/integration-plan`

Nieuw document:

`INTEGRATION-PLAN.md`

Daarin staat vastgelegd:
- juiste productie-repo eerst bevestigen
- prototype-CSS niet rechtstreeks kopiëren
- productiecomponent namespacen onder `.tba-designbook`
- globale `body/html/button/a/:root` regels verwijderen of root-scopen
- JS-selectors root-scopen in plaats van globale IDs
- productiecomponentstructuur
- homepageplaatsing
- fontstrategie
- productie-assetsmap
- IntersectionObserver / lazy initialisatie
- autoplay alleen in viewport
- no-JS fallback
- controls
- optionele analytics
- integratietesten
- aparte productiebranch
- rollbackstrategie
- go/no-go checklist

Belangrijkste technische conclusie:

**De standalone tool is visueel/technisch de bron, maar niet rechtstreeks copy-paste-ready voor productie vanwege globale prototype-CSS en globale selectors.** De productie-integratie wordt een geïsoleerde component.

---

## 10. Productierepo-status

Binnen de GitHub-connector is wel `ALKAVisuals/technischbouwadvies-dashboard` gevonden, maar dat is een dashboardrepo en wordt **niet** automatisch als publieke website-repo behandeld.

De juiste productie-repo voor technischbouwadvies.nl moet dus eerst expliciet worden geïdentificeerd voordat integratiecode wordt geschreven.

---

## 11. Eerstvolgende stap

Na merge van Fase L:

1. gebruiker / repo-context gebruiken om de echte productie-repo te identificeren
2. frontendstack en homepagebestand/component inspecteren
3. bestaande fonts, CSS-architectuur en deploystrategie inspecteren
4. `INTEGRATION-PLAN.md` vertalen naar een exact migratiebestandenschema
5. aparte productiebranch maken
6. pas daarna het boek daadwerkelijk integreren

Geen productiecode aanpassen zolang stap 1–4 niet zijn afgerond.

---

## 12. Overdracht naar nieuwe chat

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md`, daarna `VISUAL-DESIGN-PROGRESS.md`, `ASSET-GUIDELINES.md` en `INTEGRATION-PLAN.md`. Lees ze volledig. De A+B art direction, masterspread, Technical Line Art cover en 8-spread boekflow zijn al goedgekeurd en mogen niet opnieuw worden ontworpen tenzij de gebruiker dat expliciet vraagt. Fase H t/m K staan op `main` via PR #12–#15. Fase L integratievoorbereiding staat op branch `agent/integration-plan`; controleer of die al is gemerged. De volgende echte stap is de correcte productie-repo voor technischbouwadvies.nl identificeren en de stack/homepage/deploystrategie inspecteren. Niet aannemen dat `technischbouwadvies-dashboard` de publieke website-repo is en nog geen productiecode wijzigen voordat dit bevestigd is.

---

## 13. Snelle status

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
- performance/accessibility

**HUIDIGE BRANCH**
- `agent/integration-plan`

**VOLGENDE ECHTE STAP**
- productie-repo identificeren
- stack/homepage/deploy inspecteren
- dan pas aparte integratiebranch
