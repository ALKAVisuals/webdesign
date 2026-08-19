# NEXT CHAT HANDOFF — Technisch Bouwadvies Ontwerpboek

**Lees dit bestand als eerste.**

## 1. Waar we staan

We bouwen een premium interactief architectuurboek voor Technisch Bouwadvies.

De technische basis bestaat al. De grootste recente QA-problemen op iPhone en desktop zijn onderzocht en gedeeltelijk opgelost.

De gebruiker heeft nu besloten om **niet verder te gaan met individuele spreads voordat de algemene stijl exact klopt**.

Huidige fase:

# `FASE M.1 — STYLE LOCK`

Eerstvolgende onderdeel:

# `M.1A — BOEKFRAME / VERHOUDING`

---

## 2. Primaire visuele bron van waarheid

De gebruiker heeft een goedgekeurde presentatieboard:

**`VOLLEDIGE BOEKFLOW — COVER + 8 SPREADS`**

De nieuwe chat moet de gebruiker vragen deze afbeelding opnieuw te uploaden wanneer deze niet zichtbaar is.

Gebruik die board als primaire referentie voor:
- boekverhouding
- cover
- typography
- paper tone
- spacing
- bronze accents
- image/text balance
- technical drawing treatment

Niet opnieuw een andere art direction onderzoeken.

---

## 3. Vaste art direction

**A+B**
- Swiss / Architectural Editorial als basis
- Warm Architectural Monograph als materiaalgevoel
- minimale digitale motion

Vast:
- warm off-white
- charcoal
- zeer subtiel brons
- veel witruimte
- serif headlines + neutrale sans
- groot beeld
- heldere technische tekeningen
- minimale UI
- geen demo/dashboard-look

---

## 4. Repo's — VEILIGHEID

### Enige actieve testrepo
`ALKAVisuals/webdesign`

Werkmap:
`technischbouwadvies/ontwerpboek/`

### Productierepo
`ALKAVisuals/alkabouwadvies`

**NIET AANRAKEN tijdens Style Lock.**

Eerdere productie-PR #7 is gesloten zonder merge.

Geen wijzigingen aan:
- live Technisch Bouwadvies-site
- ALKA Visuals-site
- productie `main`

---

## 5. Recente QA / PR status

Op `webdesign/main`:
- PR #18 — eerste Fase-M visual QA
- PR #19 — mobiele boekpositie
- PR #20 — iOS Safari scherpte / 2D rendering
- PR #21 — mobile closed/open state
- PR #22 — mobile cover fit
- PR #23 — desktop cover + Projectintro polish

Laatste gecombineerde preview:

`https://alkavisuals.github.io/webdesign/technischbouwadvies/ontwerpboek/fase-m-v5.html?v=20260819-1825`

Dit is een QA-route, niet de definitieve stijl.

---

## 6. Wat de gebruiker nu wil

Niet alle spreads tegelijk aanpakken.

Werk **één onderdeel per keer** zodat alle aandacht naar dat onderdeel gaat.

Volgorde Style Lock:
1. **M.1A Boekframe / verhouding**
2. **M.1B Papier / schaduw / gutter**
3. **M.1C Typografie**
4. **M.1D Controls / UI**
5. **M.1E Cover**
6. **M.1F Eén open masterspread**

Na elk onderdeel:
- implementeren in `webdesign`
- visuele preview geven
- gebruiker laten beoordelen
- pas na goedkeuring door naar volgende onderdeel

---

## 7. M.1A — eerstvolgende concrete taak

Focus ALLEEN op het boekframe.

Te bepalen en fixen:
- desktop boekbreedte
- desktop boekhoogte
- spread aspect ratio
- positie in viewport
- outer margin
- page thickness
- gutter/spine geometrie
- mobile single-page ratio
- mobile positie/viewport fit

Nog NIET aanpassen:
- individuele spreadcontent
- imagekeuze per spread
- motionfinalisatie
- autoplaydesign
- productieintegratie

Acceptatie M.1A:
> Het boek zelf heeft op desktop en mobiel dezelfde overtuigende proportie en aanwezigheid als de goedgekeurde full-book-flow board.

---

## 8. Daarna

Pas na volledige Style Lock:

### M.2 Spread System
Projectintro → Varianten → Plattegrond → Gevel & doorsnede → Bouwdetail → Interieur & materialen → Exterieur → Resultaat/CTA

### M.3 Mobile spread QA
Alle spreads op echte mobile viewports.

### M.4 Motion finaliseren
Cover-open, page-turn, shadows, swipe, autoplay, end state.

### Daarna pas productievoorbereiding

---

## 9. Lees daarna

Na dit bestand:
1. `VISUAL-DESIGN-PROGRESS.md`
2. `VISUAL-DESIGN-ROADMAP.md`
3. `ASSET-GUIDELINES.md`
4. `INTEGRATION-PLAN.md`

Daarna inspecteer je de actuele code in `technischbouwadvies/ontwerpboek/`.
