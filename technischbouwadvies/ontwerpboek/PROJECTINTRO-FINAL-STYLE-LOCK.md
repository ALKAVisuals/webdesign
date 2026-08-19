# Projectintro Final Style Lock

Status: WORKING BRANCH — NIET MERGEN NAAR MAIN ZONDER EXPLICIETE GOEDKEURING.

## Baseline
- Branch: `agent/projectintro-final-style-lock`
- Afgetakt van `main` op commit `594e4524e100c402b3dc5a0f2625e7f319220471`
- Referentie: door gebruiker aangeleverde VOLLEDIGE BOEKFLOW / Projectintro-spread
- Productie-repo `ALKAVisuals/alkabouwadvies`: NIET WIJZIGEN
- Live `technischbouwadvies.nl`: NIET WIJZIGEN

## Werkmethode
Alle visuele correcties voor Projectintro worden uitsluitend op deze branch opgebouwd. Na iedere stap volgt gebruikersreview. Pas na expliciete eindgoedkeuring wordt één finale PR naar `webdesign/main` geopend en gemerged.

## Oorspronkelijke style-lock
1. Baseline / veilige branch — AFGEROND
2. Spreadverhouding & geometrie — AFGEROND
3. Hero-afbeelding & beeldpresentatie — AFGEROND
4. Chapter marker & titel — AFGEROND
5. Bodycopy, witruimte & footer — AFGEROND
6. Fysiek boekgevoel — AFGEROND
7. Desktop + mobiel QA — AFGEROND
8. Final reference pass — AFGEROND ALS INHOUDELIJKE BASIS

## Nieuwe fysieke boek-pass
A1. Linker boekrug / buitenrand — AFGEROND ALS RICHTING
A2. Rechter page stack — AFGEROND ALS RICHTING
A3. Onderrand en boekdikte — AFGEROND ALS RICHTING
B1. Echte middenrug — ACTIEF / REVIEW
B2. Subtiele pagina-kromming
C1. Contactschaduw
C2. Papiergevoel
D. Projectintro-integratie
E. Mobile vertaling
F. Finale vergelijking + merge

## Vastgelegde inhoudelijke basis
- Desktop tekstzone: 36.5%
- Desktop herozone: 63.5%
- Spread aspect-ratio: 1.46
- Hero full-bleed van boven tot onder
- Kleine bronzen chapter marker `01`
- Titel op twee regels: `PROJECT` / `INTRO`
- Smalle editorial bodycopykolom
- `TECHNISCH BOUWADVIES` als stille footer
- Rechter folio `02` blijft zichtbaar rechtsonder op de hero
- Linker extra folio blijft verborgen
- Mobiele permanente pagina blijft volledig 2D

## A1 + A2 — vastgelegde buitenranden
- Linker rand compacter en donkerder gemaakt zodat deze meer als rug/boekblok leest en minder als regelmatig lijnpatroon
- Rechter page stack rijker en luchtiger gemaakt met onregelmatiger laagdiktes
- Links en rechts bewust asymmetrisch gehouden

## A3 — vastgelegde onderrand en boekdikte
- Doorlopend bottom page block toegevoegd zodat linker en rechter zijranden fysiek met elkaar verbonden zijn
- Onderrand opgebouwd uit meerdere lichte papierlagen met wisselende dikte en contrast
- Extra onderste laag met afwijkende inspringing voorkomt het effect van één rechte grijze balk
- Buitenhoeken subtiel afgerond
- Volledige contactschaduwbehandeling blijft gereserveerd voor C1

## B1 — huidige echte middenrug
- Oude smalle digitale gutter vervangen door een 24 px brede, zeer zachte spine valley
- In het hart van de rug staat slechts één dunne donkere kern in plaats van een harde scheidingslijn
- Direct naast de kern zit een minimale lichte rebound/highlight, zoals licht op papier vlak naast een vouw
- Linkerpagina krijgt in de laatste circa 22 px richting rug een zeer zachte donkere overgang
- Hero krijgt in de eerste circa 18 px een iets diepere rugschaaduw zodat het beeld niet vlak tegen de tekstpagina plakt
- Nieuwe `spine-foot` laat de middenrug onderaan visueel doorlopen in het eerder gebouwde bottom page block
- Er zijn bewust nog geen page transforms of echte vervormingen toegevoegd; subtiele pagina-kromming volgt pas in B2
- Mobiel blijft volledig ongemoeid: gutter, spine-foot en desktop fysieke randeffecten zijn daar verborgen

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Per reviewstap gebruiken we daarnaast een nieuwe cache-veilige live wrapper.
