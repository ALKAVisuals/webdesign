# Ontwerpboek — Integratieplan technischbouwadvies.nl

**Status:** integratievoorbereiding. Nog geen productiecode wijzigen.

**Doel:** de goedgekeurde standalone boektool veilig omzetten naar een geïsoleerde websitecomponent zonder de bestaande Technisch Bouwadvies-site of styling te verstoren.

---

## 1. Voorwaarde vóór productie-integratie

Voordat code naar de echte website gaat, moet eerst het juiste productie-repository en de huidige frontendstack worden bevestigd.

Niet aannemen dat `ALKAVisuals/webdesign` de productie-repo is.

Bekend:
- `ALKAVisuals/webdesign` = veilige prototype/testomgeving
- `technischbouwadvies.nl` = productie
- automatische Netlify-deploy was eerder bewust uitgeschakeld / beperkt

Een nieuwe chat mag daarom niet zomaar naar een vermeende productie-repo schrijven.

---

## 2. Vaste visuele bron

Niet opnieuw ontwerpen.

Leidend:
- A+B art direction
- goedgekeurde masterspread
- Technical Line Art cover
- 8 goedgekeurde spreadtypes
- premium motion
- mobile single-page gedrag

Bronbestanden in deze prototype-map blijven de referentie.

---

## 3. Productiecomponent

Werknaam:

`DesignProcessBook`

De productievariant krijgt één eigen wrapper:

```html
<section class="tba-designbook" data-designbook>
  ...
</section>
```

Alle styling en scripts moeten binnen deze root blijven.

---

## 4. CSS-isolatie — verplicht

De standalone prototype-CSS bevat nu bewust globale regels. Die mogen niet rechtstreeks de productie-site in.

Voor productie:

### Verwijderen / herschrijven
- `body { ... }`
- `html { ... }`
- generieke `button { ... }`
- generieke `a { ... }`
- generieke `* { ... }` resets
- globale `:root` variabelen

### Namespacen

Voorbeeld:

```css
.tba-designbook {
  --tba-book-paper: #f7f3eb;
  --tba-book-ink: #1f211f;
  --tba-book-bronze: #a37332;
}

.tba-designbook .book { ... }
.tba-designbook .book-page { ... }
```

Doel:
- geen invloed op site-header
- geen invloed op formulieren
- geen invloed op CTA-knoppen elders
- geen invloed op bestaande headings/links

---

## 5. ID- en JS-isolatie

Huidige prototype-ID's zijn globaal, bijvoorbeeld:
- `book`
- `leftPage`
- `rightPage`
- `nextPage`
- `prevPage`

Voor productie twee veilige opties:

### Voorkeur
Geen globale `document.getElementById`-afhankelijkheid meer.

Gebruik:

```js
const root = document.querySelector('[data-designbook]');
const book = root.querySelector('[data-book]');
```

Alle selectors blijven binnen `root`.

### Alternatief
Alle ID's prefixen met `tba-designbook-`.

Root-scoped selectors hebben de voorkeur.

---

## 6. Componentstructuur

Aanbevolen productie-opbouw:

```text
DesignProcessBook/
├── DesignProcessBook.*
├── designbook.css
├── designbook-motion.css
├── designbook-mobile.css
├── designbook-accessibility.css
├── designbook-data.*
├── designbook-assets.*
└── assets/
```

Exacte extensies hangen af van de productiefrontendstack.

Niet eerder kiezen tussen React/vanilla/etc. voordat de productie-repo is geïnspecteerd.

---

## 7. Homepageplaatsing

Eerder gekozen voorkeurspositie:

**na diensten/toepassingen en vóór of rond de bestaande proces/werkwijze-sectie.**

Doel:
- bezoeker begrijpt eerst wat Technisch Bouwadvies aanbiedt
- daarna ziet hij visueel hoe een ontwerp wordt uitgewerkt
- daarna kan bestaande werkwijze/CTA logisch volgen

Voorlopige sectiekop:

**Bekijk hoe een ontwerp tot leven komt**

Korte intro, geen lange uitleg.

---

## 8. Productie-shell

De standalone `presentation-header` hoort NIET mee naar de homepage.

De productiecomponent bevat alleen:

1. kleine sectie-intro
2. boekobject
3. minimale controls
4. eventueel korte CTA onder het boek

De bestaande website-header/navigation blijft volledig leidend.

---

## 9. Fontstrategie

Prototype gebruikt:
- Libre Baskerville
- DM Sans

Voor productie eerst controleren welke fonts technischbouwadvies.nl al gebruikt.

Voorkeursvolgorde:

1. bestaande sitefonts hergebruiken als de uitstraling voldoende overeenkomt
2. alleen ontbrekende display-serif toevoegen
3. maximaal noodzakelijke weights laden
4. `font-display: swap`
5. geen extra fontfamilies laden zonder zichtbare meerwaarde

Doel: premium uitstraling zonder onnodige fontrequests.

---

## 10. Assetstructuur productie

Aanbevolen:

```text
/assets/designbook/
├── projectintro/
├── variants/
├── technical/
├── details/
├── materials/
└── renders/
```

Bestandsoptimalisatie volgt `ASSET-GUIDELINES.md`.

Belangrijk:
- geen bron-4K/8K rechtstreeks publiceren
- technische lijntekeningen `contain`
- renders `cover` waar goedgekeurd
- duidelijke alt-tekst

---

## 11. Loading / performance op homepage

De standalone tool mag niet automatisch alle assets laden zodra de homepage opent.

Productieaanpak:

### Initial load
- alleen sectie-shell
- cover
- eerste spread indien nodig

### Wanneer boek bijna in beeld komt
Gebruik `IntersectionObserver`.

Dan pas:
- module initialiseren
- eerste relevante assets laden

### Tijdens gebruik
- huidige spread laden
- volgende spread idle-preloaden
- geen preload bij `saveData`

### Buiten viewport
- autoplay pauzeren

Dit is belangrijk omdat het boek op een bestaande homepage wordt toegevoegd en niet de Core Web Vitals van de rest van de pagina mag domineren.

---

## 12. Autoplay in productie

Standalone autoplaylogica blijft conceptueel behouden, maar productie krijgt extra viewportregels.

Autoplay mag alleen lopen wanneer:
- boek geopend is
- sectie voldoende zichtbaar is
- tab zichtbaar is
- gebruiker autoplay niet heeft gepauzeerd

Bij `prefers-reduced-motion`:
- autoplay standaard uit
- page-turn sterk gereduceerd / instant
- gebruiker mag bewust autoplay inschakelen

---

## 13. No-JS / foutfallback

Als JavaScript niet laadt, mag de sectie niet leeg of kapot zijn.

Fallback:
- statische cover of eerste goedgekeurde spread
- korte CTA naar contact/offerte

Het boek is een presentatieverbetering, geen kritieke blokkade voor de homepage.

---

## 14. Controls productie

Behouden:
- vorige
- volgende
- kleine spreadteller
- minimale autoplayknop
- swipe
- keyboard arrows

Niet toevoegen:
- grote toolbar
- zichtbare statusbadges
- uitgebreide instructietekst
- ontwikkelaarsinformatie

---

## 15. Analytics — optioneel

Alleen indien bestaande analytics dit ondersteunt en privacyinstellingen kloppen.

Mogelijke events:
- `designbook_open`
- `designbook_spread_view`
- `designbook_pause`
- `designbook_complete`
- `designbook_cta_click`

Geen analytics toevoegen als daarvoor een nieuw onnodig trackingpakket nodig is.

---

## 16. Integratietesten

Minimaal testen:

### Desktop
- 1440px
- 1280px
- 1024px

### Mobile
- circa 390px iPhoneformaat
- circa 360px Androidformaat
- korte schermhoogte

### Functioneel
- openen
- autoplay
- pauzeren
- previous/next
- swipe
- keyboard
- Escape pause
- reduced motion
- einde/CTA

### Website-integratie
- bestaande header onveranderd
- bestaande buttons onveranderd
- geen horizontale overflow
- geen CLS door boeksectie
- geen scrolljank door page-turn

---

## 17. Productiebranch — later

Wanneer de productie-repo is bevestigd:

1. start vanaf actuele productie-`main`
2. maak aparte branch, bijvoorbeeld:
   `agent/design-process-book-integration`
3. wijzig alleen noodzakelijke component/assets/styles
4. geen automatische deployment activeren zonder bestaande deploystrategie te begrijpen
5. lokaal/staging testen
6. diff controleren
7. pas daarna PR

---

## 18. Rollback

De component moet verwijderbaar blijven zonder restschade.

Daarom:
- één geïsoleerde sectie
- eigen CSS namespace
- eigen JS-module
- eigen assetsmap
- geen globale site-reset
- geen databaseafhankelijkheid

Rollback = sectie/import verwijderen + eigen assets verwijderen.

---

## 19. Go/no-go vóór echte integratie

**GO wanneer:**
- productie-repo bevestigd
- frontendstack geïnspecteerd
- juiste homepagebestand/component bekend
- bestaande fonts bekend
- deploystrategie bekend
- standalone versie functioneel genoeg bevonden

**NO-GO wanneer:**
- repo nog onduidelijk
- wijziging globale CSS zou kunnen breken
- deployment automatisch onverwacht live zou gaan
- echte projectassets/publicatierechten nog niet klaar zijn

---

## 20. Exacte volgende technische actie

De volgende chat die daadwerkelijk wil integreren moet NIET meteen code kopiëren.

Eerst:

1. juiste productie-repo identificeren
2. repo/stack/homepage inspecteren
3. dit integratieplan naast de productiearchitectuur leggen
4. concreet migratiebestandenschema maken
5. pas daarna code wijzigen
