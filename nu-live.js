/* "Forholdene lige nu" med webcam (godkendt 12. oktober 2026, sideelementer #e-nulive): fire fliser i venstre halvdel (2 x 2) og Gausta LIVE-feedet
   i højre halvdel. Fliserne er de samme som i det godkendte "Gausta nu" (nu.js, GL_NU_TILES). Feedet er det samme som i webcam-elementet
   (Norway Live på YouTube via youtube-nocookie.com, starter uden lyd, YouTubes knapper skjult). Kun denne forhåndsvisning har egen årstidsvælger. */
(function () {
  'use strict';
  var box = document.getElementById('e-nulive');
  var out = box && box.querySelector('[data-nulive]');
  if (!out) return;
  var NAMES = { winter: 'Vinter (nov til feb)', spring: 'Forår (mar til apr)', summer: 'Sommer (maj til aug)', autumn: 'Efterår (sep til okt)' };
  window.GL_NU.mount(out);

  var seg = box.querySelector('[data-nl-seg]'), range = box.querySelector('[data-nl-range]');
  function set(s) {
    box.setAttribute('data-live', s);
    [].forEach.call(seg.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === s ? 'true' : 'false'); });
    if (range) range.textContent = NAMES[s];
  }
  [].forEach.call(seg.querySelectorAll('button'), function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-v')); }); });
  set(document.documentElement.getAttribute('data-season') || 'autumn');
})();
