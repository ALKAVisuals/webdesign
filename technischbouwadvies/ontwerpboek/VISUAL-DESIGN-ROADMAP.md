# Technisch Bouwadvies — Visual Design Roadmap

## 1. Hoofddoel

Het interactieve ontwerpboek is **geen leeromgeving** en mag op de publieke website nergens zo aanvoelen.

De tool moet later worden ingezet als een **premium visuele projectpresentatie** voor Technisch Bouwadvies: een digitaal architectuurboek/portfolio waarin een ontwerpverhaal door middel van tekeningen, renders, detailbeelden en korte toelichtingen wordt gepresenteerd.

De huidige technische prototypefuncties (page turn, autoplay, responsive gedrag, galleries, full-page beelden, assetkoppelingen) zijn bruikbaar, maar de visuele uitstraling is nog niet op het gewenste niveau.

Vanaf dit document verschuift de prioriteit volledig naar **art direction, visuele kwaliteit en toekomstige website-integratie**.

---

## 2. Wat NIET meer publiek zichtbaar moet zijn

De volgende termen en elementen mogen in de uiteindelijke websiteversie niet zichtbaar zijn:

- leeromgeving
- tutorial als hoofdboodschap
- TD Vision U als publieke positionering
- prototype V0.x badges
- DEMO / IN UITWERKING / DEFINITIEF badges
- technische ontwikkelaarsinformatie
- asset pipeline / test pipeline teksten
- interne voortgangsstatussen
- teksten die suggereren dat de bezoeker naar een oefenproject kijkt

Deze informatie mag intern in code/documentatie blijven bestaan, maar niet in de uiteindelijke bezoekerservaring.

---

## 3. Nieuwe positionering

De bezoeker moet het onderdeel ervaren als bijvoorbeeld:

**Bekijk hoe een ontwerp tot leven komt**

of

**Van eerste idee naar technisch uitgewerkt ontwerp**

of

**Een ontwerpverhaal in beeld**

Het boek moet vertrouwen, vakmanschap, technische precisie en hoogwaardige presentatie uitstralen.

---

## 4. Visuele richting

### Gekozen richting: Architectural Editorial Monograph

De gewenste stijl wordt een combinatie van:

1. high-end architectuurboek / monograph
2. editorial magazine design
3. minimalistische architectuurportfolio's
4. subtiele digitale interactie
5. realistische maar ingetogen boekanimatie

Niet kiezen voor een overdreven skeuomorfisch oud boek, zware leertextures, gaming-achtige 3D-effecten of een dashboard-look.

### Kernwoorden

- architecturaal
- minimalistisch
- verfijnd
- ruimtelijk
- editorial
- rustig
- premium
- warm
- technisch precies
- beeldgedreven

---

## 5. Online referentierichtingen

Online inspiratie wordt gebruikt voor **art direction en principes**, niet om ontwerpen letterlijk te kopiëren.

### Architectuur/editorial

- Behance — Architect Portfolio / Editorial Design
  https://www.behance.net/gallery/248171239/Architect-portfolio-Editorial-design

- Behance — Architecture Portfolio, Editorial Design
  https://www.behance.net/gallery/238349615/Architecture-Portfolio-Editorial-Design

- Behance — Architectural Portfolio: Print Edition
  https://www.behance.net/gallery/247292785/Architectural-Portfolio-Print-Edition

### Digitale interactie / page transitions

- Codrops Creative Hub
  https://tympanus.net/codrops/hub/

- Codrops Fullscreen Pageflip Layout
  https://tympanus.net/codrops/2012/12/11/fullscreen-pageflip-layout/

- Awwwards inspiration
  https://www.awwwards.com/

### Wat we uit deze referenties halen

- veel witruimte
- grote beelden
- duidelijke gridstructuur
- rustige typografische hiërarchie
- architectuurbeeld krijgt prioriteit boven decoratie
- subtiele kleuraccenten
- asymmetrische maar gecontroleerde spreads
- sterke covers
- wisselende layouts per spread
- animatie ondersteunt het verhaal en trekt niet alle aandacht naar zichzelf

---

## 6. Belangrijkste visuele problemen van de huidige versie

De huidige tool oogt nog te goedkoop door een combinatie van:

- te veel losse UI-elementen rond het boek
- kleine badges, bolletjes en statusinformatie
- te veel zichtbare technische/prototypecopy
- te uniforme pagina-opbouw
- pagina's voelen als webcards in plaats van echte editorial spreads
- boekvorm en pagina-omslag zijn nog te synthetisch
- typografie mist een sterke editorial hiërarchie
- renders en tekeningen krijgen nog niet genoeg visuele dominantie
- achtergrond en boek concurreren met elkaar
- sommige borders, shadows en effecten ogen te digitaal
- interface lijkt nog op een demo-app in plaats van een onderdeel van een premium advieswebsite

---

## 7. Ontwerpprincipes voor de definitieve tool

### 7.1 Het boek is het hoofdobject

Alles rondom het boek moet worden teruggebracht.

Behouden:
- subtiele vorige/volgende bediening
- eventueel kleine paginanummers
- swipe
- autoplay

Niet prominent tonen:
- developer status
- veel navigatiedots
- uitgebreide toolbar
- technische labels

### 7.2 Beelden krijgen prioriteit

Richtlijn:
- 70–90% van een spread mag visueel zijn
- korte tekstblokken
- geen lange uitleg
- tekeningen en renders moeten groot genoeg zijn om echt bekeken te worden

### 7.3 Niet iedere pagina dezelfde layout

We bouwen een echte set editorial templates, bijvoorbeeld:

- full bleed image
- groot beeld links + kleine tekst rechts
- tekst links + grote technische tekening rechts
- één beeld over twee pagina's
- drie varianten in een zorgvuldig grid
- detailtekening met callouts
- full-page render
- spread met twee renders
- projectgegevens in minimalistische typografie
- eindspread met hero-image + CTA

### 7.4 Typografie

Richting:
- elegante serif voor grote editorial headlines
- neutrale grotesk/sans-serif voor technische labels en kleine tekst
- veel contrast in schaal
- weinig verschillende gewichten
- geen overdreven kleine tekst

Definitieve fonts worden pas gekozen na vergelijking van enkele kandidaten en licentiecontrole.

### 7.5 Kleur

Aansluiten bij Technisch Bouwadvies:
- warm off-white
- charcoal / bijna zwart
- zeer subtiel brons/goud accent
- eventueel warm grijs

Geen overmatig goud, gradients of glassmorphism.

### 7.6 Materiaalgevoel

Het boek mag fysiek aanvoelen, maar zeer subtiel:
- dunne paginadikte
- zachte contactschaduw
- klein verschil tussen linker- en rechterpagina
- lichte vouw/rug
- nauwelijks zichtbare papiertextuur

Geen zware vintage papierstructuren.

---

# 8. Stappenplan

## Fase A — Visual audit van huidige tool

Doel: exact bepalen wat goedkoop oogt en wat bruikbaar blijft.

Taken:
1. huidige desktopweergave beoordelen
2. huidige mobiele weergave beoordelen
3. cover beoordelen
4. open-book state beoordelen
5. spread layouts beoordelen
6. page-turn beoordelen
7. controls beoordelen
8. achtergrond/omgeving beoordelen
9. typografie beoordelen
10. bepalen welke bestaande CSS volledig weg kan

Resultaat:
- KEEP / REDESIGN / REMOVE-lijst

---

## Fase B — Online reference research

Doel: niet op gevoel ontwerpen, maar eerst een sterke visuele benchmark maken.

Zoeken naar:
- architecture portfolio editorial design
- architecture monograph design
- luxury real estate brochure editorial
- architecture magazine grid design
- minimal architecture website
- digital magazine interaction
- premium page transition
- interactive portfolio book
- editorial web design

Per gevonden voorbeeld vastleggen:
- cover
- grid
- typografie
- witruimte
- beeldverhouding
- spread-opbouw
- animatie
- navigatie
- kleurgebruik
- wat wel/niet toepasbaar is

Resultaat:
- circa 10–15 sterke referenties
- shortlist van 3 hoofdrichtingen

---

## Fase C — Drie visuele concepten maken

Niet meteen programmeren.

Eerst drie richtingen naast elkaar maken:

### Concept 1 — Pure Architectural Editorial
- zeer licht
- Zwitsers/editorial grid
- maximale focus op tekeningen/renders
- minimaal boekmateriaal

### Concept 2 — Premium Physical Monograph
- realistischer boekobject
- warm materiaalgevoel
- zachte donkere achtergrond
- high-end architectuurboek uitstraling

### Concept 3 — Digital Editorial
- boekvorm losser
- grotere digitale overgangen
- meer fullscreen imagery
- subtiele moderne motion

Daarna één richting kiezen of elementen combineren.

**Voorlopige voorkeur: Concept 1 + subtiele elementen van Concept 2.**

---

## Fase D — Statische masterspread ontwerpen

Voordat page-turn code wordt aangepast eerst één perfecte open spread maken.

Moet bevatten:
- juiste boekverhouding
- correcte marges
- pagina-rug
- schaduw
- typografie
- beeldpositie
- paginanummering
- technische labels

Geen animatie in deze fase.

Acceptatiecriterium:
> Als een screenshot van alleen deze spread wordt gezien, moet het eruitzien alsof het uit een professioneel architectuurboek komt.

---

## Fase E — Cover redesign

Cover opnieuw ontwerpen nadat de editorial stijl staat.

Onderzoeken:
- typografische cover
- full-bleed architectural image cover
- minimalistische line-art cover
- embossed / debossed gevoel via zeer subtiel CSS

Cover moet zelfstandig premium ogen.

---

## Fase F — Spread template system

Bouwen van ongeveer 6–8 hoogwaardige templates.

Niet meer alles in één generieke pagina-template stoppen.

Voorbeelden:
1. Hero spread
2. Technical drawing spread
3. Comparison spread
4. Detail spread
5. Full render spread
6. Two-image spread
7. Material/story spread
8. Final CTA spread

---

## Fase G — Page-turn redesign

Pas nadat statische spreads goedgekeurd zijn.

Doel:
- minder demo-effect
- beter perspectief
- overtuigender page curl
- realistische schaduwwerking
- geen overdreven 3D
- vloeiende 60fps waar mogelijk

Technische opties later vergelijken:
- hoogwaardige custom CSS/JS
- GSAP
- eventueel WebGL alleen wanneer het duidelijk betere kwaliteit geeft

Geen zware WebGL-oplossing gebruiken alleen omdat het technisch indrukwekkend is.

---

## Fase H — Controls minimaliseren

Herontwerpen naar bijna onzichtbare bediening.

Mogelijkheden:
- pijlen naast boek
- klikzone op linker/rechter pagina
- swipe
- kleine page counter
- autoplay standaard subtiel

Statusbalk, prototypebadge en uitgebreide toolbar verdwijnen uit publieke versie.

---

## Fase I — Responsive visual design

Desktop en mobiel worden apart ontworpen.

Desktop:
- echte spread
- twee pagina's
- ruime presentatie

Mobile:
- één editorial pagina
- geen verkleinde dubbele spread
- swipe centraal
- aangepaste typografie en compositie

---

## Fase J — Integratievoorbereiding Technisch Bouwadvies

Pas wanneer de standalone tool visueel volledig goedgekeurd is.

Controleren:
- geen globale CSS-conflicten
- fonts
- responsive breakpoints
- performance
- accessibility / reduced motion
- asset loading
- integratie in homepage

Daarna pas overzetten naar de echte website-repository.

---

# 9. Nieuwe ontwikkelvolgorde

Vanaf nu NIET meer automatisch versies bouwen omdat er nog een functie toegevoegd kan worden.

Nieuwe volgorde:

1. Research
2. Visual direction
3. Static design
4. User approval
5. Implement visual system
6. User visual review
7. Motion/page-turn polish
8. Mobile polish
9. Performance/accessibility
10. Site integration

Elke belangrijke visuele fase wordt eerst beoordeeld voordat de volgende wordt gebouwd.

---

# 10. Definitie van succes

De tool is pas klaar wanneer:

- hij niet als demo/prototype oogt
- hij niet als leeromgeving oogt
- hij op zichzelf premium genoeg is voor een architect/adviesbureau
- een screenshot van iedere spread als portfolio-ontwerp kan doorgaan
- animatie ondergeschikt blijft aan de content
- echte tekeningen en renders dominant zijn
- desktop en mobiel beide bewust ontworpen zijn
- de tool later eenvoudig in technischbouwadvies.nl kan worden geïntegreerd

---

# 11. Instructie voor een nieuwe ChatGPT-chat

Wanneer een nieuwe chat nodig is, geef de nieuwe chat deze opdracht:

> We gaan verder met het interactieve ontwerpboek voor Technisch Bouwadvies. Open eerst `ALKAVisuals/webdesign/technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md` en lees het volledig. Inspecteer daarna de huidige bestanden in `technischbouwadvies/ontwerpboek/`. De huidige technische basis bestaat al; de prioriteit is nu uitsluitend de premium visuele vormgeving. Behandel het niet als leeromgeving of tutorialtool. Volg de roadmap en ga verder vanaf de laatst afgeronde visuele fase. Wijzig de echte website `technischbouwadvies.nl` nog niet.

---

# 12. Huidige status op moment van deze roadmap

Technische prototypebasis aanwezig:
- responsive boek
- desktop spreads
- mobiele single-page weergave
- swipe
- toetsenbordnavigatie
- autoplay
- page-turn
- cover/open/end lifecycle
- single/gallery/full assetlayouts
- hoofdstuktiming
- assetmanifest
- interne contentstatus

Deze functies zijn geen garantie dat de huidige styling behouden blijft. Tijdens de visual redesign mogen bestaande CSS, covervorm, UI en spreadopbouw grondig worden vervangen zolang de goede functionele basis behouden kan blijven.

**Volgende uit te voeren fase: Fase A + Fase B — visual audit en gerichte online reference research.**
