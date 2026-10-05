/* Omtale i medier (A10): sideelementer.html#e-press og forsiden (#omtale).
   SKITSE. Kravet til produktion står i teknisk/omtale-i-medier.md, afsnit 12; ved uenighed gælder det.
   Valgt 5. oktober 2026 (Brugeroplysning): version 1 (kort med logo, nu som karrusel) og version 4 (liste med filter).
   Data er et UDVALG fra kandidatlisten (teknisk/omtale-i-medier-kandidater.md, 5. oktober 2026), IKKE godkendt af ejeren.
   Hver omtale viser overskrift og citat(er) fra artiklen (Brugeroplysning 5. oktober 2026: citater frem for eget resumé).
   Citaterne er ordrette ifølge en automatisk læsning, under 15 ord, og skal tjekkes i browser. "…" markerer, at citatet
   starter midt i en sætning. resume (egne ord) bruges kun, hvis en omtale ikke har citat. Logoer er kopier i assets/web/logos/ (kilder: teknisk/omtale-i-medier-logoer.md),
   kun til prototypen; rettigheden er ikke afklaret. Uden logo vises mediets navn som tekst. */
(function () {
  'use strict';

  // Filnavn pr. logo-slug i assets/web/logos/. Mangler et logo, vises navnet som tekst.
  var LOGOS = { 'abcnyheter': 'abcnyheter.svg', 'aftenposten': 'aftenposten.svg', 'akaskidor': 'akaskidor.png', 'dnt': 'dnt.svg', 'fall-line': 'fall-line.svg', 'fdm': 'fdm.svg', 'freeride-se': 'freeride-se.svg', 'friflyt': 'friflyt.svg', 'happyride': 'happyride.svg', 'inthesnow': 'inthesnow.svg', 'lifeinnorway': 'lifeinnorway.png', 'lonelyplanet': 'lonelyplanet.svg', 'nrk': 'nrk.svg', 'planetski': 'planetski.png', 'skiresort': 'skiresort.png', 'skisport': 'skisport.png', 'snosaker': 'snosaker.png', 'telegraph': 'telegraph.svg' };
  // Logoer, der kun findes i hvid/negativ udgave, får en mørk bundplade.
  var DARK = { planetski: 1, akaskidor: 1 };

  // lande: markeder omtalen vises til (redaktørens valg i CMS). INT = fallback.
  // fremhaevet: vises i karrusellen på forsiden. pressetur: artiklen oplyser, at journalisten var inviteret.
  var ITEMS = [
    // UK
    { medie: 'The Telegraph', logo: 'telegraph', type: 'Liste', dato: '2026-01', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 1, fremhaevet: true, betalingsmur: true,
      titel: 'The 15 best lesser-known ski resorts to try this winter',
      resume: 'Gausta er med blandt Europas mindre kendte skisteder: rolige, velpræparerede pister, sikker sne fra december til maj og en bane gennem et tidligere NATO-anlæg.',
      citat: ["Gausta offers blissful quiet that cannot be found at more popular resorts"],
      url: 'https://www.telegraph.co.uk/travel/ski/best-alternative-ski-resorts-to-try-this-winter/' },
    { medie: 'InTheSnow', logo: 'inthesnow', type: 'Reportage', dato: '2026-09', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 2, fremhaevet: true, pressetur: true,
      titel: 'Under The Radar',
      resume: 'Lang reportage om pister, aftenskiløb, langrend, off-piste fra Gaustatoppen og Vemork. Konklusionen: et lille skisted med høj kvalitet.',
      citat: ["…what it lacks in size it more than makes up for in quality"],
      url: 'https://www.inthesnow.com/under-the-radar/' },
    { medie: 'Life in Norway', logo: 'lifeinnorway', type: 'Guide', dato: '2026-05', sprog: 'en', lande: ['UK', 'INT'], saeson: 'vinter', rang: 2, fremhaevet: true,
      titel: 'The Best Ski Resorts in Norway',
      resume: 'Guide til Norges bedste skisteder med et afsnit om Gausta: pister under et af landets mest kendte fjelde, langrend og historien i Rjukan.',
      citat: ["Gausta has grown into one of the most interesting ski destinations in Norway"],
      url: 'https://www.lifeinnorway.net/ski-resorts/' },
    { medie: 'The Telegraph', logo: 'telegraph', type: 'Reportage', dato: '2024-02', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 3, fremhaevet: true, betalingsmur: true, pressetur: true,
      titel: "The top-secret Norwegian ski resort that British tourists haven't discovered",
      resume: 'Rejsereportage om Gausta som stille alternativ til Alperne, med tomme pister, banen inde i fjeldet, udsigten fra toppen og krigshistorien i Rjukan.',
      citat: ["We didn't queue once and lapped snowsure, well-manicured pistes without any interruption"],
      url: 'https://www.telegraph.co.uk/travel/ski/gausta-norway-secret-ski-resort-empty-british-tourists/' },
    { medie: 'PlanetSKI', logo: 'planetski', type: 'Reportage', dato: '2026-03', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: 'PlanetSKI Updates on its Spring Break in Gausta, Norway',
      resume: 'Løbende beretning fra en familiepåske i Gausta: veldesignede lifte, tomme pister, banen op på toppen, flydende sauna og historien i området.',
      citat: ["…the unique experience on offer in the wonderful Norwegian resort of Gausta"],
      url: 'https://planetski.eu/2026/03/30/planetski-in-on-an-easter-break-in-gausta-in-norway/' },
    { medie: 'Fall-Line', logo: 'fall-line', type: 'Liste', dato: '2023-12', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 4, fremhaevet: true,
      titel: 'Breaking new terrain',
      resume: 'Skimagasinets udvalg af nyt terræn i sæsonen fremhæver banen inde i fjeldet som den hemmelige vej til freeride på Gaustatoppen.',
      citat: ["Gausta ups the ante with its secret access uplift to freeride hill Gaustatoppen"],
      url: 'https://www.fall-line.co.uk/breaking-new-terrain/' },
    { medie: 'The Telegraph', logo: 'telegraph', type: 'Guide', dato: '2024-11', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 4, fremhaevet: true, betalingsmur: true,
      titel: "Norway and Sweden hold the secret to snow-sure ski holidays – here's where to go",
      resume: 'Guide til skisteder i Skandinavien. Gausta anbefales til historieinteresserede skiløbere: Telemark som skiløbets vugge, banen gennem fjeldet og flydende sauna.',
      citat: ["Its unique charm lies in its history"],
      url: 'https://www.telegraph.co.uk/travel/ski/advice/best-ski-resorts-norway-sweden/' },
    { medie: 'InTheSnow', logo: 'inthesnow', type: 'Liste', dato: '2025-07', sprog: 'en', lande: ['UK'], saeson: 'vinter', rang: 5,
      titel: 'Snow Way Like Norway',
      resume: 'Oversigt over norske skisteder for britiske skiløbere. Gausta får eget afsnit om banen inde i fjeldet, carving, off-piste og områder til familier.',
      citat: ["Norway's quirkiest lift"],
      url: 'https://www.inthesnow.com/snow-way-like-norway/' },
    // INT (fallback)
    { medie: 'Lonely Planet', logo: 'lonelyplanet', type: 'Guide', dato: '', sprog: 'en', lande: ['INT'], saeson: 'helaar', rang: 1, fremhaevet: true,
      titel: 'Gaustabanen Cable Railway',
      resume: 'Guidebogens omtale af banen, der kører ind i fjeldet og op til lige under toppen. Bygget af NATO i 1958 og i dag åben for alle.',
      citat: ["Taking the railway is an incredible experience"],
      url: 'https://www.lonelyplanet.com/points-of-interest/gaustabanen-cable-railway/1290136' },
    { medie: 'Skiresort.info', logo: 'skiresort', type: 'Test', dato: '2019-04', sprog: 'en', lande: ['INT'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: 'Test report Gaustablikk – Rjukan',
      resume: 'Uafhængig testportal fremhæver snesikkerhed, begyndervenlighed, præparering, freeride og langrend. Vi viser ikke portalens stjernescore.',
      citat: ["Gaustablikk Skisenter is the largest ski resort in the Telemark region."],
      url: 'https://www.skiresort.com/en/ski-resort/gaustablikk-rjukan/test-report/' },
    // NO
    { medie: 'NRK', logo: 'nrk', type: 'Artikel', dato: '2017-08', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 1, fremhaevet: true,
      titel: 'Dette fjellet har Norges vakreste utsikt',
      resume: 'I en landsdækkende undersøgelse blev Gaustatoppen kåret som fjeldet med Norges smukkeste udsigt. Målt i areal ser man ca. en sjettedel af landet.',
      citat: ["Fra Gaustatoppen har man Norges største utsikt, målt etter areal"],
      url: 'https://www.nrk.no/vestfoldogtelemark/dette-fjellet-har-den-vakreste-utsikten-i-norge-1.13634751' },
    { medie: 'Fri Flyt', logo: 'friflyt', type: 'Guide', dato: '2025-05', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Gaustatoppen: Østlandets kjempe',
      resume: 'Turguide med fire ruter til toppen. Terrænet er stenet og krævende, men udsigten og følelsen af at stå på toppen af Norge er det hele værd.',
      citat: ["Alle bør ha besøkt Gaustatoppen minst én gang i livet"],
      url: 'https://www.friflyt.no/fjelltur/fjellturer/telemark/turguide-til-gaustatoppen-oestlandets-kjempe' },
    { medie: 'Fri Flyt', logo: 'friflyt', type: 'Guide', dato: '2024-12', sprog: 'no', lande: ['NO'], saeson: 'vinter', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Stor guide til toppturene på Gaustatoppen',
      resume: 'Guide til skitopture på Gaustatoppen med syv nedkørsler og udfordringer for både nye og erfarne skiløbere.',
      citat: ["Gaustatoppen har utfordringer for skikjørere på alle nivåer"],
      url: 'https://www.friflyt.no/topptur/gaustatoppen/stor-guide-til-toppturene-pa-gaustatoppen' },
    { medie: 'Aftenposten', logo: 'aftenposten', type: 'Turtip', dato: '2020-06', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 3, fremhaevet: true, betalingsmur: true,
      titel: 'Turtips: Bakveien opp Gaustatoppen',
      resume: 'Forslag til en rute over selve toppunktet uden om turiststrømmen, på et af Norges mest karakteristiske fjelde.',
      citat: ["Gaustatoppen er en av de mektigste og mest karakteristiske fjelltoppene i Norge"],
      url: 'https://www.aftenposten.no/amagasinet/i/napRaQ/turtips-bakveien-opp-gaustatoppen' },
    { medie: 'ABC Nyheter', logo: 'abcnyheter', type: 'Reportage', dato: '2026-04', sprog: 'no', lande: ['NO'], saeson: 'vinter', rang: 4, fremhaevet: true,
      titel: 'Gausta: Dette koster én feriedag på skisenter',
      resume: 'Journalisten tester en skidag i påsken og gennemgår priserne. Gausta er ikke billigst, men klarer sig godt målt pr. pist, og der var korte køer.',
      citat: ["…kommer Gausta skisenter godt ut sammenlignet med mange konkurrenter"],
      url: 'https://www.abcnyheter.no/nyheter/gausta-dette-koster-en-feriedag-pa-skisenter/1493091' },
    { medie: 'DNT', logo: 'dnt', type: 'Guide', dato: '2020-11', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 4, fremhaevet: true,
      titel: 'Gaustatoppen - Østlandets mest tilgjengelige fjelltopp',
      resume: 'Turistforeningen anbefaler turen fra Stavsro, som de fleste klarer på 2 til 3 timer, med turisthytte på toppen.',
      citat: ["Sentralt plassert på Østlandet ligger Norges Kilimanjaro"],
      url: 'https://www.dnt.no/turtips/anbefalte-turer/gaustatoppen-ostlandets-mest-tilgjengelige-fjelltopp/' },
    { medie: 'NRK', logo: 'nrk', type: 'Reportage', dato: '2013-03', sprog: 'no', lande: ['NO'], saeson: 'helaar', rang: 5,
      titel: 'Bli med inn i det hemmelege fjellet',
      resume: 'Reportage fra banen og det tidligere NATO-anlæg inde i fjeldet, om den kolde krig og om åbningen for publikum.',
      citat: ["Ingen andre stader på fastlandet i Noreg kan du sjå så mykje av landet"],
      url: 'https://www.nrk.no/vestfoldogtelemark/bli-med-inn-i-det-hemmelege-fjellet-1.10962577' },
    { medie: 'Vi Menn', logo: 'vimenn', type: 'Artikel', dato: '2020-04', sprog: 'no', lande: ['NO'], saeson: 'sommer', rang: 5,
      titel: 'Slik ser det ut om du kommer deg opp på Gaustatoppen',
      resume: 'Billedserie og kort turbeskrivelse af turen op, som passer til både børn og voksne.',
      citat: ["…blir ofte omtalt som Norges vakreste fjell"],
      url: 'https://www.klikk.no/side3/friluftsliv/gaustadtoppen-6904477' },
    // DK
    { medie: 'Skisport.dk', logo: 'skisport', type: 'Artikel', dato: '', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 1, fremhaevet: true,
      titel: 'Gausta – snesikker perle i det fantastiske telemark',
      resume: 'Danmarks største skiportal kalder Gausta snesikkert og børnevenligt, med kort rejse fra Larvik og Langesund, aftenskiløb og langrend.',
      citat: ["…Gausta en af Norges mest snesikre vinterdestinationer"],
      url: 'https://www.skisport.dk/artikler/gaustablikk-snesikker-perle-i-det-fantastiske-telemark/' },
    { medie: 'Marina Aagaard', logo: '', type: 'Blog', dato: '2024-02', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 2, fremhaevet: true,
      titel: 'Skiferie med powder sne: Gausta og Gaustablikk, Norge',
      resume: 'Personlig beretning om en skiferie med transport fra Danmark, pister, skovløjper og banen op på toppen. Anbefales til familier.',
      citat: ["En formidabel vid udsigt over landskabet og Gaustatoppen."],
      url: 'https://marinaaagaardblog.com/2024/02/24/skiferie-powder-gausta-gaustablikk-norge/' },
    { medie: 'Skisport.dk', logo: 'skisport', type: 'Nyhed', dato: '', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 2, fremhaevet: true,
      titel: 'Gausta ”Nyt” spændende skiområde i Norge',
      resume: 'Nyhed om sammenlægningen af skiområderne og den store udbygning med bredere pister, nye lifte, mere kunstsne, børneområde og funpark.',
      citat: ["…måske i nær fremtid bliver Norges 5. største sammenhængende skiområde"],
      url: 'https://www.skisport.dk/nyheder/gausta-nyt-spaendende-skiomraade-i-norge/' },
    { medie: 'FDM Travel', logo: 'fdm', type: 'Rejsetip', dato: '2022-06', sprog: 'da', lande: ['DK'], saeson: 'sommer', rang: 3, fremhaevet: true,
      titel: 'Gaustatoppen i Telemark',
      resume: 'Rejsetip om Telemarks højeste fjeld: udsigten, banen gennem fjeldet, vandreruten fra Stavsro og turisthytten på toppen.',
      citat: ["…som af mange betragtes som Norges smukkeste fjeld"],
      url: 'https://www.fdm-travel.dk/norge/gaustatoppen-telemark-rejsetip' },
    { medie: 'Skisport.dk', logo: 'skisport', type: 'Artikel', dato: '', sprog: 'da', lande: ['DK'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: 'Gausta - Fantastisk til familien',
      resume: 'Gausta som et roligere og nærmere alternativ til de store norske skisteder, med mange lette pister, langrend og kort vej fra Larvik.',
      citat: ["Et fantastisk område til familien eller den let øvede skiløber."],
      url: 'https://www.skisport.dk/artikler/gausta-fantastisk-til-familien/' },
    { medie: 'En familie der rejser', logo: '', type: 'Blog', dato: '', sprog: 'da', lande: ['DK'], saeson: 'sommer', rang: 4,
      titel: 'Gaustatoppen – måske den vildeste udsigt i Norge!',
      resume: 'Familieblog om turen med banen inde i fjeldet, udsigten fra toppen og et besøg på Vemork.',
      citat: ["Det er ubeskriveligt flot!"],
      url: 'https://www.enfamiliederrejser.dk/gaustatoppen/' },
    // SE
    { medie: 'Åka Skidor', logo: 'akaskidor', type: 'Artikel', dato: '2020-07', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 1, fremhaevet: true,
      titel: 'Åka Skidors bergskunskap del 4: åkdisciplin i komplex terräng',
      resume: 'Skimagasinet bruger Gaustatoppen som eksempel på stejlt terræn og anbefaler et besøg for faldhøjden og de stejle render.',
      citat: ["För er som inte varit på Gaustatoppen i Norge så rekommenderas ett besök."],
      url: 'https://www.akaskidor.se/artiklar/artiklar/20200706/aka-skidors-bergskunskap-del-4-akdisciplin-i-komplex-terrang/' },
    { medie: 'Snösäker', logo: 'snosaker', type: 'Guide', dato: '', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 2, fremhaevet: true, betalingsmur: true,
      titel: 'Gausta – bra toppturer och offpist nära södra Sverige',
      resume: 'Toptursguide, der kalder Gausta det nærmeste sted med topture og off-piste af god kvalitet for skiløbere i Sydsverige.',
      citat: ["…Gausta det närmaste fjällområde som erbjuder toppturer och offpist av bra kvalitet"],
      url: 'https://xn--snsker-dua6l.se/gausta-bra-toppturer-och-offpist-nara-sodra-sverige/' },
    { medie: 'Freeride.se', logo: 'freeride-se', type: 'Anmeldelse', dato: '2020-02', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 2, fremhaevet: true, maerke: 'Konkurrencerejse',
      titel: 'Gausta: en helt löjligt bra blandning av pist, historia och offpist',
      resume: 'En svensk familie tester Gausta og roser de røde pister, hurtige lifte, få mennesker og off-piste fra toppen. Rejsen var en præmie i mediets konkurrence.',
      citat: ["Gaustatoppen är ett paradis för den seriöse skidåkaren."],
      url: 'https://www.freeride.se/gausta-en-helt-lojligt-bra-blandning-av-pist-historia-och-offpist/' },
    { medie: 'Happyride', logo: 'happyride', type: 'Reportage', dato: '2024-05', sprog: 'sv', lande: ['SE'], saeson: 'vinter', rang: 3, fremhaevet: true,
      titel: '50 mil på cykel med skidor – från Skåne till norska Gausta',
      resume: 'Tre venner cykler fra Lund til Gausta med ski og telt og går fire topture på og omkring Gaustatoppen.',
      citat: ["…Gausta, som är ett gömt skidparadis"],
      url: 'https://happyride.se/50-mil-pa-cykel-med-skidor-fran-skane-till-norska-gausta/' }
  ];

  var MARKETS = [['DK', 'Danmark'], ['SE', 'Sverige'], ['NO', 'Norge'], ['UK', 'UK'], ['XX', 'Øvrig']];
  var SPROG = { da: 'Dansk', en: 'Engelsk', no: 'Norsk', sv: 'Svensk' };
  var SAESON = { vinter: 'Vinter', sommer: 'Sommer' };
  var MDR = ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'];
  var KEY = 'gl-press-market';

  // Forvalgt marked følger sidens sprog, indtil den besøgende selv vælger (Brugeroplysning 5. oktober 2026).
  var LANG_MARKET = { da: 'DK', en: 'UK', nb: 'NO', no: 'NO', nn: 'NO', sv: 'SE' };
  var chosen = null, market = 'DK';
  try { chosen = localStorage.getItem(KEY); } catch (e) {}
  function defaultMarket() { return LANG_MARKET[pageLang()] || 'XX'; }
  var v4type = 'Alle', v4season = 'Alle';
  var carUpdate = null; // aktiv karrusels opdatering (én resize-lytter i alt)

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
    var f = i.logo && LOGOS[i.logo];
    if (f) return '<span class="pr-logo pr-logo-img ' + (DARK[i.logo] ? 'pr-logo-dark ' : '') + (cls || '') + '"><img src="assets/web/logos/' + f + '" alt="' + esc(i.medie) + '" loading="lazy" decoding="async"></span>';
    return '<span class="pr-logo ' + (cls || '') + '">' + esc(i.medie) + '</span>';
  }
  function pageLang() { return (document.documentElement.getAttribute('lang') || 'da').slice(0, 2); }
  // Mediets hjemland som lille ikon (flag for DK, NO, SE, UK, ellers globus). Brugeroplysning 6. oktober 2026.
  var FLAGS = {
    DK: ['Danmark', '<rect width="28" height="20" fill="#C8102E"/><rect x="8" width="4" height="20" fill="#fff"/><rect y="8" width="28" height="4" fill="#fff"/>'],
    NO: ['Norge', '<rect width="28" height="20" fill="#BA0C2F"/><rect x="7" width="6" height="20" fill="#fff"/><rect y="7" width="28" height="6" fill="#fff"/><rect x="8.5" width="3" height="20" fill="#00205B"/><rect y="8.5" width="28" height="3" fill="#00205B"/>'],
    SE: ['Sverige', '<rect width="28" height="20" fill="#006AA7"/><rect x="8" width="4" height="20" fill="#FECC02"/><rect y="8" width="28" height="4" fill="#FECC02"/>'],
    UK: ['Storbritannien', '<rect width="28" height="20" fill="#012169"/><path d="M0 0L28 20M28 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L28 20M28 0L0 20" stroke="#C8102E" stroke-width="1.6"/><rect x="11" width="6" height="20" fill="#fff"/><rect y="7" width="28" height="6" fill="#fff"/><rect x="12" width="4" height="20" fill="#C8102E"/><rect y="8" width="28" height="4" fill="#C8102E"/>']
  };
  function origin(i) {
    var c = ['DK', 'NO', 'SE', 'UK'].filter(function (k) { return i.lande.indexOf(k) > -1; })[0];
    if (c) return '<span class="pr-flag" role="img" title="' + FLAGS[c][0] + '" aria-label="Medie fra ' + FLAGS[c][0] + '"><svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true" focusable="false">' + FLAGS[c][1] + '</svg></span>';
    return '<span class="pr-flag pr-flag-globe" role="img" title="Øvrig" aria-label="Medie fra øvrige lande"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5"/><ellipse cx="12" cy="12" rx="4" ry="9.5"/><path d="M2.5 12h19M4 7h16M4 17h16"/></svg></span>';
  }
  // Kun åbenhedsmærker bevares (inviteret tur, evt. særligt mærke). Sprog og betalingsmur er fjernet.
  function badges(i) {
    var b = [];
    if (i.pressetur) b.push('<span class="pr-b pr-b-warn" title="Artiklen oplyser, at journalisten var inviteret">Inviteret tur</span>');
    if (i.maerke) b.push('<span class="pr-b pr-b-warn">' + esc(i.maerke) + '</span>');
    return b.length ? '<div class="pr-badges">' + b.join('') + '</div>' : '';
  }
  function readLink(i) {
    return '<a class="pr-read" href="' + esc(i.url) + '" target="_blank" rel="noopener">Læs hos ' + esc(i.medie) + ' <span aria-hidden="true">↗</span></a>';
  }
  function langAttr(i) { return i.sprog !== pageLang() ? ' lang="' + (i.sprog === 'no' ? 'nb' : i.sprog) + '"' : ''; }
  // Citat(er) fra artiklen. Mangler de, vises vores resumé i stedet.
  function quotes(i, cls) {
    if (i.citat && i.citat.length) {
      return i.citat.map(function (q) { return '<blockquote class="pr-q ' + (cls || '') + '"' + langAttr(i) + '><p>“' + esc(q) + '”</p></blockquote>'; }).join('');
    }
    return '<p class="pr-sum">' + esc(i.resume) + '</p>';
  }
  function fallbackNote(r) {
    return r.fallback ? '<p class="pr-fb">Der er endnu ingen omtale for dit land. Vi viser internationale artikler.</p>' : '';
  }

  /* ---------- Version 1: kort med logo som karrusel (forside) ---------- */
  function v1(r, el) {
    var all = (el.closest('[data-press-root]') || el).getAttribute('data-all-href') || '#e-press-v4';
    var items = r.items.filter(function (i) { return i.fremhaevet; });
    return fallbackNote(r) +
      '<section class="pr-car" aria-roledescription="karrusel" aria-label="Omtale af Gausta i medier">' +
      '<div class="pr-car-bar"><span class="muted pr-car-count" aria-live="polite"></span>' +
      '<div class="pr-car-btns"><button type="button" class="pr-car-btn" data-car="prev" aria-label="Forrige omtaler">←</button>' +
      '<button type="button" class="pr-car-btn" data-car="next" aria-label="Næste omtaler">→</button></div></div>' +
      '<ul class="pr-track" tabindex="0">' + items.map(function (i, k) {
        return '<li class="pr-card" aria-roledescription="omtale" aria-label="' + (k + 1) + ' af ' + items.length + '">' + origin(i) + logo(i) +
          '<div class="pr-meta">' + esc(i.type) + ' · ' + fmtDate(i.dato) + '</div>' +
          '<h5' + langAttr(i) + '>' + esc(i.titel) + '</h5>' +
          quotes(i) +
          '<div class="pr-foot">' + badges(i) + readLink(i) + '</div></li>';
      }).join('') + '</ul><div class="pr-dots" role="group" aria-label="Vælg side"></div>' +
      '<a class="pr-all" href="' + esc(all) + '">Se alle omtaler</a></section>';
  }

  function wireCarousel(root) {
    var track = root.querySelector('.pr-track'); if (!track || !track.children.length) return;
    var dots = root.querySelector('.pr-dots'), count = root.querySelector('.pr-car-count');
    var prev = root.querySelector('[data-car="prev"]'), next = root.querySelector('[data-car="next"]');
    var cards = track.children;
    function perView() { return cards.length ? Math.max(1, Math.round(track.clientWidth / cards[0].getBoundingClientRect().width)) : 1; }
    function pages() { return Math.max(1, Math.ceil(cards.length / perView())); }
    function atEnd() { return track.scrollLeft >= track.scrollWidth - track.clientWidth - 2; }
    function firstIdx() {
      var base = cards[0].offsetLeft;
      for (var k = 0; k < cards.length; k++) if (cards[k].offsetLeft - base >= track.scrollLeft - 4) return k;
      return cards.length - 1;
    }
    function page() { return atEnd() ? pages() - 1 : Math.floor(firstIdx() / perView()); }
    function go(p) { var n = Math.max(0, Math.min(pages() - 1, p)); var c = cards[n * perView()]; if (c) track.scrollTo({ left: c.offsetLeft - cards[0].offsetLeft, behavior: calm() ? 'auto' : 'smooth' }); if (calm()) update(); }
    function calm() { return document.hidden || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches); }
    function update() {
      var n = pages(), p = page(), pv = perView();
      if (dots.children.length !== n) {
        dots.innerHTML = n > 1 ? Array.apply(null, Array(n)).map(function (_, k) { return '<button type="button" aria-label="Side ' + (k + 1) + '"></button>'; }).join('') : '';
      }
      Array.prototype.forEach.call(dots.children, function (d, k) { d.setAttribute('aria-current', k === p ? 'true' : 'false'); });
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = atEnd();
      var from = firstIdx() + 1, to = Math.min(cards.length, from + pv - 1);
      count.textContent = cards.length <= pv ? cards.length + ' omtaler' : from === to ? from + ' af ' + cards.length : 'Viser ' + from + ' til ' + to + ' af ' + cards.length;
    }
    prev.addEventListener('click', function () { go(page() - 1); });
    next.addEventListener('click', function () { go(page() + 1); });
    dots.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) go(Array.prototype.indexOf.call(dots.children, b)); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(page() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(page() - 1); }
    });
    var t; track.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(update, 60); }, { passive: true });
    carUpdate = update;
    update();
  }

  /* ---------- Version 4: liste med filter (egen side) ---------- */
  function v4(r) {
    var types = ['Alle'].concat(r.items.map(function (i) { return i.type; }).filter(function (t, k, a) { return a.indexOf(t) === k; }));
    var seasons = ['Alle', 'vinter', 'sommer'];
    if (types.indexOf(v4type) < 0) v4type = 'Alle';
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
        return '<li>' + origin(i) + logo(i, 'pr-logo-sm') + '<div class="grow"><div class="pr-meta">' + esc(i.medie) + ' · ' + esc(i.type) + ' · ' + fmtDate(i.dato) + '</div>' +
          '<b' + langAttr(i) + '>' + esc(i.titel) + '</b>' + quotes(i, 'pr-q-sm') + badges(i) + '</div>' + readLink(i) + '</li>';
      }).join('') : '<li class="muted">Ingen omtaler med det filter.</li>') + '</ul>';
  }

  var RENDER = { v1: v1, v4: v4 };

  function render(only) {
    market = chosen || defaultMarket();
    var r = forMarket(market);
    document.querySelectorAll('[data-press]').forEach(function (el) {
      var k = el.getAttribute('data-press');
      if (only && k !== only) return;
      el.innerHTML = r.items.length ? RENDER[k](r, el) : '';
      var host = el.closest('[data-press-hide-empty]'); if (host) host.hidden = !r.items.length;
      if (k === 'v1') wireCarousel(el);
    });
    document.querySelectorAll('[data-press-market] button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-m') === market)); });
    var c = document.querySelector('[data-press-count]');
    if (c) {
      c.textContent = r.fallback ? 'Ingen omtale for det valgte land. Fallback: ' + r.items.length + ' internationale.'
        : r.items.length + ' omtaler er markeret til ' + MARKETS.filter(function (m) { return m[0] === market; })[0][1] + '.';
    }
  }

  function init() {
    var roots = document.querySelectorAll('[data-press-root]');
    if (!roots.length) return;
    document.querySelectorAll('[data-press-market]').forEach(function (g) {
      g.innerHTML = MARKETS.map(function (m) { return '<button type="button" class="filter" data-m="' + m[0] + '">' + m[1] + '</button>'; }).join('');
    });
    function onClick(e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.hasAttribute('data-m')) { chosen = t.getAttribute('data-m'); v4type = 'Alle'; try { localStorage.setItem(KEY, chosen); } catch (x) {} render(); }
      else if (t.hasAttribute('data-pr-type')) { v4type = t.getAttribute('data-pr-type'); render('v4'); }
      else if (t.hasAttribute('data-pr-season')) { v4season = t.getAttribute('data-pr-season'); render('v4'); }
    }
    roots.forEach(function (root) { root.addEventListener('click', onClick); });
    // Sprogskift (app.js sætter lang på <html>) opdaterer sprogmærkerne.
    new MutationObserver(function () { render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    window.addEventListener('resize', function () { if (carUpdate) carUpdate(); });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
