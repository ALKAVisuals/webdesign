# Projectintro Final Style Lock

Status: WORKING BRANCH — NIET MERGEN NAAR MAIN ZONDER EXPLICIETE GOEDKEURING.

## Baseline
- Branch: `agent/projectintro-final-style-lock`
- Afgetakt van `main` op commit `594e4524e100c402b3dc5a0f2625e7f319220471`
- Referentie: door gebruiker aangeleverde VOLLEDIGE BOEKFLOW / Projectintro-spread
- Productie-repo `ALKAVisuals/alkabouwadvies`: NIET WIJZIGEN
- Live `technischbouwadvies.nl`: NIET WIJZIGEN

## Werkmethode
Alle visuele correcties voor Projectintro worden vanaf nu uitsluitend op deze branch opgebouwd. Na iedere stap volgt gebruikersreview. Pas na expliciete eindgoedkeuring wordt één finale PR naar `webdesign/main` geopend en gemerged.

## Stappen
1. Baseline / veilige branch — AFGEROND
2. Spreadverhouding & geometrie — AFGEROND
3. Hero-afbeelding & beeldpresentatie — AFGEROND
4. Chapter marker & titel — AFGEROND
5. Bodycopy, witruimte & footer — AFGEROND
6. Fysiek boekgevoel — ACTIEF / REVIEW
7. Desktop + mobiel QA
8. Final reference pass + finale merge

## Stap 2 — vastgelegde geometrie
- Desktop tekstzone: 36.5%
- Desktop herozone: 63.5%
- Spread aspect-ratio: 1.46
- Gutter op de echte 36.5%-scheiding
- Hero full-bleed van boven tot onder
- Linker binnenmarges afgestemd op de smallere editorial kolom
- Mobiele single-page geometrie inhoudelijk niet gewijzigd

## Stap 3 — vastgelegde hero-presentatie
- Hero gebruikt `images/website-2026/projecten/illustratieve-case-aanbouw-rijwoning.webp`
- Bestaande productie-asset wordt alleen read-only gebruikt; productie-repo zelf is niet gewijzigd
- Beeld volledig full-bleed in de 63.5%-herozone
- Crop gecentreerd op 50% / 52% en subtiel ingezoomd met schaal 1.018
- Rustige kleurbehandeling: lichte desaturatie, iets meer contrast en lagere helderheid
- Zeer subtiele donkere overlay voor meer architectural-monograph sfeer

## Stap 4 — vastgelegde chapter marker & titel
- Kleine bronzen `01`
- Hairline 27 px en compact bij de chapter marker
- Titel geforceerd naar twee regels: `PROJECT` / `INTRO`
- Titelschaal max. 40 px op desktop
- Line-height .96 en subtiele negatieve tracking
- Libre Baskerville als rustige editorial serif
- Mobiel dezelfde hiërarchie met 30 px titelmaat

## Stap 5 — vastgelegde bodycopy, witruimte & footer
- Bodycopy max. 190 px / 74% van de linker pagina
- Bodytekst 10.4 px met line-height 1.72
- Copy inhoudelijk verkort voor een compactere editorial kolom
- Titel → bodycopy afstand 29 px
- Onderste witruimte bewust behouden als onderdeel van de compositie
- `TECHNISCH BOUWADVIES` subtiel gezet op 7.2 px met ruime tracking
- Footer boven de folio geplaatst zodat merknaam en paginanummer niet concurreren
- Linker folio uitgelijnd met de hoofdinhoud en teruggebracht naar 8 px
- Mobiel eigen smallere copykolom en subtielere footer/folio

## Stap 6 — huidig fysiek boekgevoel
- Papier warmer gemaakt naar een zachte ivory/off-white basis (`#f8f4ec`)
- Buitenachtergrond iets warmer en neutraler gemaakt zodat boek en omgeving loskomen zonder hard contrast
- Digitale 1 px middenlijn vervangen door een zachte 15 px gutter met subtiele licht-/schaduwverloop
- Linker pagina krijgt een nauwelijks zichtbare donkerder papierzone richting de rug
- Rechter hero krijgt langs de rug een subtiele contactschaduw zodat beeld en tekstpagina als één fysieke spread samenkomen
- Boekschaduw dichter tegen het object gebracht en veel zachter gemaakt
- Onder het boek een zeer beperkte page-stack toegevoegd: enkele lichte papierlagen in plaats van opvallende gestapelde lijnen
- Zachte contactschaduw onder de paginalagen toegevoegd voor een fysiek objectgevoel
- Buitenrand teruggebracht tot een bijna onzichtbare hairline
- Papier krijgt alleen zeer subtiele lichtvariatie; geen zware texture
- Mobiel blijft volledig 2D: geen 3D-transforms, geen zichtbare gutter en alleen een zachte vlakke schaduw/page-edge
- Typografie, copy, geometrie en hero-crop zijn in deze stap inhoudelijk niet gewijzigd

## Vaste preview
`projectintro-style-lock-preview.html` is de visuele branch-preview. Deze wordt gedurende de style-lock steeds bijgewerkt zodat dezelfde link kan worden gebruikt voor review.
