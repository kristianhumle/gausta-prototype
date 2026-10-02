/* Gausta Lodge 52 · prototype shell
   Renders the materials bar, site header and footer, and wires language and season. Danish is the source text in the HTML; English is carried in
   data-en attributes and swapped in (TK1: text stored per language). */
(function () {
  'use strict';

  var ICONS = {
    mountain: '<path d="M3 20l6-11 4 6 3-4 5 9z"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9 4l3 2 3-2M9 20l3-2 3 2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
    leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
    flower: '<circle cx="12" cy="12" r="2.2"/><path d="M12 9.8C10 6 12 3 12 3s2 3 0 6.800M12 14.200C14 18 12 21 12 21s-2-3 0-6.800M9.800 12C6 10 3 12 3 12s3 2 6.800 0M14.200 12C18 14 21 12 21 12s-3-2-6.800 0"/>',
    bed: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
    bath: '<path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4zM7 12V6a2 2 0 013-1M6 19l-1 2M18 19l1 2"/>',
    home: '<path d="M3 11l9-8 9 8M5 9.500V20h14V9.500M10 20v-6h4v6"/>',
    terrace: '<path d="M3 20h18M5 20V9h14v11M5 14h14M9 9V5M15 9V5"/>',
    wifi: '<path d="M2 9a15 15 0 0120 0M5 12.500a10 10 0 0114 0M8.500 16a5 5 0 017 0"/><circle cx="12" cy="19" r=".8"/>',
    door: '<path d="M6 21V4a1 1 0 011-1h10a1 1 0 011 1v17M4 21h16"/><circle cx="15" cy="12.500" r=".8"/>',
    thermo: '<path d="M10 14.500V5a2 2 0 014 0v9.500a4 4 0 11-4 0z"/>',
    drop: '<path d="M12 3s6 6.500 6 11a6 6 0 01-12 0c0-4.500 6-11 6-11z"/>',
    bell: '<path d="M6 16V11a6 6 0 0112 0v5l2 2H4zM10 21h4"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
    pin: '<path d="M12 21s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.500"/>',
    cal: '<rect x="3.500" y="5" width="17" height="15" rx="2"/><path d="M3.500 10h17M8 3v4M16 3v4"/>',
    chart: '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    search: '<circle cx="11" cy="11" r="6.500"/><path d="M16 16l5 5"/>',
    wrench: '<path d="M14.500 6.500a4 4 0 005 5L21 13l-8 8-4-4 8-8zM3 21l5-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    wave: '<path d="M2 15c3-4 5 4 8 0s5 4 8 0 3 0 4-1"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    wifioff: '<path d="M3 3l18 18M8.500 16a5 5 0 017 0M5 12.500a10 10 0 015-2.600M19 12.500a10 10 0 00-3-2.200"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.500"/>'
  };
  function icon(name, cls) {
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  window.GL = { icon: icon, ICONS: ICONS };

  var LOGO = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 26l9-15 5 8 4-5 8 12z"/><path d="M10.500 14l1.500 2 1.500-2"/></svg>';

  var SEASONS = [
    { id: 'spring', da: 'Forår', en: 'Spring' },
    { id: 'summer', da: 'Sommer', en: 'Summer' },
    { id: 'autumn', da: 'Efterår', en: 'Autumn' },
    { id: 'winter', da: 'Vinter', en: 'Winter' }
  ];
  function seasonFromDate(d) {
    var m = d.getMonth() + 1;
    if (m >= 3 && m <= 5) return 'spring';
    if (m >= 6 && m <= 8) return 'summer';
    if (m >= 9 && m <= 11) return 'autumn';
    return 'winter';
  }

  function sstore(key, val) {
    try { if (val === undefined) return sessionStorage.getItem(key); sessionStorage.setItem(key, val); } catch (e) { return null; }
  }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); if (val === null) localStorage.removeItem(key); else localStorage.setItem(key, val); } catch (e) { return null; }
  }

  var root = document.documentElement;
  var state = {
    lang: store('gl.lang') || 'da',
    season: sstore('gl.season') || 'auto' // 'auto' = follow the date; a manual pick lasts for the browser session only
  };

  function applyLang() {
    root.setAttribute('lang', state.lang);
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.getAttribute('data-da') === null) el.setAttribute('data-da', el.innerHTML);
      el.innerHTML = state.lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-da');
    });
    document.querySelectorAll('.js-lang').forEach(function (s) { s.value = state.lang; });
    document.querySelectorAll('.js-season-seg button').forEach(function (b) {
      var s = SEASONS.filter(function (x) { return x.id === b.dataset.v; })[0], label = state.lang === 'en' ? s.en : s.da;
      b.setAttribute('data-tip', label); b.setAttribute('aria-label', label);
    });
  }
  function currentSeason() { return state.season === 'auto' ? seasonFromDate(new Date()) : state.season; }
  function applySeason() {
    root.setAttribute('data-season', currentSeason());
    document.querySelectorAll('.js-season-seg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.v === currentSeason())); });
    applyHeroPhotos();
    document.querySelectorAll('[data-season-card]').forEach(function (c) { c.classList.toggle('current', c.dataset.seasonCard === currentSeason()); });
  }

  // photos: prototype-only, converted to web sizes under assets/web/<folder>/<name>[-s].webp
  GL.photo = function (key, size) { var p = key.split('/'); return 'assets/web/' + p[0] + '/' + p[1] + (size === 's' || size === true ? '-s' : size === 'm' ? '-m' : '') + '.webp'; };
  GL.buildGallery = function (el, items, opts) {
    opts = opts || {};
    el.innerHTML = items.map(function (it, i) {
      var cls = (it.cls || '');
      return '<a href="' + GL.photo(it.k) + '" data-lightbox data-cap="' + (it.cap || '') + '" data-cat="' + (it.cat || '') + '" class="' + cls + '">' +
        '<img class="photo" loading="lazy" decoding="async" src="' + GL.photo(it.k, /big|tall|wide2|wide/.test(cls) ? 'm' : 's') + '" alt="' + (it.alt || it.cap || '') + '">' +
        (it.cap && opts.caps ? '<span class="cap">' + it.cap + '</span>' : '') + '</a>';
    }).join('');
  };
  function applyHeroPhotos() {
    document.querySelectorAll('.hero[data-photo-map], .hero[data-photo]').forEach(function (h) {
      var key = h.getAttribute('data-photo');
      var map = h.getAttribute('data-photo-map');
      if (map) { map.split(';').forEach(function (kv) { var p = kv.split('='); if (p[0] === currentSeason()) key = p[1]; }); if (!/=/.test(map) ) key = key; }
      if (map && !new RegExp(currentSeason() + '=').test(map)) key = null;
      if (key) { h.classList.add('has-photo'); h.style.backgroundImage = 'url(' + GL.photo(key) + ')'; }
      else { h.classList.remove('has-photo'); h.style.backgroundImage = ''; }
    });
  }
  var lb, lbItems = [], lbIdx = 0;
  function lbShow(i) {
    lbIdx = (i + lbItems.length) % lbItems.length;
    var a = lbItems[lbIdx];
    lb.querySelector('img').src = a.getAttribute('href');
    lb.querySelector('figcaption').textContent = (a.getAttribute('data-cap') || '') + (lbItems.length > 1 ? '  (' + (lbIdx + 1) + '/' + lbItems.length + ')' : '') + '  ·  prototypebillede';
  }
  function lbOpen(a) {
    var group = a.closest('[data-gallery-group]') || a.parentElement;
    lbItems = [].slice.call(group.querySelectorAll('a[data-lightbox]')).filter(function (x) { return x.style.display !== 'none'; });
    if (!lb) {
      lb = document.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
      lb.innerHTML = '<button class="x" aria-label="Luk">×</button><button class="prev" aria-label="Forrige">‹</button><button class="next" aria-label="Næste">›</button><figure><img alt=""><figcaption></figcaption></figure>';
      document.body.appendChild(lb);
      lb.addEventListener('click', function (e) {
        if (e.target.classList.contains('prev')) lbShow(lbIdx - 1);
        else if (e.target.classList.contains('next')) lbShow(lbIdx + 1);
        else if (e.target.tagName !== 'IMG') lb.classList.remove('open');
      });
      var tx = null;
      lb.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
      lb.addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 50) lbShow(lbIdx + (dx < 0 ? 1 : -1)); }, { passive: true });
      document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') lb.classList.remove('open');
        if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
        if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
      });
    }
    lbShow(lbItems.indexOf(a)); lb.classList.add('open');
  }

  function t(da, en) { return '<span data-en="' + en + '">' + da + '</span>'; }

  var PAGES = [
    { href: 'lejligheden.html', da: 'Lejligheden', en: 'The apartment' },
    { href: 'omraadet.html', da: 'Området', en: 'The area' },
    { href: 'gaest.html', da: 'Gæsteområde', en: 'Guest area', zone: 'B' },
    { href: 'backoffice.html', da: 'Back-office', en: 'Back-office', zone: 'C' }
  ];
  var MATERIALS = [
    { href: 'index.html', label: 'Website-prototype', match: ['index', 'lejligheden', 'omraadet', 'gaest', 'backoffice'] },
    { href: 'moodboard.html', label: 'Moodboard', match: ['moodboard'] },
    { href: 'designsystem.html', label: 'Designsystem', match: ['designsystem'] },
    { href: 'sideelementer.html', label: 'Sideelementer', match: ['sideelementer'] }
  ];

  function pageId() { return (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index'; }

  var SEASON_ICONS = { spring: 'flower', summer: 'sun', autumn: 'leaf', winter: 'snow' };
  function seasonSeg(cls) {
    return '<div class="seg icons js-season-seg ' + (cls || '') + '" role="group" aria-label="Årstid">' + SEASONS.map(function (s) {
      return '<button type="button" data-v="' + s.id + '" data-tip="' + s.da + '" aria-label="' + s.da + '" aria-pressed="false">' + icon(SEASON_ICONS[s.id]) + '</button>';
    }).join('') + '</div>';
  }
  function controlsHtml(extra) {
    return '<div class="controls">' + seasonSeg('hide-sm') +
      '<span class="lang-select">' + icon('globe') + '<select class="field compact js-lang" aria-label="Sprog"><option value="da">Dansk</option><option value="en">English</option></select></span>' +
      (extra || '') + '</div>';
  }

  function buildShell() {
    var pid = pageId();
    var shell = document.body.getAttribute('data-shell') || 'site';
    var bar = '<div class="materials"><div class="wrap"><span class="label">Materialer</span>' +
      MATERIALS.map(function (m) { return '<a href="' + m.href + '"' + (m.match.indexOf(pid) > -1 ? ' aria-current="page"' : '') + '>' + m.label + '</a>'; }).join('') +
      '<span class="spacer"></span><span class="status">Udkast v0 · billeder er kun til prototypen</span></div></div>';
    var html = bar;
    if (shell === 'materials') {
      html += '<div class="header"><div class="wrap"><a class="brand" href="index.html">' + LOGO + '<span>Gausta Lodge 52</span></a><div class="nav" style="margin-left:auto;justify-content:flex-end">' + '</div>' + controlsHtml() + '</div></div>';
    } else {
      html += '<header class="header"><div class="wrap"><a class="brand" href="index.html">' + LOGO + '<span>Gausta Lodge 52</span></a>' +
        '<nav class="nav" id="nav" aria-label="Hovedmenu">' +
        PAGES.map(function (p) { return '<a href="' + p.href + '"' + (p.href === pid + '.html' ? ' aria-current="page"' : '') + '>' + t(p.da, p.en) + (p.zone ? '<span class="zone">' + p.zone + '</span>' : '') + '</a>'; }).join('') + seasonSeg('nav-season') + '</nav>' +
        controlsHtml('<a class="btn btn-primary btn-sm hide-sm" href="index.html#booking">' + t('Book', 'Book') + '</a><button class="btn btn-ghost btn-sm menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false">' + icon('menu') + '</button>') +
        '</div></header>';
    }
    document.body.insertAdjacentHTML('afterbegin', html);

    if (shell !== 'materials') {
      var f = '<footer class="footer"><div class="wrap"><div class="cols">' +
        '<div><a class="brand" href="index.html" style="display:flex;padding:0">' + LOGO + '<span>Gausta Lodge 52</span></a>' +
        '<p class="muted" style="margin-top:12px;max-width:34ch;font-size:.92rem">' + t('Fjeldlejlighed på Gausta, Telemark. Arbejdsnavn, endeligt navn og domæne er ikke valgt.', 'Mountain apartment at Gausta, Telemark. Working name; final name and domain not chosen.') + '</p></div>' +
        '<div><h4>' + t('Lejligheden', 'The apartment') + '</h4><a href="lejligheden.html">' + t('Om lejligheden', 'About') + '</a><a href="index.html#booking">' + t('Booking', 'Booking') + '</a><a href="index.html#faq">FAQ</a></div>' +
        '<div><h4>' + t('Området', 'The area') + '</h4><a href="omraadet.html">' + t('Kort og afstande', 'Map and distances') + '</a><a href="omraadet.html#nu">Gausta nu</a><a href="omraadet.html#events">' + t('Events', 'Events') + '</a></div>' +
        '<div><h4>' + t('Prototype-zoner', 'Prototype zones') + '</h4><a href="gaest.html">B · ' + t('Gæsteområde', 'Guest area') + '</a><a href="backoffice.html">C · Back-office</a><a href="designsystem.html">' + t('Designsystem', 'Design system') + '</a></div>' +
        '</div><div class="legal"><span>© 2026 Gausta Lodge 52 · ' + t('Prototype. Ikke en live booking.', 'Prototype. Not a live booking.') + '</span><span>' + t('Privatliv og samtykke: tekst følger', 'Privacy and consent: text to follow') + '</span></div></div></footer>';
      document.body.insertAdjacentHTML('beforeend', f);
    }
  }

  function wire() {
    document.addEventListener('click', function (e) {
      var sb = e.target.closest('.js-season-seg button');
      if (sb) { state.season = sb.dataset.v; sstore('gl.season', state.season); applySeason(); }
      var lbA = e.target.closest('a[data-lightbox]');
      if (lbA) { e.preventDefault(); lbOpen(lbA); }
      var mb = e.target.closest('#menu-btn');
      if (mb) { var open = document.getElementById('nav').classList.toggle('open'); mb.setAttribute('aria-expanded', String(open)); }
      var f = e.target.closest('.filter');
      if (f && f.parentElement.hasAttribute('data-filter-group')) {
        var group = f.parentElement, val = f.dataset.f, target = document.querySelector(group.getAttribute('data-filter-group'));
        group.querySelectorAll('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === f)); });
        if (target) target.querySelectorAll('[data-cat]').forEach(function (it) { it.style.display = (val === 'all' || it.dataset.cat.split(' ').indexOf(val) > -1) ? '' : 'none'; });
      }
    });
    document.addEventListener('change', function (e) {
      if (e.target.classList.contains('js-lang')) { state.lang = e.target.value; store('gl.lang', state.lang); applyLang(); }
    });
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .12 }) : null;
    document.querySelectorAll('.reveal').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  // landscape art: reused in hero and in the design system, so it lives here once
  GL.heroArt = function () {
    return '<svg viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="r1" d="M0 150L170 70l130 60 150-95 170 110 130-70 200 100 160-80 170 90 160-60v195H0z"/>' +
      '<path class="r2" d="M0 190l140-60 150 50 190-90 160 90 150-40 210 80 170-70 270 70v70H0z"/>' +
      '<path class="r3" d="M0 225l200-40 180 30 220-50 220 55 200-35 200 40 220-30v65H0z"/>' +
      '<path class="snow" d="M450 35l30 22-18-6-12 12-8-14-14 8zM1090 110l22 16-14-4-8 9-6-10-10 5z"/></svg>';
  };

  GL.t = t;

  function init() {
    buildShell();
    document.querySelectorAll('[data-hero-art]').forEach(function (el) { el.innerHTML = GL.heroArt(); });
    document.querySelectorAll('[data-icon]').forEach(function (el) { el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-icon'))); });
    applySeason(); applyLang(); wire();
    document.dispatchEvent(new Event('gl:ready'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
