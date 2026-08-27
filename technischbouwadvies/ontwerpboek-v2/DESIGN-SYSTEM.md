# Ontwerpboek V2 — designsysteem

## Projectselector

De buitenste presentatie is een los, data-driven niveau boven de bestaande boekengine:

`projectdata → omslag → selector → lazy open → gedeelde book engine`

Projectmetadata staat centraal in `scripts/projects.js`. `scripts/selector.js` rendert de projectcovers en beheert klikken, pijlen, swipe en actieve projectinformatie. Binnenpagina's worden pas via een dynamische import geladen wanneer een beschikbaar ontwerpboek wordt geopend. De selector gebruikt uitsluitend 2D CSS-transforms en opacity.

De huidige desktopselector toont steeds het actieve project en de directe vorige en volgende buur. Daardoor kan de projectlijst later groeien zonder nieuwe selectorinterface of overlappende covers.

Op mobiel wordt de compositie teruggebracht tot één dominante omslag per viewport. Van de directe buren blijft alleen een smalle visuele aanwijzing zichtbaar. Projectdata en boekbeschikbaarheid blijven uit dezelfde centrale databron komen; de mobiele variant introduceert dus geen tweede interface of aparte projectmarkup.

De mobiele selector en reader zijn met één geometrische overgang verbonden. Openen vergroot de actieve omslag naar het boekpaginaformaat. Sluiten gebruikt de werkelijke positie van diezelfde omslag als eindpunt en laat de overige selectorcontext vertraagd terugkeren. De beweging blijft tweedimensionaal; permanente tekst en technische inhoud krijgen geen 3D-transforms.

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

De bediening staat buiten de inhoudelijke spreads en blijft visueel ondergeschikt aan het boek. Tijdens het omslaan gebruikt de tijdelijke animatielaag echte kopieën van de uitgaande en inkomende boekpagina. Het uitgaande blad vouwt in de eerste helft horizontaal tot de rug in; in de tweede helft opent de achterzijde naar de andere kant. De stilstaande tegenoverliggende pagina blijft liggen totdat die door het nieuwe blad wordt bedekt. De overgang gebruikt bewust geen cameragericht perspectief of roterende 3D-plaat. Een vaste, schilderkundig begrensde overgangsviewport valt exact samen met de boekrand, waardoor rug, buitenmaat en schaduw in ieder frame op dezelfde positie blijven.

Openen en sluiten gebruikt een rustige tweefasenovergang in plaats van een zware 3D-kaft. Op desktop verdwijnt eerst de gesloten kaft en opent de spread vervolgens vanuit de middenrug; bij sluiten gebeurt dit in omgekeerde volgorde. Op mobiel verschijnt en verdwijnt één volledige boekpagina zonder afgekapt tekstbeeld. Tijdelijke visuele kopieën zijn `aria-hidden`, niet interactief en worden na de overgang volledig verwijderd. Bij `prefers-reduced-motion` wordt direct tussen kaft en boek gewisseld.

## Mobiele paginering

Onder 48 rem verandert het boek in zestien afzonderlijke boekpagina's. Iedere viewport toont exact één pagina. De technische tekeningen blijven echte SVG's; comparison- en full-visualspreads krijgen een eigen mobiele paginaverdeling zodat tekst en beeld niet worden verkleind tot een onleesbare dubbelspread.

De viewport gebruikt `svh`, `viewport-fit=cover`, veilige marges via `env(safe-area-inset-*)` en geen permanente 3D-transforms. `-webkit-text-size-adjust` staat vast op 100%, zodat Safari de redactionele hiërarchie niet zelfstandig vergroot. Ook de tijdelijke omslaglaag gebruikt geen perspective of `preserve-3d`; de definitieve pagina blijft gewone scherpe 2D-content.

Liggende telefoons tot 60 rem breed en 34 rem hoog gebruiken hetzelfde één-pagina-systeem. De readerkop verdwijnt daar alleen wanneer het boek open is, de bediening wordt tot één rij teruggebracht en het boek schaalt op beschikbare `svh`. Een afzonderlijke compacte typografieschaal voorkomt dat tekst of materiaalstalen buiten de kleinere liggende pagina vallen.

## Beeldperformance

De drie actieve rasterbeelden worden als WebP geladen. De bron-PNG's blijven beschikbaar, maar worden niet door de reader opgehaald. De gezamenlijke overdracht daalde van 7.896.351 naar 845.012 bytes, een reductie van 89,3%.
