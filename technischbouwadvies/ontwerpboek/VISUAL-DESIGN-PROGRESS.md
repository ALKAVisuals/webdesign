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

Belangrijke bestanden:
- `VISUAL-DESIGN-ROADMAP.md`
- `VISUAL-DESIGN-PROGRESS.md`
- `ASSET-GUIDELINES.md`
- `INTEGRATION-PLAN.md`

De standalone tool bevat desktop dubbele spread, mobiel single-page, swipe, keyboard, autoplay, reduced motion, premium page-turn, next-spread preload en image fallback.

---

## 5. Productie-repo — BEVESTIGD

De publieke website-repo is:

**`ALKAVisuals/alkabouwadvies`**

Niet verwarren met:
- `ALKAVisuals/webdesign` — prototype/testlab
- `ALKAVisuals/technischbouwadvies-dashboard` — dashboard, niet de publieke site

### Productiestack
- statische HTML
- homepage: `index.html`
- veel bestaande homepage-CSS/JS staat inline
- bestaand sitefont: Inter
- gedeelde bestanden o.a. `site-header.css/js`, `site-responsive.css`, contact/footer bestanden
- GSAP + ScrollTrigger en Lenis staan al op de homepage

### Deploy
De productie-repo bevat `netlify.toml` met:
- `[build] publish = "."`
- Netlify headers / redirects
- redirects naar `https://technischbouwadvies.nl/`

Daarom een merge naar productie-`main` behandelen als **potentieel live-impactvol**.

De gebruiker heeft eerder aangegeven dat automatische Netlify-updates bewust waren uitgeschakeld/beperkt. Controleer vóór een uiteindelijke productie-merge nogmaals de actuele Netlify deployinstelling; zet niets automatisch aan.

---

## 6. Huidige homepage-structuur

De actuele productie-homepage is geïnspecteerd.

Relevante volgorde:
- Hero
- Toepassingen / projectcategorieën
- USP-strip
- Proces / werkwijze
- Diensten
- Trust
- Prijzen
- Calculator
- Gallery
- 3D-visualisatiedienst
- overige informatie / FAQ / contact

### Aanbevolen boekpositie

**Na de USP-strip en vóór de bestaande Proces/Werkwijze-sectie.**

Reden:
1. bezoeker begrijpt eerst waarvoor Technisch Bouwadvies helpt
2. daarna ziet hij het ontwerp visueel ontstaan
3. daarna volgt logisch de operationele werkwijze

Dit is de huidige integratiekeuze tenzij de gebruiker expliciet anders vraagt.

---

## 7. Productie-integratiebranch — ACTIEF, NIET GEMERGED

Productierepo:

`ALKAVisuals/alkabouwadvies`

Branch:

`agent/design-process-book-integration`

Draft PR:

**PR #7 — `Prepare isolated designbook integration preview`**

Status bij deze update:
- OPEN
- DRAFT
- NIET GEMERGED
- branch stond 0 commits achter op productie-`main`
- homepage `index.html` is NIET gewijzigd
- gedeelde site-header/site-CSS zijn NIET gewijzigd

### Nieuwe bestanden op de productiebranch

`designbook/designbook-data.js`
- 8-spread productiecontent
- gebruikt voorlopig alleen assets die al in de productie-repo bestaan
- echte projectassets worden later vervangen

`designbook/designbook.css`
- volledig namespaced onder `.tba-designbook`
- geen globale `body`, `html`, `button`, `a` of `:root` overrides
- desktop + mobile + cover + page-turn + controls

`designbook/designbook.js`
- root-scoped selectors
- injecteert component in `[data-designbook]`
- autoplay
- swipe
- keyboard
- reduced-motion
- autoplay pauze buiten viewport
- idle preload volgende pagina/spread
- `saveData` respecteren

`designbook-preview.html`
- noindex/nofollow integratiepreview
- staat los van de homepage
- bedoeld voor QA vóór de homepage-hook

### Belangrijk
**Deze PR NIET mergen naar `main` voordat de preview visueel/functioneel is beoordeeld.**

---

## 8. CSS/JS-integratieregel — VAST

Productiecomponent gebruikt:

```html
<section class="tba-designbook" data-designbook></section>
```

Alle CSS blijft onder `.tba-designbook`.
Alle JavaScript-selectors blijven binnen de componentroot.

De standalone prototype-CSS mag nooit rechtstreeks naar de homepage worden gekopieerd.

---

## 9. Fonts

Productiesite gebruikt al Inter.

Voor het goedgekeurde editorial karakter gebruikt de preview aanvullend **Libre Baskerville** als display-serif.

Voor uiteindelijke homepage-integratie:
- Inter hergebruiken
- alleen Libre Baskerville 400/700 toevoegen als visuele QA bevestigt dat dit nodig blijft
- `display=swap`

---

## 10. Assets

Zie `ASSET-GUIDELINES.md`.

Voor echte projectcontent later:
- renders: AVIF/WebP
- technische tekeningen: SVG waar schoon mogelijk, anders scherpe WebP/PNG
- technische tekeningen = `contain`
- renders = `cover` waar goedgekeurd
- geen ruwe 4K/8K bronbestanden publiceren
- alt-tekst en mobile crop controleren

---

## 11. Open QA

Nog NIET afgerond:
- echte browser/screenshot-QA van productiepreview
- desktop 1440 / 1280 / 1024
- mobile 390 / 360 / korte schermhoogte
- controleren tegen bestaande productie-CSS
- autoplay + swipe + keyboard + Escape + reduced motion
- Netlify Deploy Preview controleren indien beschikbaar

De huidige omgeving kon eerdere GitHub Pages/raw-browserroutes niet betrouwbaar openen. Claim dus niet dat de preview visueel live is goedgekeurd zonder nieuwe controle.

---

## 12. Exacte volgende stap

**Niet mergen. Niet de homepage wijzigen.**

Eerst:
1. draft PR #7 opnieuw inspecteren
2. bepalen of Netlify een Deploy Preview voor PR #7 heeft gemaakt
3. previewpagina `designbook-preview.html` visueel/functioneel testen
4. eventuele previewbugs herstellen op dezelfde productiebranch
5. daarna pas een minimale homepage-hook ontwerpen

De latere homepage-hook moet zo klein mogelijk zijn:
- stylesheet/font include
- `<section class="tba-designbook" data-designbook>` na USP en vóór Proces
- module include voor `designbook/designbook.js`

Omdat `index.html` groot is, moet de wijziging vooraf exact worden gecontroleerd; geen grote ongecontroleerde whole-file rewrite.

---

## 13. Overdracht naar nieuwe chat

Gebruik:

> We gaan verder met het premium interactieve ontwerpboek voor Technisch Bouwadvies. Open in `ALKAVisuals/webdesign` eerst `technischbouwadvies/ontwerpboek/VISUAL-DESIGN-ROADMAP.md`, daarna `VISUAL-DESIGN-PROGRESS.md`, `ASSET-GUIDELINES.md` en `INTEGRATION-PLAN.md`. Lees alles volledig. De A+B art direction, masterspread, Technical Line Art cover en 8-spread boekflow zijn definitief goedgekeurd en mogen niet opnieuw worden ontworpen tenzij ik dat expliciet vraag. Het prototype/testlab staat op `ALKAVisuals/webdesign`. De bevestigde productie-repo is `ALKAVisuals/alkabouwadvies`, een statische site met Netlify-configuratie. Op productiebranch `agent/design-process-book-integration` staat draft PR #7 met vier uitsluitend nieuwe bestanden: `designbook-preview.html`, `designbook/designbook.css`, `designbook/designbook.js` en `designbook/designbook-data.js`. `index.html` is nog niet gewijzigd en PR #7 mag nog niet worden gemerged. De eerstvolgende taak is preview/Deploy Preview QA uitvoeren, bugs herstellen en pas daarna een minimale homepage-hook voorbereiden na de USP-strip en vóór Proces/Werkwijze. Zet niets automatisch live en controleer de actuele Netlify-deployinstelling vóór een productie-merge.

---

## 14. Snelle status

**GOEDGEKEURD**
- A+B art direction
- masterspread
- Technical Line Art cover
- 8 spreadtypes
- complete boekflow

**PROTOTYPE OP MAIN (`webdesign`)**
- visuals
- motion
- mobile
- performance/accessibility
- integratieplan

**PRODUCTIE VOORBEREID**
- repo `ALKAVisuals/alkabouwadvies` bevestigd
- Netlify-config bevestigd
- productiebranch gemaakt
- draft PR #7 gemaakt
- geïsoleerde component + preview toegevoegd

**NIET GEDAAN**
- productiehomepage aanpassen
- PR #7 mergen
- live zetten

**NU**
- preview QA
- daarna minimale homepage-hook
