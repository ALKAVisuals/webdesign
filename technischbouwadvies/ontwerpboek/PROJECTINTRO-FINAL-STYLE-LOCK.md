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
B1. Echte middenrug — AFGEROND ALS RICHTING
B2. Subtiele pagina-kromming — ACTIEF / REVIEW
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

## B1 — vastgelegde middenrug
- Oude digitale gutter vervangen door een 24 px zachte spine valley
- Eén dunne donkere kern vormt het hart van de rug
- Minimale lichte rebound/highlight naast de kern
- Linkerpagina en hero krijgen zachte lokale rugschaaduw
- `spine-foot` laat de middenrug in het bottom page block doorlopen

## B2 — huidige subtiele pagina-kromming
- Geen transforms toegepast op tekst, pagina of hero; alle leesbare content blijft geometrisch vlak en scherp
- Linkerpagina krijgt in de laatste circa 62 px richting de rug een zachte elliptische schaduwcurve met een lichte papierhighlight vlak naast de vouw
- Rechterpagina krijgt in de eerste circa 58 px een overeenkomstige maar iets donkerdere curve, passend bij de fotografische hero
- Boven- en onderzijde van beide curves hebben afzonderlijke zeer zachte highlights/schaduwen zodat de pagina niet als een rechte verticale gradient leest
- De B2-curves liggen als overlays boven de pagina's en vervormen de inhoud niet
- Op 761–980 px worden de curves iets smaller zodat de rug niet te zwaar wordt
- Mobiel blijft exact de veilige 2D single-page versie: alle B2 curvature overlays zijn daar uitgeschakeld
- Contactschaduw en algemene papiermaterialiteit zijn bewust nog niet opnieuw ontworpen; die volgen in C1 en C2

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Per reviewstap gebruiken we daarnaast een nieuwe cache-veilige live wrapper.
