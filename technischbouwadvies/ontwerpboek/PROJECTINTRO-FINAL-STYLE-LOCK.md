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
A3. Onderrand en boekdikte — ACTIEF / REVIEW
B1. Echte middenrug
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

## A1 + A2 — verfijnde buitenranden
- Linker rand compacter en donkerder gemaakt zodat deze meer als rug/boekblok leest en minder als een regelmatig lijnpatroon
- Rechter page stack rijker en iets luchtiger gemaakt met onregelmatiger laagdiktes
- Links en rechts zijn bewust niet meer symmetrisch
- De buitenranden blijven achter het leesbare boekvlak en wijzigen de 36.5/63.5 compositie niet

## A3 — huidige onderrand en boekdikte
- Nieuw doorlopend bottom page block toegevoegd zodat linker en rechter zijranden niet meer abrupt stoppen
- Onderrand opgebouwd uit meerdere lichte papierlagen met wisselende dikte en contrast
- Extra onderste laag toegevoegd met iets afwijkende inspringing zodat de dikte niet als één rechte grijze balk oogt
- Buitenhoeken subtiel afgerond zodat het boek minder mathematisch vlak voelt
- Contactschaduw onder de onderrand blijft bewust zeer beperkt; volledige schaduwbehandeling volgt pas in C1
- Mobiel blijft voor deze stap ongewijzigd; alle desktop fysieke edges zijn daar nog verborgen

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Per reviewstap gebruiken we daarnaast een nieuwe cache-veilige live wrapper.
