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
3. Hero-afbeelding & beeldpresentatie — ACTIEF / REVIEW
4. Chapter marker & titel
5. Bodycopy, witruimte & footer
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

## Stap 3 — huidige hero-presentatie
- Hero vervangen door `images/website-2026/projecten/illustratieve-case-aanbouw-rijwoning.webp`
- Bestaande productie-asset wordt alleen read-only gebruikt; productie-repo zelf is niet gewijzigd
- Beeld blijft volledig full-bleed in de 63.5%-herozone
- Crop gecentreerd op 50% / 52% en subtiel ingezoomd met schaal 1.018
- Kleurbehandeling rustiger gemaakt: lichte desaturatie, iets meer contrast en lagere helderheid
- Zeer subtiele donkere overlay toegevoegd om het avond-/monograph-gevoel dichter bij de referentie te brengen
- Mobiele tekstpagina blijft in deze stap ongemoeid

## Vaste preview
`projectintro-style-lock-preview.html` is de visuele branch-preview. Deze wordt gedurende de style-lock steeds bijgewerkt zodat dezelfde link kan worden gebruikt voor review.
