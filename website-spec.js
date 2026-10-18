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

  function summary() {
    var upd = document.querySelector('[data-ws-updated]');
    if (upd) {
      var tasks = ITEMS.reduce(function (n, x) { return n + (x.tasks ? x.tasks.length : 0); }, 0);
      var a = count(function (x) { return x.status === 'approved'; });
      upd.textContent = (window.WS_UPDATED || '') + ' · ' + ITEMS.length + ' punkter med ' + tasks + ' delopgaver · ' + a + ' godkendt · ' + count(function (x) { return x.built && x.built.s === 'done'; }) + ' bygget · ' + count(function (x) { return x.built && x.built.s === 'partial'; }) + ' delvist bygget';
    }
    var t = document.querySelector('[data-ws-summary]');
    if (t) t.innerHTML = '<tr><th>Område</th><th>Punkter</th><th>Delopgaver</th><th>Godkendt</th><th>Bygget</th><th>Delvist</th></tr>' + GROUPS.map(function (g) {
      var it = ITEMS.filter(function (x) { return x.g === g.id; });
      if (!it.length) return '';
      var n = it.reduce(function (s, x) { return s + (x.tasks ? x.tasks.length : 0); }, 0);
      return '<tr><td><a href="#ws-g-' + esc(g.id) + '"><b>' + esc(g.id) + '</b> · ' + esc(g.title) + '</a></td><td class="num">' + it.length + '</td><td class="num">' + n + '</td><td class="num">' + it.filter(function (x) { return x.status === 'approved'; }).length + '</td><td class="num">' + it.filter(function (x) { return x.built && x.built.s === 'done'; }).length + '</td><td class="num">' + it.filter(function (x) { return x.built && x.built.s === 'partial'; }).length + '</td></tr>';
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
      '<dt>Afhænger af</dt><dd>' + (x.deps && x.deps.length ? '<div class="row-flex" style="gap:6px">' + x.deps.map(chip).join('') + '</div>' : '<span class="faint">intet</span>') + '</dd>' +
      (x.open && x.open.length ? '<dt>Åbne spørgsmål</dt><dd><ul style="margin:0;padding-left:18px">' + x.open.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul></dd>' : '');
    var tasks = x.tasks && x.tasks.length ? '<details class="ws-tasks"><summary>' + x.tasks.length + ' delopgaver</summary><div class="table-wrap"><table class="table"><tr><th>ID</th><th>Delopgave</th><th>Prio</th><th>Relevans</th></tr>' +
      x.tasks.map(function (k) { return '<tr><td class="num">' + esc(k.id) + '</td><td>' + esc(k.t) + (k.note ? '<div class="muted" style="font-size:.82rem;margin-top:2px">' + esc(k.note) + '</div>' : '') + '</td><td>' + esc(k.prio || '') + '</td><td>' + esc(REL[k.rel] || k.rel || '') + '</td></tr>'; }).join('') + '</table></div></details>' : '';
    return '<div class="spec-block' + (x.status === 'approved' ? ' approved' : '') + '" id="ws-' + esc(x.id) + '" data-id="' + esc(x.id) + '"><div class="spec-head"><h3>' + esc(x.id) + ' · ' + esc(x.title) + '</h3><div class="row-flex"><span class="pill-tag' + b.cls + '">' + b.label + '</span><span class="pill-tag">' + esc(REL[x.rel] || '') + '</span><span class="status ' + st.cls + '">' + st.label + '</span></div></div>' +
      '<div class="spec-body"><dl class="bo-dl">' + rows + '</dl>' + tasks + '</div></div>';
  }

  function list() {
    var el = document.querySelector('[data-ws-list]'); if (!el) return;
    el.innerHTML = GROUPS.map(function (g) {
      var it = ITEMS.filter(function (x) { return x.g === g.id && visible(x); });
      if (!it.length) return '';
      return '<section id="ws-g-' + esc(g.id) + '" style="margin-top:28px"><h3 style="font-size:1.25rem;margin:0 0 4px">' + esc(g.id) + ' · ' + esc(g.title) + '</h3><p class="muted" style="margin:0 0 14px">' + esc(g.lead || '') + (g.src ? ' <span class="faint">Kilde: ' + esc(g.src) + '</span>' : '') + '</p>' + it.map(itemHtml).join('') + '</section>';
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
