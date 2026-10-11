/* "Gausta nu" (A5), godkendt 6. oktober 2026 (G39): fire fliser pr. årstid, som i elementkataloget (#e-live).
   Bruges på forsiden, Området og Ski-in / ski-out. Fliserne vises efter den valgte årstid (html[data-season]).
   Vejret (første flise) er et rigtigt snapshot fra MET via weather.js. De øvrige værdier er EKSEMPLER i prototypen
   (ingen kilder er koblet endnu). Hver flise viser sin kilde. Data slår kalenderen: se reglerne i #e-live. */
(function () {
  'use strict';
  var T = [
    ['winter', 'Snedybde på pisterne', '42 cm', 'målt på pisterne', 'Kilde: Gausta'],
    ['winter', 'Åbne lifte og pister', '9 af 13', '31 af 44 pister åbne', 'Kilde: Gausta (via Fnugg)'],
    ['winter', 'Toppen af Gaustatoppen', '-14°', 'vind 12 m/s, 1883 m', 'Kilde: MET Norway (modelleret)'],
    ['spring', 'Snedybde på pisterne', '28 cm', 'forårssne', 'Kilde: Gausta'],
    ['spring', 'Åbne lifte og pister', '5 af 13', '12 af 44 pister åbne', 'Kilde: Gausta (via Fnugg)'],
    ['spring', 'Sol i dag', 'UV 2', 'solnedgang kl. 19.40', 'Kilde: MET Norway'],
    ['summer', 'Sol i dag', 'UV 5', 'solnedgang kl. 22.05', 'Kilde: MET Norway'],
    ['summer', 'Gaustabanen i dag', 'Åben', 'kl. 10 til 17', 'Kilde: Gaustabanen'],
    ['summer', 'Toppen af Gaustatoppen', '8°', 'vind 7 m/s, 1883 m', 'Kilde: MET Norway (modelleret)'],
    ['autumn', 'Sol i dag', 'UV 1,8', 'solnedgang kl. 18.43', 'Kilde: MET Norway'],
    ['autumn', 'Gaustabanen i dag', 'Åben', 'kl. 10 til 17', 'Kilde: Gaustabanen'],
    ['autumn', 'Toppen af Gaustatoppen', '-4°', 'vind 15 m/s, 1883 m', 'Kilde: MET Norway (modelleret)']
  ];
  [].forEach.call(document.querySelectorAll('[data-nu]'), function (el) {
    var link = el.hasAttribute('data-nu-nolink') ? '' : '<a href="omraadet.html#nu">Vejr, webcam og mere →</a>';
    el.innerHTML = '<div class="live live-season reveal"><div data-seasons="winter spring summer autumn" data-weather="tile"></div>' +
      T.map(function (t) { return '<div data-seasons="' + t[0] + '"><small>' + t[1] + '</small><b class="num">' + t[2] + '</b><small>' + t[3] + '</small><small class="src">' + t[4] + '</small></div>'; }).join('') + '</div>' +
      '<div class="live-foot"><span class="stamp">Opdateret kl. 10.30 · hver flise viser sin kilde</span>' + link + '</div>' +
      '<p style="margin:8px 0 0"><span class="proto-tag">Eksempelværdier i prototypen, undtagen vejret</span></p>';
  });
})();
