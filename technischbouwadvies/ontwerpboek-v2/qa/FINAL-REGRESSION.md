# Ontwerpboek V2 — finale regressiecontrole

Datum: 28 augustus 2026
Status: geslaagd — geen bekende blocker

## Geteste gebruikersketen

`projectdata → selector → projectwissel → lazy open → boeknavigatie → breakpointwissel → terug naar selector`

## Desktop

| Controle | Resultaat |
| --- | --- |
| Selector 1440 × 900 | Geen overflow; drie projectboeken zichtbaar |
| Selector 1920 × 1080 | Geen overflow; schaal en compositie blijven stabiel |
| Tijdelijk project | CTA geblokkeerd en spreads blijven ongeladen |
| De Houtkavel openen | 0 spreads vóór openen, 8 spreads daarna |
| Vorige/volgende | Correcte spread, teller en URL-hash |
| Home/End | Springt correct naar spread 01 en 08 |
| Pijltjestoetsen | Navigatie werkt zonder achterblijvende turn layer |
| Deeplink `#spread-04` | Opent direct de vierde spread |
| Alle spreads | Reeks 01 t/m 08 volledig doorlopen |
| Beeldassets | 16 afbeeldingen gecontroleerd; 0 gebroken assets |

## Mobiel

| Controle | Resultaat |
| --- | --- |
| Selector 390 × 844 | Geen overflow; één actieve omslag |
| Selector 320 × 568 | Volledige compacte selector binnen viewport |
| Selectorswipe | Wisselt project en actieve projectdata |
| Readerswipe | Wisselt één mobiele pagina per stap |
| Actieve pagina | Steeds exact één `.is-mobile-active` |
| Open-/sluitovergang | Geen achtergebleven transition ghosts |
| Terug naar selector | Correcte `#cover`-status en stabiele afmetingen |

## Breakpoint en structuur

| Controle | Resultaat |
| --- | --- |
| Desktop spread 04 → mobiel | Wordt pagina 07/16 |
| Mobiel pagina 09/16 → desktop | Wordt spread 05/08 |
| URL-status | Blijft bij dezelfde inhoudelijke spread |
| Dubbele ID's | Geen |
| Actieve spreads | Exact één |
| Page-turnlagen na animatie | Geen |
| Transition ghosts na animatie | Geen |
| Browserconsole | Geen errors of warnings |
| Focuscontract | Actief boek `tabindex=0`, zijboeken `tabindex=-1`, navigatieknoppen gelabeld |
| Reduced motion | Direct codepad zonder ghosts aanwezig en CSS-animaties uitgeschakeld |

## Releasegrens

- Alle wijzigingen staan uitsluitend in `ALKAVisuals/webdesign` op `codex/ontwerpboek-v2`.
- `ALKAVisuals/alkabouwadvies` en technischbouwadvies.nl zijn niet aangepast.
- Er is nog niets gecommit, gepusht, gemerged of gedeployed.
- De twee tijdelijke projecten hebben bewust nog geen binnenpagina's.

## Eerstvolgende stap

Een releaseoverzicht maken met de exacte gewijzigde bestanden, scheiding tussen selectorwerk en eerder boekwerk, voorgestelde logische commits en resterende niet-productiepunten. Pas na expliciete toestemming committen of pushen.
