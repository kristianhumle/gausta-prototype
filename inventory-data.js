/* Inventar pr. rum (A9 overblik, B7 komplet liste). Ét datasæt (TK4), som lejligheden.html viser, og som gæsteområdet genbruger.
   Rum-id'erne følger plantegningen (plan.js). Status pr. punkt (vises ikke på siden):
   ejer    = Brugeroplysning fra ejeren (inventarlisten i vidensbasen, 04-arbejdsstatus/inventar-b102.md, 14. til 16. oktober 2026)
   saelger = står på sælgernes inventarliste (mail 30. september 2026). Inventaret er købt og betalt 12. oktober 2026
   verify  = fra annoncens rumbeskrivelse eller antaget, skal verificeres på stedet
   Opdateret 16. oktober 2026 (ejeren) efter den opmålte inventarliste. Placering af enkelte ting fra sælgerens liste er et gæt, hvor kilden ikke nævner rum.
   Billede pr. punkt (valgfrit, 16. oktober 2026): img = { k: 'mappe/navn' i assets/web (som GL.photo), alt: beskrivelse, cap: billedtekst }.
   Webkopierne laves i tre størrelser (navn.webp 1350 px, -m 675 px, -s 360 px) og registreres i assets/web/manifest.json. */
window.GL_INVENTORY = {
  groups: ['Møbler', 'Teknik og apparater', 'Køkken og husholdning', 'Sovning', 'Andet'],
  rooms: [
    { id: 'entre', name: 'Entré', dim: '4 m²', blurb: 'Indgangen med garderobe og bænk til overtøj og sko, plads til ski og udstyr.', items: [
      { n: 'Hyttebænk', g: 0, s: 'saelger' }, { n: 'Hylde', g: 0, s: 'saelger' },
      { n: 'Garderobe og bænk til overtøj og sko', g: 0, s: 'verify' },
      { n: 'Skirum og tørring af udstyr', g: 4, s: 'verify' },
      { n: 'Wi-Fi, 100 Mbit/s', d: 'Netværk og adgangskode står på skiltet i lejligheden.', g: 1, s: 'ejer' },
      { n: 'Dørsensor på hoveddøren', d: 'Registrerer kun, at døren åbnes. Ingen kameraer.', g: 1, s: 'ejer' },
      { n: 'Ildslukker', g: 4, s: 'ejer' }
    ] },
    { id: 'kstue', name: 'Køkken og stue', dim: '34 m²', blurb: 'Åbent køkken og opholdsstue med spisebord, brændeovn, sofa og store vinduer.', items: [
      { n: 'Spisebord med 8 stole og bænk', g: 0, s: 'ejer' }, { n: 'Sofagruppe med bord og bænk', g: 0, s: 'saelger' },
      { n: 'Brændeovn', d: 'Brænde medfølger efter sælgerens liste.', g: 1, s: 'ejer',
        img: { k: 'inventar/inventar-braendeovn', alt: 'Sort, rund brændeovn med ild bag glasset og en støbejernsgryde på toppen', cap: 'Brændeovnen i stuen' } },
      { n: 'Opladestation', d: 'Til telefoner og tablets, med USB-A, USB-C og Lightning.', g: 1, s: 'ejer' },
      { n: 'Komfur og ovn', g: 2, s: 'ejer' }, { n: 'Mikroovn', g: 2, s: 'ejer' },
      { n: 'Køleskab med fryser', g: 2, s: 'ejer' }, { n: 'Opvaskemaskine', g: 2, s: 'ejer' },
      { n: 'Kaffemaskine', g: 2, s: 'ejer' }, { n: 'Elkedel', g: 2, s: 'ejer' }, { n: 'Elpisker', g: 2, s: 'ejer' },
      { n: 'Køkkenudstyr', d: 'Alt køkkenudstyr, inkl. VIPP-spand.', g: 2, s: 'saelger' },
      { n: 'Røgalarm', g: 4, s: 'ejer' },
      { n: 'Brænde', g: 4, s: 'saelger' }
    ] },
    { id: 'stuesov', name: 'TV-stue / soveværelse', dim: '10 m²', blurb: 'TV-stue med sofa og tv, som også kan bruges til at sove.', items: [
      { n: 'Sofa', d: 'Kan bruges som ekstra sovesofa til 1 til 2 personer.', g: 0, s: 'ejer' },
      { n: 'TV-bænk', g: 0, s: 'saelger' },
      { n: 'Fjernsyn, Samsung 40"', g: 1, s: 'ejer' }, { n: 'PlayStation 4', g: 1, s: 'ejer' },
      { n: 'Apple TV', g: 1, s: 'ejer' },
      { n: 'Dørsensor på terrassedøren', d: 'Registrerer kun, at døren åbnes. Ingen kameraer.', g: 1, s: 'ejer' }
    ] },
    { id: 'sov1', name: 'Soveværelse 1', dim: '6 m²', blurb: 'Soveværelse med dobbeltseng, lænestol og vindue.', items: [
      { n: 'Dobbeltseng, 150x200 cm', d: '2 sengepladser.', g: 3, s: 'ejer' }, { n: 'Lænestol', g: 0, s: 'verify' },
      { n: 'Dyner, puder og sengetøj', d: 'Medfølger ikke fra sælger. Hvem leverer, afklares.', g: 3, s: 'verify' }
    ] },
    { id: 'sov2', name: 'Soveværelse 2', dim: '5 m²', blurb: 'Soveværelse med tre senge og 4 sengepladser.', items: [
      { n: 'Dobbeltseng, 150x200 cm', d: '2 sengepladser.', g: 3, s: 'ejer' },
      { n: 'Enkeltseng, 90x200 cm', d: '1 sengeplads.', g: 3, s: 'ejer' },
      { n: 'Juniorseng, 75x170 cm', d: '1 sengeplads, bedst til et barn.', g: 3, s: 'ejer' },
      { n: 'Dyner, puder og sengetøj', d: 'Medfølger ikke fra sælger. Hvem leverer, afklares.', g: 3, s: 'verify' }
    ] },
    { id: 'bad', name: 'Bad', dim: '4 m²', blurb: 'Badeværelse med bruser, vask og vaskemaskine med tørretumbler.', items: [
      { n: 'Vaskemaskine med tørretumbler', d: 'Kombineret maskine.', g: 1, s: 'ejer' },
      { n: 'Bruser', g: 4, s: 'verify' }, { n: 'Vask', g: 4, s: 'verify' },
      { n: 'Sensor for temperatur, fugt og vand', d: 'Til drift (ikke synlig for gæster som måling).', g: 1, s: 'ejer' }
    ] },
    { id: 'terrasse', name: 'Terrasse', dim: '25 m²', blurb: 'Terrasse med plads til udemøbler og sol det meste af dagen.', items: [
      { n: 'Udemøbler', g: 0, s: 'saelger' }, { n: 'Adirondack-stole', g: 0, s: 'saelger' }, { n: 'Marmorbord', g: 0, s: 'saelger' },
      { n: 'Temperaturføler', g: 1, s: 'ejer' }
    ] },
    { id: 'garage', name: 'Garage', dim: '', blurb: 'Lejlighedens p-plads i parkeringskælderen under bygningen.', items: [
      { n: 'Ladestander', d: 'Ladeboks til elbil ved p-pladsen. Brug og afregning afklares.', g: 1, s: 'ejer' }
    ] },
    { id: 'hele', name: 'Hele lejligheden', dim: '', blurb: 'Ting, sælgerens liste nævner uden rum, eller som gælder hele lejligheden.', items: [
      { n: 'Lamper (alle)', g: 0, s: 'saelger' },
      { n: '2 skindstole', d: 'Placering ikke oplyst.', g: 0, s: 'saelger' },
      { n: 'Rensdyrskind', g: 4, s: 'saelger' },
      { n: 'Smart styring af varme', d: 'Eva-system med varmestyring, røgalarm og vandsensor i køkkenet.', g: 1, s: 'ejer' },
      { n: 'Miele-støvsuger', d: 'Ca. 1 år gammel ifølge sælger.', g: 2, s: 'saelger' },
      { n: 'Gammelt smart-TV', d: 'Står på sælgerens liste. Om det bliver, og hvor, er uafklaret.', g: 1, s: 'saelger' },
      { n: 'Vinterudstyr nævnt i sælgerlisten', d: 'Ordlyden i kilden er uklar og skal afklares.', g: 4, s: 'verify' }
    ] }
  ]
};
