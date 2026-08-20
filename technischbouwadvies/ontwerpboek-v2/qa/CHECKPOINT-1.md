# Checkpoint 1 — Projectintro

## Visuele vergelijking met de Style Lock

De Projectintro gebruikt dezelfde kernverhoudingen en hiërarchie als `assets/reference/binnenwerk-spread-system.png`:

- één open dubbelspread met een rustige, ivoren tekstpagina en een volbeeldpagina;
- kleine technische hoofdstuklabels en folio's;
- een grote, elegante serif titel;
- een korte bronzen haarlijn;
- veel negatieve ruimte rondom korte tekst;
- zichtbare maar subtiele paginalagen, rug en contactschaduw;
- een natuurlijk architectuurbeeld zonder webinterface of cardlook.

De buitenste previewkop is bewust ondergeschikt aan het boek. Binnen de spread is geen commerciële CTA of bedieningsinterface aanwezig.

Na een tweede directe vergelijking met de Style Lock zijn vier verfijningen doorgevoerd:

- lokaal meegeleverde Bodoni Moda vervangt de te zware systeemfallback;
- de projecttitel staat kleiner en op één regel zoals in de referentie;
- dubbele hoofdstukinformatie en de beeldcaption zijn verwijderd;
- paginalagen en middenrug zijn zachter en minder grafisch gemaakt.

## Browser-QA

| Viewport | Boekmaat | Documentmaat | Resultaat |
| --- | --- | --- | --- |
| 1440 × 900 | 1123 × 582 | 1440 × 900 | Geen overflow; beeld compleet; tekst past. |
| 1920 × 1080 | 1400 × 725 | 1920 × 1080 | Geen overflow; beeld 1535 × 1024 geladen; tekst past. |
| 2560 × 1440 | 1400 × 725 | 2560 × 1440 | Bewuste maximale boekmaat; tekst en beeld passen. |

De browserconsole bevatte op de geteste viewports geen waarschuwingen of fouten.

Bodoni Moda en Manrope zijn op beide hoofdviewports als lokale webfonts geladen; de titel blijft volledig binnen de linkerpagina.

## Scherpte

Alle permanente tekst, labels, folio's en pagina-inhoud blijven gewone 2D DOM-content. Er is geen permanente CSS-3D-transform toegepast. Het fysieke boekgevoel komt uit paginaranden, achterliggende lagen, lineaire rugschaduwen en een omgevingsschaduw.

## Open punten voor latere checkpoints

- De gegenereerde projectvisualisatie wordt in Checkpoint 2 als canonieke projectcontext gebruikt voor samenhangende vervolgbeelden.
- Interactie, page turn, mobiel en Safari-specifieke QA horen bij Checkpoint 3 en zijn in deze fase bewust niet gebouwd.
- Definitieve assetcompressie volgt wanneer de volledige beeldset in Checkpoint 3 wordt geoptimaliseerd.
