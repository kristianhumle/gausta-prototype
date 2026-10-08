/* Social feed (forslag, A5/A6-nær): nyheder fra udvalgte sociale kanaler. Vises kun i elementkataloget (#e-social).
   Forslag 8. oktober 2026 (Brugeroplysning): se teknisk/datakilder/14-social-feed.md.
   Kortene er kuraterede link-kort: afsender, platform, dato, kort tekst i egne ord og link ud. Der indlæses INTET fra
   Facebook, Instagram, TikTok eller YouTube i prototypen (ingen tredjepartskald), og ingen billeder kopieres.
   To kort er rigtige YouTube-titler fra Gaustas åbne RSS-feed (hentet 8. oktober 2026) som eksempel på det automatiske spor.
   De øvrige kort er pladsholdere med opfundet tekst og er mærket "Eksempel". */
(function () {
  'use strict';
  var root = document.querySelector('[data-social]');
  if (!root) return;
  var SRC = { gausta: 'Gausta', rjukan: 'Visit Rjukan', telemark: 'Visit Telemark' };
  var PLAT = { youtube: 'YouTube', facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok' };
  var LINK = { gausta: { facebook: 'https://www.facebook.com/gaustacom/', instagram: 'https://www.instagram.com/gaustacom/', youtube: 'https://www.youtube.com/channel/UCYn2bZgIdy2_mgfc1seOjPQ' }, rjukan: { facebook: 'https://www.facebook.com/VisitRjukan/', instagram: 'https://www.instagram.com/visitrjukan/', tiktok: 'https://www.tiktok.com/@visitrjukan' }, telemark: { facebook: 'https://www.facebook.com/visittelemark', instagram: 'https://www.instagram.com/visittelemark/' } };
  var POSTS = [
    { s: 'rjukan', p: 'instagram', d: '2026-10-06', t: 'Eksempel: stemningsbillede fra Rjukan', x: 'Pladsholder. Her står en kort tekst i egne ord om opslaget, fx hvad det viser og hvorfor det er relevant for en gæst.', kind: 'manual' },
    { s: 'gausta', p: 'facebook', d: '2026-10-03', t: 'Eksempel: nyt om sæsonstart', x: 'Pladsholder. Kuraterede link-kort kan fx pege på et opslag om sæsonstart, lifter eller events.', kind: 'manual' },
    { s: 'telemark', p: 'facebook', d: '2026-09-29', t: 'Eksempel: efterårsferie i Telemark', x: 'Pladsholder. Opslag fra regionen, som ejeren har valgt og skrevet en kort tekst til.', kind: 'manual' },
    { s: 'rjukan', p: 'tiktok', d: '2026-09-22', t: 'Eksempel: kort video fra byen', x: 'Pladsholder. Video indlejres først efter klik, så TikTok ikke kontaktes automatisk.', kind: 'manual' },
    { s: 'gausta', p: 'youtube', d: '2026-06-01', t: 'NORSMAN 2026 ATHLETES | Warm up!', x: 'Titel hentet automatisk fra Gaustas YouTube-kanal (åben RSS-feed, 8. oktober 2026). Ejeren godkender, før et kort vises.', kind: 'auto', u: 'https://www.youtube.com/channel/UCYn2bZgIdy2_mgfc1seOjPQ' },
    { s: 'gausta', p: 'youtube', d: '2026-04-15', t: 'POWDER | In March at Gausta alpinedestination Norway!', x: 'Titel hentet automatisk fra Gaustas YouTube-kanal (åben RSS-feed, 8. oktober 2026). Ejeren godkender, før et kort vises.', kind: 'auto', u: 'https://www.youtube.com/channel/UCYn2bZgIdy2_mgfc1seOjPQ' }
  ];
  var fD = new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Oslo' });
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); };
  var st = { s: '', p: '' };
  function sel(id, label, opts) { return '<label class="area-sel"><span class="faint">' + label + '</span><select class="field compact" data-soc="' + id + '" aria-label="Filtrér på ' + label.toLowerCase() + '"><option value="">Alle</option>' + opts.map(function (o) { return '<option value="' + o[0] + '">' + esc(o[1]) + '</option>'; }).join('') + '</select></label>'; }
  root.innerHTML = '<div class="area-filters">' + sel('s', 'Afsender', Object.keys(SRC).map(function (k) { return [k, SRC[k]]; })) + sel('p', 'Platform', Object.keys(PLAT).map(function (k) { return [k, PLAT[k]]; })) + '</div><div class="soc-grid"></div><p class="faint soc-note">Eksempler: fire kort er pladsholdere, to er rigtige YouTube-titler. Intet er hentet fra de sociale platforme, og ingen billeder er kopieret.</p>';
  var grid = root.querySelector('.soc-grid');
  function draw() {
    var list = POSTS.filter(function (x) { return (!st.s || x.s === st.s) && (!st.p || x.p === st.p); }).sort(function (a, b) { return a.d < b.d ? 1 : -1; });
    grid.innerHTML = list.length ? list.map(function (x) {
      var url = x.u || (LINK[x.s] && LINK[x.s][x.p]) || '#';
      return '<article class="soc-card"><div class="soc-top"><span class="pill-tag">' + esc(PLAT[x.p]) + '</span><span class="soc-src">' + esc(SRC[x.s]) + '</span></div>' +
        '<div class="soc-date faint">' + esc(fD.format(new Date(x.d + 'T12:00:00Z'))) + (x.kind === 'auto' ? ' · automatisk hentet' : ' · eksempel') + '</div>' +
        '<h4 class="soc-t">' + esc(x.t) + '</h4><p class="muted soc-x">' + esc(x.x) + '</p>' +
        '<a href="' + esc(url) + '" target="_blank" rel="noopener" class="soc-a">Åbn hos ' + esc(SRC[x.s]) + ' på ' + esc(PLAT[x.p]) + ' <span aria-hidden="true">↗</span></a></article>';
    }).join('') : '<p class="muted">Ingen kort matcher filteret.</p>';
  }
  root.addEventListener('change', function (e) { var s = e.target.closest('select[data-soc]'); if (!s) return; st[s.getAttribute('data-soc')] = s.value; draw(); });
  draw();
})();
