# Checkpoint 1C — finale Style Lock-kalibratie

Datum: 20 augustus 2026

## Doel

De Projectintro-spread nog één keer gericht vergelijken met de aangeleverde
`BINNENWERK SPREAD SYSTEM`-referentie en uitsluitend de resterende verschillen
in schaal, verticale plaatsing, beeldkadrering en fysieke boekwerking corrigeren.

## Uitgevoerde verfijningen

- De book-shell staat dichter onder de redactionele kop, zonder dat de pagina
  krap of webachtig aanvoelt.
- Het projectbeeld is circa twaalf procent ingezoomd. De woning krijgt daardoor
  meer visueel gewicht, terwijl landschap en context zichtbaar blijven.
- Titel, titelstreep en lopende tekst zijn iets verkleind voor een verfijndere,
  meer redactionele hiërarchie.
- De middenrug heeft subtiele boven- en ondercurvature gekregen om de fysieke
  aanwezigheid van het boek geloofwaardiger te maken.

## Visuele vergelijking met de Style Lock

De volgende eigenschappen sluiten nu aantoonbaar aan op de referentie:

- warm ivory podium en papier;
- centrale redactionele titel en terughoudend bronzen accent;
- asymmetrische introspread met veel negatieve ruimte;
- elegante serif voor de hoofdstuktitel en compacte technische sans voor labels;
- beeldvullende rechterpagina met een architectonisch geloofwaardig projectbeeld;
- dunne paginaranden, zichtbare paginastapel, middenrug en zachte contactschaduw;
- kleine hoofdstuklabels en folio's zonder dashboard- of card-uitstraling.

De referentie toont vier spreads tegelijk, terwijl deze implementatie één spread
als hoofdobject presenteert. Daardoor is het boek bewust groter in beeld, maar
de interne bladspiegel en de visuele taal volgen hetzelfde systeem.

## Technische QA

### 1440 × 900

- viewport: 1440 × 900 CSS-pixels;
- boek: 1123 × 582 pixels;
- fonts volledig geladen;
- projectbeeld volledig geladen;
- geen horizontale of verticale overflow;
- geen console-errors of warnings.

### 1920 × 1080

- viewport: 1920 × 1080 CSS-pixels;
- boek: 1400 × 725 pixels;
- fonts volledig geladen;
- projectbeeld volledig geladen;
- geen horizontale of verticale overflow;
- geen console-errors of warnings.

### Bestanden en lokale server

`index.html`, de drie gewijzigde stylesheets en het projectbeeld antwoorden alle
met HTTP-status 200. De tijdelijke `Bad Request`-melding in de Codex-interface
was geen fout van de website en heeft geen bestanden of weergave beïnvloed.

## Screenshots

- `checkpoint-1c-final-1440x900.jpg`
- `checkpoint-1c-final-1920x1080.jpg`

Deze screenshots worden buiten de repository als QA-bewijs bewaard.

## Eindoordeel

De Projectintro en de onderliggende designrichting halen het beoogde premium
architectuurboekniveau. Checkpoint 1 is hiermee visueel en technisch afgerond.

Volgende fase: Checkpoint 2 — de resterende spreadarchetypes en alle acht
desktopspreads binnen hetzelfde designsysteem bouwen.
