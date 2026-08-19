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
5. Bodycopy, witruimte & footer — ACTIEF / REVIEW
6. Fysiek boekgevoel
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

## Stap 5 — huidige bodycopy, witruimte & footer
- Bodycopy versmald naar max. 190 px / 74% van de linker pagina
- Bodytekst iets kleiner en lichter gemaakt: 10.4 px, line-height 1.72
- Tekst inhoudelijk iets ingekort zodat de kolom rustiger en editorialer valt
- Afstand titel → bodycopy teruggebracht naar 29 px
- Grote onderste witruimte bewust behouden als onderdeel van de compositie
- `TECHNISCH BOUWADVIES` subtieler gezet op 7.2 px met meer letterspacing
- Footer iets boven de folio gezet zodat merknaam en paginanummer niet concurreren
- Linker folio uitgelijnd met de hoofdinhoud en teruggebracht naar 8 px
- Mobiel eigen smallere copykolom, 10.2 px bodytekst en subtielere footer/folio
- Papier, gutter, page-stack en boekschaduw zijn in deze stap bewust niet gewijzigd

## Vaste preview
`projectintro-style-lock-preview.html` is de visuele branch-preview. Deze wordt gedurende de style-lock steeds bijgewerkt zodat dezelfde link kan worden gebruikt voor review.
