/* Eventliste med filter og tidsdimension (A6). Bruges på siden Området (#events) og vises i elementkataloget (#e-events).
   Data: window.GL_EVENTS (events-data.js). Eksempeldata i prototypen, kilder og bekræftelsesstatus står pr. event.
   Tidsdimensionen: tidslinje over måneder med antal, gruppering pr. måned med "om X uger", sammenfoldede tomme måneder,
   og tydelig forskel på bekræftede datoer og traditionelle ("plejer at ligge"). Filtre: periode og kategori (rullelister). */
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

  function rel(ev, today) {
    var s = dayNum(ev.s), e = ev.e ? dayNum(ev.e) : s, t = dayNum(today), d = s - t;
    if (t >= s && t <= e) return 'pågår nu';
    if (d === 0) return 'i dag';
    if (d === 1) return 'i morgen';
    if (d < 14) return 'om ' + d + ' dage';
    if (d < 63) return 'om ' + Math.round(d / 7) + ' uger';
    return 'om ' + Math.round(d / 30.4) + ' måneder';
  }

  function render(root) {
    var raw = window.GL_EVENTS || [];
    var now = new Date(), today = now;
    var events = raw.map(function (r) {
      return { id: r.id, title: r.title_da, en: r.title_en, s: new Date(r.start), e: r.end ? new Date(r.end) : null, allDay: !!r.allDay, place: r.place, cat: r.category, blurb: r.blurb_da, price: r.price, url: r.url, ok: r.confirmed !== false, src: r.source, rec: r.recurring };
    }).filter(function (x) { return (x.e || x.s) >= new Date(now.getTime() - 86400000); }).sort(function (a, b) { return a.s - b.s; });

    var months = [];
    events.forEach(function (x) { var m = ym(x.s); if (months.indexOf(m) < 0) months.push(m); });
    var first = ym(today), last = months.length ? months[months.length - 1] : first;
    var span = [];
    (function () { var y = +first.slice(0, 4), m = +first.slice(5, 7); while (true) { var k = y + '-' + (m < 10 ? '0' : '') + m; span.push(k); if (k >= last) break; m++; if (m > 12) { m = 1; y++; } } })();
    function monthDate(k) { return new Date(k + '-15T12:00:00Z'); }
    var counts = {}; events.forEach(function (x) { var m = ym(x.s); counts[m] = (counts[m] || 0) + 1; });
    var maxC = Math.max.apply(null, span.map(function (k) { return counts[k] || 0; }).concat([1]));
    var cats = []; events.forEach(function (x) { if (cats.indexOf(x.cat) < 0) cats.push(x.cat); });

    var st = { period: 'all', cat: '' };

    root.innerHTML =
      '<div class="ev-controls">' +
        '<label class="area-sel"><span class="faint">Periode</span><select class="field compact" data-ev="period" aria-label="Filtrér på periode"></select></label>' +
        '<label class="area-sel"><span class="faint">Kategori</span><select class="field compact" data-ev="cat" aria-label="Filtrér på kategori"><option value="">Alle kategorier</option>' + cats.map(function (c) { return '<option value="' + c + '">' + esc(CAT[c] || c) + '</option>'; }).join('') + '</select></label>' +
      '</div>' +
      '<div class="ev-tl" role="group" aria-label="Tidslinje over de næste måneder"></div>' +
      '<div class="ev-list" aria-live="polite"></div>' +
      '<p class="faint ev-note"></p>';
    var selP = root.querySelector('[data-ev="period"]'), selC = root.querySelector('[data-ev="cat"]'), tl = root.querySelector('.ev-tl'), list = root.querySelector('.ev-list'), note = root.querySelector('.ev-note');

    selP.innerHTML = '<option value="all">Alle kommende</option><option value="30d">Næste 30 dage</option><option value="wknd">Denne weekend</option>' +
      span.map(function (k) { return '<option value="' + k + '">' + esc(cap(fMonthLong.format(monthDate(k)))) + (counts[k] ? ' (' + counts[k] + ')' : ' (ingen)') + '</option>'; }).join('');

    function inPeriod(x) {
      var p = st.period, t = dayNum(today), s = dayNum(x.s), e = x.e ? dayNum(x.e) : s;
      if (p === 'all') return true;
      if (p === '30d') return s <= t + 30 && e >= t;
      if (p === 'wknd') { var wd = (new Date(ymd(today) + 'T12:00:00Z')).getUTCDay(), sat = wd === 6 ? t : wd === 0 ? t - 1 : t + (6 - wd); return s <= sat + 1 && e >= sat; }
      return ym(x.s) === p;
    }

    function drawTimeline() {
      tl.innerHTML = span.map(function (k) {
        var c = counts[k] || 0, h = c ? Math.max(14, Math.round(c / maxC * 100)) : 0, d = monthDate(k), yy = k.slice(2, 4);
        return '<button type="button" class="ev-m' + (c ? '' : ' empty') + '" data-m="' + k + '" aria-pressed="' + (st.period === k ? 'true' : 'false') + '" title="' + esc(cap(fMonthLong.format(d))) + ': ' + (c ? c + ' events' : 'ingen events registreret') + '">' +
          '<span class="ev-bar"><i style="height:' + h + '%"></i></span><b>' + esc(fMonthShort.format(d).replace('.', '')) + '</b><small>' + (k.slice(5) === '01' || k === first ? '’' + yy : '') + '</small><em>' + (c || '·') + '</em></button>';
      }).join('');
    }

    function row(x) {
      var multi = x.e && dayNum(x.e) !== dayNum(x.s);
      var date = multi ? fDay.format(x.s) + '.–' + fDay.format(x.e) + '.' + (ym(x.e) !== ym(x.s) ? ' ' + fMonthShort.format(x.e).replace('.', '') : '') : fDay.format(x.s) + '.';
      var wd = multi ? '' : cap(fWd.format(x.s).replace('.', ''));
      var when = x.allDay || multi ? (multi ? fDate.format(x.s) + ' til ' + fDate.format(x.e) : 'Hele dagen') : fTime.format(x.s) + (x.e ? '–' + fTime.format(x.e) : '');
      if (!x.ok) when = x.rec || 'Dato ikke fastlagt';
      return '<li class="ev-row' + (x.ok ? '' : ' tent') + '">' +
        '<div class="ev-date" aria-hidden="true"><b>' + esc(date) + '</b><small>' + esc(wd) + '</small></div>' +
        '<div class="ev-main"><b class="ev-t">' + esc(x.title) + '</b><div class="meta">' + esc(when) + (x.place ? ' · ' + esc(x.place) : '') + '</div>' +
        (x.blurb ? '<div class="ev-bl">' + esc(x.blurb) + '</div>' : '') +
        '<div class="ev-tags"><span class="pill-tag">' + esc(CAT[x.cat] || x.cat) + '</span>' + (x.price ? '<span class="pill-tag">' + esc(x.price) + '</span>' : '') + (x.ok ? '' : '<span class="pill-tag ev-warn">Dato ikke bekræftet</span>') + '</div></div>' +
        '<div class="ev-side"><span class="ev-rel">' + esc(rel(x, today)) + '</span>' + (x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener" aria-label="Åbn ' + esc(x.title) + ' hos kilden">kilde ↗</a>' : '') + '</div></li>';
    }

    function draw() {
      var shown = events.filter(function (x) { return inPeriod(x) && (!st.cat || x.cat === st.cat); });
      var html = '';
      if (!shown.length) html = '<p class="muted" style="margin:18px 0">Ingen events matcher det valgte filter.</p>';
      else {
        var byM = {}; shown.forEach(function (x) { var k = ym(x.s); (byM[k] = byM[k] || []).push(x); });
        var keys = (st.period === 'all' || st.period === '30d') ? span.filter(function (k) { return k >= first; }) : [st.period];
        var gap = [];
        function flush() { if (!gap.length) return; var a = cap(fMonthShort.format(monthDate(gap[0])).replace('.', '')), b = cap(fMonthShort.format(monthDate(gap[gap.length - 1])).replace('.', '')); html += '<div class="ev-gap">' + (gap.length === 1 ? a + ': ingen events registreret endnu' : a + ' til ' + b + ': ingen events registreret endnu') + '</div>'; gap = []; }
        keys.forEach(function (k) {
          if (!byM[k]) { if (st.period === 'all' || st.period === '30d') { if (st.period === '30d' || st.cat) return; gap.push(k); } return; }
          flush();
          var d = monthDate(k), diff = Math.round((dayNum(d) - dayNum(today)) / 30.4);
          html += '<section class="ev-month"><h3 class="ev-mh">' + esc(cap(fMonthLong.format(d))) + '<span>' + byM[k].length + (byM[k].length === 1 ? ' event' : ' events') + (diff >= 2 ? ' · om ca. ' + diff + ' måneder' : '') + '</span></h3><ul class="ev-ul">' + byM[k].map(row).join('') + '</ul></section>';
        });
        flush();
      }
      list.innerHTML = html;
      var tent = events.filter(function (x) { return !x.ok; }).length;
      note.textContent = 'Eksempeldata fra kildeanalysen 6. oktober 2026: ' + events.length + ' events, heraf ' + tent + ' med dato, der ikke er bekræftet (de plejer at ligge på samme tid hvert år). Datoer og priser skal verificeres hos kilden, før noget vises offentligt.';
      drawTimeline();
      selP.value = st.period; selC.value = st.cat;
    }

    root.addEventListener('change', function (e) {
      var s = e.target.closest('select[data-ev]'); if (!s) return;
      st[s.getAttribute('data-ev')] = s.value; draw();
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.ev-m'); if (!b) return;
      st.period = st.period === b.getAttribute('data-m') ? 'all' : b.getAttribute('data-m'); draw();
    });
    draw();
  }

  function init() { [].forEach.call(document.querySelectorAll('[data-events]'), render); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
