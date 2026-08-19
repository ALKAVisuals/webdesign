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
7. Desktop + mobiel QA — AFGEROND
8. Final reference pass + finale merge — ACTIEF / EINDREVIEW

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
- Titel geforceerd naar twee regels: `PROJECT` / `INTRO`
- Libre Baskerville als rustige editorial serif

## Stap 5 — vastgelegde bodycopy, witruimte & footer
- Smalle editorial bodycopykolom
- Grote onderste witruimte bewust behouden
- `TECHNISCH BOUWADVIES` onderaan als stille footer

## Stap 6 — vastgelegd fysiek boekgevoel
- Zachte ivory/off-white papierbasis
- Warme neutrale buitenachtergrond
- Zeer subtiele gutter, page-edge en contactschaduw
- Mobiel geen 3D-gutter of zware fysieke effecten

## Stap 7 — vastgelegde desktop + mobiel QA
- `viewport-fit=cover` en iPhone safe-area verwerking
- Horizontale overflow voorkomen
- iOS tekstherschaalgedrag gestabiliseerd
- Mobiele permanente pagina volledig 2D gehouden
- Rechterpagina en gutter mobiel hard verborgen
- Extra breakpoints voor kleinere iPhones en landscape-mobile

## Stap 8 — huidige final reference pass
- Linker contentmarge nauwkeuriger op de referentie gezet: 15.2% vanaf de linker paginarand
- Chapter marker blijft hoog op de pagina; afstand `01` → hairline → titel vergroot voor dezelfde rustige verticale hiërarchie als de referentie
- Hairline op 29 px gezet en titelregelafstand natuurlijker gemaakt (`line-height: 1.08`)
- `PROJECT / INTRO` blijft maximaal 40 px, maar met minder agressieve negatieve tracking
- Titel → bodycopy afstand vergroot naar 57 px zodat de tekst niet tegen de titel aankruipt
- Bodycopy verbreed naar max. 225 px / 58% en teruggezet naar de volledige referentietekst met `Hiermee ontstaat een solide basis...`
- Footer direct op de onderste contentmarge geplaatst en licht leesbaarder gemaakt
- Extra folio `01` en `02` op deze Projectintro-spread verborgen, omdat de referentie alleen de chapter marker `01` toont
- Buitenachtergrond en papier iets lichter gezet voor een zachtere warme monograph-look
- Gutter teruggebracht van 15 px naar 7 px en veel transparanter gemaakt
- Page-stack teruggebracht naar een enkele minimale papieredge
- Boekschaduw en hero-rugschaduw verder verzacht zodat de spread minder digitaal oogt
- Mobiele QA-regels behouden: single-page, 2D en zonder blur

## Vaste preview
`projectintro-style-lock-preview.html` is de actuele branch-preview. Voor de finale review gebruiken we een aparte cache-veilige Step 8 live wrapper.
