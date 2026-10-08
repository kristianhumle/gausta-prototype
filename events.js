/* Eventkalender med ugevalg (A6). Bruges på siden Området (#events) og vises i elementkataloget (#e-events).
   Data: window.GL_EVENTS (events-data.js), eksempeldata fra kildeanalysen. Version 1 (liste med tidslinje) er slettet 6. oktober 2026,
   koden ligger i backup/eventliste-v1-2026-10-06/. */
(function () {
  'use strict';
  var CAT = { ski: 'Ski', sport: 'Sport', kultur: 'Kultur', musik: 'Musik', mad: 'Mad', familie: 'Familie', natur: 'Natur', festival: 'Festival' };
  var TZ = 'Europe/Oslo';
  var fMonthLong = new Intl.DateTimeFormat('da-DK', { month: 'long', year: 'numeric', timeZone: TZ });
  var fMonthShort = new Intl.DateTimeFormat('da-DK', { month: 'short', timeZone: TZ });
  var fWd = new Intl.DateTimeFormat('da-DK', { weekday: 'short', timeZone: TZ });
  var fDay = new Intl.DateTimeFormat('da-DK', { day: 'numeric', timeZone: TZ });
  var fTime = new Intl.DateTimeFormat('da-DK', { hour: '2-digit', minute: '2-digit', timeZone: TZ });
  var fDate = new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'short', timeZone: TZ });

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function ymd(d) { var p = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d); return p; } // YYYY-MM-DD
  function ym(d) { return ymd(d).slice(0, 7); }
  function dayNum(d) { return Math.round(Date.parse(ymd(d) + 'T12:00:00Z') / 86400000); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------- Månedskalender med ugevalg (A6) ----------
     Månedsgitter (mandag først) med ugenumre. Klik på en uge (eller en dag) vælger ugen, og ugens events vises dag for dag.
     Flerdagsevents står samlet øverst i ugen. Fyldt prik = bekræftet dato, tom prik = traditionel dato (ikke bekræftet). */
  var DAYN = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'];
  var fLong = new Intl.DateTimeFormat('da-DK', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ });
  var fShortDM = new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'short', timeZone: TZ });
  function dnDate(dn) { return new Date(dn * 86400000 + 43200000); }
  function wdMon(dn) { return (dnDate(dn).getUTCDay() + 6) % 7; } // 0 = mandag
  function weekStart(dn) { return dn - wdMon(dn); }
  function isoWeek(dn) { var th = weekStart(dn) + 3, y = dnDate(th).getUTCFullYear(), jan1 = Math.round(Date.UTC(y, 0, 1) / 86400000); return Math.floor((th - jan1) / 7) + 1; }
  function dnKey(dn) { return dnDate(dn).toISOString().slice(0, 10); }

  function renderCal(root) {
    var now = new Date(), t0 = dayNum(now);
    var events = (window.GL_EVENTS || []).map(function (r) {
      var s = new Date(r.start), e = r.end ? new Date(r.end) : null;
      return { title: r.title_da, s: s, e: e, a: dayNum(s), b: dayNum(e || s), allDay: !!r.allDay, place: r.place, cat: r.category, blurb: r.blurb_da, price: r.price, url: r.url, ok: r.confirmed !== false, rec: r.recurring };
    }).filter(function (x) { return x.b >= t0 - 1; }).sort(function (x, y) { return x.s - y.s; });
    var cats = []; events.forEach(function (x) { if (cats.indexOf(x.cat) < 0) cats.push(x.cat); });
    var lastDn = events.length ? Math.max.apply(null, events.map(function (x) { return x.b; })) : t0;
    var firstM = ym(now), lastM = ym(dnDate(lastDn)), mspan = [];
    (function () { var y = +firstM.slice(0, 4), m = +firstM.slice(5, 7); while (true) { var k = y + '-' + (m < 10 ? '0' : '') + m; mspan.push(k); if (k >= lastM) break; m++; if (m > 12) { m = 1; y++; } } })();
    var st = { month: firstM, week: weekStart(t0), cat: '' };

    root.innerHTML =
      '<div class="cal-top"><div class="cal-nav"><button type="button" class="btn btn-ghost btn-sm" data-cal="prev" aria-label="Forrige måned">‹</button>' +
      '<select class="field compact" data-cal="month" aria-label="Vælg måned">' + mspan.map(function (k) { return '<option value="' + k + '">' + esc(cap(fMonthLong.format(new Date(k + '-15T12:00:00Z')))) + '</option>'; }).join('') + '</select>' +
      '<button type="button" class="btn btn-ghost btn-sm" data-cal="next" aria-label="Næste måned">›</button>' +
      '<button type="button" class="btn btn-ghost btn-sm" data-cal="today">I dag</button></div>' +
      '<label class="area-sel"><span class="faint">Kategori</span><select class="field compact" data-cal="cat" aria-label="Filtrér på kategori"><option value="">Alle kategorier</option>' + cats.map(function (c) { return '<option value="' + c + '">' + esc(CAT[c] || c) + '</option>'; }).join('') + '</select></label></div>' +
      '<div class="cal-grid" role="grid" aria-label="Månedskalender"></div>' +
      '<p class="faint cal-legend"><span><i class="cal-dot"></i> bekræftet dato</span><span><i class="cal-dot hollow"></i> traditionel dato, ikke bekræftet</span><span class="cal-cont-key">streg = event fra tidligere dag</span><span>Klik på en uge for at se, hvad der sker.</span></p>' +
      '<div class="cal-week" aria-live="polite"></div>';
    var grid = root.querySelector('.cal-grid'), wk = root.querySelector('.cal-week'), selM = root.querySelector('[data-cal="month"]'), selC = root.querySelector('[data-cal="cat"]');

    function vis() { return events.filter(function (x) { return !st.cat || x.cat === st.cat; }); }
    function onDay(list, dn) { return list.filter(function (x) { return x.a <= dn && x.b >= dn; }); }
    function monthRange(k) { var f = Math.round(Date.parse(k + '-01T12:00:00Z') / 86400000), n = new Date(Date.parse(k + '-01T12:00:00Z')); n.setUTCMonth(n.getUTCMonth() + 1); var l = Math.round(n.getTime() / 86400000) - 1; return [f, l]; }

    function drawGrid() {
      var list = vis(), r = monthRange(st.month), ws = weekStart(r[0]), we = weekStart(r[1]), html = '<div class="cal-row cal-head" role="row"><span class="cal-wn">Uge</span>' + DAYN.map(function (d) { return '<span role="columnheader">' + d + '</span>'; }).join('') + '</div>';
      for (var w = ws; w <= we; w += 7) {
        var has = 0, cells = '';
        for (var i = 0; i < 7; i++) {
          var dn = w + i, all = onDay(list, dn), ev = all.filter(function (x) { return x.a === dn || x.b === x.a; }), cont = all.some(function (x) { return x.a < dn; }), out = dn < r[0] || dn > r[1], conf = ev.filter(function (x) { return x.ok; }).length, tent = ev.length - conf;
          if (!out) has += all.length;
          var dots = '<span class="cal-dots">' + (conf ? '<i class="cal-dot"></i>' : '') + (tent ? '<i class="cal-dot hollow"></i>' : '') + (ev.length > 1 ? '<em>' + ev.length + '</em>' : '') + '</span>';
          cells += '<button type="button" role="gridcell" class="cal-d' + (out ? ' out' : '') + (dn === t0 ? ' today' : '') + (all.length ? ' has' : '') + (cont ? ' cont' : '') + '" data-dn="' + dn + '" aria-label="' + esc(fLong.format(dnDate(dn))) + (all.length ? ', ' + all.length + ' events' : '') + '"><b>' + dnDate(dn).getUTCDate() + '</b>' + dots + '</button>';
        }
        html += '<div class="cal-row' + (w === st.week ? ' sel' : '') + (has ? ' hasev' : '') + '" role="row" data-w="' + w + '"><button type="button" class="cal-wn" data-wk="' + w + '" aria-label="Vælg uge ' + isoWeek(w) + '">' + isoWeek(w) + '</button>' + cells + '</div>';
      }
      grid.innerHTML = html;
    }

    function evRow(x, dn) {
      var multi = x.b > x.a, time = multi ? fShortDM.format(dnDate(x.a)).replace('.', '') + '–' + fShortDM.format(dnDate(x.b)).replace('.', '') : (x.allDay ? 'Hele dagen' : fTime.format(x.s) + (x.e ? '–' + fTime.format(x.e) : ''));
      if (!x.ok) time = 'Ca. dato';
      return '<li class="ev-row' + (x.ok ? '' : ' tent') + '"><div class="ev-date" aria-hidden="true"><b>' + esc(time) + '</b></div>' +
        '<div class="ev-main"><b class="ev-t">' + esc(x.title) + '</b>' + (x.place ? '<div class="meta">' + esc(x.place) + '</div>' : '') + (x.blurb ? '<div class="ev-bl">' + esc(x.blurb) + '</div>' : '') +
        '<div class="ev-tags"><span class="pill-tag">' + esc(CAT[x.cat] || x.cat) + '</span>' + (x.price ? '<span class="pill-tag">' + esc(x.price) + '</span>' : '') + (x.ok ? '' : '<span class="pill-tag ev-warn">Dato ikke bekræftet' + (x.rec ? ': ' + esc(x.rec) : '') + '</span>') + '</div></div>' +
        '<div class="ev-side">' + (x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener" aria-label="Åbn ' + esc(x.title) + ' hos kilden">kilde ↗</a>' : '') + '</div></li>';
    }

    function drawWeek() {
      var list = vis(), w = st.week, we = w + 6, inWeek = list.filter(function (x) { return x.a <= we && x.b >= w; });
      var multi = inWeek.filter(function (x) { return x.b > x.a; }), single = inWeek.filter(function (x) { return x.b === x.a; });
      var nav = '<div class="cal-wh"><button type="button" class="btn btn-ghost btn-sm" data-cal="pw" aria-label="Forrige uge">‹<span class="cal-lbl"> Forrige uge</span></button><h3>Uge ' + isoWeek(w) + '<span>' + esc(fShortDM.format(dnDate(w)).replace('.', '') + ' til ' + fShortDM.format(dnDate(we)).replace('.', '') + ' ' + dnDate(we).getUTCFullYear()) + ' · ' + inWeek.length + (inWeek.length === 1 ? ' event' : ' events') + '</span></h3><button type="button" class="btn btn-ghost btn-sm" data-cal="nw" aria-label="Næste uge"><span class="cal-lbl">Næste uge </span>›</button></div>';
      var html = nav;
      if (!inWeek.length) {
        var prev = list.filter(function (x) { return x.b < w; }).pop(), next = list.filter(function (x) { return x.a > we; })[0];
        html += '<p class="muted" style="margin:16px 0 6px">Ingen events registreret i denne uge.</p><p class="faint">' + (next ? 'Næste event: <a href="#" data-goto="' + next.a + '">' + esc(next.title) + ' (' + esc(fShortDM.format(dnDate(next.a)).replace('.', '')) + ')</a>. ' : '') + (prev ? 'Seneste før: <a href="#" data-goto="' + prev.b + '">' + esc(prev.title) + '</a>.' : '') + ' Tjek også stedernes egne sider, da kilderne kun dækker større arrangementer.</p>';
      } else {
        if (multi.length) html += '<section class="ev-month"><h4 class="cal-dh">Flere dage, pågår i ugen</h4><ul class="ev-ul">' + multi.map(function (x) { return evRow(x); }).join('') + '</ul></section>';
        for (var dn = w; dn <= we; dn++) {
          var d = single.filter(function (x) { return x.a === dn; }); if (!d.length) continue;
          html += '<section class="ev-month"><h4 class="cal-dh">' + esc(cap(fLong.format(dnDate(dn)))) + '</h4><ul class="ev-ul">' + d.map(function (x) { return evRow(x, dn); }).join('') + '</ul></section>';
        }
      }
      wk.innerHTML = html;
    }

    function draw() { selM.value = st.month; selC.value = st.cat; drawGrid(); drawWeek(); }
    function setMonth(k) { if (mspan.indexOf(k) < 0) return; st.month = k; var r = monthRange(k), list = vis(), pick = null; for (var w = weekStart(r[0]); w <= weekStart(r[1]); w += 7) { if (list.some(function (x) { return x.a <= w + 6 && x.b >= w; })) { pick = w; break; } } st.week = (k === firstM && t0 >= r[0]) ? weekStart(t0) : (pick != null ? pick : weekStart(r[0])); draw(); }
    function goWeek(w) { st.week = w; var k = ym(dnDate(w + 3)); if (mspan.indexOf(k) > -1) st.month = k; draw(); }

    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cal],[data-dn],[data-wk],[data-goto]'); if (!b) return;
      if (b.hasAttribute('data-dn')) { st.week = weekStart(+b.getAttribute('data-dn')); draw(); return; }
      if (b.hasAttribute('data-wk')) { st.week = +b.getAttribute('data-wk'); draw(); return; }
      if (b.hasAttribute('data-goto')) { e.preventDefault(); goWeek(weekStart(+b.getAttribute('data-goto'))); return; }
      var c = b.getAttribute('data-cal');
      if (c === 'prev') { var i = mspan.indexOf(st.month); if (i > 0) setMonth(mspan[i - 1]); }
      else if (c === 'next') { var j = mspan.indexOf(st.month); if (j < mspan.length - 1) setMonth(mspan[j + 1]); }
      else if (c === 'today') { st.month = firstM; st.week = weekStart(t0); draw(); }
      else if (c === 'pw') goWeek(st.week - 7);
      else if (c === 'nw') goWeek(st.week + 7);
    });
    root.addEventListener('change', function (e) {
      var s = e.target.closest('select[data-cal]'); if (!s) return;
      if (s.getAttribute('data-cal') === 'month') setMonth(s.value); else { st.cat = s.value; draw(); }
    });
    draw();
  }

  function init() { [].forEach.call(document.querySelectorAll('[data-events-cal]'), renderCal); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
