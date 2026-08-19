# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste beslissingen — NIET OPNIEUW ONTWERPEN

Het ontwerpboek is publiek **geen leeromgeving**.

Niet tonen:
- tutorial / TD Vision U / leerfase
- prototype V0.x
- DEMO / IN UITWERKING / DEFINITIEF
- ontwikkelaarsstatus / asset-pipelinecopy
- grote toolbar / dashboardachtige UI

Doel: een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor Technisch Bouwadvies.

### Goedgekeurde art direction
**A+B**
- ca. 65% Swiss / Architectural Editorial
- ca. 25% Warm Architectural Monograph
- ca. 10% subtiele digitale motion

Vast:
- warm off-white papier
- charcoal tekst
- subtiel brons
- editorial serif + neutrale sans
- ruim grid / veel witruimte
- subtiele gutter, paginadikte en contactschaduw
- technische tekeningen groot en helder
- renders groot / bijna full bleed waar passend
- minimale publieke bediening

De goedgekeurde `06 — Plattegrond`-masterspread is de visuele bron van waarheid.

---

## 2. Cover — GOEDGEKEURD

**Technical Line Art + rust van Pure Typography**

- titel `ONTWERPBOEK`
- subtitel `VAN CONCEPT NAAR TECHNISCH ONTWERP`
- zeer subtiele architectuurlijntekening
- warm off-white cover
- charcoal + klein bronsaccent
- subtiel `TECHNISCH BOUWADVIES`

---

## 3. Definitief spread system — GOEDGEKEURD

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

## 4. Prototype/testlab — `ALKAVisuals/webdesign`

Werkmap:

`technischbouwadvies/ontwerpboek/`

Afgerond en op `main`:
- Fase A — Visual audit
- Fase B — Online reference research
- Fase C — Visuele richtingen
- Fase D — Masterspread
- Fase E — Cover redesign
- Fase F — Spread template system
- Fase G — Volledige statische boekflow
- Fase H — Visueel systeem implementeren — PR #12
- Fase I — Page-turn / motion polish — PR #13
- Fase J — Mobile visual polish — PR #14
- Fase K — Performance & accessibility — PR #15
- Fase L — Integratieplan — PR #16
- **Fase M — Visual QA & perfectionering — eerste pass op main via PR #18**

Belangrijke bestanden:
- `VISUAL-DESIGN-ROADMAP.md`
- `VISUAL-DESIGN-PROGRESS.md`
- `ASSET-GUIDELINES.md`
- `INTEGRATION-PLAN.md`
- `phase-m-visual-qa.css`

---

## 5. Fase M — huidige status

### Eerste QA-bevinding
De technische A+B-styling was aanwezig, maar belangrijke beeldspreads gebruikten nog eenvoudige placeholder-SVG's. Daardoor leek de browserimplementatie veel minder op de goedgekeurde visuele mockups.

### PR #18 — gemerged naar `webdesign/main`
Fase-M-pass 1 bevat:
- echte architectuurbeelden voor Projectintro, Varianten, Interieur/ruimtelijke visualisatie, Exterieur en Resultaat
- plattegrond blijft een technische `contain`-tekening
- groter, dominanter boek
- rustiger papierpatroon, gutter en contactschaduw
- minder dominante controls
- sterkere editorial witruimte
- verbeterde variantengalerij
- mobile varianten worden niet microscopisch weergegeven
- extra stylesheet `phase-m-visual-qa.css`
- cacheversies in `index.html` vernieuwd

### Veilige live testomgeving
Gebruik voor beoordeling uitsluitend:

`https://alkavisuals.github.io/webdesign/technischbouwadvies/ontwerpboek/`

Voeg bij twijfel een nieuwe querystring toe om lokale browsercache te omzeilen.

---

## 6. Productie — BEWUST GEPARKEERD

Bevestigde productie-repo:

**`ALKAVisuals/alkabouwadvies`**

Belangrijk:
- productiehomepage `index.html` is niet aangepast voor het ontwerpboek
- eerder aangemaakte integratiebranch `agent/design-process-book-integration` bestaat alleen als technisch referentiepunt
- draft PR #7 is op 2026-08-19 **GESLOTEN ZONDER MERGE**
- geen ontwerpboekcode is naar productie-`main` gegaan
- geen wijzigingen aan de ALKA Visuals-website

Vanaf nu alle ontwerpiteratie uitsluitend in `ALKAVisuals/webdesign` totdat de gebruiker het visueel expliciet goedkeurt.

---

## 7. Open QA in Fase M

Nog beoordelen op de live testpagina:
- coververhouding en typografie
- boekgrootte op desktop
- projectintro
- varianten
- plattegrond
- gevel & doorsnede
- bouwdetail
- interieur/materialen
- exterieurrender
- resultaat/CTA
- paper/gutter/shadow
- page-turn
- controls
- mobiel 390px / 360px / korte schermhoogte

### Belangrijk
Fase M is pas klaar wanneer de gebruiker expliciet bevestigt dat de browserversie visueel overeenkomt met de goedgekeurde richting.

---

## 8. Eerstvolgende stap

1. nieuwste GitHub Pages testversie openen
2. cover + geopende spreads visueel beoordelen
3. concrete verschillen met de goedgekeurde mockups per spread herstellen in `webdesign`
4. indien nodig Fase-M-pass 2 / 3 uitvoeren
5. pas na expliciete visuele goedkeuring opnieuw over productie-integratie praten

Geen productiebranch openen of homepage-hook opnieuw activeren vóór die goedkeuring.

---

## 9. Overdracht naar nieuwe chat

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md`, daarna `VISUAL-DESIGN-PROGRESS.md`, `ASSET-GUIDELINES.md` en `INTEGRATION-PLAN.md`. De A+B art direction, masterspread, Technical Line Art cover en 8-spread flow zijn definitief goedgekeurd. Fase M is actief. De eerste Fase-M-pass staat op `webdesign/main` via PR #18 en vervangt belangrijke placeholdervisuals door echte architectuurbeelden, vergroot het boek en verfijnt papier, controls en mobile. Alle verdere iteratie gebeurt uitsluitend in `webdesign`. Productie-repo `ALKAVisuals/alkabouwadvies` is bevestigd, maar draft PR #7 is gesloten zonder merge en productie moet onaangeraakt blijven totdat de gebruiker de testversie expliciet visueel goedkeurt.

---

## 10. Snelle status

**GOEDGEKEURD**
- A+B art direction
- masterspread
- Technical Line Art cover
- 8 spreadtypes
- complete boekflow

**OP TEST MAIN (`webdesign`)**
- desktopvisuals
- motion
- mobile
- performance/accessibility
- Fase-M-pass 1

**PRODUCTIE**
- niet aangepast
- PR #7 gesloten zonder merge

**NU**
- live visuele QA op de GitHub Pages testversie
- daarna gerichte Fase-M-correcties
