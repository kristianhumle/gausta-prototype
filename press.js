/* Omtale i medier (A10): fem visningsversioner i sideelementer.html#e-press.
   Data er et UDVALG fra kandidatlisten (teknisk/omtale-i-medier-kandidater.md, 5. oktober 2026),
   IKKE godkendt af ejeren. Resuméer er skrevet i egne ord. Citater er korte (under 15 ord),
   ordrette ifølge automatisk læsning og skal tjekkes i browser. Logoer er neutrale pladsholdere
   (mediets navn som tekst), indtil rettigheden er afklaret. */
(function () {
  'use strict';

  // lande: markeder omtalen vises til (redaktørens valg i CMS). INT = fallback.
  // saeson: vinter | sommer | helaar. pressetur: true = journalisten var inviteret (oplyst i artiklen).
  var ITEMS = [
    { id: 'tg15', medie: 'The Telegraph', type: 'Liste', dato: '2026-01', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 1, fremhaevet: true, betalingsmur: true,
      titel: 'The 15 best lesser-known ski resorts to try this winter',
      resume: 'Gausta er med blandt Europas mindre kendte skisteder: rolige, velpræparerede pister, sikker sne fra december til maj og en bane gennem et tidligere NATO-anlæg.',
      citat: 'Gausta offers blissful quiet that cannot be found at more popular resorts',
      url: 'https://www.telegraph.co.uk/travel/ski/best-alternative-ski-resorts-to-try-this-winter/' },
    { id: 'tgsec', medie: 'The Telegraph', type: 'Reportage', dato: '2024-02', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 3, fremhaevet: true, betalingsmur: true, pressetur: true,
      titel: "The top-secret Norwegian ski resort that British tourists haven't discovered",
      resume: 'Rejsereportage om Gausta som stille alternativ til Alperne, med tomme pister, Gaustabanen inde i fjeldet, udsigten fra toppen og krigshistorien i Rjukan.',
      citat: "We didn't queue once and lapped snowsure, well-manicured pistes",
      url: 'https://www.telegraph.co.uk/travel/ski/gausta-norway-secret-ski-resort-empty-british-tourists/' },
    { id: 'its', medie: 'InTheSnow', type: 'Reportage', dato: '2026-09', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 2, fremhaevet: true, pressetur: true,
      titel: 'Under The Radar',
      resume: 'Lang reportage om pister, aftenskiløb, langrend, off-piste fra Gaustatoppen og Vemork. Konklusionen: et lille skisted med høj kvalitet.',
      citat: 'what it lacks in size it more than makes up for in quality',
      url: 'https://www.inthesnow.com/under-the-radar/' },
    { id: 'fl', medie: 'Fall-Line', type: 'Liste', dato: '2023-12', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 4,
      titel: 'Breaking new terrain',
      resume: 'Skimagasinets udvalg af nyt terræn i sæsonen fremhæver Gaustabanen som den hemmelige vej til freeride på Gaustatoppen.',
      citat: 'Gausta ups the ante with its secret access uplift',
      url: 'https://www.fall-line.co.uk/breaking-new-terrain/' },
    { id: 'lin', medie: 'Life in Norway', type: 'Guide', dato: '2026-05', sprog: 'en', lande: ['UK', 'INT'], saeson: 'vinter', rang: 2, fremhaevet: true,
      titel: 'The Best Ski Resorts in Norway',
      resume: 'Guide til Norges bedste skisteder med et afsnit om Gausta: pister under et af landets mest kendte fjelde, langrend og historien i Rjukan.',
      citat: 'one of the most interesting ski destinations in Norway',
      url: 'https://www.lifeinnorway.net/ski-resorts/' },
    { id: 'lp', medie: 'Lonely Planet', type: 'Guide', dato: '', sprog: 'en', lande: ['INT'], saeson: 'helaar', rang: 1, fremhaevet: true,
      titel: 'Gaustabanen Cable Railway',
      resume: 'Guidebogens omtale af banen, der kører ind i fjeldet og op til lige under toppen. Bygget af NATO i 1958 og i dag åben for alle.',
      citat: 'Taking the railway is an incredible experience',
      url: 'https://www.lonelyplanet.com/points-of-interest/gaustabanen-cable-railway/1290136' },
    { id: 'sr', medie: 'Skiresort.info', type: 'Test', dato: '2019-04', sprog: 'en', lande: ['INT'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: 'Test report Gaustablikk – Rjukan',
      resume: 'Uafhængig testportal fremhæver snesikkerhed, begyndervenlighed, præparering, freeride og langrend. Vi viser ikke portalens stjernescore.',
      citat: 'the largest ski resort in the Telemark region',
      url: 'https://www.skiresort.com/en/ski-resort/gaustablikk-rjukan/test-report/' },
    { id: 'nrk', medie: 'NRK', type: 'Artikel', dato: '2017-08', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 1, fremhaevet: true,
      titel: 'Dette fjellet har Norges vakreste utsikt',
      resume: 'I en landsdækkende undersøgelse blev Gaustatoppen kåret som fjeldet med Norges smukkeste udsigt. Målt i areal ser man ca. en sjettedel af landet.',
      citat: 'Fra Gaustatoppen har man Norges største utsikt, målt etter areal',
      url: 'https://www.nrk.no/vestfoldogtelemark/dette-fjellet-har-den-vakreste-utsikten-i-norge-1.13634751' },
    { id: 'ff1', medie: 'Fri Flyt', type: 'Guide', dato: '2025-05', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Gaustatoppen: Østlandets kjempe',
      resume: 'Turguide med fire ruter til toppen. Terrænet er stenet og krævende, men udsigten og følelsen af at stå på toppen af Norge er det hele værd.',
      citat: 'Alle bør ha besøkt Gaustatoppen minst én gang i livet',
      url: 'https://www.friflyt.no/fjelltur/fjellturer/telemark/turguide-til-gaustatoppen-oestlandets-kjempe' },
    { id: 'ff2', medie: 'Fri Flyt', type: 'Guide', dato: '2024-12', sprog: 'no', lande: ['NO'], saeson: 'vinter', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Stor guide til toppturene på Gaustatoppen',
      resume: 'Guide til skitopture på Gaustatoppen med syv nedkørsler og udfordringer for både nye og erfarne skiløbere.',
      citat: 'Gaustatoppen har utfordringer for skikjørere på alle nivåer',
      url: 'https://www.friflyt.no/topptur/gaustatoppen/stor-guide-til-toppturene-pa-gaustatoppen' },
    { id: 'ap', medie: 'Aftenposten', type: 'Turtip', dato: '2020-06', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 3, fremhaevet: true, betalingsmur: true,
      titel: 'Turtips: Bakveien opp Gaustatoppen',
      resume: 'Forslag til en rute over selve toppunktet uden om turiststrømmen, på et af Norges mest karakteristiske fjelde.',
      citat: 'en av de mektigste og mest karakteristiske fjelltoppene i Norge',
      url: 'https://www.aftenposten.no/amagasinet/i/napRaQ/turtips-bakveien-opp-gaustatoppen' },
    { id: 'dnt', medie: 'DNT', type: 'Guide', dato: '2020-11', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 4,
      titel: 'Gaustatoppen - Østlandets mest tilgjengelige fjelltopp',
      resume: 'Turistforeningen anbefaler turen fra Stavsro, som de fleste klarer på 2 til 3 timer, med turisthytte på toppen.',
      citat: 'Sentralt plassert på Østlandet ligger Norges Kilimanjaro',
      url: 'https://www.dnt.no/turtips/anbefalte-turer/gaustatoppen-ostlandets-mest-tilgjengelige-fjelltopp/' },
    { id: 'sk', medie: 'Skisport.dk', type: 'Artikel', dato: '', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 1, fremhaevet: true,
      titel: 'Gausta – snesikker perle i det fantastiske telemark',
      resume: 'Danmarks største skiportal kalder Gausta snesikkert og børnevenligt, med kort rejse fra Larvik og Langesund, aftenskiløb og langrend.',
      citat: 'Gausta en af Norges mest snesikre vinterdestinationer',
      url: 'https://www.skisport.dk/artikler/gaustablikk-snesikker-perle-i-det-fantastiske-telemark/' },
    { id: 'ma', medie: 'Marina Aagaard', type: 'Blog', dato: '2024-02', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 2, fremhaevet: true,
      titel: 'Skiferie med powder sne: Gausta og Gaustablikk, Norge',
      resume: 'Personlig beretning om en skiferie med transport fra Danmark, pister, skovløjper og banen op på toppen. Anbefales til familier.',
      citat: 'En formidabel vid udsigt over landskabet og Gaustatoppen.',
      url: 'https://marinaaagaardblog.com/2024/02/24/skiferie-powder-gausta-gaustablikk-norge/' },
    { id: 'fdm', medie: 'FDM Travel', type: 'Rejsetip', dato: '2022-06', sprog: 'da', lande: ['DK'], saeson: 'sommer', rang: 3, fremhaevet: true,
      titel: 'Gaustatoppen i Telemark',
      resume: 'Rejsetip om Telemarks højeste fjeld: udsigten, banen gennem fjeldet, vandreruten fra Stavsro og turisthytten på toppen.',
      citat: 'som af mange betragtes som Norges smukkeste fjeld',
      url: 'https://www.fdm-travel.dk/norge/gaustatoppen-telemark-rejsetip' },
    { id: 'ak', medie: 'Åka Skidor', type: 'Artikel', dato: '2020-07', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 1, fremhaevet: true,
      titel: 'Åka Skidors bergskunskap del 4: åkdisciplin i komplex terräng',
      resume: 'Skimagasinet bruger Gaustatoppen som eksempel på stejlt terræn og anbefaler et besøg for faldhøjden og de stejle render.',
      citat: 'För er som inte varit på Gaustatoppen i Norge så rekommenderas ett besök.',
      url: 'https://www.akaskidor.se/artiklar/artiklar/20200706/aka-skidors-bergskunskap-del-4-akdisciplin-i-komplex-terrang/' },
    { id: 'sn', medie: 'Snösäker', type: 'Guide', dato: '', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Gausta – bra toppturer och offpist nära södra Sverige',
      resume: 'Toptursguide, der kalder Gausta det nærmeste sted med topture og off-piste af god kvalitet for skiløbere i Sydsverige.',
      citat: 'det närmaste fjällområde som erbjuder toppturer och offpist av bra kvalitet',
      url: 'https://xn--snsker-dua6l.se/gausta-bra-toppturer-och-offpist-nara-sodra-sverige/' },
    { id: 'hr', medie: 'Happyride', type: 'Reportage', dato: '2024-05', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: '50 mil på cykel med skidor – från Skåne till norska Gausta',
      resume: 'Tre venner cykler fra Lund til Gausta med ski og telt og går fire topture på og omkring Gaustatoppen.',
      citat: 'Gausta, som är ett gömt skidparadis',
      url: 'https://happyride.se/50-mil-pa-cykel-med-skidor-fran-skane-till-norska-gausta/' }
  ];

  var MARKETS = [['DK', 'Danmark'], ['SE', 'Sverige'], ['NO', 'Norge'], ['UK', 'UK'], ['XX', 'Andet land']];
  var SPROG = { da: 'Dansk', en: 'Engelsk', no: 'Norsk', sv: 'Svensk' };
  var SAESON = { vinter: 'Vinter', sommer: 'Sommer', helaar: 'Hele året' };
  var MDR = ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'];
  var PAGE_LANG = 'da';
  var KEY = 'gl-press-market';

  var market = 'DK';
  try { market = localStorage.getItem(KEY) || 'DK'; } catch (e) {}

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmtDate(d) { if (!d) return 'Udateret'; var p = d.split('-'); return MDR[+p[1] - 1] + ' ' + p[0]; }
  function sortRank(a, b) { return (a.rang - b.rang) || (b.dato || '').localeCompare(a.dato || ''); }

  // Visningsregel 1 og 2 fra definitionen: valgt marked, ellers INT, ellers skjul.
  function forMarket(m) {
    var own = ITEMS.filter(function (i) { return i.lande.indexOf(m) > -1; }).sort(sortRank);
    if (own.length) return { items: own, fallback: false };
    var intl = ITEMS.filter(function (i) { return i.lande.indexOf('INT') > -1; }).sort(sortRank);
    return { items: intl, fallback: intl.length > 0 };
  }

  function logo(i, cls) {
    return '<span class="pr-logo ' + (cls || '') + '" title="Pladsholder for logo">' + esc(i.medie) + '</span>';
  }
  function badges(i) {
    var b = [];
    if (i.sprog !== PAGE_LANG) b.push('<span class="pr-b">' + SPROG[i.sprog] + '</span>');
    if (i.betalingsmur) b.push('<span class="pr-b">Betalingsmur</span>');
    if (i.pressetur) b.push('<span class="pr-b pr-b-warn" title="Artiklen oplyser, at journalisten var inviteret">Inviteret tur</span>');
    return b.join('');
  }
  function readLink(i) {
    return '<a class="pr-read" href="' + esc(i.url) + '" target="_blank" rel="noopener">Læs hos ' + esc(i.medie) + ' <span aria-hidden="true">↗</span></a>';
  }
  function langAttr(i) { return i.sprog !== PAGE_LANG ? ' lang="' + (i.sprog === 'no' ? 'nb' : i.sprog) + '"' : ''; }
  function fallbackNote(r) {
    return r.fallback ? '<p class="pr-fb">Der er endnu ingen omtale for dit land. Vi viser internationale artikler.</p>' : '';
  }

  /* ---------- Version 1: kort med logo (forside, 3 til 4) ---------- */
  function v1(r) {
    var items = r.items.filter(function (i) { return i.fremhaevet; }).slice(0, 4);
    return fallbackNote(r) + '<ul class="pr-cards">' + items.map(function (i) {
      return '<li class="pr-card">' + logo(i) +
        '<div class="pr-meta">' + esc(i.type) + ' · ' + fmtDate(i.dato) + '</div>' +
        '<h5' + langAttr(i) + '>' + esc(i.titel) + '</h5>' +
        '<p>' + esc(i.resume) + '</p>' +
        '<div class="pr-foot"><div class="pr-badges">' + badges(i) + '</div>' + readLink(i) + '</div></li>';
    }).join('') + '</ul>';
  }

  /* ---------- Version 2: fremhævet citat (et ad gangen, manuel bladring) ---------- */
  var v2idx = 0;
  function v2(r) {
    var items = r.items.filter(function (i) { return i.fremhaevet && i.citat; });
    if (!items.length) return '';
    v2idx = v2idx % items.length;
    var i = items[v2idx];
    return fallbackNote(r) + '<figure class="pr-quote">' +
      '<blockquote' + langAttr(i) + '><p>“' + esc(i.citat) + '”</p></blockquote>' +
      '<figcaption>' + logo(i, 'pr-logo-sm') + '<span>' + esc(i.titel.length > 70 ? i.titel.slice(0, 68) + '…' : i.titel) + ' · ' + fmtDate(i.dato) + '</span>' +
      '<div class="pr-badges">' + badges(i) + '</div>' + readLink(i) + '</figcaption>' +
      '<div class="pr-nav"><button type="button" class="btn btn-sm" data-pr-prev aria-label="Forrige omtale">←</button>' +
      '<span class="muted">' + (v2idx + 1) + ' af ' + items.length + '</span>' +
      '<button type="button" class="btn btn-sm" data-pr-next aria-label="Næste omtale">→</button></div></figure>';
  }

  /* ---------- Version 3: logobånd "Gausta er omtalt i" ---------- */
  function v3(r) {
    var seen = {}, items = r.items.filter(function (i) { if (seen[i.medie]) return false; seen[i.medie] = 1; return true; }).slice(0, 6);
    return fallbackNote(r) + '<div class="pr-strip"><span class="pr-strip-lbl">Gausta er omtalt i</span><ul>' + items.map(function (i) {
      return '<li><a href="' + esc(i.url) + '" target="_blank" rel="noopener" title="' + esc(i.titel) + '">' + logo(i, 'pr-logo-strip') + '</a></li>';
    }).join('') + '</ul><a class="pr-all" href="#e-press-v4">Se alle omtaler</a></div>';
  }

  /* ---------- Version 4: liste med filter (egen side) ---------- */
  var v4type = 'Alle', v4season = 'Alle';
  function v4(r) {
    var types = ['Alle'].concat(r.items.map(function (i) { return i.type; }).filter(function (t, k, a) { return a.indexOf(t) === k; }));
    var seasons = ['Alle', 'vinter', 'sommer'];
    var list = r.items.filter(function (i) {
      return (v4type === 'Alle' || i.type === v4type) && (v4season === 'Alle' || i.saeson === v4season || i.saeson === 'helaar');
    });
    return fallbackNote(r) +
      '<div class="pr-filters"><div class="row-flex" role="group" aria-label="Type">' + types.map(function (t) {
        return '<button type="button" class="filter" data-pr-type="' + esc(t) + '" aria-pressed="' + (t === v4type) + '">' + esc(t) + '</button>';
      }).join('') + '</div><div class="row-flex" role="group" aria-label="Årstid">' + seasons.map(function (s) {
        return '<button type="button" class="filter" data-pr-season="' + s + '" aria-pressed="' + (s === v4season) + '">' + (s === 'Alle' ? 'Hele året' : SAESON[s]) + '</button>';
      }).join('') + '</div></div>' +
      '<ul class="pr-list">' + (list.length ? list.map(function (i) {
        return '<li>' + logo(i, 'pr-logo-sm') + '<div class="grow"><div class="pr-meta">' + esc(i.medie) + ' · ' + esc(i.type) + ' · ' + fmtDate(i.dato) + '</div>' +
          '<b' + langAttr(i) + '>' + esc(i.titel) + '</b><p>' + esc(i.resume) + '</p><div class="pr-badges">' + badges(i) + '</div></div>' + readLink(i) + '</li>';
      }).join('') : '<li class="muted">Ingen omtaler med det filter.</li>') + '</ul>';
  }

  /* ---------- Version 5: følger årstiden (vinter = skiområdet, ellers fjeldet) ---------- */
  function v5(r) {
    var s = document.documentElement.getAttribute('data-season') || 'autumn';
    var want = s === 'winter' ? 'vinter' : 'sommer';
    var items = r.items.filter(function (i) { return i.saeson === want || i.saeson === 'helaar'; });
    var note = '';
    if (!items.length) { items = r.items; note = '<p class="pr-fb">Ingen omtale for årstiden. Vi viser alle.</p>'; }
    var head = want === 'vinter' ? 'Gausta om vinteren i medierne' : 'Gaustatoppen i medierne';
    var sub = want === 'vinter' ? 'Pister, off-piste og langrend.' : 'Udsigten, vandringen og banen inde i fjeldet. Vises i forår, sommer og efterår.';
    return fallbackNote(r) + note + '<div class="pr-season"><div><p class="eyebrow">Årstid: ' + ({ winter: 'vinter', spring: 'forår', summer: 'sommer', autumn: 'efterår' }[s]) + '</p><h5>' + head + '</h5><p class="muted">' + sub + '</p></div>' +
      '<ul>' + items.slice(0, 3).map(function (i) {
        return '<li>' + logo(i, 'pr-logo-sm') + '<p' + langAttr(i) + '>“' + esc(i.citat) + '”</p><div class="pr-foot"><div class="pr-badges">' + badges(i) + '</div>' + readLink(i) + '</div></li>';
      }).join('') + '</ul></div>';
  }

  var RENDER = { v1: v1, v2: v2, v3: v3, v4: v4, v5: v5 };

  function render() {
    var r = forMarket(market);
    document.querySelectorAll('[data-press]').forEach(function (el) {
      el.innerHTML = r.items.length ? RENDER[el.getAttribute('data-press')](r) : '';
    });
    document.querySelectorAll('[data-press-market]').forEach(function (g) {
      g.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-m') === market)); });
    });
    var c = document.querySelector('[data-press-count]');
    if (c) {
      c.textContent = r.fallback ? 'Ingen omtale for det valgte land. Fallback: ' + r.items.length + ' internationale.'
        : r.items.length + ' omtaler er markeret til ' + MARKETS.filter(function (m) { return m[0] === market; })[0][1] + '.';
    }
  }

  function init() {
    var root = document.getElementById('e-press');
    if (!root) return;
    document.querySelectorAll('[data-press-market]').forEach(function (g) {
      g.innerHTML = MARKETS.map(function (m) { return '<button type="button" class="filter" data-m="' + m[0] + '">' + m[1] + '</button>'; }).join('');
    });
    root.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.hasAttribute('data-m')) { market = t.getAttribute('data-m'); v2idx = 0; v4type = 'Alle'; try { localStorage.setItem(KEY, market); } catch (x) {} render(); }
      else if (t.hasAttribute('data-pr-next')) { v2idx++; render(); }
      else if (t.hasAttribute('data-pr-prev')) { var n = forMarket(market).items.filter(function (i) { return i.fremhaevet && i.citat; }).length; v2idx = (v2idx - 1 + n) % n; render(); }
      else if (t.hasAttribute('data-pr-type')) { v4type = t.getAttribute('data-pr-type'); render(); }
      else if (t.hasAttribute('data-pr-season')) { v4season = t.getAttribute('data-pr-season'); render(); }
    });
    // Version 5 følger sæsonvælgeren i toppen.
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-season'] });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
