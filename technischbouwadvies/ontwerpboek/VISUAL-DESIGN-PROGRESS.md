# Technisch Bouwadvies — Visual Design Progress

**Doel van dit bestand:** dit is het actuele voortgangs- en overdrachtsdocument voor de visual redesign van het interactieve ontwerpboek. Een nieuwe ChatGPT-chat moet eerst `VISUAL-DESIGN-ROADMAP.md` lezen en daarna dit bestand. Dit bestand zegt wat al is afgerond, welke beslissingen vaststaan en wat exact de volgende stap is.

**Laatste update:** 2026-08-19

---

## 1. Vaste projectbeslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Woorden als tutorial, TD Vision U, prototype, demo, in uitwerking en definitief mogen uiteindelijk niet zichtbaar zijn voor bezoekers.
- Het doel is een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor toekomstige integratie in technischbouwadvies.nl.
- De bestaande technische functies mogen worden hergebruikt, maar de huidige visuele styling is niet leidend.
- De echte website technischbouwadvies.nl wordt nog niet aangepast.
- De standalone omgeving blijft `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- Vanaf nu is de workflow: **research → visual direction → static design → beoordeling → implementatie → motion polish → mobile polish → integratie**.
- Er worden niet meer automatisch nieuwe V0.x-functies gebouwd zolang de art direction niet staat.

---

## 2. Huidige hoofdstatus

### Fase A — Visual audit
**Status: AFGEROND (eerste volledige audit)**

### Fase B — Online reference research
**Status: AFGEROND (reference shortlist v1)**

### Fase C — Drie visuele concepten
**Status: VOLGENDE FASE**

De volgende chat / werksessie moet dus NIET opnieuw beginnen met technische features of contentstatus. De eerstvolgende taak is drie visuele concepten maken op basis van de audit en referenties hieronder.

---

# 3. Fase A — Visual audit huidige tool

## 3.1 KEEP — functioneel/structureel bruikbaar

Deze onderdelen mogen in principe als technische basis behouden blijven, maar hun uiterlijk kan nog veranderen:

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
- single / gallery / full contenttypes
- image fallback
- reduced-motion ondersteuning
- losse modules voor styling en gedrag

## 3.2 REDESIGN — bruikbaar concept, huidige uitvoering niet premium genoeg

### Boekobject
- huidige verhouding oogt nog te veel als CSS-demo
- rug is te zichtbaar / synthetisch
- paginadikte is te grafisch
- page shadow is te groot en digitaal
- boek staat als los object in een drukke hero in plaats van als belangrijkste visuele element

### Cover
- huidige beige/bronzen cover oogt generiek
- te veel kleine labels
- logo-imitatie/markering leidt af
- materiaaltextuur is te zichtbaar
- cover moet veel sterker als editorial object worden ontworpen

### Page-turn
- basiswerking behouden
- animatie moet subtieler, trager en realistischer
- minder nadruk op 3D-effect
- schaduw moet ontstaan vanuit de omslaande pagina, niet als los effect

### Typografie
- Inter + Playfair Display is functioneel maar voelt generiek/template-achtig
- headings, labels en body missen een echte editorial schaalhiërarchie
- te veel kleine uppercase labels
- definitieve fontkeuze pas na licentie- en visuele vergelijking

### Achtergrond
- huidige radial gradients + decoratieve lijnstructuur maken de omgeving drukker en goedkoper
- eindrichting: rustiger, bijna galerie-achtig vlak of zeer subtiele materiaaltint

### Controls
- huidige toolbar oogt als app-interface
- autoplay-button is te prominent
- dots zijn niet nodig in deze vorm
- eindrichting: bijna onzichtbare pijlen/klikzones + kleine paginateller

### Header / framing
- standalone prototypeheader is niet representatief voor toekomstige integratie
- tijdens visual design mag een neutrale presentatiecontext worden gebruikt
- uiteindelijke versie erft later de echte websiteheader; het boek zelf moet zelfstandig premium zijn

## 3.3 REMOVE — publiek niet tonen

Deze onderdelen moeten uit de publieke visual experience verdwijnen:

- `Prototype V0.8`
- `Over prototype`
- `Los testprototype · geen koppeling ...`
- status-overview boven het boek
- DEMO / IN UITWERKING / DEFINITIEF badges
- contentstatus puntjes
- ontwikkelversie op de cover
- uitleg over asset pipeline
- tutorial / leerfase / leerstap als publieke positionering
- TD Vision U in publieke copy
- grote processtrip direct onder het boek in de huidige vorm
- uitgebreide interaction-hint

De systemen mogen intern blijven bestaan als ze nuttig zijn voor ontwikkeling.

---

# 4. Waarom de huidige stijl goedkoop oogt

De belangrijkste oorzaak is niet één kleur of font, maar **te veel UI-lagen tegelijk**:

1. websiteheader
2. hero-copy
3. trustline
4. chapter meta
5. contentstatus
6. boekobject
7. toolbar
8. dots
9. autoplaystatus
10. interaction hint
11. processtrip
12. prototype-uitleg

Hierdoor krijgt het boek onvoldoende visuele autoriteit. De premium richting moet bijna het omgekeerde doen: **minder interface, groter boek, grotere beelden, meer stilte**.

Tweede probleem: bijna alles heeft een border, shadow, badge, gradient of label. Premium editorial design ontstaat juist door selectiviteit.

Derde probleem: de pagina's zijn nog opgebouwd als webcards met kleine headings boven een visual. Een echt architectuurboek gebruikt veel gevarieerdere composities en laat beelden soms bewust over de spread domineren.

---

# 5. Fase B — Reference shortlist v1

Online referenties worden gebruikt voor principes, niet om letterlijk te kopiëren.

## R1 — Architect portfolio | Editorial design — Agrippine Lesuffleur (Behance, 2025)
https://www.behance.net/gallery/248171239/Architect-portfolio-Editorial-design

**Waarom relevant**
- expliciet ontworpen als middenvorm tussen architectuurmagazine en portfolio
- mineral/minimal richting
- ingetogen typografie
- veel ruimte voor plannen, perspectieven en modellen

**Meenemen**
- open layouts
- terughoudende tekst
- beelden als hoofddrager

## R2 — Architecture Portfolio, Editorial Design — Kiana Oveisi (Behance, 2025)
https://www.behance.net/gallery/238349615/Architecture-Portfolio-Editorial-Design

**Waarom relevant**
- calm/minimal editorial tone
- duidelijke hiërarchie
- architectuurvisualisatie + diagrams in één systeem

**Meenemen**
- ritme tussen renders en technische content
- neutrale visuele taal

## R3 — Architectural Portfolio: Print Edition (Behance, 2026)
https://www.behance.net/gallery/247292785/Architectural-Portfolio-Print-Edition

**Waarom relevant**
- Swiss typography
- strict modular grid
- asymmetrische maar gecontroleerde layouts
- radical minimalism
- veel witruimte

**Meenemen**
- belangrijkste gridreferentie
- fotografie en plattegronden centraal
- visuele spanning door asymmetrie, niet door decoratie

## R4 — Design Editorial — Livro do TFG (Behance, 2026)
https://www.behance.net/gallery/243246529/Design-Editorial-Livro-do-TFG

**Waarom relevant**
- editorial systeem specifiek voor architectuurmonograph + technische tekeningen
- sober, precies en coherent

**Meenemen**
- technische tekeningen behandelen als volwaardige editorial content

## R5 — Architectural Portfolio Layout — Mint Architecture Studio (Behance, 2025)
https://www.behance.net/gallery/235574213/Architectural-Portfolio-Layout

**Waarom relevant**
- book-format + flip-through presentatie
- nadruk op clarity, rhythm en visual storytelling

**Meenemen**
- ritme tussen spreads
- boek moet ook zonder animatie als grafisch object werken

## R6 — Minimal Portfolio Design for Interior Architecture — Kiana Oveisi (Behance, 2025)
https://www.behance.net/gallery/237972769/Minimal-Portfolio-Design-for-Interior-Architecture

**Waarom relevant**
- balanced white space
- muted tones
- rustige overgang van conceptdiagram naar render

**Meenemen**
- zachte neutrale tone of voice
- geen overmatige styling

## R7 — Architecture Portfolio — Studio Kaesura (Behance, 2025)
https://www.behance.net/gallery/217448421/Architecture-Portfolio

**Waarom relevant**
- realistic rendering gecombineerd met klassieke/minimale architectuurprincipes
- clean structured layout

**Meenemen**
- renders groot en serieus behandelen, niet als kaartjes

## R8 — Architecture monograph / Dutch architecture book — “30” Monograph
https://www.behance.net/gallery/8366979/30-Monograph

**Waarom relevant**
- echte architectuurmonograph
- meerdere papiersoorten / materiaalgevoel
- semi-open binding als fysiek detail

**Meenemen**
- materiaalgevoel mag karakter geven, maar moet in webversie extreem subtiel blijven

## R9 — Norm Architects — official website
https://normcph.com/

**Waarom relevant**
- duidelijke soft-minimal richting
- content krijgt rust
- natuurlijke materialen en warme neutralen
- ritme en restraint zijn onderdeel van de merkervaring

**Meenemen**
- warm minimalisme
- materiaalgevoel zonder decoratieve drukte
- rustige pacing

## R10 — OMA Projects — official website
https://www.oma.com/projects

**Waarom relevant**
- projectcontent en architectuur staan centraal
- filters en navigatie zijn functioneel maar visueel terughoudend
- veel projecten kunnen in één helder systeem bestaan

**Meenemen**
- informatiearchitectuur helder houden
- projectbeeld > chrome/UI

## R11 — Codrops Creative Hub — Page Transitions
https://tympanus.net/codrops/hub/tag/page-transition/

**Waarom relevant**
- actuele voorbeelden van GSAP, WebGPU en moderne page transitions

**Meenemen**
- transition moet inhoud dragen
- eerst lichtgewicht motion onderzoeken; GPU alleen indien zichtbaar beter

## R12 — Codrops / Podium case study (2026)
https://tympanus.net/codrops/2026/06/23/podium-building-a-website-where-running-becomes-storytelling/

**Waarom relevant**
- zeer sterke les in restraint
- page transition gebruikt het beeld zelf als overgangsobject
- zware effecten werden verwijderd omdat ze aandacht van content afleidden
- nadruk op spacing, hierarchy, pacing en subtle transitions

**Meenemen**
- motion is ondersteuning, geen feature op zichzelf
- bij twijfel: verwijderen in plaats van toevoegen

---

# 6. Visuele conclusies uit de research

De referenties wijzen opvallend dezelfde kant op:

- witruimte is belangrijker dan extra effecten
- technische tekeningen mogen groot en rustig worden gepresenteerd
- renders kunnen full bleed of bijna full bleed
- typografie is klein in aantal stijlen, maar sterk in schaalcontrast
- asymmetrie werkt goed zolang het grid streng blijft
- één spread hoeft niet op de volgende te lijken
- een boekgevoel ontstaat eerder door verhouding, gutter, schaduw en paginaritme dan door zware papiertextures
- motion moet aan de content vastzitten
- bronzen/gouden details mogen maximaal accent zijn
- de interface rondom het boek moet bijna verdwijnen

---

# 7. Drie richtingen voor Fase C

## Concept A — Swiss Architectural Editorial

**Karakter**
- licht / off-white
- strikte modulaire grid
- zwart/charcoal typografie
- heel weinig accentkleur
- asymmetrische spreads
- bijna geen zichtbaar 3D-boekmateriaal

**Sterk voor**
- technische tekeningen
- professionele uitstraling
- aansluiting op architectuurwereld

**Risico**
- kan te klinisch worden als er te weinig warmte in zit

## Concept B — Warm Architectural Monograph

**Karakter**
- warm paper/off-white
- lichte fysieke boekpresentie
- subtiele linnen/papierassociatie
- rustige serif/sans combinatie
- zachte contactschaduw
- fotografie/renders met museumachtige ruimte

**Sterk voor**
- premium gevoel
- vertrouwen
- mooi evenwicht tussen technische en visuele content

**Risico**
- skeuomorfisme als materiaalgevoel te sterk wordt

## Concept C — Digital Gallery Book

**Karakter**
- minder letterlijk fysiek boek
- grotere fullscreen beeldmomenten
- rustige animated transitions
- pagina/spread als digitaal canvas
- navigation bijna volledig verborgen

**Sterk voor**
- renders
- moderne webbeleving
- mobile

**Risico**
- kan het oorspronkelijke boekidee te veel loslaten

### Voorlopige art-direction voorkeur

**Concept A + Concept B**, ongeveer:

- 65% Swiss / architectural editorial
- 25% warm monograph / physical restraint
- 10% digital motion

Dit vervangt de eerdere 70/20/10 indicatie en is specifieker na de eerste researchronde.

---

# 8. Concrete ontwerpregels voor de volgende fase

Deze regels moeten in de eerste conceptmockups worden getest:

1. boek/spread neemt desktop visueel minimaal circa 65–75% van het relevante presentatievlak in
2. maximaal één primaire UI-laag rondom het boek
3. geen statusbadges
4. geen prototypeversie
5. geen grote toolbar
6. geen zichtbare autoplaytekst zolang autoplay actief is
7. paginanummering klein en rustig
8. tekst per spread maximaal enkele korte regels tenzij een specifieke story-spread dit vereist
9. minstens één spread met 80–90% beeld
10. minstens één spread voor een technische tekening met veel witruimte
11. minstens één asymmetrische comparison spread
12. book gutter maximaal subtiel
13. geen zware gradients achter het boek
14. bronstint alleen voor mini-accent / interaction cue
15. ontwerp moet ook zonder page-turn screenshotwaardig zijn

---

# 9. Exacte volgende taak — Fase C

**NIET CODEREN.**

Maak eerst drie statische visuele concepten voor dezelfde open desktopspread:

### Zelfde testinhoud voor alle drie concepten
- linkerpagina: grote technische plattegrond / lijntekening
- rechterpagina: grote exterieurrender + zeer korte projectcopy
- subtiel paginanummer
- geen toolbar/status/prototypecopy

### Concept A
Swiss Architectural Editorial

### Concept B
Warm Architectural Monograph

### Concept C
Digital Gallery Book

Vervolgens de drie concepten naast elkaar beoordelen op:
- premium uitstraling
- architecturale geloofwaardigheid
- aansluiting op Technisch Bouwadvies
- ruimte voor tekeningen
- ruimte voor renders
- toekomstige website-integratie
- desktop/mobile potentie

Pas na keuze van richting wordt een statische masterspread in code gebouwd.

---

# 10. Nieuwe-chat overdracht

Gebruik in een nieuwe chat exact deze instructie:

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig. Inspecteer daarna pas de bestaande ontwerpboekcode. De tool is publiek GEEN leeromgeving en mag geen tutorial/prototype/status-uitstraling hebben. Fase A (visual audit) en Fase B (reference research) zijn afgerond. De eerstvolgende taak is Fase C: drie statische visuele concepten maken — Swiss Architectural Editorial, Warm Architectural Monograph en Digital Gallery Book — met exact dezelfde testspread. Nog niet de echte website technischbouwadvies.nl aanpassen en nog geen nieuwe technische features bouwen.

---

# 11. Samenvatting voor snelle hervatting

**AFGEROND**
- technische prototypebasis t/m V0.8
- koerswijziging naar premium visualisatie
- visual roadmap
- eerste volledige visual audit
- online reference research shortlist v1
- drie art-direction richtingen gedefinieerd

**VASTSTAAND**
- geen leeromgeving zichtbaar
- geen prototype/status UI zichtbaar
- visual-first
- art direction eerst, code daarna
- voorkeur A + B

**NU DOEN**
- Fase C: drie statische conceptspreads maken en vergelijken

**DAARNA**
- één richting kiezen
- Fase D: masterspread verfijnen
- cover redesign
- spread template system
- page-turn redesign
- controls minimaliseren
- mobile design
- integratievoorbereiding
