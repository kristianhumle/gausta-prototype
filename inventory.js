/* Inventar pr. rum: rumknapper under Faciliteter på lejligheden.html (element e-inventory i elementkataloget).
   Knapperne er de samme som på den interaktive plantegning (.plan-pills). Data: window.GL_INVENTORY (inventory-data.js).
   "Alle" viser et overblik pr. rum, et valgt rum viser sine ting grupperet. Statusfeltet (s) i data vises ikke på siden. */
(function () {
  'use strict';
  var root = document.querySelector('[data-inventory]');
  if (!root || !window.GL_INVENTORY) return;
  var D = window.GL_INVENTORY, rooms = D.rooms;
  var SHORT = { entre: 'Entré og skirum', kstue: 'Køkken og stue', stuesov: 'TV-stue', sov1: 'Soveværelse 1', sov2: 'Soveværelse 2', bad: 'Bad', terrasse: 'Terrasse', hele: 'Hele lejligheden' };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); };
  var total = rooms.reduce(function (n, r) { return n + r.items.length; }, 0);
  var cur = 'all';

  root.innerHTML = '<div class="plan-pills" role="group" aria-label="Vælg rum"><button type="button" class="filter" data-r="all" aria-pressed="true">Alle <span class="n">' + total + '</span></button>' +
    rooms.map(function (r) { return '<button type="button" class="filter" data-r="' + r.id + '" aria-pressed="false">' + esc(SHORT[r.id] || r.name) + ' <span class="n">' + r.items.length + '</span></button>'; }).join('') + '</div><div class="inv-body" aria-live="polite"></div>';
  var pills = root.querySelector('.plan-pills'), body = root.querySelector('.inv-body');

  function overview() {
    return '<div class="inv-grid">' + rooms.map(function (r) {
      var top = r.items.slice(0, 3).map(function (i) { return esc(i.n); }).join(', ');
      return '<button type="button" class="inv-card" data-go="' + r.id + '"><b>' + esc(r.name) + '</b><span class="faint">' + r.items.length + ' ting' + (r.dim ? ' · ' + esc(r.dim) : '') + '</span><span class="inv-top3">' + top + (r.items.length > 3 ? ' og ' + (r.items.length - 3) + ' mere' : '') + '</span></button>';
    }).join('') + '</div>';
  }
  function roomView(r) {
    var by = {}; r.items.forEach(function (i) { (by[i.g] = by[i.g] || []).push(i); });
    var html = '<div class="inv-head"><h3>' + esc(r.name) + (r.dim ? ' <span class="faint">' + esc(r.dim) + '</span>' : '') + '</h3><p class="muted">' + esc(r.blurb) + '</p></div>';
    Object.keys(by).sort(function (a, b) { return a - b; }).forEach(function (g) {
      html += '<h4 class="inv-gh">' + esc(D.groups[g]) + '</h4><ul class="inv-ul">' + by[g].map(function (i) {
        return '<li class="inv-row"><div><b>' + esc(i.n) + '</b>' + (i.d ? '<div class="meta">' + esc(i.d) + '</div>' : '') + '</div></li>';
      }).join('') + '</ul>';
    });
    return html;
  }
  function show(id) {
    cur = id;
    [].forEach.call(pills.querySelectorAll('.filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.r === id)); });
    var r = rooms.filter(function (x) { return x.id === id; })[0];
    body.innerHTML = r ? roomView(r) : overview();
  }
  pills.addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) show(b.dataset.r); });
  body.addEventListener('click', function (e) { var b = e.target.closest('[data-go]'); if (b) show(b.getAttribute('data-go')); });
  show('all');
})();
