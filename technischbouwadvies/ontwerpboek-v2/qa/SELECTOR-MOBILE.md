# Ontwerpboeken-selector — mobiel checkpoint

Datum: 28 augustus 2026
Status: gereed

## Scope

- Eén actief projectboek per mobiele viewport.
- Subtiele delen van het vorige en volgende boek blijven zichtbaar als interactieaanwijzing.
- Projectwissel via pijlen, tik op een zijboek en horizontale swipe.
- Compacte projectinformatie en CTA zonder wijziging van de bestaande binnenpagina's.
- De Houtkavel blijft het enige beschikbare boek; de twee tijdelijke projecten openen geen lege viewer.

## Responsive gedrag

- Tot en met 48 rem gebruikt de selector één centrale omslag.
- De compositie gebruikt `svh` en veilige viewportmarges voor iOS-browserbalken.
- Op zeer compacte schermen tot 24 rem en 40 rem hoog worden boek, kop en CTA aanvullend verkleind.
- De stage houdt horizontale buurboeken binnen zijn eigen uitsnede en veroorzaakt geen pagina-overflow.

## Uitgevoerde QA

| Controle | Resultaat |
| --- | --- |
| 390 × 844 | Volledige selector zichtbaar; geen horizontale of verticale overflow |
| 430 × 932 | Grotere omslag schaalt mee; volledige CTA zichtbaar |
| 320 × 568 | Compacte variant past inclusief teller binnen één viewport |
| Pijlbediening | Projectdata en CTA wisselen correct |
| Swipe | Project wisselt cyclisch in de veegrichting |
| Tijdelijk project | `Ontwerpboek volgt binnenkort`; spreads blijven ongeladen |
| Lazy open De Houtkavel | 0 spreads vóór openen, 8 spreads na openen |
| Mobiele boekpagina | Precies één mobiele boekpagina actief |
| Terug naar de kaft | De selector verschijnt opnieuw zonder overflow |
| Kopstructuur | Actieve projectnaam is de zichtbare H1 van de selector |
| Browserconsole | Geen errors of warnings in de volledige testflow |

## Volgende stap

S3: de mobiele open- en sluitovergang visueel beoordelen, verfijnen en daarna de volledige selector-naar-readerflow als eindcheckpoint testen.
