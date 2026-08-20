# Checkpoint 3 — interactie, mobiel en finale QA

Datum: 20 augustus 2026

## Opgeleverd

- gesloten fysieke omslag met duidelijke openactie;
- één actieve desktopspread in plaats van een lange webpagina;
- vorige/volgende, Home, End, Escape en sluiten;
- tijdelijke pagina-omslag zonder permanente 3D-transform op boekinhoud;
- echte horizontale swipe met bescherming tegen verticale scrollbewegingen;
- voortgang per spread op desktop en per pagina op mobiel;
- zestien mobiele boekpagina's, telkens één pagina per viewport;
- aangepaste mobiele pagina's voor Varianten en Exterieur;
- live-regio, toegankelijke knopnamen, focusstijlen en inactieve `inert` spreads;
- reduced-motionroute zonder omslaganimatie;
- WebP-uitvoer voor de drie actieve rasterbeelden.

## Browser-QA

Desktop gecontroleerd op:

- 1440 × 900;
- 1920 × 1080;
- 2560 × 1440.

Mobiel gecontroleerd op:

- 360 × 800;
- 390 × 844;
- 430 × 932.

Resultaat:

- alle acht desktopspreads tonen exact één actieve spread;
- alle zestien mobiele pagina's tonen exact één actieve boekpagina;
- geen horizontale overflow op de geteste formaten;
- alle zichtbare WebP- en SVG-assets laden;
- het 1920 × 1080 readerbeeld past zonder verticale overflow;
- knoppen, Home/End, Escape en een echte swipebeweging zijn doorlopen;
- eerste en laatste toestand blokkeren de niet-beschikbare richting;
- geen browserconsolefouten of -waarschuwingen aangetroffen.

## Toegankelijkheidscontrole

- documenttaal is Nederlands;
- één `main` en één `h1`;
- geen dubbele id's;
- geen afbeeldingen zonder alttekst;
- geen knoppen zonder toegankelijke naam;
- één beleefde live-regio voor paginastatus;
- inactieve spreads zijn `aria-hidden` en `inert`;
- permanente inhoud blijft scherpe 2D-content.

## Performance

De drie daadwerkelijk gebruikte PNG-bronnen waren samen 7.896.351 bytes. De gekoppelde WebP-versies zijn samen 845.012 bytes. Dat is 89,3% minder beelddata, met behoud van de oorspronkelijke resolutie.

## Resterend extern controlemoment

De layout gebruikt Safari-veilige principes (`svh`, veilige ondermarge, geen permanente CSS-3D op tekst en tekeningen). Een korte rooktest op een fysiek iPhone/iPad-apparaat blijft aanbevolen zodra een gedeelde preview beschikbaar is; binnen de lokale Windows-omgeving is geen native Safari-engine beschikbaar.

## Status

Checkpoint 3 is praktisch finaal en bevat geen bekende blocker of duidelijke visuele regressie. De productie-repository en live website zijn niet gewijzigd.
