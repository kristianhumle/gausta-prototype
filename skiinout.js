/* Ski-in / ski-out: faner med luftfoto, langrendskort og slalomkort.
   Afstande (50 til 100 m) er ejerens angivelse (Brugeroplysning, 3. oktober 2026), cirka, skal verificeres på stedet.
   Luftfoto og kort er prototypebilleder (tredjepartsmateriale) og skal erstattes eller godkendes før endelig brug.
   Langrendskortet: GKT, Løypene i Gaustablikk-området, februar 2019 (skal kontrolleres mod nyeste kort).
   Cirklerne på udsnittene af langrends- og slalomkortet er ejerens markering af tilgangen (Rød 15, 10 og 6; grøn 3). */
(function () {
  'use strict';
  // ---------- luftfoto og tegnet kort (koordinater som andel af billedet) ----------
  // luftfoto: 2000 x 1577. tegnet kort: samme udsnit som terrænkortet, 1994 x 1614 (punkterne er overført fra luftfotoet ved billedregistrering).
  var VIEWS = {
    foto:   { vh: 788,   poi: { x: 0.5368, y: 0.4182 }, home: { x: 0.4225, y: 0.563 }, pulse: 0.5377, pts: { langrend: { x: 0.4125, y: 0.132 }, slalom: { x: 0.6925, y: 0.499 } } },
    tegnet: { vh: 809.4, label: { x: 741 / 1994, y: 1000 / 1614 }, poi: { x: 978.5 / 1994, y: 644.5 / 1614 }, home: { x: 741 / 1994, y: 870 / 1614 }, pulse: 840 / 1614, pts: { langrend: { x: 720 / 1994, y: 176 / 1614 }, slalom: { x: 1302 / 1994, y: 777 / 1614 } } }
  };
  // forløb tegnet ud fra luftfotoet (px i det 1994 x 1614 store udsnit); cirka, skal verificeres
  var TRACKS = { langrend: [[720, 176], [690, 152], [650, 128], [600, 112], [555, 118], [515, 140], [480, 180], [445, 218], [400, 238], [350, 236], [300, 214], [250, 170], [205, 115], [165, 62], [130, 15], [105, -20]], slalom: [[688, -30], [705, 12], [735, 52], [775, 100], [815, 145], [850, 182], [860, 190], [910, 230], [960, 290], [1010, 350], [1060, 415], [1110, 475], [1160, 535], [1205, 600], [1245, 665], [1280, 725], [1305, 775], [1370, 860], [1440, 930], [1500, 1000], [1580, 1090], [1660, 1150], [1770, 1200], [1900, 1240], [2000, 1252]] };
  function smooth(p, n) { for (var k = 0; k < n; k++) { var o = [p[0]]; for (var i = 0; i < p.length - 1; i++) { var a = p[i], b = p[i + 1]; o.push([0.75 * a[0] + 0.25 * b[0], 0.75 * a[1] + 0.25 * b[1]], [0.25 * a[0] + 0.75 * b[0], 0.25 * a[1] + 0.75 * b[1]]); } o.push(p[p.length - 1]); p = o; } return p; }
  // udsnittet i luftfotoet er 2000 x 1577 og hører til det tegnede kort via skala 1,038 og forskydning (136, 40)
  function trackPath(kind, id, v) {
    var pts = smooth(TRACKS[id], 3).map(function (q) {
      var fx = q[0] / 1994, fy = q[1] / 1614;
      if (kind === 'foto') { fx = ((q[0] + 136) / 1.038) / 2000; fy = ((q[1] + 40) / 1.038) / 1577; }
      return (fx * 1000).toFixed(1) + ' ' + (fy * v.vh).toFixed(1);
    });
    return 'M' + pts.join(' L');
  }
  var FH_POLY = '913,663 997,579 1044,626 960,710';   // fælleshuset (smørebod) i det tegnede kort
  var ROUTES = [
    { id: 'langrend', name: 'Langrend', icon: 'wave', dist: '50 til 100 m', text: 'Her kommer du på langrendsløjpen.', pos: 'right' },
    { id: 'slalom', name: 'Slalom', icon: 'snow', dist: '50 til 100 m', text: 'Her kommer du på slalompisten.', pos: 'above' }
  ];
  // ---------- langrendskort (PDF-koordinater i pt; udsnit omkring tilgangen: x 120-340, y 380-545) ----------
  var LK = { x0: 120, y0: 380, w: 220, h: 165, access: [224.72, 486.76], r50: 6.45, r100: 12.9,
    paths: ["M399.34 438.35 C398.84 434.80 396.38 432.53 395.78 430.95 C395.19 429.37 393.22 428.98 391.54 428.78 C389.86 428.58 377.53 429.08 373.18 428.98 C368.84 428.88 363.15 427.04 363.15 427.04 C361.09 426.06 359.13 424.82 357.46 423.37 C355.59 421.77 352.84 418.55 351.59 416.95 L350.33 414.78 C349.01 412.39 347.59 410.35 344.50 409.03 C341.40 407.70 338.84 408.50 336.72 409.29 C334.59 410.09 327.79 411.33 323.45 411.41 C319.96 411.48 319.25 410.99 318.90 408.87 C318.54 406.74 322.39 405.60 323.97 404.62 C326.48 403.05 329.20 400.80 331.14 399.30 C333.09 397.80 335.27 395.33 335.59 392.66 C335.91 389.99 343.92 379.25 348.05 374.42 C352.18 369.59 356.21 360.78 356.82 359.23 C357.64 357.16 357.72 355.49 357.72 353.94 C357.72 351.32 356.50 349.93 355.60 348.46 C354.70 346.99 352.82 345.03 351.43 344.62 C350.04 344.21 347.18 344.87 344.40 344.95 C341.62 345.03 337.70 343.56 336.31 342.74 C334.92 341.92 332.63 341.92 331.32 341.92 C330.01 341.92 326.17 342.17 324.05 341.35 C321.92 340.53 320.61 340.37 318.90 340.78 C317.18 341.19 317.43 341.11 314.89 341.43 C312.36 341.76 307.62 343.23 305.74 343.80 C303.86 344.37 298.71 345.68 296.26 346.25 C293.81 346.83 287.67 347.64 286.20 348.05 C284.73 348.46 278.93 350.59 276.39 350.83 C273.86 351.08 268.96 351.32 265.44 351.32 C261.93 351.32 260.95 352.06 259.80 353.20 C258.66 354.35 257.76 357.94 256.29 361.78 C254.82 365.63 252.69 367.34 251.55 367.67 C250.40 368.00 247.71 368.49 245.50 369.88 C243.29 371.27 243.29 374.13 243.62 376.91 C243.95 379.69 243.70 382.55 242.88 384.43 C242.07 386.31 235.93 386.63 233.89 386.88 C231.85 387.12 227.92 387.53 226.32 388.53 C225.22 389.21 224.18 391.57 222.94 393.27 C221.69 394.97 218.40 399.80 216.26 402.84 C214.13 405.88 212.93 407.94 212.21 410.62 C211.52 412.79 209.55 416.74 207.67 419.21 C205.80 421.67 203.30 424.26 203.30 424.26 C202.69 425.30 202.13 426.10 201.67 426.60 C200.51 427.86 200.69 427.23 199.52 429.66 C198.36 432.08 199.34 435.59 199.61 437.47 C199.88 439.36 199.52 444.58 199.43 446.91 C199.35 449.16 199.71 451.38 200.16 453.57 C200.57 455.57 200.66 458.11 201.76 459.85 C202.39 460.84 203.29 462.19 205.08 465.25 C206.87 468.30 209.29 466.94 213.82 467.86 C216.53 468.40 216.83 470.52 216.87 472.91 C216.89 474.04 216.84 475.25 217.40 476.28 C218.06 477.50 220.52 478.65 219.80 480.31 C219.26 481.55 216.77 481.40 217.35 483.20 C217.54 483.82 218.20 484.35 217.40 484.91 C216.87 485.27 215.73 485.17 215.06 485.48 C212.17 486.78 216.54 491.36 217.42 493.13 C218.63 495.53 216.03 498.59 214.30 500.00 C211.87 501.98 208.32 501.51 210.24 505.48 C211.49 508.06 216.37 509.11 218.16 509.74 C219.95 510.37 222.19 511.18 225.87 511.98 C229.54 512.79 234.65 514.32 236.44 514.23 C238.24 514.14 240.12 514.41 240.57 515.22 C241.78 517.41 244.38 518.32 246.13 519.92 C246.87 520.60 247.25 521.42 247.83 522.19 C248.39 522.94 248.94 523.80 249.56 524.49 C250.12 525.12 250.89 525.25 251.42 525.86 C251.93 526.44 252.19 527.35 252.43 528.07 C252.80 529.20 252.89 530.36 253.35 531.39 C253.58 532.56 254.21 534.64 254.75 535.46", "M230.19 491.33 C228.48 491.05 226.57 488.75 225.43 487.22 C224.28 485.69 220.09 479.57 220.09 479.57"] };
  function pct(v) { return (v * 100).toFixed(2) + '%'; }
  function line(v, r) {
    var p = v.pts[r.id], x0 = v.home.x * 1000, y0 = v.home.y * v.vh, x1 = p.x * 1000, y1 = p.y * v.vh;
    return 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ' ' + y1.toFixed(1);
  }
  function drawnBase() {
    var D = GL.DRAWN; if (!D) return '';
    return '<svg class="sio-base" viewBox="0 0 ' + D.W + ' ' + D.H + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Tegnet kort over området omkring lejligheden med veje og bygninger.">' +
      '<rect class="sd-bg" width="' + D.W + '" height="' + D.H + '"/>' +
      D.roads.map(function (d) { return '<path class="sd-rc" d="' + d + '"/>'; }).join('') +
      D.roads.map(function (d) { return '<path class="sd-rf" d="' + d + '"/>'; }).join('') +
      D.blds.map(function (p) { return '<polygon class="sd-b' + (p === FH_POLY ? ' sd-fh' : '') + '" points="' + p + '"/>'; }).join('') +
      '<polygon class="sd-apt" points="' + D.apt + '"/>' +
      D.labels.map(function (l) { return '<text class="sd-l" transform="translate(' + l[1] + ' ' + l[2] + ') rotate(' + l[3] + ')" text-anchor="middle">' + l[0] + '</text>'; }).join('') +
      '<text class="sd-n" x="34" y="70">N ↑</text>' +
      '<text class="sd-n" x="' + (D.W - 30) + '" y="' + (D.H - 28) + '" text-anchor="end">Tegnet kort, ikke målfast</text></svg>';
  }
  function photoPanel(kind) {
    var v = VIEWS[kind], drawn = kind === 'tegnet';
    var base = drawn ? drawnBase() :
      '<img src="assets/web/kort/ski-in-out.webp" srcset="assets/web/kort/ski-in-out-m.webp 900w, assets/web/kort/ski-in-out.webp 1600w" sizes="(max-width: 860px) 100vw, 900px" alt="Luftfoto af området omkring lejligheden. Stiplede linjer viser 50 til 100 meter til langrendsløjpen og 50 til 100 meter til slalompisten." loading="lazy">';
    return '<div class="plan-pills sio-pills" role="group" aria-label="Vis rute">' +
        '<button type="button" class="filter" data-f="both" aria-pressed="true">Begge</button>' +
        ROUTES.map(function (r) { return '<button type="button" class="filter" data-f="' + r.id + '" aria-pressed="false">' + GL.icon(r.icon) + r.name + '</button>'; }).join('') +
      '</div>' +
      '<div class="sio-map' + (drawn ? ' sio-draw' : '') + '" data-focus="both"' + ' style="aspect-ratio:' + (drawn ? GL.DRAWN.W + '/' + GL.DRAWN.H : '2000/1577') + '">' + base +
        '<svg class="sio-svg" viewBox="0 0 1000 ' + v.vh + '" preserveAspectRatio="none" aria-hidden="true">' +
          ROUTES.map(function (r) { var d = trackPath(kind, r.id, v); return '<g class="track" data-route="' + r.id + '"><path class="trk-halo" d="' + d + '"/><path class="trk" d="' + d + '"/></g>'; }).join('') +
          ROUTES.map(function (r) { return '<g class="route" data-route="' + r.id + '"><path class="halo" d="' + line(v, r) + '"/><path class="dash" d="' + line(v, r) + '"/></g>'; }).join('') +
        '</svg>' +
        '<span class="sio-home" style="left:' + pct(v.home.x) + ';top:' + pct(v.pulse) + '"></span>' +
        '<span class="sio-homelabel" style="left:' + pct((v.label || v.home).x) + ';top:' + pct((v.label || v.home).y) + '"><b>Lejligheden</b><em>Skipsfjellvegen 52</em></span>' +
        ROUTES.map(function (r) {
          var p = v.pts[r.id];
          return '<span class="sio-dot" data-route="' + r.id + '" style="left:' + pct(p.x) + ';top:' + pct(p.y) + '"></span>' +
            '<button type="button" class="sio-chip ' + r.pos + '" data-route="' + r.id + '" style="left:' + pct(p.x) + ';top:' + pct(p.y) + '" aria-label="' + r.name + ', ' + r.dist + ' fra lejligheden">' +
            GL.icon(r.icon) + '<span><b>' + r.name + '</b><em>' + r.dist + '</em></span></button>';
        }).join('') +
        '<span class="sio-dot poi" style="left:' + pct(v.poi.x) + ';top:' + pct(v.poi.y) + '"></span>' +
        '<span class="sio-chip poi below" style="left:' + pct(v.poi.x) + ';top:' + pct(v.poi.y) + '">' + GL.icon('wrench') + '<span><b>Fælleshus</b><em>Smørebod</em></span></span>' +
      '</div>' +
      '<div class="grid grid-3 sio-cards">' +
        ROUTES.map(function (r) {
          return '<div class="card" data-route="' + r.id + '"><div class="ico-box">' + GL.icon(r.icon) + '</div><div class="kicker">Fra lejligheden</div>' +
            '<div class="sio-dist">' + r.dist + '</div><h3>' + r.name + '</h3><p class="muted">' + r.text + '</p>' +
            '<span class="verify">cirka, skal verificeres på stedet</span></div>';
        }).join('') +
        '<div class="card" data-keep="1"><div class="ico-box">' + GL.icon('wrench') + '</div><div class="kicker">På stedet</div>' +
          '<h3>Fælleshus med smørebod</h3><p class="muted">Fælles smørebod og stativer, som beboerne kan bruge. Markeret på kortet, uden afstand.</p>' +
          '<span class="verify">kildepåstand fra salgsannoncen, skal verificeres</span></div>' +
      '</div>' +
      '<p class="faint sio-note">Afstande er ejerens angivelse (3. oktober 2026). Fælleshusets placering er ejerens markering. Slalompistens og langrendsløjpens forløb (blå og lilla) er tegnet ud fra luftfotoet og ejerens beskrivelse, cirka, skal verificeres. ' + (drawn ? 'Tegnet kort: veje og bygninger er omtegnet som egne linjer ud fra et terrænkort. Skematisk, ikke målfast. Bygningernes form og placering er aflæst af kortet.' : 'Luftfoto: prototypebillede, kilde og rettigheder skal afklares før endelig brug.') + '</p>';
  }

  var GAUSTA_KART = 'https://www.gausta.com/kart/';
  function kartLink(label) {
    return '<p class="sio-more"><a class="btn btn-ghost btn-sm" href="' + GAUSTA_KART + '" target="_blank" rel="noopener">' + label + ' <span aria-hidden="true">↗</span></a><span class="faint"> Åbner gausta.com i en ny fane</span></p>';
  }
  function langrendPanel() {
    var ax = (LK.access[0] - LK.x0) / LK.w, ay = (LK.access[1] - LK.y0) / LK.h;
    return '<div class="sio-map sio-excerpt" style="aspect-ratio:4/3">' +
        '<img src="assets/web/kort/langrend-udsnit.webp" alt="Udsnit af løjpekortet omkring tilgangen til Rød 15, 10 og 6, med ringe på 50 og 100 meter." loading="lazy">' +
        '<svg class="sio-svg" viewBox="' + LK.x0 + ' ' + LK.y0 + ' ' + LK.w + ' ' + LK.h + '" preserveAspectRatio="none" aria-hidden="true">' +
          '<g class="track" data-route="langrend">' + LK.paths.map(function (d) { return '<path class="trk-halo" d="' + d + '"/>'; }).join('') + LK.paths.map(function (d) { return '<path class="trk" d="' + d + '"/>'; }).join('') + '</g>' +
          '<circle class="zm-ring" cx="' + LK.access[0] + '" cy="' + LK.access[1] + '" r="' + LK.r100 + '"/>' +
          '<circle class="zm-ring" cx="' + LK.access[0] + '" cy="' + LK.access[1] + '" r="' + LK.r50 + '"/>' +
        '</svg>' +
        '<span class="sio-dot" data-route="langrend" style="left:' + pct(ax) + ';top:' + pct(ay) + '"></span>' +
        '<span class="sio-chip above0" data-route="langrend" style="left:' + pct(ax) + ';top:' + pct(ay - LK.r100 / LK.h - 0.025) + '">' + GL.icon('wave') + '<span><b>Tilgang til Rød 15, 10 og 6</b><em>Lejligheden: 50 til 100 m herfra</em></span></span>' +
      '</div>' +
      kartLink('Se hele løjpekortet hos Gausta') +
      '<p class="faint sio-note">Udsnit af løjpekortet fra GKT (Gausta-Kvitåvatn Turistservice, februar 2019). Cirklen er ejerens markering af tilgangen (3. oktober 2026). De stiplede ringe er 50 m og 100 m efter kortets målestok, og lejligheden ligger inden for dem. Prototypebillede, skal kontrolleres mod nyeste kort og godkendes før endelig brug.</p>' +
      '<div class="sio-cards"><div class="card" data-route="langrend">' +
        '<div class="ico-box">' + GL.icon('wave') + '</div><div class="kicker">Langrend · tilgang fra lejligheden</div>' +
        '<div class="sio-dist">50 til 100 m</div><h3>Rød 15, 10 og 6</h3>' +
        '<div class="list-row"><span class="grow muted">Rød 6</span><span>Skipsfjell, 6,2 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Rød 10</span><span>Skipsfjell, Nordhaddefjell, Langetjønn, 9,5 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Rød 15</span><span>Skipsfjell, Jotehaug, Klokksjåvatn, Langetjønn, 13,6 km</span></div>' +
        '<div class="list-row"><span class="grow muted">Niveau</span><span>Røde løjper er krevende, delstrækninger ved Langetjønn og Vatnedalen middels</span></div>' +
        '<p class="faint" style="margin:10px 0 0">Kildepåstand: kortets forklaring (GKT, februar 2019). Skal kontrolleres mod nyeste løjpekort. Alle løjper er præpareret til fristil, undtagen de grønne.</p>' +
      '</div></div>';
  }

  var SK = { fx: 0.5, fy: 0.4944 };   // cirklen i udsnittet (720 x 540 px af alpinkortet)
  function slalomPanel() {
    return '<div class="sio-map sio-excerpt" style="aspect-ratio:4/3">' +
        '<img src="assets/web/kort/slalom-udsnit.webp" alt="Udsnit af Gausta Skisenters pistekort omkring tilgangen til alpinpisten, grøn 3." loading="lazy">' +
        '<span class="sio-dot" data-route="slalom" style="left:' + pct(SK.fx) + ';top:' + pct(SK.fy) + '"></span>' +
        '<span class="sio-chip below0" data-route="slalom" style="left:' + pct(SK.fx) + ';top:' + pct(SK.fy + 0.085) + '">' + GL.icon('snow') + '<span><b>Tilgang til alpinpisten, grøn 3</b><em>Lejligheden: 50 til 100 m herfra</em></span></span>' +
      '</div>' +
      kartLink('Se hele pistekortet hos Gausta') +
      '<p class="faint sio-note">Udsnit af Gausta Skisenters løjpekort 2025/2026. Cirklen er ejerens markering af tilgangen (3. oktober 2026). Kortet er et tegnet panorama og ikke målfast, så placeringen er cirka. Prototypebillede, skal godkendes før endelig brug.</p>' +
      '<div class="sio-cards"><div class="card" data-route="slalom">' +
        '<div class="ico-box">' + GL.icon('snow') + '</div><div class="kicker">Slalom · tilgang fra lejligheden</div>' +
        '<div class="sio-dist">50 til 100 m</div><h3>Nr. 3 Kofferten</h3>' +
        '<div class="list-row"><span class="grow muted">Niveau</span><span>Veldig lett (grøn)</span></div>' +
        '<div class="list-row"><span class="grow muted">Længde</span><span>1000 m</span></div>' +
        '<div class="list-row"><span class="grow muted">Højdeforskel</span><span>150 m</span></div>' +
        '<p class="faint" style="margin:10px 0 0">Kildepåstand: kortets oversigt over bakker (Gausta Skisenter, 2025/2026). Skal kontrolleres mod det nyeste kort. Nr. 3 er den bakke, tilgangen fører til, ikke nødvendigvis den eneste, man kan køre.</p>' +
      '</div></div>';
  }

  function render(el) {
    var tabs = [['foto', 'Luftfoto'], ['tegnet', 'Tegnet kort'], ['langrend', 'Langrendskort'], ['slalom', 'Slalomkort']];
    el.innerHTML = '<div class="subnav sio-tabs" role="tablist" aria-label="Vælg kort">' +
      tabs.map(function (t, i) { return '<button type="button" role="tab" class="sio-tab" data-t="' + t[0] + '" aria-selected="' + (i === 0) + '">' + t[1] + '' + '</button>'; }).join('') + '</div>' +
      '<div class="sio-body"></div>';
    var body = el.querySelector('.sio-body'), cur = null;
    function show(id) {
      if (id === cur) return; cur = id;
      [].forEach.call(el.querySelectorAll('.sio-tab'), function (b) { b.setAttribute('aria-selected', String(b.dataset.t === id)); });
      body.innerHTML = (id === 'foto' || id === 'tegnet') ? photoPanel(id) : id === 'langrend' ? langrendPanel() : slalomPanel();
      if (id === 'foto' || id === 'tegnet') {
        var map = body.querySelector('.sio-map');
        var focus = function (f) {
          map.setAttribute('data-focus', f);
          [].forEach.call(body.querySelectorAll('.sio-pills .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === f)); });
          [].forEach.call(body.querySelectorAll('.sio-cards .card'), function (c) { c.classList.toggle('dim', !c.dataset.keep && f !== 'both' && c.dataset.route !== f); });
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
