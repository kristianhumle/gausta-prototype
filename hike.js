/* Vandremuligheder (forår, sommer, efterår): turkort med links, kort med ruter og oversigt over alle fundne ruter.
   Data: GL.AREAMAP.hike (area-hike-data.js, genereret af tools/build-map.py). Alle tal og tekster er kildepåstande og skal verificeres.
   Tekster er hentet fra de linkede kilder (ut.no, Visit Rjukan, Gausta.com) som standardtekst og erstattes senere med egen tekst. */
(function () {
  'use strict';
  var GRADE = { 'let': ['Let', '#2e7d4f'], 'middel': ['Middel', '#2f6fb0'], 'krævende': ['Krævende', '#b03a2e'] };
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function km(m) { return (m / 1000).toFixed(1).replace('.', ',') + ' km'; }
  function chip(g) { var x = GRADE[g]; return x ? '<span class="hk-grade" style="--c:' + x[1] + '">' + x[0] + '</span>' : ''; }
  // højst to links pr. tur, og ikke Gausta.com (14. oktober 2026, G79)
  function links(r) { return (r.links || []).filter(function (l) { return !/^Gausta\.com/i.test(l.t); }).slice(0, 2).map(function (l) { return '<a class="btn btn-ghost btn-sm" href="' + esc(l.u) + '" target="_blank" rel="noopener">' + esc(l.t.replace(/\s*\(.*\)\s*$/, '')) + ' <span aria-hidden="true">↗</span></a>'; }).join(''); }
  function fromApt(r) {
    var f = r.fromApt; if (!f) return '';
    var s = 'ca. ' + (f.airM < 1000 ? Math.round(f.airM / 10) * 10 + ' m' : km(f.airM)) + ' i luftlinje';
    if (f.drive) s += ', ' + String(f.drive[0]).replace('.', ',') + ' km (ca. ' + f.drive[1] + ' min) i bil';
    return s;
  }
  function official(r) { return r.official ? '<a href="' + esc(r.official.u) + '" target="_blank" rel="noopener">' + esc(r.official.t) + ' <span aria-hidden="true">↗</span></a>' : '<span class="faint">Ingen fundet</span>'; }
  function facts(r) {
    var rows = [['Afstand', r.dist], ['Stigning', r.ascent], ['Tid', r.time], ['Start', r.start], ['Fra lejligheden', fromApt(r)]];
    return '<dl class="hk-facts">' + rows.filter(function (x) { return x[1] && x[1] !== 'ikke oplyst'; }).map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + esc(x[1]) + '</dd></div>'; }).join('') + '</dl>';
  }
  /* Billeder og videoer pr. tur (r.imgs). Ejerens egne ({own: true}) har en tekst som kilde og et fuldt billede (f) til lysboksen;
     lånte billeder har kilde og link. Video: {v: {src, poster, thumb, dur}} (se GL.Vid i app.js). */
  function capOf(x) { return x.own ? esc(x.k) : 'Foto: <a href="' + esc(x.l) + '" target="_blank" rel="noopener">' + esc(x.k) + '</a>'; }
  function gallery(r) {
    var im = r.imgs; if (!im || !im.length) return '';
    var v0 = im[0].v ? ' data-vsrc="' + esc(im[0].v.src) + '" data-vposter="' + esc(im[0].v.poster) + '" data-vdur="' + esc(im[0].v.dur || '') + '"' : '';
    return '<figure class="hk-fig" data-g="' + esc(r.id) + '"' + v0 + '><img src="' + esc(im[0].u) + '" alt="' + esc(im[0].c || r.name) + '" loading="lazy" decoding="async" referrerpolicy="no-referrer"' + (im[0].f ? ' data-zoom="0"' : '') + '><figcaption>' + capOf(im[0]) + '</figcaption>' +
      (im.length > 1 ? '<div class="hk-thumbs">' + im.map(function (x, i) { return '<button type="button" class="hk-thumb' + (i ? '' : ' on') + '" data-i="' + i + '" aria-label="' + esc(x.v ? 'Vis video: ' + (x.c || '') : 'Vis billede ' + (i + 1)) + '"><img src="' + esc(x.s || x.u) + '" alt="" loading="lazy" referrerpolicy="no-referrer">' + (x.v ? '<span class="pt-play" aria-hidden="true">&#9654;</span>' : '') + '</button>'; }).join('') + '</div>' : '') + '</figure>';
  }
  document.addEventListener('click', function (e) {
    var z = e.target.closest('.hk-fig > img[data-zoom]');
    if (z) { // klik på et eget billede: fuld visning (lysboksen) med bladring mellem tur-ens billeder og videoer
      var fig0 = z.closest('.hk-fig'), d0 = D(), r0 = d0 && d0.routes.filter(function (x) { return x.id === fig0.getAttribute('data-g'); })[0];
      if (r0) GL.Vid.gallery(r0.imgs.map(function (x) { return x.v ? { href: x.v.poster, video: x.v.src, cap: x.c } : { href: x.f || x.u, cap: x.c }; }), +z.getAttribute('data-zoom'));
      return;
    }
    var b = e.target.closest('.hk-thumb'); if (!b) return;
    var fig = b.closest('.hk-fig'), d = D(), r = d && d.routes.filter(function (x) { return x.id === fig.getAttribute('data-g'); })[0]; if (!r) return;
    var x = r.imgs[+b.dataset.i], img = fig.querySelector(':scope > img'); img.src = x.u; img.alt = x.c || r.name;
    if (x.f && !x.v) img.setAttribute('data-zoom', b.dataset.i); else img.removeAttribute('data-zoom');
    GL.Vid.set(fig, x.v || null);
    fig.querySelector('figcaption').innerHTML = capOf(x);
    [].forEach.call(fig.querySelectorAll('.hk-thumb'), function (t) { t.classList.toggle('on', t === b); });
  });
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
          return '<article class="card hk-card"><div class="hk-card-h"><span class="hk-grp">' + esc(r.group) + '</span>' + chip(r.grade) + '</div><h3>' + esc(r.name) + '</h3>' + gallery(r) + facts(r) +
            (r.text ? '<p class="muted">' + esc(r.text) + '</p>' : '') +
            '<div class="row-flex hk-links">' + links(r) + '</div>' + (r.note ? '<p class="faint hk-note">' + esc(r.note) + '</p>' : '') + '</article>'; }).join('') + '</div>';
    }
    el.addEventListener('click', function (e) { var b = e.target.closest('[data-g]'); if (b) { f = b.dataset.g; draw(); } });
    draw();
  }

  /* ---------- Version 2: kort med ruter ---------- */
  function map(el) {
    var d = D(); if (!d) return;
    var routes = d.routes.filter(function (r) { return r.status === 'valgt' && r.d; }), sel = routes[0].id, vb = [0, 0, d.w, d.h], curView = 'alle';
    var VIEWS = { alle: { cx: d.w / 2, cy: d.h / 2, w: 'cover' } };
    function view(name, x, y, w) { VIEWS[name] = { cx: x, cy: y, w: w }; }
    // Udsnittet følger kortets faktiske format (kortet fylder hele højden ved siden af panelet)
    function box(v) {
      var W = wrap.clientWidth || 800, H = wrap.clientHeight || 468, w = v.w;
      if (w === 'cover') w = (W / H >= d.w / d.h) ? d.w : Math.max(d.h * W / H, d.w * 0.88);   // hele kortet: næsten hele bredden (beskærer højst 6 % i hver side) og så lidt tom kant som muligt
      var h = w * H / W; return [v.cx - w / 2, v.cy - h / 2, w, h];
    }
    (d.places || []).forEach(function (p) { if (p[0] === 'Stavsro') view('gaustatoppen', (d.peaks[0][1] + p[1]) / 2, (d.peaks[0][2] + p[2]) / 2, 330); if (p[0] === 'Gaustablikk') view('gaustablikk', p[1], p[2], 260); if (p[0] === 'Rjukan') view('rjukan', p[1], p[2], 220); });
    el.innerHTML = '<div class="hk-map-top"><div class="hk-legend" aria-label="Forklaring af farver"><span class="hk-legend-t">Sværhedsgrad:</span>' + ['let', 'middel', 'krævende'].map(function (g) { return '<span class="hk-legend-i"><i style="background:' + GRADE[g][1] + '"></i>' + GRADE[g][0] + '</span>'; }).join('') + '<span class="hk-legend-n">Farven på knapper og rutelinjer viser sværhedsgraden (vores vurdering ud fra kilderne).</span></div><div class="row-flex hk-chips" role="group" aria-label="Vælg rute"></div></div>' +
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
    // billeder og videoer med GPS på den valgte tur: små markører, som åbner mediet i fuld visning
    function mediaItems(r) { return (r.imgs || []).map(function (x) { return x.v ? { href: x.v.poster, video: x.v.src, cap: x.c } : { href: x.f || x.u, cap: x.c }; }); }
    function mediaPins(r) {
      if (!r || !r.imgs) return '';
      return r.imgs.map(function (x, i) {
        if (!x.xy) return '';
        return '<button type="button" class="hk-ph' + (x.v ? ' hk-ph-v' : '') + '" data-ph="' + i + '" data-x="' + x.xy[0] + '" data-y="' + x.xy[1] + '" aria-label="' + esc((x.v ? 'Video: ' : 'Billede: ') + (x.c || '')) + '" title="' + esc(x.c || '') + '">' +
          (x.v ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2" fill="#fff"/></svg>') + '</button>';
      }).join('');
    }
    function labels() {
      var svg = wrap.querySelector('svg'), g = svg.querySelector('.hk-lbls'), k = vb[2] / (wrap.clientWidth || 800), fs = 11.5 * k, h = '';
      var put = function (t, x, y, cls) { if (x > vb[0] && x < vb[0] + vb[2] && y > vb[1] && y < vb[1] + vb[3]) h += '<text class="' + cls + '" x="' + x + '" y="' + y + '" font-size="' + fs + '" stroke-width="' + (fs * .28) + '">' + esc(t) + '</text>'; };
      (d.peaks || []).forEach(function (p) { h += '<path class="hk-peak" d="M' + (p[1] - 4 * k) + ' ' + (p[2] + 3 * k) + 'L' + p[1] + ' ' + (p[2] - 5 * k) + 'L' + (p[1] + 4 * k) + ' ' + (p[2] + 3 * k) + 'Z"/>'; put(p[0] + ' ' + p[3] + ' m', p[1] + 7 * k, p[2] + 3 * k, 'hk-t hk-t-peak'); });
      (d.places || []).forEach(function (p) { put(p[0], p[1] + 6 * k, p[2] - 5 * k, 'hk-t'); });
      (d.names || []).forEach(function (n) { put(n[0], n[1], n[2], 'hk-t hk-t-w'); });
      g.innerHTML = h;
      var ap = wrap.querySelector('.hk-apt'); if (ap && d.apt) { var inside = d.apt[0] > vb[0] && d.apt[0] < vb[0] + vb[2] && d.apt[1] > vb[1] && d.apt[1] < vb[1] + vb[3]; ap.style.display = inside ? '' : 'none'; ap.style.left = ((d.apt[0] - vb[0]) / vb[2] * 100).toFixed(2) + '%'; ap.style.top = ((d.apt[1] - vb[1]) / vb[3] * 100).toFixed(2) + '%'; }
      [].forEach.call(wrap.querySelectorAll('.hk-ph'), function (b) { var x = +b.dataset.x, y = +b.dataset.y, ins = x > vb[0] && x < vb[0] + vb[2] && y > vb[1] && y < vb[1] + vb[3]; b.style.display = ins ? '' : 'none'; b.style.left = ((x - vb[0]) / vb[2] * 100).toFixed(2) + '%'; b.style.top = ((y - vb[1]) / vb[3] * 100).toFixed(2) + '%'; });
      var st = svg.querySelector('.hk-start'); if (st) { st.setAttribute('r', 5 * k); st.setAttribute('stroke-width', 2 * k); }
      [].forEach.call(svg.querySelectorAll('.hk-line'), function (p) { p.style.strokeWidth = (svg.querySelector('.hk-route.on .hk-line') === p ? 4.5 : 3) + 'px'; });
    }
    function panelFor(r) {
      panel.innerHTML = '<div class="hk-card-h"><span class="hk-grp">' + esc(r.group) + '</span>' + chip(r.grade) + '</div><h3 style="margin:4px 0 8px">' + esc(r.name) + '</h3>' + gallery(r) + facts(r) + (r.text ? '<p class="muted hk-desc">' + esc(r.text) + '</p>' : '') +
        '<div class="row-flex hk-links">' + links(r) + '</div>';
      panel.scrollTop = 0;
    }
    function draw() {
      vb = box(VIEWS[curView]); wrap.innerHTML = base(); labels();
      chips.innerHTML = routes.map(function (r) { var col = (GRADE[r.grade] || ['', '#555'])[1]; return '<button type="button" class="filter hk-chip" data-r="' + r.id + '" aria-pressed="' + (r.id === sel) + '"><i style="background:' + col + '"></i>' + esc(r.name.replace(/ \(.*\)$/, '')) + '</button>'; }).join('');
    }
    // Zoomer ind på den valgte rute, så også korte ture (fx de lokale gåture) kan ses
    function routeView(r) {
      var n = r.d.match(/-?\d+(?:\.\d+)?/g).map(Number), x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (var i = 0; i + 1 < n.length; i += 2) { x0 = Math.min(x0, n[i]); x1 = Math.max(x1, n[i]); y0 = Math.min(y0, n[i + 1]); y1 = Math.max(y1, n[i + 1]); }
      var W = wrap.clientWidth || 800, H = wrap.clientHeight || 468;
      return { cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, w: Math.min(d.w, Math.max((x1 - x0) * 1.3, (y1 - y0) * 1.3 * W / H, 40)) };
    }
    function pick(id, zoom) {
      sel = id; var r = routes.filter(function (x) { return x.id === id; })[0]; panelFor(r); draw();
      if (zoom) { VIEWS._route = routeView(r); go('_route'); }
    }
    var anim = null;
    function go(name, instant) {
      var to = box(VIEWS[name]), from = vb.slice(), t0 = performance.now(), svg = wrap.querySelector('svg');
      curView = name;
      [].forEach.call(el.querySelectorAll('[data-view]'), function (b) { b.classList.toggle('on', b.dataset.view === name); });
      if (anim) cancelAnimationFrame(anim);
      if (instant || matchMedia('(prefers-reduced-motion: reduce)').matches) { vb = to.slice(); svg.setAttribute('viewBox', vb.join(' ')); labels(); return; }
      (function step(t) { var k = Math.min(1, (t - t0) / 450), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; vb = from.map(function (a, i) { return a + (to[i] - a) * e; }); svg.setAttribute('viewBox', vb.join(' ')); labels(); if (k < 1) anim = requestAnimationFrame(step); else anim = null; })(t0);
    }
    el.addEventListener('click', function (e) {
      var ph = e.target.closest('.hk-ph');
      if (ph) { var rr = routes.filter(function (x) { return x.id === sel; })[0]; GL.Vid.gallery(mediaItems(rr), +ph.dataset.ph); return; }
      var c = e.target.closest('[data-r]'); if (c) { pick(c.dataset.r, true); return; }
      var v = e.target.closest('[data-view]'); if (v) go(v.dataset.view);
    });
    if (window.ResizeObserver) new ResizeObserver(function () { var s = wrap.querySelector('svg'); if (s && !anim) { vb = box(VIEWS[curView]); s.setAttribute('viewBox', vb.join(' ')); labels(); } }).observe(wrap);
    var deep = el.hasAttribute('data-deeplink');
    function fromHash() { var h = decodeURIComponent((location.hash || '').slice(1)); return routes.some(function (r) { return r.id === h; }) ? h : null; }
    if (deep) {
      window.addEventListener('hashchange', function () { var h = fromHash(); if (h && h !== sel) { pick(h, true); var s = el.closest('section') || el; s.scrollIntoView({ block: 'start', behavior: 'smooth' }); } });
      el.addEventListener('click', function (e) { var c = e.target.closest('[data-r]'); if (c && history.replaceState) history.replaceState(null, '', '#' + c.dataset.r); });
    }
    var h0 = deep && fromHash();
    pick(h0 || sel, !!h0);
    if (h0) setTimeout(function () { var s = el.closest('section') || el; s.scrollIntoView({ block: 'start' }); }, 400);   // dybt link: gå til kortet
    var first = el.querySelector('[data-view="alle"]'); if (first && !h0) first.classList.add('on');
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
    var page = el.getAttribute('data-mode') === 'page';
    function upd() {
      var w = document.documentElement.getAttribute('data-season') === 'winter';
      if (!w) { el.innerHTML = ''; return; }
      el.innerHTML = page
        ? '<div class="notice info"><b>Vinter:</b> De fleste ture er dækket af sne og is og passer ikke som almindelige vandreture nu. Turene og kortet kan du stadig se her. Om vinteren er der langrend og pister lige ved lejligheden: <a href="ski-in-ski-out.html">se Ski-in/ski-out</a>.</div>'
        : '<div class="notice info"><b>Vinter:</b> Vandring-sektionen på forsiden vises kun i forår, sommer og efterår. Siden Vandring og menupunktet er der hele året, og om vinteren henviser siden til Ski-in/ski-out. Her er det vist, så du kan vurdere det.</div>';
    }
    upd(); new MutationObserver(upd).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
  }

  /* ---------- Samlet teaser med faner: Ski-in / ski-out, Vandring, Oplevelser (forslag 12. oktober 2026) ---------- */
  var OPLEV_IMG = {
    stova: 'https://ik.imagekit.io/spotlio/fetch/tr:w-800/https://public-assets.spotliodata.com/be48c932-b0f4-43c0-9315-24fb08dd1697.jpg',
    vemork: 'https://www.nia.no/wp-content/uploads/2022/03/Vemork_sommer2013.jpg'
  };
  function tcard(x) {
    var src = x.srcBase ? x.srcBase + '-m.webp' : x.img;
    return '<a class="card hk-card hk-teaser" href="' + x.href + '"><figure class="hk-fig"><img src="' + esc(src) + '"' + (x.srcBase ? ' srcset="' + x.srcBase + '-s.webp 480w, ' + x.srcBase + '-m.webp 900w, ' + x.srcBase + '.webp 1600w" sizes="(max-width: 860px) 100vw, 380px"' : '') + ' alt="' + esc(x.alt) + '" loading="lazy" decoding="async" referrerpolicy="no-referrer"><figcaption>' + esc(x.cap) + '</figcaption></figure>' +
      '<div class="hk-card-h"><span class="hk-grp">' + esc(x.grp) + '</span>' + (x.grade ? chip(x.grade) : '') + '</div><h3>' + esc(x.h) + '</h3><p class="muted">' + esc(x.t) + '</p><span class="hk-more">' + esc(x.more) + ' <span aria-hidden="true">→</span></span></a>';
  }
  function tabData() {
    var d = D(), routes = d ? d.routes : [];
    var pick = function (id) { return routes.filter(function (r) { return r.id === id; })[0]; };
    var hike = ['skipsfjell', 'kvitaavatn-rundt', 'stavsro'].map(pick).filter(Boolean).map(function (r) {
      var im = r.imgs && r.imgs[0];
      return { h: r.name, grp: r.group, grade: r.grade, img: im ? im.u : '', alt: im ? (im.c || r.name) : r.name, cap: im ? (im.own ? im.k : 'Foto: ' + im.k) : '', t: [r.dist, r.time].filter(function (x) { return x && x.indexOf('ikke oplyst') < 0; }).join(' · '), href: 'vandring.html#' + r.id, more: 'Se turen på kortet' };
    });
    return [
      { id: 'ski', label: 'Ski-in / ski-out', icon: 'snow', one: 'Fra døren til løjpe og pist', intro: 'Fra døren til løjpe og pist.', all: ['ski-in-ski-out.html', 'Se ski-in / ski-out'], cards: [
        { h: 'Langrend', grp: 'Cirka 50 til 100 m', srcBase: 'assets/web/ski/langrend-skilt', alt: 'Skiltestolpe med løjper og løjpekort ved starten', cap: 'Foto: ejerens egne fotos, oktober 2026', t: 'Fra døren til langrendsløjpen. Skiltet viser blandt andet Skipsfjell rundt, Kvitåvatn og Langetjønn.', href: 'ski-in-ski-out.html#ski-in-out', more: 'Se langrend' },
        { h: 'Slalom', grp: 'Cirka 50 til 100 m', srcBase: 'assets/web/ski/slalom-skilt', alt: 'Grønt skilt med nr. 3 fra Gausta Skisenter ved stien', cap: 'Foto: ejerens egne fotos, oktober 2026', t: 'Fra døren til slalompisten. Her kommer du på pisten.', href: 'ski-in-ski-out.html#ski-in-out', more: 'Se slalom' },
        { h: 'Se kortene', grp: 'Løjper, pister og fælleshus', img: 'assets/web/kort/ski-in-out-m.webp', alt: 'Luftfoto af området omkring lejligheden', cap: 'Prototypebillede (luftfoto)', t: 'Kort over området med afstande fra lejligheden. Se de store kort.', href: 'ski-in-ski-out.html#ski-in-out', more: 'Åbn kortene' }] },
      { id: 'vandring', label: 'Vandring', icon: 'mountain', one: 'Til fods fra døren', intro: 'Til fods fra døren.', all: ['vandring.html', 'Se alle ture'], cards: hike },
      { id: 'oplev', label: 'Oplevelser', icon: 'pin', one: 'Tæt på, oplevelser og kalender', intro: 'Tæt på, oplevelser og kalender.', all: ['omraadet.html', 'Se Gausta og omegn'], cards: [
        { h: 'Tæt på', grp: 'Mad, indkøb og udstyr', img: OPLEV_IMG.stova, alt: 'Restaurant ved Gaustablikk', cap: 'Foto: gausta.com', t: 'Restauranter, butikker, skiudlejning og aktiviteter på Gausta, og det praktiske i Rjukan.', href: 'taet-paa.html', more: 'Se Tæt på' },
        { h: 'Oplevelser', grp: 'Rjukan og omegn', img: OPLEV_IMG.vemork, alt: 'Vemork ved Rjukan', cap: 'Foto: nia.no', t: 'Vemork, Rjukanbadet, Gaustatoppen og mere, med køretid fra lejligheden.', href: 'oplevelser.html', more: 'Se oplevelser' },
        { h: 'Kalender', grp: 'Events', srcBase: 'assets/web/omraadet/omraadet-02', alt: 'Dal og sø ved Gausta', cap: 'Prototypebillede', t: 'Kommende events og aktiviteter på Gausta og i Rjukan, med ugevalg.', href: 'omraadet.html#events', more: 'Se kalenderen' }] }
    ];
  }
  function tabsEl(el) {
    var variant = el.getAttribute('data-variant') || 'pills', ALL = tabData(), cur = null;
    function winter() { return document.documentElement.getAttribute('data-season') === 'winter'; }
    function list() { return ALL; } // alle faner er altid synlige (G76); årstiden vælger kun standardfanen
    function dflt() { return winter() ? 'ski' : 'vandring'; }
    function shell() {
      var L = list(), tabsHtml;
      if (variant === 'cards') {
        tabsHtml = '<div class="am-cardsw tz-sel" role="tablist" aria-label="Vælg emne">' + L.map(function (t) { return '<button type="button" role="tab" class="am-cardw" data-tab="' + t.id + '" aria-selected="false" aria-pressed="false"><span class="am-cardw-ico">' + GL.icon(t.icon) + '</span><span class="am-cardw-t"><b>' + esc(t.label) + '</b><small>' + esc(t.one) + '</small></span></button>'; }).join('') + '</div>';
      } else if (variant === 'frame') {
        tabsHtml = '<div class="am-tabs tz-ftabs" role="tablist" aria-label="Vælg emne">' + L.map(function (t) { return '<button type="button" role="tab" class="am-tab" data-tab="' + t.id + '" aria-selected="false" tabindex="-1">' + GL.icon(t.icon) + ' ' + esc(t.label) + '</button>'; }).join('') + '</div>';
      } else {
        tabsHtml = '<div class="row-flex tz-pills" role="tablist" aria-label="Vælg emne">' + L.map(function (t) { return '<button type="button" role="tab" class="filter" data-tab="' + t.id + '" aria-pressed="false" aria-selected="false">' + GL.icon(t.icon) + ' ' + esc(t.label) + '</button>'; }).join('') + '</div>';
      }
      el.innerHTML = '<div class="tz tz-' + variant + '"><div class="tz-head"><div><p class="eyebrow">Gausta og omegn</p><h2 class="tz-h" data-tz-intro></h2></div><a class="btn btn-ghost" data-tz-all href="#"></a></div>' + tabsHtml + '<div class="tz-panel" role="tabpanel"></div></div>';
      if (variant === 'frame') { var f = el.querySelector('.tz'); f.classList.add('am-frame'); }
    }
    function show(id) {
      var L = list(), t = L.filter(function (x) { return x.id === id; })[0] || L[0]; cur = t.id;
      [].forEach.call(el.querySelectorAll('[data-tab]'), function (b) { var on = b.dataset.tab === cur; b.setAttribute('aria-selected', String(on)); if (b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', String(on)); b.tabIndex = on ? 0 : -1; });
      el.querySelector('[data-tz-intro]').textContent = t.intro;
      var a = el.querySelector('[data-tz-all]'); a.setAttribute('href', t.all[0]); a.textContent = t.all[1];
      el.querySelector('.tz-panel').innerHTML = '<div class="hk-cards">' + t.cards.map(tcard).join('') + '</div>';
    }
    shell(); show(dflt());
    el.addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (b) show(b.dataset.tab); });
    el.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var L = list(), i = L.map(function (t) { return t.id; }).indexOf(cur), n = L[(i + (e.key === 'ArrowRight' ? 1 : L.length - 1)) % L.length];
      show(n.id); var b = el.querySelector('[data-tab="' + n.id + '"]'); if (b) b.focus(); e.preventDefault();
    });
    new MutationObserver(function () { show(dflt()); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
  }

  document.addEventListener('gl:ready', function () {
    [].forEach.call(document.querySelectorAll('[data-hike]'), function (el) { var k = el.getAttribute('data-hike'); ({ cards: cards, map: map, table: table, season: season, tabs: tabsEl })[k](el); });
  });
})();
