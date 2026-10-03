/* Området: oversigtselement (første udkast). Fælles kort med lag, tre indgangskort og
   "Gausta nu" som lille widget. Kortet er et skematisk SVG, ikke målfast.
   ALLE punkter, placeringer, afstande og sæsoner er pladsholdere (skal verificeres).
   Kun punkternes NAVNE kommer fra kravspecifikationen (A3, A4). */
(function () {
  'use strict';

  var LAYERS = [
    { id: 'ski',      name: 'Ski',                   area: 'taet',  icon: 'snow' },
    { id: 'mad',      name: 'Mad og indkøb',         area: 'taet',  icon: 'home' },
    { id: 'udstyr',   name: 'Udstyr og skole',       area: 'taet',  icon: 'wrench' },
    { id: 'oplevelse',name: 'Oplevelser',            area: 'oplev', icon: 'mountain' },
    { id: 'rute',     name: 'Ruter',                 area: 'oplev', icon: 'map' }
  ];
  var AREAS = { taet: 'Tæt på', oplev: 'Oplevelser' };
  var SEASON_NAME = { spring: 'Forår', summer: 'Sommer', autumn: 'Efterår', winter: 'Vinter' };
  var SEASON_ICON = { spring: 'flower', summer: 'sun', autumn: 'leaf', winter: 'snow' };
  var ALL = ['spring', 'summer', 'autumn', 'winter'];

  // x,y i kortets koordinater (600 x 420). seasons = gæt, skal verificeres.
  var POIS = [
    { id: 'slalom',   name: 'Slalompister',     layer: 'ski',       x: 205, y: 120, seasons: ['winter'] },
    { id: 'langrend', name: 'Langrendsløjper',  layer: 'ski',       x: 395, y: 150, seasons: ['winter'] },
    { id: 'butik',    name: 'Nærmeste butik',   layer: 'mad',       x: 255, y: 290, seasons: ALL },
    { id: 'resto',    name: 'Restauranter',     layer: 'mad',       x: 345, y: 270, seasons: ALL },
    { id: 'udlejning',name: 'Skiudlejning',     layer: 'udstyr',    x: 215, y: 215, seasons: ['winter'] },
    { id: 'skiskole', name: 'Skiskole',         layer: 'udstyr',    x: 165, y: 175, seasons: ['winter'] },
    { id: 'toppen',   name: 'Gaustatoppen',     layer: 'oplevelse', x: 300, y: 45,  seasons: ['summer', 'autumn'] },
    { id: 'rjukan',   name: 'Rjukan',           layer: 'oplevelse', x: 520, y: 370, seasons: ALL },
    { id: 'vemork',   name: 'Vemork',           layer: 'oplevelse', x: 455, y: 335, seasons: ALL },
    { id: 'spa',      name: 'Rjukan Spa',       layer: 'oplevelse', x: 560, y: 325, seasons: ALL },
    { id: 'vandring', name: 'Vandrerute',       layer: 'rute',      x: 120, y: 80,  seasons: ['spring', 'summer', 'autumn'] },
    { id: 'cykel',    name: 'Cykelrute',        layer: 'rute',      x: 470, y: 225, seasons: ['summer'] }
  ];
  var HOME = { x: 300, y: 215 };
  function layer(id) { return LAYERS.filter(function (l) { return l.id === id; })[0]; }
  function poi(id) { return POIS.filter(function (p) { return p.id === id; })[0]; }
  function season() { return document.documentElement.getAttribute('data-season') || 'autumn'; }
  function nested(name, x, y, size) {
    return '<svg class="ico" x="' + (x - size / 2) + '" y="' + (y - size / 2) + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24">' + (GL.ICONS[name] || '') + '</svg>';
  }

  function mapSvg(on) {
    var s = '<svg class="map-svg" viewBox="0 0 600 420" role="group" aria-label="Skematisk kort over området">' +
      '<rect class="m-bg" width="600" height="420"/>' +
      '<path class="m-r1" d="M0 120L90 70l70 40 90-60 80 55 70-45 110 70 90-40v330H0z"/>' +
      '<path class="m-r2" d="M0 200l100-45 90 35 110-55 100 60 90-35 110 60v200H0z"/>' +
      '<path class="m-lake" d="M70 330c30-22 90-26 130-8 28 12 10 38-30 44-50 8-110-4-100-36z"/>' +
      // road toward Rjukan, ski slopes, trails
      '<path class="m-road" d="M300 215C330 255 380 300 440 330S520 360 560 395"/>' +
      '<path class="m-slope" d="M205 120L225 190M190 130L205 195M220 112L245 185"/>' +
      '<path class="m-trail" d="M300 215C350 200 380 170 395 150S430 120 470 110"/>' +
      '<path class="m-trail" d="M300 215C230 190 170 130 120 80"/>' +
      '<text class="m-note" x="590" y="412" text-anchor="end">Skematisk kort, ikke målfast. Placeringer er pladsholdere.</text>' +
      '<text class="m-note" x="14" y="24">N ↑</text>';
    POIS.forEach(function (p) {
      var l = layer(p.layer);
      if (on.indexOf(l.id) === -1) return;
      var inSeason = p.seasons.indexOf(season()) > -1;
      s += '<g class="poi' + (inSeason ? '' : ' off') + '" data-poi="' + p.id + '" tabindex="0" role="button" aria-label="' + p.name + (inSeason ? '' : ', ude af sæson nu') + '">' +
        '<circle class="poi-hit" cx="' + p.x + '" cy="' + p.y + '" r="22"/><circle class="poi-dot" cx="' + p.x + '" cy="' + p.y + '" r="15"/>' + nested(l.icon, p.x, p.y, 17) +
        '<text class="poi-label" x="' + p.x + '" y="' + (p.y + 30) + '" text-anchor="middle">' + p.name + '</text></g>';
    });
    s += '<g class="home"><circle cx="' + HOME.x + '" cy="' + HOME.y + '" r="19"/>' + nested('home', HOME.x, HOME.y, 22) +
      '<text class="poi-label home-label" x="' + HOME.x + '" y="' + (HOME.y + 36) + '" text-anchor="middle">Lejligheden</text></g></svg>';
    return s;
  }

  function seasonRow(p) {
    var cur = season();
    return ALL.map(function (k) {
      var on = p.seasons.indexOf(k) > -1;
      return '<span class="season-chip' + (on ? ' on' : '') + (k === cur ? ' now' : '') + '" data-tip="' + SEASON_NAME[k] + (on ? '' : ' (ikke i sæson)') + '">' + GL.icon(SEASON_ICON[k]) + '</span>';
    }).join('');
  }

  function render(el) {
    var touch = matchMedia('(hover: none)').matches, verb = touch ? 'Tryk' : 'Klik';
    var counts = { taet: 0, oplev: 0 };
    POIS.forEach(function (p) { counts[layer(p.layer).area]++; });
    var on = LAYERS.map(function (l) { return l.id; }), sel = null;

    el.innerHTML =
      '<nav class="subnav" aria-label="Undersider i Området">' +
        '<a href="#" aria-current="page">Oversigt</a><a href="#" aria-disabled="true">Tæt på</a><a href="#" aria-disabled="true">Oplevelser</a><a href="#" aria-disabled="true">Nu og events <span class="soon">lav prioritet</span></a>' +
      '</nav>' +
      '<div class="area-head"><p class="eyebrow">Området</p><h3 class="area-title">Gausta og omegn</h3><p class="muted" style="margin:0">' + verb + ' på et punkt på kortet. Slå lag til og fra herunder. Punkter ude af sæson er nedtonede.' + (touch ? ' Kortet kan trækkes til siden.' : '') + '</p></div>' +
      '<div class="plan-pills layers" role="group" aria-label="Lag på kortet">' + LAYERS.map(function (l) {
        return '<button type="button" class="filter" data-l="' + l.id + '" aria-pressed="true">' + GL.icon(l.icon) + l.name + '</button>';
      }).join('') + '</div>' +
      '<div class="plan-split area-split"><div class="map-wrap">' + mapSvg(on) + '</div><div class="plan-panel area-panel" aria-live="polite"></div></div>' +
      '<div class="grid grid-3 area-cards">' +
        '<div class="card"><div class="ico-box">' + GL.icon('pin') + '</div><div class="kicker">A3 · ' + counts.taet + ' punkter</div><h3>Tæt på lejligheden</h3><p class="muted">Pister, løjper, butik, restauranter, skiudlejning og skiskole. Afstande og køretider i klart sprog.</p><span class="card-link soon">Åbn Tæt på (kommer)</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('mountain') + '</div><div class="kicker">A4 · ' + counts.oplev + ' punkter</div><h3>Oplevelser</h3><p class="muted">Gaustatoppen, Rjukan, Vemork, Spa samt vandre- og cykelruter. Filtreres efter årstid.</p><span class="card-link soon">Åbn Oplevelser (kommer)</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('cal') + '</div><div class="kicker">A5 + A6</div><h3>Nu og events</h3><p class="muted">Forhold lige nu og kalenderen over, hvad der sker. Laveste prioritet.</p><span class="card-link soon">Åbn Nu og events (kommer)</span></div>' +
      '</div>' +
      '<div class="now-widget"><div class="now-head"><b>Gausta nu</b><span class="stamp">Sidst opdateret: aldrig (prototype)</span></div>' +
        '<div class="now-grid"><div><small>Temperatur</small><b class="num">n/a</b></div><div><small>Snedybde</small><b class="num">n/a</b></div><div><small>Åbne lifte</small><b class="num">n/a</b></div><div><small>Vejforhold</small><b class="num">n/a</b></div></div>' +
        '<div class="faint" style="margin-top:8px">Kilder er ikke valgt. Ved nedbrud vises "sidst opdateret kl. ...". <a href="#" aria-disabled="true">Se alle forhold (kommer)</a></div></div>';

    var map = el.querySelector('.map-wrap'), panel = el.querySelector('.area-panel');

    function panelEmpty() {
      panel.innerHTML = '<div class="slot"><b>Vælg et punkt</b>' + verb + ' på kortet for at se afstand, årstider og link. Alle detaljer er pladsholdere.</div>';
    }
    function panelPoi(p) {
      var l = layer(p.layer), inNow = p.seasons.indexOf(season()) > -1;
      panel.innerHTML = '<div class="row-flex" style="margin-bottom:8px"><span class="pill-tag accent">' + AREAS[l.area] + '</span><span class="pill-tag">' + l.name + '</span>' +
        '<span class="pill-tag ' + (inNow ? 'good' : 'warn') + '">' + (inNow ? 'I sæson nu' : 'Ude af sæson nu') + '</span></div>' +
        '<h3 style="margin:0 0 10px">' + p.name + '</h3>' +
        '<div class="list-row" style="padding:8px 0"><span class="grow muted">Afstand fra lejligheden</span><span class="verify">skal verificeres</span></div>' +
        '<div class="list-row" style="padding:8px 0"><span class="grow muted">Tid (gå, ski eller bil)</span><span class="verify">skal verificeres</span></div>' +
        '<div class="list-row" style="padding:8px 0"><span class="grow muted">Årstider</span><span class="season-row">' + seasonRow(p) + '</span></div>' +
        '<p class="plan-desc">Kort beskrivelse på dansk og engelsk kommer her. Link til officiel side kommer.</p>' +
        '<div class="row-flex"><span class="card-link soon">Se i ' + AREAS[l.area] + ' (kommer)</span></div>';
    }
    function redraw() {
      map.innerHTML = mapSvg(on);
      if (sel) { var g = map.querySelector('[data-poi="' + sel + '"]'); if (g) g.classList.add('sel'); }
    }
    function pick(id, scroll) {
      sel = id; redraw(); panelPoi(poi(id));
      if (scroll && matchMedia('(max-width: 860px)').matches) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    el.querySelector('.layers').addEventListener('click', function (e) {
      var b = e.target.closest('.filter'); if (!b) return;
      var id = b.dataset.l, i = on.indexOf(id);
      if (i > -1) on.splice(i, 1); else on.push(id);
      b.setAttribute('aria-pressed', String(on.indexOf(id) > -1));
      if (sel && on.indexOf(poi(sel).layer) === -1) { sel = null; panelEmpty(); }
      redraw();
    });
    map.addEventListener('click', function (e) { var g = e.target.closest('.poi'); if (g) pick(g.dataset.poi, true); });
    map.addEventListener('keydown', function (e) { if (e.key !== 'Enter' && e.key !== ' ') return; var g = e.target.closest('.poi'); if (g) { e.preventDefault(); pick(g.dataset.poi, true); } });
    el.addEventListener('click', function (e) { if (e.target.closest('a[aria-disabled="true"], .subnav a')) e.preventDefault(); });
    // follow the season selector: redraw map (dimming) and the open panel
    new MutationObserver(function () { redraw(); if (sel) panelPoi(poi(sel)); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
    panelEmpty();
  }

  document.addEventListener('gl:ready', function () {
    [].forEach.call(document.querySelectorAll('[data-area-hub]'), render);
  });
})();
