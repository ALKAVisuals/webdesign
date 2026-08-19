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
6. Fysiek boekgevoel — AFGEROND
7. Desktop + mobiel QA — ACTIEF / REVIEW
8. Final reference pass + finale merge

## Stap 2 — vastgelegde geometrie
- Desktop tekstzone: 36.5%
- Desktop herozone: 63.5%
- Spread aspect-ratio: 1.46
- Gutter op de echte 36.5%-scheiding
- Hero full-bleed van boven tot onder
- Linker binnenmarges afgestemd op de smallere editorial kolom

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

## Stap 6 — vastgelegd fysiek boekgevoel
- Papierbasis: zachte ivory/off-white (`#f8f4ec`)
- Warme neutrale buitenachtergrond
- Zachte 15 px gutter in plaats van een digitale 1 px lijn
- Subtiele papierverdonkering richting de rug
- Rustige page-stack onder het boek
- Zachtere, dichter geplaatste contactschaduw
- Buitenrand als nauwelijks zichtbare hairline
- Mobiel geen 3D-gutter of zware fysieke effecten

## Stap 7 — huidige desktop + mobiel QA
- `viewport-fit=cover` toegevoegd voor correcte iPhone safe-area verwerking
- Horizontale overflow hard voorkomen
- `-webkit-text-size-adjust:100%` toegevoegd zodat iOS tekst niet onverwacht herschaalt
- Tussenbreedte 761–980 px krijgt eigen desktop/laptop schaal voor titel, copy en marges
- Mobiele permanente pagina blijft volledig 2D: geen perspective, transform of filter op het leesbare boekvlak
- Rechterpagina op mobiel hard verborgen zodat nooit een lege tweede kolom kan ontstaan
- Gutter op mobiel volledig uitgeschakeld
- Mobiele schaduw/page-depth verder vereenvoudigd zonder blur-filter om Safari-rasterisatie te vermijden
- Focus outline op het boekvlak mobiel hard onderdrukt; desktoptoegankelijkheid wordt niet globaal verwijderd
- Extra breakpoint onder 420 px voor kleinere iPhones
- Landscape-mobile krijgt een compacte, veilige enkel-paginaweergave
- Safe-area paddings toegevoegd voor notch/home-indicator
- Desktop spread, hero en fysieke behandeling inhoudelijk niet gewijzigd

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Voor review gebruiken we daarnaast per stap een cache-veilige live wrapper.
