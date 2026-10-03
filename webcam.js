/* Webcams: seks måder at vise dem på (sideelementer.html, e-webcams).
   Pladsholder-scener er tegnet af designets egne farver (ingen tredjepartsbilleder).
   Tre rigtige kilder kan indlæses, alle først ved klik, så siden ikke kontakter tredjepart af sig selv:
   1) Statens vegvesen, Fv 37 Jønjiljo (stillbillede, NLOD)
   2) Gaustabanen, toppen af Gaustatoppen (stillbillede fra ipcamlive, opdateres hvert 10. sekund)
   3) Gausta LIVE (YouTube, Norway Live) via youtube-nocookie.com */
(function () {
  'use strict';
  var root = document.getElementById('e-webcams');
  if (!root) return;

  var CAMS = {
    veg: { url: 'https://kamera.atlas.vegvesen.no/api/images/0829010_1', alt: 'Vejkamera Fv 37 Jønjiljo, Statens vegvesen', refresh: 0, label: 'Indlæs rigtigt billede (kontakter Statens vegvesen)', idle: 'Eksempel: ikke hentet endnu' },
    top: { url: 'https://g0.ipcamlive.com/player/snapshot.php?alias=gabakontortopp', alt: 'Gaustatoppen, kamera fra Gaustabanen', refresh: 10000, label: 'Indlæs live-billede fra Gaustatoppen (kontakter Gaustabanen)', idle: 'Ikke hentet endnu' }
  };
  var YT_ID = 'NGGIyXwoSiU';
  var timeFmt = new Intl.DateTimeFormat('da-DK', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  var tabTimers = [];

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
  function bust(u) { return u + (u.indexOf('?') > -1 ? '&' : '?') + 't=' + Date.now(); }
  function stopBox(box) { if (box._timer) { clearInterval(box._timer); box._timer = null; } }

  function loadReal(box, btn, cam) {
    var img = new Image();
    img.alt = cam.alt;
    img.referrerPolicy = 'no-referrer';
    img.onload = function () {
      box.innerHTML = ''; box.appendChild(img);
      var st = stampOf(box);
      if (st) st.textContent = (cam.refresh ? 'Opdateret ' : 'Hentet ') + timeFmt.format(new Date()) + (cam.refresh ? ' (hvert ' + cam.refresh / 1000 + '. sek.)' : '');
      if (btn) btn.textContent = 'Fjern billede';
      box.setAttribute('data-loaded', '1');
      if (cam.refresh) {
        stopBox(box);
        box._timer = setInterval(function () {
          var n = new Image(); n.referrerPolicy = 'no-referrer';
          n.onload = function () { img.src = n.src; var s2 = stampOf(box); if (s2) s2.textContent = 'Opdateret ' + timeFmt.format(new Date()) + ' (hvert ' + cam.refresh / 1000 + '. sek.)'; };
          n.src = bust(cam.url);
        }, cam.refresh);
        tabTimers.push(box);
      }
    };
    img.onerror = function () {
      var st = stampOf(box);
      if (st) st.textContent = 'Kilden svarer ikke. Viser pladsholder.';
      if (btn) btn.textContent = 'Prøv igen';
    };
    img.src = bust(cam.url);
  }
  function wireReal(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll('[data-real-load]'), function (btn) {
      var box = scope.querySelector(btn.getAttribute('data-real-load'));
      var cam = CAMS[btn.getAttribute('data-cam') || 'veg'];
      var original = box.innerHTML;
      btn.addEventListener('click', function () {
        if (box.getAttribute('data-loaded') === '1') {
          stopBox(box);
          box.innerHTML = original; box.setAttribute('data-loaded', '0'); btn.textContent = cam.label;
          var st = stampOf(box); if (st) st.textContent = cam.idle;
          return;
        }
        loadReal(box, btn, cam);
      });
    });
  }
  wireReal(root);

  /* Version 3: faner med flere kameraer. Toppen og Vejen kan indlæses rigtigt ved klik. */
  var tabs = root.querySelector('[data-wc-tabs]');
  if (tabs) {
    var btns = tabs.querySelectorAll('[role="tab"]');
    var out = root.querySelector('[data-wc-out]');
    var info = {
      top: { scene: 'top', badge: ['live', 'Næsten live'], t: 'Toppen af Gaustatoppen', src: 'Kilde: Gaustabanen (ipcamlive). Deres afspiller kan ikke indlejres (kilden spærrer), så her hentes stillbilledet, som opdateres hvert 10. sekund. Ikke et officielt API, rettigheder uafklarede', link: 'https://gaustabanen.no/en/live-updates', stamp: CAMS.top.idle, real: 'top' },
      slope: { scene: 'slope', badge: ['sæson', 'Sæson'], t: 'Pisten, Koffertlokket', src: 'Gausta.com via Norway Live. Vilkår uafklarede. Billederne var 6-10 dage gamle 3. oktober 2026 (off-season)', link: 'https://www.gausta.com/live-data-gausta/', stamp: 'Pladsholder. Skjules, hvis billedet er ældre end 2 timer' },
      road: { scene: 'road', badge: ['frisk', 'Frisk'], t: 'Vejen: Fv 37 Jønjiljo', src: 'Kilde: Statens vegvesen (NLOD)', link: 'https://www.vegvesen.no/trafikk/', stamp: CAMS.veg.idle, real: 'veg' },
      town: { scene: 'town', badge: ['frisk', 'Frisk'], t: 'Rjukan, mod vest', src: 'Privat kamera (geirb.com). Vilkår ikke læst', link: 'https://www.visitrjukan.no/', stamp: 'Pladsholder' }
    };
    function show(key) {
      var d = info[key];
      tabTimers.forEach(stopBox); tabTimers = [];
      btns.forEach(function (b) { var on = b.getAttribute('data-key') === key; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
      out.innerHTML =
        '<div class="wc-frame"><div class="wc-img" data-scene="' + d.scene + '" id="wc-main">' + scene(d.scene) + '<span class="wc-ph">' + (d.real ? 'Pladsholder, indtil du klikker' : 'Pladsholder') + '</span></div>' +
        '<span class="wc-badge wc-' + d.badge[0] + '">' + d.badge[1] + '</span></div>' +
        '<div class="wc-cap"><b>' + d.t + '</b><span class="stamp" data-stamp>' + d.stamp + '</span></div>' +
        '<div class="wc-src">' + d.src + ' · <a href="' + d.link + '" target="_blank" rel="noopener">Åbn hos kilden</a></div>' +
        (d.real ? '<button type="button" class="btn btn-primary btn-sm" data-real-load="#wc-main" data-cam="' + d.real + '">' + CAMS[d.real].label + '</button>' : '');
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

  /* Version 5: rigtig live-stream (Gausta LIVE, YouTube) indlæses først ved klik, via youtube-nocookie.com. */
  var live = root.querySelector('[data-live]');
  if (live) {
    var lb = live.querySelector('button');
    var poster = live.querySelector('[data-live-poster]');
    var msg = live.querySelector('[data-live-msg]');
    var posterHtml = poster.innerHTML;
    lb.addEventListener('click', function () {
      var on = poster.getAttribute('data-loaded') === '1';
      if (on) {
        poster.innerHTML = posterHtml; poster.setAttribute('data-loaded', '0');
        lb.textContent = 'Indlæs live (kontakter YouTube)'; msg.hidden = true;
        return;
      }
      poster.innerHTML = '<div class="wc-frame"><div class="wc-img"><iframe title="Gausta LIVE (Norway Live på YouTube)" src="https://www.youtube-nocookie.com/embed/' + YT_ID + '?rel=0&modestbranding=1" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe></div></div>';
      poster.setAttribute('data-loaded', '1');
      lb.textContent = 'Fjern afspiller';
      msg.hidden = false;
    });
  }
})();
