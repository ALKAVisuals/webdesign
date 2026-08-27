# Ontwerpboek V2 — releasemanifest

Datum: 28 augustus 2026
Branch: `codex/ontwerpboek-v2`
Basiscommit: `b27bb0c` (`Harden ontwerpboek reader for Safari and mobile`)
Status: gereed voor R2 — nog niet gecommit of gepusht

## Repositorygrens

Alle releasewijzigingen staan uitsluitend in:

`technischbouwadvies/ontwerpboek-v2/`

Niet aangepast:

- `technischbouwadvies/ontwerpboek/`;
- `ALKAVisuals/alkabouwadvies`;
- technischbouwadvies.nl;
- hosting- of deploymentconfiguratie;
- bestaande renders, technische tekeningen en andere beeldassets;
- `scripts/content.js` met de bestaande acht spreads.

## Voorgestelde commit 1 — werkende ervaring

Commitbericht:

`feat(ontwerpboek): add project selector and refine book experience`

Bestanden:

- `index.html`
- `scripts/book.js`
- `scripts/projects.js`
- `scripts/selector.js`
- `styles/base.css`
- `styles/book.css`
- `styles/motion.css`
- `styles/responsive.css`
- `styles/selector.css`
- `styles/spreads.css`

Inhoud:

- data-driven projectboekselector;
- desktop- en mobiele carousel;
- tijdelijke projectstatus voor boek 2 en 3;
- lazy-loading van de bestaande boekinhoud;
- gekoppelde open- en sluitovergangen;
- vaste tweedimensionale page-turn zonder wisselende boekafmetingen;
- mobiele, Safari- en reduced-motionversteviging.

## Voorgestelde commit 2 — documentatie en QA

Commitbericht:

`docs(ontwerpboek): record selector design and final QA`

Bestanden:

- `DESIGN-SYSTEM.md`
- `qa/CHECKPOINT-3.md`
- `qa/FINAL-REGRESSION.md`
- `qa/RELEASE-MANIFEST.md`
- `qa/SAFARI-CHECKLIST.md`
- `qa/SELECTOR-DESKTOP.md`
- `qa/SELECTOR-MOBILE.md`
- `qa/SELECTOR-MOBILE-TRANSITION.md`

## Gevalideerd

- JavaScript-syntax van `book.js`, `projects.js` en `selector.js`.
- `git diff --check` zonder inhoudelijke fout.
- Desktop: 1440 × 900 en 1920 × 1080.
- Mobiel: 390 × 844 en 320 × 568.
- Alle acht spreads en zestien afbeeldingen.
- Knoppen, toetsenbord, swipe, deeplinks en breakpointwissels.
- Geen gebroken assets, dubbele ID's, overflow, consolemeldingen of achterblijvende animatielagen.

De gemelde LF/CRLF-waarschuwingen komen van de lokale Git-regel voor Windows-regelovergangen en blokkeren de release niet.

## R2-volgorde

1. Alleen de tien codebestanden stagen.
2. Gestagede diff en syntax opnieuw controleren.
3. Commit 1 maken.
4. Alleen de acht documentatie- en QA-bestanden stagen.
5. Gestagede diff opnieuw controleren.
6. Commit 2 maken.
7. Bevestigen dat de worktree schoon is.

Pushen, mergen en deployen vallen niet onder R2 en vereisen daarna ieder een aparte beslissing.
