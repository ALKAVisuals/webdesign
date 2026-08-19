# Projectintro Final Style Lock

Status: WORKING BRANCH — NIET MERGEN NAAR MAIN ZONDER EXPLICIETE GOEDKEURING.

## Baseline
- Branch: `agent/projectintro-final-style-lock`
- Afgetakt van `main` op commit `594e4524e100c402b3dc5a0f2625e7f319220471`
- Referentie: door gebruiker aangeleverde VOLLEDIGE BOEKFLOW / Projectintro-spread
- Productie-repo `ALKAVisuals/alkabouwadvies`: NIET WIJZIGEN
- Live `technischbouwadvies.nl`: NIET WIJZIGEN

## Werkmethode
Alle visuele correcties voor Projectintro worden uitsluitend op deze branch opgebouwd. Na iedere stap volgt gebruikersreview. Pas na expliciete eindgoedkeuring en controle van de echte interactieve boekimplementatie wordt één finale PR naar `webdesign/main` geopend en gemerged.

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
B2. Subtiele pagina-kromming — AFGEROND ALS RICHTING
C1. Contactschaduw — AFGEROND ALS RICHTING
C2. Papiergevoel — AFGEROND ALS RICHTING
D. Projectintro-integratie — AFGEROND ALS RICHTING
E. Mobile vertaling — E2 ACTIEF / REVIEW
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

## B2 — vastgelegde pagina-kromming
- Geen transforms toegepast op tekst, pagina of hero; alle leesbare content blijft geometrisch vlak en scherp
- Linkerpagina krijgt richting de rug een zachte elliptische schaduwcurve met lichte papierhighlight
- Rechter hero krijgt een overeenkomstige maar donkerdere curve
- Boven- en onderzijde hebben afzonderlijke zeer zachte highlights/schaduwen
- Mobiel blijft de veilige 2D single-page versie; curvature overlays staan daar uit

## C1 — vastgelegde contactschaduw
- Tweelaagse schaduwopbouw: korte donkere contactschaduw direct onder het boek plus brede zachte secundaire schaduw
- Hoeken krijgen lokaal iets meer massa zonder een donkere rechthoek te vormen
- Generieke web-card box-shadow sterk teruggebracht
- Desktop fysieke contactshadow blijft mobiel uitgeschakeld

## C2 — vastgelegd papiergevoel
- Papierbasis verfijnd naar warm ivory `#faf7ef`
- Alleen subtiele tonale gradients; geen zichtbare korrel of vintage texture
- Richting de middenrug loopt het papier iets warmer
- Hero blijft schoon en krijgt geen papiertexture
- Page stacks en onderrand gebruiken dezelfde warme ivoorfamilie
- Mobiel blijft vlak en rustig voor iOS-scherpte

## D — vastgelegde Projectintro-integratie
- De goedgekeurde fysieke richting is niet langer alleen een standalone stijlschets: `style-lock-m1c-projectintro-final.css` past de regels gericht toe op spread `01` van het echte interactieve boek
- De daadwerkelijke `.book` krijgt op desktop alleen bij spread 01 de 36.5% / 63.5% masterspread
- Bestaande `.page-stack`, `.book-spine`, `.book-shadow`, `.page-left` en `.page-right` van de echte boekengine worden gebruikt; er is geen tweede boekcomponent gebouwd
- Linker en rechter page stacks volgen nu de asymmetrische spreadbreedtes en krijgen de fysieke laagopbouw uit A1–A3
- De echte `book-spine` staat op de 36.5%-vouw en gebruikt de B1 spine-valley
- De bestaande pages krijgen de B2 curvature als visuele overlay zonder transforms op tekst of hero
- Projectintro gebruikt in `asset-manifest.js` nu het goedgekeurde beeld `projecten/illustratieve-case-aanbouw-rijwoning.webp`
- Hero crop/treatment is geïntegreerd: 50% / 52%, schaal 1.018, lichte desaturatie, iets meer contrast en lagere helderheid
- De inhoudelijke hiërarchie van de linkerpagina is opnieuw op de goedgekeurde masterspread afgestemd
- De door gebruiker gewenste `02` blijft rechtsonder op de hero zichtbaar; de linker extra folio blijft verborgen
- De D-preview gebruikt de echte interactieve boekmarkup, book.js, asset-manifest en bestaande lifecyclebestanden via een cache-veilige branchwrapper

## E — mobile vertaling
- `style-lock-m1c-projectintro-mobile.css` vertaalt spread 01 naar mobiel zonder de bestaande iOS/Safari-veiligheidsregels te omzeilen
- Mobiel blijft één pagina tegelijk tonen; er wordt geen tweede lege rechterpagina gereserveerd
- Leesbare pagina, tekst, hero en editorial-layout blijven permanent 2D: geen perspective, geen 3D-transform, geen filter op de content en geen will-change rasterisatie
- De geblurde `book-shadow` is voor Projectintro mobiel uitgeschakeld
- Pagina 02 blijft in de echte `book.js` flow de volgende afzonderlijke mobiele pagina en de door gebruiker gewenste `02` blijft op de mobiele hero rechtsonder

## E2 — huidige mobiele compositiecorrectie
- E2 is gestart na echte iPhone-review van E1; desktopregels zijn niet gewijzigd
- `style-lock-m1c-projectintro-mobile-e2.css` wordt na de E1-mobile stylesheet geladen en bevat alleen mobiele overrides
- De volledige `.presentation-intro` verdwijnt zodra het boek in `opening`, `open`, `turning`, `ending` of `ended` staat; hierdoor blijft `Open ontwerpboek →` niet boven een reeds geopend boek staan en reserveert die landingssectie geen verticale ruimte meer
- De open boekzone krijgt opnieuw een kleine veilige bovenruimte en het boek kan optisch beter in de beschikbare viewport staan
- Titel `PROJECT / INTRO` is ongeveer 8–10% teruggeschaald ten opzichte van E1 en blijft op twee regels
- Bodycopy is iets kleiner en smaller gemaakt zodat de pagina meer als editorial print en minder als webtekst leest
- Footer is eveneens minimaal teruggenomen zodat de hiërarchie rustiger wordt
- Mobiele page stack is minder mathematisch regelmatig gemaakt: laagoffsets, kleurwaarden en onderlinge afstanden variëren subtiel
- Een uiterst smalle rechter buitenrand op de onderliggende papierstapel geeft extra fysieke boekdikte zonder 3D-transform, blur of filter op de leesbare pagina
- De hero-pagina erft dezelfde platte page-stack en blijft verder full-bleed en scherp
- De E2-review is vastgezet op commit `39d0df935b05d6b2ab1fe94c3e48826ca8e6c75d`
- `projectintro-integration-e2-mobile-2312.html` is de unieke cache-veilige E2-reviewwrapper

## Vaste preview
`projectintro-style-lock-preview.html` blijft de visuele stijlschets. Voor de huidige echte mobiele review is `projectintro-integration-e2-mobile-2312.html` leidend. Pas na review van E2 gaat het project door naar stap F.
