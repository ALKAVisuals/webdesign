# Ontwerpboek — Asset Guidelines

**Doel:** vaste richtlijnen voor echte projectassets in het premium ontwerpboek.

Deze richtlijnen veranderen de goedgekeurde A+B art direction niet. Ze zijn bedoeld om beelden scherp, snel en consistent in de boektool te krijgen.

---

## 1. Bronbestanden

Bewaar altijd een origineel bronbestand buiten de geoptimaliseerde webmap.

Voorbeelden:
- originele CAD/PDF-export
- originele PNG/TIFF-render
- originele Photoshop/D5-export

De bestanden in `assets/project/` zijn alleen de webversies.

---

## 2. Bestandsnamen

Gebruik vaste, beschrijvende namen per spread.

Voorbeelden:

- `01-projectintro.avif`
- `02-variant-a.webp`
- `02-variant-b.webp`
- `02-variant-c.webp`
- `03-plattegrond.webp`
- `04-gevel.webp`
- `04-doorsnede.webp`
- `05-bouwdetail.webp`
- `06-interieur.avif`
- `07-exterieur.avif`
- `08-resultaat.avif`

Geen spaties, versienummers of tijdelijke namen zoals `final-final2`.

---

## 3. Renders / fotografie

Voor grote beeldpagina's:

- voorkeur: AVIF waar de exportworkflow dat betrouwbaar ondersteunt
- WebP als praktische fallback / alternatief
- behoud voldoende resolutie voor desktop retina-weergave
- exporteer geen onnodige 4K/8K-bronbestanden direct naar de website
- crop pas aan op de uiteindelijke spreadcompositie
- houd het belangrijkste architecturale onderwerp uit de extreme randen zodat mobile crop veilig blijft

Richtwaarde voor grote boekbeelden:

- lange zijde circa 1800–2200 px voor de webasset
- hogere resolutie alleen als lijn/detailleesbaarheid dit aantoonbaar nodig heeft

---

## 4. Technische tekeningen

Plattegronden, gevels, doorsneden en details moeten vooral leesbaar blijven.

Voorkeur:

1. SVG als de export schoon en veilig is
2. anders WebP/PNG met hoge lijnscherpte

Regels:

- witte/off-white achtergrond behouden
- geen zware JPEG-compressie
- maatvoering moet op desktop leesbaar blijven
- lijnwerk krijgt `contain`-presentatie, geen agressieve crop
- tekeningen ruim uitsnijden, maar zonder enorme lege CAD-randen

Richtwaarde rasterexport:

- lange zijde circa 1800–2400 px
- detailtekeningen mogen groter wanneer kleine annotaties dat vereisen

---

## 5. Varianten

Alle variantbeelden binnen één vergelijking moeten:

- dezelfde beeldverhouding hebben
- dezelfde camera / schaal gebruiken waar mogelijk
- dezelfde achtergrondlogica hebben
- ongeveer dezelfde visuele helderheid/contrast hebben

Zo blijft de vergelijking inhoudelijk eerlijk en rustig.

---

## 6. Mobile crop

Full-page renders worden op mobiel beeldvullend getoond.

Daarom:

- hoofdonderwerp rond het middelste 60–70% van het beeld houden
- belangrijke gevelranden/tekst niet tegen buitenrand plaatsen
- geen informatie uitsluitend in de uiterste linker- of rechterhoek zetten

Technische tekeningen worden niet gecropt; die blijven `contain`.

---

## 7. Loading-strategie

De boektool gebruikt:

- lazy loading voor assets zodra een pagina wordt gerenderd
- async image decoding
- idle preload van de eerstvolgende pagina/spread
- geen next-spread preload wanneer de browser `saveData` aangeeft

Hierdoor hoeft het volledige boek niet vooraf te worden geladen.

---

## 8. Alt-tekst

Iedere echte asset krijgt een functionele alt-tekst.

Goed:

`Plattegrond begane grond van de nieuwe situatie met uitbouw aan de tuinzijde.`

Minder goed:

`Afbeelding van plattegrond.`

Bij puur decoratieve beelden kan de alt-tekst leeg zijn, maar technische tekeningen en projectvisualisaties zijn doorgaans inhoudelijk relevant.

---

## 9. Voor publicatie controleren

Per asset:

- juiste bestandsnaam
- correcte oriëntatie
- geen ontwerpnotities die niet publiek mogen zijn
- geen persoonsgegevens
- geen onnodig groot bestand
- scherpe lijnvoering / render
- correcte alt-tekst
- desktop crop gecontroleerd
- mobile crop gecontroleerd
- asset-manifest verwijst naar het juiste bestand

---

## 10. Belangrijk

Kwaliteit gaat voor extreem kleine bestanden, maar bronbestanden van meerdere megabytes mogen niet zonder optimalisatie in de publieke boektool worden geplaatst.

De definitieve compressie wordt per echt project visueel gecontroleerd; deze richtlijnen zijn het vaste startpunt, geen reden om de art direction opnieuw te ontwerpen.
