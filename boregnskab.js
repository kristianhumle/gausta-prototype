/* Regnskab i back-office (V6, data fra D2/D4). Læser window.BOREGN (kopi af regnearket plus fiktive rækker).
   Regler: NOK og DKK lægges aldrig sammen i samme subtotal. Omregning vises ved siden af og er altid mærket med kurs og dato.
   data-boregn="full" viser hele regnskabet, data-boregn="overview" kun nøgletallene. */
(function () {
  'use strict';
  var D = window.BOREGN;
  var MON = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

  function nf(n, dec) { return n.toLocaleString('da-DK', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 }); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function mkey(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); }
  function mlabel(k) { var p = k.split('-'); return MON[+p[1] - 1] + ' ' + p[0].slice(2); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function toNok(r) { return r.valuta === 'NOK' ? r.beloeb : r.beloeb / D.rate.dkkPerNok; }
  function fdate(s) { var d = parse(s); return d.getDate() + '. ' + MON[d.getMonth()] + ' ' + d.getFullYear(); }

  // Fordel et beløb over Periode fra/til efter antal dage pr. måned. Uden periode: hele beløbet i datoens måned.
  function spread(r, periodise) {
    if (!periodise || !r.fra || !r.til) return [[mkey(parse(r.dato)), 1]];
    var a = parse(r.fra), b = parse(r.til), days = Math.round((b - a) / 864e5) + 1, out = {}, d = new Date(a);
    while (d <= b) { var k = mkey(d); out[k] = (out[k] || 0) + 1; d.setDate(d.getDate() + 1); }
    return Object.keys(out).map(function (k) { return [k, out[k] / days]; });
  }

  function render(el) {
    var mode = el.getAttribute('data-boregn') || 'full';
    var st = { year: 'alle', etab: false, egen: false, periodise: true, fiktiv: true, kat: '', type: '' };

    function rows() {
      return D.rows.filter(function (r) {
        if (!st.fiktiv && r.src === 'fiktiv') return false;
        if (st.year !== 'alle' && r.dato.slice(0, 4) !== st.year) return false;
        return true;
      });
    }
    function counts(r) { return (st.etab || r.etab !== 'Ja') && (st.egen || r.egen !== 'Ja'); }

    function sums(list) {
      var s = { NOK: { ind: 0, udg: 0 }, DKK: { ind: 0, udg: 0 }, nokEq: { ind: 0, udg: 0 } };
      list.filter(counts).forEach(function (r) {
        var k = r.type === 'Indtægt' ? 'ind' : 'udg';
        s[r.valuta][k] += r.beloeb; s.nokEq[k] += toNok(r);
      });
      return s;
    }

    function kpiHtml(list) {
      var s = sums(list), unpaid = list.filter(function (r) { return r.betalt !== 'Ja'; }),
        etab = list.filter(function (r) { return r.etab === 'Ja'; });
      function cur(v, c) { return v ? '<span class="br-cur">' + c + ' ' + nf(v) + '</span>' : ''; }
      function both(k) { return (cur(s.NOK[k], 'NOK') + cur(s.DKK[k], 'DKK')) || '<span class="br-cur">0</span>'; }
      var resN = s.NOK.ind - s.NOK.udg, resD = s.DKK.ind - s.DKK.udg;
      var etN = 0, etD = 0; etab.forEach(function (r) { if (r.valuta === 'NOK') etN += r.beloeb; else etD += r.beloeb; });
      var unpaidUdg = unpaid.filter(function (r) { return r.type === 'Udgift'; }), unpaidInd = unpaid.length - unpaidUdg.length;
      var unN = 0, unD = 0; unpaidUdg.forEach(function (r) { if (r.valuta === 'NOK') unN += r.beloeb; else unD += r.beloeb; });
      return '<div class="br-kpis">' +
        '<div class="kpi"><div class="label">Indtægter</div>' + both('ind') + '<span class="stamp">' + (st.etab || st.egen ? 'inkl. valgte poster' : 'drift') + '</span></div>' +
        '<div class="kpi"><div class="label">Udgifter</div>' + both('udg') + '<span class="stamp">' + (st.etab ? 'inkl. etablering' : 'uden etablering') + (st.egen ? ', inkl. egen brug' : ', uden egen brug') + '</span></div>' +
        '<div class="kpi"><div class="label">Resultat pr. valuta</div><span class="br-cur ' + (resN < 0 ? 'neg' : 'pos') + '">NOK ' + nf(resN) + '</span>' + (resD ? '<span class="br-cur ' + (resD < 0 ? 'neg' : 'pos') + '">DKK ' + nf(resD) + '</span>' : '') + '<span class="stamp">NOK og DKK holdes adskilt</span></div>' +
        '<div class="kpi br-conv"><div class="label">Samlet, omregnet</div><span class="br-cur ' + (s.nokEq.ind - s.nokEq.udg < 0 ? 'neg' : 'pos') + '">≈ NOK ' + nf(s.nokEq.ind - s.nokEq.udg) + '</span><span class="br-cur muted">≈ DKK ' + nf((s.nokEq.ind - s.nokEq.udg) * D.rate.dkkPerNok) + '</span><span class="stamp">omregnet: ' + D.rate.label + '</span></div>' +
        '</div>' +
        (mode === 'overview' ? '' : '<div class="br-mini">' +
        '<div class="card"><div class="label">Etablering (engangsindkøb)</div><b>' + [etN ? 'NOK ' + nf(etN) : '', etD ? 'DKK ' + nf(etD) : ''].filter(Boolean).join(' · ') + '</b><span class="stamp">' + etab.length + ' poster med Etablering = Ja. ' + (st.etab ? 'Tælles med ovenfor.' : 'Holdt uden for driften.') + '</span></div>' +
        '<div class="card"><div class="label">Ikke betalt</div><b>' + (unpaidUdg.length ? [unN ? 'NOK ' + nf(unN) : '', unD ? 'DKK ' + nf(unD) : ''].filter(Boolean).join(' · ') : 'Intet') + '</b><span class="stamp">' + unpaidUdg.length + ' udgifter uden Betalt = Ja' + (unpaidInd ? ' · ' + unpaidInd + ' indtægt afventer' : '') + '</span></div>' +
        '</div>');
    }

    function monthChart(list) {
      var m = {};
      list.filter(counts).forEach(function (r) {
        spread(r, st.periodise).forEach(function (p) {
          var x = m[p[0]] || (m[p[0]] = { ind: 0, udg: 0 });
          x[r.type === 'Indtægt' ? 'ind' : 'udg'] += toNok(r) * p[1];
        });
      });
      var keys = Object.keys(m).sort(); if (!keys.length) return '<p class="muted">Ingen poster i perioden.</p>';
      var max = Math.max.apply(null, keys.map(function (k) { return Math.max(m[k].ind, m[k].udg); })) || 1;
      var W = 900, H = 260, pad = 40, bw = (W - pad * 2) / keys.length, h = '';
      [0, .5, 1].forEach(function (f) { var y = H - 26 - f * (H - 50); h += '<line x1="' + pad + '" x2="' + (W - 6) + '" y1="' + y + '" y2="' + y + '" class="br-grid"/><text x="' + (pad - 4) + '" y="' + (y + 4) + '" class="br-ax" text-anchor="end">' + nf(max * f / 1000) + 'k</text>'; });
      keys.forEach(function (k, i) {
        var x = pad + i * bw, b = Math.min(22, bw / 2 - 4), hi = m[k].ind / max * (H - 50), hu = m[k].udg / max * (H - 50), net = m[k].ind - m[k].udg;
        h += '<g><title>' + mlabel(k) + ': indtægter ≈ NOK ' + nf(m[k].ind) + ', udgifter ≈ NOK ' + nf(m[k].udg) + ', resultat ≈ NOK ' + nf(net) + '</title>' +
          '<rect class="br-in" x="' + (x + bw / 2 - b - 1) + '" y="' + (H - 26 - hi) + '" width="' + b + '" height="' + hi + '" rx="2"/>' +
          '<rect class="br-out" x="' + (x + bw / 2 + 1) + '" y="' + (H - 26 - hu) + '" width="' + b + '" height="' + hu + '" rx="2"/>' +
          '<text x="' + (x + bw / 2) + '" y="' + (H - 8) + '" class="br-ax" text-anchor="middle">' + mlabel(k) + '</text>' +
          '<text x="' + (x + bw / 2) + '" y="' + (H - 32 - Math.max(hi, hu)) + '" class="br-net ' + (net < 0 ? 'neg' : 'pos') + '" text-anchor="middle">' + (net < 0 ? '−' : '+') + nf(Math.abs(net) / 1000, 1) + 'k</text></g>';
      });
      return '<svg class="br-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Indtægter og udgifter pr. måned, omregnet til NOK">' + h + '</svg>' +
        '<p class="faint br-note"><span class="br-key in"></span> indtægter <span class="br-key out"></span> udgifter · tal over søjlerne = resultat i tusinde NOK · ' + (st.periodise ? 'beløb med Periode fra/til er fordelt over perioden' : 'beløb vist i bilagsmåneden') + ' · DKK-poster omregnet: ' + D.rate.label + '</p>';
    }

    function catChart(list) {
      var c = {}, tot = 0;
      list.filter(counts).filter(function (r) { return r.type === 'Udgift'; }).forEach(function (r) { var v = toNok(r); c[r.kategori] = (c[r.kategori] || 0) + v; tot += v; });
      var ks = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }); if (!ks.length) return '<p class="muted">Ingen udgifter.</p>';
      var max = c[ks[0]];
      return '<div class="br-cats">' + ks.map(function (k) {
        return '<button type="button" class="br-cat' + (st.kat === k ? ' on' : '') + '" data-kat="' + esc(k) + '"><span class="br-catn">' + esc(k) + '</span><span class="br-bar"><i style="width:' + (c[k] / max * 100).toFixed(1) + '%"></i></span><span class="br-catv">≈ NOK ' + nf(c[k]) + ' <em>' + nf(c[k] / tot * 100) + ' %</em></span></button>';
      }).join('') + '</div><p class="faint br-note">Klik på en kategori for at filtrere posteringerne. Omregnet til NOK.</p>';
    }

    function table(list) {
      var l = list.filter(function (r) { return (!st.kat || r.kategori === st.kat) && (!st.type || r.type === st.type); })
        .sort(function (a, b) { return a.dato < b.dato ? 1 : -1; });
      return '<div class="br-tfilter">' + (st.kat ? '<span class="pill-tag accent">' + esc(st.kat) + ' <button type="button" class="br-x" data-kat="" aria-label="Fjern filter">×</button></span>' : '') +
        '<div class="plan-pills" style="margin:0">' + [['', 'Alle'], ['Indtægt', 'Indtægter'], ['Udgift', 'Udgifter']].map(function (t) { return '<button type="button" class="filter" data-type="' + t[0] + '" aria-pressed="' + (st.type === t[0]) + '">' + t[1] + '</button>'; }).join('') + '</div>' +
        '<span class="stamp">' + l.length + ' poster</span></div>' +
        '<div class="table-wrap"><table class="table br-table"><tr><th>Dato</th><th>ID</th><th>Kategori og beskrivelse</th><th>Modpart</th><th class="r">Beløb</th><th>Mærker</th></tr>' +
        l.map(function (r) {
          var tags = (r.betalt !== 'Ja' ? '<span class="pill-tag warn">ikke betalt</span>' : '') + (r.etab === 'Ja' ? '<span class="pill-tag">etablering</span>' : '') + (r.egen === 'Ja' ? '<span class="pill-tag">egen brug</span>' : '') + (r.fra ? '<span class="pill-tag" title="Periode">' + fdate(r.fra).replace(/ \d{4}$/, '') + ' til ' + fdate(r.til) + '</span>' : '') + (r.src === 'fiktiv' ? '<span class="pill-tag bad">fiktiv</span>' : '<span class="pill-tag good">fra regnearket</span>');
          return '<tr class="' + (counts(r) ? '' : 'br-dim') + '"><td class="stamp">' + r.dato + '</td><td class="stamp">' + r.id + '</td><td><b>' + esc(r.kategori) + '</b><div class="muted" style="font-size:.84rem">' + esc(r.beskrivelse) + '</div></td><td>' + esc(r.modpart || '') + '</td><td class="r br-amt ' + (r.type === 'Indtægt' ? 'pos' : '') + '">' + (r.type === 'Indtægt' ? '+' : '−') + nf(r.beloeb, 2) + ' ' + r.valuta + '</td><td><div class="br-tags">' + tags + '</div></td></tr>';
        }).join('') + '</table></div><p class="faint br-note">Nedtonede rækker tælles ikke med i nøgletal og grafer med de nuværende valg (etablering eller egen brug).</p>';
    }

    function controls() {
      function t(k, label) { return '<button type="button" class="filter" data-tog="' + k + '" aria-pressed="' + st[k] + '">' + label + '</button>'; }
      return '<div class="br-controls"><div class="plan-pills" role="group" aria-label="Periode" style="margin:0">' + [['alle', 'Alle'], ['2026', '2026'], ['2027', '2027']].map(function (y) { return '<button type="button" class="filter" data-year="' + y[0] + '" aria-pressed="' + (st.year === y[0]) + '">' + y[1] + '</button>'; }).join('') + '</div>' +
        '<div class="plan-pills" role="group" aria-label="Medtag" style="margin:0">' + t('etab', 'Medtag etablering') + t('egen', 'Medtag egen brug') + t('periodise', 'Fordel over periode') + t('fiktiv', 'Vis fiktive rækker') + '</div></div>';
    }

    function sync() {
      var n = D.rows.filter(function (r) { return r.src === 'ark'; }).length, f = D.rows.length - n;
      return '<div class="br-sync"><span class="dot good"></span><span><b>' + D.sheet.name + '</b> (Google Sheets) · sidst læst ' + D.sheet.readAt + ' (eksempel) · ' + n + ' rækker fra regnearket · ' + D.sheet.errors + ' fejl</span><span class="pill-tag bad">+ ' + f + ' fiktive rækker</span><button type="button" class="btn btn-ghost btn-sm" disabled title="Prototype: henter ikke">Synk nu</button></div>';
    }

    function draw() {
      var list = rows();
      if (mode === 'overview') { el.innerHTML = kpiHtml(list); return; }
      el.innerHTML = sync() + controls() + kpiHtml(list) +
        '<div class="card br-two"><h3 style="margin:0 0 8px">Pr. måned</h3>' + monthChart(list) + '</div>' +
        '<div class="card br-two"><h3 style="margin:0 0 8px">Udgifter pr. kategori</h3>' + catChart(list) + '</div>' +
        '<div class="card" style="margin-top:16px"><h3 style="margin:0 0 8px">Posteringer</h3>' + table(list) + '</div>';
    }

    el.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || !el.contains(b)) return;
      if (b.dataset.year) st.year = b.dataset.year;
      else if (b.dataset.tog) st[b.dataset.tog] = !st[b.dataset.tog];
      else if (b.hasAttribute('data-kat')) st.kat = st.kat === b.dataset.kat ? '' : b.dataset.kat;
      else if (b.hasAttribute('data-type')) st.type = b.dataset.type;
      else return;
      draw();
    });
    draw();
  }

  window.GL = window.GL || {};
  window.GL.BoRegn = { render: render };
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-boregn]'), render); });
})();
