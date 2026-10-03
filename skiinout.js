/* Ski-in / ski-out: faner med luftfoto, langrendskort og slalomkort.
   Afstande (50 til 100 m) er ejerens angivelse (Brugeroplysning, 3. oktober 2026), cirka, skal verificeres på stedet.
   Luftfoto og kort er prototypebilleder (tredjepartsmateriale) og skal erstattes eller godkendes før endelig brug.
   Langrendskortet: GKT, Løypene i Gaustablikk-området, februar 2019 (skal kontrolleres mod nyeste kort).
   Cirklen på langrendskortet er ejerens markering af tilgangen til Rød 15, 10 og 6. */
(function () {
  'use strict';
  // ---------- luftfoto (koordinater som andel af billedet 2000 x 1577) ----------
  var HOME = { x: 0.4225, y: 0.563 };
  var ROUTES = [
    { id: 'langrend', name: 'Langrend', icon: 'wave', dist: '50 til 100 m', x: 0.4125, y: 0.132, text: 'Her kommer du på langrendsløjpen.', pos: 'right' },
    { id: 'slalom', name: 'Slalom', icon: 'snow', dist: '50 til 100 m', x: 0.6925, y: 0.499, text: 'Her kommer du på slalompisten.', pos: 'above' }
  ];
  // ---------- langrendskort (PDF-koordinater i pt; udsnit x 0-595.276, y 75-841.89) ----------
  var LK = { x0: 0, y0: 75, w: 595.276, h: 766.89, access: [224.72, 486.76], r50: 6.45, r100: 12.9,
    paths: ["M399.34 438.35 C398.84 434.80 396.38 432.53 395.78 430.95 C395.19 429.37 393.22 428.98 391.54 428.78 C389.86 428.58 377.53 429.08 373.18 428.98 C368.84 428.88 363.15 427.04 363.15 427.04 C361.09 426.06 359.13 424.82 357.46 423.37 C355.59 421.77 352.84 418.55 351.59 416.95 L350.33 414.78 C349.01 412.39 347.59 410.35 344.50 409.03 C341.40 407.70 338.84 408.50 336.72 409.29 C334.59 410.09 327.79 411.33 323.45 411.41 C319.96 411.48 319.25 410.99 318.90 408.87 C318.54 406.74 322.39 405.60 323.97 404.62 C326.48 403.05 329.20 400.80 331.14 399.30 C333.09 397.80 335.27 395.33 335.59 392.66 C335.91 389.99 343.92 379.25 348.05 374.42 C352.18 369.59 356.21 360.78 356.82 359.23 C357.64 357.16 357.72 355.49 357.72 353.94 C357.72 351.32 356.50 349.93 355.60 348.46 C354.70 346.99 352.82 345.03 351.43 344.62 C350.04 344.21 347.18 344.87 344.40 344.95 C341.62 345.03 337.70 343.56 336.31 342.74 C334.92 341.92 332.63 341.92 331.32 341.92 C330.01 341.92 326.17 342.17 324.05 341.35 C321.92 340.53 320.61 340.37 318.90 340.78 C317.18 341.19 317.43 341.11 314.89 341.43 C312.36 341.76 307.62 343.23 305.74 343.80 C303.86 344.37 298.71 345.68 296.26 346.25 C293.81 346.83 287.67 347.64 286.20 348.05 C284.73 348.46 278.93 350.59 276.39 350.83 C273.86 351.08 268.96 351.32 265.44 351.32 C261.93 351.32 260.95 352.06 259.80 353.20 C258.66 354.35 257.76 357.94 256.29 361.78 C254.82 365.63 252.69 367.34 251.55 367.67 C250.40 368.00 247.71 368.49 245.50 369.88 C243.29 371.27 243.29 374.13 243.62 376.91 C243.95 379.69 243.70 382.55 242.88 384.43 C242.07 386.31 235.93 386.63 233.89 386.88 C231.85 387.12 227.92 387.53 226.32 388.53 C225.22 389.21 224.18 391.57 222.94 393.27 C221.69 394.97 218.40 399.80 216.26 402.84 C214.13 405.88 212.93 407.94 212.21 410.62 C211.52 412.79 209.55 416.74 207.67 419.21 C205.80 421.67 203.30 424.26 203.30 424.26 C202.69 425.30 202.13 426.10 201.67 426.60 C200.51 427.86 200.69 427.23 199.52 429.66 C198.36 432.08 199.34 435.59 199.61 437.47 C199.88 439.36 199.52 444.58 199.43 446.91 C199.35 449.16 199.71 451.38 200.16 453.57 C200.57 455.57 200.66 458.11 201.76 459.85 C202.39 460.84 203.29 462.19 205.08 465.25 C206.87 468.30 209.29 466.94 213.82 467.86 C216.53 468.40 216.83 470.52 216.87 472.91 C216.89 474.04 216.84 475.25 217.40 476.28 C218.06 477.50 220.52 478.65 219.80 480.31 C219.26 481.55 216.77 481.40 217.35 483.20 C217.54 483.82 218.20 484.35 217.40 484.91 C216.87 485.27 215.73 485.17 215.06 485.48 C212.17 486.78 216.54 491.36 217.42 493.13 C218.63 495.53 216.03 498.59 214.30 500.00 C211.87 501.98 208.32 501.51 210.24 505.48 C211.49 508.06 216.37 509.11 218.16 509.74 C219.95 510.37 222.19 511.18 225.87 511.98 C229.54 512.79 234.65 514.32 236.44 514.23 C238.24 514.14 240.12 514.41 240.57 515.22 C241.78 517.41 244.38 518.32 246.13 519.92 C246.87 520.60 247.25 521.42 247.83 522.19 C248.39 522.94 248.94 523.80 249.56 524.49 C250.12 525.12 250.89 525.25 251.42 525.86 C251.93 526.44 252.19 527.35 252.43 528.07 C252.80 529.20 252.89 530.36 253.35 531.39 C253.58 532.56 254.21 534.64 254.75 535.46", "M230.19 491.33 C228.48 491.05 226.57 488.75 225.43 487.22 C224.28 485.69 220.09 479.57 220.09 479.57"] };
  function pct(v) { return (v * 100).toFixed(2) + '%'; }
  function line(r) {
    var x0 = HOME.x * 1000, y0 = HOME.y * 788, x1 = r.x * 1000, y1 = r.y * 788;
    return 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ' ' + y1.toFixed(1);
  }

  function photoPanel() {
    return '<div class="plan-pills sio-pills" role="group" aria-label="Vis rute">' +
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
  }

  function xf(x) { return ((x - LK.x0) / LK.w); }
  function yf(y) { return ((y - LK.y0) / LK.h); }
  function langrendPanel() {
    var ax = xf(LK.access[0]), ay = yf(LK.access[1]);
    return '<div class="zm-bar" role="group" aria-label="Zoom på kortet">' +
        '<button type="button" class="btn btn-ghost btn-sm" data-z="in" aria-label="Zoom ind">+</button>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-z="out" aria-label="Zoom ud">−</button>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-z="home">Vis tilgangen</button>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-z="all">Hele kortet</button>' +
        '<a class="btn btn-ghost btn-sm" data-lightbox data-cap="Løypene i Gaustablikk-området (GKT, februar 2019)" href="assets/web/kort/langrend.webp">Åbn i stort format</a>' +
      '</div>' +
      '<div class="zm-vp" tabindex="0" aria-label="Løjpekort over Gaustablikk-området med tilgangen til Rød 15, 10 og 6 markeret. Træk for at flytte, brug knapperne for at zoome.">' +
        '<div class="zm-st">' +
          '<img src="assets/web/kort/langrend.webp" alt="" draggable="false">' +
          '<svg class="zm-svg" viewBox="' + LK.x0 + ' ' + LK.y0 + ' ' + LK.w + ' ' + LK.h + '" preserveAspectRatio="none" aria-hidden="true">' +
            LK.paths.map(function (d) { return '<path class="zm-halo" d="' + d + '"/>'; }).join('') +
            LK.paths.map(function (d) { return '<path class="zm-trail" d="' + d + '"/>'; }).join('') +
            '<circle class="zm-ring" cx="' + LK.access[0] + '" cy="' + LK.access[1] + '" r="' + LK.r100 + '"/>' +
            '<circle class="zm-ring" cx="' + LK.access[0] + '" cy="' + LK.access[1] + '" r="' + LK.r50 + '"/>' +
          '</svg>' +
          '<div class="zm-at" style="left:' + pct(ax) + ';top:' + pct(ay) + '"><span class="zm-pin"></span>' +
            '<div class="zm-chip"><b>Tilgang til Rød 15, 10 og 6</b><em>Lejligheden: 50 til 100 m herfra</em></div></div>' +
        '</div>' +
      '</div>' +
      '<p class="faint sio-note">Cirklen er ejerens markering af tilgangen (3. oktober 2026). De stiplede ringe er 50 m og 100 m efter kortets målestok, og lejligheden ligger inden for dem. Kort: GKT (Gausta-Kvitåvatn Turistservice), februar 2019, prototypebillede, skal kontrolleres mod nyeste kort og godkendes før endelig brug.</p>' +
      '<div class="sio-cards"><div class="card">' +
        '<div class="ico-box">' + GL.icon('wave') + '</div><div class="kicker">Langrend · tilgang fra lejligheden</div>' +
        '<div class="sio-dist">50 til 100 m</div><h3>Rød 15, 10 og 6</h3>' +
        '<div class="list-row"><span class="grow muted">Rød 6</span><span>Skipsfjell, 6,2 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Rød 10</span><span>Skipsfjell, Nordhaddefjell, Langetjønn, 9,5 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Rød 15</span><span>Skipsfjell, Jotehaug, Klokksjåvatn, Langetjønn, 13,6 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Niveau</span><span>Røde løjper er krevende, delstrækninger ved Langetjønn og Vatnedalen middels</span></div>' +
        '<p class="faint" style="margin:10px 0 0">Kildepåstand: kortets forklaring (GKT, februar 2019). Skal kontrolleres mod nyeste løjpekort. Alle løjper er præpareret til fristil, undtagen de grønne.</p>' +
      '</div></div>';
  }

  function slalomPanel() {
    return '<div class="slot"><b>Slalomkort afventer din markering</b>Alpinkortet (Gausta Skisenter 2025/2026) er klar. Marker, hvor lejligheden er, og hvor man kommer på slalompisten, så tegner jeg det her. Alpinkortet er et illustreret panorama, så markeringen bliver kun cirka.</div>';
  }

  // ---------- zoom og træk ----------
  function zoomMap(root) {
    var vp = root.querySelector('.zm-vp'), st = root.querySelector('.zm-st'), ratio = LK.h / LK.w, MAXK = 6;
    var k = 1, tx = 0, ty = 0, vw = 0, vh = 0, sw = 0, sh = 0, ptr = {}, last = null;
    function measure() { vw = vp.clientWidth; vh = vp.clientHeight; sw = vw; sh = vw * ratio; st.style.width = sw + 'px'; st.style.height = sh + 'px'; }
    function apply() {
      var minK = Math.min(1, vh / sh); k = Math.max(minK, Math.min(MAXK, k));
      var cw = sw * k, ch = sh * k;
      tx = cw <= vw ? (vw - cw) / 2 : Math.min(0, Math.max(vw - cw, tx));
      ty = ch <= vh ? (vh - ch) / 2 : Math.min(0, Math.max(vh - ch, ty));
      st.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + k + ')';
      st.style.setProperty('--inv', String(1 / k));
    }
    function zoomAt(cx, cy, nk) { var wx = (cx - tx) / k, wy = (cy - ty) / k; k = nk; tx = cx - wx * k; ty = cy - wy * k; apply(); }
    function home() { k = 2.8; var fx = xf(LK.access[0]), fy = yf(LK.access[1]) - 0.035; tx = vw / 2 - fx * sw * k; ty = vh / 2 - fy * sh * k; apply(); }
    function all() { k = 0.01; apply(); }
    measure(); home();
    new ResizeObserver(function () { var wasHome = true; measure(); home(); }).observe(vp);
    root.querySelector('.zm-bar').addEventListener('click', function (e) {
      var b = e.target.closest('[data-z]'); if (!b) return;
      var z = b.dataset.z; if (z === 'in') zoomAt(vw / 2, vh / 2, k * 1.5); else if (z === 'out') zoomAt(vw / 2, vh / 2, k / 1.5); else if (z === 'home') home(); else all();
    });
    vp.addEventListener('wheel', function (e) { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); var r = vp.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, k * (e.deltaY < 0 ? 1.15 : 1 / 1.15)); }, { passive: false });
    vp.addEventListener('pointerdown', function (e) { vp.setPointerCapture(e.pointerId); ptr[e.pointerId] = { x: e.clientX, y: e.clientY }; last = null; vp.classList.add('drag'); });
    vp.addEventListener('pointermove', function (e) {
      if (!ptr[e.pointerId]) return;
      var ids = Object.keys(ptr);
      if (ids.length === 1) { tx += e.clientX - ptr[e.pointerId].x; ty += e.clientY - ptr[e.pointerId].y; ptr[e.pointerId] = { x: e.clientX, y: e.clientY }; apply(); }
      else if (ids.length === 2) {
        ptr[e.pointerId] = { x: e.clientX, y: e.clientY };
        var a = ptr[ids[0]], b = ptr[ids[1]], dist = Math.hypot(a.x - b.x, a.y - b.y), r = vp.getBoundingClientRect();
        if (last) zoomAt((a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top, k * dist / last);
        last = dist;
      }
    });
    function up(e) { delete ptr[e.pointerId]; last = null; if (!Object.keys(ptr).length) vp.classList.remove('drag'); }
    vp.addEventListener('pointerup', up); vp.addEventListener('pointercancel', up);
    vp.addEventListener('keydown', function (e) {
      var s = 60; if (e.key === 'ArrowLeft') tx += s; else if (e.key === 'ArrowRight') tx -= s; else if (e.key === 'ArrowUp') ty += s; else if (e.key === 'ArrowDown') ty -= s;
      else if (e.key === '+' || e.key === '=') return zoomAt(vw / 2, vh / 2, k * 1.5); else if (e.key === '-') return zoomAt(vw / 2, vh / 2, k / 1.5); else return;
      e.preventDefault(); apply();
    });
  }

  function render(el) {
    var tabs = [['foto', 'Luftfoto'], ['langrend', 'Langrendskort'], ['slalom', 'Slalomkort']];
    el.innerHTML = '<div class="subnav sio-tabs" role="tablist" aria-label="Vælg kort">' +
      tabs.map(function (t, i) { return '<button type="button" role="tab" class="sio-tab" data-t="' + t[0] + '" aria-selected="' + (i === 0) + '">' + t[1] + (t[0] === 'slalom' ? ' <span class="soon">afventer</span>' : '') + '</button>'; }).join('') + '</div>' +
      '<div class="sio-body"></div>';
    var body = el.querySelector('.sio-body'), cur = null;
    function show(id) {
      if (id === cur) return; cur = id;
      [].forEach.call(el.querySelectorAll('.sio-tab'), function (b) { b.setAttribute('aria-selected', String(b.dataset.t === id)); });
      body.innerHTML = id === 'foto' ? photoPanel() : id === 'langrend' ? langrendPanel() : slalomPanel();
      if (id === 'langrend') zoomMap(body);
      if (id === 'foto') {
        var map = body.querySelector('.sio-map');
        var focus = function (f) {
          map.setAttribute('data-focus', f);
          [].forEach.call(body.querySelectorAll('.sio-pills .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === f)); });
          [].forEach.call(body.querySelectorAll('.sio-cards .card'), function (c) { c.classList.toggle('dim', f !== 'both' && c.dataset.route !== f); });
        };
        body.querySelector('.sio-pills').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) focus(b.dataset.f); });
        map.addEventListener('click', function (e) { var c = e.target.closest('.sio-chip'); if (c) focus(map.getAttribute('data-focus') === c.dataset.route ? 'both' : c.dataset.route); });
      }
    }
    el.querySelector('.sio-tabs').addEventListener('click', function (e) { var b = e.target.closest('.sio-tab'); if (b) show(b.dataset.t); });
    show('foto');
  }
  document.addEventListener('gl:ready', function () { [].forEach.call(document.querySelectorAll('[data-skiinout]'), render); });
})();
