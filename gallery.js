/* Generelt galleri (pladsholder), prototype.
   Viser billeder, der følger årstidsvælgeren. Kan bruges overalt (ikke kun om lejligheden):
   <div class="gallery" data-gallery-set="atmosphere" data-gallery-caps></div>
   Billederne i "atmosphere" er generelle stemningsbilleder fra Gausta og omegn (ingen lejlighedsbilleder).
   Mønstre, så gitteret altid fyldes: 4 billeder (stor, lille, lille, bred) eller 7 (de 4 + bred, lille, lille).
   Forår har ingen billeder endnu og viser pladsholdere. Alle billeder er prototypebilleder, og billedtekster
   er gæt ud fra billedet og skal bekræftes. Mangler: endelige billeder, rettigheder, alt-tekster. */
(function () {
  'use strict';
  var LABEL = {
    winter: ['Vinter på Gausta.', 'Winter at Gausta.'],
    spring: ['Forår på Gausta.', 'Spring at Gausta.'],
    summer: ['Sommer på Gausta.', 'Summer at Gausta.'],
    autumn: ['Efterår på Gausta.', 'Autumn at Gausta.']
  };
  var MISSING = { winter: 'Vinter', spring: 'Forår', summer: 'Sommer', autumn: 'Efterår' };

  var SETS = {
    atmosphere: {
      winter: [
        { k: 'vinter/vinter-03', cls: 'big', cap: 'Langrend mod Gaustatoppen', alt: 'Skiløber på præpareret spor med fjeld i baggrunden' },
        { k: 'vinter/vinter-08', cap: 'Fjeldet i vinterlys', alt: 'Sneklædt fjeld under blå himmel' },
        { k: 'vinter/vinter-12', cap: 'Solen over fjeldet', alt: 'Sol over snedækket fjeldtop' },
        { k: 'vinter/vinter-04', cls: 'wide', cap: 'Hytter i sneen', alt: 'Mørke hytter i sne med fjeld bagved' },
        { k: 'vinter/vinter-05', cls: 'wide', cap: 'Præpareret løjpe i sne', alt: 'Langrendsløjpe gennem sneklædt skov' },
        { k: 'vinter/vinter-09', cap: 'Udsigt over fjeldplateauet', alt: 'Fjeldplateau med sne' },
        { k: 'vinter/vinter-01', cap: 'Spor i sneen', alt: 'Præparerede spor i solen' }
      ],
      spring: [],
      summer: [
        { k: 'sommer/sommer-02', cls: 'big', cap: 'Fjeldsø i stille vejr', alt: 'Fjeld spejlet i en lille sø' },
        { k: 'sommer/sommer-03', cap: 'På vandretur', alt: 'To vandrere på sti over fjeldet' },
        { k: 'sommer/sommer-04', cap: 'Udsigt fra klippen', alt: 'To personer sidder på en klippe og ser ud over dalen' },
        { k: 'sommer/sommer-05', cls: 'wide', cap: 'Grusvej mod fjeldet', alt: 'Grusvej i fjeldlandskab med bjerg i baggrunden' }
      ],
      autumn: [
        { k: 'efteraar/efteraar-03', cls: 'big', cap: 'Sø og fjeld om efteråret', alt: 'Stille sø med fjeld bagved' },
        { k: 'efteraar/efteraar-02', cls: 'tall', cap: 'Efterårsfarver', alt: 'Birk med gule blade ved en blå sø' },
        { k: 'efteraar/efteraar-04', cap: 'Fjeldet i efterårslys', alt: 'Fjeldlandskab med lav og dal' },
        { k: 'efteraar/efteraar-01', cap: 'Gaustatoppen set fra stien', alt: 'Gaustatoppen set over en sø' }
      ]
    }
  };
  var PLACEHOLDER_PATTERN = [{ cls: 'big' }, {}, {}, { cls: 'wide' }];

  function lang() { return document.documentElement.getAttribute('lang') === 'en' ? 1 : 0; }

  function render(el) {
    var set = SETS[el.getAttribute('data-gallery-set') || 'atmosphere'];
    var season = document.documentElement.getAttribute('data-season') || 'autumn';
    var items = set[season] || [];
    if (items.length) {
      GL.buildGallery(el, items, { caps: el.hasAttribute('data-gallery-caps') });
    } else {
      el.innerHTML = PLACEHOLDER_PATTERN.map(function (p) {
        return '<div class="ph-img ' + (p.cls || '') + '">' + MISSING[season] + ': billede mangler</div>';
      }).join('');
    }
    el.setAttribute('data-gallery-season', season);
    [].forEach.call(document.querySelectorAll('[data-gal-label]'), function (n) {
      var l = LABEL[season];
      n.setAttribute('data-da', l[0]); n.setAttribute('data-en', l[1]); n.innerHTML = l[lang()];
    });
  }

  function renderAll() { [].forEach.call(document.querySelectorAll('[data-gallery-set]'), render); }

  window.GL = window.GL || {};
  GL.Gallery = { SETS: SETS, render: render };
  document.addEventListener('gl:ready', renderAll);
  document.addEventListener('gl:season', renderAll);
})();
