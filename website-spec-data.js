/* Website spec: de tekniske specifikationer for gaustahome.com, hentet fra Stormpine-websitets Confluence og tilpasset (teknisk/krav/).
   Én post pr. punkt, med delopgaver. Status: draft, open, ready, approved. Built: done, partial, none (kontrolleret i produktionsrepoet 18. oktober 2026).
   Spejles som register i teknisk/website-spec.md (genereres af prototype/tools/website-spec-register.py). Offentlig side (noindex): ingen hemmeligheder, adresser eller nøgler. */
window.WS_UPDATED = '18. oktober 2026';
window.WS_GROUPS = [
 {
  "id": "N1",
  "title": "Performance",
  "lead": "Hurtigt sted at åbne, også med mange billeder og videoer (Stormpine B1).",
  "src": "krav/n1-performance.md"
 },
 {
  "id": "N2",
  "title": "Sikkerhed",
  "lead": "Hemmeligheder, headers, adgang og angreb (Stormpine B2).",
  "src": "krav/n2-sikkerhed.md"
 },
 {
  "id": "N3",
  "title": "Privatliv og samtykke",
  "lead": "Hvad sitet må gemme og dele om besøgende og gæster, og hvordan det oplyses (Stormpine B3).",
  "src": "krav/n3-privatliv-og-samtykke.md"
 },
 {
  "id": "N4",
  "title": "Analytics",
  "lead": "Hvordan trafik og klik måles uden at gå på kompromis med privatlivet (Stormpine B4).",
  "src": "krav/n4-analytics.md"
 },
 {
  "id": "N5",
  "title": "SEO og opdagelse",
  "lead": "At søgemaskiner, AI-svarmotorer og delingstjenester kan finde, forstå og vise sitet korrekt (Stormpine B5).",
  "src": "krav/n5-seo-og-opdagelse.md"
 },
 {
  "id": "N6",
  "title": "Tilgængelighed",
  "lead": "At sitet kan bruges af alle, med tastatur, skærmlæser, zoom og god kontrast (Stormpine B6).",
  "src": "krav/n6-tilgaengelighed.md"
 },
 {
  "id": "N7",
  "title": "Formularer og leads",
  "lead": "Hvordan henvendelser fra gæster sendes sikkert, uden cookies og uden at gå tabt (Stormpine B7).",
  "src": "krav/n7-formularer-og-leads.md"
 },
 {
  "id": "N8",
  "title": "Driftssikkerhed",
  "lead": "At dårlige udrulninger stoppes, at nedbrud opdages, og at data kan gendannes (Stormpine B8).",
  "src": "krav/n8-driftssikkerhed.md"
 },
 {
  "id": "N9",
  "title": "E-mail",
  "lead": "At mails fra gaustahome.com når frem og ikke kan forfalskes (Stormpine B9).",
  "src": "krav/n9-email-leverance.md"
 },
 {
  "id": "N10",
  "title": "Redaktion, brand og designsystem",
  "lead": "Hvem må udgive hvad, hvilke påstande der må stå på sitet, og ét fælles visuelt sprog (Stormpine B10).",
  "src": "krav/n10-redaktion-brand-og-designsystem.md"
 },
 {
  "id": "N11",
  "title": "Eksperimenter og personalisering",
  "lead": "A/B-tests og tilpasset indhold, som kræver trafik; parkeret for Gausta (Stormpine B11).",
  "src": "krav/n11-eksperimenter-og-personalisering.md"
 },
 {
  "id": "N12",
  "title": "Bæredygtighed og omkostning",
  "lead": "Hold sitet billigt, flytbart og ejet af en navngiven person (Stormpine B12).",
  "src": "krav/n12-baeredygtighed-og-omkostning.md"
 },
 {
  "id": "N13",
  "title": "Fejl-UX og søgning",
  "lead": "En hjælpsom 404 og 500 med rigtige statuskoder, og søgning først når der er indhold at søge i (Stormpine B13).",
  "src": "krav/n13-fejl-ux-og-soegning.md"
 },
 {
  "id": "CMS",
  "title": "CMS og indhold",
  "lead": "Valg af indholdssystem, indholdsmodel, redigering, AI-adgang og udgivelse (Stormpine: krav til CMS og indholdsplatform).",
  "src": "krav/cms-og-indhold.md"
 },
 {
  "id": "I18N",
  "title": "Sprog og routing",
  "lead": "Hvordan sitet findes på flere sprog: indhold, adresser, fallback, hreflang og oversættelseskvalitet (Stormpine: i18n og routing).",
  "src": "krav/i18n-og-routing.md"
 },
 {
  "id": "QA",
  "title": "QA og test",
  "lead": "Automatiske tjek og en manuel tjekliste, der holder sitet sikkert at udgive (Stormpine QA og testing).",
  "src": "krav/qa-og-test.md"
 },
 {
  "id": "N14",
  "title": "Live-data og tredjepartskilder",
  "lead": "Vejr, lifte og pister, webcam, events og kort: hver kilde skal verificeres og have en fallback (Gausta-specifikt krav, ingen Stormpine-pendant).",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "N15",
  "title": "Årstidstema",
  "lead": "Fire årstidspaletter med automatisk valg efter dato og manuel overstyring (Gausta-specifikt krav).",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "N16",
  "title": "Sensor- og IoT-datapipeline",
  "lead": "Hentning, historik, alarmer og privatliv for dørsensorer og andre sensorer hjemme (Gausta-specifikt krav).",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "N17",
  "title": "Markedsdata-indsamling",
  "lead": "Indsamling af konkurrentpriser og salgspriser med kildevilkår og dataoprindelse pr. tal (Gausta-specifikt krav).",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "N18",
  "title": "Gæsteområdets adgangsmodel",
  "lead": "Permanent gæstelink uden adgangskoder på siden og uden indeksering (Gausta-specifikt krav).",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "N19",
  "title": "Ingen kobling fra website til hjemmeserver",
  "lead": "Guardrail fra 3. oktober 2026: det kundevendte website må aldrig afhænge af hjemmeserveren.",
  "src": "teknisk/ikke-funktionelle-krav.md"
 },
 {
  "id": "TL",
  "title": "Tillæg",
  "lead": "Tillæg i bunden af kravoversigten: økonomi, rejse og afstande, inventar, social deling og FAQ-markup.",
  "src": "teknisk/ikke-funktionelle-krav.md"
 }
];
window.WS_SPEC = [
 {
  "id": "N1.1",
  "g": "N1",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Caching og opdatering ved udgivelse",
  "what": "Siderne bygges statisk og genopbygges kun, når indholdet ændres: lang cache-tid, en signeret webhook fra Sanity ved udgivelse og styring af, hvilke dele der må være dynamiske. Det gør sitet hurtigt og billigt at drive. Stormpines egen plan sagde Done, mens koden stadig kørte dynamisk pr. request (kildekonflikt, bevaret).",
  "gausta": "Samme stack og samme valg. Live-data (vejr, lifte) er en del for sig og må ikke trække hele siden ud af cachen. Verificér caching med x-nextjs-cache i CI, ikke kun via en status i en plan.",
  "built": {
   "s": "partial",
   "where": "Hentning gemmes i Next' cache med tags og en times sikkerhedsgrænse i sanity/lib/fetch.ts. Live-datakilder har egne revalidate-værdier i lib/met.ts, lib/fnugg.ts og lib/gaustabanen.ts. Webhook med signaturtjek i app/api/revalidate/route.ts (afprøvet 18. oktober 2026 ifølge vidensbasen). Sitet bruger ikke SanityLive. Ikke kontrolleret: cacheComponents-indstillingen (ikke sat i next.config.ts, altså Next' standard), prefetchInlining, /api/expire-tags, og om x-nextjs-cache er tjekket i CI."
  },
  "decided": "G34 (kun offentligt indhold i Sanity), N19 (ingen kobling til hjemmeserver). Webhooken er afprøvet, og en fejl (alle sider 404 efter kald) er rettet 18. oktober 2026.",
  "deps": [],
  "open": [
   "Skal filteret i webhooken udvides, hver gang der kommer en ny indholdstype?",
   "Skal der være en CI-kontrol af cache-headers, så en regression til dynamisk rendering opdages?"
  ],
  "tasks": [
   {
    "id": "B1-0.1",
    "t": "Bekræft klassisk ISR, cacheComponents slået fra (next.config.ts)",
    "prio": "",
    "rel": "gaelder",
    "note": "Samme stack, samme valg gør sig gældende."
   },
   {
    "id": "B1-0.2",
    "t": "Erstat revalidate = 0 med lang revalidate (fx 3600)",
    "prio": "",
    "rel": "tilpasses",
    "note": "Live-data (vejr, lifte) er en tredjepartsdel; vælg cache pr. rute eller del, ikke blanket-dynamisk."
   },
   {
    "id": "B1-0.3",
    "t": "Signeret Sanity publish-webhook (app/api/revalidate/route.ts), tag GROQ efter _type",
    "prio": "",
    "rel": "gaelder",
    "note": "Sanity bruges til offentligt indhold og gæsteområde."
   },
   {
    "id": "B1-0.4",
    "t": "Gate SanityLive til draft; experimental.prefetchInlining; /api/expire-tags",
    "prio": "",
    "rel": "gaelder",
    "note": "Samme Next 16 og next-sanity-risiko."
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "N1.2",
  "g": "N1",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Rendering og JavaScript",
  "what": "Så lidt JavaScript som muligt sendes til browseren: interaktive dele holdes små, indholdet renderes på serveren, og Sanity-klienten og forespørgsler bliver på serveren. Det holder siden hurtig at åbne og at klikke på (INP under 200 ms).",
  "gausta": "Gausta har billed- og videotunge sektioner i stedet for en scroll-walkthrough, så målet er små klient-komponenter og tunge dele (kort, galleri, plantegning) indlæst først ved behov.",
  "built": {
   "s": "partial",
   "where": "Sanity-klienten er kun på serveren (server-only i sanity/lib/fetch.ts). 15 filer i components og app bruger use client. Ingen brug af next/dynamic fundet. @next/bundle-analyzer findes ikke i package.json. Ikke kontrolleret: faktisk størrelse på first-load JS."
  },
  "deps": [],
  "open": [
   "Hvilke af de 15 klient-komponenter kan indlæses sent (next/dynamic) uden at skade oplevelsen?"
  ],
  "tasks": [
   {
    "id": "B1-1.1",
    "t": "@next/bundle-analyzer (ANALYZE=true), ingen styled-components eller Studio i marketing-chunks",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B1-1.2",
    "t": "Client-komponenter i mindste blade; hero som Server Component; walkthrough via next/dynamic",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta har sæsontemaer og billed- og videotunge sektioner i stedet for en scroll-walkthrough."
   },
   {
    "id": "B1-1.3",
    "t": "Sanity-klient og GROQ kun server-side",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N1.3",
  "g": "N1",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Animation og bevægelse",
  "what": "Animationer må kun bruge transform og opacity, og lange sider med mange sektioner kan springe maling over for dele uden for skærmen (content-visibility). Brugere, der har bedt om mindre bevægelse, får en statisk slutstilstand. Det beskytter mod hakkende sider og er også en tilgængelighedsregel.",
  "gausta": "Gælder animerede sektioner, lange galleri-sider og autoplay af video (G85 afspiller Gausta LIVE automatisk, uden lyd).",
  "built": {
   "s": "partial",
   "where": "prefers-reduced-motion er håndteret i styles/base.css, flere styles/elements/*.css og i kortkomponenterne (components/blocks/hike/HikeMap.tsx og components/blocks/area/AreaMap.tsx). content-visibility er ikke fundet i koden. Ikke kontrolleret: om autoplay-video respekterer reduced motion."
  },
  "decided": "G85 (Gausta LIVE afspilles automatisk uden lyd).",
  "deps": [
   "N1.2"
  ],
  "open": [
   "Skal autoplay-video stoppes for brugere med reduceret bevægelse?"
  ],
  "tasks": [
   {
    "id": "B1-2.1",
    "t": "Kun transform og opacity via IntersectionObserver og CSS; content-visibility: auto",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gælder for animerede sektioner og lange galleri-sider."
   },
   {
    "id": "B1-2.2",
    "t": "prefers-reduced-motion: statisk slutstilstand",
    "prio": "",
    "rel": "gaelder",
    "note": "Også for video og autoplay."
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N1.4",
  "g": "N1",
  "status": "approved",
  "rel": "gaelder",
  "title": "Billeder og video",
  "what": "Billeder leveres i rigtig størrelse og moderne format, med angivne mål, sizes og kun ét hurtigt prioriteret billede på forsiden. Uskarpe pladsholdere (LQIP) fylder, mens billedet hentes. Valget af billedpipeline afgør båndbredde, pris og hastighed.",
  "gausta": "Gausta er billed- og videotungt, så dette er kernen i performance-arbejdet. Poster-billede som LCP og video, der ikke autoafspiller på mobildata, er Åbent punkt.",
  "built": {
   "s": "partial",
   "where": "Pipeline valgt og bygget: Next-optimering på Railway (images i next.config.ts med AVIF og WebP, urlFor i sanity/lib/image.ts, /_next/image i components/blocks/*Section.tsx). Hero bruger next/image med sizes i components/blocks/HeroSection.tsx, men uden priority. Mange img har loading=lazy. Ingen blur-placeholders (LQIP) fundet. Ikke kontrolleret: faktisk LCP-element, billedvægt, og om videoer er komprimeret."
  },
  "decided": "G57 (Next-optimering på Railway), G104 (videoer ligger på sitet), G82 og G84 (videosupport i gallerier).",
  "deps": [
   "N1.1"
  ],
  "open": [
   "Skal hero-billedet have priority, og skal der laves blur-placeholders?",
   "Hvor stor billedbåndbredde tåler Railway-planen, og hvordan tømmes billedcachen ved udrulning (volumen)?",
   "Hvordan håndteres video: komprimering, poster og autoplay på mobildata?"
  ],
  "tasks": [
   {
    "id": "B1-3.1",
    "t": "Pakket Sanity-billedloader, dimensioner, sizes, ét priority-billede",
    "prio": "",
    "rel": "gaelder",
    "note": "Høj vægt: Gausta er billedtungt, og heroen er næppe ren SVG."
   },
   {
    "id": "B1-3.2",
    "t": "LQIP blur-placeholders",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B1-3.3",
    "t": "Vælg billedpipeline: Next-optimizer i Railway-container eller direkte cdn.sanity.io",
    "prio": "",
    "rel": "gaelder",
    "note": "Høj vægt: et billed- og videotungt site gør valget centralt."
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N1.5",
  "g": "N1",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Skrifttyper og kritisk sti",
  "what": "Skrifttyper og tredjepartsscripts må ikke forsinke første visning. Skrifter serveres fra sitet selv, og der forbindes kun tidligt til de få nødvendige eksterne adresser. Ingen render-blokerende tredjeparts-script.",
  "gausta": "Skriften skal dække æ ø å og senere ä ö ü ß. Der er flere tredjepartsadresser (vejr, lifte, webcam, kort), så preconnect kun til de få kritiske.",
  "built": {
   "s": "partial",
   "where": "Fraunces og Inter hentes ved build via next/font/google og serveres fra sitet selv, med display swap og latin-ext (app/[locale]/layout.tsx). Turnstile indlæses kun på formularsiden. Der er ingen preconnect fundet. Ikke kontrolleret: om skrifttypevalget er en ejerbeslutning (ingen G-nummer fundet) og CLS ved skriftskift."
  },
  "decided": "Fontvalget er truffet i koden, men ikke fundet som egen G-beslutning (G8 stod som åben).",
  "deps": [
   "N1.4"
  ],
  "open": [
   "Er Fraunces og Inter den endelige brandskrift?",
   "Skal der preconnect til nogen eksterne adresser?"
  ],
  "tasks": [
   {
    "id": "B1-4.1",
    "t": "Fontvalg: system-stack eller next/font/local",
    "prio": "",
    "rel": "tilpasses",
    "note": "Skal dække norske tegn (æ ø å) og senere tyske (ä ö ü ß)."
   },
   {
    "id": "B1-4.2",
    "t": "preconnect til cdn.sanity.io, ingen render-blokerende tredjeparts-script",
    "prio": "",
    "rel": "tilpasses",
    "note": "Flere tredjepartsorigins (vejr, lifte, webcam, kort); preconnect kun til de få kritiske."
   }
  ],
  "appr": "Skrifttyperne er valgt og bygget i designsystemet, og kravet handler kun om hurtig indlæsning."
 },
 {
  "id": "N1.6",
  "g": "N1",
  "status": "open",
  "rel": "tilpasses",
  "title": "Måling og budgetter",
  "what": "Hastighed måles på rigtige besøg (Core Web Vitals: LCP under 2,5 s, INP under 200 ms, CLS under 0,1) og holdes fast med automatiske grænser i byggeprocessen. Lighthouse og størrelsesgrænser fanger regressioner, før de kommer i produktion.",
  "gausta": "Lofterne skal genberegnes for et billedtungt site og sættes pr. skabelon efter første baseline. Måling på rigtige besøg afhænger af analytics og samtykke.",
  "built": {
   "s": "none",
   "where": "Intet fundet. .github/workflows/ci.yml har typecheck, tests, kontrast, skema og build, men ingen Lighthouse, size-limit eller budget.json; filen siger selv, at hastighedstjek tilføjes, når staging findes. web-vitals findes ikke i package.json."
  },
  "decided": "G12 (Matomo cookieless som analytics). Felt-måling hviler på d8a (N4.1).",
  "deps": [
   "N1.4"
  ],
  "open": [
   "Hvilke budgetter sættes pr. skabelon (forside, område, gæsteområde)?",
   "Hvilken analytics og hvilket samtykke skal bære felt-målingen (G12, N3)?",
   "Skal der oprettes staging, så Lighthouse kan køre?"
  ],
  "tasks": [
   {
    "id": "B1-5.1",
    "t": "size-limit med first-load JS-lofter i CI",
    "prio": "",
    "rel": "gaelder",
    "note": "Lofterne genberegnes for Gausta."
   },
   {
    "id": "B1-5.2",
    "t": "Lighthouse CI og budget.json på staging, PR eller lokal build",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B1-5.3",
    "t": "Felt-RUM med web-vitals til analytics, segmenteret",
    "prio": "",
    "rel": "tilpasses",
    "note": "Afhænger af Gaustas analytics- og samtykkevalg og af, at A, B og C er adskilt."
   }
  ],
  "needs": "Budgetter for hastighed og om der skal oprettes et testmiljø (omkostning)."
 },
 {
  "id": "N1.7",
  "g": "N1",
  "status": "open",
  "rel": "tilpasses",
  "title": "Hosting, region og cache-headers",
  "what": "Sitet kører som en almindelig Node-tjeneste i EU, med kontrol af at cachen virker, og med eksplicitte cache-headers på API-ruter. Delt cache mellem flere instanser er først nødvendigt ved skalering.",
  "gausta": "Én instans er nok i starten, så delt cache udskydes. Live-data-proxyer og webhook får bevidste cache-regler.",
  "built": {
   "s": "partial",
   "where": "Healthcheck-ruten app/api/health/route.ts er statisk. Sprogomdirigeringen i proxy.ts sætter private, no-store. Ifølge teknisk/domaene-og-dns-setup.md er Railway-regionen ønsket som EU West, men IKKE verificeret (punkt 4 i åbne punkter), og Cloudflare står som DNS only. Ikke kontrolleret: selve Railway-indstillingerne og cache-headers på øvrige ruter."
  },
  "decided": "G28 og N19 (ingen kobling til hjemmeserver).",
  "deps": [
   "N1.1"
  ],
  "open": [
   "Verificér Railway-region, forbrugsloft og alarm i selve tjenesten.",
   "Hvornår bliver en delt cache-handler relevant?"
  ],
  "tasks": [
   {
    "id": "B1-6.1",
    "t": "Node-service på Railway, verificér x-nextjs-cache; delt cache-handler ved flere instanser",
    "prio": "",
    "rel": "tilpasses",
    "note": "Relevant hvis back-office eller cron ligger i samme tjeneste; ellers udskudt."
   },
   {
    "id": "B1-6.2",
    "t": "Eksplicitte cache-headers kun på API- og webhook-ruter; CDN-Cache-Control ved Cloudflare",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta får API-ruter (webhook, live-data-proxyer, sensor-data)."
   },
   {
    "id": "B1-6.3",
    "t": "Bekræft Railway-region EU",
    "prio": "",
    "rel": "gaelder",
    "note": "EU er sandsynligt krav for dansk og norsk publikum."
   }
  ],
  "needs": "Du skal selv kontrollere Railway-regionen, forbrugsloftet og alarmen i Railway."
 },
 {
  "id": "N1.8",
  "g": "N1",
  "status": "approved",
  "rel": "ikke",
  "title": "Udskudt: CSS scroll-drevne animationer",
  "what": "Valgfri brug af CSS scroll-driven animations som erstatning for JavaScript-styrede scroll-effekter. Gevinsten er ubetydelig og støtten versionsfølsom.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "B1-2.3",
    "t": "Valgfri CSS scroll-driven animations",
    "prio": "",
    "rel": "ikke",
    "note": "Ubetydelig gevinst nu, kan genovervejes. Udskudt hos Stormpine."
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "N2.1",
  "g": "N2",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Hemmeligheder og adgang",
  "what": "Alle nøgler og tokens ligger kun som skjulte variabler hos hosting-udbyderen, aldrig i kode, filer eller i klientens kode. Automatisk scanning af repoet og af afhængigheder. Offentlig side bruger kun et læse-token.",
  "gausta": "Gælder også back-office. Ingen eksisterende tokens at rotere, da kontiene er nye. Hemmeligheder må aldrig stå i vidensbasen eller i chatten (regel).",
  "built": {
   "s": "partial",
   "where": "Eksempelfilen .env.example har kun tomme felter, og .gitignore udelukker .env-filer. Læse-tokenet bruges kun til kladder (sanity/lib/fetch.ts og app/api/draft-mode/enable/route.ts), og datasættet er offentligt. Kun projekt-id, datasæt og Turnstile-sitekey er offentlige variabler. Hemmelighederne ligger ifølge teknisk/sanity-setup.md i Railway (ikke kontrolleret i selve tjenesten, og Sealed-variabler er ikke bekræftet). Der er ingen secret scanning, gitleaks, Dependabot eller pnpm audit i .github/workflows/ci.yml, og ingen dependabot.yml. Om GitHubs egen scanning er slået til i indstillingerne er ikke kontrolleret."
  },
  "decided": "G29 (alle konti på ejerens Gmail), G34 (kun offentligt indhold i Sanity).",
  "deps": [],
  "open": [
   "Er GitHub secret scanning med push protection slået til på repoet?",
   "Skal Dependabot og et audit-trin i CI slås til?",
   "Skal Railway-hemmelighederne gøres til Sealed-variabler, og hvor ligger kopien uden for Railway?"
  ],
  "tasks": [
   {
    "id": "B2-0.1",
    "t": "Alle rigtige hemmeligheder (Sanity-skrivetoken, webhook-secret, preview-secret) som Sealed Railway-variabler; out-of-band kopi",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Gælder også back-office (DB-URL, Better Auth secret, sensor-API-nøgler)."
   },
   {
    "id": "B2-0.2",
    "t": "Audit af env-præfikser: ingen hemmelighed med NEXT_PUBLIC_; grep klientbundle efter token-mønstre",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.3",
    "t": "gitleaks eller GitHub secret scanning og push protection i CI; .env* gitignoreret",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.4",
    "t": "Dependabot eller Renovate og pnpm audit high/critical gate i CI",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.5",
    "t": "Read-only Sanity-token til offentligt frontend; roter pending tokens",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Ingen eksisterende pending tokens, nye konti."
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N2.2",
  "g": "N2",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Transport og sikkerhedsheaders",
  "what": "Alt over HTTPS med HSTS og omdirigering fra HTTP. Et fast sæt sikkerhedsheaders (ingen indramning, ingen typegætning, begrænsede browserfunktioner, begrænset henvisning), indført forsigtigt og kontrolleret mod en ekstern scanner.",
  "gausta": "HSTS uden preload og uden underdomæner, så hjemmeserveren og andre underdomæner ikke tvinges til https. Permissions-Policy forbyder i dag kamera, mikrofon og geolocation og skal åbnes, hvis kort eller QR-scan kræver det.",
  "built": {
   "s": "done",
   "where": "next.config.ts: Strict-Transport-Security (ét år, kun domænet), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy og upgrade-insecure-requests uden for udvikling. www videresendes permanent (308) til rod-domænet. HTTP giver 301 til https og certifikater er gyldige ifølge teknisk/domaene-og-dns-setup.md (målt 5. oktober 2026, ikke kontrolleret i selve Railway). Ekstern scanner er ikke kørt (se N2.8)."
  },
  "decided": "HSTS besluttet 6. oktober 2026 (uden preload og includeSubDomains). G31 (DNS hos Cloudflare, DNS only). G58 (Studio for sig selv).",
  "deps": [
   "N2.1"
  ],
  "open": [
   "Skal HSTS senere udvides til underdomæner, når back-office-adressen er permanent https?"
  ],
  "tasks": [
   {
    "id": "B2-1.1",
    "t": "Tving HTTPS, bekræft Railway TLS på domæne og www, redirect HTTP",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Domæne og evt. .no og .dk varianter."
   },
   {
    "id": "B2-1.2",
    "t": "Header-baseline: X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors; matcher springer static, prefetch og API over",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Permissions-Policy skal måske tillade geolocation eller kamera, hvis kort eller QR-scan bruges."
   },
   {
    "id": "B2-1.3",
    "t": "HSTS uden preload først; upgrade-insecure-requests; preload først når alle subdomæner er permanent HTTPS",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Subdomænerne (back-office, evt. sensor-endpoint) skal medregnes."
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "N2.3",
  "g": "N2",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Indholdspolitik (CSP)",
  "what": "En Content-Security-Policy styrer, hvilke adresser siden må hente scripts, billeder, rammer og forbindelser fra, og begrænser skaden ved en indsprøjtet kode. Hovedspændingen er, at en streng nonce-baseret politik kræver dynamisk rendering og dermed kan koste statisk caching. Stormpines standard er den statisk-venlige sti.",
  "gausta": "Politikken skal rumme Turnstile, YouTube, Sanity og senere live-datakilder, kort og webcams. Del A og B holdes statiske, og back-office kan tage nonce.",
  "built": {
   "s": "partial",
   "where": "next.config.ts har en enforcing CSP uden nonce (siderne forbliver statiske), med Turnstile, Sanity, YouTube og frame-ancestors til Studio. Det betyder unsafe-inline for scripts (Åbent punkt: hash-baseret politik senere). Der er ikke indført som report-only først, og der findes intet report-endpoint i app/api. experimental.sri er ikke brugt. Ikke kontrolleret: at alle sider og eksterne kilder (fx stedbilleder, G119) kører uden overtrædelser."
  },
  "decided": "CSP-stien er valgt i praksis (statisk-venlig, uden nonce). Ikke fundet som egen G-beslutning.",
  "deps": [
   "N2.2"
  ],
  "open": [
   "Skal politikken stramme op med hashes i stedet for unsafe-inline, når Next understøtter det stabilt?",
   "Skal der laves et report-endpoint og en periode med report-only, før næste ændring?",
   "Hvordan holdes listen over tredjepartsadresser ajour?"
  ],
  "tasks": [
   {
    "id": "B2-2.1",
    "t": "Beslut CSP-sti mod B1-caching (statisk-venlig eller nonce). Default statisk-venlig",
    "prio": "P0/P1",
    "rel": "tilpasses",
    "note": "Back-office kan tage nonce, offentlig side statisk."
   },
   {
    "id": "B2-2.2",
    "t": "CSP report-only med report-endpoint; Sanity CDN og analytics-origin i connect-src og img-src",
    "prio": "P0/P1",
    "rel": "tilpasses",
    "note": "Langt flere tredjepartsorigins (vejr, lifte, webcam, kort, events)."
   },
   {
    "id": "B2-2.3",
    "t": "Egen afslappet CSP til /studio eller udeladelse via matcher",
    "prio": "P0/P1",
    "rel": "gaelder",
    "note": "Gælder hvis Sanity Studio indlejres."
   },
   {
    "id": "B2-2.4",
    "t": "Promovér CSP til enforcing efter observation; re-scan",
    "prio": "P0/P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-2.5",
    "t": "Ved SRI-sti: aktivér experimental.sri, verificér at statisk og cache holder",
    "prio": "P0/P1",
    "rel": "tilpasses",
    "note": "Kun hvis sti A vælges; tidlig prøve i byggeriet."
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N2.4",
  "g": "N2",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sanity og applikationsflade",
  "what": "Sanity og sitets egne indgange låses: tilladte oprindelser (CORS) beskæres, webhooken tjekkes på signatur, kladder vises kun bag en hemmelig forbindelse, og al input valideres. En sikker overgang til et login må ikke åbne for omdirigering til vilkårlige adresser.",
  "gausta": "Zod findes også i back-office-stakken. Back-office ligger efter beslutningen bag Cloudflare Access, så handoff-reglen overføres som princip.",
  "built": {
   "s": "partial",
   "where": "Signatur tjekkes med parseBody i app/api/revalidate/route.ts. Draft mode aktiveres via defineEnableDraftMode (app/api/draft-mode/enable/route.ts), og kladder hentes kun med token i sanity/lib/fetch.ts. SanityLive bruges ikke. Zod validerer forespørgselsformularen (lib/inquiry/schema.ts). Ikke gjort eller ikke fundet: allowedOrigins for Server Actions i next.config.ts. Kildekonflikt: ifølge teknisk/sanity-setup.md står CORS-origins med credentials tilladt, hvilket B2-3.1 kræver slået fra (ikke kontrolleret i Sanity Manage)."
  },
  "decided": "G34 (offentligt datasæt, kun offentligt indhold), G83 (back-office bag Cloudflare Access).",
  "deps": [
   "N2.1"
  ],
  "open": [
   "Skal allow-credentials slås fra på de offentlige CORS-origins?",
   "Skal allowedOrigins sættes for Server Actions?"
  ],
  "tasks": [
   {
    "id": "B2-3.1",
    "t": "Beskær Sanity CORS-origins; allow-credentials fra for offentligt origin",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-3.2",
    "t": "Verificér publish-webhooksignatur med next-sanity/webhook før revalidering",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-3.3",
    "t": "Draft og preview bag signeret secret; SanityLive kun i draft mode",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-3.4",
    "t": "Server Actions allowedOrigins; Zod på alle input",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Zod findes også i back-office-stakken."
   },
   {
    "id": "B2-3.5",
    "t": "Sikker app-handoff-redirect: fast destination, ingen session i URL, intet åbent ?next=",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Handoff til back-office-login, samme princip."
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N2.5",
  "g": "N2",
  "status": "open",
  "rel": "tilpasses",
  "title": "Kant, Cloudflare og hastighedsgrænser",
  "what": "Beslutning om, hvorvidt en filtertjeneste (Cloudflare) skal stå foran sitet, og hvordan følsomme ruter beskyttes mod misbrug. Uden en sådan tjeneste står der kun hostingudbyderens grundlæggende DDoS-beskyttelse og en nødknap (Under Attack Mode).",
  "gausta": "Domænet bruger allerede Cloudflare til DNS. Hjemmeserver-tunnel og back-office taler for at samle det dér. Beslutningen ligger hos ejeren.",
  "built": {
   "s": "partial",
   "where": "Cloudflare er DNS only uden proxy ifølge teknisk/domaene-og-dns-setup.md, så der er ingen WAF eller hastighedsgrænse i kanten. Forespørgselsformularen har en hastighedsgrænse (5 forsøg pr. 10 minutter, i hukommelsen) i lib/inquiry/rate-limit.ts og app/[locale]/inquiry/actions.ts. Webhook og draft-ruter har ingen egen hastighedsgrænse (ud over signatur og hemmelighed). Ingen Under Attack Mode-runbook fundet."
  },
  "decided": "G31 (DNS hos Cloudflare). Proxy slået fra for at lade Railway udstede certifikat.",
  "deps": [
   "N2.2"
  ],
  "open": [
   "Skal Cloudflare-proxy slås til (Åbent punkt i domæne-dokumentet)?",
   "Er en hastighedsgrænse i hukommelsen nok, hvis tjenesten kører på flere instanser?"
  ],
  "tasks": [
   {
    "id": "B2-4.1",
    "t": "Beslut Cloudflare foran (WAF, rate limiting, bot, CDN, DNS) eller kun Railway Under Attack Mode",
    "prio": "P1",
    "rel": "gaelder",
    "note": "Gælder som beslutning."
   },
   {
    "id": "B2-4.2",
    "t": "Rate-limit følsomme ruter (formular-POST, webhook, preview) i Cloudflare eller handler",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Tilføj login, sensor-ingest og evt. gæsteside-endpoints."
   },
   {
    "id": "B2-4.3",
    "t": "Dokumentér Under Attack Mode-runbook (toggle, udløb); kobler til B8",
    "prio": "P1",
    "rel": "gaelder",
    "note": "Gælder hvis Railway beholdes; tilpasses til Cloudflare hvis valgt."
   }
  ],
  "needs": "Om Cloudflare-proxyen skal slås til."
 },
 {
  "id": "N2.6",
  "g": "N2",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Formularværn",
  "what": "Forespørgselsformularen beskyttes mod robotter: et skjult felt (honeypot) og en server-side kontrol af Cloudflare Turnstile, og anmodningen afvises, før noget sendes videre.",
  "gausta": "Der er ingen CRM, så afvisning sker før e-mailen sendes. Samtykke og persondata hører under N3.",
  "built": {
   "s": "done",
   "where": "app/[locale]/inquiry/actions.ts: honeypot, hastighedsgrænse, Zod-validering, derefter Turnstile (lib/inquiry/turnstile.ts) og først derefter afsendelse. Test i tests/inquiry.test.ts. Ikke kontrolleret: at nøgler er sat korrekt i Railway."
  },
  "decided": "G55 (booking-formular), G32 (Resend udskudt til formularer).",
  "deps": [
   "N2.4"
  ],
  "open": [],
  "tasks": [
   {
    "id": "B2-5.1",
    "t": "Honeypot og server-side Turnstile på lead-formularer; afvis før ESP eller CRM",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Gælder kontakt- og forespørgselsformularen; ingen CRM nødvendigvis."
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "N2.7",
  "g": "N2",
  "status": "open",
  "rel": "tilpasses",
  "title": "Skjulte flader og adgang for medlemmer",
  "what": "Flader, der ikke skal findes af søgemaskiner (Studio, back-office, gæsteområde), mærkes noindex, og medlemmer i Sanity får kun de rettigheder, de behøver.",
  "gausta": "Udvides til back-office og gæsteområde, når de findes. Der er kun én ejer, men reglen gælder ved senere hjælpere.",
  "built": {
   "s": "partial",
   "where": "Hele sitet er noindex indtil lancering: X-Robots-Tag i next.config.ts, app/robots.ts og metadata i app/[locale]/layout.tsx. Studio kører for sig selv på Sanitys adresse (G58). Gæsteområde og back-office er ikke bygget her. Sanity-medlemmer: kun ejeren, og backup-medlem er ikke oprettet ifølge teknisk/sanity-setup.md (ikke kontrolleret i selve Sanity)."
  },
  "decided": "G58 (Studio for sig selv).",
  "deps": [
   "N2.2"
  ],
  "open": [
   "Skal der oprettes et backup-medlem i Sanity?",
   "Skal gæsteområdet have eget noindex og sti med ikke-gættelig komponent, og hvordan roteres linket?"
  ],
  "tasks": [
   {
    "id": "B2-6.1",
    "t": "noindex på /studio (robots og meta)",
    "prio": "P1",
    "rel": "gaelder",
    "note": "Udvides til back-office og gæsteområde."
   },
   {
    "id": "B2-6.2",
    "t": "Gennemgå Sanity-medlemmer og roller, mindst rettigheder",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Kun én ejer nu, men gælder ved senere hjælpere (fx rengøring, operatør)."
   }
  ],
  "needs": "Afventer din beslutning om gæsteområdet (svar 18. oktober 2026: afvent). Backup-medlem i Sanity og hvordan gæsteområdets link udformes og fornyes.",
  "waits": true
 },
 {
  "id": "N2.8",
  "g": "N2",
  "status": "open",
  "rel": "gaelder",
  "title": "Kontrol og overvågning efter lancering",
  "what": "Efter lancering scannes headers og CSP af en ekstern tjeneste, rapporter om overtrædelser overvåges, og en fejlsporing viser sikkerhedsrelevante fejl. Det er hærdning og opfølgning, ikke grundniveau.",
  "gausta": "Hold støjen nede, da der er mange tredjeparter. Fejlsporing hører også under N8.",
  "built": {
   "s": "none",
   "where": "Intet fundet i produktionsrepoet: ingen scan på lanceringschecklisten, intet CSP-report-endpoint og ingen Sentry i package.json."
  },
  "deps": [
   "N2.3"
  ],
  "open": [
   "Hvilken målkarakter sætter vi på headers-scanningen?",
   "Hvilken fejlsporing vælges (N8)?"
  ],
  "tasks": [
   {
    "id": "B2-7.1",
    "t": "Ekstern header- og CSP-scan (securityheaders.com eller Observatory) på lanceringschecklisten med målkarakter",
    "prio": "P2",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-7.2",
    "t": "Overvåg CSP-report-endpoint efter lancering; triagér nye overtrædelser",
    "prio": "P2",
    "rel": "gaelder",
    "note": "Hold støjen nede (mange tredjeparter)."
   },
   {
    "id": "B2-7.3",
    "t": "Fejlsporing (Sentry) så sikkerhedsrelevante runtime-fejl vises (overlap B8)",
    "prio": "P2",
    "rel": "gaelder",
    "note": "Se N8."
   }
  ],
  "needs": "Afventer din beslutning om drift og ejerskab (svar 18. oktober 2026: afvent). Valg af fejlsporing (N8.4) og målkarakter.",
  "waits": true
 },
 {
  "id": "N3.1",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Sporingsposture: intet banner, hvis det kan bevises",
  "what": "Ejeren vælger først, om sitet skal være uden sporing (og dermed uden samtykkebanner) eller bruge cookies og pixels. Vælges 'uden', skal det dokumenteres og bevises, at der ikke sættes cookies eller lokal lagring. Valget skrives ind i projektets arbejdsregler.",
  "gausta": "Valget skal tages igen, fordi Gausta har tredjepartsindhold (kort, webcam, vejr, booking), som kan sætte cookies uafhængigt af analytics. 'Intet banner' kan kun gælde den offentlige side, hvis alt tredjepartsindhold er blokeret eller kræver et klik.",
  "built": {
   "s": "partial",
   "where": "Webcam bruger youtube-nocookie.com (components/blocks/live/LiveCam.tsx), og sitet sætter kun sprogcookien gl_lang (proxy.ts, lib/i18n.ts). Men components/blocks/press/PressCarousel.tsx skriver til localStorage, og components/shell/SeasonSwitcher.tsx til sessionStorage, så 'ingen lokal lagring' er ikke opfyldt. Ingen dokumentation af posturen (docs/privacy/tracking.md findes ikke) og ingen automatisk test. Ikke kontrolleret i browser."
  },
  "decided": "G10 (kortløsning uden cookies), G11 (privatlivsvurdering åben), G55 (sprogcookien kræver ikke samtykke, men skal stå i cookiepolitikken), G85 (webcam afspilles automatisk).",
  "deps": [
   "N3.4"
  ],
  "open": [
   "Sætter YouTube-feedet (nocookie) stadig cookies eller sender data, når det indlæses automatisk?",
   "Må tema-, sprog- og markedsvalg gemmes i cookie eller localStorage uden samtykke i Danmark og Norge?",
   "Hvilke embeds skal blokeres, bag klik, eller bag samtykke?"
  ],
  "tasks": [
   {
    "id": "B3-0.1",
    "t": "Beslut cookieless-first vs cookies/pixels (fælles med B4)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "beslutningen skal tages igen, jf. tredjepartsembeds (kort, webcam, vejr, booking)"
   },
   {
    "id": "B3-0.2",
    "t": "Skriv posturen ind i repoets definition of done (AGENTS.md)",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B3-1.0",
    "t": "Cookieless-gren: dokumentér hvorfor intet banner; verificér ingen cookie/localStorage (docs/privacy/tracking.md)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "kun gyldig for A (offentlig side), hvis alle embeds er blokeret eller klik-for-at-indlæse"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Hvad der må gemmes uden samtykke, og hvilke embeds der skal blokeres (juridisk).",
  "waits": true
 },
 {
  "id": "N3.2",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Samtykkeløsning og blokering af scripts og embeds",
  "what": "Hvis sitet sætter cookies ud over de strengt nødvendige, skal der være et samtykkebanner, hvor afvis er lige så let som acceptér, uden forhåndsafkrydsning og uden cookie wall. Tilbagekaldelse skal være lige så let, og valget logges. Scripts må først køre efter samtykke.",
  "gausta": "Kun nødvendig, hvis embeds ikke kan holdes cookiefri. Alternativ er 'klik for at indlæse', men om et klik er gyldigt samtykke i Danmark og Norge er et åbent punkt. Også iframes skal gates, ikke kun scripts.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026). Der er ingen samtykkeløsning, og Gausta LIVE indlæses automatisk uden klik (components/blocks/live/LiveCam.tsx, G85)."
  },
  "decided": "G85 (webcam automatisk afspilning), G71 (forholdene lige nu med webcam), G10.",
  "deps": [
   "N3.1"
  ],
  "open": [
   "Skal webcam og andre embeds bag klik-for-at-indlæse eller bag et samtykkebanner?",
   "Hvilken løsning, hvis der skal bygges en (Cookie Information, Cookiebot, Klaro eller selvbygget)?",
   "Er et klik på 'indlæs' gyldigt samtykke efter dansk og norsk praksis?"
  ],
  "tasks": [
   {
    "id": "B3-1.1",
    "t": "Cookie-gren: vælg CMP (Cookie Information/Cookiebot/Klaro/selvbygget), DA/EN",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "sandsynligvis nødvendig hvis embeds sætter cookies; sprog DA/EN, senere NO/DE"
   },
   {
    "id": "B3-1.2",
    "t": "Consent-first og symmetrisk banner, granulært, ingen pre-tick, ingen cookie wall",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "kun hvis CMP bygges"
   },
   {
    "id": "B3-1.3",
    "t": "Tilbagekaldelse lige så let + re-consent + log",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "kun hvis CMP bygges"
   },
   {
    "id": "B3-1.4",
    "t": "Gate scripts via samtykke, integreret med CSP og analytics-init",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "også embeds (iframes) skal gates, ikke kun scripts"
   },
   {
    "id": "B3-6.2",
    "t": "Revidér samtykkelog og re-consent-kadence (hvis CMP)",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "kun hvis CMP"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Samtykkeløsning eller klik-for-at-indlæse (juridisk).",
  "waits": true
 },
 {
  "id": "N3.3",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Databehandlere og aftaler",
  "what": "Et register over alle leverandører, der rører persondata (rolle, hvilke data, hvor de ligger), databehandleraftaler med hver af dem, og for amerikanske leverandører en vurdering af overførselsgrundlag. EU-ejede eller EU-hostede leverandører foretrækkes.",
  "gausta": "Ejeren er privatperson og dataansvarlig. Registeret skal også dække hjemmeserver (UniFi), vejr-, lift- og webcamleverandører, booking og e-mail. Railway er stadig amerikansk moder. A-kasse-argumentet for EU-valg falder væk, men EU er stadig et privatlivsplus.",
  "built": {
   "s": "none",
   "where": "Intet register eller aftaleoverblik fundet i produktionsrepoet. Leverandørerne kan ses i kode og opsætning: Sanity (sanity/), Railway, Cloudflare Turnstile (lib/inquiry/turnstile.ts), Resend, MET Norway og Fnugg (lib/fnugg.ts). Aftaler ikke kontrolleret."
  },
  "decided": "G18 og G29 (nye konti på ejerens Gmail, så Stormpines aftaler genbruges ikke), G34 (Sanity Free, kun offentligt indhold), G30 og G32 (e-mail).",
  "deps": [
   "N3.1"
  ],
  "open": [
   "Skal ejeren selv indgå databehandleraftaler, eller dækker kontoens standardvilkår?",
   "Hvilke leverandører modtager persondata, og hvor ligger de?",
   "Er DPF-grundlaget for amerikanske leverandører stadig holdbart?"
  ],
  "tasks": [
   {
    "id": "B3-2.1",
    "t": "Databehandlerregister (rolle, data, lokation, underdatabehandlere)",
    "prio": "P0",
    "rel": "gaelder",
    "note": "tilføj UniFi/hjemmeserver, vejr/lift/webcam-leverandører, booking, evt. e-mail"
   },
   {
    "id": "B3-2.2",
    "t": "Underskriv/indsaml DPA for hver databehandler",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "privatperson som dataansvarlig; kun relevant hvor persondata deles"
   },
   {
    "id": "B3-2.3",
    "t": "US-databehandlere: DPF-verifikation + 2021-SCC + TIA",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Railway er stadig US-moder; HubSpot sandsynligvis ikke relevant"
   },
   {
    "id": "B3-2.4",
    "t": "Foretræk EU-ejede/hostede leverandører (CLOUD Act)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "a-kasse-argumentet falder bort; EU-valg er stadig et privatlivsplus, men ikke et kanalkrav"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Databehandleraftaler og leverandører uden for EU (juridisk).",
  "waits": true
 },
 {
  "id": "N3.4",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Privatlivs- og cookiepolitik på sitet",
  "what": "Privatlivspolitik og cookiepolitik skal ligge som sider på sitet på alle sprog, med de oplysninger loven kræver (hvem, hvad, hvorfor, hvor længe, rettigheder). Cookiepolitikken skal passe til det, DevTools faktisk viser. Footer og formularer linker til dem.",
  "gausta": "Politikken skal også dække gæsteområdet og back-office, ikke kun henvendelser. 'Ingen cookies' er usandsynligt uden gating af tredjepartsindhold, og sprogcookien gl_lang skal stå i cookiepolitikken. Juridisk review kræves.",
  "built": {
   "s": "partial",
   "where": "Sanity-skemaet har en tekstblok til siderne Privatliv og Cookies (sanity/schemaTypes/blocks/textSection.ts), og footer-dokumentet linker de juridiske sider (sanity/schemaTypes/documents/footer.ts, Footer.tsx). Om der ligger udgivet indhold i Sanity, er ikke kontrolleret. Formularen har ingen synlig privatlivstekst i koden, og INQUIRY_ENABLED er slået fra, til GDPR-tekst er klar (app/[locale]/inquiry/actions.ts)."
  },
  "decided": "G42 (footer: Kontakt, Privatliv, Cookies, Vilkår kun i footeren), G55 (sprogcookie i cookiepolitikken), G11 (privatlivsvurdering åben), G16 (oplysningstekst til gæster åben).",
  "deps": [
   "N3.1",
   "N3.3"
  ],
  "open": [
   "Hvem skal gennemgå politikkerne juridisk (dansk og norsk kompetence)?",
   "Skal ejeren oplyse navn og adresse på sitet som privatperson?",
   "Hvornår skal sproget NO og DE have egne versioner?"
  ],
  "tasks": [
   {
    "id": "B3-3.1",
    "t": "Privatlivs- og cookiepolitik som lokaliserede Sanity-dokumenter via [slug]-route",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "sprog DA (/), EN (/en), senere NO/DE; ruter på dansk/norsk"
   },
   {
    "id": "B3-3.2",
    "t": "Privatlivspolitikkens Art 13-indhold, juridisk review",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dækker også gæsteområde og back-office, ikke kun leads"
   },
   {
    "id": "B3-3.3",
    "t": "Cookiepolitik: tabel eller ærlig 'ingen cookies'-erklæring, matchet mod DevTools",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "tredjepartsembeds gør 'ingen cookies' usandsynlig uden gating"
   },
   {
    "id": "B3-3.4",
    "t": "Footer- og formularlinks til begge politikker + prefs-link",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Hvem gennemgår politikkerne juridisk, og om dit navn og din adresse skal stå på sitet.",
  "waits": true
 },
 {
  "id": "N3.5",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Rettigheder og opbevaring af persondata",
  "what": "En postkasse og en proces til at svare på anmodninger om indsigt, rettelse og sletning inden en måned. Og en plan for, hvor længe hver slags data gemmes, med noget der faktisk håndhæver sletningen.",
  "gausta": "Enkel ejer-postkasse. Gæstedata og dørsensorlogs (UniFi) skal med i opslag og opbevaringsplan.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026). Formularkoden gemmer intet ud over selve mailen og logger ingen persondata (app/[locale]/inquiry/actions.ts), hvilket gør opbevaring simpel for henvendelser."
  },
  "decided": "G16 (oplysningstekst til gæster og sensorer, åben), G11.",
  "deps": [
   "N3.3"
  ],
  "open": [
   "Hvilken adresse bruges til anmodninger om indsigt og sletning?",
   "Hvor længe må dørsensorlogs og gæstedata gemmes?"
  ],
  "tasks": [
   {
    "id": "B3-4.1",
    "t": "privacy@-postkasse + DSAR-proces (1 måneds SLA)",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "enkelt ejer-postkasse; gæstedata og sensorlogs skal med i opslaget"
   },
   {
    "id": "B3-4.2",
    "t": "Opbevaringsplan pr. kategori + håndhævelse",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "tilføj gæstedata og dørsensorlogs (UniFi)"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Kontaktadresse til indsigt og sletning, og hvor længe data må gemmes.",
  "waits": true
 },
 {
  "id": "N3.6",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Fortegnelse over behandlinger (let ROPA)",
  "what": "En kort oversigt over, hvilke persondata der behandles, til hvad, med hvilket grundlag og hvem der modtager dem. Loven kræver den i mange tilfælde, og den er også en god arbejdsliste.",
  "gausta": "En privatperson kan i visse tilfælde være undtaget, men en let version anbefales alligevel. Om undtagelsen gælder, er et åbent punkt til juridisk review.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026)."
  },
  "deps": [
   "N3.3"
  ],
  "open": [
   "Skal en privatperson føre en fortegnelse efter artikel 30, eller er en let intern oversigt nok?"
  ],
  "tasks": [
   {
    "id": "B3-5.1",
    "t": "Let ROPA (Art 30)",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "privatperson kan have undtagelse fra Art 30-pligt i visse tilfælde (Åbent punkt, juridisk review), men en let ROPA anbefales alligevel"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Om du som privatperson skal føre en fortegnelse efter artikel 30.",
  "waits": true
 },
 {
  "id": "N3.7",
  "g": "N3",
  "status": "open",
  "rel": "tilpasses",
  "title": "Løbende kontrol af cookies og politikker",
  "what": "En automatisk test eller et periodisk scan, der opdager nye cookies og sporere, og en fast gennemgang af politikker og registre.",
  "gausta": "Pga. tredjepartsembeds er cookie-testen vigtig. Ejeren er én person, så den faste gennemgang erstatter Stormpines governance (B10), som ikke findes her.",
  "built": {
   "s": "none",
   "where": "CI kører typecheck, enhedstests, kontrast, skemavalidering og build (.github/workflows/ci.yml), men ingen cookie- eller trackertest. tests/ indeholder ingen Playwright-test."
  },
  "deps": [
   "N3.1"
  ],
  "open": [
   "Skal cookie-testen køre i CI for hvert sprog og hver årstid?",
   "Hvor ofte skal politikker og registre gennemgås?"
  ],
  "tasks": [
   {
    "id": "B3-6.1",
    "t": "Periodisk cookie-/tracker-scan eller CI-check",
    "prio": "P2",
    "rel": "gaelder",
    "note": "især pga. tredjepartsembeds (Playwright-test kan tjekke cookies)"
   },
   {
    "id": "B3-6.3",
    "t": "Politik- og registergennemgang med ejer + interval (B10)",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "ejeren er én person; B10-governance findes ikke i Gausta"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). Hvor ofte politikker gennemgås.",
  "waits": true
 },
 {
  "id": "N3.8",
  "g": "N3",
  "status": "approved",
  "rel": "ikke",
  "title": "Compliance-oplæg til a-kasser og fagforeninger",
  "what": "Et en-sides dokument, der forklarer sitets privatlivs- og sikkerhedsopsætning over for professionelle købere.",
  "gausta": "Kernen kan genbruges som intern oversigt eller kort privatlivsnote til gæster.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "B3-5.2",
    "t": "Compliance-one-pager til a-kasse/fagforenings-købere",
    "prio": "P1",
    "rel": "ikke",
    "note": "ikke relevant som salgsdokument; kernen genbruges som intern oversigt eller gæstevendt privatlivsnote"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "N4.1",
  "g": "N4",
  "status": "open",
  "rel": "tilpasses",
  "title": "Valg af analyseværktøj og opsætning",
  "what": "Et værktøj til at måle besøg uden cookies. Stormpine valgte selvhostet Matomo med egen database, en tjeneste der skal drives og passes.",
  "gausta": "Ejeren har lidt driftstid, så en administreret EU-tjeneste (fx Plausible) eller slet ingen analytics er mulige alternativer. Det er en vurdering, ikke en beslutning.",
  "built": {
   "s": "none",
   "where": "Intet analytics-script eller analytics-host findes i produktionsrepoet (ingen spor i components/, app/ eller content security policy i next.config.ts)."
  },
  "decided": "G12 (Matomo cookieless, egen eller delt instans) står i registret, men er ikke afgjort i praksis. Ejeren har valgt d8a (open source, kompatibel med GA4 og Matomo, gemmer i bl.a. ClickHouse), installeret på hjemmeserveren (ejerens svar 18. oktober 2026). Dermed er Plausible og Matomo fravalgt.",
  "deps": [
   "N3.1"
  ],
  "open": [
   "Plausible EU-cloud, selvhostet Matomo eller ingen analytics? (Kilden har en konflikt: researchen anbefaler Plausible, planen følger Matomo.)",
   "Hvad er budgettet og forventet trafik?",
   "Skal der være en ny konto adskilt fra Stormpines?"
  ],
  "tasks": [
   {
    "id": "B4-0.1",
    "t": "Deploy Matomo (officielt Docker-image) + managed MySQL/MariaDB som egne Railway-tjenester i EU-region med persistent volume, HTTPS-domæne, installationsguide, Site ID",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "kun hvis selvhostet Matomo vælges; for en privat feriebolig kan Plausible-cloud eller ingen analytics være bedre"
   }
  ],
  "needs": "Værktøjet er valgt (d8a). Tilbage: hvordan målingerne kommer hjem, uden at sitet afhænger af hjemmeserveren (N19). Se Claudes anbefaling.",
  "rec": "Anbefaling: målinger sendes med navigator.sendBeacon (fire og glem), så sitet aldrig venter på svar, og hvis hjemmeserveren er nede, mistes kun målinger, aldrig sider. To veje: (A) direkte til d8a bag Cloudflare Tunnel, med en bevidst og dokumenteret undtagelse fra N19 for måling alene; (B) til et lille endpoint på sitet, som lægger målingerne i kø hos Railway, og hjemmeserveren henter dem (\"hjemmet henter udefra\", i tråd med N19). B passer til reglen, men kræver lidt lager og er lidt mere at bygge. Jeg anbefaler B, hvis du vil holde N19 uden undtagelse, ellers A. Hvilken vil du have? Bemærk også: d8as dokumentation, jeg kunne læse, siger intet om cookies, IP-håndtering og samtykke, så det skal undersøges, før tallet \"ingen banner\" lægges til grund (N3.1)."
 },
 {
  "id": "N4.2",
  "g": "N4",
  "status": "open",
  "rel": "gaelder",
  "title": "Privatlivshærdning af målingen",
  "what": "Målingen skal køre uden cookie og lokal lagring, med forkortede IP-adresser, anonyme referrers, respekt for Do-Not-Track og uden bruger-id. Der skal være bevis for, at det ikke udløser et samtykkebanner.",
  "gausta": "Princippet gælder uændret. Pakken til a-kasser er ikke relevant. Norsk praksis for cookiefri måling er ikke vurderet.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026)."
  },
  "decided": "G12. Ejeren har valgt d8a (open source, kompatibel med GA4 og Matomo, gemmer i bl.a. ClickHouse), installeret på hjemmeserveren (ejerens svar 18. oktober 2026). Dermed er Plausible og Matomo fravalgt.",
  "deps": [
   "N4.1",
   "N3.1"
  ],
  "open": [
   "Opfylder opsætningen også norsk praksis for 'intet samtykke'?"
  ],
  "tasks": [
   {
    "id": "B4-1.1",
    "t": "Privacy-hærdning: disableCookies, IP-anonymisering min. 2 oktetter, anonymiserede referrers, Do-Not-Track, ingen userId/PII, kort log-retention; bevis (skærmbillede) for 'ingen banner'",
    "prio": "P0",
    "rel": "gaelder",
    "note": "princip; pakken til a-kasser er ikke relevant"
   }
  ],
  "needs": "Følger valget af målevej (N4.1), og for N4.2 hvad d8a gør ved IP og cookies."
 },
 {
  "id": "N4.3",
  "g": "N4",
  "status": "open",
  "rel": "gaelder",
  "title": "Målescript i sitet",
  "what": "En lille komponent, der indlæser målescriptet asynkront, tæller sidevisninger ved sideskift og slet ikke renderer noget, hvis opsætningen mangler. Et udfald af målingen må aldrig bryde siden.",
  "gausta": "Gælder kun den offentlige side. Ikke i gæsteområdet og ikke i back-office. Test-trafik og ejerens egne besøg skal holdes ude af tallene.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026)."
  },
  "deps": [
   "N4.1",
   "N4.2"
  ],
  "open": [
   "Skal ejerens og testmiljøets trafik ekskluderes, og hvordan?"
  ],
  "tasks": [
   {
    "id": "B4-2.1",
    "t": "Analytics-komponent med next/script, SPA-rutetracking, env-styret, ingen render hvis ikke sat",
    "prio": "P0",
    "rel": "gaelder",
    "note": "gælder kun flade A; ikke i gæsteområde (B) og back-office (C)"
   }
  ],
  "needs": "Følger valget af målevej (N4.1), og for N4.2 hvad d8a gør ved IP og cookies.",
  "decided": "Ejeren har valgt d8a (open source, kompatibel med GA4 og Matomo, gemmer i bl.a. ClickHouse), installeret på hjemmeserveren (ejerens svar 18. oktober 2026). Dermed er Plausible og Matomo fravalgt."
 },
 {
  "id": "N4.4",
  "g": "N4",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Mål, kampagner og klik til booking",
  "what": "Hvad der tæller som succes (mål), hvordan kampagnekilder (UTM) læses, og hvordan en besøgende følges fra sitet over til en booking på et andet domæne.",
  "gausta": "Mål bliver forespørgsel og klik til booking, ikke SaaS-tilmelding. Opdelingen mellem forbruger og virksomhed er ikke relevant. Hvad der kan måles, afhænger af bookingmodellen (operatør, egen eller Airbnb).",
  "built": {
   "s": "none",
   "where": "Forespørgselsformularen findes (components/InquiryForm.tsx, app/[locale]/inquiry/), men er slået fra, og der er ingen målehændelser eller UTM-håndtering i koden."
  },
  "decided": "G1 (bookingmodel, åben), G61 og G64 (forespørgselsformular). Booking sker via gausta.com, men aftalen er ikke på plads endnu. Indtil da henvises til forespørgselsformularen og mail til ejeren (ejerens svar 18. oktober 2026).",
  "deps": [
   "N4.1"
  ],
  "open": [
   "Hvilke mål er konvertering under den valgte bookingmodel?",
   "Kan kilden følges med over til Airbnb eller operatør, eller kun første kontakt og klik ud?"
  ],
  "tasks": [
   {
    "id": "B4-3.1",
    "t": "UTM-mapping, Goals (CTA-klik-ud, prissidevisning), trackEvent, UTM-konvention, B2C/B2B-split i docs/analytics.md",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "mål bliver 'forespørgsel/klik til booking', sprog, kampagnekilde; B2C/B2B-split ikke relevant"
   },
   {
    "id": "B4-4.1",
    "t": "Cross-domain tilmeldingsattribution marketing til produktapp",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "analogt til klik-ud til bookingplatform (Airbnb/operatør/egen); afhænger af bookingmodel"
   }
  ],
  "appr": "Målet er afklaret af bookingbeslutningen: indtil aftalen med gausta.com er på plads, er konverteringen en sendt forespørgsel via formularen eller en mail til ejeren. Klik ud til gausta.com tilføjes, når aftalen er på plads."
 },
 {
  "id": "N4.5",
  "g": "N4",
  "status": "open",
  "rel": "gaelder",
  "title": "Sikkerhed omkring målingen",
  "what": "Målehosten skal tillades i content security policy, køre på HTTPS med HSTS, og en eventuel admin-del skal have 2FA og holdes opdateret.",
  "gausta": "CSP-delen gælder for den valgte host. Admin-delen er kun relevant ved selvhost.",
  "built": {
   "s": "partial",
   "where": "CSP er sat op i next.config.ts, men indeholder ingen analytics-host (tilføjes, når værktøjet er valgt). Ingen admin at hærde, da intet er rullet ud."
  },
  "deps": [
   "N4.1"
  ],
  "open": [],
  "tasks": [
   {
    "id": "B4-5.1",
    "t": "Matomo-host i CSP; HTTPS + HSTS; admin 2FA/patching",
    "prio": "P1",
    "rel": "gaelder",
    "note": "CSP-del for valgt analytics-host; admin-del kun ved selvhost"
   }
  ],
  "needs": "Følger valget af målevej (N4.1), og for N4.2 hvad d8a gør ved IP og cookies.",
  "decided": "Ejeren har valgt d8a (open source, kompatibel med GA4 og Matomo, gemmer i bl.a. ClickHouse), installeret på hjemmeserveren (ejerens svar 18. oktober 2026). Dermed er Plausible og Matomo fravalgt."
 },
 {
  "id": "N4.6",
  "g": "N4",
  "status": "open",
  "rel": "tilpasses",
  "title": "Drift af analytics",
  "what": "Backups af databasen, faste opdateringer, et dashboard og en regel om, at målingen aldrig må tage sitet ned.",
  "gausta": "Backup og patching gælder kun ved selvhost. Reglen om, at målingen aldrig må blokere siden, gælder altid.",
  "built": {
   "s": "none",
   "where": "Ingen kode eller opsætning fundet i produktionsrepoet (18. oktober 2026)."
  },
  "deps": [
   "N4.1"
  ],
  "open": [
   "Er selvhost realistisk i forhold til ejerens tid?"
  ],
  "tasks": [
   {
    "id": "B4-6.1",
    "t": "Drift: MySQL-backups, patch-kadence, B2C/B2B-dashboard, tracking-udfald må ikke bryde sitet",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "kun ved selvhost; 'må aldrig blokere siden' gælder altid"
   }
  ],
  "needs": "Følger valget af målevej (N4.1), og for N4.2 hvad d8a gør ved IP og cookies.",
  "decided": "Ejeren har valgt d8a (open source, kompatibel med GA4 og Matomo, gemmer i bl.a. ClickHouse), installeret på hjemmeserveren (ejerens svar 18. oktober 2026). Dermed er Plausible og Matomo fravalgt."
 },
 {
  "id": "N5.1",
  "g": "N5",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Metadata, titler og SEO-model i Sanity",
  "what": "Grundlaget for alle sider: et fast basisdomæne, en titelskabelon, en standard for delekort og et SEO-felt i Sanity med titel, beskrivelse og billede pr. sprog. Hver side får canonical-adresse og hreflang (sprogvarianter, der peger på hinanden) genereret fra Sanity, og metadata skal ligge i HTML'ens head ved første byte.",
  "gausta": "Samme fundament, men nye værdier: sprogene er engelsk, dansk, norsk og svensk. Der skal findes et noIndex-felt, så gæsteområdet kan holdes ude af søgning.",
  "built": {
   "s": "partial",
   "where": "app/[locale]/layout.tsx har metadataBase og titelskabelon (men robots index:false indtil lancering). sanity/schemaTypes/objects/seo.ts har titel, beskrivelse og delebillede pr. sprog, og settings.ts har defaultSeo. app/[locale]/[[...slug]]/page.tsx sætter canonical og hreflang med x-default. Mangler: noIndex-felt, standard-OG i layoutet, metadata.verification. Fallback til sideindstillingernes standard er ikke kontrolleret i generateMetadata. Streaming-metadata (OG i head ved første byte) er ikke kontrolleret."
  },
  "decided": "G52 (engelsk på /, dansk /da, norsk /no, svensk /sv, x-default på /), G56 (oversættelse pr. felt), G59 (URL-navne pr. sprog).",
  "deps": [],
  "open": [
   "Skal x-default blive på engelsk (G52, og sådan er koden), når kravfilens tilpasningsafsnit siger dansk? Kildekonflikten er bevaret: G52 afløste G6 den 11. oktober 2026.",
   "Skal norsk bruge nb-NO eller no som sprogkode (koden bruger nb)?",
   "Hvordan sikres, at OG-tags står i head ved første byte (statisk metadata frem for streamet generateMetadata)?"
  ],
  "tasks": [
   {
    "id": "B5-0.1",
    "t": "metadataBase, titelskabelon og standard OG/Twitter i app/layout.tsx",
    "prio": "P0",
    "rel": "gaelder",
    "note": "brandnavn og sprog ændres"
   },
   {
    "id": "B5-0.2",
    "t": "Sanity seo-objekt (metaTitle, metaDescription, ogImage, noIndex) og seoSettings-singleton",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "noIndex bliver kritisk for gæsteområdet; flere sprog"
   },
   {
    "id": "B5-0.3",
    "t": "Læs seo-felter i metadata; canonical og hreflang fra sprogkort",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "retningen af x-default afhænger af beslutningen om standardsprog"
   }
  ],
  "appr": "G52 afgør sprogstrukturen. Resten er teknisk metadata."
 },
 {
  "id": "N5.2",
  "g": "N5",
  "status": "open",
  "rel": "tilpasses",
  "title": "Robots og sitemap",
  "what": "robots.txt styrer, hvad crawlere må hente, og sitemap.xml lister alle sider med sprogalternativer og ændringsdato. Studio og kladderuter spærres, og AI-søgecrawlere tillades bevidst.",
  "gausta": "Spær også gæsteområde og back-office og alle API-ruter. Sitemap omfatter kun den offentlige del. Valget af AI-crawlere (søge og svar kontra træning) skal tages bevidst.",
  "built": {
   "s": "partial",
   "where": "app/robots.ts findes, men er en pladsholder med Disallow på alt indtil lancering. next.config.ts sætter X-Robots-Tag noindex, nofollow på alle sider. app/sitemap.ts findes ikke. Ifølge teknisk/domaene-og-dns-setup.md afsnit om lancering fjernes noindex i kode ved lancering."
  },
  "decided": "Noindex indtil lancering (domæne- og byggedokumentation).",
  "deps": [
   "N5.1"
  ],
  "open": [
   "Hvilke AI-crawlere skal tillades, og skal træningscrawlere (GPTBot, Google-Extended) blokeres?",
   "Skal gæsteområdets adresse være gættesikker, eller er noindex nok? Husk at Disallow alene ikke forhindrer indeksering, og at en spærret side ikke kan vise sit noindex-tag."
  ],
  "tasks": [
   {
    "id": "B5-1.1",
    "t": "robots.ts: tillad site og sprogmapper, forbyd studio og preview, tillad AI-crawlere, Sitemap-link",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "forbyd også gæsteområde og back-office; AI-crawler-valg skal omvurderes"
   },
   {
    "id": "B5-1.2",
    "t": "sitemap.ts fra Sanity med lastModified og sprogalternativer",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "kun offentlig del; gæsteområde udelades"
   }
  ],
  "needs": "Om AI-træningscrawlere skal blokeres."
 },
 {
  "id": "N5.3",
  "g": "N5",
  "status": "approved",
  "rel": "gaelder",
  "title": "Search Console og Bing Webmaster",
  "what": "Sitet registreres hos Googles Search Console og Bings Webmaster Tools, så man kan se, hvad der faktisk er indekseret, og hvilke fejl der er. Ejerskab bekræftes via DNS eller en meta-tag.",
  "gausta": "Gælder uændret. Kræver, at ejeren selv bekræfter ejerskabet.",
  "built": {
   "s": "none",
   "where": "Intet fundet i produktionsrepoet (ingen metadata.verification) og intet i teknisk/domaene-og-dns-setup.md. Ejerens trin, ikke kontrolleret i selve tjenesterne."
  },
  "deps": [
   "N5.1"
  ],
  "open": [
   "Hvornår skal ejerskabet bekræftes: før eller ved lancering?"
  ],
  "tasks": [
   {
    "id": "B5-1.3",
    "t": "Search Console og Bing Webmaster, metadata.verification",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N5.4",
  "g": "N5",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Struktureret data (schema.org)",
  "what": "Maskinlæsbar markup (JSON-LD), der fortæller søgemaskiner og AI, hvad siden handler om: virksomhed eller sted, brødkrummer, artikler og spørgsmål med svar. Markup må kun beskrive det, der er synligt på siden.",
  "gausta": "Stormpines softwaretyper gælder ikke. Brug i stedet typer for overnatning (fx VacationRental eller LodgingBusiness), kun hvis der er en ægte pris eller bedømmelse synlig. Ejeren er privatperson, så der må ikke opfindes en organisation.",
  "built": {
   "s": "partial",
   "where": "components/blocks/FaqSection.tsx udsender FAQPage JSON-LD pr. sprog (G43). Organization/WebSite, overnatningstyper og BreadcrumbList findes ikke. Ikke valideret i Rich Results Test."
  },
  "decided": "G43 (FAQ godkendt, FAQPage JSON-LD bevares).",
  "deps": [
   "N5.1"
  ],
  "open": [
   "Er VacationRental eller LodgingBusiness rigtig hovedtype for én privat lejlighed uden onlinebooking? Skal valideres i Googles Rich Results Test.",
   "Hvornår kan Offer og pris tilføjes, når bookingmodellen ikke er afgjort?"
  ],
  "tasks": [
   {
    "id": "B5-2.1",
    "t": "JSON-LD Organization og WebSite i root layout fra seoSettings",
    "prio": "P0/P1",
    "rel": "tilpasses",
    "note": "privatperson, ikke virksomhed"
   },
   {
    "id": "B5-2.2",
    "t": "Per-side JSON-LD: SoftwareApplication+Offer, BreadcrumbList, Article+author",
    "prio": "P0/P1",
    "rel": "tilpasses",
    "note": "SoftwareApplication gælder ikke; overnatningstyper i stedet; Breadcrumb og Article kan bruges"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N5.5",
  "g": "N5",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Delekort (Open Graph og Twitter-kort)",
  "what": "Når et link deles, vises et kort med titel, tekst og billede (1200 x 630). Kortet skal være rigtigt, før linket deles første gang, fordi tjenesterne cacher det hårdt. Kort pr. side kan genereres automatisk.",
  "gausta": "Facebook, Messenger og WhatsApp er vigtigere end LinkedIn, så test i Facebooks Sharing Debugger. Kortet må ikke afhænge af den valgte årstid. Udvælg fotos, under ca. 1 MB.",
  "built": {
   "s": "partial",
   "where": "app/[locale]/[[...slug]]/page.tsx sætter openGraph (titel, beskrivelse, locale, billede 1200 x 630 fra seo.shareImage). Mangler: twitter:card, og:site_name, standardbillede som fallback i layoutet og opengraph-image.tsx. Ikke testet i delingsværktøjer."
  },
  "deps": [
   "N5.1"
  ],
  "open": [
   "Skal Facebook være primær delingskanal, og hvordan testes kortene, mens hele sitet er noindex?"
  ],
  "tasks": [
   {
    "id": "B5-3.1",
    "t": "Standard OG-billede og twitter.card = summary_large_image",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B5-3.2",
    "t": "Dynamisk OG via opengraph-image.tsx pr. side og sprog; test i delingsværktøj før deling",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Facebook/Messenger vigtigere end LinkedIn; fotodrevne kort; fire årstidsprofiler"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N5.6",
  "g": "N5",
  "status": "open",
  "rel": "tilpasses",
  "title": "URL-politik, redirects og sprogforslag",
  "what": "Én foretrukken adresse pr. side: fast regel for skråstreg til sidst, permanente omdirigeringer uden kæder, og ingen tvungen omdirigering ud fra land eller IP-adresse. Sproget foreslås i stedet via hreflang og et afvisbart forslag.",
  "gausta": "Der er ingen prototype at migrere. Retningen af sprogforslaget vendes: engelsk er standard, og dansk, norsk eller svensk foreslås. Statiske redirects i konfigurationen er nok, med mindre redaktørstyrede viser sig nødvendige.",
  "built": {
   "s": "partial",
   "where": "next.config.ts har permanent (308) redirect fra www til rod-domænet. proxy.ts sender /en/... permanent (308) til stien uden /en, og omdirigerer kun forsiden ved første besøg efter Accept-Language, aldrig robotter, med sprogcookie (G52, G55). Ingen trailingSlash-politik sat i next.config.ts (Next' standard gælder, ikke bekræftet). Ingen afvisbart sprogforslag og ingen Sanity-styrede redirects."
  },
  "decided": "G52 (sprogregistrering ved første besøg, ikke for robotter), G55 (sprogcookie uden samtykke), G59 (ændres et URL-navn efter lancering, omdirigeres den gamle adresse).",
  "deps": [
   "N5.1"
  ],
  "open": [
   "Findes der eksisterende URL'er eller et gammelt domæne, der skal omdirigeres?",
   "Er en automatisk omdirigering ud fra browserens sprog (G52) i orden, når kravet foreslår et afvisbart forslag i stedet? Kildekonflikten er bevaret.",
   "Skal Sanity-styrede redirects og en fast skråstregsregel bygges, eller er statiske redirects nok? Bekræft Next 16 trailingSlash før låsning."
  ],
  "tasks": [
   {
    "id": "B5-4.1",
    "t": "Én trailing-slash-politik, håndhævet",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B5-4.2",
    "t": "Redirect-kort (GitHub Pages til prod) og Sanity-styrede redirects i middleware",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "ingen prototype at migrere; redaktørstyrede redirects kun hvis behov, ellers statiske"
   },
   {
    "id": "B5-4.3",
    "t": "Dansk lancering: hreflang og afvisbart sprogforslag, ingen geo/IP-redirect",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "princippet gælder; retningen flipper: engelsk/dansk standard, andre sprog foreslås"
   }
  ],
  "needs": "Om der findes gamle adresser, og om automatisk sprogomdirigering (G52) skal ændres til et afvisbart forslag."
 },
 {
  "id": "N5.7",
  "g": "N5",
  "status": "open",
  "rel": "tilpasses",
  "title": "Indholdskvalitet, overskrifter og sprogkontrol",
  "what": "Søgning belønner indhold, der viser egen erfaring: overskriftshierarki, alt-tekst, forfatter og dato, og modersmålskontrol før en oversættelse udgives. Interne links modelleres som redaktionelle referencer.",
  "gausta": "Dansk er ejerens eget sprog. Kontrol af modersmål gælder de oversatte sprog (engelsk, norsk, svensk). Byline kun ved guides. Indholdsklynger handler om Gaustatoppen, Rjukan og årstider, ikke om software.",
  "built": {
   "s": "partial",
   "where": "sanity/schemaTypes/objects/imageWithAlt.ts kræver alt-tekst på lanceringssprogene (requireLocales), uden dekorativ-toggle. sanity/schemaTypes/objects/simpleBlockContent.ts tillader kun afsnit, så redaktøren ikke kan lave overskrifter. En side findes kun på et sprog, når titlen er udfyldt (G56, page.tsx), men det er ikke en nativeReviewed-gate med noindex. Ingen author-type, ingen Opdateret-dato, ingen klynge-/internlink-model fundet."
  },
  "decided": "G56 (sprog findes, når felterne er udfyldt).",
  "deps": [
   "N5.1"
  ],
  "open": [
   "Skal der være en nativeReviewed-gate for engelsk, norsk og svensk, og skal uredigerede sider være noindex?",
   "Skal der publiceres guides med forfatter, eller er Opdateret-dato på lokalsider nok?",
   "Hvilke søgeord bruges på dansk og norsk? Der er ingen søgeordsundersøgelse endnu."
  ],
  "tasks": [
   {
    "id": "B5-5.1",
    "t": "Håndhæv overskriftshierarki og påkrævet alt i Portable Text og billedskemaer",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B5-5.2",
    "t": "Author-type og byline-komponent; synlig Last updated",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "byline kun hvis der er blog/guides; Opdateret-dato nyttig til lokalguider"
   },
   {
    "id": "B5-5.3",
    "t": "nativeReviewed-gate: ikke-reviewede dokumenter er noindex og ude af sitemap",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "gælder de oversatte sprog, ikke dansk"
   },
   {
    "id": "B5-5.4",
    "t": "Pillar-plus-cluster-model og redaktionelle interne-link-referencer",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "omvurderes: lokale klynger om Gaustatoppen/Rjukan frem for software"
   }
  ],
  "needs": "Søgeord og om engelsk, norsk og svensk skal gennemgås af en person, før de offentliggøres."
 },
 {
  "id": "N5.8",
  "g": "N5",
  "status": "open",
  "rel": "tilpasses",
  "title": "Hurtig opdagelse og måling",
  "what": "IndexNow giver Bing besked om nye sider ved udgivelse. Måling af besøg fra søgning og AI kræver en analyseløsning, der overholder privatlivsreglerne.",
  "gausta": "Lav prioritet: kun Bing har gavn af IndexNow. Analyse skal være cookiefri og EU-hostet (Matomo er valgt i G12); GA4 er ikke påkrævet.",
  "built": {
   "s": "none",
   "where": "Ingen IndexNow-kode og ingen analysekode fundet i produktionsrepoet (søgt efter Matomo, Plausible og Google-tags). Matomo cookieless er kun et beslutningsvalg (G12) ifølge teknisk/beslutningsregister.md."
  },
  "decided": "G12 (Matomo cookieless).",
  "deps": [
   "N5.2"
  ],
  "open": [
   "Er IndexNow værd at bygge for én ejer?",
   "Hvilken analyseleverandør tages i brug, og kan samtykkebanner undgås med cookiefri analyse (juridisk afklaring, G11)?"
  ],
  "tasks": [
   {
    "id": "B5-6.1",
    "t": "IndexNow-ping ved Sanity-publicering (webhook og nøglefil)",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "lav prioritet; kun Bing-gavn; nøglefilen er ikke en hemmelighed men dokumentér den"
   },
   {
    "id": "B5-6.2",
    "t": "Analytics (krydsref. B4): EU-hostet cookieless, consent-gated; GA4 AI-kanal hvis GA4",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "privatperson, GDPR; vælg cookieløs analyse; GA4 er ikke påkrævet"
   }
  ],
  "needs": "Valg af analyse og om IndexNow er værd at bygge."
 },
 {
  "id": "N5.9",
  "g": "N5",
  "status": "approved",
  "rel": "ikke",
  "title": "llms.txt",
  "what": "En frivillig tekstfil, der skal hjælpe AI med at forstå sitet. Den er kun et forslag, ikke en standard, og der er ingen dokumenteret effekt.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "B5-6.3",
    "t": "Valgfri /llms.txt fra Sanity-indeks",
    "prio": "P2",
    "rel": "ikke",
    "note": "ubevist gavn; kan udskydes helt"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "N6.1",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Farvekontrast i alle årstider",
  "what": "Al tekst skal have mindst 4,5 til 1 i kontrast mod sin baggrund (stor tekst 3 til 1), ellers er den svær at læse. Kontrasten skal sikres i selve designtokens og kontrolleres automatisk, ikke først bagefter.",
  "gausta": "Kravfilen taler om otte kombinationer (fire årstider i lys og mørk), men G20 fjernede mørk tilstand, så der er fire paletter. Sæsonaccenter bør bruges til flader, og en mørkere separat farve til lille tekst.",
  "built": {
   "s": "partial",
   "where": "scripts/contrast.mjs tjekker farvepar i styles/tokens.css for alle fire årstider, og .github/workflows/ci.yml kører pnpm contrast. Ifølge teknisk/byggeplan.md består 76 af 76 par (ikke genkørt her). Fokusringen ligger ifølge samme fil på 4,17 til 4,52 mod kravet 3. Primærknappens hover og tekst over fotos og video er ikke målt. Axe-regel for color-contrast i browser findes ikke, da axe ikke kører endnu."
  },
  "decided": "G20 (ingen mørk tilstand). Kontrast i fire årstider står i byggeplanens krav.",
  "deps": [],
  "open": [
   "Kildekonflikt: kravfilen angiver otte kombinationer, men mørk tilstand er fjernet (G20). Bekræft fire paletter som testmatrix.",
   "Hvordan sikres kontrast for tekst over foto og video (overlay, gradient eller ensfarvet flade)?",
   "Skal kontrasttokens valideres ved hvert build (det gøres allerede for paletterne)?"
  ],
  "tasks": [
   {
    "id": "B6-0.1",
    "t": "Hæv --faint til AA i begge temaer og ret --accent til lille tekst i lyst; kræver godkendelse og ejerskab for synk med produktapp",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "gælder for alle otte kombinationer, ikke to; ingen produktapp at synkronisere"
   },
   {
    "id": "B6-0.2",
    "t": "Fjern disableRules(['color-contrast'])-udeladelsen i smoke-testen når tokens består",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "aldrig udelad reglen fra start; krav fra dag ét"
   }
  ],
  "appr": "G20 afgør, at der er fire paletter, og kontrasttjekket findes i CI."
 },
 {
  "id": "N6.2",
  "g": "N6",
  "status": "approved",
  "rel": "gaelder",
  "title": "Skip-link, synligt fokus og overskrifter",
  "what": "Tastaturbrugere skal kunne springe navigationen over, altid se, hvor fokus er, og møde en logisk overskriftsrækkefølge med præcis én h1 pr. side.",
  "gausta": "Gælder uændret.",
  "built": {
   "s": "partial",
   "where": "Skip-link i components/shell/Header.tsx med stil i styles/shell.css. Global :focus-visible-ring i styles/base.css. Siden viser h1 enten fra hero (components/blocks/HeroSection.tsx, første blok) eller fra sidens titel (page.tsx). Målet #main er en div i app/[locale]/layout.tsx, ikke selve main-elementet. Ingen automatisk test for én h1 pr. side."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "B6-1.1",
    "t": "Skip-to-content-link og id på <main>",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B6-1.2",
    "t": "Konsistent :focus-visible-ring på alle interaktive elementer",
    "prio": "P0",
    "rel": "gaelder",
    "note": "kontrast på fokusring i alle otte kombinationer"
   },
   {
    "id": "B6-1.4",
    "t": "Præcis én h1 pr. side og logisk overskriftsrækkefølge",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N6.3",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Reduceret bevægelse",
  "what": "Brugere, der har slået bevægelse fra i systemet, skal ikke se animationer, parallax eller automatisk afspilning. Ikke-essentiel bevægelse skal kunne undgås.",
  "gausta": "Gælder video, hover-forhåndsvisning, kortzoom og årstidsanimationer. Video bør have pause-kontrol og stillbillede.",
  "built": {
   "s": "partial",
   "where": "prefers-reduced-motion er håndteret i styles/base.css (reveal, scroll), styles/elements/gallery.css, plan.css og skiinout.css, og i components/blocks/area/AreaMap.tsx og hike/HikeMap.tsx (kortzoom). Ikke kontrolleret: lydløs forhåndsvisning af video ved hover, hero-grafik, pause-kontrol og undertekster på video."
  },
  "decided": "G82 og G84 (video med lydløs forhåndsvisning ved hover, klik åbner fuld visning).",
  "deps": [],
  "open": [
   "Skal videoer have synlig pause-kontrol og undertekster (WCAG 2.2.2 og 1.2.x genbekræftes)?"
  ],
  "tasks": [
   {
    "id": "B6-1.3",
    "t": "Fuld prefers-reduced-motion-dækning for hero (partikler, event-fades)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "gælder video, parallax, sæsonanimationer, autoplay"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N6.4",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Navigation og kontroller med tastatur",
  "what": "Menu, årstidsvælger, sprogvælger og mobilmenu skal kunne bruges med tastatur og skærmlæser: åbne ved fokus, lukke med Escape og fortælle deres tilstand.",
  "gausta": "Enklere navigation end en mega-menu er lettere at gøre tilgængelig. Sprogvælgeren har fire sprog. Tredjepartswidgets (kort, webcam, vejr) kræver egne tjek: iframe-titel, tekstalternativ og ingen tastaturfælder.",
  "built": {
   "s": "partial",
   "where": "components/shell/Nav.tsx: undermenu åbner ved :focus-within (styles/shell.css), mobilknap har aria-expanded og aria-controls, Escape lukker mobilmenuen. components/shell/SeasonSwitcher.tsx bruger aria-pressed. components/shell/LanguageSwitcher.tsx er en almindelig select med label. components/blocks/live/LiveCam.tsx har titel på iframe. Ikke kontrolleret: Escape på undermenuen på computer, skærmlæsertest, øvrige widgets."
  },
  "decided": "G20 (årstidsvælger som ikonknap, sprogvalg som drop-down).",
  "deps": [],
  "open": [
   "Hvilke krav gælder tredjepartswidgets: titel på iframes, tekstalternativ for kort og webcam, ingen tastaturfælder?"
  ],
  "tasks": [
   {
    "id": "B6-2.1",
    "t": "Mega-menu åbner på tastaturfokus og lukker på Escape",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "afhænger af om Gausta får mega-menu; sandsynligvis enklere navigation"
   },
   {
    "id": "B6-2.2",
    "t": "Tematoggle med aria-pressed; verificér LocaleControl; mobilnav-toggle",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "tema er en sæsonvælger, ikke blot lys/mørk; flere sprog"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N6.5",
  "g": "N6",
  "status": "approved",
  "rel": "gaelder",
  "title": "Alt-tekst og overskrifter i Sanity",
  "what": "Redaktøren skal ikke kunne udgive et billede uden alt-tekst (eller markere det som dekorativt), og overskriftsniveau styres af koden, ikke af redaktøren.",
  "gausta": "Alt-tekst skal findes pr. sprog, da siden har mange fotos. Sprogskift i løbende tekst (fx norske stednavne) bør mærkes med lang-attribut.",
  "built": {
   "s": "partial",
   "where": "sanity/schemaTypes/objects/imageWithAlt.ts har alt-felt pr. sprog, påkrævet på lanceringssprogene (engelsk og dansk), men ingen dekorativ-toggle. Overskriftsniveau styres af rendereren: første sektion er h1, øvrige h2 (components/blocks/HeroSection.tsx), og tekstblokke tillader kun afsnit. lang-attribut findes på mediecitater (components/blocks/press/PressCarousel.tsx). Ikke kontrolleret: at alle billedtyper bruger imageWithAlt."
  },
  "deps": [
   "N6.2"
  ],
  "open": [
   "Skal norske stednavne i dansk tekst mærkes med lang-attribut (WCAG 3.1.2)?"
  ],
  "tasks": [
   {
    "id": "B6-3.1",
    "t": "Delt billedobjekt med påkrævet alt og dekorativ-toggle; renderer sætter overskriftsniveau",
    "prio": "P1",
    "rel": "gaelder",
    "note": "væsentligt for billedtung side; alt-tekst pr. sprog"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N6.6",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Automatiske tilgængelighedstjek i CI",
  "what": "Automatiske værktøjer fanger kun omkring 40 til 57 procent af fejlene, men fanger regressioner. Kravet er en lint-regel for tilgængelighed, axe på alle sider, en Lighthouse-grænse og en test af, at siden ikke får vandret rulning på mobil (reflow).",
  "gausta": "Test mod fire årstider, flere sprog, gæsteområde og back-office. Gæsteområdet er noindex, så testen må ikke lække det faste link. Gæsteområdet bruges mest på mobil.",
  "built": {
   "s": "none",
   "where": ".github/workflows/ci.yml kører typecheck, enhedstests, kontrast, skemavalidering og build, men ikke axe, Lighthouse, Playwright eller reflow-test (filen siger, at de tilføjes, når staging findes). eslint-plugin-jsx-a11y er ikke i package.json."
  },
  "deps": [
   "N6.1"
  ],
  "open": [
   "Hvordan dækkes testmatricen (årstider, sprog, ruter): udsnit pr. pull request og fuld matrix natligt?",
   "Hvordan testes det noindex-beskyttede gæsteområde i CI uden at lække linket?",
   "Hvilket tilgængelighedsniveau skal back-office have (login, formularer, tabeller, diagrammer)?",
   "Skal tilgængelighed også testes i offline-tilstand?"
  ],
  "tasks": [
   {
    "id": "B6-4.1",
    "t": "eslint-plugin-jsx-a11y",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B6-4.2",
    "t": "Playwright og axe på alle ruter og begge temaer; Lighthouse a11y-assertion; ingen regeludelukkelser",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "matrix: otte tema-kombinationer, tre sprog, gæsteområde og back-office"
   },
   {
    "id": "B6-4.3",
    "t": "Reflow-gate (WCAG 1.4.10): Playwright ved 375/768/1280, ingen horisontal overflow",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gæsteområdet bruges mest på mobil"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N6.7",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Manuel tilgængelighedsgennemgang",
  "what": "En person gennemgår sitet med kun tastatur, med skærmlæser (NVDA eller VoiceOver), ved 200 og 400 procent zoom og med reduceret bevægelse. Det finder det, automatiske tjek overser.",
  "gausta": "Der er intet team, så ejeren eller en hjælper udfører en struktureret tjekliste. Omfang og tidspunkt afgøres senere.",
  "built": {
   "s": "none",
   "where": "Ingen gennemgang fundet i dokumentationen."
  },
  "deps": [
   "N6.6"
  ],
  "open": [
   "Hvem udfører gennemgangen, og hvornår (før lancering)?"
  ],
  "tasks": [
   {
    "id": "B6-5.1",
    "t": "Fuld manuel gennemgang (tastatur, NVDA/VoiceOver, 200 %/400 % zoom, begge temaer, reduced-motion)",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "omfang og tidspunkt afgøres af Gausta; udføres af ejeren eller en hjælper"
   }
  ],
  "decided": "Sitet skal overholde WCAG 2.2 AA (ejerens svar 18. oktober 2026).",
  "appr": "Claude laver en tjekliste-gennemgang før lancering (automatiske tjek, tastatur og zoom). Ingen ekstern revision, og ingen skærmlæsertest foretages af Claude. Det bemærkes som begrænsning."
 },
 {
  "id": "N6.8",
  "g": "N6",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Tilgængelighedserklæring",
  "what": "En kort, redigerbar side, der oplyser overensstemmelsesniveau, kendte begrænsninger, kontaktvej og dato, linket fra footeren, evt. suppleret af en ekstern audit.",
  "gausta": "Det er uklart, om en privat udlejer er omfattet af EAA og norsk lov (juridisk afklaring mangler). En kort erklæring er alligevel god praksis. Ekstern audit er sandsynligvis uden for budget.",
  "built": {
   "s": "none",
   "where": "Ingen erklæring fundet i produktionsrepoet (ingen sidetype eller footerlink kontrolleret)."
  },
  "deps": [
   "N6.7"
  ],
  "open": [
   "Gælder EAA eller norsk lovgivning for en privatpersons udlejning af én ejendom?",
   "Skal der udstedes en erklæring, på hvilke sprog, og med hvilken kontaktvej?"
  ],
  "tasks": [
   {
    "id": "B6-5.2",
    "t": "Tosproget tilgængelighedserklæring som Sanity-side, linket i footer; evt. tredjepartsaudit",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "juridisk pligt for privatperson uklar; erklæring stadig god praksis; tredjepartsaudit sandsynligvis ikke relevant"
   }
  ],
  "decided": "Ingen tilgængelighedserklæring, men sitet skal overholde WCAG 2.2 AA (ejerens svar 18. oktober 2026).",
  "appr": "Afklaret af ejeren: ingen erklæring, men WCAG 2.2 AA skal overholdes. Kravene i N6.1 til N6.6 bærer det."
 },
 {
  "id": "N7.1",
  "g": "N7",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Formularregel og opbygning",
  "what": "Alle formularer bygges som Server Actions på sitets egen server, med samme regler for felterne i browseren og på serveren (delt Zod-skema). De virker også uden JavaScript, og der bruges ingen indlejrede tredjepartsformularer, der sætter cookies.",
  "gausta": "Reglen gælder, men formularlisten er en anden: forespørgsel, evt. booking, evt. giv besked, evt. problemmelding fra gæsteområdet og evt. nyhedsbrev. Sømmen submitLead() kan generaliseres, så modtageren kan skiftes uden at røre formularerne.",
  "built": {
   "s": "partial",
   "where": "Forespørgselsformularen er bygget: app/[locale]/inquiry/actions.ts (Server Action), components/InquiryForm.tsx (useActionState, labels, aria-describedby ved fejl), lib/inquiry/schema.ts (Zod), tests/inquiry.test.ts (pr. 18. oktober 2026 kører de i CI). Der er ingen fælles submitLead()-søm, afsendelsen kalder sendMail() direkte. Repoets Definition of Done (AGENTS.md) findes ikke i produktionsrepoet. Ikke kontrolleret: om formularen virker uden JavaScript, og fokusflytning til første fejl."
  },
  "decided": "G55 og G64: formularen er godkendt i prototypen og bygget (G61 hævede byggepausen kun for den). G28/N19: ingen kald til hjemmeserveren.",
  "deps": [],
  "open": [
   "Hvad er den endelige formularliste ved lancering (forespørgsel, booking, giv besked, problemmelding, nyhedsbrev)?",
   "Skal norske gæster have et eget sprog i formularerne?"
  ],
  "tasks": [
   {
    "id": "B7-0.1",
    "t": "Skriv standardreglen i repo-DoD (Server Action til submitLead(), ingen embeds); bekræft formularinventar (D1)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "reglen gælder, inventaret er et andet"
   },
   {
    "id": "B7-1.1",
    "t": "Første formular som Server Action med useActionState, delt Zod-skema, få felter, a11y, submitLead()-abstraktion",
    "prio": "P0",
    "rel": "gaelder",
    "note": "samme mønster, andre felter"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N7.2",
  "g": "N7",
  "status": "approved",
  "rel": "gaelder",
  "title": "Spamværn",
  "what": "Tre billige lag mod robotter: et skjult felt, som kun robotter udfylder (honeypot), Cloudflare Turnstile, som kontrolleres på serveren, og en grænse for antal forsøg pr. IP. Uden servertjek er Turnstile uden værdi.",
  "gausta": "Gælder uændret. Særligt vigtigt, fordi formularen sender mail til to private indbakker.",
  "built": {
   "s": "done",
   "where": "Honeypot (felt 'website'), hastighedsgrænse (5 forsøg pr. IP pr. 10 minutter) og Turnstile-tjek mod Cloudflares siteverify ligger i app/[locale]/inquiry/actions.ts, lib/inquiry/rate-limit.ts og lib/inquiry/turnstile.ts, med tests. CSP tillader challenges.cloudflare.com i next.config.ts. Forbehold: grænsen ligger i hukommelsen i én serverinstans og skal flyttes, hvis siden kører på flere. Turnstile-nøglerne ligger i Railway, ikke kontrolleret i selve tjenesten. En rigtig afsendelse er meldt virkende af ejeren 14. oktober 2026 (forespoergselsformular.md)."
  },
  "decided": "G55: formularen sender til to modtagere. Turnstile er sat op af ejeren (forespoergselsformular.md, afsnit 6).",
  "deps": [],
  "open": [
   "Skal hastighedsgrænsen flyttes til fælles lagring, hvis sitet kører på flere instanser?",
   "Er CSP-posten for Turnstile bekræftet i en rigtig browser med strammere indstillinger?"
  ],
  "tasks": [
   {
    "id": "B7-2.1",
    "t": "Honeypot + Turnstile server-verificeret + rate limit + CSP for challenges.cloudflare.com (D10)",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Turnstile er i Gaustas stack"
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "N7.3",
  "g": "N7",
  "status": "open",
  "rel": "tilpasses",
  "title": "Samtykke og lovligt grundlag",
  "what": "Markedsføringssamtykke skal være adskilt fra selve henvendelsen, ikke forhåndsafkrydset, og beviset (tidspunkt, ordlyd, valg) skal gemmes. Selve svaret på en henvendelse kræver ikke samtykke, men markedsføring til personer gør.",
  "gausta": "Der er ingen B2B-ramme og intet B3-register. Dansk og muligvis norsk markedsføringsret gælder, og en privat udlejer skal vurderes juridisk. En lille behandlingsoversigt skal oprettes i vidensbasen.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Formularen har ingen samtykketekst (fjernet 11. oktober 2026 ifølge forespoergselsformular.md), ingen markedsføringsafkrydsning og ingen gemt samtykkebevis. Formularen gemmer intet på serveren ud over selve mailen."
  },
  "decided": "G11: privatlivsvurdering (dansk og norsk) er åben. G55: GDPR-tekst og samtykke er åbent punkt.",
  "deps": [],
  "open": [
   "Hvilken GDPR-tekst skal stå ved formularen, og skal der være et afkrydsningsfelt?",
   "Hvor lang tid må henvendelser opbevares i Gmail?",
   "Gælder norsk markedsføringsret også, og regnes en privat udlejer som erhvervsdrivende?",
   "Hvor skal behandlingsoversigten for en privat dataansvarlig ligge?"
  ],
  "tasks": [
   {
    "id": "B7-3.1",
    "t": "Adskilt, ikke-forhåndsafkrydset markedsføringssamtykke; gem samtykkebevis; B3-registerpost",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dansk og muligvis norsk lov, ingen B2B-ramme, intet B3-register"
   }
  ],
  "needs": "Afventer din beslutning om privatliv og samtykke (svar 18. oktober 2026: afvent). GDPR-tekst, afkrydsningsfelt og opbevaring af henvendelser (juridisk).",
  "waits": true
 },
 {
  "id": "N7.4",
  "g": "N7",
  "status": "open",
  "rel": "gaelder",
  "title": "Levering til indbakke",
  "what": "Hver henvendelse sendes som e-mail til en overvåget indbakke og må aldrig gå tabt uden at nogen ved det. Afsendelsen skal kunne gentages uden dubletter, og fejl skal være synlige. CRM er ikke nødvendigt ved lancering.",
  "gausta": "Mailen går til to modtagere (ejeren og medejeren) med gæstens adresse som svaradresse. Et lille register i back-office kan senere være en ekstra modtager, men mail forbliver fallback (og må ikke koble sitet til hjemmeserveren, N19).",
  "built": {
   "s": "partial",
   "where": "Mail via Resends API til flere modtagere med Reply-To og ren tekst: lib/inquiry/send.ts, lib/inquiry/email.ts, lib/inquiry/recipients.ts. Ved fejl vises en besked med info-adressen som alternativ. Mangler: ingen automatisk gentagelse, ingen idempotens, intet fallback-spor hvis Resend er nede, ingen alarm. Ikke kontrolleret: opbevaringstid i Gmail og om mailen havner i spam (forespoergselsformular.md)."
  },
  "decided": "G30/G32: Resend til afsendelse, EU-region eu-west-1 (metadata i USA, åbent punkt i N3). G55: to modtagere. G61: formularen slået til via INQUIRY_ENABLED. Booking sker via gausta.com, men aftalen er ikke på plads endnu. Indtil da henvises til forespørgselsformularen og mail til ejeren (ejerens svar 18. oktober 2026). Ejeren svarer selv på henvendelser.",
  "deps": [
   "N7.2"
  ],
  "open": [
   "Skal gæsten også få en automatisk kvitteringsmail?",
   "Skal forespørgsler også gemmes i back-office som sink nr. 2?",
   "Hvem af de to ejere svarer, og inden for hvor lang tid?",
   "Er operatørens skriftlige accept indhentet, før formularen går bredt live?"
  ],
  "tasks": [
   {
    "id": "B7-4a.1",
    "t": "submitLead() sender fuldt lead som transaktionsmail til overvåget indbakke; idempotent; retry; aldrig tavst tab; retention",
    "prio": "P0",
    "rel": "gaelder",
    "note": "eneste nødvendige sink ved lancering"
   }
  ],
  "needs": "Automatisk kvittering til gæsten og svartid. Operatørens skriftlige accept kan være overflødig, hvis booking går via gausta.com (bekræft)."
 },
 {
  "id": "N7.5",
  "g": "N7",
  "status": "open",
  "rel": "tilpasses",
  "title": "CRM og nyhedsbrevssystem",
  "what": "Efter lancering kan leads kobles til et CRM eller et mailsystem via API, mens mail bevares som fallback. Hver ny databehandler skal registreres.",
  "gausta": "Et CRM er sandsynligvis overdimensioneret for én privat ejer. Et mailsystem er kun nødvendigt, hvis nyhedsbrev eller giv-besked-funktion vælges.",
  "built": {
   "s": "none",
   "where": "Intet fundet i koden eller opsætningen. Ingen CRM- eller ESP-integration ud over Resend til transaktionsmail."
  },
  "decided": "G30: Resend er valgt til afsendelse.",
  "deps": [
   "N7.4"
  ],
  "open": [
   "Er et CRM nødvendigt, eller er mail plus et enkelt register nok?",
   "Skal et EU-hostet mailsystem vælges, hvis nyhedsbrev indføres?"
  ],
  "tasks": [
   {
    "id": "B7-4b.1",
    "t": "Tilkobl CRM/ESP via API, behold mail som fallback, registrér databehandler",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "sandsynligvis ikke CRM; evt. ESP til nyhedsbrev/giv besked"
   }
  ],
  "needs": "Om du har brug for et CRM."
 },
 {
  "id": "N7.6",
  "g": "N7",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Udgående link til booking og kildemåling",
  "what": "Det primære mål (hos Stormpine: start gratis i appen) er et link, der bevarer sprog, ikke lækker tokens og sender en kilde med. Hos Gausta svarer det til et link til booking hos operatør, egen løsning eller en tredjepart.",
  "gausta": "Der er ingen produktapp. Kun klikket kan måles, hvis bookingen sker hos en tredjepart. Bookingmodellen afgør, hvad der er målet.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen kilde- eller UTM-fangst i koden, og ingen udgående bookinglinks med kilde. Bookingmodellen er ikke afgjort."
  },
  "decided": "G1: bookingmodel er åben. G2: operatøraftale åben. Booking sker via gausta.com, men aftalen er ikke på plads endnu. Indtil da henvises til forespørgselsformularen og mail til ejeren (ejerens svar 18. oktober 2026).",
  "deps": [],
  "open": [
   "Hvilken bookingmodel vælges (operatør, egen løsning, Airbnb, gausta.com)?",
   "Skal UTM og kilde (fx QR fra gæsteområdet) gemmes med forespørgslen?"
  ],
  "tasks": [
   {
    "id": "B7-5.1",
    "t": "Start free-link til app med bevaret locale og UTM, ingen token i URL; konvertering app-side",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "ingen produktapp; svarer til link til bookingsystem eller Airbnb"
   }
  ],
  "appr": "Bookingmodellen er afklaret: gausta.com, når aftalen er på plads. Indtil da er der intet udgående bookinglink, kun formular og mail. Kildemåling (UTM) tilføjes, når linket kommer."
 },
 {
  "id": "N7.7",
  "g": "N7",
  "status": "open",
  "rel": "tilpasses",
  "title": "Nyhedsbrev og giv-besked",
  "what": "Nyhedsbrev kræver dobbelt opt-in, tydelig samtykketekst og afmelding med ét klik. Det er kun nødvendigt, hvis funktionen vælges.",
  "gausta": "Kun relevant, hvis nyhedsbrev eller giv-besked-når-datoer-åbner indføres. Beskeden må kun bruges til det lovede.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen nyhedsbrevsformular, ingen tilmeldingsliste og ingen afmeldingsflow."
  },
  "deps": [
   "N7.3",
   "N7.5"
  ],
  "open": [
   "Skal der være nyhedsbrev eller giv-besked-funktion ved lancering?"
  ],
  "tasks": [
   {
    "id": "B7-6.1",
    "t": "Nyhedsbrev med dobbelt opt-in, samtykketekst, one-click afmelding",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "kun hvis nyhedsbrev eller giv besked vælges"
   }
  ],
  "needs": "Om der skal være nyhedsbrev."
 },
 {
  "id": "N7.8",
  "g": "N7",
  "status": "open",
  "rel": "tilpasses",
  "title": "Kalender og booking af opkald",
  "what": "Hvis tidsbooking tilbydes, foretrækkes en open source-løsning i EU eller et almindeligt link, og indlejring må ikke sætte cookies. Hver ny tjeneste er en databehandler.",
  "gausta": "Opkaldsbooking er sandsynligvis ikke relevant. Den reelle beslutning er bookingmodellen for opholdene, som ligger uden for N7.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen kalender- eller bookingintegration."
  },
  "decided": "G1: bookingmodel er åben.",
  "deps": [
   "N7.6"
  ],
  "open": [
   "Er der behov for opkaldsbooking, eller kun for booking af ophold?"
  ],
  "tasks": [
   {
    "id": "B7-7.1",
    "t": "Book a call via Cal.com (EU) eller link ud, cookiefri",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "afhænger af bookingmodel; opkaldsbooking sandsynligvis ikke relevant"
   }
  ],
  "needs": "Om der er behov for opkaldsbooking."
 },
 {
  "id": "N8.1",
  "g": "N8",
  "status": "approved",
  "rel": "gaelder",
  "title": "Kvalitetsport før udrulning",
  "what": "Railway udruller automatisk fra main, så main må kun modtage kode, der har bestået automatiske tjek. Branch protection på GitHub gør tjekkene til et krav og sikrer, at kun main udrulles.",
  "gausta": "Gælder begge apps, hvis back-office bliver en separat app.",
  "built": {
   "s": "partial",
   "where": "CI findes i .github/workflows/ci.yml (typecheck, enhedstests, kontrast, Sanity-skema, build af site og Studio) og kører ved push og pull request. Ikke kontrolleret: om branch protection på main er slået til i GitHub, og om Railway kun udruller fra main (domaene-og-dns-setup.md siger main med auto-deploy, ikke kontrolleret i tjenesten). Der er ikke et samlet qa-script."
  },
  "decided": "G58: Studio udrulles automatisk fra main efter bestået CI.",
  "deps": [],
  "open": [
   "Er branch protection på main slået til i GitHub (kræver admin-handling af ejeren)?"
  ],
  "tasks": [
   {
    "id": "B8-0.1",
    "t": "Formalisér branch protection på main, der kræver CI (pnpm qa + next build) før merge, så Railway kun auto-deployer grøn main; bekræft at Railway kun deployer fra main",
    "prio": "P0",
    "rel": "gaelder",
    "note": "gælder begge apps hvis back-office er separat"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N8.2",
  "g": "N8",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sundhedstjek, genstart og tilbagerulning",
  "what": "Et sundhedstjek gør, at et ødelagt deploy ikke erstatter den kørende version. Tilbagerulning til en tidligere version skal være afprøvet, og serveren skal kunne lukke pænt ned.",
  "gausta": "For back-office skal sundhedstjekket også prøve databaseforbindelsen. Det offentlige tjek skal være billigt og uden følsomme data.",
  "built": {
   "s": "partial",
   "where": "app/api/health/route.ts svarer 200 uden at røre eksterne systemer (G28). Ifølge domaene-og-dns-setup.md er sundhedstjekstien sat til /api/health i Railway, ikke kontrolleret i selve tjenesten. Intet fundet om genstartspolitik, SIGTERM-håndtering eller afprøvet tilbagerulning. Back-office findes ikke endnu."
  },
  "decided": "G28/N19: sundhedstjekket må ikke have runtime-afhængighed til hjemmeserveren.",
  "deps": [
   "N8.1"
  ],
  "open": [
   "Hvordan kontrolleres en mislykket migration, så den ikke rammer produktion (relevant for back-office)?",
   "Er tilbagerulning afprøvet i Railway?"
  ],
  "tasks": [
   {
    "id": "B8-1.1",
    "t": "Let /api/health-route der returnerer 200 når klar; sæt som Railway-healthcheck-sti. Accept: bevidst ødelagt deploy fejler og erstatter ikke kørende version",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "back-offices tjek bør også ramme databaseforbindelsen"
   },
   {
    "id": "B8-1.2",
    "t": "Restart policy og SIGTERM-håndtering; verificér rollback-flowet (udfør én gang og bekræft live)",
    "prio": "P0",
    "rel": "gaelder",
    "note": "gælder"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N8.3",
  "g": "N8",
  "status": "open",
  "rel": "tilpasses",
  "title": "Oppetidsovervågning og alarm",
  "what": "En tjeneste uden for hosting-platformen kigger jævnligt på sitet og sender alarm til en kanal, ejeren faktisk følger. Platformen kan ikke alarmere om sit eget nedbrud.",
  "gausta": "Der overvåges forsiden, den engelske side, gæsteområdets permanente link, back-office og et hjerteslag fra hjemmeserveren (nødvendigt, så alarmer også virker, når hjemmeinfrastrukturen er nede). Matomo-delen udgår.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ifølge konti-og-adgang.md er Better Stack planlagt og åbent, ingen konto er dokumenteret. Hjerteslag og alarmkæde for sensorer er kun beskrevet i kravfilen."
  },
  "decided": "G28: websitet må ikke kalde hjemmeserveren, så hjerteslaget skal skubbes ud fra hjemmet.",
  "deps": [
   "N8.2"
  ],
  "open": [
   "Hvilken leverandør og hvilken alarmdestination vælges?",
   "Kan hjemmeserveren alarmere ad en separat vej (fx mobildata) ved internetudfald?",
   "Hvordan skelnes alarm for kritisk sensorværdi fra alarm for manglende data?"
  ],
  "tasks": [
   {
    "id": "B8-2.1",
    "t": "Off-platform-monitor på forside, /api/health og Matomo-vært; alarm til en kanal der faktisk følges. Anbefalet Better Stack",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Matomo findes ikke nødvendigvis; i stedet back-office, gæstelink og sensor-heartbeat"
   }
  ],
  "needs": "Afventer din beslutning om drift og ejerskab (svar 18. oktober 2026: afvent). Leverandør og alarmdestination for oppetidsovervågning (omkostning).",
  "waits": true
 },
 {
  "id": "N8.4",
  "g": "N8",
  "status": "open",
  "rel": "gaelder",
  "title": "Fejlsporing",
  "what": "Fejl i produktion opfanges med stack trace og udgivelsesnavn, men uden personoplysninger og med data i EU. Værten skal tillades i sitets sikkerhedspolitik.",
  "gausta": "Gælder også server- og jobfejl i back-office. Request-indhold, headers og cookies skal renses.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen fejlsporingsafhængighed i package.json, ingen opsætning i koden. Ifølge konti-og-adgang.md er Sentry EU eller GlitchTip planlagt og åbent."
  },
  "deps": [
   "N8.2"
  ],
  "open": [
   "Skal fejlsporing være managed (Sentry EU) eller selvhostet (GlitchTip)?",
   "Hvilke persondata kan komme i fejl fra gæsteområdet og back-office?"
  ],
  "tasks": [
   {
    "id": "B8-3.1",
    "t": "Fejlsporing med @sentry/* SDK mod Sentry EU eller selvhostet GlitchTip; PII-scrubbing, sampling, release-tagging; tilføj ingest-vært til CSP",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gælder; også server- og jobfejl i back-office"
   }
  ],
  "needs": "Afventer din beslutning om drift og ejerskab (svar 18. oktober 2026: afvent). Valg af fejlsporing og hvilke persondata der må ende deri.",
  "waits": true
 },
 {
  "id": "N8.5",
  "g": "N8",
  "status": "open",
  "rel": "tilpasses",
  "title": "Backup og gendannelse",
  "what": "Indhold i Sanity eksporteres planmæssigt, databasen sikres, og der udføres mindst én gendannelsestest pr. lager. En backup, der aldrig er gendannet, er kun et håb.",
  "gausta": "Del A og B er stateless (kode i git, indhold i Sanity). Back-offices PostgreSQL med sensorhistorik skal sikres, også med en kopi uden for Railway, og hjemmeserverens opsætning er et tredje lager.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen backup-workflow i .github/workflows (kun ci.yml). Ifølge domaene-og-dns-setup.md bruges Railway-backup af volumener ikke. Back-office-databasen findes ikke endnu."
  },
  "decided": "G34: alt i Sanity er offentligt indhold; interne data ligger i back-office.",
  "deps": [],
  "open": [
   "Hvordan sikres og genopbygges hjemmeserveren (UniFi, tunnel, scripts)?",
   "Hvor ligger en off-site kopi af PostgreSQL?",
   "Hvor opbevares en kopi af hemmeligheder uden for Railway?"
  ],
  "tasks": [
   {
    "id": "B8-4.1",
    "t": "Planlagt Sanity dataset export (GitHub Action på cron), .github/workflows/backup-sanity.yml",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gælder hvis Sanity bruges"
   },
   {
    "id": "B8-4.2",
    "t": "Aktivér Railway-backups af Matomo MySQL; notér at selve sitet ikke kræver backup ud over git + Sanity",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "backup af back-office PostgreSQL i stedet; sitet kræver ingen backup kun for del A og B"
   },
   {
    "id": "B8-4.3",
    "t": "Udfør og dokumentér én restore-test pr. lager (Railway: samme projekt + miljø)",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gælder"
   }
  ],
  "needs": "Afventer din beslutning om drift og backup (svar 18. oktober 2026: afvent). Hvor en kopi af databasen og hemmelighederne skal ligge uden for Railway (omkostning).",
  "waits": true
 },
 {
  "id": "N8.6",
  "g": "N8",
  "status": "open",
  "rel": "tilpasses",
  "title": "Hændelsesplan, ejer og mål",
  "what": "Ét kort runbook med alvorlighedsniveauer, navngiven ejer, tilbagerulningstrin og kendte fejlscenarier, samt ét oppetidsmål med et månedligt blik. Ingen vagtrotation.",
  "gausta": "Ejeren er eneste navngivne ejer. Målene sættes pr. del (A, B, C) og for sensoralarmkæden, og SLO og ejerskab skrives direkte i runbooken (der er intet B12-dokument).",
  "built": {
   "s": "partial",
   "where": "domaene-og-dns-setup.md afsnit 10 er et vedligeholds-runbook for domæne og hosting. Der findes ikke et samlet hændelses-runbook, ingen SLO-tal og ingen dry-run i produktionsrepoet (der er ingen docs-mappe)."
  },
  "deps": [
   "N8.3"
  ],
  "open": [
   "Hvilke konkrete oppetidsmål gælder for del A, B, C og alarmkæden?",
   "Skal Tine være backup-ejer for adgange og alarmer?"
  ],
  "tasks": [
   {
    "id": "B8-5.1",
    "t": "Ét docs/runbook.md: alvorlighedsniveauer, navngiven ejer, kommunikation, rollback-trin, kendte fejlscenarier; 10-minutters dry-run; ingen vagtrotation",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gælder, med Gausta-scenarier"
   },
   {
    "id": "B8-6.2",
    "t": "Ét oppetids-SLO og månedligt blik; definér nede pr. service; fold SLO + ejerskab ind i B12-governance",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "SLO pr. del og for sensor-alarmkæden; B12-siden findes ikke for Gausta"
   }
  ],
  "needs": "Afventer din beslutning om drift og ejerskab (svar 18. oktober 2026: afvent). Oppetidsmål og om Tine skal være backup-ejer.",
  "waits": true
 },
 {
  "id": "N8.7",
  "g": "N8",
  "status": "open",
  "rel": "tilpasses",
  "title": "Testmiljøer",
  "what": "Railway kan oprette et isoleret miljø for hver pull request, så ændringer kan prøves før de når produktion. Permanent staging er valgfrit.",
  "gausta": "Testmiljøer må aldrig have produktionens sensornøgler eller rigtige gæstedata. Railway Hobby har nået grænsen for egne domæner, så staging på eget domæne kræver Pro.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen PR-miljøer dokumenteret. domaene-og-dns-setup.md noterer Hobby-grænsen på egne domæner. CI-filen nævner, at tjek mod staging først tilføjes, når staging findes."
  },
  "deps": [
   "N8.1"
  ],
  "open": [
   "Er PR-miljøer værd at betale for, og er permanent staging nødvendig?"
  ],
  "tasks": [
   {
    "id": "B8-6.1",
    "t": "Beslut Railway PR-miljøer og om permanent staging er det værd; verificér på én PR",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "nyttige, men koster ekstra og må ikke dele produktions-DB eller sensornøgler"
   }
  ],
  "needs": "Om testmiljøer er pengene værd."
 },
 {
  "id": "N9.1",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Afsenderliste og DNS-ejerskab",
  "what": "Før man styrer mails, skal man vide, hvilke systemer der sender som domænet, og hvem der styrer DNS. Et overset system bliver afvist, når reglerne skærpes.",
  "gausta": "Afsendere er formularmails via Resend, modtagelse via videresendelse, evt. back-office-alarmer, evt. postkasse og evt. bookingsystem. Ejeren er altid den ene ansvarlige.",
  "built": {
   "s": "partial",
   "where": "DNS ligger hos Cloudflare (domaene-og-dns-setup.md, G31) og ejes af ejeren. Afsendere er delvist beskrevet i forespoergselsformular.md og konti-og-adgang.md, men der er ikke et samlet afsenderregister. Back-office-alarmafsenderen er ikke afklaret."
  },
  "decided": "G31: DNS hos Cloudflare. G30/G32: modtagelse via Cloudflare Email Routing, afsendelse via Resend.",
  "deps": [],
  "open": [
   "Hvilke systemer skal på afsenderlisten (formularer, back-office-alarmer, postkasse, evt. booking, evt. nyhedsbrev)?",
   "Er der en backup-ejer af Cloudflare og domænet?"
  ],
  "tasks": [
   {
    "id": "B9-0.1",
    "t": "Inventér alle systemer der sender som domænet (ESP, app, Workspace, systemmail); kræver tværteam",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "afsendere er ESP, back-office-alarmer, evt. postkasse, evt. booking"
   },
   {
    "id": "B9-0.2",
    "t": "Bekræft DNS-adgang og navngiven ejer",
    "prio": "P0",
    "rel": "gaelder",
    "note": "ejer er altid den ene person"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.2",
  "g": "N9",
  "status": "approved",
  "rel": "gaelder",
  "title": "SPF og DKIM",
  "what": "SPF lister, hvem der må sende for domænet, og DKIM underskriver mails kryptografisk. Begge skal passe til afsenderadressen, ellers sorteres mailen fra eller afvises.",
  "gausta": "Gælder for hver Gausta-afsender (formularmail og evt. back-office).",
  "built": {
   "s": "partial",
   "where": "Ifølge forespoergselsformular.md og domaene-og-dns-setup.md er Resend-domænet i eu-west-1 vist som Verified med DKIM og return-path-records (rsend, send) i Cloudflare, mens rodens SPF/DKIM tilhører Cloudflare Email Routing. Ikke kontrolleret her: nøglelængde (2048 bit), SPF-opslagstal og om SPF/DKIM er aligned med From-adressen i en rigtig mail. Testmail via videresendelse landede i spam (Gmail-filter ikke sat)."
  },
  "decided": "G30: Resend, eu-west-1. G32: videresendelse først, Resend ved formularer.",
  "deps": [
   "N9.1"
  ],
  "open": [
   "Er mailen fra Resend aligned i en rigtig testmail (Vis original)?",
   "Er Gmail-filteret mod spam sat hos begge modtagere?"
  ],
  "tasks": [
   {
    "id": "B9-0.3",
    "t": "SPF pr. afsenderdomæne, under 10 opslag, custom MAIL FROM",
    "prio": "P0",
    "rel": "gaelder",
    "note": "gælder"
   },
   {
    "id": "B9-0.4",
    "t": "DKIM (2048-bit) hos ESP og app; aligned d=",
    "prio": "P0",
    "rel": "gaelder",
    "note": "for hver Gausta-afsender (ESP, back-office)"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.3",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "DMARC og overvågning",
  "what": "DMARC fortæller modtagere, hvad de skal gøre med mails, der ikke består, og giver rapporter om, hvem der sender. Man starter blødt (p=none), overvåger i omkring 90 dage og strammer derefter.",
  "gausta": "Lavt volumen gør rapporterne tynde, så perioden kan forkortes (Antagelse, åbent). Et enkelt EU-værktøj eller en selv-parset indbakke er nok.",
  "built": {
   "s": "partial",
   "where": "Ifølge forespoergselsformular.md og domaene-og-dns-setup.md afsnit 4b er en _dmarc-record med p=none lagt i Cloudflare 11. oktober 2026. Kildekonflikt: samme fils bemærkning (afsnit 4b) siger stadig, at der ikke er nogen DMARC-record. Ikke dokumenteret: rua-adresse, sp=, værktøj, databehandleraftale og påbegyndt overvågningsperiode. Ikke kontrolleret i DNS her."
  },
  "decided": "G30: DMARC startes med p=none.",
  "deps": [
   "N9.2"
  ],
  "open": [
   "Hvor modtages DMARC-rapporter (adresse eller værktøj), og hvilket værktøj vælges?",
   "Hvor lang skal overvågningsperioden være ved lavt volumen?"
  ],
  "tasks": [
   {
    "id": "B9-1.1",
    "t": "Vælg DMARC-overvågningsværktøj (EU foretrukket); registrér som databehandler",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "gratis eller enkelt værktøj eller selv-parset indbakke kan række"
   },
   {
    "id": "B9-1.2",
    "t": "Publicér DMARC p=none med rua= (evt. ruf=) og sp=",
    "prio": "P0",
    "rel": "gaelder",
    "note": "gælder"
   },
   {
    "id": "B9-1.3",
    "t": "Overvåg ca. 90 dage; ret alignment til 98 %+",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "lavt volumen gør rapporterne tynde; princippet gælder"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.4",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Subdomæner pr. mailstrøm",
  "what": "Hver type mail kan have sit eget underdomæne, så en klagetop på markedsføring ikke skader transaktionsmails.",
  "gausta": "Kun relevant, hvis der både sendes transaktionel mail og markedsføring. Back-office-alarmer bør ikke dele omdømme med gæstemarkedsføring.",
  "built": {
   "s": "partial",
   "where": "Resend bruger return-path-underdomænerne rsend og send ifølge domaene-og-dns-setup.md, mens From-adressen ligger på rod-domænet. Der er ingen adskilte marketing- og systemmail-underdomæner. Ikke kontrolleret i DNS her."
  },
  "deps": [
   "N9.1"
  ],
  "open": [
   "Skal marketing og transaktionel mail adskilles på underdomæner, når marketing indføres?"
  ],
  "tasks": [
   {
    "id": "B9-2.1",
    "t": "Dedikerede sendesubdomæner pr. strøm (mail., news.)",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "kun hvis både transaktionel og marketing sendes; ellers ét subdomæne"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.5",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "DMARC-håndhævelse",
  "what": "Når overvågningen viser, at alle rigtige afsendere består, skærpes DMARC til quarantine og siden reject, så ingen kan forfalske domænet.",
  "gausta": "Gausta har ingen produktapp, så det afgørende er, at alle faktiske afsendere (Resend, back-office, postkasse, evt. booking) er aligned først.",
  "built": {
   "s": "none",
   "where": "Ikke gjort. DMARC står på p=none ifølge domaene-og-dns-setup.md."
  },
  "deps": [
   "N9.3"
  ],
  "open": [
   "Skal håndhævelse indføres efter en kortere periode end 90 dage?"
  ],
  "tasks": [
   {
    "id": "B9-3.1",
    "t": "DMARC til p=quarantine, når compliance høj og appen aligned",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "app erstattes af back-office-afsender"
   },
   {
    "id": "B9-3.2",
    "t": "DMARC til p=reject (pct=100) efter ren karantæneperiode",
    "prio": "P1",
    "rel": "gaelder",
    "note": "gælder"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.6",
  "g": "N9",
  "status": "open",
  "rel": "tilpasses",
  "title": "Afmelding og listehygiejne",
  "what": "Markedsføringsmails skal have afmelding med ét klik og et synligt link, og listen skal holdes ren: dobbelt opt-in, fjern bounces og klagere, aldrig købte lister.",
  "gausta": "Kun relevant, hvis nyhedsbrev eller giv-besked-udsendelser findes. Gælder ikke transaktionelle mails.",
  "built": {
   "s": "none",
   "where": "Ikke relevant endnu i praksis: der sendes ingen markedsføring, og ingen afmeldingsflow findes."
  },
  "deps": [
   "N7.7"
  ],
  "open": [
   "Skal der sendes markedsføring over hovedet?"
  ],
  "tasks": [
   {
    "id": "B9-4.1",
    "t": "One-click afmelding (RFC 8058) + synligt link på markedsføringsmail; prompte opt-outs",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "kun hvis nyhedsbrev eller giv besked-udsendelser findes"
   },
   {
    "id": "B9-4.3",
    "t": "Listehygiejne: dobbelt opt-in, suppression af bounces/klager, ingen købte lister; opvarmning ved vækst",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "kun for marketinglister; ikke transaktionelle"
   }
  ],
  "needs": "Om der skal sendes markedsføringsmail."
 },
 {
  "id": "N9.7",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Omdømmemåling hos Google",
  "what": "Google Postmaster Tools viser domænets omdømme og spamrate. Fejl skal give alarm.",
  "gausta": "Giver kun data ved nok volumen. Alarm for DMARC-fejl kan flyttes til back-office eller en ugentlig rapport.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen Postmaster-verifikation dokumenteret."
  },
  "deps": [
   "N9.3"
  ],
  "open": [
   "Hvor og hvordan alarmeres på leveringsfejl (back-office eller ugentlig rapport)?"
  ],
  "tasks": [
   {
    "id": "B9-4.2",
    "t": "Google Postmaster Tools; spamrate under 0,1 %; alarm via B8",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Postmaster giver kun data ved nok volumen; DMARC-fejlalarm kan flyttes til back-office"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.8",
  "g": "N9",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sikker indgående mail (MTA-STS)",
  "what": "MTA-STS og TLS-RPT kræver krypteret levering af mail til domænet og rapporterer problemer. Billig hygiejne, men ikke nødvendig.",
  "gausta": "Lav prioritet. Modtagelse sker via Cloudflare Email Routing, så værdien er begrænset, medmindre domænet modtager mail på anden måde.",
  "built": {
   "s": "none",
   "where": "Intet fundet. Ingen MTA-STS-politikfil eller TLS-RPT-record dokumenteret."
  },
  "decided": "G30: modtagelse via Cloudflare Email Routing.",
  "deps": [],
  "open": [
   "Skal MTA-STS og TLS-RPT medtages?"
  ],
  "tasks": [
   {
    "id": "B9-5.1",
    "t": "MTA-STS (politikfil + DNS) og TLS-RPT",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "lav prioritet; kun hvis Gausta modtager mail på eget domæne"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N9.9",
  "g": "N9",
  "status": "approved",
  "rel": "ikke",
  "title": "Logo i indbakken (BIMI)",
  "what": "BIMI viser et logo ved afsenderen i nogle mailprogrammer. Det kræver DMARC i håndhævelse og et certifikat, som normalt kræver et registreret varemærke og koster omkring 1.000 til 1.500 USD om året.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "B9-6.1",
    "t": "BIMI (SVG Tiny PS + VMC/CMC) efter DMARC = reject og afklaret navn/varemærke",
    "prio": "P2",
    "rel": "ikke",
    "note": "kræver varemærke og koster ca. 1.000 til 1.500 USD/år, uden værdi for et privat udlejningssite"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "N10.1",
  "g": "N10",
  "status": "open",
  "rel": "tilpasses",
  "title": "Claim-tjekliste før udgivelse",
  "what": "Påstande om produktets adfærd, privatliv, sikkerhed eller bæredygtighed må ikke udgives uden dokumentation. Hos Stormpine er det en blokerende gate i pull requests. Dansk markedsføringsret kræver, at faktuelle påstande kan dokumenteres og er sande.",
  "gausta": "Princippet gælder, men som en kort personlig tjekliste og ikke et workflow. Højrisiko for Gausta: ski-in/ski-out-afstande, snefaktor, kapacitet, tilgængelighed, bæredygtighed og sensordata. Mæglerudsagn er ikke dokumentation.",
  "built": {
   "s": "none",
   "where": "Ingen claim-tjekliste eller docs/editorial.md fundet i produktionsrepoet (gausta-vandring har ingen docs-mappe og ingen pull request-skabelon i .github). Vidensbasens regel om kildemærkning dækker dokumentation, men er ikke en publiceringsgate på sitet."
  },
  "decided": "G45: ski-in/ski-out-afstande skal verificeres på stedet. G19: skrivestil. Ingen beslutning om en egentlig claim-gate.",
  "deps": [
   "N10.2"
  ],
  "open": [
   "Hvilken markedsføringsret gælder for en privat udlejer, og i hvilket land (Danmark eller Norge)?",
   "Skal en jurist se på afstande, standard og bæredygtighed, før sitet åbner?",
   "Må privacy- eller GDPR-udsagn undgås helt, eller skal de dokumenteres?"
  ],
  "tasks": [
   {
    "id": "B10-0.1",
    "t": "Definér Gated-niveau og gør claims om produktadfærd, privacy/GDPR, sikkerhed og bæredygtighed publiceringsblokerende (claim-tjekliste, docs/editorial.md)",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "privat ejer uden juridisk rolle; behold princippet (ingen ubeviste claims, især udlejningsdata, bæredygtighed, GDPR) som en kort tjekliste, ikke et PR-workflow med Message Map"
   }
  ],
  "needs": "Svar ja til Claudes anbefaling, eller ret den. En jurist er først nødvendig, når du tager imod bookinger med betaling.",
  "rec": "Anbefaling (ikke juridisk rådgivning, kun almindelig god praksis for en ferielejlighed): 1) Skriv kun påstande, der kan dokumenteres: afstande med kilde, dato og måde (til fods eller i bil), ellers \"ca.\". 2) Ingen superlativer (\"bedst\", \"perfekt\") og ingen sundheds-, miljø- eller sikkerhedspåstande uden bevis. 3) Åbningstider og sæson står altid med \"tjek aktuelle tider hos ...\" og en dato. 4) Priser og vilkår (afbestilling, depositum) først, når bookingaftalen er på plads, og så vist med alle gebyrer. 5) Vis, hvem udlejer er, og hvordan man kontakter dem, når booking åbnes (Antagelse: kræves i Danmark, ikke verificeret). 6) Kun egne eller licenserede billeder, og de viser tilstanden ved ankomst. 7) Ingen anmeldelser eller stjerner, medmindre de er ægte og kan dokumenteres. 8) Privatlivstekst og samtykke venter på dit svar (N3). 9) Før hver udgivelse i Sanity: \"Er det sandt, dateret og kildebelagt?\". Skal du modtage rigtige bookinger med betaling, bør en jurist se på vilkår, privatliv og udlejerens forpligtelser, én gang."
 },
 {
  "id": "N10.2",
  "g": "N10",
  "status": "open",
  "rel": "gaelder",
  "title": "House style og tankestreg-lint",
  "what": "En kort stilguide for tone og sætningsregler, og forbuddet mod tankestreg som en automatisk kontrol, så den fejler ved kørsel og ikke kun er en retningslinje.",
  "gausta": "Forbuddet er allerede besluttet. Kontrollen bør også dække indhold i Sanity og oversættelser, ikke kun kode. Tone-ord for Gausta er ikke valgt (Stormpines executive-tone passer ikke).",
  "built": {
   "s": "none",
   "where": "Ingen tankestreg-kontrol fundet i .github/workflows/ci.yml, package.json eller scripts/. Reglen følges kun manuelt (G19). Ingen docs/style.md i repoet. Validering på Sanity-felter er ikke kontrolleret."
  },
  "decided": "G19: ingen tankestreg, beslutning 2. oktober 2026.",
  "deps": [],
  "open": [
   "Hvordan fanges tankestreg i Sanity-indhold og oversættelser (feltvalidering) ud over kode-lint?",
   "Hvilken tone skal Gausta have (fx varm, jordnær, nordisk, ærlig)?"
  ],
  "tasks": [
   {
    "id": "B10-1.1",
    "t": "House style-guide (tone, sætningsregler, CTA/stemme) og no-em-dash som CI-lint (docs/style.md); streng med tankestreg fejler CI",
    "prio": "P1",
    "rel": "gaelder",
    "note": "no-em-dash er allerede besluttet for Gausta; lint bør også dække CMS-indhold (Sanity) og oversættelser"
   }
  ],
  "needs": "Svar ja til Claudes anbefaling, eller ret den.",
  "rec": "Anbefaling til tone på en ferielejlighed: varm, jordnær og præcis, som en ven der kender stedet. Korte sætninger og konkrete ting (afstande, tider, hvad der er i lejligheden) frem for ord som perfekt, unik og drømmeagtig. Ærlig om begrænsninger (fx at pisten kun er åben i sæson). Ingen tankestreg og ingen udråbstegn. Samme tone på alle sprog, naturligt oversat og ikke ord for ord."
 },
 {
  "id": "N10.3",
  "g": "N10",
  "status": "open",
  "rel": "tilpasses",
  "title": "Termbase og ikke-oversæt-liste",
  "what": "Et lille glossar med faste oversættelser af nøgleord og en liste over navne, der aldrig oversættes, så stemmen er ens på alle sprog og hos alle forfattere.",
  "gausta": "Stormpines termer bruges ikke, men konceptet gør: hytte/lodge, sæson, gæst, check-in, navnet på sitet og stednavne. Sprog nu: dansk og engelsk, senere norsk og tysk.",
  "built": {
   "s": "none",
   "where": "Ingen docs/glossary.md eller glossar-dokument i Sanity fundet i produktionsrepoet (kun søgning i filnavne og sanity/schemaTypes; skemaets indhold er ikke gennemlæst). Sprogstrenge ligger i dokumentet uiStrings i Sanity (fx app/[locale]/not-found.tsx), men det er ikke et termbase."
  },
  "decided": "G52 og G55 om sprogruter og sprogvalg. Ingen beslutning om termbase.",
  "deps": [],
  "open": [
   "Hvornår tilføjes norsk og tysk, og hvem oversætter (ejer, maskine eller bureau)?"
  ],
  "tasks": [
   {
    "id": "B10-2.1",
    "t": "Tosproget termbase med faste valg og DNT-liste (docs/glossary.md, evt. struktureret Sanity-dokument)",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Stormpines termer er ikke relevante; konceptet er (DA/EN, senere NO/DE): hytte/lodge, sæson, gæst, check-in, DNT for Gausta Home og stednavne"
   }
  ],
  "needs": "Afventer din beslutning om sprog (svar 18. oktober 2026: afvent). Hvornår norsk og tysk tilføjes, og hvem oversætter.",
  "waits": true
 },
 {
  "id": "N10.4",
  "g": "N10",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Designtokens og årstider",
  "what": "Farver, afstande og typografi ligger ét sted som tokens, og både sæsontemaer og eventuelle lys/mørk-temaer er defineret for hvert token. Så kan hele sitet omfarves uden at håndrette enkelte steder.",
  "gausta": "Tokens er CSS-variabler, og de fire årstider styres med data-season. Der er ingen mørk tilstand (G20), så det er fire kombinationer og ikke otte. En DTCG-fil og Style Dictionary er valgfrit for ét site.",
  "built": {
   "s": "partial",
   "where": "styles/tokens.css har CSS-variabler og data-season for winter, spring, summer og autumn; lib/season.ts styrer valget (forår slået fra i produktion, G114). Ingen DTCG-kildefil eller Style Dictionary (valgfrit). Tailwind-tema peger ikke kontrolleret på variablerne."
  },
  "decided": "G20: ingen mørk tilstand, årstidsvælger som ikonknap. G114: forår fjernet midlertidigt i produktion.",
  "deps": [],
  "open": [
   "Skal DTCG og Style Dictionary bruges, eller er rene CSS-variabler kilden?",
   "Er Stormpines filplan (docs/design-system.md) relevant, eller er prototypens designsystemside nok?"
  ],
  "tasks": [
   {
    "id": "B10-3.1",
    "t": "Promover CSS-variabler til DTCG-token-fil med Style Dictionary-build; hvert semantisk token i begge temaer",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "ingen produkt-app at dele med; fire sæsontemaer gør én kilde værd, men CSS custom properties direkte er nok, DTCG/Style Dictionary er valgfrit"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N10.5",
  "g": "N10",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Kontrasttjek i alle temaer",
  "what": "Et automatisk tjek af, at farveparrene opfylder tilgængelighedskravene i hvert tema, og at delte komponenter dokumenteres én gang.",
  "gausta": "Tjekket skal dække alle årstider. Stormpines produkt-UI-hero er ikke relevant.",
  "built": {
   "s": "partial",
   "where": "scripts/contrast.mjs (pnpm contrast) tjekker WCAG AA for fire årstider ud fra styles/tokens.css og kører i .github/workflows/ci.yml. Ikke fundet: axe- eller Playwright-tjek mod de renderede sider, dokumenterede delte primitiver."
  },
  "decided": "G20 (ingen mørk tilstand).",
  "deps": [
   "N10.4"
  ],
  "open": [
   "Skal axe/Playwright tilføjes, når der er en staging?"
  ],
  "tasks": [
   {
    "id": "B10-5.1",
    "t": "Dokumentér delte primitiver og tilføj lys/mørk kontrast-paritetstjek (axe/contrast) i pnpm qa",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "kontrasttjek i alle sæsonkombinationer; produkt-UI hero er ikke relevant"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N10.6",
  "g": "N10",
  "status": "approved",
  "rel": "gaelder",
  "title": "Mobilregler uden vandret rul",
  "what": "Responsiv adfærd er en fast designregel: navigationen klapper sammen, gitre stakker, og der må ikke komme vandret overflow ved 375 px bredde.",
  "gausta": "Afgørende, fordi gæsteområdet åbnes via QR på telefon. Hero-diagrammet er Stormpine-specifikt og ikke relevant.",
  "built": {
   "s": "none",
   "where": "Ingen automatisk 375px-kontrol (reflow-gate) fundet i .github/workflows/ci.yml eller tests/. Selve responsive CSS er ikke gennemgået."
  },
  "decided": "",
  "deps": [
   "N10.5"
  ],
  "open": [
   "Skal en reflow-kontrol køre automatisk (kræver browsertest)?"
  ],
  "tasks": [
   {
    "id": "B10-5.2",
    "t": "Responsiv adfærd som designregel (breakpoints, nav-kollaps, grid-stacking, ingen vandret overflow ved 375px); håndhæves af reflow-gate",
    "prio": "P2",
    "rel": "gaelder",
    "note": "mobil-først er afgørende (gæsteområdet via QR bruges på telefon); hero-diagram er ikke relevant, men 375px-princippet gælder"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N10.7",
  "g": "N10",
  "status": "approved",
  "rel": "ikke",
  "title": "Roller og godkendelsesniveauer i redaktionen",
  "what": "En ansvarsmatrix og tre godkendelsesniveauer (let, standard, gated) knyttet til roller i CMS'et, så lavrisiko-rettelser ikke venter på en juridisk kø.",
  "gausta": "Der er kun én ejer, som er alle roller. Betalte brugerdefinerede roller i Sanity er unødvendige. Behold kun princippet om kladde før udgivelse.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "decided": "G34: Sanity bliver på Free.",
  "deps": [],
  "open": [
   "Skal en anden person (fx ægtefælle) kunne godkende eller være backup-redaktør?"
  ],
  "tasks": [
   {
    "id": "B10-4.1",
    "t": "Én-tabels RACI og tre niveauer mappet på Sanity-roller (docs/editorial.md)",
    "prio": "P2",
    "rel": "ikke",
    "note": "én ejer er alle roller; Sanitys betalte custom-RBAC er unødvendig; behold kun kladde, så udgiv, og en tjekliste"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "N11.1",
  "g": "N11",
  "status": "open",
  "rel": "tilpasses",
  "title": "Eksperimenter og personalisering (parkeret)",
  "what": "A/B-tests og tilpasset indhold kræver trafik, som et lille site ikke har. Kravet er at holde området parkeret, skrive en trigger ned og, hvis det nogensinde bruges, tildele varianter på serveren uden flimmer og uden persondata i adresser.",
  "gausta": "Intet bygges. Reglen om ingen persondata i URL'er gælder dog altid, især for gæstelinket. Sprog og årstid er allerede dækket af routing og temaer, ikke af en eksperimentramme.",
  "built": {
   "s": "none",
   "where": "Intet eksperimentværktøj fundet i produktionsrepoet (søgning efter GrowthBook, PostHog og analytics gav intet). Parkeret by design. Reglen om ingen persondata i URL'er er ikke kontrolleret."
  },
  "decided": "Ingen G-beslutning. Parkering er foreslået i kravfilen (Inference), ikke besluttet.",
  "deps": [
   "N2.1"
  ],
  "open": [
   "Skal N11 bekræftes som parkeret, og hvilken trigger skal skrives ned (trafikgulv eller første rigtige spørgsmål)?",
   "Hvilket cookiefrit analytics-værktøj vælges, så noget overhovedet kan måles?",
   "Skal forsidefokus vinter/sommer styres af dato på serveren, og hvad er fallback i overgangene?"
  ],
  "tasks": [
   {
    "id": "B11-0.1",
    "t": "Beslutningsgate: hold B11 parkeret til en trigger er opfyldt (nok trafik, eller et konkret spørgsmål til painted-door/kvalitativ test); skriv triggeren ned",
    "prio": "P2",
    "rel": "gaelder",
    "note": "præcis denne tilgang; skriv en trigger ned og byg ikke"
   },
   {
    "id": "B11-1.1",
    "t": "Edge Middleware tildeler variant ved første request, sticky ikke-identificerende cookie, server-side rendering uden flimmer eller layout shift",
    "prio": "P2",
    "rel": "ikke",
    "note": "parkeret; kun princippet server-side, aldrig klientside gælder, hvis det genoptages"
   },
   {
    "id": "B11-2.1",
    "t": "Gate vedvarende bucketing-cookie bag samtykke; ingen persondata eller segment i URL; eksperimentendepunkt på CSP-allow-list; udfald via EU-hostet analytics",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "reglen ingen persondata i URL'er gælder altid (gæstelink/QR, back-office); resten er ikke relevant uden eksperimenter"
   },
   {
    "id": "B11-3.1",
    "t": "Vælg værktøj (GrowthBook selvhostet anbefalet, ellers DIY-middleware) og kør én strategisk test; aflæs Bayesiansk/sekventielt",
    "prio": "P2",
    "rel": "ikke",
    "note": "selvhostet GrowthBook er en ekstra driftsbyrde uden trafik at fodre den"
   },
   {
    "id": "B11-4.1",
    "t": "Forgren på groft, upersonligt segmentsignal løst server-side; én kanonisk URL, intet segment i URL",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "lav prioritet; sprog og sæson er allerede dækket af routing og temaer, ingen separat personalisering nødvendig"
   }
  ],
  "needs": "Om N11 fortsat skal være parkeret."
 },
 {
  "id": "N12.1",
  "g": "N12",
  "status": "approved",
  "rel": "gaelder",
  "title": "Omkostningskurve, budget og Sanity-plan",
  "what": "Modeller, hvad driften koster ved nuværende og tidoblet trafik, sæt hårde forbrugsgrænser og en budgetalarm, og skriv ned hvornår man skifter fra gratis til betalt Sanity.",
  "gausta": "Personligt budget, så kravet gælder stærkt. Centrene er site, Sanity og hjemmeserveren. Sanity Free er sandsynligvis nok; udløsere er request-loftet og planlagt udgivelse, ikke roller. Priser er et dateret snapshot (7. august 2026) og skal genbekræftes, og beløb vises i DKK med dateret kurs.",
  "built": {
   "s": "partial",
   "where": "Ifølge beslutningsregister.md (G34) kører Sanity på Free, og ifølge konti-og-adgang.md ligger Railway på Hobby; ikke kontrolleret i selve tjenesterne. Railways hårde grænser og budgetalarm er ikke kontrolleret. Ingen omkostningsnote fundet i repoet."
  },
  "decided": "G13: start gratis, sæt hård grænse og alarm. G34: Sanity Free, kun offentligt indhold. Ejeren har ikke et fast månedligt loft (svar 18. oktober 2026) og vil løbende have et overblik over omkostninger, der skal registreres i vidensbasen: se teknisk/omkostninger.md.",
  "deps": [
   "N12.3"
  ],
  "open": [
   "Hvad er det maksimale månedlige budget i DKK, og hvilken alarmtærskel (fx 70 til 80 procent)?",
   "Må en privat ejer bruge Sanity Free uden vilkårsbrud (kommerciel brug)?",
   "Er EU-dataresidens for Sanity-datasættet tilgængeligt på Free?",
   "Tillader Railway Hobby det nødvendige antal tjenester og volumen?",
   "Hvilke planlagte jobs (scraping, sensorer) kører på Railway, og hvilke grænser forhindrer løbske jobs?"
  ],
  "tasks": [
   {
    "id": "B12-0.1",
    "t": "Modellér omkostningskurven over centrene ved ca. 1x og 10x trafik; sæt Railway hårde forbrugsgrænser og budgetalarm",
    "prio": "P1",
    "rel": "gaelder",
    "note": "stærkt gældende (personligt budget); centrene bliver site, Sanity og back-office (database, planlagte jobs, scraping, sensorindtag), evt. uden analytics-server"
   },
   {
    "id": "B12-1.1",
    "t": "Bliv på Sanity Free; skriv trigger til betalt plan (custom RBAC, planlagt udgivelse, request-loft); overvåg request-antal",
    "prio": "P1",
    "rel": "gaelder",
    "note": "Free er næsten sikkert nok; RBAC-triggeren er ikke relevant (én ejer), request-loft og planlagt udgivelse er de relevante triggere"
   }
  ],
  "appr": "Kravet om omkostningskontrol er afklaret: intet fast loft, men et løbende overblik i vidensbasen (teknisk/omkostninger.md), som opdateres, hver gang en tjeneste tilføjes eller ændres."
 },
 {
  "id": "N12.2",
  "g": "N12",
  "status": "open",
  "rel": "gaelder",
  "title": "Portabilitet og exit-plan",
  "what": "Indhold må aldrig være fanget. En regelmæssig eksport (NDJSON og billeder fra Sanity) skal være gendannet én gang til et frisk projekt, og der skal ligge en note om, hvordan man flytter væk.",
  "gausta": "Gælder og udvides: også hjemmeserverens database og billeder skal kunne flyttes, og backup skal ligge uden for Railway og Sanity. Åbent, om exit-planen også dækker domæne og e-mail.",
  "built": {
   "s": "none",
   "where": "Ingen eksportjob, gendannelsestest eller docs/portability.md fundet i produktionsrepoet. Ekstern backup til Cloudflare R2 er besluttet (G81) og skal bygges til sidst ifølge teknisk/backoffice/F2-ekstern-backup.md; ikke kontrolleret om den er bygget."
  },
  "decided": "G81: ekstern backup til Cloudflare R2, krypteret med restic, 30 daglige og 12 månedlige, bygges som noget af det sidste.",
  "deps": [],
  "open": [
   "Skal exit-planen også dække domæneoverdragelse og e-mail?",
   "Hvor ligger eksterne backups, og hvornår testes en gendannelse?"
  ],
  "tasks": [
   {
    "id": "B12-2.1",
    "t": "Bekræft at Sanity dataset-eksport tjener portabilitet; gendan én gang til et frisk projekt; skriv migrationsnote; bekræft veldannet skema og Portable Text",
    "prio": "P1",
    "rel": "gaelder",
    "note": "exit-plan er et eksplicit Gausta-behov; dækker også back-office-databasen (dump) og billeder, ikke kun Sanity"
   }
  ],
  "needs": "Om exit-planen også skal dække domæne og e-mail."
 },
 {
  "id": "N12.3",
  "g": "N12",
  "status": "open",
  "rel": "tilpasses",
  "title": "QA-gate og ejerregister",
  "what": "En automatisk kvalitetskontrol skal findes og blokere dårlige ændringer før udrulning, og hver konto, integration og databehandler skal have en navngiven ejer med fakturering, fornyelse og databehandleraftale.",
  "gausta": "Én ejer, så registeret er især en kontinuitetsplan: konti, backup-ejer, hvor adgang opbevares, fornyelsesdatoer. Gausta-konti holdes adskilt fra Stormpines. Branch protection på main er en billig sikkerhed.",
  "built": {
   "s": "partial",
   "where": "QA: .github/workflows/ci.yml kører typecheck, enhedstests, kontrasttjek, Sanity-skema og build af site og Studio ved push og pull request. Ikke fundet: Playwright/axe-smoketest. Branch protection på main er en GitHub-indstilling og ikke kontrolleret. Ejerregister: udkast i teknisk/konti-og-adgang.md (kontoregister), ingen docs/ownership.md i repoet."
  },
  "decided": "G18: nye konti i stedet for Stormpines (princip). G29: konti på ejerens egen Gmail-adresse.",
  "deps": [],
  "open": [
   "Hvem er backup-ejer (ægtefælle, familie, ven), og hvilket nødadgangsmiddel bruges?",
   "Er alle nye konti oprettet adskilt fra Stormpine?",
   "Hvilke databehandlere kræver aftale (gæstedata, sensorer, mail), og hvor er det bekræftet?",
   "Er Resends overførselsgrundlag til USA undersøgt (Åbent punkt i konti-og-adgang.md)?"
  ],
  "tasks": [
   {
    "id": "B12-3.1",
    "t": "Registrér at en automatisk QA-gate findes og gater (pnpm qa i GitHub Actions + branch protection på main)",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "gælder principielt; enkeltperson kan nøjes med CI uden review, men branch protection er stadig billig sikkerhed"
   },
   {
    "id": "B12-4.1",
    "t": "Én-tabels register med ejer for site, domæne/DNS og hver integration/processor, med fakturering/fornyelse, DPA og bekræftet EU/EØS-datalokation",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "én ejer, men registeret er værdifuldt som kontinuitetsplan (backup-ejer, adgange, fornyelser); processorer: Sanity, Railway, domæneregistrator, evt. betaling/booking, sensor-sky, scraping, e-mail"
   }
  ],
  "needs": "Backup-ejer, databehandleraftaler og overførsel til USA (Resend)."
 },
 {
  "id": "N13.1",
  "g": "N13",
  "status": "open",
  "rel": "tilpasses",
  "title": "Fejlsider: 404 og 500",
  "what": "En hjælpsom, on-brand og tosproget side, når en side ikke findes (ægte 404-statuskode, links tilbage ind på sitet), og en rolig, minimal fejlside ved serverfejl, som ikke selv kan fejle.",
  "gausta": "Dansk er primært sprog, så rod-404 må ikke være engelsk. Gæsteområdet skal have en rolig, kort fejlside med hjælp (kontakt til ejer, nødnumre), helst også offline. Fejlsiden ved serverfejl skal bruge minimal indbygget CSS, fordi den erstatter hele dokumentet.",
  "built": {
   "s": "partial",
   "where": "app/[locale]/not-found.tsx og components/shell/NotFoundText.tsx findes (tekster fra Sanity på alle sprog, linker ikke til gæsteområdet); app/[locale]/[[...slug]]/page.tsx og layout.tsx kalder notFound() ved ukendt sprog eller side. Ikke fundet: app/global-error.tsx eller error.tsx. Ægte 404-statuskode og tilgængelighed i alle årstider ikke kontrolleret mod den kørende side."
  },
  "decided": "G52: sprogruter, engelsk uden præfiks. G55: valg af sprog huskes.",
  "deps": [
   "N10.4"
  ],
  "open": [
   "Hvad skal gæsteområdets fejlside indeholde, og skal den kunne vises uden netforbindelse?",
   "Skal 401 og 403 i back-office have egne sider adskilt fra 404?",
   "Hvem skriver og styrer 404- og 500-teksten på hvert sprog?",
   "Hvor skal logning af 404 og 500 ligge, og er den lovlig i Danmark og Norge?"
  ],
  "tasks": [
   {
    "id": "B13-0.1",
    "t": "Token-drevet, tema-bevidst not-found-side med klar besked og næste skridt, ægte HTTP 404; catch-all under locale kalder notFound() plus tidlig locale-validering",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "næste skridt bliver Hjem, Boliginfo/booking, Kontakt, gæsteområde; fire sæsontemaer; dansk og engelsk nu, norsk og tysk senere"
   },
   {
    "id": "B13-1.1",
    "t": "On-brand, betryggende global-error-side (app/global-error.tsx og/eller error.tsx), token-drevet og minimal uden afhængigheder",
    "prio": "P1",
    "rel": "gaelder",
    "note": "for gæsteområdet er en rolig fejlside ekstra vigtig (gæster på stedet, evt. dårlig dækning)"
   }
  ],
  "needs": "Indhold og sprog på 404- og 500-siderne, og logning (juridisk)."
 },
 {
  "id": "N13.2",
  "g": "N13",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Statuskoder og omdirigeringer",
  "what": "Ingen sider må svare 200 med fejlindhold (soft 404). Flyttede sider med indgående links omdirigeres permanent (301), og bevidst fjernede sider kan svare 410, så søgemaskiner dropper dem.",
  "gausta": "Ny side, så få udfasede adresser ved lancering. Permanente gæstelinks (QR) må aldrig ændres uden 301. Omdirigeringslisten udvides sammen med SEO-kravet og duplikeres ikke.",
  "built": {
   "s": "partial",
   "where": "next.config.ts har permanente omdirigeringer (www til rod-domænet) og en midlertidig for /studio; proxy.ts sender /en permanent (308) til stien uden /en. Ikke fundet: soft-404-tjek i en linkkontrol, 410-politik eller omdirigeringsliste for flyttede sider."
  },
  "decided": "G52: /en sendes permanent til stien uden præfiks. G58: Studio flyttet til egen adresse.",
  "deps": [
   "N13.1"
  ],
  "open": [
   "Hvilke udfasede adresser (om nogen) skal svare 410 ved lancering?"
  ],
  "tasks": [
   {
    "id": "B13-2.1",
    "t": "Ingen soft 404'er; 301 for flyttede linkede URL'er via redirect-map; 410 for udfasede sider; soft-404-tjek i link-checker",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "ny side, så få udfasede URL'er ved lancering; relevant ved senere omlægning og sæson-/kampagnesider"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N13.3",
  "g": "N13",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Søgning på sitet (udskudt)",
  "what": "Byg ikke søgning, før der er et korpus af guider eller artikler at søge i. Når det sker, er anbefalingen Pagefind (statisk, uden cookies og uden ekstern tjeneste) frem for en hostet søgetjeneste som Algolia.",
  "gausta": "Kan blive relevant for lokal guide (ski, vandring, aktiviteter) og gæste-how-tos, og Pagefind passer til et offline-venligt gæsteområde. Om indeks pr. sprog virker for norsk og tysk, er ikke afklaret. Gæsteområdets søgning i inventaret (G106) er noget andet.",
  "built": {
   "s": "none",
   "where": "Ingen sitesøgning fundet i produktionsrepoet (ingen Pagefind eller Algolia i package.json). Udskudt by design."
  },
  "decided": "G106: gæsteområdets søgning bruger inventardata (kun prototypen).",
  "deps": [],
  "open": [
   "Hvornår findes der et guide-/blogkorpus, der udløser søgning, og skal søgning dække gæsteområdet?",
   "Er Pagefind-indeks pr. sprog (da, en, no, de) godt nok til stemming og diakritik?"
  ],
  "tasks": [
   {
    "id": "B13-3.1",
    "t": "Byg ikke søgning før guide/blog-korpus findes; nedskriv trigger (Pagefind først, Algolia kun ved stort korpus); fremtidig søgeanalyse samtykke-bevidst og EU-resident",
    "prio": "P2",
    "rel": "tilpasses",
    "note": "kan blive relevant for lokal guide og gæste-how-tos; Pagefind passer også til offline-venligt gæsteområde"
   }
  ],
  "appr": "Udskudt, og kravet er at vente, til der er indhold nok."
 },
 {
  "id": "CMS.1",
  "g": "CMS",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Headless og designtroskab",
  "what": "Indholdssystemet ejer ikke visningen: det leverer kun indhold som data, og sitets eget design og animationer bevares uændret. Temaer ligger som tokens i koden, ikke i indholdssystemet. Hårdkodede designmockups og layout bliver i koden, mens redaktionel tekst kommer fra CMS'et.",
  "gausta": "Gausta har fire årstidstemaer, og de skal fortsat være tokens i kode. Indholdssystemet vælger kun, hvilke billeder og tekster der hører til en årstid.",
  "built": {
   "s": "done",
   "where": "Sanity leverer kun indhold, Next.js ejer visningen (sanity/lib/fetch.ts, sanity/lib/queries.ts, components/blocks/). Årstidstemaerne er tokens i styles/tokens.css og lib/season.ts. Årstider på billeder er et felt i sanity/schemaTypes/objects/imageWithAlt.ts. Der er ingen mørk tilstand (G20)."
  },
  "decided": "G20 (ingen mørk tilstand), G53 (når et element er bygget, bor teksten i Sanity). Intet seasonConfig-dokument: årstider vælges pr. billede.",
  "deps": [],
  "open": [
   "Skal fallback-billede for en årstid uden billeder være en fast regel i koden, eller et felt i CMS'et?"
  ],
  "tasks": [
   {
    "id": "CMS-01",
    "t": "Headless, CMS ejer ikke rendering",
    "prio": "P0",
    "rel": "gaelder",
    "note": "sæsontemaer og eget design kræver fuld kontrol over front-end"
   },
   {
    "id": "CMS-03",
    "t": "Front-end-agnostisk",
    "prio": "P0",
    "rel": "gaelder",
    "note": "men valget er Next.js; ikke et aktivt krav"
   },
   {
    "id": "CMS-04",
    "t": "Indhold er tema-agnostisk, ingen temalogik i CMS",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "Gausta vælger sæsonspecifikke billeder i CMS; temaet (4 sæsoner) bør stadig være tokens i kode, kun billedvalg og sæsonmetadata i CMS"
   },
   {
    "id": "PAGE-02",
    "t": "Hårdkodede designmockups, CMS til redaktionel tekst",
    "prio": "",
    "rel": "tilpasses",
    "note": "sæsonhero og layout hårdkodes; tekst og billeder i CMS"
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "CMS.2",
  "g": "CMS",
  "status": "open",
  "rel": "tilpasses",
  "title": "Platformvalg, hosting og pris",
  "what": "Hvilket indholdssystem og hvilken stak sitet bygges på, og hvordan det hostes: en administreret tjeneste uden egen drift, helst med data i EU, en gratis eller billig plan og en leverandør, der holder. Stormpine valgte Sanity med Next.js på Railway.",
  "gausta": "Samme valg som Stormpine. Planen er Free, og alt i Sanity er offentligt indhold. Interne data ligger aldrig i Sanity.",
  "built": {
   "s": "partial",
   "where": "Next.js 16 og React 19, Sanity 6 og next-sanity (package.json). Studio er udrullet automatisk fra CI (.github/workflows/ci.yml). Free-plan, offentligt datasæt og åbent punkt om region ifølge teknisk/sanity-setup.md, ikke kontrolleret i selve tjenesten. Railway-hosting ifølge teknisk/stack-og-arkitektur.md, ikke kontrolleret. Planlimits, EU-region og periodisk eksport er ikke kontrolleret."
  },
  "decided": "G3 (stak som Stormpine), G13 (Free med omkostningsloft), G33 afløst af G34 (Free, kun offentligt indhold), G58 (Studio for sig selv).",
  "deps": [],
  "open": [
   "Er Sanity-datasættet i EU-region, og kan det vælges uden omkostning for et eksisterende projekt?",
   "Hvad er den aktuelle planlimit for Free (requests, båndbredde, datasæt), når sitet vokser?",
   "Skal der laves en periodisk eksport af datasættet, og hvor skal den gemmes?",
   "Hvem er backup-medlem i Sanity-projektet, hvis ejeren mister adgang?"
  ],
  "tasks": [
   {
    "id": "Q1",
    "t": "Front-end-framework (lukket 2026-08-03: Next.js 16)",
    "prio": "",
    "rel": "tilpasses",
    "note": "foreløbig samme stak (Antagelse)"
   },
   {
    "id": "Q2",
    "t": "CMS-valg (lukket 2026-08-04: Sanity)",
    "prio": "",
    "rel": "gaelder",
    "note": "se Tilpasning i kravfilen"
   },
   {
    "id": "Q3",
    "t": "Deploy-mål (lukket 2026-08-04: Railway)",
    "prio": "",
    "rel": "tilpasses",
    "note": "foreløbig samme (EU-region)"
   },
   {
    "id": "NF-03",
    "t": "Leverandørholdbarhed og MCP-levetid",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "HOST-01",
    "t": "SaaS/managed",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "HOST-02",
    "t": "EU-region",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "privat ejer, men gæstedata og navne taler for EU; bekræft dataset-region ved oprettelse"
   },
   {
    "id": "HOST-03",
    "t": "Indholdseksport/portabilitet (NDJSON)",
    "prio": "P1",
    "rel": "gaelder",
    "note": "planlæg periodisk eksport"
   },
   {
    "id": "NF-02",
    "t": "Gratis/lav tier brugbar til marketing, forudsigelig pris ved vækst",
    "prio": "P0",
    "rel": "gaelder",
    "note": "afgørende: privat budget"
   },
   {
    "id": "SAN-01",
    "t": "Sanity Free-tier (0 EUR)",
    "prio": "",
    "rel": "gaelder",
    "note": "én redaktør passer til Free"
   }
  ],
  "needs": "Sanity-plan og EU-region (omkostning), periodisk eksport og backup-medlem."
 },
 {
  "id": "CMS.3",
  "g": "CMS",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sider, sektionsblokke og globale dokumenter",
  "what": "Indholdet er opdelt i sider, der består af typede sektionsblokke (hero, kort, FAQ, CTA, tekst), og i faste dokumenter som navigation, footer, standard-SEO og genbrugelige fakta. Alt er strukturerede, validerede felter, så både mennesker og AI kan skrive pålideligt. Sider hentes med typede forespørgsler.",
  "gausta": "Gausta bruger hero, kort, FAQ, CTA, rig tekst, galleri, faciliteter, omegn og kontakt. Walkthrough, priser og tillid er Stormpine-specifikke. Fakta som sengepladser og areal skal ligge ét sted og refereres.",
  "built": {
   "s": "partial",
   "where": "Dokumenttyperne page, navigation, footer, settings, apartmentFacts, uiStrings, room, place, event, hike og pressItem samt 19 blokke i sanity/schemaTypes/ (pageBuilder.ts, blocks/). Genbrugelige objekter link, seo og imageWithAlt i sanity/schemaTypes/objects/. apartmentFacts bruges af faktalinjen (sanity/lib/queries.ts). Forespørgsler er GROQ med defineQuery. Ikke kontrolleret: genereret typning af forespørgselsresultater. Ikke bygget: generelt snippet-dokument udover apartmentFacts og et seasonConfig-dokument."
  },
  "decided": "G53 (kun godkendte elementer bygges, tekst i Sanity), G34 (kun offentligt indhold), G45 (6 senge).",
  "deps": [
   "N1.1"
  ],
  "open": [
   "Skal der være et særskilt dokument til årstidskonfiguration, eller er årstid pr. billede nok?",
   "Hvor ligger sandheden for fakta: faktaarket i vidensbasen eller apartmentFacts i CMS'et?"
  ],
  "tasks": [
   {
    "id": "CMS-02",
    "t": "Modulær/blokbaseret indholdsmodel",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-08",
    "t": "Struktureret, valideret indhold",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-14",
    "t": "Globals: nav, footer, Materials, standard-SEO/OG, sociale links",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Gausta har ikke Materials-menu; nav/footer/SEO gælder; tilføj fakta-singleton og sæson-singleton"
   },
   {
    "id": "CMS-15",
    "t": "Pages: slug + SEO + sections[]",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-16",
    "t": "Sektionsblokke: Hero, Built-for, Walkthrough, Pillars, Cards, Pricing+FAQ, Trust, CTA, rich text",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Gausta bruger Hero, Cards, FAQ, CTA, rich text, galleri, faciliteter, omegn, kontakt/booking; Walkthrough/Pricing/Trust/Journey ikke relevante i samme form"
   },
   {
    "id": "CMS-17",
    "t": "Reusable objekter: CTA, Link, Icon",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-18",
    "t": "Genbrugelige indholdssnippets",
    "prio": "P2",
    "rel": "gaelder",
    "note": "fakta (sengepladser, afstande) bør komme fra fakta-singleton"
   },
   {
    "id": "DEP-01",
    "t": "Typet API-konsum (GROQ)",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "CMS.4",
  "g": "CMS",
  "status": "open",
  "rel": "tilpasses",
  "title": "Flersproget indhold i CMS'et",
  "what": "Indhold kan skrives på flere sprog ét sted, med fallback så intet vises tomt, sprogrouting og korrekt SEO. Stormpine valgte dokumentniveau (ét dokument pr. sprog) og et bibliotek til knapper og labels. Oversættelse kan udkastes af AI og gennemgås af et menneske, og oversættelsesstatus kan ses pr. sprog. Detaljerne for adresser og fallback står i gruppen Sprog og routing.",
  "gausta": "Gausta valgte i stedet felt for felt i samme dokument (da, en, no, sv) og gemmer knapper og labels i CMS'et. Engelsk ligger på / og dansk på /da. Det afløser kravfilens antagelse om dansk på / og dokumentniveau.",
  "built": {
   "s": "partial",
   "where": "Sprogfelter med sanity-plugin-internationalized-array (sanity.config.ts, sanity/i18n.ts, lib/i18n.ts), engelsk og dansk er påkrævet. UI-tekster ligger i dokumentet uiStrings (sanity/schemaTypes/documents/uiStrings.ts). Sprogruter i proxy.ts. Hverken oversættelsesstatus pr. sprog, AI-udkast til oversættelse i selve opsætningen eller landespecifikt indhold ud over omtalernes markeder (pressItem.ts) er set. Ikke kontrolleret: AI Assist eller MCP til oversættelse."
  },
  "decided": "G52 (engelsk på /, dansk /da, norsk /no, svensk /sv), G56 (oversættelse pr. felt, afløser dokumentniveau), G55 (sprogcookie uden samtykke), G59 (URL-navne pr. sprog), G30 (omtalernes marked).",
  "deps": [
   "I18N.1",
   "I18N.2"
  ],
  "open": [
   "Skal oversættelsesudkast fra AI være en fast proces med gennemgang, og hvem gennemgår norsk og svensk?",
   "Skal der være en oversigt over, hvilke sider der findes på hvilke sprog?"
  ],
  "tasks": [
   {
    "id": "L-01",
    "t": "Flersproget indhold med oversættelsesworkflow",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dansk primær, engelsk, senere norsk/tysk (afløst: engelsk på /, dansk, norsk og svensk, G52)"
   },
   {
    "id": "L-02",
    "t": "Locale-fallback",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "retningen skal vendes (afløst af G52: chrome falder tilbage til engelsk, indholdssider har eksakt match)"
   },
   {
    "id": "L-03",
    "t": "Sprogrouting, switcher, hreflang, per-locale-URL",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dansk på /, engelsk på /en (afløst: engelsk på /, dansk på /da, G52)"
   },
   {
    "id": "L-04",
    "t": "Én tilgang til website og produkt",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "produkt findes ikke; back-office er separat app, kan have egen UI-i18n senere"
   },
   {
    "id": "L-05",
    "t": "AI-assisteret oversættelse",
    "prio": "P1",
    "rel": "gaelder",
    "note": "engelsk/norsk/tysk-udkast med dansk eller menneskelig gennemgang"
   },
   {
    "id": "L-06",
    "t": "Oversættelsesstatus pr. locale",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "L-07",
    "t": "Per-locale-forskelle ud over oversættelse",
    "prio": "P2",
    "rel": "gaelder",
    "note": "fx norske/tyske målgrupper, valuta, rejsevej"
   },
   {
    "id": "Q4",
    "t": "Lokaliseringsplatform eller CMS (lukket 2026-08-04: dokument-i18n + next-intl)",
    "prio": "",
    "rel": "gaelder",
    "note": "afløst i praksis af G56 og knapper/labels i Sanity"
   }
  ],
  "needs": "Afventer din beslutning om sprog (svar 18. oktober 2026: afvent). Om AI-oversættelser skal gennemgås, og af hvem.",
  "waits": true
 },
 {
  "id": "CMS.5",
  "g": "CMS",
  "status": "open",
  "rel": "gaelder",
  "title": "AI og MCP-adgang",
  "what": "En vedligeholdt MCP-server (en standardforbindelse for AI-værktøjer) gør, at en AI-agent kan læse, oprette, opdatere og udgive indhold og udvide skemaet. Agentens adgang afgrænses med så snævre rettigheder som muligt, og skrivninger lander som kladder til gennemsyn. Ekstra AI-funktioner som forslag og bulk-redigering er et plus.",
  "gausta": "Gælder uændret. Anbefaling i kravfilen: agentskrivninger lander som kladder, og ejeren publicerer. Skrivetokens må aldrig ligge i klientkode.",
  "built": {
   "s": "partial",
   "where": "Skemaet er kode og kan udvides i repoet (sanity/schemaTypes/). Sanity-forbindelsen til Claude og dens kontoadskillelse fra Stormpine er beskrevet i teknisk/sanity-setup.md. Sitets læse-token er kun Viewer og kun på serveren (sanity/lib/client.ts, .env.example). Ikke kontrolleret: hvilke rettigheder MCP-forbindelsen har, om agenter kun må skrive kladder, og om der er separat token pr. formål."
  },
  "decided": "G29 (konti på Gmail), og regel i teknisk/sanity-setup.md: kun den nye Sanity-forbindelse bruges til dette projekt.",
  "deps": [],
  "open": [
   "Må agenter publicere selv, eller kun skrive kladder?",
   "Skal der være et særskilt token pr. formål (læse, webhook, studio-udrulning) med mindste rettigheder?"
  ],
  "tasks": [
   {
    "id": "CMS-06",
    "t": "Vedligeholdt/officiel MCP",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-07",
    "t": "Agent læser/opretter/opdaterer/publicerer",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-09",
    "t": "Skemaet kan udvides via MCP/schema-as-code",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-12",
    "t": "Scoped agent-auth",
    "prio": "P1",
    "rel": "gaelder",
    "note": "brug mindste privilegium; separat token pr. formål"
   },
   {
    "id": "CMS-13",
    "t": "AI-nativ ekstra (forslag, bulk, audits)",
    "prio": "P2",
    "rel": "gaelder",
    "note": "nyttigt til oversættelser og sæsonbilleder"
   }
  ],
  "needs": "Svar på, om agenter kun må lave kladder (anbefalet), og om kalenderscanneren må udgive events selv.",
  "rec": "Anbefaling: agenter skriver kun kladder, og du udgiver. Sanity Free har kun få token-roller (læse, redigere, udrulle Studio), så en agent med redigeringsret kan teknisk meget. Derfor: (1) en agent får sit eget token, som kan oprette kladder, (2) agenten opretter kun dokumenter af den type, den har til opgave, og aldrig sider, menu eller UI-tekster, (3) alt, den skriver, mærkes med kilde og dato, og (4) du udgiver i Studio. Undtagelse, som du kan vælge: events fra kalenderscanneren kan udgives automatisk som \"traditionel\" (ikke bekræftet), da de er lavrisiko og dateret."
 },
 {
  "id": "CMS.6",
  "g": "CMS",
  "status": "approved",
  "rel": "gaelder",
  "title": "Redigering, kladder og preview",
  "what": "Redaktøren skal have en brugbar administrationsflade, kladder og preview-adresser, der viser det rigtige site, samt versionshistorik og mulighed for at rulle tilbage. Preview skal kobles til sitet, så kladder kan ses uden at være offentlige.",
  "gausta": "Gælder uændret. Der er kun én redaktør, så roller og godkendelser springes over.",
  "built": {
   "s": "partial",
   "where": "Sanity Studio med egen struktur (sanity/structure.ts) og Presentation med klik-for-redigér (sanity.config.ts, sanity/presentation/resolve.ts). Draft mode i app/api/draft-mode/enable/route.ts og disable/route.ts, VisualEditing i app/[locale]/layout.tsx, kladder kun med token (sanity/lib/fetch.ts). Faste dokumenter kan ikke oprettes eller slettes (sanity.config.ts). Versionering og tilbagerulning er indbygget i Sanity og ikke kontrolleret her."
  },
  "decided": "G58 (Studio kører for sig selv), G53.",
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "CMS-10",
    "t": "Kladde, preview, publicér",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "CMS-11",
    "t": "Versionering og rollback",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "ED-01",
    "t": "Brugbar admin",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "ED-02",
    "t": "Preview-URL'er mod rigtigt front-end",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "DEP-03",
    "t": "Preview/draft-mode i front-end",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "CMS.7",
  "g": "CMS",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Udgivelse, cache og nye sider",
  "what": "Når indhold udgives, melder CMS'et det til sitet med en signeret webhook (en automatisk besked), og sitet opdaterer de berørte sider uden ny udrulning. Sitet er hurtigt, fordi siderne er cachet. Nye sider tilføjes efter en fast proces, startende med én side hele vejen igennem, og nye moduler specificeres efter en skabelon.",
  "gausta": "Webhooken oprettes i Gaustas eget Sanity-projekt. Forsiden blev bygget først som lodret slice, og siderne følger efter én ad gangen (G54).",
  "built": {
   "s": "partial",
   "where": "Webhook-ruten app/api/revalidate/route.ts (signaturkontrol, hemmelighed kun som miljøvariabel). Cache med tag og en times sikkerhedsgrænse i sanity/lib/fetch.ts. Webhooken er afprøvet 18. oktober 2026 ifølge ikke-funktionelle-krav.md og kaldlog. Dynamiske sider bygges ved første besøg (app/[locale]/[[...slug]]/page.tsx). Byggeprocessen står i teknisk/byggeplan.md. Webhook-filteret i Sanity Manage er ikke kontrolleret; ruten nævner kun page, navigation, footer, uiStrings, settings, apartmentFacts, room, place og event, ikke pressItem og hike."
  },
  "decided": "G54 (fundament først, derefter én side ad gangen), G53, G34. 18. oktober 2026: 404 efter webhook-kald rettet (commit 6dccc9a).",
  "deps": [
   "N1.1"
  ],
  "open": [
   "Skal filteret i webhooken udvides til pressItem og hike, eller bruges intet filter?",
   "Hvordan sikres, at nye indholdstyper altid kommer med i webhook-filteret?"
  ],
  "tasks": [
   {
    "id": "CMS-05",
    "t": "Lav-drift-deploy, indholdsændring giver revalidate",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "DEP-02",
    "t": "Publicér, webhook, revalidate",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "WEBHOOK-01",
    "t": "Sanity Manage-webhook til /api/revalidate med delt hemmelighed",
    "prio": "",
    "rel": "gaelder",
    "note": "ny webhook i Gaustas eget projekt"
   },
   {
    "id": "NF-01",
    "t": "Hurtigt, statisk/cachet",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "PAGE-01",
    "t": "Port-/ny-side-proces (CSS, sektionstype, side-dokumenter, verificér, DoD, deploy)",
    "prio": "",
    "rel": "gaelder",
    "note": "gælder som procesmønster"
   },
   {
    "id": "JRN-01",
    "t": "Journey-modul som eksempel på modulspecifikation",
    "prio": "",
    "rel": "tilpasses",
    "note": "skabelonen genbruges, selve modulet er ikke relevant"
   },
   {
    "id": "MIG-02",
    "t": "Spike med én side først",
    "prio": "P1",
    "rel": "gaelder",
    "note": "byg forside først end to end"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "CMS.8",
  "g": "CMS",
  "status": "approved",
  "rel": "ikke",
  "title": "Ikke relevant for Gausta (roller, visuel redigering, selvhost, dyrere planer, migrering)",
  "what": "Krav og valg fra Stormpine, der ikke giver mening for et privat site med én redaktør: roller og godkendelser, visuel redigering i kontekst, selvhostet CMS, dyrere planer eller et skifte til Storyblok, og migrering fra en eksisterende prototype.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "decided": "G17 (ren start uden skabelon), G34 (Free).",
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "ED-03",
    "t": "Roller/godkendelser",
    "prio": "P2",
    "rel": "ikke",
    "note": "én redaktør"
   },
   {
    "id": "ED-04",
    "t": "Visuel redigering i kontekst",
    "prio": "P2",
    "rel": "ikke",
    "note": "ikke relevant nu (Storyblok-argumentet bortfalder)"
   },
   {
    "id": "HOST-04",
    "t": "Selvhost-mulighed",
    "prio": "P2",
    "rel": "ikke",
    "note": ""
   },
   {
    "id": "SAN-02",
    "t": "Growth ved flere sæder/roller (ca. 15 USD pr. sæde pr. måned)",
    "prio": "",
    "rel": "ikke",
    "note": "medmindre forbrug overskrides"
   },
   {
    "id": "STB-01",
    "t": "Storyblok som pivot",
    "prio": "",
    "rel": "ikke",
    "note": "dyrere trin ca. 99 USD"
   },
   {
    "id": "MIG-01",
    "t": "Klar migreringsvej fra prototype",
    "prio": "P0",
    "rel": "ikke",
    "note": "intet at migrere, alt bygges nyt (kan bruge spike-princippet)"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "CMS.9",
  "g": "CMS",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Krydshenvisninger til de øvrige krav (B1 til B13)",
  "what": "Kravfilen peger på Stormpines øvrige områder, som har egne krav og står i andre filer: ydeevne, sikkerhed, privatliv, analyse, SEO, tilgængelighed, formularer, drift, e-mail, redaktionel styring, eksperimenter, omkostninger og fejlsider. De er ikke delopgaver her, men kroge, hvor CMS'et har en rolle (fx SEO-felter og alt-tekst som krævet felt).",
  "gausta": "Se de enkelte krav (N1 til N13). Krogene i CMS'et: SEO-felter pr. side, påkrævet alt-tekst og sidens indholdsmodel.",
  "built": {
   "s": "partial",
   "where": "SEO-felter findes (sanity/schemaTypes/objects/seo.ts), alt-tekst er påkrævet på engelsk og dansk (imageWithAlt.ts), og 404-tekster ligger i uiStrings. Resten vurderes i de øvrige krav og er ikke kontrolleret her."
  },
  "deps": [
   "N1.1",
   "N2.1"
  ],
  "open": [],
  "tasks": [
   {
    "id": "B1",
    "t": "Performance (budgetter i CI, fonts, billeder, ISR)",
    "prio": "P0",
    "rel": "gaelder",
    "note": "se qa-og-test.md"
   },
   {
    "id": "B2",
    "t": "Sikkerhed (HTTPS/HSTS, CSP, WAF, secrets)",
    "prio": "P0",
    "rel": "gaelder",
    "note": "tungere for back-office"
   },
   {
    "id": "B3",
    "t": "Privatliv/samtykke/GDPR",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "gæstedata og sensor-/KPI-data; Datatilsynet"
   },
   {
    "id": "B4",
    "t": "EU-hostet cookieless analytics",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B5",
    "t": "SEO, JSON-LD, OG, sitemap, redirects",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "JSON-LD for LodgingBusiness/Accommodation i stedet for Organization/Product; gæsteområde noindex"
   },
   {
    "id": "B6",
    "t": "Tilgængelighed, alt-tekst som krævet felt",
    "prio": "P0",
    "rel": "gaelder",
    "note": "fire sæsoner"
   },
   {
    "id": "B7",
    "t": "Formularer, leads, CRM/ESP, booking",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "booking-model ikke besluttet"
   },
   {
    "id": "B8",
    "t": "Miljøer, CI/CD, oppetid, backup",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "lavere ambition (privat), men backup af indhold og back-office-DB"
   },
   {
    "id": "B9",
    "t": "SPF/DKIM/DMARC",
    "prio": "P1",
    "rel": "gaelder",
    "note": "hvis der sendes mail fra eget domæne"
   },
   {
    "id": "B10",
    "t": "Redaktionel governance, glossar, designsystem",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "glossar dansk/engelsk, ingen godkendelsesflow"
   },
   {
    "id": "B11",
    "t": "Eksperimenter og personalisering",
    "prio": "P2",
    "rel": "ikke",
    "note": "ikke relevant nu"
   },
   {
    "id": "B12",
    "t": "Omkostningskurve, portabilitet, ejerskab",
    "prio": "P1",
    "rel": "gaelder",
    "note": "budget"
   },
   {
    "id": "B13",
    "t": "Fejl-UX, 404, onsite-søgning",
    "prio": "P2",
    "rel": "gaelder",
    "note": "gælder for 404 (dansk/engelsk); søgning ikke relevant"
   }
  ],
  "appr": "Krydshenvisninger til de øvrige krav, ingen egen beslutning."
 },
 {
  "id": "I18N.1",
  "g": "I18N",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sprogmodel i Sanity",
  "what": "Hvordan oversat indhold gemmes: Stormpine valgte ét dokument pr. sprog, forbundet af et oversættelsesdokument, så sider kan afvige pr. marked og udgives uafhængigt. Knapper og labels ligger i et bibliotek ved siden af. Studio ligger uden for sprogrouting, og sitets navn oversættes ikke.",
  "gausta": "Gausta valgte det modsatte: hvert tekstfelt har da, en, no og sv side om side i samme dokument (G56). Det giver færre dokumenter, men ingen udgivelse pr. sprog: et sprog findes, når feltet er udfyldt. Knapper og labels ligger i dokumentet uiStrings i Sanity, ikke i et bibliotek.",
  "built": {
   "s": "partial",
   "where": "Sprogliste i lib/i18n.ts (en, da, no, sv), plugin sanity-plugin-internationalized-array i sanity.config.ts, påkrævet engelsk og dansk via sanity/i18n.ts. Knapper og labels i sanity/schemaTypes/documents/uiStrings.ts, hentet i sanity/lib/queries.ts. Intet next-intl i package.json. Studio ligger på egen adresse (G58). Udgivelse pr. sprog er ikke muligt med feltniveau. Ikke kontrolleret: om Studio selv vises på dansk."
  },
  "decided": "G56 (oversættelse pr. felt, afløser DEC-01 og DEC-02), G52 (sprog), G58 (Studio for sig selv).",
  "deps": [],
  "open": [
   "Skal norsk og svensk først være synlige, når alle felter på en side er oversat, eller kan delvist oversatte sider vises?"
  ],
  "tasks": [
   {
    "id": "I18N-01",
    "t": "Flere sprog ét sted + oversættelsesworkflow",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dansk primær, engelsk, senere norsk/tysk (afløst: engelsk på /, G52)"
   },
   {
    "id": "I18N-04",
    "t": "Én tilgang til website + produkt",
    "prio": "P1",
    "rel": "tilpasses",
    "note": "kun website; back-office kan få egen enkel UI-i18n"
   },
   {
    "id": "DEC-01",
    "t": "Dokumentniveau-i18n frem for feltniveau",
    "prio": "",
    "rel": "gaelder",
    "note": "sider divergerer pr. marked, sæsonbilleder (afløst: feltniveau, G56)"
   },
   {
    "id": "DEC-02",
    "t": "next-intl til UI-strenge, ikke i18next",
    "prio": "",
    "rel": "gaelder",
    "note": "afløst: UI-tekster i Sanity (uiStrings), G56"
   },
   {
    "id": "DEC-15",
    "t": "Studio kun engelsk, uden for [locale]",
    "prio": "",
    "rel": "tilpasses",
    "note": "Studio kan være dansk eller engelsk; ligger uden for locale-routing"
   },
   {
    "id": "DEC-16",
    "t": "siteName ikke lokaliseret",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta-navn er ikke oversat, men standard-SEO/beskrivelse bør lokaliseres via andre dokumenter"
   },
   {
    "id": "DEC-17",
    "t": "Pr.-locale-publicering",
    "prio": "",
    "rel": "gaelder",
    "note": "ikke mulig med feltniveau, se G56"
   }
  ],
  "appr": "G52 og G56 afgør sprogmodellen. Resten er tekniske regler."
 },
 {
  "id": "I18N.2",
  "g": "I18N",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Sprogruter og adresser",
  "what": "Standardsproget ligger uden præfiks, de øvrige under deres eget (fx /da). Besøgende vælger selv sprog, så adresserne er forudsigelige. Hver side har sit eget sproglige URL-navn, i små bogstaver og uden specialtegn, og forkert skrivemåde omdirigeres til den rigtige.",
  "gausta": "Afviger fra kravfilen: standard er engelsk på /, dansk på /da, norsk på /no og svensk på /sv (G52). /en omdirigeres permanent til stien uden /en. Ved første besøg på forsiden sendes besøgende efter browserens sprog, og valget huskes i en cookie (G55). Robotter omdirigeres aldrig.",
  "built": {
   "s": "partial",
   "where": "proxy.ts: /en sendes permanent (308) til stien uden /en, forsiden sendes ved første besøg efter Accept-Language (undtagen robotter) og husker valget i cookien gl_lang, og engelsk vises internt fra /en. URL-navne pr. sprog i sanity/schemaTypes/objects/localizedSlug.ts og app/[locale]/[[...slug]]/page.tsx. Ikke fundet i koden: omdirigering af blandet skrivemåde til små bogstaver, og validering af små bogstaver eller translitteration af æ, ø og å i URL-navne (ikke kontrolleret mod Sanitys standardregler for slug). Den sidste omdirigeringsregel ved ændret URL-navn er ikke bygget."
  },
  "decided": "G52, G55, G59 (URL-navne pr. sprog, gamle adresser skal omdirigeres ved ændring).",
  "deps": [
   "I18N.1"
  ],
  "open": [
   "Skal konventionen for æ, ø og å i URL-navne (ae, oe, aa eller a, o, a) fastlægges, før flere sider udgives?",
   "Hvordan holdes et redirect-kort over ændrede URL-navne efter lancering?"
  ],
  "tasks": [
   {
    "id": "I18N-03",
    "t": "Routing, switcher, hreflang, per-locale-URL",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "dansk på /, engelsk på /en (afløst: engelsk på /, dansk på /da, G52)"
   },
   {
    "id": "DEC-03",
    "t": "localePrefix: as-needed",
    "prio": "",
    "rel": "gaelder",
    "note": "med dansk som standard (afløst: engelsk som standard, G52)"
   },
   {
    "id": "DEC-04",
    "t": "localeDetection: false",
    "prio": "",
    "rel": "tilpasses",
    "note": "beslut, om / altid er dansk, ikke Accept-Language-baseret (afløst: Accept-Language ved første besøg, G52)"
   },
   {
    "id": "DEC-05",
    "t": "/en 307 til / (standardsprog uden præfiks)",
    "prio": "",
    "rel": "tilpasses",
    "note": "/da 307 til /; /en er rigtigt præfiks (afløst: /en sendes til /, 308)"
   },
   {
    "id": "DEC-06",
    "t": "Native per-locale-slugs",
    "prio": "",
    "rel": "gaelder",
    "note": "danske og engelske slugs (G59)"
   },
   {
    "id": "DEC-10",
    "t": "Lowercase-kebab slugs, danske tegn translittereres",
    "prio": "",
    "rel": "gaelder",
    "note": "æ, ø, å; tilføj tyske og norske tegn"
   },
   {
    "id": "DEC-11",
    "t": "Middleware 308 for blandet case",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "I18N.3",
  "g": "I18N",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Fallback og links mellem sprog",
  "what": "Hvad der vises, når en oversættelse mangler. Fælles dele (menu, footer, knapper) falder tilbage til et andet sprog, så intet er tomt. Indholdssider har eksakt match på sprog og URL-navn og giver 404, hvis oversættelsen mangler. Links mellem sider skrives én gang og vises på sidens sprog, og sprogvælgeren tilbyder kun sprog, siden findes på.",
  "gausta": "Gausta vender retningen i forhold til Stormpine: chrome falder tilbage til engelsk (som er standard). Et link til en side uden oversættelse vises som tekst uden link og mærket kommer snart, i stedet for at pege på et andet sprog.",
  "built": {
   "s": "done",
   "where": "sanity/lib/queries.ts: loc() falder tilbage til engelsk for menu, footer, knapper og standard-SEO, mens PAGE_QUERY kræver udfyldt titel på sproget. app/[locale]/[[...slug]]/page.tsx giver 404 uden oversættelse. Links til sider vælger sprogets URL-navn og vises uden link, hvis det mangler (lib/content.ts, components/shell/Nav.tsx, Footer.tsx). Sprogvælgeren læser sidens hreflang og viser kun sprog, siden findes på (components/shell/LanguageSwitcher.tsx). Ikke kontrolleret: opførsel for norsk og svensk, før de er udgivet."
  },
  "decided": "G52 (indtil en side er oversat, vises den ikke på norsk eller svensk), G56.",
  "deps": [
   "I18N.1",
   "I18N.2"
  ],
  "open": [
   "Hvad skal fallback være for gæsteområdet: dansk, engelsk eller gæstens eget valg?",
   "Skal der indføres en fallbackkæde for norsk og svensk, eller er engelsk altid nok?"
  ],
  "tasks": [
   {
    "id": "I18N-02",
    "t": "Locale-fallback til engelsk",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "fallback-retning skal besluttes (besluttet: engelsk er standard, G52)"
   },
   {
    "id": "DEC-07",
    "t": "CMS-afledt link-map + render-time-localizer",
    "prio": "",
    "rel": "gaelder",
    "note": "kanonisk sprog skifter (løst ved sideværdier pr. sprog, ikke en localizer)"
   },
   {
    "id": "DEC-08",
    "t": "Eksakt (slug, language)-match, 404 ved manglende locale",
    "prio": "",
    "rel": "tilpasses",
    "note": "se fallback-diskussion"
   },
   {
    "id": "DEC-09",
    "t": "Nav/footer/home coalesce til engelsk",
    "prio": "",
    "rel": "tilpasses",
    "note": "coalesce til dansk (besluttet: coalesce til engelsk, standardsproget)"
   },
   {
    "id": "DEC-13",
    "t": "Sprogskifter deaktiveret, hvis oversættelse mangler",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "I18N.4",
  "g": "I18N",
  "status": "approved",
  "rel": "tilpasses",
  "title": "SEO og sprogmærkning",
  "what": "Hver side skal oplyse søgemaskiner om sine sprogudgaver: en selvrefererende canonical-adresse, gensidige hreflang-links kun for sprog, der findes, og en standardudgave. Sidens sprog skal sættes i html-elementet, og delekort skal oplyse sproget.",
  "gausta": "x-default er den engelske udgave på / (G52). Gæsteområdet er noindex og kommer ikke i sitemap eller hreflang. Hele sitet er noindex indtil lancering.",
  "built": {
   "s": "partial",
   "where": "app/[locale]/[[...slug]]/page.tsx: canonical og alternates.languages fra sidens udfyldte sprog med x-default til engelsk, og delekort med sprog. app/[locale]/layout.tsx sætter lang pr. sprog og noindex indtil lancering (app/robots.ts, next.config.ts). Ikke bygget: sitemap (ingen sitemap-fil i repoet), kort med fulde landekoder i delekort (der bruges kun sprogkoden), og test af hreflang-gensidighed (ingen i18n-test i tests/)."
  },
  "decided": "G52 (/ er x-default), N5-krav om noindex indtil lancering.",
  "deps": [
   "I18N.2",
   "I18N.3"
  ],
  "open": [
   "Skal x-default blive engelsk, eller skal det justeres efter lanceringsmålgruppen?",
   "Skal delekort bruge fulde landekoder (fx da_DK, nb_NO)?"
  ],
  "tasks": [
   {
    "id": "DEC-12",
    "t": "Selvrefererende canonical + reciprokke hreflang (en, da, x-default)",
    "prio": "",
    "rel": "tilpasses",
    "note": "x-default og sprogliste"
   },
   {
    "id": "DEC-14",
    "t": "html lang pr. locale; OG-locale-map",
    "prio": "",
    "rel": "gaelder",
    "note": "da_DK, en_GB/en_US, nb_NO, de_DE"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "I18N.5",
  "g": "I18N",
  "status": "open",
  "rel": "tilpasses",
  "title": "Oversættelse, kvalitet og nye sprog",
  "what": "Hvordan nye sprog tilføjes, og hvordan oversættelser holdes gode: AI kan udkaste, et menneske gennemgår, og et fælles ordforråd sikrer ensartede termer. Status pr. sprog skal kunne ses, og nogle sprog kan have egne forskelle ud over oversættelse, fx valuta eller rejsevej.",
  "gausta": "Dansk er kildesproget, så kvalitetsrisikoen ligger i engelsk, norsk og svensk. Tal og fakta oversættes ikke, men hentes fra faktadokumentet. Norsk og svensk er i modellen, men udgives først efter gennemgang.",
  "built": {
   "s": "partial",
   "where": "Et nyt sprog føjes til listen i lib/i18n.ts, som både sitet og Studio bruger (lib/i18n.ts, sanity/i18n.ts). Norsk og svensk er allerede defineret, men ikke udgivet (PUBLISHED_LOCALES i lib/i18n.ts). Fakta ligger i apartmentFacts (sanity/schemaTypes/documents/apartmentFacts.ts). URL-navn pr. sprog er et fast objekt og skal udvides ved nyt sprog (localizedSlug.ts). Ikke fundet: ordliste, kvalitetstjekliste, oversættelsesstatus eller dokumenteret AI-udkastproces i repoet. Seed-filer: kun sanity/seed/ui-inquiry.json."
  },
  "decided": "G52, G56.",
  "deps": [
   "I18N.1"
  ],
  "open": [
   "Hvem gennemgår norsk og svensk, og hvornår lanceres de?",
   "Skal valuta (DKK, NOK, EUR) vises pr. sprog, med hensyn til reglen om ikke at blande valutaer i samme subtotal?",
   "Skal der laves en ordliste for ejendomstermer på dansk, engelsk, norsk og svensk?"
  ],
  "tasks": [
   {
    "id": "I18N-05",
    "t": "AI-assisteret oversættelse",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "I18N-06",
    "t": "Oversættelsesstatus pr. locale",
    "prio": "P1",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "I18N-07",
    "t": "Per-locale-forskelle ud over oversættelse",
    "prio": "P2",
    "rel": "gaelder",
    "note": "valuta (NOK/DKK/EUR), rejsevej fra Danmark/Norge/Tyskland"
   },
   {
    "id": "TASK-01",
    "t": "Tilføj locale: routing, messages, supportedLanguages, dokumenter, OG_LOCALE",
    "prio": "",
    "rel": "gaelder",
    "note": "norsk/svensk senere (afløst: tilføj til LOCALES i lib/i18n.ts, G52)"
   },
   {
    "id": "TASK-02",
    "t": "Seed-dokumenter pr. sprog",
    "prio": "",
    "rel": "gaelder",
    "note": "seed-fil med danske og engelske sider"
   },
   {
    "id": "GATE-01",
    "t": "Manuel dansk-kvalitetscheck pr. side",
    "prio": "",
    "rel": "tilpasses",
    "note": "kvalitetsgate pr. ikke-primært sprog og for dansk originaltekst"
   },
   {
    "id": "GATE-02",
    "t": "DA/EN-glossar og husstil (B10)",
    "prio": "P1",
    "rel": "gaelder",
    "note": "dansk/engelsk/norsk/svensk-glossar for ejendomstermer"
   }
  ],
  "needs": "Afventer din beslutning om sprog (svar 18. oktober 2026: afvent). Hvem gennemgår norsk og svensk, og hvilken valuta der vises pr. sprog.",
  "waits": true
 },
 {
  "id": "I18N.6",
  "g": "I18N",
  "status": "open",
  "rel": "tilpasses",
  "title": "Tosprogede fejlsider og politikker",
  "what": "Fejlsiden (404) og juridiske sider som privatlivs- og cookiepolitik skal findes på sitets sprog, ikke kun ét. Fejlsiden skal give nyttige næste skridt, og politikkerne skal afspejle, hvad sitet faktisk gør.",
  "gausta": "Privatlivs- og cookiepolitik skal findes mindst på dansk og engelsk. Sprogcookien skal oplyses i cookiepolitikken (G55).",
  "built": {
   "s": "partial",
   "where": "404-siden app/[locale]/not-found.tsx henter teksterne på alle sprog fra uiStrings og vælger sproget efter siden (components/shell/NotFoundText.tsx), linker aldrig til gæsteområdet. Privatlivs-, cookie- og vilkårssiderne er ikke bygget: footerlinks vises som kommer snart (G42, lib/content.ts). Politikkernes indhold er ikke skrevet."
  },
  "decided": "G11 (privatlivsvurdering åben), G42 (footer, tekster til privatliv og cookies åbne), G55.",
  "deps": [],
  "open": [
   "Hvem skriver privatlivs- og cookiepolitikken, og på hvilke sprog fra start?"
  ],
  "tasks": [
   {
    "id": "GATE-03",
    "t": "Tosproget 404 (B13)",
    "prio": "P2",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "GATE-04",
    "t": "Tosprogede politikker (B3)",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "privatlivs-/cookiepolitik på alle sprog (kan være dansk + engelsk først)"
   }
  ],
  "needs": "Hvem skriver privatlivs- og cookiepolitikken, og på hvilke sprog."
 },
 {
  "id": "I18N.7",
  "g": "I18N",
  "status": "approved",
  "rel": "ikke",
  "title": "Ikke relevant for Gausta (genbrug i produktapp)",
  "what": "Stormpine genbruger sin sprogopsætning i en produktapp. Gausta har intet produkt, og back-office er en separat app med dansk brugerflade.",
  "built": {
   "s": "none",
   "where": "Ikke relevant for Gausta."
  },
  "deps": [],
  "open": [],
  "tasks": [
   {
    "id": "REUSE-01",
    "t": "Genbrug i produktappen",
    "prio": "",
    "rel": "ikke",
    "note": "intet produkt; back-office er separat"
   }
  ],
  "appr": "Afgrænsning: ikke relevant for Gausta. Dermed bygges det ikke."
 },
 {
  "id": "QA.1",
  "g": "QA",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Principper, rolle og manuel tjekliste",
  "what": "Kvalitetssikring har to halvdele: automatiske tjek, der blokerer en ødelagt ændring, og en kort manuel tjekliste til det, en maskine ikke kan vurdere (sprogkvalitet, delingskort, visuel finish, skærmlæser). Der bygges trinvist, ikke en udtømmende suite før siderne findes. Én kommando skal køre den automatiske suite, og hver ændring måles mod en Definition of Done.",
  "gausta": "Ejeren er eneste menneske, så en agent kan køre tjek og tjekliste, men ejeren godkender sprog og fakta. Tjeklisten tilpasses ferieudlejning: Facebook- og WhatsApp-forhåndsvisning, otte sæson/tema-kombinationer (jf. QA.4 om at mørk tilstand ikke findes), fakta mod faktaarket, gæsteområde og live-data-fallback.",
  "built": {
   "s": "partial",
   "where": "Automatiske tjek findes: .github/workflows/ci.yml (typecheck, vitest, kontrast, skemavalidering, build) og package.json (scripts typecheck, test, contrast). Der er ingen samlet kommando som pnpm qa, ingen PR-skabelon (.github indeholder kun workflows) og ingen AGENTS.md i repoet. Definition of Done står i vidensbasen (teknisk/byggeplan.md afsnit 3), ikke som fil i repoet. Ikke kontrolleret: om en tjekliste bruges i praksis."
  },
  "decided": "Byggeplanen A4 (byggeplan.md) opererer med QA som del af skal-laget. Ingen G-nummer dækker selve QA-principperne.",
  "deps": [
   "N1.1"
  ],
  "open": [
   "Skal der oprettes en samlet kommando (fx pnpm qa) og en PR-skabelon med den tilpassede tjekliste?",
   "Skal Definition of Done flyttes ind i repoet som fil, så agenter ser den?",
   "Hvilken kilde er autoritativ for fakta, og kan afstemningen gøres maskinlæsbar (jf. QA.2)?"
  ],
  "tasks": [
   {
    "id": "QA-01",
    "t": "Princip: automatiserede CI-gates plus manuel tjekliste",
    "prio": "",
    "rel": "gaelder",
    "note": "samme to halvdele"
   },
   {
    "id": "QA-10",
    "t": "pnpm qa som én kommando",
    "prio": "",
    "rel": "gaelder",
    "note": "endnu ikke oprettet; CI kører scripts enkeltvis"
   },
   {
    "id": "QA-11",
    "t": "Krav-til-test-mapping (SEO, performance, tilgængelighed, i18n, redirects, visuel, funktionel)",
    "prio": "",
    "rel": "gaelder",
    "note": "mapping bruges som tjekliste for, hvilke tests der mangler"
   },
   {
    "id": "QA-13",
    "t": "Manuel tjekliste (7 punkter) plus PR-skabelon",
    "prio": "",
    "rel": "tilpasses",
    "note": "udvides med sæson/tema, fakta, gæsteområde og live-data-fallback; Facebook og WhatsApp frem for LinkedIn"
   },
   {
    "id": "QA-20",
    "t": "Køreplan: byg trinvist, ingen udtømmende suite før siderne findes",
    "prio": "",
    "rel": "gaelder",
    "note": "passer til Gaustas byggeplan, ét element ad gangen"
   },
   {
    "id": "QA-22",
    "t": "Definition of Done i AGENTS.md",
    "prio": "",
    "rel": "tilpasses",
    "note": "egen Definition of Done for Gausta"
   },
   {
    "id": "QA-23",
    "t": "Hvem er QA: suite plus reviewer",
    "prio": "",
    "rel": "tilpasses",
    "note": "ejeren plus agent; ejeren godkender sprog og fakta"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "QA.2",
  "g": "QA",
  "status": "approved",
  "rel": "gaelder",
  "title": "Statiske tjek, build og enhedstests",
  "what": "Typekontrol, lint og format fanger fejl uden at starte siden. Build-trinnet fanger fejl i metadata og servergengivelse. Enhedstests (Vitest) dækker de hjælpere, som mange sider genbruger: sprog- og hreflang-kort, sitemap, robots og indekserbarhedskontakten, redirects og forespørgsler mod Sanity.",
  "gausta": "Ud over Stormpines enheder skal sæsonlogik testes med faste datoer (og fald tilbage som aftalt, hvis sæsonbillede mangler), og ejendomsfakta på siden skal stemme med den ene faktakilde (propertyFacts) frem for at stå hårdkodet i komponenter.",
  "built": {
   "s": "partial",
   "where": "Typecheck (tsc --noEmit), build af site og Studio og skemavalidering kører i .github/workflows/ci.yml. Vitest er sat op (vitest.config.mts) med tests i tests/: season.test.ts (årstider), inquiry.test.ts (formular, mail, Turnstile, rate limit), live-tiles.test.ts, hike.test.ts, area.test.ts, gaustabanen.test.ts. Mangler: Biome/ESLint og format (ikke i package.json), tests af sitemap, hreflang-reciprocitet, robots og redirects (der findes ingen app/sitemap.ts, kun app/robots.ts), og faktatest. Ikke kontrolleret: om fakta er samlet i en propertyFacts-singleton i koden."
  },
  "decided": "Samme stack som Stormpine (Vitest, Next, pnpm). Beslutningsregistret har ingen særskilt beslutning om lint.",
  "deps": [],
  "open": [
   "Skal der indføres Biome eller ESLint, og hvem bestemmer reglerne?",
   "Kan faktaarket afstemmes automatisk, eller bliver det en manuel tjekpunkt?"
  ],
  "tasks": [
   {
    "id": "QA-02",
    "t": "Statisk: tsc --noEmit, Biome/ESLint, format",
    "prio": "",
    "rel": "gaelder",
    "note": "typecheck findes; lint og format mangler"
   },
   {
    "id": "QA-03",
    "t": "Build: next build i CI",
    "prio": "",
    "rel": "gaelder",
    "note": "findes i ci.yml, også for Studio"
   },
   {
    "id": "QA-04",
    "t": "Unit (Vitest): hreflang/alternates, sitemap, robots og indekserbarhedskontakt, redirect-map, GROQ-projektioner",
    "prio": "",
    "rel": "gaelder",
    "note": "udvides med nye enheder, se QA-G06 og QA-G07"
   },
   {
    "id": "QA-G06",
    "t": "Sæsonlogik: rigtig sæson for en given dato (faste datoer), og fald tilbage ved manglende sæsonbillede",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 6; delvist dækket af tests/season.test.ts"
   },
   {
    "id": "QA-G07",
    "t": "Fakta-singleton: ejendomsfakta på siden stemmer med propertyFacts, og fakta hårdkodes ikke i komponenter",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 7; afstemning mod det verificerede faktaark er et åbent punkt"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "QA.3",
  "g": "QA",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Browsertests: sider, sprog og indekserbarhed",
  "what": "Playwright åbner siden i en rigtig browser og tjekker, at hver side svarer 200 på hvert sprog, at title, description, canonical og hreflang er rigtige, at noindex-headeren findes, og at konsollen er fri for fejl. Mapping til SEO-kravene (JSON-LD, delingskort, redirects) tilføjes pr. side.",
  "gausta": "Sprog (da, en, senere nb og de) testes med html lang, canonical, hreflang-reciprocitet, x-default og 404 ved forkert sprogslug. Gæsteområdet skal have noindex som header og meta, stå uden for sitemap, ikke have hreflang eller canonical og ikke linkes fra den offentlige side. Booking-flowet testes, når modellen er valgt.",
  "built": {
   "s": "none",
   "where": "Playwright findes ikke i package.json, og der er ingen e2e-tests i tests/. Det, der ville blive testet, er delvist på plads: noindex-header og sikkerhedsheadere i next.config.ts, Disallow i app/robots.ts, hreflang og x-default i app/[locale]/[[...slug]]/page.tsx, sprogruter i proxy.ts og lib/i18n.ts, og formularens Turnstile og rate limit i lib/inquiry/. Intet af det testes i browser. Gæsteområde er ikke fundet i repoet. Ikke kontrolleret: rigtige svar fra live-sitet."
  },
  "decided": "G52: engelsk som standard på /, dansk på eget præfiks, sprogvalg gemmes. N5 om noindex indtil lancering. Booking sker via gausta.com, men aftalen er ikke på plads endnu. Indtil da henvises til forespørgselsformularen og mail til ejeren (ejerens svar 18. oktober 2026).",
  "deps": [
   "N2.1"
  ],
  "open": [
   "Skal gæsteområdet beskyttes med noindex frem for Disallow i robots.txt? Disallow offentliggør stien.",
   "Hvordan sættes sæson og tema i DOM, så tests kan styre dem (attributnavne)?",
   "Hvilken booking-model vælges (G1 er åben), da booking-testen afhænger af den?"
  ],
  "tasks": [
   {
    "id": "QA-05",
    "t": "E2E, SEO og tilgængelighed (Playwright plus axe): 200 pr. sprog, meta, noindex-header, konsolfejl, axe",
    "prio": "",
    "rel": "gaelder",
    "note": "Playwright er ikke installeret endnu"
   },
   {
    "id": "QA-G02",
    "t": "Gæsteside-noindex: header og meta, ikke i sitemap, robots afslører ikke stien, ingen hreflang eller canonical, ikke linket offentligt",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 2; samme tilgang som noindex-header og indekserbarhedskontakten"
   },
   {
    "id": "QA-G08",
    "t": "i18n i Playwright: 200 pr. sprog, html lang, canonical, hreflang-reciprocitet, x-default, 404 på forkert slug, /da til /-redirect",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 8; se i18n-og-routing.md"
   },
   {
    "id": "QA-G09",
    "t": "Booking (hvis relevant): formularvalidering, honeypot og anti-bot, bekræftelsesflow",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta-tillæg 9; afhænger af valgt booking-model"
   },
   {
    "id": "B5-QA",
    "t": "JSON-LD, delingskort (OG) og redirects pr. side",
    "prio": "",
    "rel": "tilpasses",
    "note": "andre JSON-LD-typer end Stormpine"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "QA.4",
  "g": "QA",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Tilgængelighed, kontrast og visuel kontrol",
  "what": "Automatisk tilgængelighedstjek (axe) i browseren plus tjek af, at tekst og baggrund har nok kontrast. Visuel regression sammenligner skærmbilleder af udvalgte sider for at fange utilsigtede designbrud. Alt-tekst på billeder er et krævet felt, og overskrifter står i rækkefølge.",
  "gausta": "Stormpine udelukker kontrastreglen pga. kendt gæld. Gausta skal ikke have den undtagelse, men teste kontrast i alle sæson/tema-kombinationer, både som beregning direkte fra farvetokens og i browser, og særligt for tekst oven på sæsonbilleder. Kilden regner med otte kombinationer (4 sæsoner x 2 temaer), men Gausta har ingen mørk tilstand (G20), så det er fire sæsoner; forår er ifølge tests/season.test.ts ikke valgbart endnu.",
  "built": {
   "s": "partial",
   "where": "scripts/contrast.mjs beregner WCAG-kontrast for 19 farvepar i styles/tokens.css for alle fire sæsoner (76 kontroller) og afslutter med fejl under AA; det kører i .github/workflows/ci.yml (trin Kontrast). Alt-tekst: sanity/schemaTypes/objects/imageWithAlt.ts har validering (requireLocales). Mangler: axe i browser, test af tekst oven på hero-billeder (HeroSection.tsx bruger billede som baggrund), og visuel regression. Ikke kontrolleret: faktisk kontrast mod billeder."
  },
  "decided": "G20: ingen mørk tilstand. Kildekonflikt bevaret: kravteksten siger otte kombinationer, beslutningen giver fire sæsoner. tests/season.test.ts henviser til G81 for forårets deaktivering, men G81 i beslutningsregistret er en anden beslutning (back-up); ikke afklaret.",
  "deps": [
   "QA.3"
  ],
  "open": [
   "Hvilken kontrastpolitik gælder oven på billeder (overlay, tekstskygge, minimumskontrast), og er WCAG AA målet?",
   "Hvilken beslutning styrer, at forår ikke er valgbart, siden G81 ikke passer?",
   "Er visuel regression det værd, når ejeren er den eneste udvikler?"
  ],
  "tasks": [
   {
    "id": "QA-08",
    "t": "Visuel regression (toHaveScreenshot, lys/mørk, da/en)",
    "prio": "",
    "rel": "tilpasses",
    "note": "4 sæsoner x sprog, ingen mørk tilstand (G20); begræns til nøglesider; valgfri"
   },
   {
    "id": "QA-12",
    "t": "Axe udelukker color-contrast pt. (kendt gæld)",
    "prio": "",
    "rel": "ikke",
    "note": "Gausta skal teste kontrast fra start, se QA-G01"
   },
   {
    "id": "B6-QA",
    "t": "Alt-tekst krævet, kontrast, a11y i CI",
    "prio": "",
    "rel": "gaelder",
    "note": "udvidet med sæsonmatrix og billedtekst"
   },
   {
    "id": "QA-G01",
    "t": "Kontrast i alle sæson/tema-kombinationer: Playwright-matrix med axe, token-kontrast som unit-test, tekst mod hero-billeder",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta-tillæg 1; token-delen findes som scripts/contrast.mjs"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "QA.5",
  "g": "QA",
  "status": "approved",
  "rel": "gaelder",
  "title": "Performance, billeder, links og felt-måling",
  "what": "Hastighed måles i laboratoriet (Lighthouse med budgetfil, bundlestørrelse) og i marken (web-vitals), så en regression fanges før eller efter udgivelse. Et linktjek finder brudte interne og eksterne links. Lighthouse kører mod en lokal produktionsbuild eller en staging-adresse.",
  "gausta": "Sitet er billedtungt, så budgetter for billedstørrelse og LCP er vigtige. Tjek, at alle billeder har alt-tekst og faste dimensioner (ingen layoutspring), og at hero-billedet forhåndsindlæses. Hold tunge tjek til pull requests mod main eller natlig kørsel, så GitHub Actions' gratis minutter rækker.",
  "built": {
   "s": "none",
   "where": "Ingen Lighthouse CI, budget.json, size-limit, linkinator/lychee eller web-vitals i package.json eller ci.yml; ci.yml siger selv, at Lighthouse og axe tilføjes, når staging findes. Billedpipeline: Hero bruger next/image med sizes (components/blocks/HeroSection.tsx); G57 vælger Next-optimering på Railway. Ikke kontrolleret: faktiske målinger."
  },
  "decided": "G57: Next-optimering af billeder på Railway. Byggeplan A4 lister linkcheck, Lighthouse og axe på staging som planlagt.",
  "deps": [
   "QA.7"
  ],
  "open": [
   "Hvor høje budgetter er rimelige, og hvilke sider skal måles?",
   "Skal felt-måling (web-vitals) med nu, eller først efter lancering og samtykkevalg?"
  ],
  "tasks": [
   {
    "id": "QA-06",
    "t": "Linkcheck (linkinator/lychee)",
    "prio": "",
    "rel": "gaelder",
    "note": "planlagt i byggeplan A4"
   },
   {
    "id": "QA-07",
    "t": "Performance: Lighthouse CI plus budget.json plus size-limit",
    "prio": "",
    "rel": "gaelder",
    "note": "høj prioritet pga. billedmængde"
   },
   {
    "id": "QA-09",
    "t": "Felt-RUM: web-vitals mod analytics, evt. Unlighthouse-crawl",
    "prio": "",
    "rel": "gaelder",
    "note": "let version"
   },
   {
    "id": "QA-21",
    "t": "Lighthouse CI mod lokal next start eller staging-URL",
    "prio": "",
    "rel": "gaelder",
    "note": "samme valg"
   },
   {
    "id": "B1-QA",
    "t": "Performancebudgetter, fonts, billeder, ISR",
    "prio": "",
    "rel": "gaelder",
    "note": "billedtungt site"
   },
   {
    "id": "QA-G10",
    "t": "Billeder: alt-tekst på alle, korrekte dimensioner (ingen CLS), hero preload'et, Lighthouse-budget for LCP",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 10"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "QA.6",
  "g": "QA",
  "status": "open",
  "rel": "tilpasses",
  "title": "Robusthed og sikkerhed: offline, live-data og headere",
  "what": "Siden skal degradere pænt, når noget svigter, og sikkerhedsopsætningen skal testes. Det gælder fejl hos eksterne datakilder, manglende forbindelse og tomt indhold fra CMS'et. Sikkerhedsheadere og indholdspolitik (CSP) testes, og klientens kode må ikke indeholde hemmeligheder.",
  "gausta": "Live-data (vejr, snedybde, lifte, Gaustabanen) og eventuelle sensordata skal ved fejl vise ukendt eller sidste kendte værdi med tidsstempel og markering af forældede data, aldrig en brudt komponent. Offline-adfærd for gæsteområdet afhænger af, om det skal være en app med service worker. Sitet må ikke have runtime-kobling til hjemmeserveren (G28).",
  "built": {
   "s": "partial",
   "where": "Sikkerhedsheadere (CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP) sættes i next.config.ts, men testes ikke. Fallback-logik for live-fliser er enhedstestet i tests/live-tiles.test.ts (isFresh, pickSeasons) og tests/gaustabanen.test.ts. Mangler: mock af API-fejl i browser, test af Sanity-fejl, offline-test, og grep efter hemmeligheder i build-output. Ikke kontrolleret: om CSP kører i report-only eller håndhævet."
  },
  "decided": "G28: ingen runtime-kobling fra website til hjemmeserver. G9, G24, G93, G96: datakilderne og deres fallback til N/A.",
  "deps": [
   "QA.3",
   "N2.1"
  ],
  "open": [
   "Skal gæsteområdet kunne bruges offline (service worker), og hvad skal være tilgængeligt uden net?",
   "Hvilke sensordata, hvis nogen, når sitet, givet G28?"
  ],
  "tasks": [
   {
    "id": "QA-G03",
    "t": "Offline-adfærd: Playwright setOffline efter første indlæsning, tydelig besked eller cachet indhold i gæsteområdet",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta-tillæg 3; forudsætter beslutning om service worker"
   },
   {
    "id": "QA-G04",
    "t": "Live-data-fallback: mock API-fejl og timeouts, vis ukendt eller sidste kendte værdi med tidsstempel, marker forældede data, test også Sanity-fejl",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 4; logikken er delvist enhedstestet"
   },
   {
    "id": "QA-G11",
    "t": "Sikkerhed: test sikkerhedsheadere (CSP report-only først) og at ingen hemmeligheder findes i klient-bundlen",
    "prio": "",
    "rel": "gaelder",
    "note": "Gausta-tillæg 11"
   },
   {
    "id": "B2-QA",
    "t": "Sikkerhedsheadere og CSP, afhængighedsscanning",
    "prio": "",
    "rel": "gaelder",
    "note": "afhængighedsscanning ikke fundet i repoet"
   }
  ],
  "needs": "Afventer din beslutning om gæsteområdet (svar 18. oktober 2026: afvent). Om gæsteområdet skal kunne bruges offline.",
  "waits": true
 },
 {
  "id": "QA.7",
  "g": "QA",
  "status": "open",
  "rel": "tilpasses",
  "title": "CI, grenbeskyttelse og miljøer",
  "what": "Testene kører automatisk i GitHub Actions på hver pull request. Hovedgrenen er beskyttet, så den kun kan flettes, når tjekkene består; det er det, der gør automatisk udrulning sikker. Et staging-miljø lader tungere tjek køre mod en rigtig adresse før lancering, og en lille røgtest efter udrulning bekræfter, at nøglesider svarer. CI'en kræver Sanity-hemmeligheder.",
  "gausta": "Gausta bygger harnesset trinvist fra start frem for at pause og genoptage. Grenbeskyttelse bør aktiveres fra start, hvis main auto-deployer. Staging er valgfrit; en preview-udrulning kan være nok. Gaustas CI skal bruge egne hemmeligheder til eget Sanity-projekt. Back-office kræver mindre ambition, men flere tests (se QA.9).",
  "built": {
   "s": "partial",
   "where": ".github/workflows/ci.yml kører på push og pull_request: typecheck, vitest, kontrast, skemavalidering, build af site og Studio; jobbet deploy-studio kører kun på main og kun hvis hemmeligheden SANITY_AUTH_TOKEN findes. Ikke i repoet og ikke kontrolleret: grenbeskyttelse i GitHub, Railway-udrulning fra main. Staging findes ikke (byggeplan.md: mangler, ejerens trin), og der er ingen post-deploy-røgtest. Om build i CI bruger Sanity-projektets offentlige id og read-token er ikke kontrolleret."
  },
  "decided": "G58: Studio kører for sig selv og udrulles fra main. Kildekonflikt i Stormpine-materialet bevaret: Confluence siger QA-håndhævelse pauset, repoets docs siger CI kører og main er beskyttet. Genlæs live, før det tillægges betydning.",
  "deps": [
   "QA.1"
  ],
  "open": [
   "Hvor hostes repo og CI (gratistiers minutgrænser, privat repo), og hvad er minutbudgettet?",
   "Aktiveres grenbeskyttelse med krav om grøn CI fra start, og skal staging bygges?"
  ],
  "tasks": [
   {
    "id": "QA-14",
    "t": "GitHub Actions på hver PR",
    "prio": "",
    "rel": "gaelder",
    "note": "findes i ci.yml (push og pull_request)"
   },
   {
    "id": "QA-15",
    "t": "Branch protection på main med qa-status",
    "prio": "",
    "rel": "gaelder",
    "note": "aktivér fra start; ikke kontrolleret i GitHub"
   },
   {
    "id": "QA-16",
    "t": "Staging-miljø (anden Railway-service eller staging-gren)",
    "prio": "",
    "rel": "tilpasses",
    "note": "valgfrit; en preview-udrulning kan være nok"
   },
   {
    "id": "QA-17",
    "t": "Post-deploy-røgtest (nøglesider 200, noindex-header før lancering)",
    "prio": "",
    "rel": "gaelder",
    "note": "ikke bygget"
   },
   {
    "id": "QA-18",
    "t": "Fire Sanity CI-secrets",
    "prio": "",
    "rel": "tilpasses",
    "note": "egne secrets til Gaustas Sanity-projekt; kun navne må stå i dokumenter"
   },
   {
    "id": "B8-QA",
    "t": "Miljøer, rollback, oppetid, backup",
    "prio": "",
    "rel": "tilpasses",
    "note": "lavere ambition, men back-office kræver mere"
   },
   {
    "id": "QA-19",
    "t": "Pause/genoptag-plan",
    "prio": "",
    "rel": "ikke",
    "note": "Gausta bygger harnesset trinvist fra start"
   }
  ],
  "needs": "Grenbeskyttelse og om staging skal bygges (omkostning)."
 },
 {
  "id": "QA.8",
  "g": "QA",
  "status": "open",
  "rel": "tilpasses",
  "title": "Back-office tests",
  "what": "Back-office er en separat del med login, database, planlagte jobs, sensordata, indsamlede konkurrentdata og KPI'er. Det kræver egne testlag ud over det offentlige sted: adgangskontrol, migreringer, jobs der kan køres to gange uden skade, kontrakttests mod gemte HTML-eksempler, beregningstests med kendte tal og tests af de vigtigste flows bag et test-login.",
  "gausta": "Back-office antages at være en separat app med eget repo og egen test-pipeline. KPI-tests skal dække dato og tidszone (Europe/Copenhagen) og må aldrig blande NOK og DKK i samme subtotal. Seed-data må ikke indeholde rigtige personoplysninger.",
  "built": {
   "s": "none",
   "where": "Ingen back-office-tests i gausta-vandring (back-office hører ikke til dette repo; G28). Ikke kontrolleret: om hjemmeserverens repo har tests eller CI; teknisk/backoffice-spec.md og teknisk/backoffice/ beskriver kravene."
  },
  "decided": "G28: ingen kobling fra websitet til hjemmeserveren. G81 (registret): ekstern backup til Cloudflare R2, bygges sent.",
  "deps": [],
  "open": [
   "Skal back-office have eget repo og egen CI?",
   "Hvilke KPI-definitioner (belægning, gennemsnitspris, pris pr. ledig nat) bruges, så de kan testes?",
   "Hvilke juridiske rammer gælder for scraping af konkurrenter? Det er ikke et QA-spørgsmål, men påvirker designet."
  ],
  "tasks": [
   {
    "id": "QA-G05",
    "t": "Back-office-tests: auth, database-migreringer, planlagte jobs (idempotens), scraping-kontrakttests, KPI-beregninger (tidszone, valuta), sensor-ingestion, E2E bag test-login",
    "prio": "",
    "rel": "tilpasses",
    "note": "Gausta-tillæg 5; antagelse: separat app med egen pipeline"
   }
  ],
  "needs": "Back-office: eget repo og juridiske rammer for scraping."
 },
 {
  "id": "N14.1",
  "g": "N14",
  "status": "approved",
  "rel": "tilpasses",
  "title": "Verificér hver kilde før brug",
  "what": "Hver ekstern kilde (vejr, lifte og pister, webcam, events, kort) skal kontrolleres for vilkår, pris, attribution og tilgængelighed, før den bruges på siden.",
  "gausta": "Ejeren har accepteret risikoen ved at hente data uden fuld vilkårsafklaring (G23), men kildeangivelse skal stadig følge hver kilde.",
  "built": {
   "s": "partial",
   "where": "lib/met.ts (MET Norway, CC BY 4.0 nævnt i kommentar), lib/fnugg.ts (vilkår læst 14. oktober 2026 ifølge kommentar), lib/gaustabanen.ts. Vilkår for webcam, events og kort ikke kontrolleret i koden. Datakilderne er ifølge teknisk/datakilder/README.md analyseret, men ikke alle afgjort."
  },
  "decided": "G9 (intet verificeret ved oprettelsen), G22 (26 datakilder), G23 (risikoaccept), G24 (MET Norway), G93 (Fnugg).",
  "deps": [],
  "open": [
   "Hvilke kilder (webcam, events, kort) mangler stadig en vurdering af vilkår?"
  ],
  "tasks": [
   {
    "id": "N14.a",
    "t": "Verificér vilkår, pris, attribution og tilgængelighed pr. kilde",
    "prio": "",
    "rel": "gaelder",
    "note": "Kilde for kilde, jf. G9 og G22"
   },
   {
    "id": "N14.b",
    "t": "Registrér kilderne med dato, vilkår og ejer af opdateringen",
    "prio": "",
    "rel": "tilpasses",
    "note": "Datakilder-mappen er stedet"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N14.2",
  "g": "N14",
  "status": "open",
  "rel": "gaelder",
  "title": "Cookiefri indhentning og fallback",
  "what": "Kilder hentes på serveren og caches, så den besøgendes browser ikke kontakter tredjepart og ikke får cookies. Ved nedbrud skal siden vise en fallback, så den ikke går i stykker.",
  "gausta": "Fliserne viser N/A, når data mangler. Kort og webcam skal være cookiefri (G10, G27).",
  "built": {
   "s": "partial",
   "where": "lib/met.ts og lib/fnugg.ts henter på serveren med revalidate (30 og 15 minutter) og returnerer null ved fejl, jf. lib/live-tiles.ts. CSP i next.config.ts tillader kun YouTube (nocookie), Sanity og Turnstile som eksterne kilder. Kort og webcam-indlejring ikke kontrolleret i detaljer."
  },
  "decided": "G10 (cookiefrit kort), G24, G27 (webcam), G76 (data fra gausta.com, ellers N/A), G93.",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Hvad er den endelige webcam-metode (stillbillede serverside eller indlejring)?"
  ],
  "tasks": [
   {
    "id": "N14.c",
    "t": "Hent kilder serverside med cache og kreditering",
    "prio": "",
    "rel": "gaelder",
    "note": "Browseren kontakter aldrig kilden"
   },
   {
    "id": "N14.d",
    "t": "Fallback ved nedbrud, så siden virker uden data",
    "prio": "",
    "rel": "gaelder",
    "note": "Tosproget N/A-visning"
   }
  ],
  "needs": "Den endelige webcam-metode."
 },
 {
  "id": "N15.1",
  "g": "N15",
  "status": "approved",
  "rel": "gaelder",
  "title": "Fire tokensæt og automatisk valg",
  "what": "Siden har fire farvepaletter (vinter, forår, sommer, efterår) som designtokens. Årstiden vælges automatisk efter dato, og den besøgende kan overstyre den for sessionen. Der er ingen mørk tilstand.",
  "gausta": "Årstiden følger norsk tid. Forår er slået fra, indtil der er forårsbilleder (SPRING_ENABLED er false), så mar-apr regnes som vinter.",
  "built": {
   "s": "done",
   "where": "styles/tokens.css (data-season), lib/season.ts (datoregel, sessionStorage, bootscript), tests/season.test.ts. Forårspaletten findes men er ikke valgbar."
  },
  "decided": "G20 (ingen mørk tilstand, vælger som ikonknap, valg kun for sessionen), G81 (forår slået fra).",
  "deps": [],
  "open": [
   "Hvornår skal forår aktiveres?"
  ],
  "tasks": [
   {
    "id": "N15.a",
    "t": "Fire tokensæt via data-season",
    "prio": "",
    "rel": "gaelder",
    "note": "Forår findes, men er ikke aktivt"
   },
   {
    "id": "N15.b",
    "t": "Automatisk valg efter dato, manuel overstyring",
    "prio": "",
    "rel": "gaelder",
    "note": "Kun for sessionen"
   }
  ],
  "appr": "Bygget og i drift, og kravet følger ejerens tidligere beslutninger."
 },
 {
  "id": "N15.2",
  "g": "N15",
  "status": "approved",
  "rel": "gaelder",
  "title": "Tilgængelighed og billedvalg pr. årstid",
  "what": "Alle fire paletter skal bestå kontrastkrav (WCAG 2.2 AA), og billeder kan knyttes til en eller flere årstider.",
  "gausta": "Kontrasttjek kører som script. Billedets årstider er et felt i CMS.",
  "built": {
   "s": "partial",
   "where": "scripts/contrast.mjs tjekker alle fire årstider mod AA. Billedets felt seasons i sanity/schemaTypes/objects/imageWithAlt.ts. Om kontrasttjek kører i CI er ikke kontrolleret."
  },
  "decided": "G20.",
  "deps": [
   "N15.1"
  ],
  "open": [
   "Skal kontrasttjek køre automatisk i CI?"
  ],
  "tasks": [
   {
    "id": "N15.c",
    "t": "Kontrastkrav for alle fire årstidspaletter",
    "prio": "",
    "rel": "gaelder",
    "note": "Stor risiko, jf. Stormpines kontrastproblem"
   },
   {
    "id": "N15.d",
    "t": "Billedvalg pr. årstid fra CMS",
    "prio": "",
    "rel": "gaelder",
    "note": "Tom betyder alle årstider"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N16.1",
  "g": "N16",
  "status": "open",
  "rel": "gaelder",
  "title": "Hentning, historik og alarmer",
  "what": "Sensorer hjemme polles af en collector, der gemmer historik og sender alarmer. Alarmer skal nå ejeren, også når en tunnel eller hjemmeserver er nede.",
  "gausta": "Hører til back-office hjemme, aldrig til det offentlige website (N19).",
  "built": {
   "s": "none",
   "where": "Intet i produktionsrepoet (bevidst, jf. N19). Gateway og Site Magic er ikke opsat endnu ifølge beslutningsregisteret (G5). Hjemmeserverens egen dokumentation er ikke kontrolleret her."
  },
  "decided": "G4 (to apps), G5 (hjemmegateway ikke opsat), G28.",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Hvordan når alarmer ejeren, når hjemmeserveren er nede?"
  ],
  "tasks": [
   {
    "id": "N16.a",
    "t": "Polling af sensorer og historik",
    "prio": "",
    "rel": "gaelder",
    "note": "Hjemmeserver, ikke websitet"
   },
   {
    "id": "N16.b",
    "t": "Alarmer og rapporter, også ved nedbrud af tunnel eller server",
    "prio": "",
    "rel": "gaelder",
    "note": "Jf. N8"
   }
  ],
  "needs": "Hvordan alarmer når dig, når hjemmeserveren er nede."
 },
 {
  "id": "N16.2",
  "g": "N16",
  "status": "open",
  "rel": "tilpasses",
  "title": "Dataopbevaring og privatliv",
  "what": "Sensordata og dørhændelser skal opbevares med en afgrænset tid og oplyses til gæster. Der er dørsensorer, men ingen kameraer.",
  "gausta": "Dansk og norsk ret skal vurderes (G11, G16). Intet fra sensorer må ligge i Sanity eller på websitet.",
  "built": {
   "s": "none",
   "where": "Ingen oplysningstekst eller opbevaringsregel fundet i repoet. Kun et FAQ-svar i vidensbasen nævner dørsensorer."
  },
  "decided": "G11 og G16 (åbne), G34 (interne data kun i back-office).",
  "deps": [
   "N16.1"
  ],
  "open": [
   "Hvor længe skal sensordata gemmes, og hvad skal gæsterne oplyses?"
  ],
  "tasks": [
   {
    "id": "N16.c",
    "t": "Opbevaringstid, oplysning til gæster og privatliv",
    "prio": "",
    "rel": "tilpasses",
    "note": "Afventer G11 og G16"
   }
  ],
  "needs": "Hvor længe sensordata gemmes, og hvad gæsterne oplyses om."
 },
 {
  "id": "N17.1",
  "g": "N17",
  "status": "open",
  "rel": "gaelder",
  "title": "Markedsdata og dataoprindelse",
  "what": "Agentbaseret indsamling af konkurrentpriser og salgspriser. Kildevilkår skal vurderes, tal der er estimater skal flagges, og hvert tal skal kunne føres tilbage til sin kilde og dato.",
  "gausta": "Hører til back-office (økonomi og marked), ikke til det offentlige website.",
  "built": {
   "s": "none",
   "where": "Intet i produktionsrepoet (bevidst). Metoden er endnu åben ifølge beslutningsregisteret (G14)."
  },
  "decided": "G14 (vilkår og metode åbne, skrabning accepteret af brugeren), G23.",
  "deps": [],
  "open": [
   "Hvilke kilder må skrabes, og hvordan flagges estimater?"
  ],
  "tasks": [
   {
    "id": "N17.a",
    "t": "Agentbaseret indsamling med kildevilkår",
    "prio": "",
    "rel": "gaelder",
    "note": "Afventer G14"
   },
   {
    "id": "N17.b",
    "t": "Estimatflag og dataoprindelse pr. tal",
    "prio": "",
    "rel": "gaelder",
    "note": "Dato og kilde pr. tal, jf. vidensbasens regler"
   }
  ],
  "needs": "Hvilke kilder der må skrabes (juridisk)."
 },
 {
  "id": "N18.1",
  "g": "N18",
  "status": "open",
  "rel": "gaelder",
  "title": "Permanent link uden adgangskoder",
  "what": "Gæsteområdet nås via et permanent link. Ingen adgangskoder eller dørkoder må stå på siden, og interne felter må aldrig nå gæsteområdet.",
  "gausta": "Dørkoder vises aldrig på websitet. Sanity indeholder kun offentligt indhold.",
  "built": {
   "s": "none",
   "where": "Intet gæsteområde i produktionsrepoet (kun inquiry og designsystem under app/[locale]). Sanity-datasættet er ifølge G33 og G34 offentligt indhold."
  },
  "decided": "G33 og G34 (Sanity kun offentligt), G28.",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Hvordan udformes og fornyes det permanente link?"
  ],
  "tasks": [
   {
    "id": "N18.a",
    "t": "Permanent link, ingen adgangskoder på siden",
    "prio": "",
    "rel": "gaelder",
    "note": "Dørkoder aldrig på websitet"
   },
   {
    "id": "N18.b",
    "t": "Interne felter må aldrig følge med til gæsteområdet",
    "prio": "",
    "rel": "gaelder",
    "note": "Jf. N19 og G34"
   }
  ],
  "needs": "Afventer din beslutning om gæsteområdet (svar 18. oktober 2026: afvent). Udformning og fornyelse af gæsteområdets permanente link.",
  "waits": true
 },
 {
  "id": "N18.2",
  "g": "N18",
  "status": "approved",
  "rel": "gaelder",
  "title": "Ingen indeksering og offline-adgang",
  "what": "Gæsteområdet er noindex med neutrale metatags uden følsomt indhold. Indholdet skal kunne læses uden forbindelse.",
  "gausta": "Hele sitet er noindex indtil lancering; gæsteområdet skal blive noindex også efter lancering.",
  "built": {
   "s": "partial",
   "where": "Noindex for hele sitet: X-Robots-Tag i next.config.ts, robots i app/[locale]/layout.tsx og Disallow i app/robots.ts. Særskilt noindex for gæsteområdet og offline-cache ikke bygget."
  },
  "decided": "G16 (oplysningstekst åben).",
  "deps": [
   "N18.1"
  ],
  "open": [
   "Hvordan holdes gæsteområdet noindex, når resten af sitet åbnes?"
  ],
  "tasks": [
   {
    "id": "N18.c",
    "t": "noindex og neutrale metatags i gæsteområdet",
    "prio": "",
    "rel": "gaelder",
    "note": "Også efter lancering"
   },
   {
    "id": "N18.d",
    "t": "Offline-adgang til gæsteindhold",
    "prio": "",
    "rel": "gaelder",
    "note": "Jf. B4"
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N19.1",
  "g": "N19",
  "status": "approved",
  "rel": "gaelder",
  "title": "Ingen runtime-kald fra websitet hjem",
  "what": "Det kundevendte website (A og B) må ikke have runtime-afhængighed til hjemmeserveren. Ingen anmodning fra en besøgende må nå hjem, og afhængigheden går kun én vej: hjemmet henter udefra.",
  "gausta": "Gælder alle nye funktioner i A og B. Et udfald hjemme må aldrig tage sitet ned.",
  "built": {
   "s": "partial",
   "where": "Ingen reference til hjemmeserveren fundet i lib, components og app; app/[locale]/inquiry/actions.ts nævner N19 i kommentar. Der er ikke kørt en systematisk gennemgang eller automatisk test. README.md i repoet gengiver reglen."
  },
  "decided": "G28 (guardrail, 3. oktober 2026), G34.",
  "deps": [],
  "open": [
   "Skal reglen tjekkes automatisk, fx som en CI-regel mod interne adresser?"
  ],
  "tasks": [
   {
    "id": "N19.a",
    "t": "Ingen live-kald, delt database, webhook ind eller offentlig adresse der peger hjem",
    "prio": "",
    "rel": "gaelder",
    "note": "Gælder A og B"
   },
   {
    "id": "N19.b",
    "t": "Hjemmet henter udefra; websitet kalder aldrig hjem",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N19.2",
  "g": "N19",
  "status": "approved",
  "rel": "gaelder",
  "title": "Øjebliksbilleder og formularer",
  "what": "Data fra hjemmet sendes kun som øjebliksbillede med dato og websitet skal virke uden det. Formularer og fejlmeldinger går til e-mail eller Telegram, ikke til hjemmedatabasen.",
  "built": {
   "s": "partial",
   "where": "Forespørgselsformularen er en Server Action i app/[locale]/inquiry/actions.ts uden kald hjem ifølge kommentaren. Øjebliksbilleder fra hjemmet findes ikke endnu."
  },
  "decided": "G28, G30 og G32 (e-mail via videresendelse, Resend udskudt).",
  "deps": [
   "N19.1"
  ],
  "open": [],
  "tasks": [
   {
    "id": "N19.c",
    "t": "Hjemmedata kun som øjebliksbillede med dato",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "N19.d",
    "t": "Formularer og fejlmeldinger til e-mail eller Telegram",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 },
 {
  "id": "N19.3",
  "g": "N19",
  "status": "open",
  "rel": "gaelder",
  "title": "Interne data og undtagelser",
  "what": "Interne markeringer og operatørdata ligger hverken i Sanity eller i websitets runtime, fordi alt i Sanity må antages læsbart af alle. Undtagelser kræver ejerens beslutning og logges i beslutningsregisteret.",
  "built": {
   "s": "partial",
   "where": "Sanity-skemaet i sanity/schemaTypes har kun offentligt indhold; inventoryItem har en intern kildestatus (ikke vist på sitet), som er den eneste interne markering fundet. Ikke gennemgået systematisk."
  },
  "decided": "G34 (Free-plan, kun offentligt indhold), G28.",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Må feltet Kilde (vises ikke) på inventar blive i Sanity, når alt i Sanity må antages offentligt?"
  ],
  "tasks": [
   {
    "id": "N19.e",
    "t": "Interne data kun i back-office hjemme, aldrig i Sanity",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "N19.f",
    "t": "Undtagelser kun efter ejerens udtrykkelige beslutning, logget",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Om feltet \"Kilde (vises ikke)\" må blive i Sanity."
 },
 {
  "id": "TL.1",
  "g": "TL",
  "status": "open",
  "rel": "gaelder",
  "title": "Økonomidata (C8-C10)",
  "what": "Økonomidelen (udgifter, lån, bilag, værdiansættelse) er private finansielle data: kun ejeren har adgang, med stærk login, data i EU og ingen økonomidata i logs. Den kræver sikkerhedskopi med testet eksport, to valutaer gemt separat, en dokumenteret kilde til kurser og krypterede bilag.",
  "gausta": "Hører til back-office hjemme, ikke til det offentlige website. NOK og DKK blandes aldrig i en subtotal.",
  "built": {
   "s": "none",
   "where": "Intet i produktionsrepoet (bevidst, back-office er en separat app, jf. stack-og-arkitektur.md). Back-office er ikke kontrolleret i denne opgave."
  },
  "decided": "G4 (to apps), G28, G34.",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Hvilken kilde bruges til valutakurser?"
  ],
  "tasks": [
   {
    "id": "TL.C8-1",
    "t": "Følsomme økonomidata (N2, N3): kun ejeren, stærk login, data i EU, ingen tredjepartsscripts, ingen økonomidata i logs",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.C8-2",
    "t": "Sikkerhedskopi og gendannelse (N8, N12): eksport til Excel/CSV, og eksporten testes",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.C8-3",
    "t": "To valutaer: NOK og DKK som separate felter med dato, kurs gemt pr. dag, ingen blandede subtotaler",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.C8-4",
    "t": "Eksterne kilder (N14): valutakurs fra dokumenteret kilde med dato, vilkår og fallback (kilde ikke valgt)",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.C8-5",
    "t": "Datamodel: C8-C10 kræver database og planlagte hentninger, hvilket støtter en separat back-office-app",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.C8-6",
    "t": "Bilag: fakturafiler krypteret og adskilt fra det offentlige site",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Kilde til valutakurser (back-office)."
 },
 {
  "id": "TL.2",
  "g": "TL",
  "status": "open",
  "rel": "tilpasses",
  "title": "Rejse og afstande (A8)",
  "what": "Afstande og rejsetider beregnes én gang med en dokumenteret kilde og gemmes i CMS med dato. Der er ingen opslag hos besøgende. Færge- og lufthavnsoplysninger skal have en sidst-kontrolleret-dato og en ejer.",
  "gausta": "Valg af kortdata og routing er ikke truffet. Dansk og engelsk først, svensk og norsk senere.",
  "built": {
   "s": "partial",
   "where": "Afstande findes som data i lib/area.ts med test i tests/area.test.ts og stedtypen sanity/schemaTypes/documents/place.ts. Side pr. land eller udgangsby, A8-rejseside og sidst-kontrolleret-datoer for færge og lufthavn er ikke kontrolleret."
  },
  "decided": "G10, G44 (afstandsliste godkendt, OpenStreetMap-data med dato), G52 (sprog og URL).",
  "deps": [
   "N14.1"
  ],
  "open": [
   "Hvilken kilde bruges til routing og rejsetider?",
   "Skal der være én side pr. land eller udgangsby?"
  ],
  "tasks": [
   {
    "id": "TL.A8-1",
    "t": "Statiske data: afstande og rejsetider beregnes én gang og gemmes i CMS med dato, ingen routing-opslag (N3, N1)",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A8-2",
    "t": "Kilde (N14): kortdata og routing ikke valgt, kortløsning cookiefri (G10)",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A8-3",
    "t": "SEO (N5): én side pr. land eller udgangsby; da og en først, sv og no senere",
    "prio": "",
    "rel": "tilpasses",
    "note": ""
   },
   {
    "id": "TL.A8-4",
    "t": "Indhold: færge og lufthavn med sidst-kontrolleret-dato og ejer",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Kilde til rejsetider, og om der skal være én side pr. land eller udgangsby."
 },
 {
  "id": "TL.3",
  "g": "TL",
  "status": "open",
  "rel": "gaelder",
  "title": "Inventar (A9, B7)",
  "what": "Inventar gemmes som poster i CMS og vises i en kort udgave i del A og en fuld i del B. Det hører til det verificerede faktaark, og intet publiceres før registrering efter møblering. Interne felter må ikke følge med til offentlig del eller gæsteområde.",
  "gausta": "Datamodellen i kravet nævner felter (antal, rum, placering, vejledningslink, ikon, showInSummary, needsBringing, intern markering), som ikke alle findes i det byggede skema.",
  "built": {
   "s": "partial",
   "where": "sanity/schemaTypes/objects/inventoryItem.ts har navn, detalje, gruppe, foto og kilde; felterne antal, rum, placering, vejledningslink, ikon, showInSummary og needsBringing blev ikke fundet. Offline-cache, amenity-markup og tastaturtest af filtre ikke kontrolleret."
  },
  "decided": "G49 (inventar pr. rum godkendt), G34, N18.",
  "deps": [
   "N18.1"
  ],
  "open": [
   "Skal de manglende inventarfelter tilføjes, eller er den byggede model den endelige?"
  ],
  "tasks": [
   {
    "id": "TL.A9-1",
    "t": "Én datamodel: poster i CMS, kort visning i del A, alle i del B, oversættelig pr. sprog",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A9-2",
    "t": "Faktaark: intet publiceres før registreret efter møblering",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A9-3",
    "t": "Privatliv og adgang (N18): interne felter aldrig til offentlig del eller gæsteområde",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A9-4",
    "t": "Offline (B4): detaljeret liste kan caches og søges uden forbindelse",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A9-5",
    "t": "SEO (N5): strukturerede data for faciliteter (amenity)",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A9-6",
    "t": "Tilgængelighed (N6): ikoner med tekst, søgning og filtre med tastatur og skærmlæser",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Om de manglende inventarfelter skal tilføjes, eller den byggede model er endelig."
 },
 {
  "id": "TL.4",
  "g": "TL",
  "status": "open",
  "rel": "tilpasses",
  "title": "Social deling (A11)",
  "what": "Hver side og hvert sprog skal have serverrenderede Open Graph- og Twitter-tags, ét 1200 x 630-billede (med fire årstidsprofiler), adgang for platformenes robotter og en delingsknap uden tredjepartsscripts. Platformkrav ud over Stormpine-kilden er Antagelse og skal verificeres i testværktøjer.",
  "gausta": "Hello world er noindex og spærrer robotter, så forhåndsvisninger kan ikke testes før lancering eller en skjult testadresse. Billedrettigheder er uafklarede (prototypens billeder er pladsholdere).",
  "built": {
   "s": "partial",
   "where": "Open Graph (titel, beskrivelse, sprog, billede 1200 x 630, canonical og hreflang) genereres i app/[locale]/[[...slug]]/page.tsx fra Sanity. Ikke fundet: og:url, og:image:alt, twitter:card, og:locale:alternate, delingsknap, opengraph-image, årstidsbillede til deling og Playwright-tests. Robotter spærres bevidst af app/robots.ts og X-Robots-Tag."
  },
  "decided": "G52 (sprog og URL), G55 (sprogcookie uden samtykke).",
  "deps": [
   "N19.1"
  ],
  "open": [
   "Billedrettigheder og billeder pr. side og årstid?",
   "Apex eller www?",
   "Testadresse før lancering?",
   "Skal Instagram-delebilleder laves?"
  ],
  "tasks": [
   {
    "id": "TL.A11-1",
    "t": "Metatags pr. side og sprog: og:*, twitter:card, serverrenderet, unik titel og beskrivelse, kanonisk URL",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A11-2",
    "t": "Billede 1200 x 630 under ca. 1 MB, fire årstidsprofiler med standardbillede som fallback",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A11-3",
    "t": "Platforme (Facebook, LinkedIn, WhatsApp, X, Instagram) testes i platformenes værktøjer (Antagelse)",
    "prio": "",
    "rel": "tilpasses",
    "note": ""
   },
   {
    "id": "TL.A11-4",
    "t": "Adgang for robotter: ikke blokeret af robots.txt, WAF eller login; gæsteområdet noindex med neutrale tags",
    "prio": "",
    "rel": "tilpasses",
    "note": "Hello world er noindex"
   },
   {
    "id": "TL.A11-5",
    "t": "Delingsknap: Web Share API eller Kopiér link, ingen tredjepartsscripts",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A11-6",
    "t": "QA: Playwright-test pr. side og sprog samt manuel tjekliste før lancering",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.A11-7",
    "t": "Åbne punkter: billedrettigheder, billeder pr. side og årstid, apex eller www, testadresse, Instagram, verificerede platformkrav",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "needs": "Billedrettigheder, apex eller www og om der skal laves delebilleder til Instagram."
 },
 {
  "id": "TL.5",
  "g": "TL",
  "status": "approved",
  "rel": "gaelder",
  "title": "FAQ-markup (N5)",
  "what": "FAQ bruger details og summary, så svaret altid ligger i DOM'en. Strukturerede data (FAQPage som JSON-LD) genereres fra samme CMS-felter som den synlige tekst og findes pr. sprog. Google viser FAQ-rich results kun for offentlige og sundhedssider (Antagelse, skal verificeres).",
  "gausta": "Prototypens data-en-skift er kun en prototypeløsning; hvert sprog skal have egen URL.",
  "built": {
   "s": "partial",
   "where": "components/blocks/FaqSection.tsx bruger details/summary og skriver JSON-LD i siden; sanity/schemaTypes/blocks/faqSection.ts. inLanguage, hreflang pr. sprog og validering med Rich Results Test er ikke kontrolleret. llms.txt findes ikke."
  },
  "decided": "G43 (FAQ godkendt), G52.",
  "deps": [],
  "open": [
   "Skal llms.txt linke til FAQ-siden?"
  ],
  "tasks": [
   {
    "id": "TL.N5-1",
    "t": "HTML: details og summary, svar altid i DOM'en, selvstændige korte svar",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.N5-2",
    "t": "FAQPage JSON-LD med inLanguage, genereret fra samme CMS-felter som den synlige tekst",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.N5-3",
    "t": "Sprog: egen URL, serverrenderet indhold, hreflang og egen JSON-LD pr. sprog",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "TL.N5-4",
    "t": "Valider med Rich Results Test og schema.org-validator før lancering (Antagelse om Googles visning)",
    "prio": "",
    "rel": "gaelder",
    "note": ""
   }
  ],
  "appr": "Teknisk krav uden valg, der kræver din beslutning (ingen omkostning, ingen juridisk afvejning, intet brand- eller indholdsvalg). De åbne spørgsmål er tekniske detaljer, som jeg afgør ved bygning."
 }
];
