# Ontwerpboeken-selector — desktopcheckpoint

Datum: 27 augustus 2026
Status: gereed voor visuele goedkeuring

## Scope

- Herbruikbare projectselector rond de bestaande ontwerpboek-engine.
- Drie covers in de projectdata; `De Houtkavel` is het aanvankelijk actieve boek.
- `Woninguitbreiding` en `Interieur & Verbouwing` zijn tijdelijke projectvermeldingen zonder binnenpagina's.
- Bestaande inhoud en Style Lock van `De Houtkavel` zijn niet gewijzigd.
- Productie is niet aangepast.

## Architectuur

- `scripts/projects.js` is de enige bron voor projectnaam, jaar, omslagtekst, samenvatting en beschikbaarheid.
- `scripts/selector.js` rendert de covers en bestuurt selectie, pijlen, klikken, swipe en projectinformatie.
- Alleen het actieve project en de directe vorige/volgende buur zijn zichtbaar; hierdoor blijft dezelfde selector bruikbaar wanneer later meer projecten worden toegevoegd.
- `scripts/content.js` wordt dynamisch geïmporteerd zodra een beschikbaar ontwerpboek wordt geopend. De acht spreads staan dus niet in de eerste selector-DOM.
- De carousel gebruikt alleen CSS-transforms en opacity; er is geen WebGL- of 3D-library.

## Uitgevoerde QA

| Controle | Resultaat |
| --- | --- |
| 1440 × 900 | Geen horizontale of verticale overflow; volledige CTA zichtbaar |
| 1920 × 1080 | Geen overflow; compositorische schaal groeit mee |
| 2560 × 1440 | Geen overflow; covers blijven groot en gecontroleerd |
| Klik op zijboek | Project schuift naar het midden en informatie verandert mee |
| Vorige/volgende pijlen | Cyclische selectie werkt |
| Horizontale swipe | Project wisselt in de juiste richting |
| Tijdelijk project | CTA vermeldt `Ontwerpboek volgt binnenkort`; boekengine opent niet |
| De Houtkavel openen | Acht spreads worden pas op dit moment geladen |
| Terug naar de kaft | Selector keert terug met De Houtkavel actief |
| Browserconsole | Geen fouten tijdens de testflow |

## Volgende stap

Na desktopgoedkeuring: mobiele projectselector ontwerpen en testen als één actieve cover per viewport, inclusief touch- en iOS/Safari-QA.
