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
- **Fase H — Visueel systeem implementeren: AFGEROND + GEMERGED NAAR MAIN**

Fase H is via PR #12 naar `main` gemerged. De standalone boektool bevat nu de nieuwe A+B-shell, gekozen cover, 8 spreads, minimale controls en vernieuwde editorial data/layouts.

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
- page-turn trigger/logica
- asset manifest
- single/gallery/full assettypes
- image fallback
- reduced motion

---

## 8. Fase I — Page-turn & motion polish

**Status: GEÏMPLEMENTEERD OP BRANCH `agent/motion-polish`**

Toegevoegd:

### `motion-polish.css`
- rustiger cover-open beweging
- coveranimatie afgestemd op bestaande lifecycle-timing
- groter maar rustiger perspectief
- subtielere contactschaduw
- realistischere bewegende paginaschaduw
- page-turn met zachtere acceleratie en afremming
- minder theatrale 3D-rotatie
- subtiele reactie van boek/schaduw tijdens omslaan
- zachtere overgang naar eindstaat
- aparte, kortere mobile motion
- `prefers-reduced-motion` blijft gerespecteerd

### `motion-polish.js`
- observeert alleen de bestaande page-turn status
- voegt tijdelijk `is-turning-next` / `is-turning-prev` toe aan het boek
- verandert de bestaande `book.js` niet
- maakt gekoppelde schaduw- en dieptefeedback mogelijk

### `index.html`
- laadt `motion-polish.css` als laatste visuele laag
- laadt `motion-polish.js` na `book.js`

### Validatie
- branch is gebaseerd op actuele `main`
- wijzigingen raken alleen `technischbouwadvies/ontwerpboek/`
- `motion-polish.js` is lokaal gevalideerd met `node --check`

De openbare GitHub Pages-route kon vanuit de huidige browsingomgeving nog niet betrouwbaar worden geopend. Daarom is browser-visuele QA nog geen afgeronde claim.

---

## 9. Eerstvolgende stap

Na merge van Fase I:

### Fase J — Mobile visual polish + browser QA

1. desktop live layout controleren zodra de publieke route bereikbaar is
2. cover/open/page-turn visueel nalopen
3. mobile single-page compositie apart beoordelen
4. swipe feedback en mobile page-turn verfijnen
5. typografie/marges per mobile breakpoint controleren
6. overflow/clipping controleren
7. daarna performance/accessibility-polish

Belangrijk: art direction, cover en spreads niet opnieuw ontwerpen; alleen implementatie- en responsive QA.

---

## 10. Overdracht naar nieuwe chat

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig. De A+B art direction, masterspread, Technical Line Art cover en 8-spread boekflow zijn al goedgekeurd en mogen niet opnieuw worden ontworpen tenzij de gebruiker dat expliciet vraagt. Fase H is naar main gemerged. Fase I heeft de premium page-turn/motion polish op branch `agent/motion-polish` geïmplementeerd. Controleer of die branch al is gemerged; zo niet, valideer scope en merge hem. Daarna is Fase J: mobile visual polish en browser-QA. De echte website technischbouwadvies.nl nog niet aanpassen.

---

## 11. Snelle status

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
- assetmapping en timings

**HUIDIGE BRANCH**
- `agent/motion-polish`
- premium cover/page-turn/shadow motion

**VOLGENDE FASE**
- mobile polish + browser QA
- daarna performance/accessibility
- pas daarna integratie in technischbouwadvies.nl
