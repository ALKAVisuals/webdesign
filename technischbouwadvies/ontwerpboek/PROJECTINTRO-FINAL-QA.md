# Projectintro — Final QA (F)

Status: FINAL REVIEW OP WERKBRANCH — NIET MERGEN ZONDER EXPLICIETE GEBRUIKERSGOEDKEURING.

## Scope
Deze QA controleert uitsluitend de Projectintro-uitwerking op `agent/projectintro-final-style-lock` en de echte interactieve boekengine in `technischbouwadvies/ontwerpboek/`.

## Vastgezette reviewbron
- Visual/runtime commit: `6cce3344190828637bd5a5395f83c00bc580372b`
- Final review wrapper: `projectintro-final-review-f.html`
- Productierepo `ALKAVisuals/alkabouwadvies`: niet gewijzigd
- `webdesign/main`: niet gewijzigd

## Desktop — code-level controle
- Spread 01 gebruikt gericht 36.5% tekst / 63.5% hero.
- Hero blijft full-bleed.
- Rechter folio `02` blijft zichtbaar.
- Linker extra folio blijft verborgen.
- Bestaande `.page-stack`, `.book-spine`, `.book-shadow`, `.page-left` en `.page-right` worden hergebruikt.
- Fysieke effecten zijn visueel opgebouwd zonder een tweede boekcomponent.
- Projectintro hero gebruikt de gekozen bestaande productie-asset read-only.

## Mobile — code-level controle
- Eén pagina tegelijk; `.page-right` blijft verborgen op mobiel.
- Permanente leesbare pagina blijft 2D en zonder contentfilters/3D-transforms.
- Tekstpagina 01 en hero 02 blijven afzonderlijke pagina's in `book.js`.
- Header en landingsintro verdwijnen zodra het boek opent.
- De mobiele page stack blijft een vlak, scherp papierpakket.
- Hero blijft full-bleed en zonder mobiele CSS-filter/scale.
- Folio `02` blijft rechtsonder op de hero.
- `phase-m-mobile-behavior.js` zet initiële autoplay uit na openen en laat de programmatische focus van het volledige boek los om de iOS focusring te voorkomen.

## Lifecycle / interactie — code-level controle
- Cover/open lifecycle blijft bestaand gedrag gebruiken.
- Previous/next blijven via `book.js` lopen.
- Swipe/keyboard/page-turn code is niet vervangen.
- Reduced-motion architectuur is niet verwijderd.
- Mobiele permanente pagina gebruikt geen 3D; tijdelijke page-turn mag bestaande animatie blijven gebruiken.

## Regressierisico's gecontroleerd
- Geen globale nieuwe CSS-reset toegevoegd.
- Desktopregels van Projectintro zitten achter `@media (min-width: 761px)` en spread-01 selectors.
- Mobiele E1/E2/E3-regels zitten achter `@media (max-width: 760px)`.
- Productierepo en live website zijn niet aangeraakt.
- Main blijft achter de werkbranch en is niet gemerged.

## Nog handmatig te beoordelen
De laatste visuele go/no-go blijft een echte browser/device review:
1. mobiel pagina 01 zonder bronzen full-page focusring;
2. mobiel 01 → 02 bladert correct;
3. hero crop en `02` kloppen;
4. desktop spread voelt fysiek en blijft in de 36.5/63.5-verhouding;
5. geen nieuwe clipping in korte viewport.

Pas na expliciete gebruikersgoedkeuring mag een PR/merge naar `webdesign/main` worden voorbereid.
