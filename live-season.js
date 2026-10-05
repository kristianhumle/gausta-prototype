/* Sæsonvælger til "Gausta nu" i sideelementer (e-live). Skifter kun denne forhåndsvisning, ikke hele siden. */
(function () {
  'use strict';
  var box = document.getElementById('e-live');
  if (!box) return;
  var seg = box.querySelector('[data-live-seg]');
  var range = box.querySelector('[data-live-range]');
  var more = box.querySelector('[data-live-more]');
  var NAMES = { winter: 'Vinter (nov til feb)', spring: 'Forår (mar til apr)', summer: 'Sommer (maj til aug)', autumn: 'Efterår (sep til okt)' };
  var MORE = {
    winter: 'Bag "Vejr, webcam og mere" i vinter: langrend, skredvarsel, dagslys, Gaustabanen, nattefrost.',
    spring: 'Bag "Vejr, webcam og mere" i forår: vejforhold, langrend, skredvarsel, dagslys, Gaustabanen.',
    summer: 'Bag "Vejr, webcam og mere" i sommer: dagslys, UV-indeks.',
    autumn: 'Bag "Vejr, webcam og mere" i efterår: vejforhold og vinterdæk, nedbør og torden, dagslys, Gaustabanen.'
  };
  function set(s) {
    box.setAttribute('data-live', s);
    Array.prototype.forEach.call(seg.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === s ? 'true' : 'false'); });
    if (range) range.textContent = NAMES[s];
    if (more) more.textContent = MORE[s];
  }
  Array.prototype.forEach.call(seg.querySelectorAll('button'), function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-v')); }); });
  var start = document.documentElement.getAttribute('data-season') || 'autumn';
  set(start);
})();
