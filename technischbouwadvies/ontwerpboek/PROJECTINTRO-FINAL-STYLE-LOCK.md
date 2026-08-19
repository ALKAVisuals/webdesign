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
A1. Linker boekrug / buitenrand — ACTIEF / REVIEW
A2. Rechter page stack — ACTIEF / REVIEW
A3. Onderrand en boekdikte
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

## A1 + A2 — huidige buitenranden
- Links is een afzonderlijk boekblok toegevoegd buiten de eigenlijke spread, zodat de pagina niet langer als één vlakke HTML-rechthoek eindigt
- De linker rand bestaat uit meerdere zeer dunne ivory/papierlijnen, een donkere kern en een subtiele buitenlaag
- De linker edge steekt circa 10 px buiten het boekvlak en krijgt een minimale contactschaduw
- Rechts is een iets duidelijkere page stack toegevoegd, passend bij de referentie waar de losse paginalagen aan de buitenzijde zichtbaar zijn
- De rechter stack gebruikt afwisselend lichte papierlagen en zeer dunne donkerdere scheidingen; geen dikke decoratieve rand
- Rechts steekt de stack circa 11 px buiten het boekvlak
- De fysieke buitenranden zitten achter het leesbare boekvlak en veranderen de bestaande 36.5/63.5 compositie niet
- Onderrand, echte middenrug, pagina-kromming en nieuwe schaduwbehandeling zijn bewust nog NIET uitgevoerd
- A1/A2 zijn desktop-only; mobiel blijft voorlopig exact de veilige single-page 2D-versie

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Per reviewstap gebruiken we daarnaast een nieuwe cache-veilige live wrapper.
