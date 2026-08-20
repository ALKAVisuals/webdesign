const image = (src, alt, className = '') => `
  <img class="${className}" src="${src}" alt="${alt}" loading="lazy" decoding="async">
`;

const folio = (value, modifier = '') => `<p class="folio ${modifier}">${value}</p>`;

const shell = ({ number, title, archetype, pages }) => `
  <section class="spread-frame" id="spread-${number}" aria-labelledby="spread-${number}-title">
    <header class="spread-heading">
      <span class="spread-heading__rule" aria-hidden="true"></span>
      <p class="spread-heading__number">${number}</p>
      <h2 id="spread-${number}-title">${title}</h2>
      <p class="spread-heading__type">${archetype}</p>
    </header>
    <div class="book-scene">
      <div class="book-shadow" aria-hidden="true"></div>
      <div class="page-stack page-stack--left" aria-hidden="true"></div>
      <div class="page-stack page-stack--right" aria-hidden="true"></div>
      ${pages}
    </div>
  </section>
`;

const chapterLabel = (number, label) => `
  <div class="page-topline">
    <p class="chapter-label"><span>${number}</span>${label}</p>
  </div>
`;

const spreadOne = shell({
  number: '01',
  title: 'Projectintro',
  archetype: 'Editorial intro',
  pages: `
    <article class="book-spread book-spread--intro">
      <section class="book-page book-page--editorial" aria-labelledby="project-title">
        ${chapterLabel('01', 'Projectintro')}
        <div class="intro-copy">
          <h3 id="project-title">De Houtkavel</h3>
          <span class="title-rule" aria-hidden="true"></span>
          <p class="intro-lead">Een eigentijdse woning in balans met context, licht en materiaal.</p>
          <p class="intro-body">Technische helderheid vormt de basis voor een duurzame toekomst.</p>
        </div>
        <div class="page-footer"><p>Technisch Bouwadvies</p>${folio('004')}</div>
      </section>
      <figure class="book-page book-page--visual">
        ${image('assets/images/de-houtkavel-projectintro-v3.png', 'Eigentijdse houten woning in een Nederlands landschap')}
        ${folio('005', 'folio--visual')}
      </figure>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const variants = [
  {
    number: '01',
    name: 'Lamel',
    image: 'assets/drawings/variant-a.svg',
    copy: 'Een compacte basis met ritmische houten gevel en een ingetogen glazen tuinzone.',
    facts: [['Oriëntatie', 'Zuid'], ['Gevelopbouw', 'Hout'], ['Karakter', 'Rustig']]
  },
  {
    number: '02',
    name: 'Gelaagd',
    image: 'assets/drawings/variant-b.svg',
    copy: 'Terugliggende volumes geven diepte, beschutting en een heldere overgang naar de tuin.',
    facts: [['Oriëntatie', 'Zuidwest'], ['Gevelopbouw', 'Hout / mineraal'], ['Karakter', 'Gelaagd']]
  },
  {
    number: '03',
    name: 'Paviljoen',
    image: 'assets/drawings/variant-c.svg',
    copy: 'Een transparante leefzone verlengt de woning en maakt het landschap onderdeel van het interieur.',
    facts: [['Oriëntatie', 'West'], ['Gevelopbouw', 'Glas / hout'], ['Karakter', 'Open']]
  }
];

const variantsMarkup = variants.map((variant) => `
  <article class="variant-item">
    <p class="variant-index">${variant.number}</p>
    <h3>${variant.name}</h3>
    ${image(variant.image, `Schematische ontwerptekening van variant ${variant.name}`)}
    <p class="variant-copy">${variant.copy}</p>
    <dl class="variant-facts">
      ${variant.facts.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}
    </dl>
  </article>
`).join('');

const spreadTwo = shell({
  number: '02',
  title: 'Varianten',
  archetype: 'Comparison spread',
  pages: `
    <article class="book-spread book-spread--canvas comparison-spread">
      <div class="canvas-topline"><p><span>02</span> Variantenvergelijking</p><p>Drie richtingen · één context</p></div>
      <div class="variant-grid">${variantsMarkup}</div>
      <div class="canvas-footer"><p>Conceptfase · schematische presentatie</p><div>${folio('006')}${folio('007')}</div></div>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const spreadThree = shell({
  number: '03',
  title: 'Plattegrond',
  archetype: 'Technical spread',
  pages: `
    <article class="book-spread book-spread--plan">
      <section class="book-page plan-copy">
        ${chapterLabel('03', 'Plattegrond')}
        <div class="technical-copy">
          <p class="technical-kicker">Begane grond</p>
          <h3>Ruimte, routing<br>en zichtlijnen.</h3>
          <p>De plattegrond verbindt dagelijks gebruik met licht, uitzicht en een logische overgang naar de tuin.</p>
        </div>
        <dl class="plan-legend">
          <div><dt><i class="legend-line legend-line--dark"></i>Bestaand volume</dt><dd>hoofdmassa</dd></div>
          <div><dt><i class="legend-line legend-line--bronze"></i>Nieuwe tuinzone</dt><dd>transparante uitbreiding</dd></div>
          <div><dt><i class="legend-line legend-line--fine"></i>Inrichting</dt><dd>indicatief</dd></div>
        </dl>
        <div class="page-footer"><p>Schaalindicatie · 1:100</p>${folio('008')}</div>
      </section>
      <figure class="book-page technical-plate technical-plate--plan">
        <div class="technical-plate__label"><p>Nieuwe situatie</p><p>Begane grond</p></div>
        ${image('assets/drawings/ground-floor.svg', 'Technische plattegrond van de begane grond met glazen tuinzone')}
        ${folio('009')}
      </figure>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const spreadFour = shell({
  number: '04',
  title: 'Gevel & doorsnede',
  archetype: 'Technical spread',
  pages: `
    <article class="book-spread book-spread--technical-pair">
      <figure class="book-page technical-sheet">
        <div class="technical-sheet__head"><p><span>04</span> Gevel zuid</p><p>Nieuwe situatie</p></div>
        ${image('assets/drawings/south-elevation.svg', 'Technisch aanzicht van de zuidgevel')}
        <div class="technical-sheet__foot"><p>Hout · glas · aluminium</p>${folio('010')}</div>
      </figure>
      <figure class="book-page technical-sheet">
        <div class="technical-sheet__head"><p>Doorsnede A–A</p><p>Niveau & opbouw</p></div>
        ${image('assets/drawings/section-aa.svg', 'Technische doorsnede door de woning en tuinzone')}
        <div class="technical-sheet__foot"><p>Peil ±0 · verdiepingshoogte 3.150</p>${folio('011')}</div>
      </figure>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const spreadFive = shell({
  number: '05',
  title: 'Bouwdetail',
  archetype: 'Technical spread',
  pages: `
    <article class="book-spread book-spread--detail">
      <section class="book-page detail-copy">
        ${chapterLabel('05', 'Bouwdetail')}
        <div class="technical-copy">
          <p class="technical-kicker">Detail D-01</p>
          <h3>Dakrand<br>en gevel.</h3>
          <p>Een helder detail maakt materiaalovergangen, waterkering en aansluitingen bespreekbaar vóór de technische uitwerking.</p>
        </div>
        <dl class="detail-facts">
          <div><dt>Schaal</dt><dd>1:10 indicatief</dd></div>
          <div><dt>Focus</dt><dd>Dak · gevel · pui</dd></div>
          <div><dt>Status</dt><dd>Schematische presentatie</dd></div>
        </dl>
        <div class="page-footer"><p>Geen uitvoeringsberekening</p>${folio('012')}</div>
      </section>
      <figure class="book-page technical-plate technical-plate--detail">
        <div class="technical-plate__label"><p>D-01</p><p>Dak / gevel</p></div>
        ${image('assets/drawings/roof-wall-detail.svg', 'Schematisch bouwdetail van dakrand, houtskeletwand en glazen pui')}
        ${folio('013')}
      </figure>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const spreadSix = shell({
  number: '06',
  title: 'Interieur & materialen',
  archetype: 'Editorial intro',
  pages: `
    <article class="book-spread book-spread--materials">
      <section class="book-page material-copy">
        ${chapterLabel('06', 'Interieur & materialen')}
        <div class="material-copy__content">
          <h3>Warmte door<br>eenvoud.</h3>
          <p>Een beperkt materiaalpalet brengt rust. Hout, mineraal stucwerk en natuursteen versterken de verbinding met het landschap.</p>
          <div class="material-samples" aria-label="Materiaalpalet">
            <article><i class="sample sample--oak"></i><p>01</p><h4>Eiken</h4><span>mat · warm</span></article>
            <article><i class="sample sample--stone"></i><p>02</p><h4>Kalksteen</h4><span>licht · mineraal</span></article>
            <article><i class="sample sample--bronze"></i><p>03</p><h4>Brons</h4><span>donker · verfijnd</span></article>
          </div>
        </div>
        <div class="page-footer"><p>Materiaalstudie</p>${folio('014')}</div>
      </section>
      <figure class="book-page book-page--visual book-page--interior">
        ${image('assets/images/de-houtkavel-interior.png', 'Warm interieur van de houten woning met uitzicht over het landschap')}
        ${folio('015', 'folio--visual')}
      </figure>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const spreadSeven = shell({
  number: '07',
  title: 'Exterieur',
  archetype: 'Full visual',
  pages: `
    <article class="book-spread book-spread--canvas full-visual-spread">
      ${image('assets/images/de-houtkavel-exterior-dusk.png', 'Houten woning in het landschap tijdens de avondschemering')}
      <div class="full-visual-spread__label"><p>07</p><h3>Architectuur<br>in context.</h3></div>
      <div class="full-visual-spread__folios">${folio('016')}${folio('017')}</div>
      <div class="book-gutter book-gutter--on-dark" aria-hidden="true"></div>
    </article>
  `
});

const spreadEight = shell({
  number: '08',
  title: 'Resultaat',
  archetype: 'Editorial close',
  pages: `
    <article class="book-spread book-spread--result">
      <figure class="book-page result-visual">
        ${image('assets/images/de-houtkavel-projectintro-v3.png', 'De Houtkavel als uitgewerkt architectonisch ontwerp')}
        ${folio('018', 'folio--visual')}
      </figure>
      <section class="book-page result-copy">
        ${chapterLabel('08', 'Resultaat')}
        <div class="result-copy__content">
          <p class="technical-kicker">Van richting naar resultaat</p>
          <h3>Een helder<br>ontwerpverhaal.</h3>
          <span class="title-rule" aria-hidden="true"></span>
          <p>Varianten, tekeningen en visualisaties komen samen in één rustig document. Zo worden keuzes begrijpelijk en vervolgstappen concreet.</p>
        </div>
        <div class="result-signature"><p>Technisch Bouwadvies</p><span>Ontwerp · techniek · visualisatie</span></div>
        <div class="page-footer"><p>Einde ontwerpboek</p>${folio('019')}</div>
      </section>
      <div class="book-gutter" aria-hidden="true"></div>
    </article>
  `
});

const sequence = document.querySelector('#book-sequence');

if (sequence) {
  sequence.innerHTML = [
    spreadOne,
    spreadTwo,
    spreadThree,
    spreadFour,
    spreadFive,
    spreadSix,
    spreadSeven,
    spreadEight
  ].join('');
}
