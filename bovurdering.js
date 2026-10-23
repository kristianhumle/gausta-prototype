/* Vurdering af B102 (C10). Værdien i NOK følger udviklingen i gennemsnitlig m²-pris for solgte Lodge-lejligheder,
   værdien i DKK følger desuden NOK/DKK-kursen. Opdeling som i ejerens regneark "Gaustakøb":
   prisgevinst = (V - A) x k0, valutagevinst = A x (k - k0), krydseffekt = (V - A) x (k - k0). Sum = V x k - A x k0. */
(function () {
  'use strict';
  var D = window.BOVURD;
  var MON = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  function nf(n, d) { return (n < 0 ? '−' : '') + Math.abs(n).toLocaleString('da-DK', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function sg(n, d) { return (n > 0 ? '+' : '') + nf(n, d); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function fdate(s) { var d = parse(s); return d.getDate() + '. ' + MON[d.getMonth()] + ' ' + d.getFullYear(); }
  function addMonths(s, m) { var d = parse(s); d.setMonth(d.getMonth() + m); return iso(d); }
  var lastReal = D.fx[D.fx.length - 1][0];

  function render(el) {
    var st = { grundlag: 'eks', vindue: 12, udvalg: 'alle', fiktiv: true, idx: null };

    function fxAt(date) {
      var src = D.fx.concat(st.fiktiv ? D.fxFiktiv : []), v = null;
      src.forEach(function (p) { if (p[0] <= date) v = p; });
      return v;
    }
    function sales() { return D.sales.filter(function (s) { return (st.fiktiv || s.src !== 'fiktiv') && (st.udvalg === 'alle' || s.aar === 2008); }); }
    function m2(s) { return s.pris / s.m2; }
    function window_(date) {
      var all = sales(), win = st.vindue, list;
      do { var from = addMonths(date, -win); list = all.filter(function (s) { return s.dato > from && s.dato <= date; }); if (list.length >= 2) break; win += 12; } while (win <= 60);
      var v = list.map(m2);
      return { list: list, win: win, ext: win !== st.vindue, n: list.length, avg: v.reduce(function (a, b) { return a + b; }, 0) / (v.length || 1), min: Math.min.apply(null, v), max: Math.max.apply(null, v) };
    }
    function points() {
      var p = [D.basis.dato, lastReal];
      if (st.fiktiv) D.fxFiktiv.forEach(function (f) { p.push(f[0]); });
      return p;
    }
    function calc(date) {
      var A = st.grundlag === 'eks' ? D.basis.nokEksLoesoere : D.basis.nokInklLoesoere, w0 = window_(D.basis.dato), w = window_(date),
        k0 = D.basis.kurs0 / 100, fx = fxAt(date), k = fx[1] / 100, V = A * w.avg / w0.avg;
      return { date: date, A: A, w0: w0, w: w, k0: k0, k: k, fx: fx, V: V, Vlo: A * w.min / w0.avg, Vhi: A * w.max / w0.avg,
        pris: (V - A) * k0, valuta: A * (k - k0), kryds: (V - A) * (k - k0), total: V * k - A * k0, fiktiv: date > lastReal };
    }

    function lineChart(opts) {
      var W = 900, H = 230, L = 52, R = 14, T = 14, B = 28, xs = opts.x0, xe = opts.x1, t0 = parse(xs).getTime(), t1 = parse(xe).getTime();
      var ys = [], h = '';
      opts.series.forEach(function (s) { s.pts.forEach(function (p) { ys.push(p[1]); }); });
      (opts.hlines || []).forEach(function (l) { ys.push(l.y); });
      var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys), pad = (y1 - y0) * .12 || 1; y0 -= pad; y1 += pad;
      function X(d) { return L + (parse(d).getTime() - t0) / (t1 - t0) * (W - L - R); }
      function Y(v) { return T + (1 - (v - y0) / (y1 - y0)) * (H - T - B); }
      for (var i = 0; i <= 3; i++) { var v = y0 + (y1 - y0) * i / 3; h += '<line class="br-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/><text class="br-ax" x="' + (L - 6) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + opts.fmt(v) + '</text>'; }
      var d = parse(xs); d.setDate(1); while (d.getTime() <= t1) { if (d.getTime() >= t0 && (d.getMonth() % 3 === 0)) h += '<text class="br-ax" x="' + X(iso(d)) + '" y="' + (H - 8) + '" text-anchor="middle">' + MON[d.getMonth()] + ' ' + String(d.getFullYear()).slice(2) + '</text>'; d.setMonth(d.getMonth() + 1); }
      (opts.hlines || []).forEach(function (l) { h += '<line class="bv-h" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(l.y) + '" y2="' + Y(l.y) + '"/><text class="bv-hl" x="' + (W - R) + '" y="' + (Y(l.y) - 5) + '" text-anchor="end">' + l.label + '</text>'; });
      if (opts.mark) h += '<line class="bv-mark" x1="' + X(opts.mark) + '" x2="' + X(opts.mark) + '" y1="' + T + '" y2="' + (H - B) + '"/>';
      opts.series.forEach(function (s) {
        if (s.dots) s.pts.forEach(function (p) { h += '<circle class="bv-dot ' + (p[2] ? 'fik' : '') + '" cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="4"><title>' + p[3] + '</title></circle>'; });
        else if (s.pts.length) h += '<polyline class="bv-line ' + (s.cls || '') + '" points="' + s.pts.map(function (p) { return X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).join(' ') + '"/>';
      });
      return '<svg class="br-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + opts.label + '">' + h + '</svg>';
    }

    function draw() {
      var P = points(); if (st.idx === null || st.idx >= P.length) st.idx = 1;
      var c = calc(P[st.idx]), x1 = P[P.length - 1] > lastReal ? P[P.length - 1] : '2026-12-31';
      var fxPts = D.fx.filter(function (p) { return p[0] >= '2026-01-01'; }).map(function (p) { return [p[0], p[1]]; });
      var fxFik = st.fiktiv ? [[lastReal, D.fx[D.fx.length - 1][1]]].concat(D.fxFiktiv) : [];
      var S = sales().filter(function (s) { return s.dato >= '2024-01-01'; });
      var avgLine = []; for (var mi = 0; mi < 48; mi++) { var de = iso(new Date(2024, mi + 1, 0)); if (de > x1) break; var w = window_(de); if (w.n) avgLine.push([de, w.avg]); }
      var gains = P.map(calc);

      el.innerHTML =
        '<div class="br-sync"><span class="dot good"></span><span><b>Grundlag:</b> regnearket "Gaustakøb" (anskaffelse ' + fdate(D.basis.dato) + ', kurs ' + nf(D.basis.kurs0, 4) + ') · <b>kurs:</b> ' + D.fxSource + ', senest ' + fdate(lastReal) + ' · <b>handler:</b> Gaustatoppen Lodge fra vidensbasen (S3, S17)</span>' + (st.fiktiv ? '<span class="pill-tag bad">fiktivt forløb efter ' + fdate(lastReal) + '</span>' : '') + '</div>' +
        '<div class="br-controls"><div class="plan-pills" role="group" aria-label="Grundlag" style="margin:0">' +
        '<button type="button" class="filter" data-k="grundlag" data-v="eks" aria-pressed="' + (st.grundlag === 'eks') + '">Ekskl. løsøre</button><button type="button" class="filter" data-k="grundlag" data-v="inkl" aria-pressed="' + (st.grundlag === 'inkl') + '">Inkl. løsøre</button></div>' +
        '<div class="plan-pills" role="group" aria-label="Handler" style="margin:0"><button type="button" class="filter" data-k="vindue" data-v="12" aria-pressed="' + (st.vindue === 12) + '">Seneste 12 mdr.</button><button type="button" class="filter" data-k="vindue" data-v="24" aria-pressed="' + (st.vindue === 24) + '">Seneste 24 mdr.</button>' +
        '<button type="button" class="filter" data-k="udvalg" data-v="alle" aria-pressed="' + (st.udvalg === 'alle') + '">Alle Lodge-handler</button><button type="button" class="filter" data-k="udvalg" data-v="2008" aria-pressed="' + (st.udvalg === '2008') + '">Kun byggeår 2008</button>' +
        '<button type="button" class="filter" data-k="fiktiv" aria-pressed="' + st.fiktiv + '">Vis fiktivt forløb</button></div></div>' +
        '<div class="bv-when"><label for="bv-r"><b>Vurdering pr. ' + fdate(c.date) + '</b>' + (c.date === D.basis.dato ? ' (anskaffelse)' : c.date === lastReal ? ' (seneste kurs)' : ' <span class="pill-tag bad">fiktiv</span>') + '</label><input id="bv-r" type="range" min="0" max="' + (P.length - 1) + '" value="' + st.idx + '" data-r></div>' +
        '<div class="br-kpis">' +
        '<div class="kpi"><div class="label">Estimeret værdi (NOK)</div><span class="br-cur">' + nf(c.V) + '</span><span class="stamp">spænd ' + nf(c.Vlo) + ' til ' + nf(c.Vhi) + '</span></div>' +
        '<div class="kpi"><div class="label">Værdi i DKK</div><span class="br-cur">' + nf(c.V * c.k) + '</span><span class="stamp">kurs ' + nf(c.fx[1], 2) + ' (' + fdate(c.fx[0]) + ')</span></div>' +
        '<div class="kpi"><div class="label">Samlet gevinst (DKK)</div><span class="br-cur ' + (c.total < 0 ? 'neg' : 'pos') + '">' + sg(c.total) + '</span><span class="stamp">mod anskaffelsen DKK ' + nf(c.A * c.k0) + ', før skat</span></div>' +
        '<div class="kpi br-conv"><div class="label">Afkast</div><span class="br-cur">' + sg((c.V / c.A - 1) * 100, 1) + ' % i NOK</span><span class="br-cur muted">' + sg(((c.V * c.k) / (c.A * c.k0) - 1) * 100, 1) + ' % i DKK</span><span class="stamp">forskellen er valutaeffekten</span></div></div>' +
        '<div class="card br-two"><h3 style="margin:0 0 10px">Gevinsten opdelt</h3><div class="bv-split">' +
        '<div><span class="label stamp">Prisgevinst</span><b class="' + (c.pris < 0 ? 'neg' : 'pos') + '">DKK ' + sg(c.pris) + '</b><span class="faint">m²-prisen ' + sg((c.w.avg / c.w0.avg - 1) * 100, 1) + ' %: ' + nf(c.w0.avg) + ' → ' + nf(c.w.avg) + ' NOK/m²</span></div>' +
        '<div><span class="label stamp">Valutagevinst</span><b class="' + (c.valuta < 0 ? 'neg' : 'pos') + '">DKK ' + sg(c.valuta) + '</b><span class="faint">kurs ' + nf(D.basis.kurs0, 2) + ' → ' + nf(c.fx[1], 2) + ' DKK pr. 100 NOK</span></div>' +
        '<div><span class="label stamp">Krydseffekt</span><b class="' + (c.kryds < 0 ? 'neg' : 'pos') + '">DKK ' + sg(c.kryds) + '</b><span class="faint">kursændringen på værdistigningen</span></div>' +
        '<div class="bv-sum"><span class="label stamp">I alt</span><b class="' + (c.total < 0 ? 'neg' : 'pos') + '">DKK ' + sg(c.total) + '</b><span class="faint">= værdi × kurs − anskaffelse × anskaffelseskurs</span></div></div>' +
        lineChart({ label: 'Gevinst i DKK over tid', x0: D.basis.dato, x1: x1, mark: c.date, fmt: function (v) { return nf(v / 1000) + 'k'; }, hlines: [{ y: 0, label: '0' }],
          series: [{ pts: gains.map(function (g) { return [g.date, g.valuta]; }), cls: 'val' }, { pts: gains.map(function (g) { return [g.date, g.pris]; }), cls: 'pris' }, { pts: gains.map(function (g) { return [g.date, g.total]; }), cls: 'tot' }] }) +
        '<p class="faint br-note"><span class="br-key bv-k tot"></span> samlet gevinst <span class="br-key bv-k val"></span> valutagevinst <span class="br-key bv-k pris"></span> prisgevinst · i DKK · den lodrette streg er den valgte dato</p></div>' +
        '<div class="grid grid-2 br-two" style="gap:16px">' +
        '<div class="card"><h3 style="margin:0 0 8px">Kurs, DKK pr. 100 NOK</h3>' + lineChart({ label: 'NOK/DKK-kurs', x0: '2026-01-01', x1: x1, mark: c.date, fmt: function (v) { return nf(v, 1); }, hlines: [{ y: D.basis.kurs0, label: 'anskaffelseskurs ' + nf(D.basis.kurs0, 2) }], series: [{ pts: fxPts }, { pts: fxFik, cls: 'fik' }] }) +
        '<p class="faint br-note">Norges Bank, dagskurser 2026' + (st.fiktiv ? '. Stiplet: fiktivt forløb' : '') + '. Stiger kurven, er NOK steget, og valutagevinsten vokser.</p></div>' +
        '<div class="card"><h3 style="margin:0 0 8px">Pris pr. m², solgte Lodge-lejligheder</h3>' + lineChart({ label: 'm²-priser', x0: '2024-01-01', x1: x1, mark: c.date, fmt: function (v) { return nf(v / 1000) + 'k'; }, hlines: [{ y: 4200000 / D.basis.areal, label: 'B102 købesum ' + nf(4200000 / D.basis.areal) }],
          series: [{ dots: true, pts: S.map(function (s) { return [s.dato, m2(s), s.src === 'fiktiv', s.adr + ', ' + fdate(s.dato) + ': ' + nf(m2(s)) + ' NOK/m² (' + s.m2 + ' m², byggeår ' + s.aar + ')']; }) }, { pts: avgLine, cls: 'avg' }] }) +
        '<p class="faint br-note">Prikker: handler (hule = fiktive). Linjen: gennemsnit over ' + st.vindue + ' mdr. B102 ligger under gennemsnittet (byggeår 2008), og vurderingen følger derfor den relative udvikling, ikke niveauet.</p></div></div>' +
        '<div class="card br-two"><h3 style="margin:0 0 8px">Handler i vinduet pr. ' + fdate(c.date) + '</h3>' +
        (c.w.ext ? '<div class="notice" style="margin-bottom:10px">For få handler i de seneste ' + st.vindue + ' måneder. Vinduet er udvidet til ' + c.w.win + ' måneder.</div>' : '') +
        '<div class="table-wrap"><table class="table br-table"><tr><th>Solgt</th><th>Adresse</th><th class="r">Pris</th><th class="r">m²</th><th class="r">NOK/m²</th><th>Byggeår</th><th>Kilde</th></tr>' +
        c.w.list.slice().reverse().map(function (s) { return '<tr><td class="stamp">' + s.dato + '</td><td>' + s.adr + '</td><td class="r br-amt">' + nf(s.pris) + '</td><td class="r">' + s.m2 + '</td><td class="r br-amt">' + nf(m2(s)) + '</td><td>' + s.aar + '</td><td>' + (s.src === 'fiktiv' ? '<span class="pill-tag bad">fiktiv</span>' : '<span class="stamp">' + s.src + '</span>') + '</td></tr>'; }).join('') +
        '<tr><td colspan="4"><b>Gennemsnit (' + c.w.n + ' handler)</b></td><td class="r br-amt"><b>' + nf(c.w.avg) + '</b></td><td colspan="2" class="faint">ved anskaffelsen: ' + nf(c.w0.avg) + ' (' + c.w0.n + ' handler)</td></tr></table></div></div>' +
        '<div class="notice" style="margin-top:16px"><b>Sådan læses vurderingen:</b> værdien i NOK = anskaffelsen × (gennemsnitlig m²-pris nu ÷ gennemsnitlig m²-pris ved anskaffelsen). Værdien i DKK = værdien i NOK × dagskursen. Det er et estimat, ikke en officiel vurdering eller rådgivning, og gevinsten er en papirgevinst før skat, indtil lejligheden sælges og pengene veksles hjem. Lodge-handlerne er kildepåstande fra finn.no og Eiendomsverdi, ikke tinglyste købesummer.</div>';
    }

    el.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-k]'); if (!b || !el.contains(b)) return;
      var k = b.dataset.k; if (k === 'fiktiv') { st.fiktiv = !st.fiktiv; st.idx = 1; } else st[k] = k === 'vindue' ? +b.dataset.v : b.dataset.v;
      draw();
    });
    el.addEventListener('input', function (e) { if (e.target.hasAttribute('data-r')) { st.idx = +e.target.value; draw(); var r = el.querySelector('[data-r]'); if (r) r.focus(); } });
    draw();
  }

  window.GL = window.GL || {};
  window.GL.BoVurd = { render: render };
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-bovurd]'), render); });
})();
