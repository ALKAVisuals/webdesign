# Projectintro Final Style Lock

Status: MERGE-VOORBEREIDING OP WERKBRANCH — NIET MERGEN NAAR `main` ZONDER EXPLICIETE GEBRUIKERSGOEDKEURING.

## Baseline
- Branch: `agent/projectintro-final-style-lock`
- Afgetakt van `main` op commit `594e4524e100c402b3dc5a0f2625e7f319220471`
- Leidend beeld: aangeleverde Projectintro/boekreferenties
- Productierepo `ALKAVisuals/alkabouwadvies`: niet wijzigen
- Live `technischbouwadvies.nl`: niet wijzigen

## Afgeronde visuele lijn
1. Baseline en veilige branch — afgerond
2. Spreadverhouding/geometrie — afgerond
3. Hero en beeldpresentatie — afgerond
4. Chapter marker/titel — afgerond
5. Bodycopy/witruimte/footer — afgerond
6. Fysiek boekobject — afgerond als richting
7. Desktop/mobile integratie — afgerond als richting
8. Real-device mobile correcties — afgerond als richting
9. Finale code-level QA — afgerond
10. Branch cleanup vóór PR — afgerond

## Vastgelegde Projectintro-regels
- Desktop: 36.5% tekst / 63.5% hero.
- Hero full-bleed van boven tot onder.
- Kleine bronzen chapter marker `01`.
- Titel op twee regels: `PROJECT` / `INTRO`.
- Smalle editorial bodycopykolom.
- `TECHNISCH BOUWADVIES` als stille footer.
- Rechter folio `02` blijft zichtbaar rechtsonder op de hero.
- Linker extra folio blijft verborgen.
- Papierbasis warm ivory.
- Fysiek boekgevoel via asymmetrische page stacks, onderrand, middenrug, optische kromming en tweelaagse contactschaduw.
- Leesbare desktopcontent blijft geometrisch vlak; fysieke kromming wordt optisch gesimuleerd.

## Echte interactieve integratie
De style-lock is geïntegreerd in de bestaande boekengine; er is geen tweede boekcomponent gebouwd.

Gebruikte bestaande componenten:
- `.book`
- `.page-stack`
- `.book-spine`
- `.book-shadow`
- `.page-left`
- `.page-right`
- bestaande lifecycle/page-turn/navigation in `book.js`

Projectintro gebruikt via `asset-manifest.js` het gekozen bestaande projectbeeld. De hero crop blijft rond `50% 52%` en de desktopbehandeling blijft subtiel.

## Mobile regels
- Eén pagina tegelijk.
- Pagina 01 = tekst; pagina 02 = afzonderlijke full-bleed hero.
- Permanente leesbare pagina blijft volledig 2D en scherp.
- Geen permanente perspective/3D-transform/filter op tekst of hero.
- Mobiele page stack bestaat uit vlakke scherpe papierlagen.
- Landingsintro en websiteheader verdwijnen zodra het boek open is.
- `02` blijft rechtsonder op de mobiele hero zichtbaar.
- `phase-m-mobile-behavior.js` voorkomt ongewenste initiële autoplay en laat programmatische focus van het volledige boek los op mobiel om de full-page iOS-focusring te voorkomen.

## Canonieke implementatie
Vanaf de cleanup is `technischbouwadvies/ontwerpboek/index.html` de enige leidende browser-entrypoint voor deze branch.

De tijdelijke A/B/C/D/E/F-reviewwrappers en standalone Projectintro-previewbestanden zijn verwijderd. De visuele/runtimebestanden die `index.html` daadwerkelijk gebruikt blijven behouden.

## Bestanden die bewust onderdeel van de branchdiff blijven
- `index.html`
- `asset-manifest.js`
- `phase-m-mobile-behavior.js`
- `style-lock-m1c-projectintro-final.css`
- `style-lock-m1c-projectintro-mobile.css`
- `style-lock-m1c-projectintro-mobile-e2.css`
- `style-lock-m1c-projectintro-mobile-e3.css`
- `PROJECTINTRO-FINAL-QA.md`
- dit document

De drie mobiele stylesheets blijven bewust in cascade-volgorde staan; ze bevatten de basisvertaling en twee real-device correctielagen. Ze worden vóór een eventuele latere refactor niet samengevoegd, zodat de reeds beoordeelde cascade niet opnieuw verandert.

## Go / no-go
GO voor:
- laatste browser/device review van de canonieke `index.html`;
- diff-review;
- daarna eventueel PR naar `webdesign/main`.

NO-GO zonder expliciete gebruikersgoedkeuring:
- merge naar `webdesign/main`;
- wijzigingen aan `ALKAVisuals/alkabouwadvies`;
- live publicatie op technischbouwadvies.nl.
