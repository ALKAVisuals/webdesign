# Technisch Bouwadvies — Visual Design Roadmap

**Actuele uitvoeringsfase:** `M.1 — STYLE LOCK`

Deze roadmap vervangt de oude volgorde waarin spreads en motion te vroeg afzonderlijk werden verfijnd.

---

## 1. Hoofddoel

Het interactieve ontwerpboek is **geen leeromgeving**. Het moet functioneren als een premium digitaal architectuurboek / projectpresentatie voor Technisch Bouwadvies.

Het resultaat moet uitstralen:
- architecturaal
- editorial
- premium
- technisch precies
- rustig
- warm
- beeldgedreven

Publiek nooit tonen:
- tutorial / TD Vision U
- prototype V0.x
- DEMO / IN UITWERKING / DEFINITIEF
- interne ontwikkelaarsstatus
- asset/test pipeline
- dashboardachtige UI

---

## 2. Primaire visuele referentie

De door de gebruiker goedgekeurde presentatieboard:

**`VOLLEDIGE BOEKFLOW — COVER + 8 SPREADS`**

is de primaire visuele bron van waarheid.

Gebruik deze voor:
- boekproporties
- typografie
- witruimte
- papierkleur
- bronsaccenten
- image/text balance
- cover
- technische tekeningen
- algemene editorial sfeer

De eerder goedgekeurde Plattegrond-masterspread blijft ondersteunende detailreferentie.

---

## 3. Vaste art direction

**A+B**
- 65% Swiss / Architectural Editorial
- 25% Warm Architectural Monograph
- 10% subtiele digitale motion

Designregels:
- warm off-white
- charcoal
- subtiel brons
- editorial serif + neutrale sans
- veel witruimte
- technische tekeningen groot en rustig
- renders dominant
- materiaalgevoel subtiel
- controls bijna onzichtbaar
- geen zware 3D / gaming / glassmorphism

---

## 4. Technische basis — behouden waar bruikbaar

Bestaand en functioneel:
- desktop double spread
- mobile single page
- swipe
- keyboard
- autoplay
- cover/open/end lifecycle
- page-turn basis
- asset manifest
- single/gallery/full layouts
- responsive basis
- reduced motion
- accessibility/performance helpers

Deze techniek mag blijven, maar mag nooit de visuele kwaliteit dicteren.

---

# 5. Uitvoeringsvolgorde vanaf nu

## Fase M.1 — STYLE LOCK

**Eerst één perfecte algemene stijl. Nog niet alle spreads afwerken.**

### M.1A — Boekframe
Vastzetten:
- desktop boekbreedte/hoogte
- spread ratio
- mobile single-page ratio
- plaatsing in viewport
- outer margins
- page thickness
- spine/gutter geometrie

Acceptatie:
> Het boek voelt als het hoofdobject en niet als een webcomponent.

### M.1B — Papier / schaduw / gutter
Vastzetten:
- paper tone
- subtle texture
- page edge
- contact shadow
- spine shadow
- linker/rechterpagina verschil

Acceptatie:
> Premium monograph-gevoel zonder overdreven skeuomorfisme.

### M.1C — Typografie
Vastzetten:
- cover title
- spread title
- kicker/chapter number
- body
- captions
- footer
- page numbers
- leading/tracking

Acceptatie:
> Niets clipt; hiërarchie matcht de referentieboard.

### M.1D — Controls
Vastzetten:
- prev/next
- counter
- progress line
- autoplay
- visibility per lifecycle state
- mobile touch size

Acceptatie:
> Functioneel maar visueel ondergeschikt.

### M.1E — Cover
Vastzetten:
- line-art cover
- title fit
- subtitle
- kicker
- rule
- line-art scale/opacity
- brand line
- physical edge/shadow

Acceptatie:
> Cover screenshot kan zelfstandig als premium architectuurboek-cover doorgaan.

### M.1F — Open masterspread
Eén spread volledig perfect maken, bij voorkeur Projectintro of Plattegrond.

Vastzetten:
- grid
- margins
- image/text ratio
- footer/page number
- technical drawing treatment
- render treatment

Acceptatie:
> Eén open-spread screenshot moet overtuigend overeenkomen met de goedgekeurde board.

### STYLE LOCK GATE
Pas door naar M.2 nadat de gebruiker expliciet bevestigt:
> De algemene stijl klopt.

---

## Fase M.2 — Spread System toepassen

Pas na Style Lock:
1. Projectintro
2. Varianten
3. Plattegrond
4. Gevel & doorsnede
5. Bouwdetail
6. Interieur & materialen
7. Exterieur impressie
8. Resultaat / CTA

Elke spread gebruikt exact dezelfde locked:
- geometrie
- design tokens
- typografie
- paper/shadow system
- controls
- image treatment

Geen spread mag opnieuw een eigen stijl introduceren.

---

## Fase M.3 — Mobile spread QA

Na desktop spread system:
- alle spreads op 390px
- 360px
- korte schermhoogte
- safe area
- text fit
- image crop/contain
- controls
- swipe
- page states

Mobile is een bewust ontworpen single-page editorial ervaring, geen verkleinde desktopspread.

---

## Fase M.4 — Motion finaliseren

Pas als statische stijl en spreads goedgekeurd zijn:
- cover-open
- page-turn
- turn shadow
- receiving page
- swipe motion
- autoplay timing
- end state

Motion ondersteunt content en mag nooit de leesbaarheid aantasten, vooral niet in iOS Safari.

---

## Fase N — Finale technische QA

Controleren:
- reduced motion
- keyboard
- focus
- screen reader labels
- asset loading
- image dimensions
- lazy loading
- performance
- layout shift
- browser compatibility

---

## Fase O — Integratievoorbereiding

Pas na expliciete visuele goedkeuring.

Productie-repo:
`ALKAVisuals/alkabouwadvies`

Voor integratie controleren:
- CSS volledig geïsoleerd/namespaced
- geen globale regressies
- assets lokaal of gecontroleerd geladen
- fonts compatible
- Netlify preview
- rollbackplan

**Niet mergen naar productie zonder expliciete gebruiker-goedkeuring.**

---

# 6. Huidige status

Afgerond / technisch aanwezig:
- A t/m L
- Fase M eerste QA-pass
- mobiele QA-fixes PR #19–#22
- desktop cover/Projectintro polish PR #23

Maar:

**De browserstijl is nog NIET definitief goedgekeurd.**

Daarom is de eerstvolgende actie niet “volgende spread bouwen”, maar:

> **M.1A — Boekframe / verhouding exact vastzetten aan de hand van de goedgekeurde full-book-flow board.**

---

# 7. Veiligheidsregels

Tijdens M.1 t/m M.4:
- alleen `ALKAVisuals/webdesign`
- niet `ALKAVisuals/alkabouwadvies`
- geen live homepagewijzigingen
- geen ALKA Visuals-sitewijzigingen
- geen productie-PR openen

Eerdere productie-PR #7 is gesloten zonder merge en blijft gesloten.

---

# 8. Instructie voor nieuwe ChatGPT-chat

Open eerst:
1. `NEXT-CHAT-HANDOFF.md`
2. `VISUAL-DESIGN-PROGRESS.md`
3. deze roadmap

Vraag de gebruiker de goedgekeurde `VOLLEDIGE BOEKFLOW — COVER + 8 SPREADS` board opnieuw te uploaden als deze niet zichtbaar is in de nieuwe chat.

Start daarna direct bij:

**Fase M.1A — Boekframe / verhouding**

Werk één onderdeel volledig af, laat het visueel beoordelen en ga pas daarna naar M.1B.
