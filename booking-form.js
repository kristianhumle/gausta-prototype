/* Booking-formular (forespørgsel), elementet #e-booking i elementkataloget. Kun en demo: der sendes INTET.
   Simpel validering og en demobekræftelse. På det rigtige site sender en Server Action forespørgslen til to modtagere
   (se teknisk/forespoergselsformular.md). Adresserne står bevidst ikke i den offentlige prototype. */
(function () {
  'use strict';
  var f = document.querySelector('[data-booking-form]');
  if (!f) return;
  var msg = f.querySelector('[data-bf-msg]');
  var today = new Date().toISOString().slice(0, 10);
  var arr = f.querySelector('[name="arrival"]'), dep = f.querySelector('[name="departure"]');
  arr.min = today; dep.min = today;
  function say(t, ok) { msg.textContent = t; msg.className = 'bf-msg ' + (ok ? 'bf-ok' : 'bf-err'); msg.hidden = false; }
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (f.querySelector('[name="website"]').value) return;
    var email = f.querySelector('[name="email"]').value.trim();
    if (!arr.value || !dep.value) return say('Vælg både ankomst og afrejse.', false);
    if (dep.value <= arr.value) return say('Afrejse skal være efter ankomst.', false);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return say('Skriv en gyldig e-mailadresse, så vi kan svare.', false);
    say('Tak. (Prototype: forespørgslen er ikke sendt. På det rigtige site sendes den til ejeren og Tine, og du får svar på ' + email + '.)', true);
  });
})();
