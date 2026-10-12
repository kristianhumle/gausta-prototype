/* "Forholdene lige nu med webcam" (A5), godkendt 12. oktober 2026 (G71): fire fliser pr. årstid (G39) i venstre halvdel (2 x 2)
   og Gausta LIVE-feedet (Norway Live på YouTube, uden lyd, YouTubes knapper skjult) i højre halvdel. Ingen fodlinje.
   Bruges på forsiden, Området og Ski-in / ski-out via [data-nu]. Fliserne vises efter den valgte årstid (html[data-season]).
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
  var YT_ID = 'NGGIyXwoSiU';
  var SRC = 'https://www.youtube-nocookie.com/embed/' + YT_ID + '?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1';

  /* Bygger elementet i el og kobler lydknappen. Bruges af [data-nu] og af forhåndsvisningen i sideelementer (nu-live.js). */
  function mount(el) {
    el.innerHTML = '<div class="nl-grid reveal">' +
      '<div class="live live-season nl-tiles"><div data-seasons="winter spring summer autumn" data-weather="tile"></div>' +
      T.map(function (t) { return '<div data-seasons="' + t[0] + '"><small>' + t[1] + '</small><b class="num">' + t[2] + '</b><small>' + t[3] + '</small><small class="src">' + t[4] + '</small></div>'; }).join('') + '</div>' +
      '<div class="nl-cam"><div class="wc-frame"><div class="wc-img"><iframe title="Gausta LIVE (Norway Live på YouTube)" src="' + SRC + '" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" tabindex="-1" style="position:absolute;left:-6%;top:-6%;width:112%;height:112%;border:0;pointer-events:none"></iframe>' +
      '<div class="wc-cover" aria-hidden="true"></div><button type="button" class="wc-sound" aria-pressed="false">Slå lyd til</button></div><span class="wc-badge wc-live">Live</span></div></div></div>';
    var fr = el.querySelector('iframe'), btn = el.querySelector('.wc-sound'), cover = el.querySelector('.wc-cover');
    function cmd(f) { try { fr.contentWindow.postMessage(JSON.stringify({ event: 'command', func: f, args: '' }), '*'); } catch (e) {} }
    btn.addEventListener('click', function () {
      var on = btn.getAttribute('aria-pressed') !== 'true';
      cmd(on ? 'unMute' : 'mute'); if (on) cmd('setVolume'); cmd('playVideo');
      btn.setAttribute('aria-pressed', on ? 'true' : 'false'); btn.textContent = on ? 'Slå lyd fra' : 'Slå lyd til';
    });
    fr.addEventListener('load', function () { setTimeout(function () { cmd('playVideo'); }, 800); });
    cover.addEventListener('click', function () { cmd('playVideo'); });
  }
  window.GL_NU = { tiles: T, mount: mount };
  [].forEach.call(document.querySelectorAll('[data-nu]'), mount);
})();
