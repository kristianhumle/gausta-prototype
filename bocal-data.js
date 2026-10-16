/* Back-office kalender (C3 markedskontekst): sæsoner, højsæsonuger og skoleferier.
   Helligdage beregnes i bocal.js. Datoer er inklusive (første og sidste dag/nat).
   Kilder og mærkning: teknisk/datakilder/16-kalender-saesoner-og-ferier.md (16. oktober 2026). */
window.BOCAL = {
  range: ['2026-10-01', '2027-12-31'],

  // Gausta utleie, sæsonkalender (Brugeroplysning, ejerens skærmbillede 16. oktober 2026).
  // B102 er en lejlighed: sommer 1. juli til 9. oktober 2027 er lavsæson for "Cabins / apartment".
  // Kildekonflikt i kilden: "Low 03. januar - 06. februar" og "Ordinary 06. - 13. februar" deler 6. februar. Her tæller 6. februar som Ordinary.
  seasons: [
    { s: 'ord', from: '2026-12-01', to: '2026-12-27' },
    { s: 'high', from: '2026-12-28', to: '2027-01-02' },
    { s: 'low', from: '2027-01-03', to: '2027-02-05' },
    { s: 'ord', from: '2027-02-06', to: '2027-02-13' },
    { s: 'high', from: '2027-02-14', to: '2027-02-27' },
    { s: 'ord', from: '2027-02-28', to: '2027-03-13' },
    { s: 'low', from: '2027-03-14', to: '2027-03-23' },
    { s: 'high', from: '2027-03-24', to: '2027-03-28' },
    { s: 'ord', from: '2027-03-29', to: '2027-04-03' },
    { s: 'low', from: '2027-04-04', to: '2027-04-11' },
    { s: 'low', from: '2027-04-12', to: '2027-06-30' },
    { s: 'low', from: '2027-07-01', to: '2027-10-09', note: 'Lavsæson for lejligheder. Hotel og Sportell har Ordinary i samme periode' },
    { s: 'low', from: '2027-10-10', to: '2027-12-13' },
    { s: 'ord', from: '2027-12-14', to: '2027-12-20' },
    { s: 'high', from: '2027-12-21', to: '2027-12-31' }
  ],

  // De 6 højsæsonuger fra Gausta Hytteleie: ugerne med størst indtjening (Brugeroplysning, 16. oktober 2026). from = ankomst, to = afrejse.
  highSrc: 'Gausta Hytteleie',
  highWeeks: [
    { name: 'Jul', from: '2026-12-20', to: '2026-12-27' },
    { name: 'Nytår', from: '2026-12-27', to: '2027-01-03' },
    { name: 'Uge 7', from: '2027-02-14', to: '2027-02-21' },
    { name: 'Uge 8', from: '2027-02-21', to: '2027-02-28' },
    { name: 'Påske del 1', from: '2027-03-21', to: '2027-03-25' },
    { name: 'Påske del 2', from: '2027-03-25', to: '2027-03-29' }
  ],

  // Skoleferier. lab: Fakta | Kildepåstand | Inference (regel, ikke bekræftet).
  school: [
    // Danmark: calendar.center (Kildepåstand, henviser til kommunernes vejledende ferieplaner), læst 16. oktober 2026
    { c: 'DK', name: 'Efterårsferie', region: 'Hele landet', from: '2026-10-10', to: '2026-10-18', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Juleferie', region: 'Hele landet', from: '2026-12-19', to: '2027-01-04', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Vinterferie uge 7', region: 'Bl.a. København, Aarhus, Vejle, Herning, Sønderborg', from: '2027-02-13', to: '2027-02-21', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Vinterferie uge 8', region: 'Bl.a. Aalborg og Odense', from: '2027-02-20', to: '2027-02-28', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Påskeferie', region: 'Hele landet', from: '2027-03-20', to: '2027-03-29', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Kr. himmelfart (fridage)', region: 'Hele landet', from: '2027-05-06', to: '2027-05-09', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Sommerferie', region: 'Hele landet', from: '2027-06-26', to: '2027-08-08', lab: 'Kildepåstand', src: 'calendar.center' },
    { c: 'DK', name: 'Efterårsferie uge 42', region: 'Hele landet', from: '2027-10-16', to: '2027-10-24', lab: 'Inference', src: 'Fast mønster (uge 42), ikke bekræftet for 2027' },
    // Norge: Oslo kommune (Fakta, oslo.kommune.no læst 16. oktober 2026)
    { c: 'NO', name: 'Høstferie uke 40', region: 'Oslo', from: '2026-09-26', to: '2026-10-04', lab: 'Fakta', src: 'oslo.kommune.no' },
    { c: 'NO', name: 'Høstferie uke 41', region: 'Bl.a. Vestland og Trøndelag', from: '2026-10-03', to: '2026-10-11', lab: 'Kildepåstand', src: 'Fylkeskommunale skoleruter (forslag)' },
    { c: 'NO', name: 'Juleferie', region: 'Oslo', from: '2026-12-19', to: '2027-01-03', lab: 'Fakta', src: 'oslo.kommune.no' },
    { c: 'NO', name: 'Vinterferie uke 8', region: 'Oslo, Vestland, Trøndelag m.fl.', from: '2027-02-20', to: '2027-02-28', lab: 'Fakta', src: 'oslo.kommune.no (Oslo). Øvrige: fylkenes skoleruter' },
    { c: 'NO', name: 'Påskeferie', region: 'Oslo', from: '2027-03-20', to: '2027-03-30', lab: 'Fakta', src: 'oslo.kommune.no' },
    { c: 'NO', name: 'Høstferie uke 40', region: 'Oslo', from: '2027-10-02', to: '2027-10-10', lab: 'Inference', src: 'Oslo: "høstferien er alltid uke 40". Datoer ikke offentliggjort' },
    // Sverige: kommunernes läsårstider
    { c: 'SE', name: 'Höstlov vecka 44', region: 'Göteborg, Malmö, Täby (Stockholms län) m.fl.', from: '2026-10-24', to: '2026-11-01', lab: 'Fakta', src: 'Göteborgs Stad og Täby kommun, nämndhandlingar' },
    { c: 'SE', name: 'Jullov', region: 'Malmö', from: '2026-12-23', to: '2027-01-10', lab: 'Kildepåstand', src: 'malmo.se (søgeresultat)' },
    { c: 'SE', name: 'Sportlov vecka 7', region: 'Göteborg', from: '2027-02-13', to: '2027-02-21', lab: 'Fakta', src: 'Göteborgs Stad, läsårstider 2026/27' },
    { c: 'SE', name: 'Sportlov vecka 8', region: 'Malmö og Uppsala (bl.a. Skåne og Mellansverige)', from: '2027-02-20', to: '2027-02-28', lab: 'Fakta', src: 'malmo.se (kommunale gymnasier) og uppsala.se, läsårstider 2026/27' },
    { c: 'SE', name: 'Sportlov vecka 9', region: 'Täby og Köping (bl.a. Stockholms län)', from: '2027-02-27', to: '2027-03-07', lab: 'Fakta', src: 'Täby kommun (forslag) og koping.se' },
    { c: 'SE', name: 'Sportlov vecka 10', region: 'Norrland (fx Västerbotten og Norrbotten)', from: '2027-03-06', to: '2027-03-14', lab: 'Inference', src: 'Fast mønster (nordligste län har vecka 10). Ingen kommune fundet med offentliggjort plan for 2027' },
    { c: 'SE', name: 'Påsklov', region: 'Göteborg og Täby', from: '2027-03-26', to: '2027-04-04', lab: 'Fakta', src: 'Göteborgs Stad og Täby kommun' },
    { c: 'SE', name: 'Höstlov vecka 44', region: 'De fleste kommuner', from: '2027-10-30', to: '2027-11-07', lab: 'Inference', src: 'Fast mønster (vecka 44), ikke bekræftet for 2027' }
  ]
};
