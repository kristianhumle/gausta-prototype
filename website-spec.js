/* Renders the website spec register from website-spec-data.js (groups, items, tasks). Same pattern as backoffice-spec.js.
   Status: draft, open, ready, approved. Built: done, partial, none (checked against the production repo). */
(function () {
  var ITEMS = window.WS_SPEC || [], GROUPS = window.WS_GROUPS || [];
  var STATUS = {
    draft: { label: 'Udkast', cls: 'proposed' },
    open: { label: 'Afklares', cls: 'research' },
    ready: { label: 'Klar til godkendelse', cls: 'prototype' },
    approved: { label: '✓ Godkendt', cls: 'approved' }
  };
  var BUILT = { done: { label: '✓ Bygget', cls: ' good' }, partial: { label: 'Delvist bygget', cls: ' warn' }, none: { label: 'Ikke bygget', cls: '' } };
  var TS = { done: ['✓ Løst', ' good'], partial: ['Delvist', ' warn'], none: ['Ikke løst', ''], na: ['Ikke relevant', ''] };
  var REL = { gaelder: 'Gælder', tilpasses: 'Tilpasses', ikke: 'Ikke relevant' };
  var byId = {};
  ITEMS.forEach(function (x) { byId[x.id] = x; });
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var f = { status: 'all', built: 'all', rel: 'active' };

  function chip(id) {
    var x = byId[id]; if (!x) return esc(id);
    return '<a class="pill-tag' + (x.status === 'approved' ? ' good' : '') + '" href="#ws-' + esc(id) + '" title="' + esc(x.title) + '" style="text-decoration:none">' + (x.status === 'approved' ? '✓ ' : '') + esc(id) + '</a>';
  }
  function visible(x) {
    if (f.status !== 'all' && x.status !== f.status) return false;
    if (f.built !== 'all' && (x.built && x.built.s || 'none') !== f.built) return false;
    if (f.rel === 'active' && x.rel === 'ikke') return false;
    if (f.rel === 'ikke' && x.rel !== 'ikke') return false;
    if (f.rel === 'gaelder' && x.rel !== 'gaelder') return false;
    if (f.rel === 'tilpasses' && x.rel !== 'tilpasses') return false;
    return true;
  }
  function count(fn) { return ITEMS.filter(fn).length; }
  function tdn(st, gid) { return ITEMS.filter(function (x) { return !gid || x.g === gid; }).reduce(function (n, x) { return n + (x.tasks || []).filter(function (k) { return k.s === st; }).length; }, 0); }

  function summary() {
    var upd = document.querySelector('[data-ws-updated]');
    if (upd) {
      var tasks = ITEMS.reduce(function (n, x) { return n + (x.tasks ? x.tasks.length : 0); }, 0), tdone = tdn('done'), tpart = tdn('partial');
      var a = count(function (x) { return x.status === 'approved'; });
      upd.textContent = (window.WS_UPDATED || '') + ' · ' + ITEMS.length + ' punkter med ' + tasks + ' delopgaver (' + tdone + ' løst, ' + tpart + ' delvist) · ' + a + ' godkendt · ' + count(function (x) { return x.built && x.built.s === 'done'; }) + ' bygget · ' + count(function (x) { return x.built && x.built.s === 'partial'; }) + ' delvist bygget';
    }
    var t = document.querySelector('[data-ws-summary]');
    if (t) t.innerHTML = '<tr><th>Område</th><th>Punkter</th><th>Delopgaver</th><th>Løst</th><th>Delvist</th><th>Godkendt</th><th>Bygget</th></tr>' + GROUPS.map(function (g) {
      var it = ITEMS.filter(function (x) { return x.g === g.id; });
      if (!it.length) return '';
      var n = it.reduce(function (s, x) { return s + (x.tasks ? x.tasks.length : 0); }, 0);
      var rel = it.reduce(function (a, x) { return a.concat((x.tasks || []).filter(function (k) { return k.s !== 'na'; })); }, []);
      var nd = rel.filter(function (k) { return k.s === 'done'; }).length, np = rel.filter(function (k) { return k.s === 'partial'; }).length;
      var allApproved = it.every(function (x) { return x.status === 'approved'; });
      var rc = rel.length && nd === rel.length && allApproved ? 'green' : (nd === 0 ? 'red' : 'yellow');
      return '<tr class="ws-r-' + rc + '" title="' + (rc === 'green' ? 'Alt løst og godkendt' : rc === 'yellow' ? 'Påbegyndt, men der er stadig åbne delopgaver' : 'Ikke påbegyndt eller ingen delopgaver løst') + '"><td><a href="#ws-g-' + esc(g.id) + '"><b>' + esc(g.id) + '</b> · ' + esc(g.title) + '</a></td><td class="num">' + it.length + '</td><td class="num">' + n + '</td><td class="num">' + tdn('done', g.id) + '</td><td class="num">' + tdn('partial', g.id) + '</td><td class="num">' + it.filter(function (x) { return x.status === 'approved'; }).length + '</td><td class="num">' + it.filter(function (x) { return x.built && x.built.s === 'done'; }).length + '</td></tr>';
    }).join('');
  }

  function itemHtml(x) {
    var st = STATUS[x.status] || STATUS.draft, b = BUILT[(x.built && x.built.s) || 'none'];
    var rows = '<dt>Kravet</dt><dd>' + esc(x.what) + '</dd>' +
      (x.gausta ? '<dt>For Gausta</dt><dd>' + esc(x.gausta) + '</dd>' : '') +
      (x.built && x.built.where ? '<dt>I koden</dt><dd>' + esc(x.built.where) + '</dd>' : '') +
      (x.decided ? '<dt>Besluttet</dt><dd>' + esc(x.decided) + '</dd>' : '') +
      (x.appr ? '<dt>Godkendelse</dt><dd>Godkendt af Claude efter din uddelegering 18. oktober 2026. ' + esc(x.appr) + '</dd>' : '') +
      (x.needs ? '<dt>Din beslutning</dt><dd><b>' + esc(x.needs) + '</b></dd>' : '') +
      (x.rec ? '<dt>Claudes anbefaling</dt><dd>' + esc(x.rec) + '</dd>' : '') +
      '<dt>Afhænger af</dt><dd>' + (x.deps && x.deps.length ? '<div class="row-flex" style="gap:6px">' + x.deps.map(chip).join('') + '</div>' : '<span class="faint">intet</span>') + '</dd>' +
      (x.open && x.open.length ? '<dt>Åbne spørgsmål</dt><dd><ul style="margin:0;padding-left:18px">' + x.open.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul></dd>' : '');
    var tasks = x.tasks && x.tasks.length ? '<details class="ws-tasks"><summary>' + x.tasks.length + ' delopgaver, ' + x.tasks.filter(function (k) { return k.s === 'done'; }).length + ' løst' + (x.tasks.some(function (k) { return k.s === 'partial'; }) ? ', ' + x.tasks.filter(function (k) { return k.s === 'partial'; }).length + ' delvist' : '') + '</summary><div class="table-wrap"><table class="table"><tr><th>ID</th><th>Delopgave</th><th>Prio</th><th>Relevans</th><th>Løst</th></tr>' +
      x.tasks.map(function (k) { return '<tr><td class="num">' + esc(k.id) + '</td><td>' + esc(k.t) + (k.note ? '<div class="muted" style="font-size:.82rem;margin-top:2px">' + esc(k.note) + '</div>' : '') + (k.e ? '<div class="ws-ev">' + esc(k.e) + '</div>' : '') + '</td><td>' + esc(k.prio || '') + '</td><td>' + esc(REL[k.rel] || k.rel || '') + '</td><td>' + (k.s ? '<span class="pill-tag' + TS[k.s][1] + '">' + TS[k.s][0] + '</span>' : '') + '</td></tr>'; }).join('') + '</table></div></details>' : '';
    return '<div class="spec-block' + (x.status === 'approved' ? ' approved' : '') + '" id="ws-' + esc(x.id) + '" data-id="' + esc(x.id) + '"><div class="spec-head"><h3>' + esc(x.id) + ' · ' + esc(x.title) + '</h3><div class="row-flex"><span class="pill-tag' + b.cls + '">' + b.label + '</span><span class="pill-tag">' + esc(REL[x.rel] || '') + '</span>' + (x.waits ? '<span class="pill-tag warn">Afventer dig</span>' : '') + '<span class="status ' + st.cls + '">' + st.label + '</span></div></div>' +
      '<div class="spec-body"><dl class="bo-dl">' + rows + '</dl>' + tasks + '</div></div>';
  }

  var SC = { good: ' sc-good', ok: ' sc-ok', bad: ' sc-bad' };
  function sc(v) { if (v == null) return '<span class="faint">n/a</span>'; var n = Math.round(v * 100); return '<span class="ws-sc' + (n >= 90 ? SC.good : n >= 50 ? SC.ok : SC.bad) + '">' + n + '</span>'; }
  function scan(gid) {
    return (window.WS_SCANS || []).filter(function (q) { return q.group === gid; }).map(function (sx, si) {
    return '<div class="spec-block" id="ws-scan-' + esc(gid) + (si ? '-' + si : '') + '"><div class="spec-head"><h3>' + esc(sx.title) + '</h3><div class="row-flex"><span class="pill-tag">' + esc(sx.date) + '</span></div></div><div class="spec-body"><p class="muted" style="margin:0 0 10px">' + esc(sx.how) + '</p><div class="table-wrap"><table class="table"><tr><th>Side</th><th>Enhed</th><th>Ydelse</th><th>Tilgængelighed</th><th>Bedste praksis</th><th>SEO</th><th>FCP</th><th>LCP</th><th>TBT</th><th>CLS</th><th>Speed Index</th></tr>' + sx.rows.map(function (r) { return '<tr><td>' + esc(r.page) + '</td><td>' + esc(r.mode) + '</td><td>' + sc(r.perf) + '</td><td>' + sc(r.a11y) + '</td><td>' + sc(r.bp) + '</td><td>' + sc(r.seo) + '</td><td class="num">' + esc(r.fcp) + '</td><td class="num">' + esc(r.lcp) + '</td><td class="num">' + esc(r.tbt) + '</td><td class="num">' + esc(r.cls) + '</td><td class="num">' + esc(r.si) + '</td></tr>'; }).join('') + '</table></div>' + (sx.notes && sx.notes.length ? '<dl class="bo-dl" style="margin-top:14px"><dt>Fund</dt><dd><ul style="margin:0;padding-left:18px">' + sx.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></dd></dl>' : '') + '</div></div>';
    }).join('');
  }

  function list() {
    var el = document.querySelector('[data-ws-list]'); if (!el) return;
    el.innerHTML = GROUPS.map(function (g) {
      var it = ITEMS.filter(function (x) { return x.g === g.id && visible(x); });
      if (!it.length) return '';
      return '<section id="ws-g-' + esc(g.id) + '" style="margin-top:28px"><h3 style="font-size:1.25rem;margin:0 0 4px">' + esc(g.id) + ' · ' + esc(g.title) + '</h3><p class="muted" style="margin:0 0 14px">' + esc(g.lead || '') + (g.src ? ' <span class="faint">Kilde: ' + esc(g.src) + '</span>' : '') + '</p>' + scan(g.id) + it.map(itemHtml).join('') + '</section>';
    }).join('') || '<p class="muted" style="margin-top:20px">Ingen punkter matcher filteret.</p>';
  }

  function filters() {
    var defs = {
      status: [['all', 'Alle', ITEMS.length]].concat(Object.keys(STATUS).map(function (k) { return [k, STATUS[k].label, count(function (x) { return x.status === k; })]; })),
      built: [['all', 'Alle', ITEMS.length], ['done', 'Bygget', count(function (x) { return x.built && x.built.s === 'done'; })], ['partial', 'Delvist', count(function (x) { return x.built && x.built.s === 'partial'; })], ['none', 'Ikke bygget', count(function (x) { return !x.built || x.built.s === 'none'; })]],
      rel: [['active', 'Gælder og tilpasses', count(function (x) { return x.rel !== 'ikke'; })], ['gaelder', 'Gælder', count(function (x) { return x.rel === 'gaelder'; })], ['tilpasses', 'Tilpasses', count(function (x) { return x.rel === 'tilpasses'; })], ['ikke', 'Ikke relevant', count(function (x) { return x.rel === 'ikke'; })], ['all', 'Alle', ITEMS.length]]
    };
    [].forEach.call(document.querySelectorAll('[data-ws-filter]'), function (el) {
      var k = el.getAttribute('data-ws-filter');
      el.innerHTML = defs[k].map(function (o) { return '<button type="button" class="filter" data-v="' + o[0] + '" aria-pressed="' + (f[k] === o[0]) + '">' + esc(o[1]) + '<span class="n">' + o[2] + '</span></button>'; }).join('');
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        f[k] = b.getAttribute('data-v');
        el.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        list();
      });
    });
  }

  function render() { summary(); filters(); list(); if (location.hash && document.querySelector(location.hash)) document.querySelector(location.hash).scrollIntoView(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
