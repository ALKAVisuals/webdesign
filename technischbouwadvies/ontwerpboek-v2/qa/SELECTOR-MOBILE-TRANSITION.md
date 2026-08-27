# Ontwerpboeken-selector — mobiele overgang

Datum: 28 augustus 2026
Status: gereed

## Opgelost probleem

De oude sluitflow bestond uit twee losse bewegingen: de mobiele boekpagina verdween op haar oorspronkelijke positie, terwijl de omslag daarna vanaf links terugkwam. Daardoor ontbrak een fysieke relatie tussen boekviewer en selector.

## Nieuwe overgang

- De openingsghost start exact op de actieve omslag en groeit naar de afmetingen van de mobiele boekpagina.
- De definitieve pagina verschijnt pas in de laatste fase, zodat omslag en pagina niet gelijktijdig om aandacht vragen.
- Bij sluiten krijgt de paginaghost de werkelijke eindpositie en afmeting van de actieve omslag.
- Een zachte papierlaag haalt tijdens het verkleinen de drukke pagina-inhoud terug.
- De actieve omslag kruist rustig in; zijboeken en projectinformatie keren pas daarna terug.
- Mobiele transities duren 880 ms; desktop behoudt de bestaande 720 ms timing.
- Bij `prefers-reduced-motion: reduce` worden ghosts en animaties overgeslagen en wisselt de toestand direct.

## Uitgevoerde QA

| Controle | Resultaat |
| --- | --- |
| Openen op 390 × 844 | Omslag en pagina gebruiken dezelfde geometrische overgang |
| Sluiten op 390 × 844 | Pagina keert terug naar de actieve omslagpositie |
| Openen en sluiten op 320 × 568 | Flow voltooit zonder overflow of achterblijvende lagen |
| Overgang afgerond | Geen `.book-transition-*`-ghosts achtergebleven |
| Interactiestatus | `is-opening` en `is-closing` worden correct verwijderd |
| URL-status | `#spread-01` bij openen en `#cover` bij sluiten |
| Browserconsole | Geen errors of warnings |
| Reduced motion | Codepad gecontroleerd: directe render zonder transition ghost |

## Volgende stap

S4: finale gecombineerde regressiecontrole van selector, desktopboek en mobiel boek, inclusief alle navigatiemethoden en breakpointovergangen.
