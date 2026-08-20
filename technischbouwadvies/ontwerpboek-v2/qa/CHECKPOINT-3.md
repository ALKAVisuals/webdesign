# Checkpoint 3 — interactie, mobiel en finale QA

Datum: 21 augustus 2026

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

## Verfijning boekervaring

Na de eerste interactieve versie is de boekervaring opnieuw visueel beoordeeld tegen de `BINNENWERK SPREAD SYSTEM`-referentie. Daarbij zijn uitsluitend de kaft, book-shell, bediening en paginawissel aangepast; de inhoudelijke tekeningen, plattegronden en renders zijn ongemoeid gelaten.

- de donkere kaft is vervangen door warm ivoor met een subtiele linnenstructuur;
- kaft, binnenwerk en readeromgeving gebruiken nu één doorlopende kleur- en typografierichting;
- paginadikte, boekrug, papierstapel en contactschaduw zijn subtieler en fysieker opgebouwd;
- de readerkop en bediening zijn teruggebracht zodat het boek visueel leidend blijft;
- de pagina-omslag toont echte pagina-inhoud op voor- en achterzijde;
- de oude tegenoverliggende pagina blijft tijdens het omslaan liggen en verdwijnt pas na de draai.
- cameragerichte perspectiefschaal is verwijderd, zodat het blad niet langer buiten de vaste boekmaat groeit;
- de volgende pagina wordt tijdens de draai uitsluitend onder het omslaande blad onthuld en de hoofdstukstatus wisselt pas na afloop.
- openen en sluiten gebruikt een tweefasenovergang zonder overlappende kaft- en spreadtekst;
- mobiel gebruikt voor kaftwissels een volledige paginaovergang in plaats van een desktopachtige middenrugmaskering.

Aanvullend gecontroleerd op 1440 × 900 en 390 × 844:

- vooruit- en terugbladeren hebben een fysiek logische laagvolgorde;
- boek, onderliggende pagina en draaiend blad hebben in ieder gemeten tussenframe exact dezelfde hoogte en verticale positie;
- na iedere animatie blijven nul tijdelijke lagen achter;
- exact één spread en op mobiel exact één boekpagina is actief;
- mobiel heeft geen horizontale of verticale viewportoverflow;
- geen browserconsolefouten of -waarschuwingen aangetroffen.
- na openen en sluiten blijven geen tijdelijke visuele kopieën achter;
- focus eindigt na openen op de boeksequentie en na sluiten op de knop `Open het ontwerpboek`;
- tijdens de overgang zijn de tijdelijke en nog niet actieve toestanden niet interactief.

## Volledige sequentiële regressie

Na de verfijning van de book-shell is het boek nogmaals zonder onderbreking van begin tot einde doorlopen.

Desktop op 1440 × 900:

- alle acht spreads hebben per resolutie exact dezelfde boekmaat en verticale positie;
- alle zeven vooruitgaande overgangen houden het draaiende blad en de onderliggende pagina binnen die vaste boekmaat;
- een aanvullende terugwaartse overgang van spread 08 naar 07 is op dezelfde maatvastheid gecontroleerd;
- eerste en laatste spread tonen de juiste geblokkeerde navigatierichting;
- na iedere wissel blijven nul tijdelijke animatielagen achter.

Mobiel op 390 × 844:

- alle zestien pagina's hebben exact dezelfde maat: 343,55 × 467,41 pixels;
- alle vijftien overgangen blijven exact tussen 107,14 en 574,55 pixels in de viewport;
- iedere eindtoestand toont precies één actieve mobiele pagina;
- de hashes lopen correct per spreadpaar van `#spread-01` tot en met `#spread-08`;
- de eerste pagina blokkeert terugbladeren en de laatste pagina blokkeert verderbladeren;
- geen horizontale overflow, achtergebleven animatielagen of browserfouten aangetroffen.
