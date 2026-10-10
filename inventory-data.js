/* Inventar pr. rum (A9 overblik, B7 komplet liste). Ét datasæt (TK4), som lejligheden.html viser, og som gæsteområdet senere kan genbruge.
   Rum-id'erne følger plantegningen (plan.js). Status pr. punkt:
   ejer   = Brugeroplysning fra ejeren (fx PlayStation 4 og 42" fjernsyn i TV-stuen, vaskemaskine i badeværelset)
   saelger = står på sælgernes inventarliste (mail 30. september 2026), men inventaraftalen (bud NOK 50.000) er IKKE afsluttet
   verify = fra annoncens rumbeskrivelse eller antaget, skal verificeres på stedet
   Rummene er pladsholderdata fra vidensbasen, ikke en endelig liste. Placering af enkelte ting er et gæt, hvor kilden ikke nævner rum. */
window.GL_INVENTORY = {
  groups: ['Møbler', 'Teknik og apparater', 'Køkken og husholdning', 'Sovning', 'Andet'],
  rooms: [
    { id: 'entre', name: 'Entré og skirum', dim: '4 m²', blurb: 'Indgangen med garderobe og bænk til overtøj og sko, plads til ski og udstyr.', items: [
      { n: 'Hyttebænk', g: 0, s: 'saelger' }, { n: 'Hylde', g: 0, s: 'saelger' },
      { n: 'Garderobe og bænk til overtøj og sko', g: 0, s: 'verify' },
      { n: 'Skirum og tørring af udstyr', g: 4, s: 'verify' },
      { n: 'Dørsensor på hoveddøren', d: 'Registrerer kun, at døren åbnes. Ingen kameraer.', g: 1, s: 'ejer' },
      { n: 'Wi-Fi og internet', d: 'Planlagt. Oplysninger på skilt i lejligheden.', g: 1, s: 'verify' }
    ] },
    { id: 'kstue', name: 'Køkken og stue', dim: '34 m²', blurb: 'Åbent køkken og opholdsstue med spisebord, brændeovn, sofa og store vinduer.', items: [
      { n: 'Spisebord med 8 stole', g: 0, s: 'saelger' }, { n: 'Sofagruppe med bord og bænk', g: 0, s: 'saelger' },
      { n: 'Brændeovn', d: 'Brænde medfølger efter sælgerens liste.', g: 1, s: 'verify' },
      { n: 'Brænde', g: 4, s: 'saelger' },
      { n: 'Køkkenudstyr', d: 'Alt køkkenudstyr, inkl. VIPP-spand.', g: 2, s: 'saelger' },
      { n: 'Opvaskemaskine', g: 2, s: 'verify' }, { n: 'Komfur', g: 2, s: 'verify' }
    ] },
    { id: 'stuesov', name: 'TV-stue / soveværelse', dim: '10 m²', blurb: 'TV-stue med sofa og tv, som også kan bruges til at sove.', items: [
      { n: 'Fjernsyn, 42"', g: 1, s: 'ejer' }, { n: 'PlayStation 4', g: 1, s: 'ejer' },
      { n: 'Sofa', d: 'Kan bruges som ekstra sovesofa til 1 til 2 personer.', g: 0, s: 'saelger' },
      { n: 'TV-bænk', g: 0, s: 'saelger' },
      { n: 'Apple TV', g: 1, s: 'saelger' },
      { n: 'Dørsensor på terrassedøren', d: 'Registrerer kun, at døren åbnes. Ingen kameraer.', g: 1, s: 'ejer' }
    ] },
    { id: 'sov1', name: 'Soveværelse 1', dim: '6 m²', blurb: 'Soveværelse med dobbeltseng, lænestol og vindue.', items: [
      { n: 'Dobbeltseng', d: '2 sengepladser.', g: 3, s: 'verify' }, { n: 'Lænestol', g: 0, s: 'verify' },
      { n: 'Madras', g: 3, s: 'saelger' },
      { n: 'Dyner, puder og sengetøj', d: 'Medfølger ikke fra sælger. Hvem leverer, afklares.', g: 3, s: 'verify' }
    ] },
    { id: 'sov2', name: 'Soveværelse 2', dim: '5 m²', blurb: 'Lille soveværelse med køjeseng.', items: [
      { n: 'Køjeseng', d: '2 sengepladser.', g: 3, s: 'verify' }, { n: 'Madrasser', g: 3, s: 'saelger' },
      { n: 'Dyner, puder og sengetøj', d: 'Medfølger ikke fra sælger. Hvem leverer, afklares.', g: 3, s: 'verify' }
    ] },
    { id: 'bad', name: 'Bad', dim: '4 m²', blurb: 'Badeværelse med bruser, vask og vaskemaskine.', items: [
      { n: 'Vaskemaskine', g: 1, s: 'ejer' },
      { n: 'Bruser', g: 4, s: 'verify' }, { n: 'Vask', g: 4, s: 'verify' },
      { n: 'Temperaturføler', d: 'Måler temperatur og fugt til drift (ikke synlig for gæster som måling).', g: 1, s: 'ejer' }
    ] },
    { id: 'terrasse', name: 'Terrasse', dim: '25 m²', blurb: 'Terrasse med plads til udemøbler og sol det meste af dagen.', items: [
      { n: 'Udemøbler', g: 0, s: 'saelger' }, { n: 'Adirondack-stole', g: 0, s: 'saelger' }, { n: 'Marmorbord', g: 0, s: 'saelger' },
      { n: 'Temperaturføler', g: 1, s: 'ejer' }
    ] },
    { id: 'hele', name: 'Hele lejligheden', dim: '', blurb: 'Ting, sælgerens liste nævner uden rum, eller som gælder hele lejligheden.', items: [
      { n: 'Lamper (alle)', g: 0, s: 'saelger' },
      { n: '2 skindstole', d: 'Placering ikke oplyst.', g: 0, s: 'saelger' },
      { n: 'Rensdyrskind', g: 4, s: 'saelger' },
      { n: 'EVA-system', d: 'Varmestyring og fugtkontrol.', g: 1, s: 'saelger' },
      { n: 'Miele-støvsuger', d: 'Ca. 1 år gammel ifølge sælger.', g: 2, s: 'saelger' },
      { n: 'Gammelt smart-TV', d: 'Står på sælgerens liste. Om det bliver, og hvor, er uafklaret.', g: 1, s: 'saelger' },
      { n: 'Vinterudstyr nævnt i sælgerlisten', d: 'Ordlyden i kilden er uklar og skal afklares.', g: 4, s: 'verify' }
    ] }
  ]
};
