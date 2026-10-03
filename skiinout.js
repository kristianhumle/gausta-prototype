/* Ski-in / ski-out: luftfoto med stiplede linjer fra lejligheden til langrendsløjpe og slalompiste.
   Afstande (50 til 100 m) er ejerens angivelse (Brugeroplysning, 3. oktober 2026), cirka, skal verificeres på stedet.
   Luftfotoet er et prototypebillede (kilden ligner et skærmbillede fra en kommerciel kortleverandør) og skal erstattes. */
(function () {
  'use strict';
  // koordinater som andel af billedet (2000 x 1577)
  var HOME = { x: 0.4225, y: 0.563 };
  var ROUTES = [
    { id: 'langrend', name: 'Langrend', icon: 'wave', dist: '50 til 100 m', x: 0.4125, y: 0.132,
      text: 'Her kommer du på langrendsløjpen.', pos: 'right' },
    { id: 'slalom', name: 'Slalom', icon: 'snow', dist: '50 til 100 m', x: 0.6925, y: 0.499,
      text: 'Her kommer du på slalompisten.', pos: 'above' }
  ];
  function pct(v) { return (v * 100).toFixed(2) + '%'; }
  function line(r) {
    var x0 = HOME.x * 1000, y0 = HOME.y * 788, x1 = r.x * 1000, y1 = r.y * 788;
    return 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ' ' + y1.toFixed(1);
  }

  function render(el) {
    el.innerHTML =
      '<div class="plan-pills sio-pills" role="group" aria-label="Vis rute">' +
        '<button type="button" class="filter" data-f="both" aria-pressed="true">Begge</button>' +
        ROUTES.map(function (r) { return '<button type="button" class="filter" data-f="' + r.id + '" aria-pressed="false">' + GL.icon(r.icon) + r.name + '</button>'; }).join('') +
      '</div>' +
      '<div class="sio-map" data-focus="both">' +
        '<img src="assets/web/kort/ski-in-out.webp" srcset="assets/web/kort/ski-in-out-m.webp 900w, assets/web/kort/ski-in-out.webp 1600w" sizes="(max-width: 860px) 100vw, 900px" alt="Luftfoto af området omkring lejligheden. Stiplede linjer viser 50 til 100 meter til langrendsløjpen og 50 til 100 meter til slalompisten." loading="lazy">' +
        '<svg class="sio-svg" viewBox="0 0 1000 788" preserveAspectRatio="none" aria-hidden="true">' +
          ROUTES.map(function (r) { return '<g class="route" data-route="' + r.id + '"><path class="halo" d="' + line(r) + '"/><path class="dash" d="' + line(r) + '"/></g>'; }).join('') +
        '</svg>' +
        '<span class="sio-home" style="left:' + pct(HOME.x) + ';top:' + pct(0.5377) + '"></span>' +
        '<span class="sio-homelabel" style="left:' + pct(HOME.x) + ';top:' + pct(HOME.y) + '">Lejligheden</span>' +
        ROUTES.map(function (r) {
          return '<span class="sio-dot" data-route="' + r.id + '" style="left:' + pct(r.x) + ';top:' + pct(r.y) + '"></span>' +
            '<button type="button" class="sio-chip ' + r.pos + '" data-route="' + r.id + '" style="left:' + pct(r.x) + ';top:' + pct(r.y) + '" aria-label="' + r.name + ', ' + r.dist + ' fra lejligheden">' +
            GL.icon(r.icon) + '<span><b>' + r.name + '</b><em>' + r.dist + '</em></span></button>';
        }).join('') +
      '</div>' +
      '<div class="grid grid-2 sio-cards">' +
        ROUTES.map(function (r) {
          return '<div class="card" data-route="' + r.id + '"><div class="ico-box">' + GL.icon(r.icon) + '</div><div class="kicker">Fra lejligheden</div>' +
            '<div class="sio-dist">' + r.dist + '</div><h3>' + r.name + '</h3><p class="muted">' + r.text + '</p>' +
            '<span class="verify">cirka, skal verificeres på stedet</span></div>';
        }).join('') +
      '</div>' +
      '<p class="faint sio-note">Afstande er ejerens angivelse (3. oktober 2026). Luftfoto: prototypebillede, kilde og rettigheder skal afklares før endelig brug.</p>';

    var map = el.querySelector('.sio-map');
    function focus(f) {
      map.setAttribute('data-focus', f);
      [].forEach.call(el.querySelectorAll('.sio-pills .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === f)); });
      [].forEach.call(el.querySelectorAll('.sio-cards .card'), function (c) { c.classList.toggle('dim', f !== 'both' && c.dataset.route !== f); });
    }
    el.querySelector('.sio-pills').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) focus(b.dataset.f); });
    map.addEventListener('click', function (e) {
      var c = e.target.closest('.sio-chip'); if (!c) return;
      focus(map.getAttribute('data-focus') === c.dataset.route ? 'both' : c.dataset.route);
    });
  }
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-skiinout]'), render); });
})();
