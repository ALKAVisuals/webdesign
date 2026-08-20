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

Checkpoint 1 implementeerde archetype 1 als Style Lock. Checkpoint 2 bouwt alle
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

De definitieve pagina's gebruiken geen permanente `transform`, `perspective` of CSS-3D. Een latere pagina-omslag mag een tijdelijke animatielaag krijgen, waarna de scherpe 2D-pagina terugkeert.

## Premium boek-shell

De goedgekeurde Projectintro-richting gebruikt afzonderlijke lagen voor papierstapel, dunne donkere kaftsnede, middenrug, contactschaduw en omgevingsschaduw. De boekillusie mag nooit op een wit platform lijken en blijft ondergeschikt aan de pagina-inhoud. De previewomgeving bevat buiten het boek geen decoratieve footer of dashboardachtige bediening.

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
