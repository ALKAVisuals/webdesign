# Projectintro — Final QA

Status: LAATSTE REVIEW OP WERKBRANCH — NIET MERGEN ZONDER EXPLICIETE GEBRUIKERSGOEDKEURING.

## Canonieke reviewbron
De reviewwrappers zijn verwijderd. De leidende browser-entrypoint is nu:

`technischbouwadvies/ontwerpboek/index.html`

Productierepo `ALKAVisuals/alkabouwadvies` en live technischbouwadvies.nl zijn niet gewijzigd.

## Desktop — code-level controle
- Spread 01 gebruikt gericht 36.5% tekst / 63.5% hero.
- Hero blijft full-bleed.
- Rechter folio `02` blijft zichtbaar.
- Linker extra folio blijft verborgen.
- Bestaande `.page-stack`, `.book-spine`, `.book-shadow`, `.page-left` en `.page-right` worden hergebruikt.
- Fysieke effecten zijn visueel opgebouwd zonder tweede boekcomponent.
- Projectintro hero gebruikt de gekozen bestaande productie-asset read-only.

## Mobile — code-level controle
- Eén pagina tegelijk; `.page-right` blijft verborgen op mobiel.
- Permanente leesbare pagina blijft 2D en zonder contentfilters/3D-transforms.
- Tekstpagina 01 en hero 02 blijven afzonderlijke pagina's in `book.js`.
- Header en landingsintro verdwijnen zodra het boek opent.
- Mobiele page stack blijft een vlak, scherp papierpakket.
- Hero blijft full-bleed en zonder mobiele CSS-filter/scale.
- Folio `02` blijft rechtsonder op de hero.
- `phase-m-mobile-behavior.js` voorkomt initiële autoplay en laat de programmatische focus van het volledige boek los op mobiel.

## Lifecycle / interactie
- Cover/open lifecycle blijft bestaand gedrag gebruiken.
- Previous/next blijven via `book.js` lopen.
- Swipe/keyboard/page-turn code is niet vervangen.
- Reduced-motion architectuur is niet verwijderd.
- Alleen de tijdelijke turn-overlay mag bestaande 3D-animatie gebruiken; permanente mobiele content blijft 2D.

## Cleanup-controle
Verwijderd vóór PR:
- tijdelijke physical-book A/B/C wrappers;
- tijdelijke D/E mobile wrappers;
- tijdelijke final-review wrapper;
- standalone Projectintro style-lock previews.

Bewust behouden zijn alleen de runtimewijzigingen, bijbehorende Projectintro-stylesheets en deze documentatie.

## Laatste handmatige go/no-go
Voor een PR/merge nog één keer controleren op de canonieke `index.html`:
1. mobiel pagina 01 zonder full-page bronzen focusring;
2. mobiel 01 → 02 bladert correct;
3. hero crop en `02` kloppen;
4. desktop spread blijft 36.5/63.5 en voelt fysiek;
5. geen clipping in korte viewport;
6. cover/open/end lifecycle werkt nog normaal.

Pas na expliciete gebruikersgoedkeuring mag de branch naar `webdesign/main` worden gemerged.
