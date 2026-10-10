/* Inventar pr. rum: rullelisten under Faciliteter på lejligheden.html (element e-inventory i elementkataloget).
   Data: window.GL_INVENTORY (inventory-data.js). "Hele lejligheden" viser et overblik pr. rum, et valgt rum viser sine ting
   grupperet. Status pr. punkt: Bekræftet af ejeren, Fra sælgerens liste (aftale ikke afsluttet), Skal verificeres. */
(function () {
  'use strict';
  var root = document.querySelector('[data-inventory]');
  if (!root || !window.GL_INVENTORY) return;
  var D = window.GL_INVENTORY, ST = { ejer: ['Bekræftet af ejeren', 'inv-ok'], saelger: ['Sælgerens liste', 'inv-sael'], verify: ['Skal verificeres', 'inv-ver'] };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); };
  var rooms = D.rooms;
  function tag(s) { return '<span class="inv-tag ' + ST[s][1] + '">' + ST[s][0] + '</span>'; }

  root.innerHTML = '<div class="inv-top"><label class="area-sel"><span class="faint">Vis inventar for</span><select class="field compact" data-inv="room" aria-label="Vælg rum">' +
    '<option value="">Hele lejligheden (overblik)</option>' + rooms.map(function (r) { return '<option value="' + r.id + '">' + esc(r.name) + ' (' + r.items.length + ')</option>'; }).join('') + '</select></label>' +
    '<p class="inv-legend faint">' + Object.keys(ST).map(function (k) { return tag(k); }).join(' ') + '</p></div><div class="inv-body" aria-live="polite"></div>' +
    '<p class="faint inv-note">Inventaret vedligeholdes ét sted og genbruges i gæsteområdet (TK4). Listen er et udkast: ting fra sælgerens liste medfølger først, når inventaraftalen er afsluttet, og alt skal verificeres på stedet.</p>';
  var sel = root.querySelector('select'), body = root.querySelector('.inv-body');

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
        return '<li class="inv-row"><div><b>' + esc(i.n) + '</b>' + (i.d ? '<div class="meta">' + esc(i.d) + '</div>' : '') + '</div>' + tag(i.s) + '</li>';
      }).join('') + '</ul>';
    });
    return html + '<p><button type="button" class="btn btn-ghost btn-sm" data-go="">‹ Tilbage til overblik</button></p>';
  }
  function draw() { var r = rooms.filter(function (x) { return x.id === sel.value; })[0]; body.innerHTML = r ? roomView(r) : overview(); }
  root.addEventListener('change', function (e) { if (e.target === sel) draw(); });
  root.addEventListener('click', function (e) { var b = e.target.closest('[data-go]'); if (!b) return; sel.value = b.getAttribute('data-go'); draw(); });
  draw();
})();
