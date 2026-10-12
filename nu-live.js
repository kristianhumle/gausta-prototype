/* "Forholdene lige nu" med webcam (forslag, sideelementer #e-nulive): fire fliser i venstre halvdel (2 x 2) og Gausta LIVE-feedet
   i højre halvdel. Fliserne er de samme som i det godkendte "Gausta nu" (nu.js, GL_NU_TILES). Feedet er det samme som i webcam-elementet
   (Norway Live på YouTube via youtube-nocookie.com, starter uden lyd, YouTubes knapper skjult). Kun denne forhåndsvisning har egen årstidsvælger. */
(function () {
  'use strict';
  var box = document.getElementById('e-nulive');
  var out = box && box.querySelector('[data-nulive]');
  if (!out) return;
  var T = window.GL_NU_TILES || [];
  var YT_ID = 'NGGIyXwoSiU';
  var NAMES = { winter: 'Vinter (nov til feb)', spring: 'Forår (mar til apr)', summer: 'Sommer (maj til aug)', autumn: 'Efterår (sep til okt)' };

  out.innerHTML = '<div class="nl-grid">' +
    '<div class="live live-season nl-tiles"><div data-seasons="winter spring summer autumn" data-weather="tile"></div>' +
    T.map(function (t) { return '<div data-seasons="' + t[0] + '"><small>' + t[1] + '</small><b class="num">' + t[2] + '</b><small>' + t[3] + '</small><small class="src">' + t[4] + '</small></div>'; }).join('') + '</div>' +
    '<div class="nl-cam"><div class="wc-frame"><div class="wc-img" data-nl-feed></div><span class="wc-badge wc-live">Live</span></div></div>' +
    '</div>' +
    '<div class="live-foot"><span class="stamp">Opdateret kl. 10.30 · hver flise viser sin kilde · kamera: Gausta LIVE (Norway Live)</span><a href="omraadet.html#nu">Alle webcams og mere →</a></div>';

  var main = out.querySelector('[data-nl-feed]');
  var src = 'https://www.youtube-nocookie.com/embed/' + YT_ID + '?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1';
  main.innerHTML = '<iframe title="Gausta LIVE (Norway Live på YouTube)" src="' + src + '" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" tabindex="-1" style="position:absolute;left:-6%;top:-6%;width:112%;height:112%;border:0;pointer-events:none"></iframe>' +
    '<div class="wc-cover" aria-hidden="true"></div><button type="button" class="wc-sound" aria-pressed="false">Slå lyd til</button>';
  var fr = main.querySelector('iframe'), btn = main.querySelector('.wc-sound'), cover = main.querySelector('.wc-cover');
  function cmd(f) { try { fr.contentWindow.postMessage(JSON.stringify({ event: 'command', func: f, args: '' }), '*'); } catch (e) {} }
  btn.addEventListener('click', function () {
    var on = btn.getAttribute('aria-pressed') !== 'true';
    cmd(on ? 'unMute' : 'mute'); if (on) cmd('setVolume'); cmd('playVideo');
    btn.setAttribute('aria-pressed', on ? 'true' : 'false'); btn.textContent = on ? 'Slå lyd fra' : 'Slå lyd til';
  });
  fr.addEventListener('load', function () { setTimeout(function () { cmd('playVideo'); }, 800); });
  cover.addEventListener('click', function () { cmd('playVideo'); });

  var seg = box.querySelector('[data-nl-seg]'), range = box.querySelector('[data-nl-range]');
  function set(s) {
    box.setAttribute('data-live', s);
    [].forEach.call(seg.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === s ? 'true' : 'false'); });
    if (range) range.textContent = NAMES[s];
  }
  [].forEach.call(seg.querySelectorAll('button'), function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-v')); }); });
  set(document.documentElement.getAttribute('data-season') || 'autumn');
})();
