# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste projectbeslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Publiek verdwijnen: tutorial/TD Vision U, prototype V0.x, DEMO/IN UITWERKING/DEFINITIEF, technische statusinformatie en asset-pipelinecopy.
- Het doel is een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor latere integratie in technischbouwadvies.nl.
- De echte website technischbouwadvies.nl wordt voorlopig niet aangepast.
- Standalone werkmap: `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- Workflow: **research → visual direction → static design → user approval → implementatie → motion polish → mobile polish → integratie**.

---

## 2. Afgeronde visuele fasen

- **Fase A — Visual audit: AFGEROND**
- **Fase B — Online reference research: AFGEROND**
- **Fase C — Visuele richtingen vergelijken: AFGEROND**
- **Fase D — Masterspread: AFGEROND EN GOEDGEKEURD**
- **Fase E — Cover redesign: AFGEROND EN GOEDGEKEURD**
- **Fase F — Spread template system: AFGEROND EN GOEDGEKEURD**
- **Fase G — Volledige statische boekflow: AFGEROND EN GOEDGEKEURD**
- **Fase H — Nieuwe visuele stijl implementeren in standalone boektool: UITGEVOERD OP IMPLEMENTATIEBRANCH**

---

## 3. Definitieve art direction

### A+B

De vaste visuele basis is een combinatie van:

- ca. 65% Swiss / Architectural Editorial
- ca. 25% Warm Architectural Monograph
- ca. 10% subtiele digitale motion

### De goedgekeurde masterspread is de design foundation

De eerder goedgekeurde `06 — Plattegrond`-masterspread bepaalt vanaf nu:

- boekverhouding
- warm off-white papier
- charcoal tekst
- subtiel bronsaccent
- editorial serif + neutrale sans
- ruime marges
- gecontroleerd grid
- rustige gutter/rug
- subtiele paginadikte en contactschaduw
- technische tekeningen groot en helder
- renders groot / bijna full bleed waar passend
- minimale publieke UI

Deze basis niet opnieuw onderzoeken tenzij de gebruiker dat expliciet vraagt.

---

## 4. Definitieve coverrichting

### Gekozen: Technical Line Art + rust van Pure Typography

De gebruiker heeft deze richting goedgekeurd.

Vaste kenmerken:

- warm off-white cover
- grote rustige titel `ONTWERPBOEK`
- subtitel `VAN CONCEPT NAAR TECHNISCH ONTWERP`
- zeer subtiele technische architectuurlijntekening
- charcoal typografie
- één klein bronsaccent
- onderaan subtiel `TECHNISCH BOUWADVIES`
- geen projectrender als coverbasis
- geen prototype-, versie- of statusinformatie

---

## 5. Definitief spread system — 8 spreads

De volgende 8 spreadtypes zijn visueel ontworpen en goedgekeurd:

1. **Projectintro / hero**
   - korte projectcontext
   - één grote architectuurvisual

2. **Variantenvergelijking**
   - meerdere ontwerpopties
   - strak en vergelijkbaar grid

3. **Plattegrond**
   - tekst/legenda links
   - grote technische tekening rechts

4. **Gevel & doorsnede**
   - technische aanzichten en doorsnede
   - veel witruimte

5. **Bouwdetail**
   - groot detail
   - materiaal-/opbouwinformatie

6. **Interieur & materialen**
   - grote interieurvisual
   - subtiel materiaalpalet

7. **Exterieur impressie**
   - render krijgt visuele dominantie

8. **Resultaat / CTA**
   - afsluitend resultaat
   - subtiele doorverwijzing naar Technisch Bouwadvies

---

## 6. Goedgekeurde boekflow

Vaste volgorde:

**Cover → Projectintro → Varianten → Plattegrond → Gevel & doorsnede → Bouwdetail → Interieur & materialen → Exterieur impressie → Resultaat / CTA**

De volledige statische boekflow is als één geheel ontworpen en door de gebruiker goedgekeurd.

---

## 7. Publieke UI — definitieve richting

Niet zichtbaar in de publieke ervaring:

- Prototype V0.x
- DEMO / IN UITWERKING / DEFINITIEF
- status-overview
- statusdots
- ontwikkelaarsinformatie
- grote toolbar
- zichtbare autoplaytekst
- uitgebreide interaction hints
- tutorial / TD Vision U / leerfase
- asset-pipelinecopy

Wel behouden, zeer subtiel:

- vorige/volgende pijlen
- kleine spreadteller
- minimale autoplaybediening
- swipe
- keyboard navigation

---

## 8. Technische basis die behouden blijft

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

## 9. Implementatie Fase H — uitgevoerd

Branch:

`agent/implement-approved-book-visuals`

Op deze branch is de oude publieke prototypepresentatie vervangen door het goedgekeurde visuele systeem.

### Gewijzigd / toegevoegd

- `index.html`
  - oude leer-/prototypecopy verwijderd
  - status UI verwijderd
  - nieuwe rustige presentatiecontext
  - goedgekeurde Technical Line Art cover
  - minimale controls

- `approved-book.css`
  - volledige A+B visuele laag
  - goedgekeurde boekverhouding
  - papier, schaduw, gutter, typografie en spreadopmaak
  - desktop/mobile basis

- `approved-book-fixes.css`
  - kleine compatibiliteitsoverrides

- `book-data.js`
  - oude 14 hoofdstukken vervangen door 16 boekpagina's = 8 spreads
  - geen tutorial/leeromgevingverhaal meer

- `asset-manifest.js`
  - assets gekoppeld aan de nieuwe spread-ID's

- `book-timings.js`
  - timing afgestemd op de 8 spreads

- `book.js`
  - editorial presentations: text, gallery, technical, materials, visual, CTA
  - spreadteller 01/08 t/m 08/08
  - bestaande autoplay/swipe/keyboard/lifecycle behouden

### Scopeveiligheid

Alle wijzigingen blijven binnen:

`technischbouwadvies/ontwerpboek/`

De echte website `technischbouwadvies.nl` is niet aangepast.

---

## 10. Validatie-opmerking

De GitHub branchdiff is gecontroleerd en raakt uitsluitend de standalone ontwerpboekmap.

Een lokale `git clone`/Node-validatie kon in de huidige runtime niet worden uitgevoerd omdat de container geen DNS/internetverbinding naar GitHub had. Daarom moet na merge de openbare GitHub Pages-versie nog visueel/functioneel worden gecontroleerd.

Dit is **geen reden om de visuele koers opnieuw te ontwerpen**. Eventuele problemen worden als implementatie-/QA-fixes behandeld.

---

## 11. Exacte volgende fase

### Fase I — Live visual QA + page-turn / motion redesign

Volgorde:

1. openbare GitHub Pages-versie controleren
2. desktopspread vergelijken met de goedgekeurde masterspread
3. layoutbugs herstellen
4. cover-open animatie beoordelen
5. page-turn subtieler en realistischer maken
6. timing/schaduw/perspectief verfijnen
7. daarna mobile polish

Belangrijk: eerst de nieuwe statische browserweergave laten kloppen; motion mag slechte layout nooit maskeren.

---

## 12. Nieuwe chat — exacte overdracht

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig voordat je iets wijzigt. Het ontwerp is al goedgekeurd: A+B art direction, de masterspread, de Technical Line Art cover en de volledige 8-spread boekflow staan vast en mogen niet opnieuw worden ontworpen tenzij de gebruiker dat expliciet vraagt. Fase H heeft de nieuwe visuele stijl in de standalone boektool geïmplementeerd. De volgende taak is Fase I: de openbare GitHub Pages-versie visueel/functioneel controleren, eventuele implementatiebugs herstellen en daarna de page-turn/motion verfijnen. De echte website technischbouwadvies.nl nog niet aanpassen.

---

## 13. Snelle status

**GOEDGEKEURD**
- A+B art direction
- masterspread
- Technical Line Art cover
- 8 spreadtypes
- volledige boekflow

**GEÏMPLEMENTEERD OP BRANCH**
- nieuwe publieke shell
- nieuwe cover
- nieuwe spreaddata
- nieuwe editorial layouts
- minimale controls
- assetmapping
- timings

**NU DOEN**
- merge implementatiebranch
- live GitHub Pages QA
- daarna page-turn / motion polish

**LATER**
- mobile polish
- performance/accessibility
- integratie in technischbouwadvies.nl
