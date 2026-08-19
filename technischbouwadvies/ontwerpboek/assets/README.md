# Ontwerpboek assets

Deze map is bedoeld voor echte projectbeelden van Technisch Bouwadvies.

## Aanbevolen structuur

```text
assets/
└── project/
    ├── 01-referentie-briefing.webp
    ├── 02-tutorial-basismodel.webp
    ├── 03-eerste-ontwerpschets.webp
    ├── 04-varianten.webp
    ├── 05-gekozen-ontwerp.webp
    ├── 06-plattegrond.webp
    ├── 07-gevelaanzichten.webp
    ├── 08-doorsnede.webp
    ├── 09-bouwdetail.webp
    ├── 10-materiaalkeuzes.webp
    ├── 11-exterieurmodel.webp
    ├── 12-exterieur-render.webp
    ├── 13-interieur-render.webp
    └── 14-eindresultaat.webp
```

## Een demo vervangen door echt werk

1. Exporteer het beeld bij voorkeur als WebP.
2. Plaats het bestand in `assets/project/` met de naam die bij de stap hoort.
3. Open `book-data.js`.
4. Zet bij die pagina `asset: null` om naar bijvoorbeeld:

```js
asset: {
  src: 'assets/project/06-plattegrond.webp',
  alt: 'Technische plattegrond van het praktijkproject',
  fit: 'contain'
}
```

Gebruik `fit: 'contain'` voor tekeningen en `fit: 'cover'` voor renders/foto's.

De animatie en navigatie in `book.js` hoeven hiervoor niet te worden aangepast.
