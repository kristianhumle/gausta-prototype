/* Sensor-plantegning (back-office, C7). Prototype med EKSEMPELDATA: ingen værdier er reelle.
   Bruger samme plantegning som lejlighedssiden (plan.js, GL.Plan.drawing) og lægger sensorernes
   placering og seneste værdi oven på. Placeringerne er cirka og skal verificeres ved installationen.
   Hardware (Brugeroplysning, bestilling 1. oktober 2026): 2 x Environmental Sensor (badeværelse og
   terrasse), 2 x All-In-One Sensor (hoveddør og terrassedør), SuperLink Gateway og Dream Router 7.
   Net- og routerstatus: placeret i entréen efter ejerens ønske. Røgalarm er ikke bestilt (udsolgt),
   og lækagesensor ved opvaskemaskinen er fravalgt. */
(function () {
  'use strict';

  var SRC = 'UniFi Protect';
  var NOW = '09:41';

  // st: good | warn | bad. pos er koordinater i plantegningens viewBox. lab: [dx, dy] for værdietiket.
  var SENSORS = [
    { id: 'hoved', kind: 'door', name: 'Hoveddør', model: 'All-In-One Sensor (UP-Sense)', where: 'Hoveddøren i entréen', pos: [719, 238], lab: [0, -19], layers: ['door', 'temp'], st: 'good',
      main: { door: 'Lukket', temp: '19,8 °C', all: 'Lukket' },
      rows: [['Dør', 'Lukket', 'good'], ['Sidst åbnet', 'i dag 08:12'], ['Temperatur i entré', '19,8 °C', 'good'], ['Batteri', '87 %', 'good'], ['Forbindelse', 'Online', 'good']],
      spark: [18.4, 18.6, 18.9, 19.2, 19.0, 18.8, 18.7, 18.9, 19.1, 19.4, 19.6, 19.7, 19.8, 19.6, 19.5, 19.7, 19.9, 20.0, 19.9, 19.8, 19.7, 19.8, 19.8, 19.8],
      note: 'Måler kun åbent og lukket og temperatur. Tæller ikke personer og virker kun ved 0 til 45 °C (indvendig montering).' },
    { id: 'terdor', kind: 'door', name: 'Terrassedør', model: 'All-In-One Sensor (UP-Sense)', where: 'Døren fra stuen til terrassen', pos: [730, 660], lab: [0, 26], layers: ['door', 'temp'], st: 'bad',
      main: { door: 'Åben 14 min', temp: '17,2 °C', all: 'Åben 14 min' },
      rows: [['Dør', 'Åben i 14 min', 'bad'], ['Sidst åbnet', 'i dag 09:27'], ['Temperatur i stue', '17,2 °C', 'warn'], ['Udendørs (terrasse)', '-3,1 °C'], ['Batteri', '74 %', 'good'], ['Forbindelse', 'Online', 'good']],
      spark: [20.1, 20.3, 20.2, 20.0, 19.9, 19.8, 19.9, 20.0, 20.1, 20.0, 19.9, 19.8, 19.9, 20.0, 20.1, 20.0, 19.9, 19.7, 19.4, 18.9, 18.4, 17.9, 17.5, 17.2],
      alarm: 'Alarm (eksempel): terrassedøren har stået åben i 14 minutter, og det er under frysepunktet udenfor.',
      note: 'Dør åben om vinteren er en af de alarmer, ejeren skal have (C7).' },
    { id: 'bad', kind: 'env', name: 'Badeværelse', model: 'Environmental Sensor', where: 'Badeværelset (lækage, temperatur, fugt, lys)', pos: [836, 366], lab: [-26, 4], labAnchor: 'end', layers: ['temp'], st: 'good',
      main: { temp: '21,4 °C', all: '21,4 °C' },
      rows: [['Lækage', 'Ingen', 'good'], ['Temperatur', '21,4 °C', 'good'], ['Luftfugtighed', '48 %', 'good'], ['Lys', 'Slukket'], ['Batteri', '91 %', 'good'], ['Forbindelse', 'Online', 'good']],
      spark: [20.8, 20.8, 20.7, 20.7, 20.6, 20.6, 20.5, 20.5, 20.7, 21.4, 22.6, 22.1, 21.6, 21.2, 21.0, 20.9, 20.9, 21.0, 21.2, 21.5, 21.6, 21.5, 21.4, 21.4],
      note: 'Lækage er en alarm. Høj fugtighed over længere tid kan vise skimmelrisiko.' },
    { id: 'terrasse', kind: 'env', name: 'Terrasse', model: 'Environmental Sensor', where: 'Terrassen (temperatur, fugt, lys, udendørs)', pos: [705, 782], lab: [0, 26], layers: ['temp'], st: 'good',
      main: { temp: '-3,1 °C', all: '-3,1 °C' },
      rows: [['Temperatur', '-3,1 °C', 'good'], ['Luftfugtighed', '82 %'], ['Lys', 'Dagslys (eksempel)'], ['Batteri', '66 %', 'good'], ['Forbindelse', 'Online', 'good']],
      spark: [-6.2, -6.4, -6.8, -7.0, -7.1, -6.9, -6.5, -6.0, -5.2, -4.4, -3.8, -3.2, -2.8, -2.6, -2.9, -3.3, -3.6, -3.4, -3.2, -3.1, -3.0, -3.0, -3.1, -3.1],
      note: 'Udendørs sensor. Kan komme under sin nedre grænse på -20 °C (Inference), og så mangler data.' },
    { id: 'net', kind: 'net', name: 'Net og Wi-Fi', model: 'Dream Router 7 og SuperLink Gateway', where: 'Entréen', pos: [722, 316], lab: [0, 0], noLabel: true, layers: ['net'], st: 'good',
      main: { net: 'Online', all: 'Online' },
      rows: [['Internet', 'Online', 'good'], ['Svartid', '14 ms'], ['Hastighed ned / op', '248 / 47 Mbit/s'], ['Wi-Fi-enheder', '2'], ['Sensor-gateway', 'Forbundet', 'good'], ['Oppetid', '12 dage']],
      note: 'Hvis nettet er nede, mangler al sensordata (Inference). Abonnementstype og hastighed er ikke oplyst, og der er ikke valgt 5G-backup.' }
  ];

  // Sensorer, der ikke er installeret. Vises tonet, så ejeren ser, hvad der mangler.
  var GHOSTS = [
    { id: 'roeg', kind: 'smoke', name: 'Røgalarm', pos: [610, 470], why: 'Ikke bestilt (USL-Smoke var udsolgt)', where: 'Stuen' },
    { id: 'opvask', kind: 'leak', name: 'Lækage ved opvaskemaskine', pos: [604, 336], why: 'Fravalgt, vurderet som høj risiko', where: 'Køkkenet' }
  ];

  var LAYERS = [['all', 'Alle'], ['door', 'Døre'], ['temp', 'Temperatur og fugt'], ['net', 'Net og Wi-Fi']];
  var STT = { good: 'OK', warn: 'Advarsel', bad: 'Alarm' };

  // Små ikoner, tegnet ud fra (0,0).
  var ICON = {
    door: '<path d="M-4.5 -6.5H3.5V6.5H-4.5Z"/><path d="M1.2 0h.01" stroke-width="2.4"/>',
    env: '<path d="M-1.6 -6.5a1.6 1.6 0 0 1 3.2 0V1.4a3.2 3.2 0 1 1-3.2 0Z"/>',
    net: '<path d="M-6.5 -1.5a9 9 0 0 1 13 0M-4 1.2a5.4 5.4 0 0 1 8 0"/><path d="M0 4.8h.01" stroke-width="2.4"/>',
    smoke: '<circle r="5.5"/><path d="M-2.4 0h4.8M-1.2 -2.6h2.4M-1.2 2.6h2.4"/>',
    leak: '<path d="M0 -6.4C2.6 -2.8 4.2 -.8 4.2 1.6a4.2 4.2 0 0 1-8.4 0C-4.2 -.8 -2.6 -2.8 0 -6.4Z"/>'
  };
  function ico(kind) { return '<g class="si" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ICON[kind] + '</g>'; }

  function spark(vals) {
    var w = 240, h = 44, min = Math.min.apply(null, vals), max = Math.max.apply(null, vals), r = (max - min) || 1;
    var pts = vals.map(function (v, i) { return (i * (w - 8) / (vals.length - 1) + 4).toFixed(1) + ',' + (h - 6 - (v - min) / r * (h - 12)).toFixed(1); }).join(' ');
    return '<svg class="sp-spark" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Temperatur de seneste 24 timer (eksempel)"><polyline points="' + pts + '"/></svg>';
  }

  function render(el) {
    var layer = 'all', sel = null;
    var sv = window.GL.Plan.drawing({ sensors: true, label: 'Plantegning med sensorer og deres seneste værdi' });
    var badCount = SENSORS.filter(function (s) { return s.st === 'bad'; }).length;
    var okCount = SENSORS.filter(function (s) { return s.st === 'good'; }).length;

    el.innerHTML =
      '<div class="sp-top"><div class="plan-pills" role="group" aria-label="Vælg lag">' +
      LAYERS.map(function (l) { return '<button type="button" class="filter" data-l="' + l[0] + '" aria-pressed="' + (l[0] === 'all') + '">' + l[1] + '</button>'; }).join('') +
      '</div><div class="sp-sum"><span class="pill-tag good">' + okCount + ' OK</span>' + (badCount ? '<span class="pill-tag bad">' + badCount + ' alarm</span>' : '') + '<span class="stamp">sidst opdateret ' + NOW + ' · eksempel · kilde: ' + SRC + '</span></div></div>' +
      '<div class="plan-split sp-split"><div class="plan-paper plan-wrap">' + sv + '</div><div class="sp-panel" aria-live="polite"></div></div>' +
      '<div class="sp-legend"><span><i class="dot good"></i> OK</span><span><i class="dot warn"></i> Advarsel</span><span><i class="dot bad"></i> Alarm</span><span><i class="sp-ghost-dot"></i> Ikke installeret</span><span class="faint">Placeringen er cirka og skal verificeres ved installationen. Eksempeldata, ingen værdi er reel.</span></div>';

    var svg = el.querySelector('svg.plan-svg'), panel = el.querySelector('.sp-panel'), NS = 'http://www.w3.org/2000/svg';
    var gl = document.createElementNS(NS, 'g'); gl.setAttribute('class', 'sp-layer'); svg.appendChild(gl);

    function visible(s) { return layer === 'all' || s.layers.indexOf(layer) > -1; }
    function valText(s) { return s.main[layer] || s.main.all; }

    function drawMarkers() {
      var h = '';
      GHOSTS.forEach(function (g) {
        h += '<g class="sm ghost" transform="translate(' + g.pos[0] + ',' + g.pos[1] + ')" data-g="' + g.id + '" tabindex="0" role="button" aria-label="' + g.name + ': ' + g.why + '"><title>' + g.name + ': ' + g.why + '</title><circle r="12"/>' + ico(g.kind) + '</g>';
      });
      SENSORS.forEach(function (s) {
        var on = visible(s);
        h += '<g class="sm s-' + s.st + (on ? '' : ' dim') + (sel === s.id ? ' on' : '') + '" transform="translate(' + s.pos[0] + ',' + s.pos[1] + ')" data-s="' + s.id + '" tabindex="0" role="button" aria-label="' + s.name + ', ' + (STT[s.st]) + ', ' + valText(s) + '">' +
          '<circle class="halo" r="17"/><circle class="ring" r="13"/>' + ico(s.kind) +
          (s.noLabel || !on ? '' : '<text class="sv" x="' + s.lab[0] + '" y="' + s.lab[1] + '" text-anchor="' + (s.labAnchor || 'middle') + '">' + valText(s) + '</text>') + '</g>';
      });
      gl.innerHTML = h;
    }

    function rowsHtml(s) {
      return '<div class="sp-rows">' + s.rows.map(function (r) { return '<div class="sp-row"><span>' + r[0] + '</span><b>' + (r[2] ? '<i class="dot ' + r[2] + '"></i> ' : '') + r[1] + '</b></div>'; }).join('') + '</div>';
    }

    function showList() {
      sel = null;
      panel.innerHTML = '<h3 style="margin:0 0 4px">Alle sensorer</h3><div class="muted" style="font-size:.85rem;margin-bottom:10px">Vælg en sensor på planen eller her for at se seneste værdier.</div>' +
        '<div class="sp-list">' + SENSORS.map(function (s) {
          return '<button type="button" class="sp-item" data-s="' + s.id + '"><span class="dot ' + s.st + '"></span><span class="grow"><b>' + s.name + '</b><span class="meta">' + s.where + '</span></span><span class="sp-val">' + (s.main.all) + '</span></button>';
        }).join('') + '</div>' +
        '<div class="sp-sub">Ikke installeret</div><div class="sp-list">' + GHOSTS.map(function (g) {
          return '<button type="button" class="sp-item ghost" data-g="' + g.id + '"><span class="sp-ghost-dot"></span><span class="grow"><b>' + g.name + '</b><span class="meta">' + g.why + '</span></span></button>';
        }).join('') + '</div>';
      drawMarkers();
    }

    function showSensor(id) {
      var s = SENSORS.filter(function (x) { return x.id === id; })[0]; if (!s) return;
      sel = id;
      panel.innerHTML = '<button type="button" class="btn btn-ghost btn-sm sp-back">← Alle sensorer</button>' +
        '<div class="row-flex" style="gap:10px;margin:12px 0 2px"><span class="dot ' + s.st + '"></span><h3 style="margin:0">' + s.name + '</h3><span class="pill-tag ' + s.st + '">' + STT[s.st] + '</span></div>' +
        '<div class="muted" style="font-size:.88rem">' + s.model + ' · ' + s.where + '</div>' +
        '<div class="stamp" style="margin:6px 0 12px">Sidst set ' + NOW + ' · eksempel · kilde: ' + SRC + '</div>' +
        (s.alarm ? '<div class="notice bad" style="margin-bottom:12px">' + s.alarm + '</div>' : '') +
        rowsHtml(s) +
        (s.spark ? '<div class="sp-sparkbox"><div class="stamp">Temperatur, seneste 24 timer (eksempel)</div>' + spark(s.spark) + '</div>' : '') +
        '<p class="faint sp-note">' + s.note + '</p>';
      drawMarkers();
    }

    function showGhost(id) {
      var g = GHOSTS.filter(function (x) { return x.id === id; })[0]; if (!g) return;
      sel = null;
      panel.innerHTML = '<button type="button" class="btn btn-ghost btn-sm sp-back">← Alle sensorer</button>' +
        '<div class="row-flex" style="gap:10px;margin:12px 0 2px"><span class="sp-ghost-dot"></span><h3 style="margin:0">' + g.name + '</h3><span class="pill-tag">Ikke installeret</span></div>' +
        '<div class="muted" style="font-size:.88rem">' + g.where + '</div><p class="sp-note" style="margin-top:12px">' + g.why + '. Vises på planen, så det er tydeligt, hvad der ikke overvåges i dag.</p>';
      drawMarkers();
    }

    el.addEventListener('click', function (e) {
      var f = e.target.closest('.filter[data-l]');
      if (f) { layer = f.dataset.l; [].forEach.call(el.querySelectorAll('.filter[data-l]'), function (b) { b.setAttribute('aria-pressed', String(b === f)); }); drawMarkers(); return; }
      if (e.target.closest('.sp-back')) { showList(); return; }
      var s = e.target.closest('[data-s]'); if (s) { sel === s.dataset.s ? showList() : showSensor(s.dataset.s); return; }
      var g = e.target.closest('[data-g]'); if (g) showGhost(g.dataset.g);
    });
    el.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var t = e.target.closest('.sm'); if (!t) return;
      e.preventDefault(); t.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    showList();
  }

  window.GL = window.GL || {};
  GL.SensorPlan = { render: render, SENSORS: SENSORS };
  document.addEventListener('gl:ready', function () {
    [].forEach.call(document.querySelectorAll('[data-sensorplan]'), render);
  });
})();
