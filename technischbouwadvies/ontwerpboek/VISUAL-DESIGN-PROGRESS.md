# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste beslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Publiek verdwijnen uiteindelijk: tutorial/TD Vision U, prototype V0.x, DEMO/IN UITWERKING/DEFINITIEF, technische statusinformatie en asset-pipelinecopy.
- Het doel is een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor latere integratie in technischbouwadvies.nl.
- De bestaande technische functies mogen worden hergebruikt, maar de huidige styling is niet leidend.
- De echte website technischbouwadvies.nl wordt voorlopig niet aangepast.
- Standalone werkmap: `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- Nieuwe workflow: **research → visual direction → static design → user review → implementatie → motion polish → mobile polish → integratie**.
- Geen nieuwe technische feature-versies bouwen zolang de art direction niet is gekozen.

---

## 2. Huidige fase

- **Fase A — Visual audit: AFGEROND**
- **Fase B — Online reference research: AFGEROND (shortlist v1)**
- **Fase C — Drie statische visuele concepten: VOLGENDE STAP**

De volgende chat moet dus NIET opnieuw beginnen met technische features of contentstatus. De eerstvolgende taak is drie visuele concepten maken.

---

## 3. Fase A — Audit huidige tool

### KEEP — technische basis

- desktop twee-pagina spread
- mobile één-pagina weergave
- swipe
- vorige/volgende logica
- toetsenbordnavigatie
- autoplay
- chapter timings
- open/closed lifecycle
- page-turn trigger/logica
- asset manifest
- single/gallery/full contenttypes
- image fallback
- reduced-motion ondersteuning

### REDESIGN

**Boekobject**
- verhouding en rug ogen te veel als CSS-demo
- paginadikte en slagschaduw zijn te grafisch
- boek moet veel dominanter worden dan de interface eromheen

**Cover**
- huidige beige/bronzen uitvoering oogt generiek
- te veel kleine labels en zichtbaar materiaal-effect
- nieuwe cover moet als editorial object zelfstandig premium ogen

**Page-turn**
- functionaliteit houden
- minder 3D-showeffect
- subtielere curl, schaduw en timing

**Typografie**
- Inter + Playfair voelt generiek/template-achtig
- te veel kleine uppercase labels
- sterker editorial schaalcontrast nodig
- definitieve fontkeuze later inclusief licentiecontrole

**Achtergrond**
- huidige gradients/decoratieve patronen maken de presentatie druk
- voorkeur: rustig galerie-achtig vlak / subtiele warme neutral

**Controls**
- huidige toolbar + autoplaybutton + dots voelen als app-UI
- eindrichting: subtiele pijlen/klikzones + kleine paginateller

### REMOVE uit publieke ervaring

- `Prototype V0.8`
- `Over prototype`
- `Los testprototype...`
- status-overview
- DEMO/IN UITWERKING/DEFINITIEF badges
- contentstatuspuntjes
- ontwikkelversie op cover
- assetpipeline-uitleg
- tutorial / leerstap / TD Vision U als publieke copy
- huidige grote processtrip
- uitgebreide interaction hint

### Hoofdprobleem huidige stijl

Er staan te veel UI-lagen tegelijk om het boek heen: header, hero-copy, trustline, chapter-meta, contentstatus, boek, toolbar, dots, autoplaystatus, interaction hint, processtrip en prototype-uitleg. Hierdoor krijgt het boek onvoldoende visuele autoriteit.

**Nieuwe regel:** minder interface, groter boek, grotere beelden, meer stilte.

---

## 4. Fase B — Reference shortlist v1

Referenties zijn alleen voor principes/art direction; niet letterlijk kopiëren.

### R1 — Architect portfolio | Editorial design — Agrippine Lesuffleur
https://www.behance.net/gallery/248171239/Architect-portfolio-Editorial-design

Meenemen:
- architecture magazine + portfolio hybride
- mineral/minimal
- ingetogen typografie
- ruimte voor plannen, perspectieven en modellen

### R2 — Architecture Portfolio, Editorial Design — Kiana Oveisi
https://www.behance.net/gallery/238349615/Architecture-Portfolio-Editorial-Design

Meenemen:
- calm/minimal editorial tone
- duidelijke hiërarchie
- goed ritme tussen diagrams, tekeningen en renders

### R3 — Architectural Portfolio: Print Edition
https://www.behance.net/gallery/247292785/Architectural-Portfolio-Print-Edition

Belangrijkste gridreferentie:
- Swiss typography
- strict modular grid
- gecontroleerde asymmetrie
- radical minimalism
- veel witruimte

### R4 — Design Editorial — Livro do TFG
https://www.behance.net/gallery/243246529/Design-Editorial-Livro-do-TFG

Meenemen:
- architectuurmonograph + technische tekeningen in één grafisch systeem
- sober en precies

### R5 — Architectural Portfolio Layout — Mint Architecture Studio
https://www.behance.net/gallery/235574213/Architectural-Portfolio-Layout

Meenemen:
- book-format
- clarity, rhythm, visual storytelling
- boek moet ook zonder animatie sterk zijn

### R6 — Minimal Portfolio Design for Interior Architecture
https://www.behance.net/gallery/237972769/Minimal-Portfolio-Design-for-Interior-Architecture

Meenemen:
- balanced white space
- muted tones
- rustige overgang van concept naar render

### R7 — Architecture Portfolio — Studio Kaesura
https://www.behance.net/gallery/217448421/Architecture-Portfolio

Meenemen:
- renders groot behandelen
- clean structured layout

### R8 — “30” Architecture Monograph
https://www.behance.net/gallery/8366979/30-Monograph

Meenemen:
- fysiek materiaalgevoel kan karakter geven
- in webversie materiaalgevoel extreem subtiel houden

### R9 — Norm Architects — official website
https://normcph.com/

Meenemen:
- warm soft-minimal
- rustige pacing
- natuurlijke neutralen
- content krijgt ruimte

### R10 — OMA Projects — official website
https://www.oma.com/projects

Meenemen:
- architectuurproject > interface/chrome
- heldere informatiearchitectuur
- navigatie functioneel maar terughoudend

### R11 — Codrops Page Transitions
https://tympanus.net/codrops/hub/tag/page-transition/

Meenemen:
- actuele GSAP/WebGPU/transitions onderzoeken
- geen zware technologie gebruiken tenzij zichtbaar beter

### R12 — Codrops Podium case study (2026)
https://tympanus.net/codrops/2026/06/23/podium-building-a-website-where-running-becomes-storytelling/

Belangrijkste motionles:
- restraint
- beeld/content zelf draagt transition
- zware effecten werden verwijderd omdat ze aandacht van media afleidden
- spacing, hierarchy en pacing zijn belangrijker dan extra effecten

---

## 5. Researchconclusies

De referenties wijzen dezelfde richting op:

- witruimte > extra effecten
- technische tekeningen mogen groot worden
- renders mogen full bleed / bijna full bleed
- weinig typografische stijlen, maar sterk schaalcontrast
- asymmetrie binnen een streng grid
- spreads mogen inhoudelijk verschillend zijn
- boekgevoel komt vooral uit verhouding, gutter, contactschaduw en ritme
- bijna geen zichtbare papiertexture nodig
- motion moet aan de content gekoppeld zijn
- brons/goud alleen als mini-accent
- interface rondom het boek vrijwel laten verdwijnen

---

## 6. Drie richtingen voor Fase C

### Concept A — Swiss Architectural Editorial

- licht/off-white
- strak modulair grid
- charcoal typography
- minimale accentkleur
- asymmetrische spreads
- nauwelijks zichtbaar 3D-materiaal

Sterk: technische tekeningen en professionele architectuuruitstraling.

### Concept B — Warm Architectural Monograph

- warm off-white
- subtiel fysiek boekgevoel
- rustige serif/sans combinatie
- zachte contactschaduw
- museumachtige ruimte rond fotografie/renders

Sterk: premium, warm en betrouwbaar.

### Concept C — Digital Gallery Book

- minder letterlijk fysiek boek
- grotere digitale beeldmomenten
- bijna verborgen navigatie
- motion/transitions als onderdeel van storytelling

Sterk: renders, modern webgevoel en mobile potentie.

### Voorlopige voorkeur na research

**A + B:**
- circa 65% Swiss/editorial
- circa 25% warm monograph
- circa 10% digital motion

---

## 7. Regels voor de conceptmockups

- boek/spread visueel dominant
- geen statusbadges
- geen prototypeversie
- geen grote toolbar
- geen zichtbare autoplaytekst
- kleine rustige paginanummers
- zeer korte copy
- minstens één 80–90% beeldmoment
- technische tekening krijgt veel witruimte
- asymmetrische comparison-spread testen
- zeer subtiele gutter
- geen zware gradients achter het boek
- brons alleen als klein accent
- iedere spread moet ook als stil screenshot professioneel ogen

---

## 8. Exacte volgende taak — Fase C

**Nog niet coderen.**

Maak drie statische desktopconcepten voor exact dezelfde testspread:

**Testinhoud:**
- linkerpagina: grote technische plattegrond / lijntekening
- rechterpagina: grote exterieurrender + zeer korte projectcopy
- subtiel paginanummer
- geen toolbar/status/prototypecopy

Te maken:
1. Concept A — Swiss Architectural Editorial
2. Concept B — Warm Architectural Monograph
3. Concept C — Digital Gallery Book

Daarna naast elkaar beoordelen op:
- premium uitstraling
- architecturale geloofwaardigheid
- aansluiting Technisch Bouwadvies
- ruimte voor tekeningen
- ruimte voor renders
- website-integratie
- mobile potentie

**Pas na keuze:** Fase D — één masterspread verfijnen en daarna implementeren.

---

## 9. Overdracht naar nieuwe chat

Gebruik exact dit bericht:

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig. Inspecteer daarna pas de bestaande ontwerpboekcode. De tool is publiek GEEN leeromgeving en mag geen tutorial/prototype/status-uitstraling hebben. Fase A (visual audit) en Fase B (reference research) zijn afgerond. De eerstvolgende taak is Fase C: drie statische visuele concepten maken — Swiss Architectural Editorial, Warm Architectural Monograph en Digital Gallery Book — met exact dezelfde testspread. Nog niet de echte website technischbouwadvies.nl aanpassen en nog geen nieuwe technische features bouwen.

---

## 10. Snelle status

**AFGEROND**
- technische basis t/m V0.8
- koerswijziging naar premium visualisatie
- Visual Design Roadmap
- Fase A visual audit
- Fase B reference shortlist v1
- drie art-direction richtingen gedefinieerd

**VASTSTAAND**
- publiek geen leeromgeving
- publiek geen prototype/status UI
- visual-first
- art direction eerst, code later
- voorlopige voorkeur Concept A + B

**NU DOEN**
- Fase C: drie statische conceptspreads maken en vergelijken

**DAARNA**
- richting kiezen
- masterspread
- cover redesign
- spread template system
- page-turn redesign
- controls minimaliseren
- mobile design
- integratievoorbereiding
