# Technisch Bouwadvies — Visual Design Progress

**Doel:** actuele voortgang + overdracht voor een volgende ChatGPT-chat.

**Laatste update:** 2026-08-19 18:27 NL

---

## 1. Projectdoel — VAST

Het ontwerpboek is publiek **geen leeromgeving** en mag nergens als tutorial/prototype worden gepositioneerd.

Niet tonen:
- tutorial / TD Vision U / leerfase
- prototype V0.x
- DEMO / IN UITWERKING / DEFINITIEF
- ontwikkelaarsstatus / asset-pipelinecopy
- dashboardachtige toolbar

Doel: een **premium interactieve projectvisualisatie / digitaal architectuurboek** voor Technisch Bouwadvies.

Publieke richting:
- `Bekijk hoe een ontwerp tot leven komt`
- `Van concept naar technisch ontwerp`
- architecturaal, editorial, rustig, technisch precies en beeldgedreven

---

## 2. Visuele bron van waarheid — BELANGRIJKSTE REGEL

De gebruiker heeft op 2026-08-19 opnieuw de goedgekeurde presentatieboard aangeleverd:

**`VOLLEDIGE BOEKFLOW — COVER + 8 SPREADS`**

Deze board is vanaf nu de **primaire visuele bron van waarheid** voor:
- boekverhouding
- coverrichting
- typografische hiërarchie
- papierkleur
- witruimte
- bronze accenten
- beeld/tekst-verhouding
- technische tekening-presentatie
- algemene editorial uitstraling

De eerder goedgekeurde `06 — Plattegrond` masterspread blijft een belangrijke detailreferentie, maar de volledige boekflow-board bepaalt de globale stijl.

### Art direction — VAST
**A+B**
- ca. 65% Swiss / Architectural Editorial
- ca. 25% Warm Architectural Monograph
- ca. 10% subtiele digitale motion

Kern:
- warm off-white papier
- charcoal tekst
- zeer subtiel brons
- editorial serif + rustige sans
- veel witruimte
- subtiele gutter, paginadikte en contactschaduw
- technische tekeningen groot en helder
- renders dominant / bijna full-bleed waar passend
- minimale publieke bediening

### Belangrijke nuance
De **conceptuele stijl is goedgekeurd**, maar de browserimplementatie is nog NIET style-locked. Er zijn nog zichtbare afwijkingen t.o.v. de goedgekeurde board. Daarom mogen individuele spreads nog niet als definitief worden beschouwd.

---

## 3. Beoogde boekflow

Bestaand spread-systeem:
1. Projectintro / hero
2. Variantenvergelijking
3. Plattegrond
4. Gevel & doorsnede
5. Bouwdetail
6. Interieur & materialen
7. Exterieur impressie
8. Resultaat / CTA

De goedgekeurde board toont daarnaast visueel een aparte `MEER WETEN?` eindpagina. Behandel dit voorlopig als **CTA/eindpagina-variant** en verander tijdens Fase M.1 niet de inhoudsarchitectuur of het aantal spreadtypes. Eerst de stijl vastzetten.

---

## 4. Testlab en veiligheidsgrens

Enige actieve ontwerp/test-repo:

**`ALKAVisuals/webdesign`**

Werkmap:

`technischbouwadvies/ontwerpboek/`

### Productie bewust geparkeerd
Bevestigde productie-repo:

**`ALKAVisuals/alkabouwadvies`**

Belangrijk:
- productiehomepage is niet geïntegreerd met het ontwerpboek
- eerdere integratie-PR #7 is **GESLOTEN ZONDER MERGE**
- geen ontwerpboekcode naar productie-`main`
- geen wijzigingen aan de ALKA Visuals-website
- alle verdere iteratie uitsluitend in `ALKAVisuals/webdesign` totdat de gebruiker expliciet goedkeurt

**Nieuwe chat mag productie NIET aanraken.**

---

## 5. Technische/visuele fasen tot nu toe

Afgerond / op `webdesign/main`:
- Fase A — Visual audit
- Fase B — Reference research
- Fase C — Visuele richtingen
- Fase D — Masterspread
- Fase E — Coverconcept
- Fase F — Spread template system
- Fase G — Volledige boekflow
- Fase H — visueel systeem implementeren — PR #12
- Fase I — page-turn / motion polish — PR #13
- Fase J — mobile visual polish — PR #14
- Fase K — performance & accessibility — PR #15
- Fase L — integratieplan — PR #16
- Fase M eerste visual-QA-pass — PR #18

### Echte browser QA — recente PR's
- **PR #19** — mobiele boekpositie repareren; boek verdween buiten iPhone viewport
- **PR #20** — mobiele scherpte/2D rendering; iOS Safari rasteriseerde tekst en tekeningen wazig
- **PR #21** — mobiele gesloten/open state; lege `00 / 08` toestand vervangen door deterministische cover/open state
- **PR #22** — mobiele covertypografie/fitting
- **PR #23** — desktop cover + Projectintro polish; cover fit en Projectintro van voor/na-compositie naar één rustiger architectuurbeeld

Laatste gecombineerde QA-route:

`https://alkavisuals.github.io/webdesign/technischbouwadvies/ontwerpboek/fase-m-v5.html?v=20260819-1825`

Deze link is alleen een **testversie**, niet de definitieve stijl.

---

## 6. Wat de echte QA heeft geleerd

### Mobile
Oorspronkelijke problemen:
- boekinhoud buiten viewport
- wazige rasterisatie door 3D/filtering op het hele boek
- lege gesloten state met alleen controls
- covertitel liep uit de kaft

Huidige situatie:
- mobiele state werkt veel beter
- cover wordt getoond
- boek kan openen naar één pagina
- scherpe 2D-pagina is technisch mogelijk
- verdere visual fine-tuning blijft nodig

### Desktop
Laatste laptop-QA liet zien:
- open spread begint de gewenste premium richting te benaderen
- boekstructuur is bruikbaar
- cover liep nog zichtbaar uit en is via PR #23 verder gecorrigeerd
- browserimplementatie wijkt nog op meerdere stijlpunten af van de goedgekeurde full-book-flow board

### Cruciale conclusie
**Niet verder spread-per-spread afwerken voordat de algemene stijl volledig is vastgezet.**

Anders moeten alle spreads later opnieuw worden aangepast.

---

# 7. HUIDIGE FASE — M.1 STYLE LOCK

Dit is de **enige eerstvolgende ontwerpprioriteit**.

Doel:
> Maak één definitieve boekstijl voor desktop én mobiel, met één perfecte cover en één perfecte open masterspread. Gebruik die daarna als systeem voor alle overige spreads.

### M.1A — Boekframe / verhouding
Vastzetten:
- boekbreedte en hoogte
- verhouding boek t.o.v. viewport
- open spread-proportie
- outer margins
- page thickness
- middennaad/gutter
- positie van boek in de presentatie
- desktop en mobile apart bewust ontwerpen

### M.1B — Papier / schaduw / fysiek gevoel
Vastzetten:
- paper tone
- page edge
- contact shadow
- gutter shadow
- hoeveelheid papiertexture
- geen webcard/glow-look
- premium monograph-gevoel

### M.1C — Typografisch systeem
Vastzetten:
- serif headline
- sans labels/body
- cover title size
- spread title size
- body size/leading
- kicker/chapter numbers
- captions
- page numbers
- letterspacing
- vaste marges en ritme

### M.1D — UI / controls
Vastzetten:
- pijlen
- page counter
- progress line
- autoplay
- controls alleen zichtbaar wanneer relevant
- minimale visuele aanwezigheid
- mobile touch targets wel groot genoeg, visueel toch stil

### M.1E — Cover
Vastzetten:
- titel volledig binnen kaft op elke viewport
- kicker
- subtitle
- bronze rule
- architectural line art schaal/positie/opacity
- brandregel onderaan
- fysieke cover shadow/edge

### M.1F — Eén open masterspread
Kies één spread als stijllock-test, bij voorkeur Projectintro of Plattegrond.

Hierop moeten definitief kloppen:
- paginamarges
- headline/body verhouding
- beeldruimte
- technische/visuele hiërarchie
- footer/page number
- gutter
- paper/shadow

**Pas na expliciete gebruiker-goedkeuring van M.1 mag de volgende fase starten.**

---

## 8. Acceptatiecriteria voor Style Lock

Fase M.1 is pas klaar wanneer:
- screenshot van cover duidelijk overeenkomt met de goedgekeurde board
- screenshot van open masterspread duidelijk overeenkomt met de goedgekeurde board
- desktopboek voelt als premium architectuurmonograph, niet als webcomponent
- mobile voelt als bewust ontworpen single-page editorial ervaring
- titel/copy nergens clippen of overlopen
- paper/gutter/shadow rustig en geloofwaardig zijn
- controls ondergeschikt zijn aan het boek
- gebruiker expliciet zegt dat de **stijl** goed is

Geen motion/per-spread polish gebruiken om een nog fout basismodel te maskeren.

---

## 9. NA M.1 — pas daarna

### Fase M.2 — Spread System toepassen
In volgorde:
1. Projectintro
2. Varianten
3. Plattegrond
4. Gevel & doorsnede
5. Bouwdetail
6. Interieur & materialen
7. Exterieur impressie
8. Resultaat / CTA

Elke spread gebruikt exact dezelfde locked design tokens, gridprincipes en boekgeometrie.

### Fase M.3 — Mobile spread QA
Alle spreads op mobiel controleren op:
- leesbaarheid
- crop/contain
- teksthiërarchie
- controls
- swipe
- korte schermhoogtes

### Fase M.4 — Motion finaliseren
Pas daarna:
- cover-open
- page-turn
- shadows tijdens turn
- swipe-motion
- autoplay
- eindstate

### Daarna pas
- finale performance/accessibility check
- integratievoorbereiding
- productie alleen na expliciete goedkeuring

---

## 10. Wat een nieuwe chat NIET moet doen

NIET:
- opnieuw art direction onderzoeken
- nieuwe conceptstijl bedenken
- spread 2 t/m 8 individueel perfectioneren vóór Style Lock
- motion opnieuw centraal zetten
- productie-repo wijzigen
- `technischbouwadvies.nl` integreren
- ALKA Visuals-site wijzigen
- de oude prototype/status UI terugbrengen

WEL:
- eerst de meegeleverde full-book-flow referentie opnieuw laten uploaden/tonen als die niet zichtbaar is in de nieuwe chat
- alleen `ALKAVisuals/webdesign` gebruiken
- beginnen bij **M.1A Boekframe**
- één onderdeel volledig afmaken voordat het volgende wordt aangepakt

---

## 11. Overdracht naar nieuwe ChatGPT-chat

Lees in deze volgorde:
1. `NEXT-CHAT-HANDOFF.md`
2. `VISUAL-DESIGN-PROGRESS.md`
3. `VISUAL-DESIGN-ROADMAP.md`
4. `ASSET-GUIDELINES.md`
5. `INTEGRATION-PLAN.md`

Daarna inspecteer je de huidige bestanden in `technischbouwadvies/ontwerpboek/`.

De gebruiker zal idealiter de goedgekeurde afbeelding **VOLLEDIGE BOEKFLOW — COVER + 8 SPREADS** opnieuw uploaden in de nieuwe chat. Gebruik die afbeelding als primaire visuele referentie.

---

## 12. Snelle status

**CONCEPTUEEL GOEDGEKEURD**
- A+B art direction
- full-book-flow board
- Technical Line Art coverrichting
- editorial spread-systeem
- algemene boekflow

**TECHNISCH WERKEND / QA-GETEST**
- desktop spreads
- mobile single page
- swipe
- keyboard
- autoplay
- lifecycle
- page-turn basis
- accessibility/performance basis
- mobiele Safari reparaties

**NOG NIET GOEDGEKEURD ALS DEFINITIEVE BROWSERSTIJL**
- boekframe
- paper/gutter/shadow
- typografische exacte maten
- controls
- cover browseruitvoering
- open masterspread browseruitvoering
- overige spreads

**NU**
- **Fase M.1 — Style Lock**
- eerste onderdeel: **M.1A Boekframe / verhouding**
- uitsluitend in `ALKAVisuals/webdesign`
