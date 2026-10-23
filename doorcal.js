/* Døraktivitet i kalender (back-office, C7). Prototype med EKSEMPELDATA: sensorerne er ikke sat op.
   Viser pr. dag, hvor mange gange hoveddør og terrassedør er åbnet, lejerophold og egne ophold ovenpå,
   og markerer aktivitet uden ophold (C7: "døraktivitet mod bookinger kan afsløre aktivitet uden booking")
   samt terrassedør åben længe i frost. Data genereres deterministisk, så de er ens ved hver visning. */
(function () {
  'use strict';
  var MON = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
  var DAYN = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'];
  var RANGE = ['2026-11-01', '2027-02-28'];

  // Eksempel på ophold. Lejer = via operatøren, egen = ejernes egne ophold. from = ankomst, to = afrejse.
  var STAYS = [
    { kind: 'egen', from: '2026-11-06', to: '2026-11-08', label: 'Egne ophold' },
    { kind: 'lejer', from: '2026-11-20', to: '2026-11-23', label: 'Lejer (3 nætter)' },
    { kind: 'lejer', from: '2026-12-04', to: '2026-12-06', label: 'Lejer (2 nætter)' },
    { kind: 'lejer', from: '2026-12-20', to: '2026-12-27', label: 'Lejer, ★ Jul' },
    { kind: 'lejer', from: '2026-12-27', to: '2027-01-03', label: 'Lejer, ★ Nytår' },
    { kind: 'lejer', from: '2027-01-15', to: '2027-01-18', label: 'Lejer (3 nætter)' },
    { kind: 'egen', from: '2027-02-05', to: '2027-02-07', label: 'Egne ophold' },
    { kind: 'lejer', from: '2027-02-14', to: '2027-02-21', label: 'Lejer, ★ Uge 7' },
    { kind: 'lejer', from: '2027-02-21', to: '2027-02-28', label: 'Lejer, ★ Uge 8' }
  ];
  // Særlige dage i eksemplet (uden ophold).
  var EXTRA = {
    '2026-12-09': { main: 2, terr: 0, note: 'Hoveddør åbnet 2 gange uden ophold (kl. 10:41 og 10:58). Fx operatørens tilsyn, eller noget der skal undersøges.' },
    '2027-01-27': { main: 1, terr: 1, note: 'Aktivitet uden ophold kl. 22:14. Terrassedøren åben 38 min ved -11 °C.', frost: 38 }
  };

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function add(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function isoWeek(d) { var t = new Date(d); t.setHours(0, 0, 0, 0); t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7); var w1 = new Date(t.getFullYear(), 0, 4); return 1 + Math.round(((t - w1) / 864e5 - 3 + (w1.getDay() + 6) % 7) / 7); }
  function rnd(seed) { var x = Math.sin(seed) * 10000; return x - Math.floor(x); }
  function fmt(s) { var d = parse(s); return d.getDate() + '. ' + MON[d.getMonth()] + ' ' + d.getFullYear(); }

  // Byg dagsdata.
  var DAYS = {};
  (function build() {
    for (var d = parse(RANGE[0]); iso(d) <= RANGE[1]; d = add(d, 1)) {
      var s = iso(d), seed = d.getTime() / 864e5, stay = null, arr = false, dep = false;
      STAYS.forEach(function (x) { if (s >= x.from && s < x.to) stay = x; if (s === x.from) arr = true; if (s === x.to) dep = true; });
      var main = 0, terr = 0, clean = false, frost = 0, note = '';
      if (stay) { main = 2 + Math.floor(rnd(seed) * 6); terr = Math.floor(rnd(seed + 7) * 5); }
      if (arr) main += 3;
      if (dep && !stay) { main += 2; clean = true; }
      if (dep) { main += 2; }
      if (EXTRA[s]) { main = EXTRA[s].main; terr = EXTRA[s].terr; frost = EXTRA[s].frost || 0; note = EXTRA[s].note; }
      DAYS[s] = { main: main, terr: terr, stay: stay || (dep ? STAYS.filter(function (x) { return x.to === s; })[0] : null), arr: arr, dep: dep, clean: clean, frost: frost, note: note,
        unexpected: (main + terr) > 0 && !stay && !dep && !arr };
    }
  })();

  function render(el) {
    var st = { door: 'both', month: parse(RANGE[0]), sel: null };
    // Start i den måned, der har flest ophold i eksemplet.
    st.month = new Date(2026, 11, 1);

    function count(d) { return st.door === 'main' ? d.main : st.door === 'terr' ? d.terr : d.main + d.terr; }
    function level(n) { return n === 0 ? 0 : n <= 2 ? 1 : n <= 6 ? 2 : 3; }

    function draw() {
      var y = st.month.getFullYear(), m = st.month.getMonth(), first = new Date(y, m, 1), last = new Date(y, m + 1, 0), ws = add(first, -((first.getDay() + 6) % 7));
      var a = iso(first), b = iso(last), mdays = Object.keys(DAYS).filter(function (k) { return k >= a && k <= b; });
      var act = mdays.filter(function (k) { return count(DAYS[k]) > 0; }), opens = mdays.reduce(function (t, k) { return t + count(DAYS[k]); }, 0),
        unexp = mdays.filter(function (k) { return DAYS[k].unexpected; }), frost = mdays.filter(function (k) { return DAYS[k].frost; });
      var h = '<div class="cal-top"><div class="cal-nav"><button type="button" class="btn btn-ghost btn-sm" data-dc="prev" aria-label="Forrige måned"' + (a <= RANGE[0] ? ' disabled' : '') + '>‹</button><b>' + MON[m].charAt(0).toUpperCase() + MON[m].slice(1) + ' ' + y + '</b><button type="button" class="btn btn-ghost btn-sm" data-dc="next" aria-label="Næste måned"' + (b >= RANGE[1] ? ' disabled' : '') + '>›</button></div>' +
        '<div class="plan-pills" role="group" aria-label="Dør" style="margin:0">' + [['both', 'Begge døre'], ['main', 'Hoveddør'], ['terr', 'Terrassedør']].map(function (o) { return '<button type="button" class="filter" data-door="' + o[0] + '" aria-pressed="' + (st.door === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div></div>' +
        '<div class="dc-sum"><span><b>' + act.length + '</b> ' + (act.length === 1 ? 'dag' : 'dage') + ' med aktivitet</span><span><b>' + opens + '</b> ' + (opens === 1 ? 'åbning' : 'åbninger') + '</span><span class="' + (unexp.length ? 'warn' : '') + '"><b>' + unexp.length + '</b> ' + (unexp.length === 1 ? 'dag' : 'dage') + ' med aktivitet uden ophold</span><span class="' + (frost.length ? 'bad' : '') + '"><b>' + frost.length + '</b> ' + (frost.length === 1 ? 'frostalarm' : 'frostalarmer') + '</span></div>' +
        '<div class="cal-grid dc-grid" role="grid" aria-label="Døraktivitet pr. dag"><div class="cal-row cal-head" role="row"><span class="cal-wn">Uge</span>' + DAYN.map(function (x) { return '<span role="columnheader">' + x + '</span>'; }).join('') + '</div>';
      for (var w = ws; w <= last; w = add(w, 7)) {
        h += '<div class="cal-row" role="row"><span class="cal-wn" style="cursor:default">' + isoWeek(w) + '</span>';
        for (var i = 0; i < 7; i++) {
          var dd = add(w, i), s = iso(dd), out = dd.getMonth() !== m, d = DAYS[s];
          if (!d) { h += '<span class="cal-d dc-d out"></span>'; continue; }
          var n = count(d), lv = level(n), stayCls = d.stay && (s < d.stay.to) ? ' st-' + d.stay.kind : '';
          h += '<button type="button" role="gridcell" class="cal-d dc-d lv' + lv + stayCls + (out ? ' out' : '') + (st.sel === s ? ' on' : '') + '" data-day="' + s + '" aria-label="' + fmt(s) + ': ' + n + ' åbninger' + (d.stay && s < d.stay.to ? ', ' + d.stay.label : '') + (d.unexpected ? ', aktivitet uden ophold' : '') + (d.frost ? ', frostalarm' : '') + '">' +
            '<span class="dc-top"><b>' + dd.getDate() + '</b>' + (d.unexpected ? '<span class="dc-flag warn" title="Aktivitet uden ophold">!</span>' : '') + (d.frost ? '<span class="dc-flag bad" title="Terrassedør åben i frost">❄</span>' : '') + '</span>' +
            '<span class="dc-n">' + (n ? n + '×' : '') + '</span>' +
            '<span class="dc-doors">' + (st.door !== 'terr' && d.main ? '<i class="dc-m" title="Hoveddør ' + d.main + '×"></i>' : '') + (st.door !== 'main' && d.terr ? '<i class="dc-t" title="Terrassedør ' + d.terr + '×"></i>' : '') + '</span>' +
            (d.arr ? '<span class="dc-tag">ankomst</span>' : d.clean ? '<span class="dc-tag">rengøring</span>' : d.dep ? '<span class="dc-tag">afrejse</span>' : '') + '</button>';
        }
        h += '</div>';
      }
      h += '</div><p class="faint cal-legend"><span><i class="dc-sw lv1"></i><i class="dc-sw lv2"></i><i class="dc-sw lv3"></i> 1-2, 3-6, 7+ åbninger</span><span><i class="dc-sw st-lejer"></i> lejerophold</span><span><i class="dc-sw st-egen"></i> egne ophold</span><span><i class="dc-m"></i> hoveddør <i class="dc-t"></i> terrassedør</span><span><span class="dc-flag warn">!</span> aktivitet uden ophold</span><span><span class="dc-flag bad">❄</span> terrassedør åben i frost</span><span>Eksempeldata. Klik på en dag.</span></p>';

      var sel = st.sel && DAYS[st.sel] ? DAYS[st.sel] : null;
      h += '<div class="dc-detail" aria-live="polite">' + (sel ?
        '<div class="cal-wh"><h3 style="text-align:left">' + fmt(st.sel) + '<span>Uge ' + isoWeek(parse(st.sel)) + '</span></h3></div><div class="sp-rows" style="margin-top:8px">' +
        '<div class="sp-row"><span>Ophold</span><b>' + (sel.stay && st.sel < sel.stay.to ? sel.stay.label + ' (' + fmt(sel.stay.from) + ' til ' + fmt(sel.stay.to) + ')' : sel.dep ? 'Afrejsedag' : '<span class="faint">intet</span>') + '</b></div>' +
        '<div class="sp-row"><span>Hoveddør</span><b>' + sel.main + ' åbninger</b></div>' +
        '<div class="sp-row"><span>Terrassedør</span><b>' + sel.terr + ' åbninger' + (sel.frost ? ', <span style="color:var(--coral)">åben ' + sel.frost + ' min i frost</span>' : '') + '</b></div>' +
        '<div class="sp-row"><span>Vurdering</span><b>' + (sel.unexpected ? '<span style="color:var(--amber)">Aktivitet uden ophold</span>' : sel.clean ? 'Forventet: rengøring efter afrejse' : (sel.main + sel.terr) ? 'Forventet' : 'Ingen aktivitet') + '</b></div></div>' +
        (sel.note ? '<p class="sp-note" style="margin-top:8px">' + sel.note + '</p>' : '')
        : '<p class="muted" style="margin:0">Vælg en dag for at se åbninger pr. dør og om der var et ophold.</p>') + '</div>';
      el.innerHTML = h;
    }

    el.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t || !el.contains(t)) return;
      if (t.dataset.dc) { st.month = new Date(st.month.getFullYear(), st.month.getMonth() + (t.dataset.dc === 'prev' ? -1 : 1), 1); st.sel = null; }
      else if (t.dataset.door) st.door = t.dataset.door;
      else if (t.dataset.day) { st.sel = st.sel === t.dataset.day ? null : t.dataset.day; var dd = parse(t.dataset.day); if (dd.getMonth() !== st.month.getMonth()) st.month = new Date(dd.getFullYear(), dd.getMonth(), 1); }
      else return;
      draw();
    });
    draw();
  }

  window.GL = window.GL || {};
  window.GL.DoorCal = { render: render, DAYS: DAYS };
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-doorcal]'), render); });
})();
