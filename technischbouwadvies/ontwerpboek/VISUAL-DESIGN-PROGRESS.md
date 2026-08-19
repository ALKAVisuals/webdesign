# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19

---

## 1. Vaste projectbeslissingen

- Het ontwerpboek is publiek **geen leeromgeving**.
- Publiek verdwijnen uiteindelijk: tutorial/TD Vision U, prototype V0.x, DEMO/IN UITWERKING/DEFINITIEF, technische statusinformatie en asset-pipelinecopy.
- Het doel is een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor latere integratie in technischbouwadvies.nl.
- De echte website technischbouwadvies.nl wordt voorlopig niet aangepast.
- Standalone werkmap: `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/`.
- Nieuwe workflow: **research → visual direction → static design → user approval → implementatie → motion polish → mobile polish → integratie**.
- Geen nieuwe technische features bouwen zolang de goedgekeurde visuele stijl nog niet volledig is doorvertaald.

---

## 2. Afgeronde fasen

- **Fase A — Visual audit: AFGEROND**
- **Fase B — Online reference research: AFGEROND**
- **Fase C — Visuele richtingen vergelijken: AFGEROND**
- **Fase D — Masterspread ontwerpen: AFGEROND EN DOOR GEBRUIKER GOEDGEKEURD**

### Gekozen art direction

**Concept A + B**

- basis: Swiss / Architectural Editorial
- warmte: subtiele Architectural Monograph-invloeden
- motion later: zeer beperkt en ondersteunend

Globale verhouding:
- ca. 65% Swiss/editorial
- ca. 25% warm monograph
- ca. 10% digital motion

---

## 3. De goedgekeurde masterspread is vanaf nu de design foundation

De eerder gemaakte en door de gebruiker goedgekeurde open-book spread met **06 — Plattegrond** is vanaf nu de vaste visuele bron van waarheid.

### Deze ontwerpbeslissingen staan daarmee vast

**Boekobject**
- breed open architectuurboek
- subtiel fysiek boekgevoel
- dunne zichtbare paginadikte
- zachte contactschaduw
- rustige, natuurlijke gutter/rug
- geen overdreven 3D of vintage materiaalgevoel

**Papier / achtergrond**
- warm off-white papier
- zeer subtiele papiertextuur
- lichte neutrale omgeving rondom het boek
- geen zware gradients of decoratieve achtergronden

**Typografische richting**
- elegante editorial serif voor hoofdstuknummer en grote titel
- neutrale sans-serif voor technische informatie, labels en korte bodycopy
- veel schaalcontrast
- weinig verschillende stijlen/gewichten
- rustige regelafstand en duidelijke hiërarchie

**Kleur**
- charcoal / bijna zwart als hoofdtekst
- warm off-white als basis
- subtiel brons als klein accent
- geen overmatig goud

**Grid / compositie**
- ruime marges
- streng editorial grid
- technische tekeningen krijgen veel witruimte
- beeld en tekening zijn visueel dominant
- kleine rustige paginanummers
- minimale technische labels
- spreads hoeven niet symmetrisch te zijn, maar moeten gecontroleerd blijven

**Technische tekeningen**
- groot presenteren
- helder en rustig
- geen card-look
- voldoende witruimte rondom maatvoering
- `contain`-achtige presentatie

**Renders**
- later groot, bijna full-page/full-bleed waar passend
- geen kleine webcards
- beelden mogen het grootste deel van een spread innemen

### Belangrijk

Er komt **geen aparte design-foundationfase meer** waarin deze keuzes opnieuw worden onderzocht.

Nieuwe ontwerpen moeten rechtstreeks voortbouwen op deze goedgekeurde masterspread.

De volgende chat mag de basisstijl niet opnieuw ter discussie stellen tenzij de gebruiker dat expliciet vraagt.

---

## 4. Publieke UI die uiteindelijk verdwijnt

Niet tonen in definitieve bezoekerservaring:

- Prototype V0.x
- DEMO / IN UITWERKING / DEFINITIEF
- status-overview
- statusdots
- ontwikkelaarsinformatie
- grote toolbar
- zichtbare autoplaystatus
- uitgebreide interaction hints
- tutorial / TD Vision U / leerfase als positionering
- asset-pipelinecopy

Intern mogen deze systemen blijven bestaan zolang ze ontwikkeling helpen.

---

## 5. Wat technisch behouden mag blijven

De huidige technische basis kan later onder de nieuwe visuele laag worden hergebruikt:

- desktop dubbele spread
- mobiel single-page
- swipe
- keyboard navigation
- previous/next
- autoplay
- chapter timings
- open/closed lifecycle
- page-turn trigger/logica
- asset manifest
- single/gallery/full layouts
- image fallback
- reduced motion

De huidige styling rond deze functies is **niet** leidend.

---

## 6. Exacte volgende fase

### Fase E — Cover redesign

De cover moet nu worden ontworpen **binnen exact dezelfde stijl als de goedgekeurde masterspread**.

Niet opnieuw een nieuwe art direction zoeken.

Te vergelijken covervarianten:

1. **Pure Typography**
   - extreem rustig
   - editorial serif
   - veel negatieve ruimte
   - klein Technisch Bouwadvies-label

2. **Technical Line Art**
   - zelfde typografie en papiergevoel
   - zeer subtiele bouwkundige lijntekening / plan / constructieve schets
   - line-art ondergeschikt aan titel

3. **Architectural Image**
   - één hoogwaardige architectuurvisual
   - zeer weinig tekst
   - dezelfde warme/charcoal/brons-visuele taal

### Beoordelingscriteria cover

- voelt als onderdeel van hetzelfde boek als de masterspread
- premium zonder opzichtig luxe-effect
- professioneel genoeg voor architectuur-/adviesbureau
- past later in technischbouwadvies.nl
- werkt ook als stilstaand beeld
- geen prototype- of leeromgevinggevoel

Na keuze van de cover:

### Fase F — Spread template system

Ontwerp 6–8 spreadtypes in dezelfde foundation:

1. Projectintro / hero
2. Technical drawing spread
3. Gevel / doorsnede spread
4. Detail spread
5. Comparison / varianten spread
6. Material / story spread
7. Full render spread
8. Eindspread / CTA

Pas wanneer deze statisch visueel goedgekeurd zijn, gaan we opnieuw coderen.

---

## 7. Nieuwe chat — exacte overdracht

Gebruik dit bericht:

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en daarna `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-PROGRESS.md`. Lees beide volledig voordat je iets wijzigt. De tool is publiek GEEN leeromgeving. Fase A, B en C zijn afgerond. De A+B art direction en de eerder gemaakte masterspread `06 — Plattegrond` zijn door de gebruiker expliciet goedgekeurd en vormen vanaf nu de vaste design foundation. Onderzoek boekverhouding, grid, papierkleur, typografische richting en algemene stijl niet opnieuw tenzij de gebruiker dat expliciet vraagt. De eerstvolgende taak is Fase E: drie coverconcepten maken binnen exact dezelfde goedgekeurde stijl — Pure Typography, Technical Line Art en Architectural Image. Nog niet de echte website technischbouwadvies.nl aanpassen en nog niet teruggaan naar technische featureontwikkeling.

---

## 8. Snelle status

**AFGEROND**
- technische prototypebasis t/m V0.8
- koerswijziging naar premium projectvisualisatie
- Visual Design Roadmap
- visual audit
- reference research
- drie art directions
- A+B gekozen
- masterspread ontworpen
- masterspread door gebruiker goedgekeurd

**VASTSTAAND**
- goedgekeurde masterspread = design foundation
- warm off-white papier
- charcoal + subtiel brons
- editorial serif + neutrale sans
- ruim grid
- technische tekeningen groot
- renders groot
- subtiel fysiek boekgevoel
- minimale publieke UI

**NU DOEN**
- Fase E: drie covervarianten in exact dezelfde stijl

**DAARNA**
- cover kiezen
- 6–8 spreadtemplates ontwerpen
- volledige statische boekflow beoordelen
- visual system implementeren
- page-turn/motion redesign
- minimal controls
- mobile design
- performance/accessibility
- integratievoorbereiding technischbouwadvies.nl
