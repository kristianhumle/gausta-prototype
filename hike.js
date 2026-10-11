/* Vandremuligheder (forår, sommer, efterår): turkort med links, kort med ruter og oversigt over alle fundne ruter.
   Data: GL.AREAMAP.hike (area-hike-data.js, genereret af tools/build-map.py). Alle tal og tekster er kildepåstande og skal verificeres.
   Tekster er hentet fra de linkede kilder (ut.no, Visit Rjukan, Gausta.com) som standardtekst og erstattes senere med egen tekst. */
(function () {
  'use strict';
  var GRADE = { 'let': ['Let', '#2e7d4f'], 'middel': ['Middel', '#2f6fb0'], 'krævende': ['Krævende', '#b03a2e'] };
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function km(m) { return (m / 1000).toFixed(1).replace('.', ',') + ' km'; }
  function chip(g) { var x = GRADE[g]; return x ? '<span class="hk-grade" style="--c:' + x[1] + '">' + x[0] + '</span>' : ''; }
  function links(r) { return (r.links || []).map(function (l) { return '<a class="btn btn-ghost btn-sm" href="' + esc(l.u) + '" target="_blank" rel="noopener">' + esc(l.t) + ' <span aria-hidden="true">↗</span></a>'; }).join(''); }
  function fromApt(r) {
    var f = r.fromApt; if (!f) return '';
    var s = 'ca. ' + (f.airM < 1000 ? Math.round(f.airM / 10) * 10 + ' m' : km(f.airM)) + ' i luftlinje';
    if (f.drive) s += ', ' + String(f.drive[0]).replace('.', ',') + ' km (ca. ' + f.drive[1] + ' min) i bil';
    return s;
  }
  function official(r) { return r.official ? '<a href="' + esc(r.official.u) + '" target="_blank" rel="noopener">' + esc(r.official.t) + ' <span aria-hidden="true">↗</span></a>' : '<span class="faint">Ingen fundet</span>'; }
  function facts(r) {
    var rows = [['Afstand', r.dist], ['Stigning', r.ascent], ['Tid', r.time], ['Sæson', r.season], ['Start', r.start], ['Fra lejligheden', fromApt(r)]];
    return '<dl class="hk-facts">' + rows.filter(function (x) { return x[1] && x[1] !== 'ikke oplyst'; }).map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + esc(x[1]) + '</dd></div>'; }).join('') + '</dl>';
  }
  function D() { return window.GL && GL.AREAMAP && GL.AREAMAP.hike; }

  /* ---------- Version 1: turkort med links ---------- */
  function cards(el) {
    var d = D(); if (!d) return;
    var all = d.routes.filter(function (r) { return r.status === 'valgt'; }), f = 'alle';
    function draw() {
      var list = all.filter(function (r) { return f === 'alle' || r.grade === f; });
      el.innerHTML = '<div class="row-flex hk-filters" role="group" aria-label="Sværhedsgrad">' + [['alle', 'Alle (' + all.length + ')'], ['let', 'Let'], ['middel', 'Middel'], ['krævende', 'Krævende']].map(function (x) {
        return '<button type="button" class="filter" data-g="' + x[0] + '" aria-pressed="' + (x[0] === f) + '">' + x[1] + '</button>'; }).join('') + '</div>' +
        '<div class="hk-cards">' + list.map(function (r) {
          return '<article class="card hk-card"><div class="hk-card-h"><span class="hk-grp">' + esc(r.group) + '</span>' + chip(r.grade) + '</div><h3>' + esc(r.name) + '</h3>' + facts(r) +
            (r.text ? '<p class="muted">' + esc(r.text) + '</p>' : '') + (r.tip ? '<p class="hk-tip"><b>Tip:</b> ' + esc(r.tip) + '</p>' : '') +
            '<div class="row-flex hk-links">' + links(r) + '</div>' + (r.note ? '<p class="faint hk-note">' + esc(r.note) + '</p>' : '') + '</article>'; }).join('') + '</div>';
    }
    el.addEventListener('click', function (e) { var b = e.target.closest('[data-g]'); if (b) { f = b.dataset.g; draw(); } });
    draw();
  }

  /* ---------- Version 2: kort med ruter ---------- */
  function map(el) {
    var d = D(); if (!d) return;
    var routes = d.routes.filter(function (r) { return r.status === 'valgt' && r.d; }), sel = routes[0].id, vb = [0, 0, d.w, d.h];
    var VIEWS = { alle: [0, 0, d.w, d.h] };
    function view(name, x, y, w) { VIEWS[name] = [x - w / 2, y - w * d.h / d.w / 2, w, w * d.h / d.w]; }
    (d.places || []).forEach(function (p) { if (p[0] === 'Stavsro') view('gaustatoppen', (d.peaks[0][1] + p[1]) / 2, (d.peaks[0][2] + p[2]) / 2, 330); if (p[0] === 'Gaustablikk') view('gaustablikk', p[1], p[2], 260); if (p[0] === 'Rjukan') view('rjukan', p[1], p[2], 220); });
    el.innerHTML = '<div class="hk-map-top"><div class="row-flex hk-chips" role="group" aria-label="Vælg rute"></div></div>' +
      '<div class="plan-split hk-grid"><div class="hk-stage"><div class="hk-wrap"></div><div class="am-ov am-ov-bot" role="group" aria-label="Zoom">' +
      [['alle', 'Hele kortet'], ['gaustatoppen', 'Gaustatoppen'], ['gaustablikk', 'Gaustablikk'], ['rjukan', 'Rjukan']].filter(function (x) { return VIEWS[x[0]]; }).map(function (x) { return '<button type="button" class="am-ov-btn" data-view="' + x[0] + '">' + x[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="plan-panel hk-panel" aria-live="polite"></div></div>' +
      '<p class="faint hk-attr">Kortdata © OpenStreetMap contributors. Højdekurver © Kartverket (CC BY 4.0). Rutelinjer fra OpenStreetMap og Turrutebasen (Kartverket). <b>Vejledende: følg den officielle rute og tjek vejr og føre før turen.</b></p>';
    var wrap = el.querySelector('.hk-wrap'), panel = el.querySelector('.hk-panel'), chips = el.querySelector('.hk-chips');
    function base() {
      var s = '<svg class="hk-svg" viewBox="' + vb.join(' ') + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kort over vandreruter ved Gausta">' +
        '<rect x="-50" y="-50" width="' + (d.w + 100) + '" height="' + (d.h + 100) + '" fill="#f6f3ea"/>' +
        '<path class="hk-ctr" d="' + d.contours.minor.join(' ') + '"/><path class="hk-ctr hk-ctr-m" d="' + d.contours.major.join(' ') + '"/>' +
        '<path class="hk-water" fill-rule="evenodd" d="' + d.water.join(' ') + '"/><path class="hk-stream" d="' + d.streams.join(' ') + '"/>';
      ['t', 'd', 'c', 'b', 'a'].forEach(function (c) { if (d.roads[c]) s += '<path class="hk-rd hk-rd-' + c + '" d="' + d.roads[c].join(' ') + '"/>'; });
      if (d.roads.p) s += '<path class="hk-path" d="' + d.roads.p.join(' ') + '"/>';
      routes.slice().sort(function (a, b) { return (a.id === sel) - (b.id === sel); }).forEach(function (r) {
        var on = r.id === sel, col = (GRADE[r.grade] || ['', '#555'])[1];
        s += '<g class="hk-route' + (on ? ' on' : '') + '" data-r="' + r.id + '"><path class="hk-halo" d="' + r.d + '"/><path class="hk-line" d="' + r.d + '" style="stroke:' + col + '"/>' + '<path class="hk-hit" d="' + r.d + '"/></g>';
      });
      var r0 = routes.filter(function (r) { return r.id === sel; })[0];
      if (r0 && r0.startXY) s += '<circle class="hk-start" cx="' + r0.startXY[0] + '" cy="' + r0.startXY[1] + '" r="1"/>';
      return s + '<g class="hk-lbls"></g></svg><div class="am-pins hk-pins"><span class="am-apt hk-apt" role="img" aria-label="Lejligheden">' + GL.icon('home') + '<span class="am-l am-l-apt">Lejligheden</span></span></div>';
    }
    function labels() {
      var svg = wrap.querySelector('svg'), g = svg.querySelector('.hk-lbls'), k = vb[2] / (wrap.clientWidth || 800), fs = 11.5 * k, h = '';
      var put = function (t, x, y, cls) { if (x > vb[0] && x < vb[0] + vb[2] && y > vb[1] && y < vb[1] + vb[3]) h += '<text class="' + cls + '" x="' + x + '" y="' + y + '" font-size="' + fs + '" stroke-width="' + (fs * .28) + '">' + esc(t) + '</text>'; };
      (d.peaks || []).forEach(function (p) { h += '<path class="hk-peak" d="M' + (p[1] - 4 * k) + ' ' + (p[2] + 3 * k) + 'L' + p[1] + ' ' + (p[2] - 5 * k) + 'L' + (p[1] + 4 * k) + ' ' + (p[2] + 3 * k) + 'Z"/>'; put(p[0] + ' ' + p[3] + ' m', p[1] + 7 * k, p[2] + 3 * k, 'hk-t hk-t-peak'); });
      (d.places || []).forEach(function (p) { put(p[0], p[1] + 6 * k, p[2] - 5 * k, 'hk-t'); });
      (d.names || []).forEach(function (n) { put(n[0], n[1], n[2], 'hk-t hk-t-w'); });
      g.innerHTML = h;
      var ap = wrap.querySelector('.hk-apt'); if (ap && d.apt) { var inside = d.apt[0] > vb[0] && d.apt[0] < vb[0] + vb[2] && d.apt[1] > vb[1] && d.apt[1] < vb[1] + vb[3]; ap.style.display = inside ? '' : 'none'; ap.style.left = ((d.apt[0] - vb[0]) / vb[2] * 100).toFixed(2) + '%'; ap.style.top = ((d.apt[1] - vb[1]) / vb[3] * 100).toFixed(2) + '%'; }
      var st = svg.querySelector('.hk-start'); if (st) { st.setAttribute('r', 5 * k); st.setAttribute('stroke-width', 2 * k); }
      [].forEach.call(svg.querySelectorAll('.hk-line'), function (p) { p.style.strokeWidth = (svg.querySelector('.hk-route.on .hk-line') === p ? 4.5 : 3) + 'px'; });
    }
    function profile(r) {
      var p = r.profile; if (!p || p.length < 2) return '';
      var W = 300, H = 90, maxD = p[p.length - 1][0], lo = Math.min.apply(null, p.map(function (x) { return x[1]; })), hi = Math.max.apply(null, p.map(function (x) { return x[1]; })), pad = 8;
      var X = function (v) { return pad + v / maxD * (W - 2 * pad); }, Y = function (v) { return H - pad - (v - lo) / ((hi - lo) || 1) * (H - 2 * pad - 6); };
      var line = p.map(function (x, i) { return (i ? 'L' : 'M') + X(x[0]).toFixed(1) + ' ' + Y(x[1]).toFixed(1); }).join('');
      return '<div class="hk-prof"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Højdeprofil, fra ' + lo + ' til ' + hi + ' meter"><path d="' + line + 'L' + X(maxD) + ' ' + (H - pad) + 'L' + pad + ' ' + (H - pad) + 'Z" class="hk-prof-a"/><path d="' + line + '" class="hk-prof-l"/>' +
        '<text x="' + pad + '" y="10" class="hk-prof-t">' + hi + ' m</text><text x="' + pad + '" y="' + (H - 1) + '" class="hk-prof-t">' + lo + ' m</text><text x="' + (W - pad) + '" y="' + (H - 1) + '" class="hk-prof-t" text-anchor="end">' + km(maxD) + '</text></svg>' +
        '<small class="faint">Højdeprofil fra Kartverkets terrænmodel (vejledende).</small></div>';
    }
    function panelFor(r) {
      var c = r.calc || {}, mine = c.lengthM ? '<p class="faint hk-calc">Vores beregning ud fra kortet: ' + km(c.lengthM) + (c.ascentM ? ', stigning ca. ' + c.ascentM + ' m' : '') + (r.kind === 'osm' ? (r.loop ? ' (rundtur)' : ' (kun vejen frem)') : '') + '. Vejledende.</p>' : '';
      panel.innerHTML = '<div class="hk-card-h"><span class="hk-grp">' + esc(r.group) + '</span>' + chip(r.grade) + '</div><h3 style="margin:6px 0 8px">' + esc(r.name) + '</h3>' + facts(r) + profile(r) + (r.text ? '<p class="muted hk-desc">' + esc(r.text) + '</p>' : '') +
        (r.tip ? '<p class="hk-tip"><b>Tip:</b> ' + esc(r.tip) + '</p>' : '') + '<div class="row-flex hk-links">' + links(r) + '</div>' + mine + (r.note ? '<p class="faint hk-note">' + esc(r.note) + '</p>' : '');
      panel.scrollTop = 0;
    }
    function draw() {
      wrap.innerHTML = base(); labels();
      chips.innerHTML = routes.map(function (r) { var col = (GRADE[r.grade] || ['', '#555'])[1]; return '<button type="button" class="filter hk-chip" data-r="' + r.id + '" aria-pressed="' + (r.id === sel) + '"><i style="background:' + col + '"></i>' + esc(r.name.replace(/ \(.*\)$/, '')) + '</button>'; }).join('');
    }
    function pick(id) { sel = id; panelFor(routes.filter(function (r) { return r.id === id; })[0]); draw(); }
    var anim = null;
    function go(name, instant) {
      var to = VIEWS[name], from = vb.slice(), t0 = performance.now();
      if (anim) cancelAnimationFrame(anim);
      if (instant || matchMedia('(prefers-reduced-motion: reduce)').matches) { vb = to.slice(); wrap.querySelector('svg').setAttribute('viewBox', vb.join(' ')); labels(); return; }
      (function step(t) { var k = Math.min(1, (t - t0) / 450), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; vb = from.map(function (a, i) { return a + (to[i] - a) * e; }); wrap.querySelector('svg').setAttribute('viewBox', vb.join(' ')); labels(); if (k < 1) anim = requestAnimationFrame(step); })(t0);
      [].forEach.call(el.querySelectorAll('[data-view]'), function (b) { b.classList.toggle('on', b.dataset.view === name); });
    }
    el.addEventListener('click', function (e) {
      var c = e.target.closest('[data-r]'); if (c) { pick(c.dataset.r); return; }
      var v = e.target.closest('[data-view]'); if (v) go(v.dataset.view);
    });
    if (window.ResizeObserver) new ResizeObserver(function () { if (wrap.querySelector('svg')) labels(); }).observe(wrap);
    pick(sel);
    var first = el.querySelector('[data-view="alle"]'); if (first) first.classList.add('on');
  }

  /* ---------- Oversigt: alle ruter og status ---------- */
  function table(el) {
    var d = D(); if (!d) return;
    var n = d.routes.filter(function (r) { return r.status === 'valgt'; }).length;
    el.innerHTML = '<p class="muted" style="margin:0 0 10px"><b>' + n + ' valgt</b> og <b>' + (d.routes.length - n) + ' fravalgt</b> af ' + d.routes.length + ' fundne ruter og aktiviteter (11. oktober 2026). Tal fra kilderne, og vores egen beregning ud fra OpenStreetMap og terrænmodellen (kun vejen frem, vejledende).</p>' +
      '<div class="table-wrap"><table class="table hk-table"><tr><th>Rute</th><th>Status</th><th>Grad</th><th>Fra lejligheden (til start)</th><th>Officiel beskrivelse</th><th>Afstand (kilde)</th><th>Stigning (kilde)</th><th>Vores beregning</th><th>Begrundelse</th></tr>' +
      d.routes.map(function (r) {
        var c = r.calc || {}, mine = c.lengthM ? km(c.lengthM) + (c.ascentM ? ', +' + c.ascentM + ' m' : '') : 'n/a';
        return '<tr class="' + (r.status === 'valgt' ? 'hk-on' : 'hk-off') + '"><td><b>' + esc(r.name) + '</b><div class="meta">' + esc(r.group) + '</div></td><td><span class="hk-status ' + r.status + '">' + (r.status === 'valgt' ? 'Valgt' : 'Fravalgt') + '</span></td><td>' + (chip(r.grade) || '–') + '</td><td>' + esc(fromApt(r) || '–') + '</td><td>' + official(r) + '</td><td>' + esc(r.dist || '–') + '</td><td>' + esc(r.ascent || '–') + '</td><td class="num">' + mine + '</td><td class="muted">' + esc((r.reason || (r.status === 'valgt' ? 'Med på brugerens liste 11. oktober 2026' : '')).replace(/\*\*/g, '')) + '</td></tr>'; }).join('') + '</table></div>';
  }

  function season(el) {
    function upd() { var w = document.documentElement.getAttribute('data-season') === 'winter'; el.innerHTML = w ? '<div class="notice info"><b>Vinter:</b> Vandring vises ikke om vinteren på det rigtige site (elementet er til forår, sommer og efterår). Om vinteren vises langrend og ski-in/ski-out i stedet. Her er det vist, så du kan vurdere det.</div>' : ''; }
    upd(); new MutationObserver(upd).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
  }

  document.addEventListener('gl:ready', function () {
    [].forEach.call(document.querySelectorAll('[data-hike]'), function (el) { var k = el.getAttribute('data-hike'); ({ cards: cards, map: map, table: table, season: season })[k](el); });
  });
})();
