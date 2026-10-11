/* Renders the back-office spec to-do list from backoffice-spec-data.js. */
(function () {
  var ITEMS = window.BO_SPEC || [], GROUPS = window.BO_SPEC_GROUPS || [], ORDER = window.BO_SPEC_ORDER || [];
  var STATUS = {
    draft: { label: 'Udkast', cls: 'proposed' },
    open: { label: 'Afklares', cls: 'research' },
    ready: { label: 'Klar til godkendelse', cls: 'prototype' },
    approved: { label: '✓ Godkendt', cls: 'approved' }
  };
  var byId = {};
  ITEMS.forEach(function (x) { byId[x.id] = x; });
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function chip(id) {
    var x = byId[id]; if (!x) return esc(id);
    return '<a class="pill-tag' + (x.status === 'approved' ? ' good' : '') + '" href="#bo-' + id + '" title="' + esc(x.title) + '" style="text-decoration:none">' + (x.status === 'approved' ? '✓ ' : '') + id + '</a>';
  }

  function render() {
    var upd = document.querySelector('[data-bo-updated]');
    if (upd) {
      var n = {}; ITEMS.forEach(function (x) { n[x.status] = (n[x.status] || 0) + 1; });
      upd.textContent = ITEMS.length + ' punkter · ' + (n.approved || 0) + ' godkendt · ' + (n.ready || 0) + ' klar til godkendelse · ' + (n.open || 0) + ' afklares · ' + (n.draft || 0) + ' udkast · opdateret ' + (window.BO_SPEC_UPDATED || '');
    }

    var ord = document.querySelector('[data-bo-order]');
    if (ord) ord.innerHTML = '<tr><th>Trin</th><th>Indhold</th><th>Punkter</th></tr>' + ORDER.map(function (o) {
      return '<tr><td><b>' + esc(o.step) + '</b></td><td><b>' + esc(o.title) + '</b><div class="muted" style="font-size:.85rem">' + esc(o.note) + '</div></td><td><div class="row-flex" style="gap:6px">' + o.ids.map(chip).join('') + '</div></td></tr>';
    }).join('');

    var list = document.querySelector('[data-bo-list]');
    if (list) list.innerHTML = GROUPS.map(function (g) {
      var items = ITEMS.filter(function (x) { return x.g === g.id; });
      return '<section data-bo-group="' + g.id + '" style="margin-top:28px"><h3 style="font-size:1.25rem;margin:0 0 4px">' + g.id + ' · ' + esc(g.title) + '</h3><p class="muted" style="margin:0 0 14px">' + esc(g.lead) + '</p>' +
        items.map(function (x) {
          var st = STATUS[x.status] || STATUS.draft;
          var rows = '<dt>Hvad</dt><dd>' + esc(x.what) + '</dd>' +
            '<dt>Leverance</dt><dd>' + esc(x.out) + '</dd>' +
            (x.decided ? '<dt>Besluttet</dt><dd>' + esc(x.decided) + '</dd>' : '') +
            '<dt>Afhænger af</dt><dd>' + (x.deps.length ? '<div class="row-flex" style="gap:6px">' + x.deps.map(chip).join('') + '</div>' : '<span class="faint">intet</span>') + '</dd>' +
            (x.open.length ? '<dt>Åbne spørgsmål</dt><dd><ul style="margin:0;padding-left:18px">' + x.open.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul></dd>' : '');
          return '<div class="spec-block' + (x.status === 'approved' ? ' approved' : '') + '" id="bo-' + x.id + '" data-status="' + x.status + '"><div class="spec-head"><h3>' + x.id + ' · ' + esc(x.title) + '</h3><div class="row-flex"><span class="pill-tag">' + esc(x.req) + '</span><span class="status ' + st.cls + '">' + st.label + '</span></div></div>' +
            '<div class="spec-body"><dl class="bo-dl">' + rows + '</dl></div></div>';
        }).join('') + '</section>';
    }).join('');

    var f = document.querySelector('[data-bo-filter]');
    if (f) {
      var opts = [{ v: 'all', label: 'Alle', n: ITEMS.length }].concat(Object.keys(STATUS).map(function (k) {
        return { v: k, label: STATUS[k].label, n: ITEMS.filter(function (x) { return x.status === k; }).length };
      }));
      f.innerHTML = opts.map(function (o) { return '<button type="button" class="filter" data-v="' + o.v + '" aria-pressed="' + (o.v === 'all') + '">' + o.label + '<span class="n">' + o.n + '</span></button>'; }).join('');
      f.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        var v = b.getAttribute('data-v');
        f.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        document.querySelectorAll('[data-bo-list] .spec-block').forEach(function (el) { el.hidden = v !== 'all' && el.getAttribute('data-status') !== v; });
        document.querySelectorAll('[data-bo-group]').forEach(function (s) { s.hidden = !s.querySelector('.spec-block:not([hidden])'); });
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
