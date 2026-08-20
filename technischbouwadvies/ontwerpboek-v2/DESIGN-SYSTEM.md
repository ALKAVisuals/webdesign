# Ontwerpboek V2 — designsysteem

## Designrichting

De visuele bron van waarheid is `assets/reference/binnenwerk-spread-system.png`. Het systeem combineert een Zwitsers/architectonisch raster met de warmte van een gedrukte projectmonografie.

De lokaal meegeleverde lettertypen zijn Bodoni Moda voor redactionele koppen en Manrope voor technische informatie. Daardoor blijft de typografische kwaliteit consistent op Windows, Safari en andere platformen zonder afhankelijkheid van een externe fontdienst.

De vaste ontwerpprincipes zijn:

- beeld draagt het verhaal; tekst ondersteunt;
- warm ivoor papier in plaats van hard wit;
- charcoal tekst en terughoudend brons;
- grote redactionele serif voor verhaalkoppen;
- neutrale sans-serif voor labels, maatvoering en folio's;
- gecontroleerde asymmetrie en veel negatieve ruimte;
- subtiele fysieke paginadikte, rug en schaduw;
- permanente inhoud blijft gewone scherpe 2D-content.

## Centrale tokens

Kleur, typografie, boekmaat, paginamarges en schaduwsterkte staan in `styles/tokens.css`. Nieuwe spreads gebruiken deze tokens en worden niet met losse fase- of versie-overrides opgebouwd.

## Spreadarchetypen

1. Editorial intro — korte tekstpagina tegenover een groot beeld.
2. Technical spread — ruim technisch lijnwerk zonder cardkaders.
3. Comparison spread — varianten in één rustig raster.
4. Full visual — beeldvullend en vrijwel zonder interface.

Checkpoint 1 implementeerde archetype 1 als Style Lock. Checkpoint 2 bouwde alle
vier archetypen binnen hetzelfde centrale systeem uit:

- Projectintro en Interieur gebruiken de editorial-intro-opbouw;
- Plattegrond, Gevel & Doorsnede en Bouwdetail gebruiken de technical spread;
- Varianten gebruikt één rustige comparison-canvas over twee pagina's;
- Exterieur gebruikt een full-visual spread;
- Resultaat sluit af met een redactionele beeld/tekst-spread.

Alle acht spreads staan in `scripts/content.js`. De inhoud is daar centraal
georganiseerd; layoutregels blijven in `styles/spreads.css` en de fysieke
book-shell blijft uitsluitend in `styles/book.css`.

## Scherpte en rendering

De definitieve pagina's gebruiken geen permanente `transform`, `perspective` of CSS-3D. De pagina-omslag gebruikt uitsluitend een tijdelijke laag uit `styles/motion.css`; na de animatie blijft de definitieve pagina gewone scherpe 2D-content.

## Premium boek-shell

De goedgekeurde Projectintro-richting gebruikt afzonderlijke lagen voor papierstapel, een dunne warm-taupe kaftsnede, middenrug, contactschaduw en omgevingsschaduw. De gesloten omslag gebruikt hetzelfde warme ivoor, ingetogen brons en charcoal als het binnenwerk; een los donker kaftthema is bewust uitgesloten. De boekillusie mag nooit op een wit platform lijken en blijft ondergeschikt aan de pagina-inhoud. De previewomgeving bevat buiten het boek geen decoratieve footer of dashboardachtige bediening.

## Technische presentatie

De tekeningen in `assets/drawings/` zijn schematische technische presentaties.
Ze ondersteunen ontwerpcommunicatie en worden niet gepresenteerd als
constructief gevalideerde uitvoeringsberekeningen. De lijnhiërarchie gebruikt
drie niveaus: doorsnede/hoofdlijn, secundaire bouwlijn en maatvoering/accent.

## Beeldfamilie De Houtkavel

Projectintro, interieur en exterieur vertellen één woningconcept. Materialen,
raamverhoudingen, landschappelijke context en kleurtemperatuur zijn bewust op
elkaar afgestemd. De beelden blijven redactioneel en rustig; zij bevatten geen
tekst, logo's, personen of commerciële elementen.

## Reader en interactie

`scripts/book.js` beheert één centrale reader-state. Het systeem bevat:

- een gesloten fysieke omslag als rustige entree;
- precies één actieve spread op desktop;
- vorige/volgende, Home/End en Escape;
- horizontale swipe met verticale-scrollbescherming;
- een tekstuele en visuele voortgangsindicator;
- deep links via `#spread-01` tot en met `#spread-08`;
- een live-regio voor schermlezers;
- een `prefers-reduced-motion`-route zonder omslaganimatie.

De bediening staat buiten de inhoudelijke spreads en blijft visueel ondergeschikt aan het boek. Tijdens het omslaan gebruikt de tijdelijke animatielaag echte kopieën van de uitgaande en inkomende boekpagina. De stilstaande tegenoverliggende pagina blijft liggen totdat de draai voltooid is; hierdoor ontstaan geen grijze placeholdervlakken of dubbele pagina's halverwege de animatie.

## Mobiele paginering

Onder 48 rem verandert het boek in zestien afzonderlijke boekpagina's. Iedere viewport toont exact één pagina. De technische tekeningen blijven echte SVG's; comparison- en full-visualspreads krijgen een eigen mobiele paginaverdeling zodat tekst en beeld niet worden verkleind tot een onleesbare dubbelspread.

De viewport gebruikt `svh`, veilige ondermarges en geen permanente 3D-transforms. Dit voorkomt bekende iOS/Safari-problemen met onstabiele viewporthoogte en onscherpe tekst.

## Beeldperformance

De drie actieve rasterbeelden worden als WebP geladen. De bron-PNG's blijven beschikbaar, maar worden niet door de reader opgehaald. De gezamenlijke overdracht daalde van 7.896.351 naar 845.012 bytes, een reductie van 89,3%.
