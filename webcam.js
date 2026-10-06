/* Webcams: to måder at vise dem på (sideelementer.html, e-webcams): version 2 (stillbillede) og version 3 (faner).
   Prototypen er ikke offentlig, så de RIGTIGE kilder indlæses med det samme, uden klik (6. oktober 2026, Brugeroplysning).
   Tilladelse til at vise dem afklares senere (se teknisk/datakilder/08-webcams.md). Pladsholder-scener er kun fallback,
   hvis en kilde ikke svarer. Kilder:
   1) Statens vegvesen, Fv 37 Jønjiljo (stillbillede, NLOD)
   2) Gaustabanen, toppen af Gaustatoppen (stillbillede fra ipcamlive, opdateres hvert 10. sekund)
   3) Gausta.com via Norway Live (pistebillede fra cdn.norwaylive.tv, opdateres kun i driftsperioder)
   4) Rjukan, mod vest (geirb.com, privat kamera)
   5) Gausta LIVE (Norway Live på YouTube), fanen Live i version 3, via youtube-nocookie.com, startes uden lyd */
(function () {
  'use strict';
  var root = document.getElementById('e-webcams');
  if (!root) return;

  var NL = 'https://cdn.norwaylive.tv/snapshots/6dc5e9c7-99d2-40a2-aeaf-d7335e752b3c/';
  var CAMS = {
    veg: { url: 'https://kamera.atlas.vegvesen.no/api/images/0829010_1', alt: 'Vejkamera Fv 37 Jønjiljo, Statens vegvesen', refresh: 300000, idle: 'Henter billede ...' },
    top: { url: 'https://g0.ipcamlive.com/player/snapshot.php?alias=gabakontortopp', alt: 'Gaustatoppen, kamera fra Gaustabanen', refresh: 10000, idle: 'Henter billede ...' },
    slope: { url: NL + 'kam4utsnitt1.jpg', alt: 'Koffertlokket mod Gaustatoppen, Gausta via Norway Live', refresh: 300000, idle: 'Henter billede ...' },
    town: { url: 'https://www.geirb.com/cam_2.jpg', alt: 'Rjukan mod vest, geirb.com', refresh: 60000, idle: 'Henter billede ...' }
  };
  var YT_ID = 'NGGIyXwoSiU';
  var PLAY = '<span class="wc-play"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span>';
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

  function every(ms) { return ms >= 60000 ? 'hvert ' + Math.round(ms / 60000) + '. min.' : 'hvert ' + ms / 1000 + '. sek.'; }
  function setStamp(box, txt) { var st = stampOf(box); if (st) st.textContent = txt; }

  /* Henter billedet med det samme og opdaterer det med cam.refresh. Ved fejl vises pladsholderen, og der prøves igen. */
  function loadReal(box, cam) {
    var img = null;
    stopBox(box);
    function done(n) {
      if (!img) { img = n; img.alt = cam.alt; box.innerHTML = ''; box.appendChild(img); box.setAttribute('data-loaded', '1'); }
      else img.src = n.src;
      setStamp(box, 'Opdateret ' + timeFmt.format(new Date()) + ' (' + every(cam.refresh) + ')');
    }
    function fetchOnce() {
      var n = new Image(); n.referrerPolicy = 'no-referrer';
      var settled = false, tm = setTimeout(function () { if (!settled) fail(); }, 8000);
      n.onload = function () { settled = true; clearTimeout(tm); done(n); };
      n.onerror = function () { settled = true; clearTimeout(tm); fail(); };
      function fail() {
        if (!img) setStamp(box, 'Kilden svarer ikke lige nu (fx uden for sæson). Viser pladsholder og prøver igen ' + every(cam.refresh));
        else setStamp(box, 'Kilden svarer ikke lige nu. Viser sidste billede.');
      }
      n.src = bust(cam.url);
    }
    fetchOnce();
    box._timer = setInterval(fetchOnce, cam.refresh);
    if (box.id === 'wc-main') tabTimers.push(box);
  }
  /* Version 2: vejkameraet indlæses straks. */
  Array.prototype.forEach.call(root.querySelectorAll('[data-cam]'), function (box) { loadReal(box, CAMS[box.getAttribute('data-cam')]); });

  /* Live-feedet vises uden YouTubes knapper og menuer: controls=0, disablekb, ingen fuldskærm, ingen annoteringer, og et usynligt
     lag over iframen (iframen har pointer-events:none) hindrer, at hover åbner titel eller kontroller. Klik på laget starter afspilningen, hvis autoplay er blokeret. Billedet zoomes 12 % for at skjule kanterne (logo, titellinje).
     Lyd slås til med en lille knap via YouTubes iframe-API (postMessage). */
  function startLive(main) {
    var src = 'https://www.youtube-nocookie.com/embed/' + YT_ID + '?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1';
    main.innerHTML = '<iframe title="Gausta LIVE (Norway Live på YouTube)" src="' + src + '" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" tabindex="-1" style="position:absolute;left:-6%;top:-6%;width:112%;height:112%;border:0;pointer-events:none"></iframe>' +
      '<div class="wc-cover" aria-hidden="true"></div><button type="button" class="wc-sound" aria-pressed="false">Slå lyd til</button>';
    main.setAttribute('data-loaded', '1');
    var fr = main.querySelector('iframe'), btn = main.querySelector('.wc-sound');
    var cover = main.querySelector('.wc-cover');
    function cmd(f) { try { fr.contentWindow.postMessage(JSON.stringify({ event: 'command', func: f, args: '' }), '*'); } catch (e) {} }
    btn.addEventListener('click', function () {
      var on = btn.getAttribute('aria-pressed') !== 'true';
      cmd(on ? 'unMute' : 'mute'); if (on) cmd('setVolume'); cmd('playVideo');
      btn.setAttribute('aria-pressed', on ? 'true' : 'false'); btn.textContent = on ? 'Slå lyd fra' : 'Slå lyd til';
    });
    fr.addEventListener('load', function () { setTimeout(function () { cmd('playVideo'); }, 800); });
    cover.addEventListener('click', function () { cmd('playVideo'); });
    setStamp(main, 'Live fra YouTube, starter uden lyd');
  }
  /* Version 2: Gausta LIVE-feedet indlæses straks. */
  Array.prototype.forEach.call(root.querySelectorAll('[data-live]'), startLive);

  /* Version 3: faner med flere kameraer. Toppen og Vejen kan indlæses rigtigt ved klik. */
  var tabs = root.querySelector('[data-wc-tabs]');
  if (tabs) {
    var btns = tabs.querySelectorAll('[role="tab"]');
    var out = root.querySelector('[data-wc-out]');
    var info = {
      top: { scene: 'top', badge: ['live', 'Næsten live'], t: 'Toppen af Gaustatoppen', src: 'Kilde: Gaustabanen (ipcamlive). Deres afspiller kan ikke indlejres (kilden spærrer), så her hentes stillbilledet, som opdateres hvert 10. sekund. Ikke et officielt API, rettigheder uafklarede', link: 'https://gaustabanen.no/en/live-updates', stamp: CAMS.top.idle, real: 'top' },
      slope: { scene: 'slope', badge: ['sæson', 'Sæson'], t: 'Pisten, Koffertlokket', src: 'Kilde: Gausta.com via Norway Live (cdn.norwaylive.tv), opdateres ca. hvert 5. minut, men kun i driftsperioder (6-10 dage gamle 3. oktober 2026, og kilden svarede 502 6. oktober 2026). Vilkår uafklarede', link: 'https://www.gausta.com/webkamera/', stamp: CAMS.slope.idle, real: 'slope' },
      road: { scene: 'road', badge: ['frisk', 'Frisk'], t: 'Vejen: Fv 37 Jønjiljo', src: 'Kilde: Statens vegvesen (NLOD)', link: 'https://www.vegvesen.no/trafikk/', stamp: CAMS.veg.idle, real: 'veg' },
      live: { scene: 'slope', live: true, badge: ['live', 'Live'], t: 'Gausta LIVE (Norway Live)', src: 'Kilde: Norway Live på YouTube. Skifter mellem scener ca. hvert 15. sekund, så den viser ikke altid toppen eller pisten. Afspilleren indlæses fra youtube-nocookie.com og kontakter YouTube, og starter uden lyd. Tilladelse ikke afklaret (Norway Live: indholdet kan vises videre, kontakt dem)', link: 'https://norwaylive.tv/gausta/', stamp: 'Henter ...' },
      town: { scene: 'town', badge: ['frisk', 'Frisk'], t: 'Rjukan, mod vest', src: 'Privat kamera (geirb.com), boligområder maskeret, opdateres ca. hvert minut. Vilkår ikke læst', link: 'https://www.geirb.com/', stamp: CAMS.town.idle, real: 'town' }
    };
    function show(key) {
      var d = info[key];
      tabTimers.forEach(stopBox); tabTimers = [];
      btns.forEach(function (b) { var on = b.getAttribute('data-key') === key; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
      out.innerHTML =
        '<div class="wc-frame"><div class="wc-img" data-scene="' + d.scene + '" id="wc-main">' + scene(d.scene) + '<span class="wc-ph">' + (d.real || d.live ? 'Henter ...' : 'Pladsholder') + '</span>' + (d.live ? PLAY : '') + '</div>' +
        '<span class="wc-badge wc-' + d.badge[0] + '">' + d.badge[1] + '</span></div>' +
        '<div class="wc-cap"><b>' + d.t + '</b><span class="stamp" data-stamp>' + d.stamp + '</span></div>' +
        '<div class="wc-src">' + d.src + ' · <a href="' + d.link + '" target="_blank" rel="noopener">Åbn hos kilden</a></div>' +
        '';
      var main = out.querySelector('#wc-main');
      if (d.real) loadReal(main, CAMS[d.real]);
      if (d.live) startLive(main);
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
})();
