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

Checkpoint 1 implementeert alleen archetype 1.

## Scherpte en rendering

De definitieve pagina's gebruiken geen permanente `transform`, `perspective` of CSS-3D. Een latere pagina-omslag mag een tijdelijke animatielaag krijgen, waarna de scherpe 2D-pagina terugkeert.
