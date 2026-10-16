/* Inventar pr. rum: rumknapper under Faciliteter på lejligheden.html (element e-inventory i elementkataloget).
   Knapperne er de samme som på den interaktive plantegning (.plan-pills). Data: window.GL_INVENTORY (inventory-data.js).
   "Alle" viser et overblik pr. rum, et valgt rum viser sine ting grupperet. Statusfeltet (s) i data vises ikke på siden.
   15. oktober 2026 (ejeren): ingen m² og ingen antal ("x ting") i modulet.
   16. oktober 2026 (ejeren): valgfrit billede pr. punkt (img i data), vist som miniature med lightbox. */
(function () {
  'use strict';
  var root = document.querySelector('[data-inventory]');
  if (!root || !window.GL_INVENTORY) return;
  var D = window.GL_INVENTORY, rooms = D.rooms;
  var SHORT = { entre: 'Entré og skirum', kstue: 'Køkken og stue', stuesov: 'TV-stue', sov1: 'Soveværelse 1', sov2: 'Soveværelse 2', bad: 'Bad', terrasse: 'Terrasse', hele: 'Hele lejligheden' };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); };
  var cur = 'all';

  root.innerHTML = '<div class="plan-pills" role="group" aria-label="Vælg rum"><button type="button" class="filter" data-r="all" aria-pressed="true">Alle</button>' +
    rooms.map(function (r) { return '<button type="button" class="filter" data-r="' + r.id + '" aria-pressed="false">' + esc(SHORT[r.id] || r.name) + '</button>'; }).join('') + '</div><div class="inv-body" data-gallery-group aria-live="polite"></div>';
  var pills = root.querySelector('.plan-pills'), body = root.querySelector('.inv-body');

  function overview() {
    return '<div class="inv-grid">' + rooms.map(function (r) {
      var top = r.items.slice(0, 3).map(function (i) { return esc(i.n); }).join(', ');
      return '<button type="button" class="inv-card" data-go="' + r.id + '"><b>' + esc(r.name) + '</b><span class="inv-top3">' + top + (r.items.length > 3 ? ' …' : '') + '</span></button>';
    }).join('') + '</div>';
  }
  /* 16. oktober 2026 (ejeren): et inventarpunkt kan have et billede (i.img). Vises som lille miniature til højre,
     klik åbner det store billede i den fælles lightbox fra app.js (data-lightbox). */
  var photo = function (k, size) { return (window.GL && GL.photo) ? GL.photo(k, size) : 'assets/web/' + k + (size === 's' ? '-s' : size === 'm' ? '-m' : '') + '.webp'; };
  function thumb(i) {
    if (!i.img || !i.img.k) return '';
    var cap = i.img.cap || i.n, alt = i.img.alt || i.n;
    return '<a class="inv-thumb" href="' + photo(i.img.k) + '" data-lightbox data-cap="' + esc(cap) + '" aria-label="Se billede: ' + esc(i.n) + '">' +
      '<img loading="lazy" decoding="async" src="' + photo(i.img.k, 's') + '" alt="' + esc(alt) + '"></a>';
  }
  function roomView(r) {
    var by = {}; r.items.forEach(function (i) { (by[i.g] = by[i.g] || []).push(i); });
    var html = '<div class="inv-head"><h3>' + esc(r.name) + '</h3><p class="muted">' + esc(r.blurb) + '</p></div>';
    Object.keys(by).sort(function (a, b) { return a - b; }).forEach(function (g) {
      html += '<h4 class="inv-gh">' + esc(D.groups[g]) + '</h4><ul class="inv-ul">' + by[g].map(function (i) {
        return '<li class="inv-row' + (i.img ? ' has-img' : '') + '"><div><b>' + esc(i.n) + '</b>' + (i.d ? '<div class="meta">' + esc(i.d) + '</div>' : '') + '</div>' + thumb(i) + '</li>';
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
