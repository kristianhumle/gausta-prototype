/* Området: oversigtselement. To kort (Gausta tæt på, Rjukan og omegn) med lag, zoom til centrene, panel,
   tre indgangskort og "Gausta nu" som lille widget.
   Kortgrundlag: veje, bygninger og vand omtegnet fra åbne kortdata (OpenStreetMap, ODbL), se area-map-data.js.
   Pister, lifte og langrendsløjper vises bevidst ikke her (de hører til Ski-in / ski-out).
   Alle placeringer, åbningstider og beskrivelser er kildepåstande og skal verificeres. */
(function () {
  'use strict';
  var MAPS = {
    close: { label: 'Gausta', head: 'Gausta, tæt på lejligheden', zoomLabel: 'Zoom til Gaustablikk', clusterName: 'Gaustablikk-centret',
      cats: [{ id: 'mad', name: 'Mad og drikke', icon: 'fork' }, { id: 'indkoeb', name: 'Indkøb', icon: 'bag' }, { id: 'udstyr', name: 'Skiudlejning', icon: 'snow' }, { id: 'aktivitet', name: 'Aktiviteter', icon: 'racket' }],
      groups: { hotel: { name: 'Gaustablikk Fjellresort', pos: [59.8801, 8.7342], members: ['bjork', 'blikk', 'kirks', 'lobby', 'wellness'] }, food: { name: 'Gausta Food Court og butikker', pos: [59.8812, 8.7359], members: ['stova', 'pose', 'sport1', 'bakeri'] } } },
    wide: { label: 'Rjukan og omegn', head: 'Rjukan og omegn, i bil', zoomLabel: 'Zoom til Rjukan', clusterName: 'Rjukan',
      cats: [{ id: 'by', name: 'Byen', icon: 'city' }, { id: 'kultur', name: 'Kultur', icon: 'museum' }, { id: 'natur', name: 'Natur', icon: 'tree' }, { id: 'aktivitet', name: 'Aktiviteter', icon: 'racket' }], groups: {} }
  };
  var CAT_NAME = {};
  Object.keys(MAPS).forEach(function (k) { MAPS[k].cats.forEach(function (c) { CAT_NAME[k + ':' + c.id] = c.name; }); });
  var NICE = [50, 100, 200, 500, 1000, 2000, 5000, 10000];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function km(m) { return m >= 1000 ? (m / 1000).toFixed(1).replace('.', ',') + ' km' : Math.round(m / 10) * 10 + ' m'; }

  function render(el) {
    if (!window.GL || !GL.AREAMAP) { el.textContent = 'Kortdata mangler (area-map-data.js).'; return; }
    var DATA = GL.AREAMAP, cur = 'close', S = {}, touch = matchMedia('(hover: none)').matches, verb = touch ? 'Tryk' : 'Klik';
    Object.keys(MAPS).forEach(function (k) { S[k] = { mode: 'all', cats: MAPS[k].cats.map(function (c) { return c.id; }), sel: null, vb: DATA[k].views.all.slice() }; });
    var counts = { close: DATA.close.pois.length, wide: DATA.wide.pois.length };

    el.innerHTML =
      '<nav class="subnav" aria-label="Undersider i Området"><a href="#" aria-current="page">Oversigt</a><a href="#" aria-disabled="true">Tæt på</a><a href="#" aria-disabled="true">Oplevelser</a><a href="#" aria-disabled="true">Nu og events <span class="soon">lav prioritet</span></a></nav>' +
      '<div class="area-head"><p class="eyebrow">Området</p><h3 class="area-title">Kort over området</h3>' +
        '<p class="muted" style="margin:0">' + verb + ' på et sted på kortet. Skift mellem de to kort, slå lag til og fra, og zoom ind på centrene.</p></div>' +
      '<div class="plan-pills am-switch" role="group" aria-label="Vælg kort">' + Object.keys(MAPS).map(function (k, i) { return '<button type="button" class="filter" data-map="' + k + '" aria-pressed="' + (i === 0) + '">' + MAPS[k].label + '</button>'; }).join('') + '</div>' +
      '<div class="plan-pills layers am-layers" role="group" aria-label="Lag på kortet"></div>' +
      '<div class="plan-split am-grid"><div class="am-col"><div class="am-wrap" id="am-wrap"></div>' +
        '<div class="am-bar"><button type="button" class="btn btn-ghost btn-sm" data-v="all">Hele kortet</button><button type="button" class="btn btn-ghost btn-sm" data-v="zoom"></button>' +
        '<span class="faint am-ski">Pister, lifte og langrendsløjper vises ikke her: <a href="#e-skiinout">se Ski-in / ski-out</a></span></div></div>' +
        '<div class="plan-panel area-panel" aria-live="polite"></div></div>' +
      '<div class="grid grid-3 area-cards">' +
        '<div class="card"><div class="ico-box">' + GL.icon('pin') + '</div><div class="kicker">A3 · ' + counts.close + ' steder</div><h3>Tæt på lejligheden</h3><p class="muted">Restauranter, butikker, skiudlejning, padel og sauna på Gausta. Afstande i klart sprog.</p><span class="card-link soon">Åbn Tæt på (kommer)</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('mountain') + '</div><div class="kicker">A4 · ' + counts.wide + ' steder</div><h3>Oplevelser</h3><p class="muted">Rjukan, Vemork, Rjukanbadet, Gaustatoppen og mere. Køretid fra lejligheden.</p><span class="card-link soon">Åbn Oplevelser (kommer)</span></div>' +
        '<div class="card"><div class="ico-box">' + GL.icon('cal') + '</div><div class="kicker">A5 + A6</div><h3>Nu og events</h3><p class="muted">Forhold lige nu og kalenderen over, hvad der sker. Laveste prioritet.</p><span class="card-link soon">Åbn Nu og events (kommer)</span></div>' +
      '</div>' +
      '<div class="now-widget"><div class="now-head"><b>Gausta nu</b><span class="stamp">Sidst opdateret: aldrig (prototype)</span></div>' +
        '<div class="now-grid"><div><small>Temperatur</small><b class="num">n/a</b></div><div><small>Snedybde</small><b class="num">n/a</b></div><div><small>Åbne lifte</small><b class="num">n/a</b></div><div><small>Vejforhold</small><b class="num">n/a</b></div></div>' +
        '<div class="faint" style="margin-top:8px">Kilder er ikke valgt. Ved nedbrud vises "sidst opdateret kl. ...". <a href="#" aria-disabled="true">Se alle forhold (kommer)</a></div></div>';

    var fixed = el.getAttribute('data-map'), minimal = el.getAttribute('data-chrome') === 'min', skiHref = el.getAttribute('data-ski-href') || '#e-skiinout';
    if (minimal) { ['.subnav', '.area-head', '.area-cards', '.now-widget'].forEach(function (q) { var n = el.querySelector(q); if (n) n.remove(); }); }
    if (fixed) { var swn = el.querySelector('.am-switch'); if (swn) swn.remove(); }
    el.querySelector('.am-ski a').setAttribute('href', skiHref);
    var wrap = el.querySelector('#am-wrap'), panel = el.querySelector('.area-panel'), layersEl = el.querySelector('.am-layers'), pinsEl, svgEl, scaleEl, items = [];

    function dataOf() { return DATA[cur]; }
    function poi(id) { return dataOf().pois.filter(function (p) { return p.id === id; })[0]; }
    function catOn(p) { return S[cur].cats.indexOf(p.c) > -1; }

    // ---------- grundkort (SVG) ----------
    function baseSvg() {
      var d = dataOf(), v = S[cur].vb, order = ['t', 'd', 'c', 'b', 'a'], r = d.roads;
      var s = '<svg class="am-svg" viewBox="' + v.join(' ') + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kort over ' + MAPS[cur].label + ', omtegnet fra åbne kortdata. Veje, bygninger og vand.">' +
        '<rect class="am-bg" x="-600" y="-600" width="2200" height="2200"/>' +
        '<path class="am-water" fill-rule="evenodd" d="' + d.water.join(' ') + '"/>' +
        '<path class="am-stream" d="' + d.streams.join(' ') + '"/>';
      order.forEach(function (c) { if (r[c]) s += '<path class="am-rc am-rc-' + c + '" d="' + r[c].join(' ') + '"/>'; });
      order.forEach(function (c) { if (r[c]) s += '<path class="am-rf am-rf-' + c + '" d="' + r[c].join(' ') + '"/>'; });
      if (d.blds.length) s += '<path class="am-bld" d="' + d.blds.join(' ') + '"/>';
      return s + '</svg>';
    }

    // ---------- elementer oven på kortet (HTML, konstant størrelse) ----------
    function build() {
      var d = dataOf(), m = MAPS[cur]; items = [];
      var h = baseSvg() + '<div class="am-pins"></div><div class="am-scale"><i></i><span></span></div><div class="am-attr">Kortdata © OpenStreetMap contributors</div>';
      wrap.style.aspectRatio = d.w + ' / ' + d.h; wrap.innerHTML = h;
      svgEl = wrap.querySelector('.am-svg'); pinsEl = wrap.querySelector('.am-pins'); scaleEl = wrap.querySelector('.am-scale');
      function add(kind, x, y, html, cls, data) { var n = document.createElement(kind === 'label' || kind === 'apt' ? 'span' : 'button'); if (n.tagName === 'BUTTON') n.type = 'button'; n.className = cls; n.innerHTML = html; Object.keys(data || {}).forEach(function (k) { n.setAttribute('data-' + k, data[k]); }); pinsEl.appendChild(n); var it = { el: n, kind: kind, x: x, y: y, data: data || {} }; items.push(it); return it; }
      d.names.forEach(function (nm) { if (cur === 'close' && nm[0] !== 'Kvitåvatn') return; if (cur === 'wide' && nm[0] !== 'Møsvatn') return; add('label', nm[1], nm[2], nm[0], 'am-water-label', {}); });
      add('apt', d.apt[0], d.apt[1], GL.icon('home') + '<span class="am-l am-l-apt">Lejligheden</span>', 'am-apt', {});
      add('cluster', d.cluster[0], d.cluster[1], GL.icon('pin') + '<span class="am-n"></span><span class="am-l">' + m.clusterName + '</span>', 'am-pin am-cluster', { id: 'cluster', aria: m.clusterName });
      Object.keys(m.groups).forEach(function (gid) {
        var g = m.groups[gid], mem = d.pois.filter(function (p) { return g.members.indexOf(p.id) > -1; });
        var gx = mem.reduce(function (a, p) { return a + p.x; }, 0) / mem.length, gy = mem.reduce(function (a, p) { return a + p.y; }, 0) / mem.length;
        mem.forEach(function (p) { p.g = gid; });
        add('group', gx, gy, GL.icon('home') + '<span class="am-n"></span><span class="am-l">' + g.name + '</span>', 'am-pin am-group', { id: gid, aria: g.name });
      });
      d.pois.forEach(function (p) {
        var cat = m.cats.filter(function (c) { return c.id === p.c; })[0];
        add('poi', p.x, p.y, GL.icon(cat.icon) + '<span class="am-l">' + esc(p.n) + '</span>', 'am-pin', { id: p.id, aria: p.n });
      });
      items.forEach(function (it) { if (it.data.aria) it.el.setAttribute('aria-label', it.data.aria); });
    }

    function memberPois(sel) {
      var d = dataOf();
      if (sel === 'cluster') return d.pois.filter(function (p) { return p.cl && catOn(p); });
      var g = MAPS[cur].groups[sel]; return g ? d.pois.filter(function (p) { return g.members.indexOf(p.id) > -1 && catOn(p); }) : [];
    }
    function layout() {
      var d = dataOf(), st = S[cur], v = st.vb, mode = st.mode, W = wrap.clientWidth || 1;
      svgEl.setAttribute('viewBox', v.join(' '));
      items.forEach(function (it) {
        var pad = 15 * v[2] / W, inside = it.x >= v[0] + pad && it.x <= v[0] + v[2] - pad && it.y >= v[1] + pad && it.y <= v[1] + v[3] - pad, show = inside;
        it.el.style.left = ((it.x - v[0]) / v[2] * 100).toFixed(3) + '%'; it.el.style.top = ((it.y - v[1]) / v[3] * 100).toFixed(3) + '%';
        if (it.kind === 'cluster') { var n = memberPois('cluster').length; show = show && mode === 'all' && n > 0; it.el.querySelector('.am-n').textContent = n; }
        else if (it.kind === 'group') { var k = memberPois(it.data.id).length; show = show && mode === 'zoom' && k > 0; it.el.querySelector('.am-n').textContent = k; }
        else if (it.kind === 'poi') {
          var p = poi(it.data.id); show = show && catOn(p);
          if (p.cl && mode === 'all') show = false;
          if (p.g && mode === 'zoom') show = false;
          it.el.classList.toggle('am-lab', !p.cl || mode === 'zoom');
        }
        it.el.classList.toggle('am-hide', !show);
        var sp = st.sel && st.sel !== 'cluster' && poi(st.sel), on = st.sel && (it.data.id === st.sel || (it.kind === 'group' && sp && sp.g === it.data.id)); it.el.classList.toggle('sel', !!on);
      });
      // etiketter vælger side, så de ikke dækker hinanden
      var vis = items.filter(function (i) { return (i.kind === 'poi' || i.kind === 'group' || i.kind === 'cluster') && !i.el.classList.contains('am-hide'); }).map(function (i) { return { it: i, px: (i.x - v[0]) / v[2] * W, py: (i.y - v[1]) / v[3] * (wrap.clientHeight || 1) }; });
      vis.forEach(function (a) {
        var lw = ((a.it.data.aria || '').length * 6.6 + 24), edgeR = a.px + lw > W - 8, edgeL = a.px - lw < 8, rN = false, lN = false;
        vis.forEach(function (b) { if (b === a || Math.abs(b.py - a.py) > 24) return; var dx = b.px - a.px; if (dx > 0 && dx < 150) rN = true; if (dx < 0 && dx > -150) lN = true; });
        var rFree = !edgeR && !rN, lFree = !edgeL && !lN, side = rFree ? 'r' : lFree ? 'l' : 'h', selSide = !edgeR ? 'r' : 'l';
        a.it.el.classList.toggle('am-lab-l', side === 'l' || (side === 'h' && selSide === 'l'));
        a.it.el.classList.toggle('am-lab-h', side === 'h');
      });
      // målestok
      var mPerUnit = 1 / d.unitsPerM, unitsPerPx = v[2] / W, mPerPx = mPerUnit * unitsPerPx, pick = NICE[0];
      NICE.forEach(function (m) { if (m / mPerPx >= 60 && m / mPerPx <= 150 && pick === NICE[0]) pick = m; });
      if (pick === NICE[0]) NICE.forEach(function (m) { if (m / mPerPx <= 150) pick = m; });
      scaleEl.querySelector('i').style.width = (pick / mPerPx).toFixed(0) + 'px'; scaleEl.querySelector('span').textContent = pick >= 1000 ? (pick / 1000) + ' km' : pick + ' m';
      el.querySelectorAll('.am-bar [data-v]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.v === mode)); b.classList.toggle('on', b.dataset.v === mode); });
    }

    var anim = null;
    function go(mode, instant) {
      var st = S[cur], to = dataOf().views[mode].slice(), from = st.vb.slice(); st.mode = mode;
      if (anim) cancelAnimationFrame(anim);
      if (instant || matchMedia('(prefers-reduced-motion: reduce)').matches) { st.vb = to; layout(); return; }
      var t0 = performance.now(), dur = 480;
      (function step(t) {
        var k = Math.min(1, (t - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        st.vb = from.map(function (a, i) { return a + (to[i] - a) * e; }); layout();
        if (k < 1) anim = requestAnimationFrame(step); else anim = null;
      })(t0);
    }

    // ---------- panel ----------
    function panelEmpty() {
      var d = dataOf();
      panel.innerHTML = '<div class="slot"><b>' + MAPS[cur].head + '</b>' + verb + ' på et sted eller på ' + MAPS[cur].clusterName + ' for at zoome ind. Alle oplysninger er kildepåstande og skal verificeres.</div>' +
        '<div class="am-list">' + d.pois.filter(catOn).map(function (p) { return '<button type="button" data-poi="' + p.id + '"><b>' + esc(p.n) + '</b><span class="muted">' + CAT_NAME[cur + ':' + p.c] + '</span></button>'; }).join('') + '</div>';
    }
    function panelList(sel, title) {
      var mem = memberPois(sel);
      panel.innerHTML = '<div class="row-flex" style="margin-bottom:8px"><span class="pill-tag accent">' + mem.length + ' steder</span></div><h3 style="margin:0 0 10px">' + title + '</h3>' +
        '<div class="am-list">' + mem.map(function (p) { return '<button type="button" data-poi="' + p.id + '"><b>' + esc(p.n) + '</b><span class="muted">' + CAT_NAME[cur + ':' + p.c] + '</span></button>'; }).join('') + '</div>';
    }
    function panelPoi(p) {
      var dist = cur === 'close' ? ['Luftlinje fra lejligheden', 'ca. ' + km(p.air)] : (p.drive ? ['Køretid fra lejligheden', p.drive[1] + ' min (' + String(p.drive[0]).replace('.', ',') + ' km)'] : ['Fra lejligheden', 'ingen vej til toppen']);
      panel.innerHTML = '<div class="row-flex" style="margin-bottom:8px"><span class="pill-tag accent">' + CAT_NAME[cur + ':' + p.c] + '</span></div><h3 style="margin:0 0 10px">' + esc(p.n) + '</h3>' +
        '<div class="list-row" style="padding:8px 0"><span class="grow muted">' + dist[0] + '</span><span>' + dist[1] + '</span></div>' +
        (cur === 'wide' ? '<div class="faint" style="margin:-2px 0 4px">Køretid beregnet 3. oktober 2026 på OpenStreetMap-data (OSRM), skal verificeres.</div>' : '<div class="faint" style="margin:-2px 0 4px">Målt i luftlinje fra Skipsfjellvegen 52. Skal verificeres.</div>') +
        '<p class="plan-desc">' + esc(p.t) + '</p>' + (p.h ? '<p class="faint">' + esc(p.h) + '</p>' : '') +
        '<div class="row-flex">' + (p.l ? '<a class="btn btn-ghost btn-sm" href="' + p.l + '" target="_blank" rel="noopener">Officiel side <span aria-hidden="true">↗</span></a>' : '<span class="faint">Link kommer</span>') + '<span class="verify">position fra ' + esc(p.src) + ', skal verificeres</span></div>';
    }
    function select(sel, kind) {
      var st = S[cur]; st.sel = sel;
      if (kind === 'cluster') { go('zoom'); panelList('cluster', MAPS[cur].clusterName); }
      else if (kind === 'group') panelList(sel, MAPS[cur].groups[sel].name);
      else if (kind === 'poi') { var pp = poi(sel); if (pp.cl && st.mode === 'all') go('zoom'); panelPoi(pp); }
      else panelEmpty();
      layout();
      if (sel && matchMedia('(max-width: 860px)').matches) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function layersUi() {
      layersEl.innerHTML = MAPS[cur].cats.map(function (c) { return '<button type="button" class="filter" data-l="' + c.id + '" aria-pressed="' + (S[cur].cats.indexOf(c.id) > -1) + '">' + GL.icon(c.icon) + c.name + '</button>'; }).join('');
      el.querySelector('.am-bar [data-v="zoom"]').textContent = MAPS[cur].zoomLabel;
    }
    function showMap(k) {
      cur = k; layersUi(); build(); layout(); S[k].sel = null; panelEmpty();
      [].forEach.call(el.querySelectorAll('.am-switch .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.map === k)); });
    }

    // ---------- hændelser ----------
    var swEl = el.querySelector('.am-switch'); if (swEl) swEl.addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b && b.dataset.map !== cur) showMap(b.dataset.map); });
    layersEl.addEventListener('click', function (e) {
      var b = e.target.closest('.filter'); if (!b) return; var id = b.dataset.l, cs = S[cur].cats, i = cs.indexOf(id);
      if (i > -1) cs.splice(i, 1); else cs.push(id);
      b.setAttribute('aria-pressed', String(cs.indexOf(id) > -1));
      if (S[cur].sel && S[cur].sel !== 'cluster' && !MAPS[cur].groups[S[cur].sel] && poi(S[cur].sel) && !catOn(poi(S[cur].sel))) { S[cur].sel = null; panelEmpty(); }
      layout();
    });
    el.querySelector('.am-bar').addEventListener('click', function (e) { var b = e.target.closest('[data-v]'); if (b) { go(b.dataset.v); if (b.dataset.v === 'zoom' && !S[cur].sel) { S[cur].sel = 'cluster'; panelList('cluster', MAPS[cur].clusterName); layout(); } } });
    wrap.addEventListener('click', function (e) {
      var b = e.target.closest('.am-pin'); if (!b) return; var id = b.dataset.id;
      if (id === 'cluster') select('cluster', 'cluster'); else if (MAPS[cur].groups[id]) select(id, 'group'); else select(id, 'poi');
    });
    panel.addEventListener('click', function (e) { var b = e.target.closest('[data-poi]'); if (b) select(b.dataset.poi, 'poi'); });
    window.addEventListener('resize', function () { layout(); });
    el.addEventListener('click', function (e) { if (e.target.closest('a[aria-disabled="true"], .subnav a')) e.preventDefault(); });

    showMap(fixed || 'close');
  }


  // ---------- lister (afstande og oplevelser) ----------
  function listRender(el) {
    if (!window.GL || !GL.AREAMAP) return;
    var kind = el.getAttribute('data-area-list'), style = el.getAttribute('data-style') || 'table', pois = GL.AREAMAP[kind].pois.slice();
    var key = function (p) { return kind === 'close' ? p.air : (p.drive ? p.drive[1] : 9999); };
    pois.sort(function (a, b) { return key(a) - key(b); });
    var dist = function (p) { return kind === 'close' ? 'ca. ' + km(p.air) : (p.drive ? p.drive[1] + ' min (' + String(p.drive[0]).replace('.', ',') + ' km)' : 'til fods eller med Gaustabanen'); };
    var note = kind === 'close' ? 'Afstand er luftlinje fra Skipsfjellvegen 52 (OpenStreetMap-data, 3. oktober 2026). Alle steder og oplysninger er kildepåstande og skal verificeres.' : 'Køretid fra lejligheden i bil, beregnet 3. oktober 2026 på OpenStreetMap-data (OSRM). Alle steder og oplysninger er kildepåstande og skal verificeres.';
    if (style === 'cards') {
      el.innerHTML = '<div class="grid grid-3">' + pois.map(function (p) {
        return '<div class="card"><div class="kicker">' + CAT_NAME[kind + ':' + p.c] + '</div><h3>' + esc(p.n) + '</h3><p class="muted">' + esc(p.t) + '</p>' +
          '<div class="list-row" style="padding:8px 0"><span class="grow muted">' + (kind === 'wide' ? 'Køretid' : 'Afstand') + '</span><span>' + dist(p) + '</span></div>' +
          '<div class="row-flex">' + (p.l ? '<a class="btn btn-ghost btn-sm" href="' + p.l + '" target="_blank" rel="noopener">Officiel side <span aria-hidden="true">↗</span></a>' : '<span class="faint">Link kommer</span>') + '</div></div>';
      }).join('') + '</div><p class="faint" style="margin-top:12px">' + note + '</p>';
    } else {
      el.innerHTML = '<div class="table-wrap"><table class="table"><tr><th>Sted</th><th>Type</th><th class="r">Afstand</th><th></th></tr>' + pois.map(function (p) {
        return '<tr><td><b>' + esc(p.n) + '</b></td><td class="muted">' + CAT_NAME[kind + ':' + p.c] + '</td><td class="r num">' + dist(p) + '</td><td class="r">' + (p.l ? '<a href="' + p.l + '" target="_blank" rel="noopener" aria-label="Officiel side for ' + esc(p.n) + '">link <span aria-hidden="true">↗</span></a>' : '') + '</td></tr>';
      }).join('') + '</table></div><p class="faint" style="margin-top:10px">' + note + '</p>';
    }
  }

  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-area-hub]'), render); [].forEach.call(document.querySelectorAll('[data-area-list]'), listRender); });
})();
