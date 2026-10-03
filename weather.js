/* Temperatur nu og kort prognose: to varianter til sideelementer.html.
   Variant 1: Yr-widget (iframe, klik for at indlæse).
   Variant 2: egen visning på MET Norway Locationforecast (snapshot i prototypen,
   i produktion hentes serverside og caches). Ingen tredjepartskald fra besøgende i variant 2. */
(function () {
  'use strict';
  var TZ = 'Europe/Oslo';
  var dataEl = document.getElementById('wx-data');
  var own = document.getElementById('wx-own');
  var yrBox = document.getElementById('wx-yr');
  if (!dataEl || !own) return;
  var D;
  try { D = JSON.parse(dataEl.textContent); } catch (e) { own.textContent = 'Kunne ikke læse snapshot.'; return; }

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

  var ts = D.ts;
  var cur = ts[0];
  var cs = sym(cur.s1 || cur.s6);

  /* Næste 24 timer: temperatur og nedbør time for time, så længe tidsskridtet er 1 time. */
  var hourly = [];
  for (var i = 0; i < ts.length && hourly.length < 25; i++) {
    if (i > 0 && (dt(ts[i].t) - dt(ts[i - 1].t)) > 3600 * 1000) break;
    hourly.push(ts[i]);
  }
  function chart() {
    var W = 560, H = 150, pl = 30, pr = 8, pt = 14, pb = 34, n = hourly.length;
    var T = hourly.map(function (h) { return h.T; });
    var tmin = Math.floor(Math.min.apply(null, T) - 1), tmax = Math.ceil(Math.max.apply(null, T) + 1);
    var pmax = Math.max(2, Math.max.apply(null, hourly.map(function (h) { return h.p1 || 0; })));
    function x(i) { return pl + (W - pl - pr) * i / (n - 1); }
    function y(v) { return pt + (H - pt - pb) * (1 - (v - tmin) / (tmax - tmin)); }
    var path = hourly.map(function (h, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(h.T).toFixed(1); }).join(' ');
    var bars = hourly.map(function (h, i) {
      var p = h.p1 || 0; if (!p) return '';
      var bh = (H - pt - pb) * 0.45 * (p / pmax);
      return '<rect x="' + (x(i) - 3).toFixed(1) + '" y="' + (H - pb - bh).toFixed(1) + '" width="6" height="' + bh.toFixed(1) + '" rx="1.5" class="wx-bar"/>';
    }).join('');
    var grid = '', labels = '';
    [tmin, Math.round((tmin + tmax) / 2), tmax].forEach(function (v) {
      grid += '<line x1="' + pl + '" y1="' + y(v).toFixed(1) + '" x2="' + (W - pr) + '" y2="' + y(v).toFixed(1) + '" class="wx-grid"/>';
      labels += '<text x="' + (pl - 6) + '" y="' + (y(v) + 3).toFixed(1) + '" text-anchor="end" class="wx-axis">' + v + '°</text>';
    });
    hourly.forEach(function (h, i) {
      if (i % 4 === 0) labels += '<text x="' + x(i).toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" class="wx-axis">' + fmtTime.format(dt(h.t)).slice(0, 2) + '</text>';
    });
    var dots = hourly.map(function (h, i) { return i % 4 === 0 ? '<circle cx="' + x(i).toFixed(1) + '" cy="' + y(h.T).toFixed(1) + '" r="2.6" class="wx-pt"/>' : ''; }).join('');
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="wx-chart" role="img" aria-label="Temperatur og nedbør de næste 24 timer">' + grid + bars + '<path d="' + path + '" class="wx-line"/>' + dots + labels + '<text x="' + (W - pr) + '" y="' + (H - 2) + '" text-anchor="end" class="wx-axis">klokkeslæt (lokal tid) · søjler: nedbør pr. time</text></svg>';
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
    return order.slice(0, 7).map(function (k) { return map[k]; });
  }
  var dayRows = days();
  var daysHtml = dayRows.map(function (m, i) {
    var s = sym((m.noon || '').replace('_night', '_day'));
    return '<li class="wx-day"><span class="wx-dn">' + (i === 0 ? 'I dag' : fmtDay.format(m.d)) + '</span>' + icon(s.kind, false, 30) +
      '<span class="wx-dt"><b>' + r0(m.max) + '°</b> <span>' + r0(m.min) + '°</span></span><span class="wx-dp">' + (m.p >= 0.1 ? r1(m.p) + ' mm' : '') + '</span></li>';
  }).join('');

  var p6 = ts[0].p6 != null ? ts[0].p6 : 0;
  own.innerHTML =
    '<div class="wx-head"><div><b>Gausta, lejligheden</b><span class="muted"> ca. ' + D.alt + ' m · ' + String(D.lat).replace('.', ',') + ' N, ' + String(D.lon).replace('.', ',') + ' Ø</span></div>' +
    '<span class="stamp" id="wx-stamp">Hentet ' + fmtFull.format(dt(D.updated_at)) + ' (snapshot)</span></div>' +
    '<div class="wx-banner" id="wx-banner" hidden>Kilden svarer ikke. Viser seneste hentede data fra ' + fmtFull.format(dt(D.updated_at)) + '. Tal skjules efter 12 timer uden ny hentning.</div>' +
    '<div class="wx-now">' + icon(cs.kind, cs.night, 64) +
    '<div class="wx-big"><b class="num">' + r1(cur.T) + '°</b><span>' + cs.txt + '</span></div>' +
    '<dl class="wx-meta"><div><dt>Vind</dt><dd>' + r1(cur.ws) + ' m/s fra ' + compass(cur.wd) + '</dd></div><div><dt>Skydække</dt><dd>' + r0(cur.c) + ' %</dd></div><div><dt>Nedbør, næste 6 t</dt><dd>' + r1(p6) + ' mm</dd></div></dl></div>' +
    '<p class="wx-sub">Næste 24 timer</p>' + chart() +
    '<p class="wx-sub">Næste dage</p><ul class="wx-days">' + daysHtml + '</ul>' +
    '<div class="live-foot"><span class="stamp">Data: MET Norway (CC BY 4.0), Locationforecast 2.0</span>' +
    '<button type="button" class="btn btn-ghost btn-sm wx-sim" id="wx-sim" aria-pressed="false">Simulér nedbrud</button></div>';

  var sim = document.getElementById('wx-sim'), banner = document.getElementById('wx-banner');
  if (sim) sim.addEventListener('click', function () {
    var on = sim.getAttribute('aria-pressed') !== 'true';
    sim.setAttribute('aria-pressed', on ? 'true' : 'false');
    sim.textContent = on ? 'Fjern nedbrud' : 'Simulér nedbrud';
    own.classList.toggle('wx-stale', on);
    banner.hidden = !on;
  });

  /* Variant 1: Yr-widget indlæses først ved klik, fordi iframe og billede kontakter yr.no med besøgendes IP. */
  if (yrBox) {
    var btn = yrBox.querySelector('[data-yr-load]'), out = yrBox.querySelector('[data-yr-out]');
    var ID = '1-68536';
    btn.addEventListener('click', function () {
      var loaded = out.getAttribute('data-loaded') === '1';
      if (loaded) { out.innerHTML = ''; out.setAttribute('data-loaded', '0'); btn.textContent = 'Indlæs Yr-widget (kontakter yr.no)'; return; }
      out.innerHTML =
        '<iframe title="Yr: vejrkort for Gaustablikk Fjellresort" src="https://www.yr.no/en/content/' + ID + '/card.html" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:230px;border:1px solid var(--border);border-radius:10px;background:var(--surface)"></iframe>' +
        '<img alt="Yr: meteogram for Gaustablikk Fjellresort, 3 dage" src="https://www.yr.no/en/content/' + ID + '/meteogram.svg" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:auto;margin-top:10px;border:1px solid var(--border);border-radius:10px;background:#fff">';
      out.setAttribute('data-loaded', '1');
      btn.textContent = 'Fjern widget';
    });
  }
})();
