/* Temperatur nu og kort prognose (A5). VALGT 5. oktober 2026: egen visning på MET Norway Locationforecast (variant 2).
   Data: weather-data.js (snapshot i prototypen; i produktion hentes og caches de serverside, G24 og N19).
   Mount-punkter: [data-weather="full"] (temperatur, 24 timer, 5 dage) og [data-weather="tile"] (lille flise til "Gausta nu").
   Variant 1 (Yr-widget, iframe) er kun bevaret som historik i en skjult sektion i Sideelementer. */
(function () {
  'use strict';
  var TZ = 'Europe/Oslo';
  var D = window.GL && GL.WEATHER;
  var mounts = document.querySelectorAll('[data-weather]');
  var yrBox = document.getElementById('wx-yr');
  if (!D) { [].forEach.call(mounts, function (m) { m.textContent = 'Vejrdata mangler.'; }); return; }

  /* Symbolkoder fra MET: dansk tekst og ikonart. MET leverer kun koder, ikke tekst. */
  var SYM = {
    clearsky: ['Klart', 'sun'], fair: ['Overvejende klart', 'sun'], partlycloudy: ['Delvist skyet', 'partly'],
    cloudy: ['Skyet', 'cloud'], fog: ['Tåge', 'fog'],
    lightrain: ['Let regn', 'rain'], rain: ['Regn', 'rain'], heavyrain: ['Kraftig regn', 'rain'],
    lightrainshowers: ['Lette regnbyger', 'rain'], rainshowers: ['Regnbyger', 'rain'], heavyrainshowers: ['Kraftige regnbyger', 'rain'],
    lightsleet: ['Let slud', 'sleet'], sleet: ['Slud', 'sleet'], heavysleet: ['Kraftig slud', 'sleet'],
    lightsleetshowers: ['Lette sludbyger', 'sleet'], sleetshowers: ['Sludbyger', 'sleet'], heavysleetshowers: ['Kraftige sludbyger', 'sleet'],
    lightsnow: ['Let sne', 'snow'], snow: ['Sne', 'snow'], heavysnow: ['Kraftig sne', 'snow'],
    lightsnowshowers: ['Lette snebyger', 'snow'], snowshowers: ['Snebyger', 'snow'], heavysnowshowers: ['Kraftige snebyger', 'snow']
  };
  function sym(code) {
    code = code || '';
    var night = /_night$/.test(code);
    var base = code.replace(/_(day|night|polartwilight)$/, '');
    if (base.indexOf('thunder') > -1) return { txt: 'Torden', kind: 'thunder', night: night };
    var s = SYM[base];
    return s ? { txt: s[0], kind: s[1], night: night } : { txt: 'Vejr', kind: 'cloud', night: night };
  }

  var CLOUD = 'M11 29h17a6 6 0 0 0 .6-12 8 8 0 0 0-15.3-1.5A6.7 6.7 0 0 0 11 29z';
  function icon(kind, night, size) {
    size = size || 40;
    var sun = '<g class="wx-sun"><circle cx="20" cy="20" r="7"/>' +
      [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) {
        return '<line x1="20" y1="7" x2="20" y2="10" transform="rotate(' + a + ' 20 20)"/>';
      }).join('') + '</g>';
    var moon = '<path class="wx-sun" d="M26 24a9 9 0 1 1-8-14 7 7 0 0 0 8 14z"/>';
    var body = '';
    if (kind === 'sun') body = night ? moon : sun;
    else if (kind === 'partly') body = (night ? '<g transform="translate(-6 -6) scale(.8)">' + moon + '</g>' : '<g transform="translate(-6 -6) scale(.8)">' + sun + '</g>') + '<path d="' + CLOUD + '"/>';
    else if (kind === 'cloud') body = '<path d="' + CLOUD + '"/>';
    else if (kind === 'fog') body = '<line x1="8" y1="15" x2="32" y2="15"/><line x1="6" y1="22" x2="34" y2="22"/><line x1="10" y1="29" x2="30" y2="29"/>';
    else if (kind === 'rain') body = '<path d="' + CLOUD.replace('29h', '25h') + '" transform="translate(0 -2)"/><line x1="14" y1="29" x2="12" y2="35"/><line x1="21" y1="29" x2="19" y2="35"/><line x1="28" y1="29" x2="26" y2="35"/>';
    else if (kind === 'snow') body = '<path d="' + CLOUD + '" transform="translate(0 -4)"/><circle class="wx-dot" cx="14" cy="32" r="1.6"/><circle class="wx-dot" cx="21" cy="35" r="1.6"/><circle class="wx-dot" cx="28" cy="32" r="1.6"/>';
    else if (kind === 'sleet') body = '<path d="' + CLOUD + '" transform="translate(0 -4)"/><line x1="14" y1="29" x2="12" y2="34"/><circle class="wx-dot" cx="22" cy="33" r="1.6"/><line x1="29" y1="29" x2="27" y2="34"/>';
    else if (kind === 'thunder') body = '<path d="' + CLOUD + '" transform="translate(0 -4)"/><path class="wx-bolt" d="M21 24l-5 8h4l-2 6 7-9h-4z"/>';
    return '<svg class="wx-ic" width="' + size + '" height="' + size + '" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }

  var fmtTime = new Intl.DateTimeFormat('da-DK', { timeZone: TZ, hour: '2-digit', minute: '2-digit' });
  var fmtDay = new Intl.DateTimeFormat('da-DK', { timeZone: TZ, weekday: 'short' });
  var fmtKey = new Intl.DateTimeFormat('sv-SE', { timeZone: TZ }); /* ISO-lignende dato */
  var fmtDate = new Intl.DateTimeFormat('da-DK', { timeZone: TZ, day: 'numeric', month: 'short' });
  var fmtFull = new Intl.DateTimeFormat('da-DK', { timeZone: TZ, day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
  function dt(s) { return new Date(s.length === 16 ? s + ':00Z' : s); }
  function compass(deg) { return ['N', 'NØ', 'Ø', 'SØ', 'S', 'SV', 'V', 'NV'][Math.round(deg / 45) % 8]; }
  function r1(x) { return (Math.round(x * 10) / 10).toString().replace('.', ','); }
  function r0(x) { return Math.round(x); }

  function full(own) {
    var wasStale = own.classList.contains('wx-stale');
    var ts = D.ts;
    var cur = ts[0];
    var cs = own._rain ? { txt: 'Regn', kind: 'rain', night: false } : sym(cur.s1 || cur.s6);

    /* Næste 24 timer: temperatur og nedbør time for time, så længe tidsskridtet er 1 time. */
    var hourly = [];
    for (var i = 0; i < ts.length && hourly.length < 25; i++) {
      if (i > 0 && (dt(ts[i].t) - dt(ts[i - 1].t)) > 3600 * 1000) break;
      hourly.push(ts[i]);
    }
    var DEMO_RAIN = [0, 0, 0, 0.3, 0.8, 1.4, 2.2, 1.6, 0.9, 0.4, 0.2, 0, 0, 0.1, 0.3, 0.6, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0];
    if (own._rain) hourly = hourly.map(function (h, i) { var o = {}; for (var k in h) o[k] = h[k]; o.p1 = DEMO_RAIN[i] || 0; return o; });
    function chart() {
      var avail = own.clientWidth || 560, cw = avail > 720 ? avail - 224 : avail, W = Math.round(Math.max(300, Math.min(1000, cw))), H = Math.round(Math.max(150, Math.min(190, cw * 0.26))), pl = 30, pr = (hourly.some(function (h) { return h.p1 > 0; }) ? 40 : 8), pt = 12, pb = 24, n = hourly.length;
      var T = hourly.map(function (h) { return h.T; });
      var tmin = Math.floor(Math.min.apply(null, T) - 1), tmax = Math.ceil(Math.max.apply(null, T) + 1);
      var pmax = Math.max(2, Math.ceil(Math.max.apply(null, hourly.map(function (h) { return h.p1 || 0; })))), anyRain = hourly.some(function (h) { return h.p1 > 0; }), barMax = (H - pt - pb) * 0.55;
      function x(i) { return pl + (W - pl - pr) * i / (n - 1); }
      function y(v) { return pt + (H - pt - pb) * (1 - (v - tmin) / (tmax - tmin)); }
      var path = hourly.map(function (h, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(h.T).toFixed(1); }).join(' ');
      var bars = hourly.map(function (h, i) {
        var p = h.p1 || 0; if (!p) return '';
        var bh = barMax * (p / pmax);
        return '<rect x="' + (x(i) - 3).toFixed(1) + '" y="' + (H - pb - bh).toFixed(1) + '" width="6" height="' + bh.toFixed(1) + '" rx="1.5" class="wx-bar"/>';
      }).join('');
      var grid = '', labels = '';
      [tmin, Math.round((tmin + tmax) / 2), tmax].forEach(function (v) {
        grid += '<line x1="' + pl + '" y1="' + y(v).toFixed(1) + '" x2="' + (W - pr) + '" y2="' + y(v).toFixed(1) + '" class="wx-grid"/>';
        labels += '<text x="' + (pl - 6) + '" y="' + (y(v) + 3).toFixed(1) + '" text-anchor="end" class="wx-axis">' + v + '°</text>';
      });
      hourly.forEach(function (h, i) {
        if (i % 4 === 0) labels += '<text x="' + x(i).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle" class="wx-axis">' + fmtTime.format(dt(h.t)).slice(0, 2) + '</text>';
      });
      if (anyRain) {
        grid += '<line x1="' + pl + '" y1="' + (H - pb - barMax).toFixed(1) + '" x2="' + (W - pr) + '" y2="' + (H - pb - barMax).toFixed(1) + '" class="wx-grid wx-grid-r"/>';
        labels += '<text x="' + (W - pr + 6) + '" y="' + (H - pb - barMax + 3).toFixed(1) + '" class="wx-axis wx-axis-r">' + pmax + ' mm</text><text x="' + (W - pr + 6) + '" y="' + (H - pb + 3) + '" class="wx-axis wx-axis-r">0</text>';
      }
      var dots = hourly.map(function (h, i) { return i % 4 === 0 ? '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(h.T).toFixed(1) + '" r="2.6" class="wx-pt"/>' : ''; }).join('');
      return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="wx-chart" role="img" aria-label="Temperatur og nedbør de næste 24 timer">' + grid + bars + '<path d="' + path + '" class="wx-line"/>' + dots + labels + '</svg>';
    }

    /* Dage: min/max, symbol ved middag, nedbør pr. døgn (time-værdier hvor de findes, ellers 6-timers-værdier). */
    function days() {
      var map = {}, order = [];
      ts.forEach(function (e) {
        var d = dt(e.t), k = fmtKey.format(d);
        if (!map[k]) { map[k] = { k: k, d: d, min: 99, max: -99, p: 0, noon: null, noonDiff: 99 }; order.push(k); }
        var m = map[k];
        m.min = Math.min(m.min, e.T); m.max = Math.max(m.max, e.T);
        if (e.p1 != null && e.s1) m.p += e.p1; else if (e.p6 != null) m.p += e.p6;
        var hr = parseInt(fmtTime.format(d).slice(0, 2), 10), diff = Math.abs(hr - 13);
        var s = e.s6 || e.s12 || e.s1;
        if (s && diff < m.noonDiff) { m.noonDiff = diff; m.noon = s; }
      });
      return order.slice(0, 5).map(function (k) { return map[k]; });
    }
    var dayRows = days();
    if (own._rain) { dayRows[0].noon = 'rain'; dayRows[0].p = DEMO_RAIN.reduce(function (a, b) { return a + b; }, 0); }
    var daysHtml = dayRows.map(function (m, i) {
      var s = sym((m.noon || '').replace('_night', '_day'));
      return '<li class="wx-day"><span class="wx-dn">' + (i === 0 ? 'I dag' : fmtDay.format(m.d)) + '</span>' + icon(s.kind, false, 24) +
        '<span class="wx-dt"><b>' + r0(m.max) + '°</b> <span>' + r0(m.min) + '°</span></span><span class="wx-dp">' + (m.p >= 0.1 ? r1(m.p) + ' mm' : '') + '</span></li>';
    }).join('');

    var p6 = ts[0].p6 != null ? ts[0].p6 : 0;
    if (own._rain) p6 = DEMO_RAIN.slice(0, 6).reduce(function (a, b) { return a + b; }, 0);
    own.innerHTML =
      '<div class="wx-head"><div><b>Gausta</b></div>' +
      '<span class="stamp">Hentet ' + fmtFull.format(dt(D.updated_at)) + '</span></div>' +
      '<div class="wx-banner" hidden>Kilden svarer ikke. Viser seneste hentede data fra ' + fmtFull.format(dt(D.updated_at)) + '. Tal skjules efter 12 timer uden ny hentning.</div>' +
      '<div class="wx-now">' + icon(cs.kind, cs.night, 64) +
      '<div class="wx-big"><b class="num">' + r1(cur.T) + '°</b><span>' + cs.txt + '</span></div>' +
      '<dl class="wx-meta"><div><dt>Vind</dt><dd>' + r1(cur.ws) + ' m/s fra ' + compass(cur.wd) + '</dd></div><div><dt>Skydække</dt><dd>' + r0(cur.c) + ' %</dd></div><div><dt>Nedbør, næste 6 t</dt><dd>' + r1(p6) + ' mm</dd></div></dl></div>' +
      '<div class="wx-split"><div class="wx-gcol"><p class="wx-sub">Næste 24 timer</p>' + chart() + '<p class="wx-cap">Klokkeslæt (lokal tid) · søjler: nedbør pr. time' + (hourly.some(function (h) { return h.p1 > 0; }) ? ' (højeste ' + r1(Math.max.apply(null, hourly.map(function (h) { return h.p1 || 0; }))) + ' mm)' : '') + (own._rain ? ' · <b>EKSEMPEL: nedbøren er opfundet</b>' : '') + '</p>' +
      '</div><div class="wx-dcol"><p class="wx-sub">Næste dage</p><ul class="wx-days">' + daysHtml + '</ul></div></div>' +
      '<div class="live-foot"><span class="stamp">Data: MET Norway</span>' +
      '<span class="wx-btns"><button type="button" class="btn btn-ghost btn-sm wx-rain" aria-pressed="' + (own._rain ? 'true' : 'false') + '">' + (own._rain ? 'Skjul eksempel med nedbør' : 'Vis eksempel med nedbør') + '</button>' +
      '<button type="button" class="btn btn-ghost btn-sm wx-sim" aria-pressed="false">Simulér nedbrud</button></span></div>';

    var rainBtn = own.querySelector('.wx-rain');
    if (rainBtn) rainBtn.addEventListener('click', function () { own._rain = !own._rain; full(own); });
    var sim = own.querySelector('.wx-sim'), banner = own.querySelector('.wx-banner');
    if (wasStale && sim) { sim.setAttribute('aria-pressed', 'true'); sim.textContent = 'Fjern nedbrud'; own.classList.add('wx-stale'); banner.hidden = false; }
    if (sim) sim.addEventListener('click', function () {
      var on = sim.getAttribute('aria-pressed') !== 'true';
      sim.setAttribute('aria-pressed', on ? 'true' : 'false');
      sim.textContent = on ? 'Fjern nedbrud' : 'Simulér nedbrud';
      own.classList.toggle('wx-stale', on);
      banner.hidden = !on;
    });
  }

  function tile(own) {
    var c = D.ts[0], sy = sym(c.s1 || c.s6);
    own.innerHTML = '<small>Vejr</small><b class="num">' + r1(c.T) + '°</b><small>' + sy.txt + ', vind ' + r1(c.ws) + ' m/s</small><small class="verify">snapshot ' + fmtFull.format(dt(D.updated_at)) + ', MET</small>';
  }

  [].forEach.call(mounts, function (m) { (m.getAttribute('data-weather') === 'tile' ? tile : full)(m); });
  var rt;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { [].forEach.call(mounts, function (m) { if (m.getAttribute('data-weather') === 'full') full(m); }); }, 150); });

  /* Variant 1: Yr-widget indlæses først ved klik, fordi iframe og billede kontakter yr.no med besøgendes IP. */
  if (yrBox) {
    var btn = yrBox.querySelector('[data-yr-load]'), out = yrBox.querySelector('[data-yr-out]');
    var ID = '1-68536';
    btn.addEventListener('click', function () {
      var loaded = out.getAttribute('data-loaded') === '1';
      if (loaded) { out.innerHTML = ''; out.setAttribute('data-loaded', '0'); btn.textContent = 'Indlæs Yr-widget (kontakter yr.no)'; return; }
      out.innerHTML =
        '<iframe title="Yr: vejrkort for Gaustablikk Fjellresort" src="https://www.yr.no/en/content/' + ID + '/card.html" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:330px;border:1px solid var(--border);border-radius:10px;background:var(--surface)"></iframe>' +
        '<img alt="Yr: meteogram for Gaustablikk Fjellresort, 3 dage" src="https://www.yr.no/en/content/' + ID + '/meteogram.svg" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:auto;margin-top:10px;border:1px solid var(--border);border-radius:10px;background:#fff">';
      out.setAttribute('data-loaded', '1');
      btn.textContent = 'Fjern widget';
    });
  }
})();
