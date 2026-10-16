/* Back-office kalender (C3): Gaustas sæsoner, de 6 højsæsonuger, helligdage og skoleferier i DK, SE og NO.
   Data: bocal-data.js. Helligdage beregnes her (påske efter den gregorianske regel). Kun back-office. */
(function () {
  'use strict';
  var D = window.BOCAL;
  var MON = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
  var DAYN = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'];
  var SEASON = { low: 'Lavsæson', ord: 'Ordinær sæson', high: 'Højsæson' };
  var CC = ['DK', 'SE', 'NO'];

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function add(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function fmt(s) { var d = parse(s); return d.getDate() + '. ' + MON[d.getMonth()]; }
  function fmtY(s) { return fmt(s) + ' ' + parse(s).getFullYear(); }
  function isoWeek(d) { var t = new Date(d); t.setHours(0, 0, 0, 0); t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7); var w1 = new Date(t.getFullYear(), 0, 4); return 1 + Math.round(((t - w1) / 864e5 - 3 + (w1.getDay() + 6) % 7) / 7); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function easter(y) {
    var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3),
      h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
      mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(y, mo - 1, da);
  }
  function firstDow(y, mo, fromDay, dow) { for (var i = 0; i < 7; i++) { var d = new Date(y, mo, fromDay + i); if (d.getDay() === dow) return d; } }

  // Helligdage pr. land og år. defacto = ikke lovbestemt helligdag, men reelt fri for de fleste.
  function holidays(y) {
    var E = easter(y), out = [];
    function h(c, d, name, defacto) { out.push({ c: c, date: iso(d), name: name, defacto: !!defacto }); }
    function md(m, d) { return new Date(y, m - 1, d); }
    // Danmark
    h('DK', md(1, 1), 'Nytårsdag'); h('DK', add(E, -3), 'Skærtorsdag'); h('DK', add(E, -2), 'Langfredag'); h('DK', E, 'Påskedag'); h('DK', add(E, 1), '2. påskedag');
    h('DK', add(E, 39), 'Kristi himmelfartsdag'); h('DK', add(E, 49), 'Pinsedag'); h('DK', add(E, 50), '2. pinsedag'); h('DK', md(6, 5), 'Grundlovsdag', true);
    h('DK', md(12, 24), 'Juleaften', true); h('DK', md(12, 25), 'Juledag'); h('DK', md(12, 26), '2. juledag'); h('DK', md(12, 31), 'Nytårsaften', true);
    // Norge
    h('NO', md(1, 1), 'Nyttårsdag'); h('NO', add(E, -3), 'Skjærtorsdag'); h('NO', add(E, -2), 'Langfredag'); h('NO', E, 'Påskedag'); h('NO', add(E, 1), '2. påskedag');
    h('NO', md(5, 1), 'Arbeidernes dag'); h('NO', md(5, 17), 'Grunnlovsdag'); h('NO', add(E, 39), 'Kristi himmelfartsdag'); h('NO', add(E, 49), 'Pinsedag'); h('NO', add(E, 50), '2. pinsedag');
    h('NO', md(12, 24), 'Julaften', true); h('NO', md(12, 25), '1. juledag'); h('NO', md(12, 26), '2. juledag'); h('NO', md(12, 31), 'Nyttårsaften', true);
    // Sverige
    h('SE', md(1, 1), 'Nyårsdagen'); h('SE', md(1, 6), 'Trettondedag jul'); h('SE', add(E, -2), 'Långfredagen'); h('SE', E, 'Påskdagen'); h('SE', add(E, 1), 'Annandag påsk');
    h('SE', md(5, 1), 'Första maj'); h('SE', add(E, 39), 'Kristi himmelsfärdsdag'); h('SE', md(6, 6), 'Sveriges nationaldag'); h('SE', add(E, 49), 'Pingstdagen');
    var mid = firstDow(y, 5, 20, 6); h('SE', add(mid, -1), 'Midsommarafton', true); h('SE', mid, 'Midsommardagen'); h('SE', firstDow(y, 9, 31, 6), 'Alla helgons dag');
    h('SE', md(12, 24), 'Julafton', true); h('SE', md(12, 25), 'Juldagen'); h('SE', md(12, 26), 'Annandag jul'); h('SE', md(12, 31), 'Nyårsafton', true);
    return out;
  }
  var HOL = holidays(2026).concat(holidays(2027));

  function seasonOf(s) { for (var i = 0; i < D.seasons.length; i++) { var x = D.seasons[i]; if (s >= x.from && s <= x.to) return x; } return null; }
  function highOf(s) { return D.highWeeks.filter(function (w) { return s >= w.from && s < w.to; }); }
  function holOf(s) { return HOL.filter(function (h) { return h.date === s; }); }
  function schoolOf(s) { return D.school.filter(function (x) { return s >= x.from && s <= x.to; }); }

  function render(el) {
    var st = { layers: { season: true, high: true, hol: true, school: true }, cc: { DK: true, SE: true, NO: true }, sel: null };
    var today = iso(new Date()), start = parse(D.range[0]), end = parse(D.range[1]);
    var cur = parse(today); if (cur < start || cur > end) cur = start;
    st.month = new Date(cur.getFullYear(), cur.getMonth(), 1);

    el.innerHTML =
      '<div class="bc-strip-wrap"><div class="bc-strip-h"><b>Efterspørgsel pr. uge</b><span class="stamp">sæson, højsæsonuge og antal lande med skoleferie · oktober 2026 til december 2027</span></div><div class="bc-strip" role="list"></div></div>' +
      '<div class="cal-top"><div class="cal-nav"><button type="button" class="btn btn-ghost btn-sm" data-bc="prev" aria-label="Forrige måned">‹</button><b class="bc-mname" aria-live="polite"></b><button type="button" class="btn btn-ghost btn-sm" data-bc="next" aria-label="Næste måned">›</button></div>' +
      '<div class="plan-pills" role="group" aria-label="Vis lag" style="margin:0">' +
      [['season', 'Sæson'], ['high', 'Højsæsonuger'], ['hol', 'Helligdage'], ['school', 'Skoleferier']].map(function (l) { return '<button type="button" class="filter" data-layer="' + l[0] + '" aria-pressed="true">' + l[1] + '</button>'; }).join('') +
      '</div><div class="plan-pills" role="group" aria-label="Vis lande" style="margin:0">' + CC.map(function (c) { return '<button type="button" class="filter" data-cc="' + c + '" aria-pressed="true">' + c + '</button>'; }).join('') + '</div></div>' +
      '<div class="cal-grid bc-grid" role="grid" aria-label="Månedskalender"></div>' +
      '<p class="faint cal-legend"><span><i class="bc-sw low"></i> Lavsæson</span><span><i class="bc-sw ord"></i> Ordinær</span><span><i class="bc-sw high"></i> Højsæson</span><span><i class="bc-sw hw"></i> <b>Højsæsonuge</b> (størst indtjening, Gausta Hytteleie)</span><span><b class="bc-tag">NO</b> helligdag</span><span><span class="bc-bar sample">SE</span> skoleferie</span><span>Sæson ifølge Gausta utleie, for lejligheder. Klik på en dag for detaljer.</span></p>' +
      '<div class="bc-detail" aria-live="polite"></div>';

    var grid = el.querySelector('.bc-grid'), detail = el.querySelector('.bc-detail'), strip = el.querySelector('.bc-strip'), mname = el.querySelector('.bc-mname');

    function holVis(s) { return st.layers.hol ? holOf(s).filter(function (h) { return st.cc[h.c]; }) : []; }
    function schVis(s) { return st.layers.school ? schoolOf(s).filter(function (x) { return st.cc[x.c]; }) : []; }

    function drawStrip() {
      var d = add(start, -((start.getDay() + 6) % 7)), h = '';
      while (d <= end) {
        var mid = iso(add(d, 3)), se = seasonOf(mid), hw = false, cs = {};
        for (var i = 0; i < 7; i++) { var s = iso(add(d, i)); if (highOf(s).length) hw = true; schoolOf(s).forEach(function (x) { cs[x.c] = 1; }); }
        var n = Object.keys(cs).length, wk = isoWeek(d);
        h += '<button type="button" role="listitem" class="bc-wk ' + (se ? se.s : 'none') + (hw ? ' hw' : '') + '" data-goto="' + iso(d) + '" title="Uge ' + wk + ', ' + fmt(iso(d)) + ': ' + (se ? SEASON[se.s] : 'sæson ikke oplyst') + (hw ? ', højsæsonuge' : '') + (n ? ', skoleferie i ' + Object.keys(cs).join(', ') : '') + '"><span class="bc-wn">' + wk + '</span><span class="bc-n">' + (n ? n : '') + '</span>' + (hw ? '<span class="bc-star">★</span>' : '') + '</button>';
        d = add(d, 7);
      }
      strip.innerHTML = h;
    }

    function drawMonth() {
      var y = st.month.getFullYear(), m = st.month.getMonth();
      mname.textContent = MON[m].charAt(0).toUpperCase() + MON[m].slice(1) + ' ' + y;
      el.querySelector('[data-bc="prev"]').disabled = st.month <= new Date(start.getFullYear(), start.getMonth(), 1);
      el.querySelector('[data-bc="next"]').disabled = st.month >= new Date(end.getFullYear(), end.getMonth(), 1);
      var first = new Date(y, m, 1), ws = add(first, -((first.getDay() + 6) % 7)), last = new Date(y, m + 1, 0);
      var h = '<div class="cal-row cal-head" role="row"><span class="cal-wn">Uge</span>' + DAYN.map(function (d) { return '<span role="columnheader">' + d + '</span>'; }).join('') + '</div>';
      for (var w = ws; w <= last; w = add(w, 7)) {
        h += '<div class="cal-row" role="row"><span class="cal-wn" style="cursor:default">' + isoWeek(w) + '</span>';
        for (var i = 0; i < 7; i++) {
          var dd = add(w, i), s = iso(dd), out = dd.getMonth() !== m, se = st.layers.season ? seasonOf(s) : null, hw = st.layers.high ? highOf(s) : [], hol = holVis(s), sch = schVis(s);
          var ccs = {}; sch.forEach(function (x) { ccs[x.c] = 1; });
          h += '<button type="button" role="gridcell" class="cal-d bc-d' + (out ? ' out' : '') + (se ? ' s-' + se.s : '') + (hw.length ? ' hw' : '') + (s === today ? ' today' : '') + (st.sel === s ? ' on' : '') + '" data-day="' + s + '" aria-label="' + fmtY(s) + (se ? ', ' + SEASON[se.s] : '') + (hw.length ? ', højsæsonuge ' + hw.map(function (x) { return x.name; }).join(' og ') : '') + (hol.length ? ', helligdag: ' + hol.map(function (x) { return x.c + ' ' + x.name; }).join(', ') : '') + (sch.length ? ', skoleferie: ' + Object.keys(ccs).join(', ') : '') + '">' +
            '<span class="bc-top"><b>' + dd.getDate() + '</b>' + (hw.length && hw.some(function (x) { return x.from === s; }) ? '<span class="bc-hwl">★ ' + hw.filter(function (x) { return x.from === s; })[0].name + '</span>' : '') + '</span>' +
            '<span class="bc-tags">' + hol.map(function (x) { return '<b class="bc-tag' + (x.defacto ? ' df' : '') + '" title="' + x.c + ': ' + esc(x.name) + '">' + x.c + '</b>'; }).join('') + '</span>' +
            '<span class="bc-bars">' + CC.filter(function (c) { return ccs[c]; }).map(function (c) { return '<span class="bc-bar">' + c + '</span>'; }).join('') + '</span></button>';
        }
        h += '</div>';
      }
      grid.innerHTML = h;
      drawDetail();
    }

    function drawDetail() {
      var y = st.month.getFullYear(), m = st.month.getMonth(), a = iso(new Date(y, m, 1)), b = iso(new Date(y, m + 1, 0));
      if (st.sel) {
        var s = st.sel, se = seasonOf(s), hw = highOf(s), hol = holOf(s).filter(function (x) { return st.cc[x.c]; }), sch = schoolOf(s).filter(function (x) { return st.cc[x.c]; });
        detail.innerHTML = '<div class="cal-wh"><h3 style="text-align:left">' + DAYN[(parse(s).getDay() + 6) % 7] + ' ' + fmtY(s) + '<span>Uge ' + isoWeek(parse(s)) + '</span></h3><button type="button" class="btn btn-ghost btn-sm" data-bc="month">Hele måneden</button></div>' +
          '<div class="sp-rows" style="margin-top:10px">' +
          '<div class="sp-row"><span>Sæson (Gausta)</span><b>' + (se ? '<i class="bc-sw ' + se.s + '"></i> ' + SEASON[se.s] : '<span class="faint">ikke oplyst</span>') + '</b></div>' +
          '<div class="sp-row"><span>Højsæsonuge</span><b>' + (hw.length ? hw.map(function (x) { return '<span class="bc-hwl">★ ' + x.name + '</span> ' + fmt(x.from) + ' til ' + fmt(x.to); }).join('<br>') + '<br><span class="faint" style="font-weight:400">størst indtjening, ' + D.highSrc + '</span>' : '<span class="faint">nej</span>') + '</b></div>' +
          '<div class="sp-row"><span>Helligdage</span><b>' + (hol.length ? hol.map(function (x) { return x.c + ': ' + esc(x.name) + (x.defacto ? ' (reelt fri)' : ''); }).join('<br>') : '<span class="faint">ingen</span>') + '</b></div>' +
          '<div class="sp-row"><span>Skoleferie</span><b>' + (sch.length ? sch.map(function (x) { return x.c + ': ' + esc(x.name) + ', ' + esc(x.region); }).join('<br>') : '<span class="faint">ingen kendte</span>') + '</b></div></div>' +
          (se && se.note ? '<p class="faint" style="margin:8px 0 0;font-size:.82rem">' + esc(se.note) + '</p>' : '');
        return;
      }
      var items = [];
      if (st.layers.season) D.seasons.forEach(function (x) { if (x.to >= a && x.from <= b) items.push({ k: x.from < a ? a : x.from, html: '<i class="bc-sw ' + x.s + '"></i> <b>' + SEASON[x.s] + '</b> ' + fmt(x.from) + ' til ' + fmt(x.to), sub: 'Gausta utleie' + (x.note ? '. ' + x.note : ''), lab: 'Brugeroplysning' }); });
      var hwItems = [];
      if (st.layers.high) D.highWeeks.forEach(function (x) { if (x.to > a && x.from <= b) hwItems.push({ k: x.from, html: '<span class="bc-hwl">★ ' + x.name + '</span> <b>Højsæsonuge</b> ' + fmt(x.from) + ' til ' + fmt(x.to), sub: 'Ankomst til afrejse. Uge med størst indtjening ifølge ' + D.highSrc, lab: 'Brugeroplysning', hw: true }); });
      if (st.layers.hol) HOL.forEach(function (x) { if (x.date >= a && x.date <= b && st.cc[x.c]) items.push({ k: x.date, html: '<b class="bc-tag' + (x.defacto ? ' df' : '') + '">' + x.c + '</b> <b>' + esc(x.name) + '</b> ' + fmt(x.date), sub: x.defacto ? 'ikke lovbestemt, men reelt fri for de fleste' : 'helligdag', lab: 'Fakta' }); });
      if (st.layers.school) D.school.forEach(function (x) { if (x.to >= a && x.from <= b && st.cc[x.c]) items.push({ k: x.from < a ? a : x.from, html: '<span class="bc-bar">' + x.c + '</span> <b>' + esc(x.name) + '</b> ' + fmt(x.from) + ' til ' + fmt(x.to), sub: esc(x.region) + ' · kilde: ' + esc(x.src), lab: x.lab }); });
      items.sort(function (p, q) { return p.k < q.k ? -1 : p.k > q.k ? 1 : 0; });
      items = hwItems.concat(items);
      detail.innerHTML = '<div class="cal-wh"><h3 style="text-align:left">' + mname.textContent + '<span>' + items.length + ' perioder og dage</span></h3></div>' +
        (items.length ? '<ul class="ev-ul">' + items.map(function (it) { return '<li class="bc-li' + (it.hw ? ' hw' : '') + '"><div>' + it.html + '<div class="ev-bl">' + it.sub + '</div></div><span class="pill-tag' + (it.lab === 'Inference' ? ' warn' : '') + '">' + it.lab + '</span></li>'; }).join('') + '</ul>' : '<p class="muted">Intet kendt i denne måned for de valgte lag og lande.</p>');
    }

    el.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t || !el.contains(t)) return;
      if (t.dataset.bc === 'prev' || t.dataset.bc === 'next') { st.month = new Date(st.month.getFullYear(), st.month.getMonth() + (t.dataset.bc === 'prev' ? -1 : 1), 1); st.sel = null; drawMonth(); return; }
      if (t.dataset.bc === 'month') { st.sel = null; drawMonth(); return; }
      if (t.dataset.layer) { var k = t.dataset.layer; st.layers[k] = !st.layers[k]; t.setAttribute('aria-pressed', String(st.layers[k])); drawMonth(); return; }
      if (t.dataset.cc) { var c = t.dataset.cc; st.cc[c] = !st.cc[c]; t.setAttribute('aria-pressed', String(st.cc[c])); drawMonth(); return; }
      if (t.dataset.goto) { var g = parse(t.dataset.goto), mid = add(g, 3); st.month = new Date(mid.getFullYear(), mid.getMonth(), 1); st.sel = null; drawMonth(); grid.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      if (t.dataset.day) { st.sel = st.sel === t.dataset.day ? null : t.dataset.day; var dd = parse(t.dataset.day); if (dd.getMonth() !== st.month.getMonth()) st.month = new Date(dd.getFullYear(), dd.getMonth(), 1); drawMonth(); }
    });

    drawStrip(); drawMonth();
  }

  window.GL = window.GL || {};
  window.GL.BoCal = { render: render, holidays: holidays };
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-bocal]'), render); });
})();
