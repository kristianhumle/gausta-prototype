/* Del-knap (sideelementer.html, e-share): Web Share på telefon, ellers "Kopiér link" og "Send på e-mail".
   Ingen scripts fra Facebook, X eller andre. Knappen sender intet til tredjepart. */
(function () {
  'use strict';
  var root = document.getElementById('e-share');
  if (!root) return;

  var URL_SHARED = 'https://gaustahome.com/';
  var TITLE = 'Gausta Lodge 52';
  var TEXT = 'Se lejligheden ved Gausta i Telemark.';
  var status = root.querySelector('[data-share-status]');
  var canShare = typeof navigator.share === 'function';
  var mode = 'phone'; /* demoen starter i telefonvisning og kan skiftes */

  var diag = root.querySelector('[data-share-diag]');
  if (diag) diag.textContent = canShare ? 'Denne browser understøtter Web Share (telefonens delingsmenu).' : 'Denne browser har ikke Web Share. Knappen falder tilbage til "Kopiér link".';

  function say(msg) {
    if (!status) return;
    status.textContent = msg;
    status.classList.add('on');
    clearTimeout(say._t);
    say._t = setTimeout(function () { status.classList.remove('on'); }, 3200);
  }

  function copy(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(url).then(function () { say('Link kopieret'); }, function () { legacyCopy(url); });
    }
    legacyCopy(url);
    return Promise.resolve();
  }
  function legacyCopy(url) {
    var ta = document.createElement('textarea');
    ta.value = url; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    say(ok ? 'Link kopieret' : 'Kunne ikke kopiere. Marker og kopiér adressen manuelt.');
  }

  function doShare(url) {
    if (mode === 'phone') {
      if (canShare) {
        return navigator.share({ title: TITLE, text: TEXT, url: url }).catch(function (e) {
          if (e && e.name === 'AbortError') return; /* brugeren lukkede menuen */
          return copy(url);
        });
      }
      say('På en telefon åbner delingsmenuen her. Denne browser har ingen, så prototypen viser kun beskeden.');
      return Promise.resolve();
    }
    return copy(url);
  }

  /* Alle "Del"-knapper */
  Array.prototype.forEach.call(root.querySelectorAll('[data-share]'), function (b) {
    b.addEventListener('click', function () { doShare(b.getAttribute('data-url') || URL_SHARED); });
  });
  Array.prototype.forEach.call(root.querySelectorAll('[data-copy]'), function (b) {
    b.addEventListener('click', function () { copy(b.getAttribute('data-url') || URL_SHARED); });
  });
  Array.prototype.forEach.call(root.querySelectorAll('[data-mail]'), function (a) {
    a.href = 'mailto:?subject=' + encodeURIComponent(TITLE) + '&body=' + encodeURIComponent(TEXT + ' ' + (a.getAttribute('data-url') || URL_SHARED));
  });

  /* Skift visning mellem telefon og computer (til gennemsyn på computer) */
  var seg = root.querySelectorAll('[data-share-mode]');
  function setMode(m) {
    mode = m;
    Array.prototype.forEach.call(seg, function (s) { s.setAttribute('aria-pressed', s.getAttribute('data-share-mode') === m ? 'true' : 'false'); });
    root.setAttribute('data-mode', m);
  }
  Array.prototype.forEach.call(seg, function (s) { s.addEventListener('click', function () { setMode(s.getAttribute('data-share-mode')); }); });
  setMode(mode);
})();
