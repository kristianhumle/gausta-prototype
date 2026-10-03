/* Årstider: visuel effekt (forsøg). Viser varianterne side om side som skalerede forhåndsvisninger af en lille side,
   og lader dig prøve en variant på hele websitet. A er den nuværende opsætning og er standard (backup). */
(function () {
  'use strict';
  var SEASONS = [['spring', 'Forår'], ['summer', 'Sommer'], ['autumn', 'Efterår'], ['winter', 'Vinter']];
  var VARS = [
    ['a', 'A · Nuværende', 'Accent, himmel og billeder skifter. Neutrale farver er faste.'],
    ['b', 'B · Tonet baggrund', 'A, plus baggrund, flader og kanter i årstidens tone.'],
    ['c', 'C · Fuldt tema', 'B, plus tonet header og bånd, farvede overskrifter, let farvefilter og årstidsmotiv i heroen.'],
    ['d', 'D · Kraftig', 'C, plus stærkere farvefilter på fotos, årstidsfarvet footer og accent-kant på kort.']
  ];
  var PHOTO = { winter: 'vinter/vinter-09', summer: 'sommer/sommer-02', autumn: 'efteraar/efteraar-03', spring: null };
  var LOGO = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:26px;height:26px;color:var(--accent)"><path d="M3 26l9-15 5 8 4-5 8 12z"/></svg>';

  function mock(s) {
    var ph = PHOTO[s], hero = ph ? ' has-photo" style="background-image:url(' + GL.photo(ph, 'm') + ')' : '';
    return '<div class="header"><div class="wrap" style="max-width:none"><span class="brand">' + LOGO + '<span>Gausta Lodge 52</span></span><div class="nav"><a>Lejligheden</a><a aria-current="page">Området</a><a>Gæsteområde</a></div><span class="btn btn-primary btn-sm" style="margin-left:auto">Book</span></div></div>' +
      '<section class="hero compact' + hero + '"><div class="wrap" style="max-width:none"><p class="eyebrow">Gausta · Telemark</p><h1>Din base ved foden af fjeldet.</h1><p class="lead">En fjeldlejlighed til ski, vandring og langsomme dage på Gausta.</p><div class="row-flex"><span class="btn btn-primary">Se ledige datoer</span><span class="btn btn-ghost">Se lejligheden</span></div></div><div class="hero-art">' + GL.heroArt() + '</div></section>' +
      '<section class="section"><div class="wrap" style="max-width:none"><p class="eyebrow">Fire årstider</p><h2>Gausta skifter.</h2><div class="grid grid-3">' +
        '<div class="card"><div class="ico-box">' + GL.icon('mountain') + '</div><h3>Tæt på</h3><p class="muted">Ski-in / ski-out, mad og aktiviteter.</p><span class="pill-tag accent">50 til 100 m</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('map') + '</div><h3>Oplevelser</h3><p class="muted">Rjukan, Vemork og Gaustatoppen.</p><span class="pill-tag">Køretid</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('cal') + '</div><h3>Nu og events</h3><p class="muted">Forhold og kalender.</p><span class="pill-tag good">Åben</span></div></div></div></section>' +
      '<section class="section band-soft"><div class="wrap" style="max-width:none"><p class="eyebrow">Gausta nu</p><h2>Forholdene lige nu.</h2><div class="live"><div><small>Temperatur</small><b class="num">n/a</b></div><div><small>Snedybde</small><b class="num">n/a</b></div><div><small>Åbne lifte</small><b class="num">n/a</b></div><div><small>Vejforhold</small><b class="num">n/a</b></div></div></div></section>' +
      '<footer class="footer" style="padding-top:36px"><div class="wrap" style="max-width:none"><div class="cols"><div><span class="brand">' + LOGO + '<span>Gausta Lodge 52</span></span><p class="muted" style="margin-top:10px;font-size:.9rem">Fjeldlejlighed på Gausta.</p></div><div><h4>Lejligheden</h4><a>Om lejligheden</a><a>Booking</a></div><div><h4>Området</h4><a>Tæt på</a><a>Oplevelser</a></div><div><h4>Prototype</h4><a>Designsystem</a></div></div><div class="legal"><span>© 2026 Gausta Lodge 52</span><span>Prototype</span></div></div></footer>';
  }

  function render(el) {
    var cur = document.documentElement.getAttribute('data-season') || 'autumn';
    var st = { variant: 'all', season: cur };
    el.innerHTML =
      '<div class="lab-row"><b>Variant</b><div class="plan-pills lab-vars" style="margin:0"><button type="button" class="filter" data-v="all">Alle varianter</button>' + VARS.map(function (v) { return '<button type="button" class="filter" data-v="' + v[0] + '">' + v[1].split(' · ')[0] + '</button>'; }).join('') + '</div></div>' +
      '<div class="lab-row"><b>Årstid</b><div class="plan-pills lab-seas" style="margin:0"><button type="button" class="filter" data-s="all">Alle årstider</button>' + SEASONS.map(function (s) { return '<button type="button" class="filter" data-s="' + s[0] + '">' + s[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="vp-grid lab-grid" style="margin-top:18px"></div>' +
      '<div class="notice info" style="margin-top:22px"><b>Prøv på hele websitet.</b> Vælg en variant, og gå rundt på de andre sider: valget følger med, så længe fanen er åben. Et lille mærke nederst til venstre viser, hvilken variant der er aktiv, og har et link tilbage til A. Variant kan også sættes i adressen, fx <code class="token">?tema=c</code>, så den kan deles til gennemsyn.<div class="lab-row" style="margin-bottom:0"><b>Hele siden</b><div class="plan-pills lab-site" style="margin:0">' + VARS.map(function (v) { return '<button type="button" class="filter" data-site="' + v[0] + '">' + v[1] + '</button>'; }).join('') + '</div></div></div>';
    var grid = el.querySelector('.lab-grid');

    function fit() {
      [].forEach.call(grid.querySelectorAll('.vp-frame'), function (fr) {
        var inner = fr.firstChild, s = fr.clientWidth / 900; inner.style.transform = 'scale(' + s + ')'; fr.style.height = Math.round(inner.offsetHeight * s) + 'px';
      });
    }
    function cell(v, s) {
      var meta = VARS.filter(function (x) { return x[0] === v; })[0], sn = SEASONS.filter(function (x) { return x[0] === s; })[0][1];
      return '<figure class="vp"><figcaption><b>' + meta[1] + '</b><span class="muted">' + sn + '</span></figcaption>' +
        '<div class="vp-frame" data-variant="' + v + '" data-season="' + s + '"><div class="vp-inner">' + mock(s) + '</div></div>' +
        '<p class="lab-note" style="margin:8px 2px 0">' + meta[2] + '</p></figure>';
    }
    function draw() {
      var v = st.variant, s = st.season, cells = [], one = false;
      if (v === 'all') { VARS.forEach(function (x) { cells.push(cell(x[0], s === 'all' ? cur : s)); }); }
      else if (s === 'all') { SEASONS.forEach(function (x) { cells.push(cell(v, x[0])); }); }
      else { cells.push(cell(v, s)); one = true; }
      grid.className = 'vp-grid lab-grid' + (one ? ' one' : ''); grid.innerHTML = cells.join('');
      [].forEach.call(el.querySelectorAll('.lab-vars .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.v === st.variant)); });
      [].forEach.call(el.querySelectorAll('.lab-seas .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.s === st.season)); });
      requestAnimationFrame(fit); setTimeout(fit, 400);
    }
    function site() { var v = document.documentElement.getAttribute('data-variant') || 'a'; [].forEach.call(el.querySelectorAll('.lab-site .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.site === v)); }); }
    el.querySelector('.lab-vars').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) { st.variant = b.dataset.v; draw(); } });
    el.querySelector('.lab-seas').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) { st.season = b.dataset.s; draw(); } });
    el.querySelector('.lab-site').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) { GL.setVariant(b.dataset.site); site(); } });
    new MutationObserver(function () { cur = document.documentElement.getAttribute('data-season') || cur; if (st.season !== 'all') { st.season = cur; draw(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
    document.addEventListener('gl:variant', site); window.addEventListener('resize', fit);
    draw(); site();
  }
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-season-lab]'), render); });
})();
