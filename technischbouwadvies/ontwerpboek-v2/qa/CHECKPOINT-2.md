# Checkpoint 2 — volledig desktopboek

Datum: 20 augustus 2026

## Resultaat

Het ontwerpboek bevat nu acht samenhangende desktopspreads binnen één centraal
designsysteem:

1. Projectintro — editorial intro;
2. Varianten — comparison spread;
3. Plattegrond — technical spread;
4. Gevel & Doorsnede — technical pair;
5. Bouwdetail — technical narrative;
6. Interieur & Materialen — editorial intro;
7. Exterieur — full visual;
8. Resultaat — editorial close.

De desktoppreview toont de spreads bewust onder elkaar. Daardoor kan de volledige
visuele samenhang in Checkpoint 2 worden beoordeeld. Interactief bladeren en het
tonen van één actieve spread horen bij Checkpoint 3.

## Architectuur

- `index.html` bevat alleen de preview-shell en het sequence-mountpoint.
- `scripts/content.js` beheert alle hoofdstukinhoud en spreadmarkup.
- `styles/base.css` beheert podium, previewkop en spreadsequence.
- `styles/book.css` beheert uitsluitend de fysieke book-shell.
- `styles/spreads.css` beheert de vier spreadarchetypen en inhoudslayouts.
- `assets/drawings/` bevat zeven nieuwe schematische technische SVG's.
- `assets/images/` bevat drie samenhangende projectbeelden.

Er zijn geen styles, scripts of fixes uit de oude ontwerpboekimplementatie aan
V2 gekoppeld.

## Nieuwe technische assets

- `variant-a.svg`
- `variant-b.svg`
- `variant-c.svg`
- `ground-floor.svg`
- `south-elevation.svg`
- `section-aa.svg`
- `roof-wall-detail.svg`

Alle technische assets gebruiken dun lijnwerk, terughoudend brons en veel
negatieve ruimte. Zij zijn expliciet schematisch en geen uitvoeringsberekening.

## Nieuwe beeldassets

- `de-houtkavel-interior.png`
- `de-houtkavel-exterior-dusk.png`

Werkwijze: ingebouwde image-generationtool met het Projectintrobeeld als
architectonische referentie. De prompts legden woningvorm, houtmaterialisering,
raamgeometrie, landschapscontext en redactionele fotografie vast en sloten CGI-
glans, vervormde geometrie, personen, tekst en logo's uit.

## Browser-QA

### 1440 × 900

- boekbreedte: 1123 pixels;
- 8 spreads aanwezig;
- alle assets geladen;
- geen horizontale overflow;
- geen console-errors of warnings.

### 1920 × 1080

- boekbreedte: 1400 pixels;
- 8 spreads aanwezig;
- alle assets geladen;
- geen horizontale overflow;
- geen console-errors of warnings.

### 2560 × 1440

- boekbreedte: 1400 pixels;
- 8 spreads aanwezig;
- alle assets geladen;
- geen horizontale overflow;
- geen console-errors of warnings.

## Visuele QA

Tijdens de browservergelijking zijn de hoofdlijnen van plattegrond, gevel,
doorsnede en bouwdetail verfijnd. Daardoor sluit de lijnhiërarchie beter aan op
de Style Lock en domineren de tekeningen de bladspiegel niet.

De finale desktopspreads gebruiken consistent:

- warm ivory papier;
- Bodoni Moda en Manrope;
- bronzen hairlines en kleine technische labels;
- ruime asymmetrische composities;
- dezelfde paginamarges, folio's, rug en schaduw;
- beeldvullende fotografie zonder dashboard- of card-elementen.

## QA-screenshots

Buiten de repository zijn onder andere vastgelegd:

- `checkpoint-2-spread-02-1440x900.jpg`
- `checkpoint-2-spread-04-1440x900.jpg`
- `checkpoint-2-spread-06-1440x900.jpg`
- `checkpoint-2-full-visual-1920x1080.jpg`
- `checkpoint-2-full-visual-2560x1440.jpg`

## Open voor Checkpoint 3

- gesloten cover en boek openen;
- één actieve spread per toestand;
- vorige/volgende navigatie;
- tijdelijke page-turnlaag;
- keyboard en swipe;
- mobiele één-paginaweergave;
- accessibility-, reduced-motion- en performancefinalisatie.
