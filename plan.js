/* Interactive floor plan (prototype). The plan is redrawn as SVG from the listing's
   room layout (schematic, not to scale). Room photos are prototype images and the
   room-to-photo mapping is a guess from the pictures: to be confirmed.
   Chosen concept: B (paper plan + side panel). Concepts A (blueprint + modal) and C (guided tour) were dropped. */
(function () {
  'use strict';
  var L = function (n) { return 'lejligheden/lejligheden-' + (n < 10 ? '0' : '') + n; };

  var ROOMS = [
    { id: 'entre', name: 'Entré og skirum', dim: '4 m²', desc: 'Indgangen med garderobe og bænk til overtøj og sko. Her er også plads til ski og udstyr.', poly: [[668,212],[750,212],[750,330],[668,330]], label: [709,262], pin: [709,318],
      photos: [[L(17),'Entré med garderobe'],[L(28),'Entré med bænk'],[L(2),'Gang'],[L(13),'Skirum']] },
    { id: 'sov1', name: 'Soveværelse 1', dim: '6 m²', desc: 'Soveværelse med dobbeltseng, lænestol og vindue.', poly: [[552,212],[668,212],[668,318],[552,318]], label: [610,262], pin: [653,227],
      photos: [[L(7),'Soveværelse'],[L(29),'Soveværelse, sengebord']] },
    { id: 'sov2', name: 'Soveværelse 2', dim: '5 m²', desc: 'Lille soveværelse med køjeseng.', poly: [[750,212],[860,212],[860,312],[750,312]], label: [805,262], pin: [845,227],
      photos: [[L(10),'Køjeseng']] },
    { id: 'bad', name: 'Bad', dim: '4 m²', desc: 'Badeværelse med bruser, vask og vaskemaskine.', poly: [[750,312],[860,312],[860,390],[750,390]], label: [805,342], pin: [845,327],
      photos: [[L(9),'Bad med vaskemaskine'],[L(23),'Bad'],[L(6),'Bad, detalje'],[L(22),'Håndklæder']] },
    { id: 'kstue', name: 'Køkken og stue', dim: '34 m²', desc: 'Åbent køkken og opholdsstue med spisebord, brændeovn, sofa og store vinduer. Herfra er der adgang til terrassen.', poly: [[552,318],[750,318],[750,660],[552,660]], label: [650,490], pin: [574,372],
      photos: [[L(5),'Stue og spisebord'],[L(3),'Køkken og spisebord'],[L(16),'Køkken'],[L(31),'Køkken'],[L(18),'Køkkenkrog'],[L(21),'Stue'],[L(19),'Stue'],[L(30),'Stue'],[L(34),'Stue'],[L(14),'Stue'],[L(15),'Stue'],[L(4),'Brændeovn'],[L(11),'Sofabord'],[L(25),'Terrassedør med gardin'],[L(1),'Detalje']] },
    { id: 'stuesov', name: 'TV-stue / soveværelse', lines: ['TV-stue /','soveværelse'], dim: '10 m²', desc: 'TV-stue med sofa og tv, som også kan bruges som ekstra soveværelse.', poly: [[750,416],[860,416],[860,640],[750,640]], label: [805,500], pin: [845,431],
      photos: [[L(24),'Tv-hjørne'],[L(27),'Sofa og tv'],[L(12),'Seng og tv'],[L(32),'Seng med terrassedør']] },
    { id: 'terrasse', name: 'Terrasse', dim: '25 m²', desc: 'Terrasse med plads til udemøbler og sol det meste af dagen.', poly: [[552,660],[860,660],[860,815],[552,815]], label: [705,738], pin: [705,775],
      photos: [['sommer/sommer-01','Terrassen om sommeren']] },
    { id: 'outside', name: 'Uden for planen', short: 'Uden for planen', dim: '', desc: 'Bygningen udefra, indgangen og depotrum uden for selve lejligheden.', photos: [[L(8),'Bygningen udefra'],[L(26),'Indgang udefra'],[L(20),'Depot'],[L(33),'Depot']] }
  ];
  var SHORT = { entre: 'Entré og skirum', sov1: 'Soveværelse 1', sov2: 'Soveværelse 2', kstue: 'Køkken og stue', bad: 'Bad', stuesov: 'TV-stue', terrasse: 'Terrasse', outside: 'Uden for planen' };
  var PILLS = ['entre', 'sov1', 'sov2', 'kstue', 'bad', 'stuesov', 'terrasse', 'outside'];
  var ORDER_ALL = ['kstue', 'stuesov', 'sov1', 'sov2', 'bad', 'entre', 'terrasse', 'outside'];
  function room(id) { return ROOMS.filter(function (r) { return r.id === id; })[0]; }
  function lines(r) { return r.lines || r.name.replace(' og ', ' og|').split('|'); }

  function drawing() {
    var s = '<svg class="plan-svg" viewBox="535 180 340 650" role="group" aria-label="Plantegning med rum">';
    // room fills (hit areas)
    ROOMS.forEach(function (r) {
      if (!r.poly) return;
      var pts = r.poly.map(function (p) { return p.join(','); }).join(' ');
      var badge = r.photos.length;
      s += '<g class="room" data-room="' + r.id + '" tabindex="0" role="button" aria-label="' + r.name + ', ' + r.photos.length + ' billeder">' +
        '<polygon class="pr" points="' + pts + '"/>' +
        '<text class="pl" x="' + r.label[0] + '" y="' + r.label[1] + '" text-anchor="middle">' + lines(r).map(function (t, i) { return '<tspan x="' + r.label[0] + '" dy="' + (i ? 15 : 0) + '">' + t + '</tspan>'; }).join('') + '</text>' +
        '<text class="pd" x="' + r.label[0] + '" y="' + (r.label[1] + 15 * lines(r).length + 2) + '" text-anchor="middle">' + r.dim + '</text>' +
        '<g class="pin" transform="translate(' + r.pin[0] + ',' + r.pin[1] + ')"><circle r="12"/><text y="4.500" text-anchor="middle">' + badge + '</text></g>' +
        '</g>';
    });
    // walls
    s += '<g class="pw-g">' +
      '<rect class="pw" x="552" y="212" width="308" height="448" fill="none" stroke-width="5"/>' +
      '<path class="pw" d="M668 212V318M552 318H668M750 212V590M750 312H860M750 416H860" stroke-width="3" fill="none"/>' +
      '<rect class="pwf" x="668" y="318" width="26" height="82"/>' +
      '<rect class="pwf" x="750" y="390" width="110" height="26"/>' +
      '<rect class="pwf" x="688" y="588" width="22" height="36"/>' +
      // kitchen counter
      '<path class="pf" d="M552 318H668V346H552z"/><circle class="pf" cx="568" cy="332" r="5"/><circle class="pf" cx="590" cy="332" r="5"/><rect class="pf" x="640" y="325" width="14" height="14"/>' +
      // windows
      '<path class="pwin" d="M606 212H664M758 212H812M552 660H708" />' +
      // doors: gaps + swing arcs
      '<rect class="gap" x="699" y="209" width="40" height="7"/><path class="pdoor" d="M699 212A40 40 0 0 1 739 212"/>' +
      '<rect class="gap" x="665" y="240" width="7" height="40"/><path class="pdoor" d="M668 240A40 40 0 0 1 668 280"/>' +
      '<rect class="gap" x="747" y="240" width="7" height="40"/><path class="pdoor" d="M750 240A40 40 0 0 0 750 280"/>' +
      '<rect class="gap" x="747" y="322" width="7" height="34"/><path class="pdoor" d="M750 322A34 34 0 0 0 750 356"/>' +
      '<rect class="gap" x="712" y="586" width="36" height="7"/><path class="pdoor" d="M748 590A36 36 0 0 1 712 626"/>' +
      '</g>' +
      // terrace railing
      '<path class="prail" d="M552 660V815H860V660"/>' +
      // entry arrow
      '<path class="pentry" d="M718 186V204M711 198L718 206L725 198"/>' +
      '<text class="pd" x="740" y="196">Indgang</text>' +
      // compass-ish north note
      '<text class="pd" x="858" y="826" text-anchor="end">Skitse, ikke målfast</text>';
    s += '</svg>';
    return s;
  }

  function bindRooms(el, onPick) {
    el.addEventListener('click', function (e) { var g = e.target.closest('.room'); if (g) onPick(room(g.dataset.room)); });
    el.addEventListener('keydown', function (e) { if (e.key !== 'Enter' && e.key !== ' ') return; var g = e.target.closest('.room'); if (g) { e.preventDefault(); onPick(room(g.dataset.room)); } });
  }
  function mark(el, id) { [].forEach.call(el.querySelectorAll('.room'), function (g) { g.classList.toggle('on', g.dataset.room === id); }); }
  function allPhotos() {
    var out = [];
    ORDER_ALL.forEach(function (id) { var r = room(id); r.photos.forEach(function (p) { out.push([p[0], p[1], r.name]); }); });
    return out;
  }

  // Plan + room selector + photo panel. "Alle" (all rooms) is the default view.
  function panelVariant(el) {
    var touch = matchMedia('(hover: none)').matches;
    var stacked = function () { return matchMedia('(max-width: 860px)').matches; };
    var verb = touch ? 'Tryk' : 'Klik';
    var all = allPhotos();
    el.innerHTML = '<p class="plan-tip">' + verb + ' på et rum på planen, eller vælg rum i listen. Tallet på planen viser antal billeder.</p>' +
      '<div class="plan-pills" role="group" aria-label="Vælg rum"><button type="button" class="filter" data-r="all" aria-pressed="true">Alle <span class="n">' + all.length + '</span></button>' +
      PILLS.map(function (id) { return '<button type="button" class="filter" data-r="' + id + '" aria-pressed="false">' + SHORT[id] + ' <span class="n">' + room(id).photos.length + '</span></button>'; }).join('') + '</div>' +
      '<div class="plan-split"><div class="plan-paper plan-wrap">' + drawing() + '</div><div class="plan-panel" aria-live="polite"></div></div>' +
      '<p class="faint plan-note">Prototypebilleder. Rumnavne og hvilke billeder der hører til hvilket rum er gæt ud fra billederne og skal bekræftes.</p>';
    var panel = el.querySelector('.plan-panel'), planBox = el.querySelector('.plan-paper'), cur = 'all';

    function show(id, i, scroll) {
      cur = id; i = i || 0;
      var isAll = id === 'all', r = isAll ? null : room(id);
      var photos = isAll ? all : r.photos.map(function (p) { return [p[0], p[1], r.name]; });
      var p = photos[i];
      mark(el, isAll ? null : id);
      [].forEach.call(el.querySelectorAll('.plan-pills .filter'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.r === id)); });
      var cap = isAll ? p[1] + ' · ' + p[2] : p[1];
      panel.innerHTML = '<button type="button" class="plan-back btn btn-ghost btn-sm">↑ Tilbage til planen</button>' +
        '<h3 style="margin:0 0 4px">' + (isAll ? 'Alle billeder' : r.name) + '</h3>' +
        '<div class="muted" style="font-size:.85rem;margin-bottom:12px">' + (isAll ? photos.length + ' billeder fra hele lejligheden' : photos.length + ' billeder' + (r.dim ? ' · ' + r.dim + ' <span class="verify">skal verificeres</span>' : '')) + '</div>' +
        '<div data-gallery-group>' + photos.map(function (q, k) {
          var qc = isAll ? q[1] + ' · ' + q[2] : q[1];
          if (k !== i) return '<a class="sr-only" href="' + GL.photo(q[0]) + '" data-lightbox data-cap="' + qc + '">' + qc + '</a>';
          return '<a class="plan-hero" href="' + GL.photo(q[0]) + '" data-lightbox data-cap="' + cap + '" aria-label="Forstør billedet: ' + cap + '"><img class="photo" src="' + GL.photo(q[0], 'm') + '" alt="' + cap + '">' +
            '<span class="zoom-hint">' + GL.icon('search') + (touch ? 'Tryk for at forstørre' : 'Klik for at forstørre') + '</span><span class="cap">' + cap + '</span></a>';
        }).join('') + '</div>' +
        '<div class="plan-thumbs">' + photos.map(function (q, k) { return '<button type="button" class="' + (k === i ? 'on' : '') + '" data-k="' + k + '" aria-label="' + q[1] + '"><img src="' + GL.photo(q[0], 's') + '" alt="" loading="lazy"></button>'; }).join('') + '</div>' +
        '<p class="plan-desc">' + (isAll ? 'Vælg et rum på planen eller i listen over planen for kun at se det rums billeder.' : r.desc) + '</p>';
      [].forEach.call(panel.querySelectorAll('.plan-thumbs button'), function (b) { b.addEventListener('click', function () { show(id, +b.dataset.k, false); }); });
      panel.querySelector('.plan-back').addEventListener('click', function () { planBox.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
      if (scroll && stacked()) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // pills select a room; tapping the selected room on the plan returns to "Alle"
    el.querySelector('.plan-pills').addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) show(b.dataset.r, 0, false); });
    bindRooms(el, function (r) { if (cur === r.id) show('all', 0, false); else show(r.id, 0, true); });
    show('all', 0, false);
  }

  window.GL = window.GL || {};
  GL.Plan = { ROOMS: ROOMS, panel: panelVariant };
  document.addEventListener('gl:ready', function () {
    [].forEach.call(document.querySelectorAll('[data-plan]'), function (el) { var v = GL.Plan[el.getAttribute('data-plan')]; if (v) v(el); });
  });
})();
