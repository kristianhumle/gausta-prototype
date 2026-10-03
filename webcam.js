/* Webcams: seks måder at vise dem på (sideelementer.html, e-webcams).
   Pladsholder-scener er tegnet af designets egne farver (ingen tredjepartsbilleder).
   Det eneste rigtige billede er Statens vegvesens vejkamera (NLOD), og det indlæses først ved klik. */
(function () {
  'use strict';
  var root = document.getElementById('e-webcams');
  if (!root) return;

  var VEG = { id: '0829010_1', url: 'https://kamera.atlas.vegvesen.no/api/images/0829010_1', name: 'Fv 37 Jønjiljo', credit: 'Kilde: Statens vegvesen (NLOD)' };
  var timeFmt = new Intl.DateTimeFormat('da-DK', { hour: '2-digit', minute: '2-digit' });

  function fill(c) { return 'style="fill:var(' + c + ')"'; }
  function scene(kind) {
    var s = '';
    if (kind === 'top') {
      s = '<polygon points="0,150 60,95 110,125 170,45 215,100 260,70 320,140 320,180 0,180" ' + fill('--r1') + '/>' +
        '<polygon points="0,165 80,120 140,150 200,98 270,150 320,130 320,180 0,180" ' + fill('--r2') + '/>' +
        '<polygon points="165,52 170,45 177,56" style="fill:var(--surface)"/>' +
        '<rect x="166" y="46" width="9" height="6" ' + fill('--r3') + '/>' +
        '<polygon points="0,180 0,160 90,160 150,172 320,150 320,180" ' + fill('--r3') + '/>';
    } else if (kind === 'slope') {
      s = '<polygon points="0,120 90,60 180,70 320,20 320,180 0,180" ' + fill('--r2') + '/>' +
        '<polygon points="30,180 130,70 200,78 210,90 130,180" style="fill:var(--surface)"/>' +
        '<polyline points="250,170 250,60 120,40" style="stroke:var(--text);stroke-width:1.4;fill:none;opacity:.55"/>' +
        '<circle cx="150" cy="130" r="2.4" ' + fill('--accent') + '/><circle cx="165" cy="118" r="2.4" ' + fill('--accent') + '/><circle cx="105" cy="150" r="2.4" ' + fill('--accent') + '/>';
    } else if (kind === 'road') {
      s = '<polygon points="0,110 80,70 160,95 240,60 320,100 320,180 0,180" ' + fill('--r1') + '/>' +
        '<polygon points="130,180 175,100 190,100 250,180" style="fill:var(--muted)"/>' +
        '<polyline points="180,178 183,100" style="stroke:var(--surface);stroke-width:2;stroke-dasharray:8 8;fill:none"/>' +
        '<polygon points="0,180 0,150 125,180" ' + fill('--r3') + '/><polygon points="320,180 320,140 255,180" ' + fill('--r3') + '/>';
    } else {
      s = '<polygon points="0,40 70,70 150,40 240,75 320,35 320,180 0,180" ' + fill('--r1') + '/>' +
        '<polygon points="0,180 0,120 110,100 215,110 320,118 320,180" ' + fill('--r2') + '/>' +
        [[40, 128], [75, 124], [112, 130], [150, 124], [190, 130], [226, 126], [262, 132]].map(function (p) {
          return '<polygon points="' + p[0] + ',' + p[1] + ' ' + (p[0] + 12) + ',' + (p[1] - 10) + ' ' + (p[0] + 24) + ',' + p[1] + '" ' + fill('--r3') + '/><rect x="' + p[0] + '" y="' + p[1] + '" width="24" height="14" style="fill:var(--surface);opacity:.85"/>';
        }).join('');
    }
    return '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + s + '</svg>';
  }
  Array.prototype.forEach.call(root.querySelectorAll('[data-scene]'), function (el) {
    el.innerHTML = scene(el.getAttribute('data-scene')) + '<span class="wc-ph">Pladsholder</span>';
  });

  function stampOf(box) { var sc = box.closest('.wc-ver') || box.closest('[data-wc-out]') || box.parentNode; return sc.querySelector('[data-stamp]'); }
  function loadReal(box, btn) {
    var img = new Image();
    img.alt = 'Vejkamera Fv 37 Jønjiljo, Statens vegvesen';
    img.referrerPolicy = 'no-referrer';
    img.onload = function () {
      box.innerHTML = ''; box.appendChild(img);
      var st = stampOf(box);
      if (st) st.textContent = 'Hentet kl. ' + timeFmt.format(new Date());
      if (btn) btn.textContent = 'Fjern billede';
      box.setAttribute('data-loaded', '1');
    };
    img.onerror = function () {
      var st = stampOf(box);
      if (st) st.textContent = 'Kilden svarer ikke. Viser pladsholder.';
      if (btn) btn.textContent = 'Prøv igen';
    };
    img.src = VEG.url + '?t=' + Date.now();
  }
  function wireReal(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll('[data-real-load]'), function (btn) {
      var box = scope.querySelector(btn.getAttribute('data-real-load'));
      var original = box.innerHTML;
      btn.addEventListener('click', function () {
        if (box.getAttribute('data-loaded') === '1') {
          box.innerHTML = original; box.setAttribute('data-loaded', '0'); btn.textContent = 'Indlæs rigtigt billede (kontakter Statens vegvesen)';
          var st = stampOf(box); if (st) st.textContent = 'Eksempel: ikke hentet endnu';
          return;
        }
        loadReal(box, btn);
      });
    });
  }
  wireReal(root);

  /* Version 3: faner med flere kameraer. */
  var tabs = root.querySelector('[data-wc-tabs]');
  if (tabs) {
    var btns = tabs.querySelectorAll('[role="tab"]');
    var out = root.querySelector('[data-wc-out]');
    var info = {
      top: { scene: 'top', badge: ['live', 'Live'], t: 'Toppen af Gaustatoppen', src: 'Gaustabanen (ipcamlive). Indlejring er spærret af kilden, så kun link eller aftale', link: 'https://gaustabanen.no/en/live-updates', stamp: 'Billedet vises ikke her (pladsholder)' },
      slope: { scene: 'slope', badge: ['sæson', 'Sæson'], t: 'Pisten, Koffertlokket', src: 'Gausta.com via Norway Live. Vilkår uafklarede. Billederne var 6-10 dage gamle 3. oktober 2026 (off-season)', link: 'https://www.gausta.com/live-data-gausta/', stamp: 'Pladsholder. Skjules, hvis billedet er ældre end 2 timer' },
      road: { scene: 'road', badge: ['frisk', 'Frisk'], t: 'Vejen: Fv 37 Jønjiljo', src: VEG.credit, link: 'https://www.vegvesen.no/trafikk/', stamp: 'Eksempel: ikke hentet endnu', real: true },
      town: { scene: 'town', badge: ['frisk', 'Frisk'], t: 'Rjukan, mod vest', src: 'Privat kamera (geirb.com). Vilkår ikke læst', link: 'https://www.visitrjukan.no/', stamp: 'Pladsholder' }
    };
    function show(key) {
      var d = info[key];
      btns.forEach(function (b) { var on = b.getAttribute('data-key') === key; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
      out.innerHTML =
        '<div class="wc-frame"><div class="wc-img" data-scene="' + d.scene + '" id="wc-main">' + scene(d.scene) + '<span class="wc-ph">' + (d.real ? 'Pladsholder, indtil du klikker' : 'Pladsholder') + '</span></div>' +
        '<span class="wc-badge wc-' + d.badge[0] + '">' + d.badge[1] + '</span></div>' +
        '<div class="wc-cap"><b>' + d.t + '</b><span class="stamp" data-stamp>' + d.stamp + '</span></div>' +
        '<div class="wc-src">' + d.src + ' · <a href="' + d.link + '" target="_blank" rel="noopener">Åbn hos kilden</a></div>' +
        (d.real ? '<button type="button" class="btn btn-primary btn-sm" data-real-load="#wc-main">Indlæs rigtigt billede (kontakter Statens vegvesen)</button>' : '');
      wireReal(out);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { show(b.getAttribute('data-key')); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = btns[(i + 1) % btns.length];
        if (e.key === 'ArrowLeft') n = btns[(i - 1 + btns.length) % btns.length];
        if (n) { e.preventDefault(); n.focus(); n.click(); }
      });
    });
    show('top');
  }

  /* Version 5: live-stream bag klik. Prototypen indlæser ikke noget fra YouTube. */
  var live = root.querySelector('[data-live]');
  if (live) {
    var lb = live.querySelector('button');
    var lbox = live.querySelector('[data-live-msg]');
    lb.addEventListener('click', function () {
      lbox.hidden = !lbox.hidden;
      lb.textContent = lbox.hidden ? 'Indlæs live (kontakter YouTube)' : 'Skjul';
    });
  }
})();
