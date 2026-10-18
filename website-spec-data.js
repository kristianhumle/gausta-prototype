/* Website spec: de tekniske specifikationer for gaustahome.com, hentet fra Stormpine-websitets Confluence og tilpasset (teknisk/krav/).
   Én post pr. punkt, med delopgaver. Status: draft, open, ready, approved. Built: done, partial, none (kontrolleret i produktionsrepoet).
   Spejles som register i teknisk/website-spec.md. Offentlig side (noindex): ingen hemmeligheder, adresser eller nøgler. */
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
 }
];
window.WS_SPEC = [
 {
  "id": "N1.1",
  "g": "N1",
  "status": "draft",
  "rel": "gaelder",
  "title": "Caching og opdatering ved udgivelse",
  "what": "Siderne bygges statisk og genopbygges kun, når indholdet ændres: lang cache-tid, en signeret webhook fra Sanity ved udgivelse og styring af, hvilke dele der må være dynamiske. Gør sitet hurtigt og billigt at drive.",
  "gausta": "Samme stack og samme valg. Live-data (vejr, lifte) er en del for sig og må ikke trække hele siden ud af cachen.",
  "built": {
   "s": "partial",
   "where": "Klassisk ISR med en times sikkerhedsgrænse og tags i sanity/lib/fetch.ts. Webhook på /api/revalidate sat op og afprøvet 18. oktober 2026 (kaldlog 200). Gate til draft og tag pr. dokumenttype ikke gennemgået."
  },
  "decided": "G34, N19. Webhooken er afprøvet, og en fejl (alle sider 404 efter kald) er rettet 18. oktober 2026.",
  "deps": [],
  "open": [
   "Skal filteret i webhooken udvides, hver gang der kommer en ny indholdstype?"
  ],
  "tasks": [
   {
    "id": "B1-0.1",
    "t": "Bekræft klassisk ISR, cacheComponents slået fra (next.config.ts)",
    "prio": "",
    "rel": "gaelder",
    "note": "samme stack, samme valg gør sig gældende"
   },
   {
    "id": "B1-0.2",
    "t": "Erstat revalidate = 0 med lang revalidate (fx 3600)",
    "prio": "",
    "rel": "tilpasses",
    "note": "på Gausta er live-data (vejr, lifte) en tredjepartsdel; vælg cache pr. rute/del, ikke blanket-dynamisk"
   },
   {
    "id": "B1-0.3",
    "t": "Signeret Sanity publish-webhook (app/api/revalidate/route.ts), tag GROQ efter _type",
    "prio": "",
    "rel": "gaelder",
    "note": "Sanity bruges til offentligt indhold og gæsteområde"
   },
   {
    "id": "B1-0.4",
    "t": "Gate <SanityLive> til draft; experimental.prefetchInlining; /api/expire-tags",
    "prio": "",
    "rel": "gaelder",
    "note": "samme Next 16 + next-sanity-risiko"
   }
  ]
 },
 {
  "id": "N2.1",
  "g": "N2",
  "status": "draft",
  "rel": "gaelder",
  "title": "Hemmeligheder og adgang",
  "what": "Alle nøgler og tokens ligger kun som skjulte variabler hos hosting-udbyderen, aldrig i kode, filer eller i klientens kode. Automatisk scanning af repoet og af afhængigheder. Offentlig side bruger kun et læse-token.",
  "gausta": "Gælder også back-office. Ingen eksisterende tokens at rotere, da kontiene er nye. Hemmeligheder må aldrig stå i vidensbasen eller i chatten (regel).",
  "built": {
   "s": "partial",
   "where": "Hemmeligheder (Resend, Turnstile, webhook) ligger som Railway-variabler, og eksempelfilen .env.example har kun tomme felter. Læse-token er skilt fra skrive-rettigheder. Scanning (gitleaks eller GitHub push protection) og afhængighedstjek (Dependabot, pnpm audit) er ikke gennemgået."
  },
  "decided": "G29 (alle konti på ejerens Gmail), G33 og G34 (offentligt datasæt, kun offentligt indhold).",
  "deps": [],
  "open": [
   "Er GitHub secret scanning med push protection slået til på repoet gausta?",
   "Skal Dependabot og et audit-trin i CI slås til?"
  ],
  "tasks": [
   {
    "id": "B2-0.1",
    "t": "Alle rigtige hemmeligheder (Sanity-skrivetoken, webhook-secret, preview-secret) som Sealed Railway-variabler; out-of-band kopi.",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Gælder også back-office (DB-URL, Better Auth secret, sensor-API-nøgler)."
   },
   {
    "id": "B2-0.2",
    "t": "Audit af env-præfikser: ingen hemmelighed med NEXT_PUBLIC_; grep klientbundle efter token-mønstre.",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.3",
    "t": "gitleaks eller GitHub secret scanning + push protection i CI; .env* gitignoreret.",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.4",
    "t": "Dependabot/Renovate + pnpm audit high/critical gate i CI.",
    "prio": "P0",
    "rel": "gaelder",
    "note": ""
   },
   {
    "id": "B2-0.5",
    "t": "Read-only Sanity-token til offentligt frontend; roter pending tokens.",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "ingen eksisterende pending tokens, nye konti."
   }
  ]
 },
 {
  "id": "N2.2",
  "g": "N2",
  "status": "draft",
  "rel": "tilpasses",
  "title": "Transport og sikkerhedsheaders",
  "what": "Alt over HTTPS med HSTS og omdirigering fra HTTP. Et fast sæt sikkerhedsheaders (indholdspolitik, ingen indramning, ingen typegætning, begrænsede browserfunktioner), indført forsigtigt og kontrolleret mod en ekstern scanner.",
  "gausta": "Politikken skal rumme Turnstile, kort, YouTube og Sanity. HSTS uden preload og uden underdomæner, så hjemmeserveren ikke tvinges til https.",
  "built": {
   "s": "done",
   "where": "next.config.ts: Content-Security-Policy (uden nonce, så siderne kan være statiske), Strict-Transport-Security (ét år, kun domænet), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy, upgrade-insecure-requests, frame-ancestors kun Studio. www videresendes til rod-domænet. Ekstern scanner (securityheaders.com) ikke kørt."
  },
  "decided": "G58 (Studio for sig selv). HSTS besluttet 6. oktober 2026.",
  "deps": [
   "N2.1"
  ],
  "open": [
   "Kør en ekstern scanner (Mozilla Observatory eller securityheaders.com) og notér karakteren.",
   "Skal indholdspolitikken først køre som report-only, før en strammere version indføres?"
  ],
  "tasks": [
   {
    "id": "B2-1.1",
    "t": "Tving HTTPS, bekræft Railway TLS på domæne + www, redirect HTTP.",
    "prio": "P0",
    "rel": "gaelder",
    "note": "(domæne og evt. `.no`/`.dk` varianter)."
   },
   {
    "id": "B2-1.2",
    "t": "Header-baseline: X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors 'none'; matcher springer static/prefetch/API over.",
    "prio": "P0",
    "rel": "tilpasses",
    "note": "Permissions-Policy skal måske tillade geolocation/kamera hvis kort eller QR-scan bruges."
   },
   {
    "id": "B2-1.3",
    "t": "HSTS uden preload først; upgrade-insecure-requests; preload først når alle subdomæner er permanent HTTPS.",
    "prio": "P0",
    "rel": "gaelder",
    "note": "Subdomænerne (back-office, evt. sensor-endpoint) skal medregnes."
   }
  ]
 }
];
