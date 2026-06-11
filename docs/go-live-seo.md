# Go-live checklist & technické SEO

## Co už web řeší sám

- **robots.txt** (`app/robots.ts`) — na produkci povoluje vše kromě `/api/`,
  na preview/staging nasazeních (Vercel `VERCEL_ENV !== "production"`) vrací
  `Disallow: /`.
- **Noindex stagingu** — preview nasazení navíc posílají hlavičku
  `X-Robots-Tag: noindex, nofollow` (viz `next.config.mjs`). Pro úplnou
  jistotu doporučuji na Vercelu zapnout i *Deployment Protection*
  (zaheslování preview URL) v nastavení projektu.
- **sitemap.xml** (`app/sitemap.ts`) — jen existující (200) stránky:
  marketingové stránky + blog. Objednávkové stránky (`/objednavka/*`)
  v sitemapě záměrně nejsou.
- **Canonical** — každá stránka má self-referencing canonical na ostrou
  doménu (`metadataBase` v `app/layout.tsx`). Ostrá doména se řídí proměnnou
  `NEXT_PUBLIC_SITE_URL` (výchozí `https://bemindful.cz`).
- **Trailing slash** — Next.js automaticky přesměrovává (308, trvalé)
  `/cesta/` → `/cesta`, takže staré wordpressové URL se stejnou cestou
  není potřeba mapovat ručně.

## Redirecty (hlavní úkol před go-live)

1. Vyexportovat všechny stávající URL: sitemap starého webu + Screaming Frog
   + Google Search Console → Pages. *(Ze sandboxu se na bemindful.cz nedá
   dostat, export musí dodat Michal / Integritty.)*
2. Každou starou URL, jejíž cesta se mění, zapsat do pole `legacyRedirects`
   v `next.config.mjs` jako `{ source, destination, permanent: true }`
   (`permanent: true` = 308/301, nikdy 302). Cílem musí být rovnou finální
   URL — žádné řetězení přesměrování.
3. Pozor na velká/malá písmena a query parametry (query se v Next.js
   přenáší automaticky, pokud se nepoužije `has`).
4. Výsledný seznam (stará URL → nová URL) poslat Patrikovi do Integritty
   ke kontrole.

## Co je potřeba nastavit při nasazení (env proměnné)

| Proměnná | Účel |
|---|---|
| `RESEND_API_KEY` | Odesílání e-mailů (kontaktní formulář, registrace do 4denního kurzu, newsletter) přes resend.com |
| `MAIL_FROM` | Ověřený odesílatel, např. `Be Mindful <noreply@bemindful.cz>` (doménu je nutné ověřit v Resend) |
| `CONTACT_TO` | Schránka pro notifikace z formulářů (výchozí `info@bemindful.cz`) |
| `NEXT_PUBLIC_SITE_URL` | Ostrá doména, pokud bude jiná než `https://bemindful.cz` |

## Zbývající integrace (TODO)

- **SmartEmailing** — registrace do 4denního kurzu a newsletter zatím chodí
  jako notifikační e-mail na `CONTACT_TO` + registrant dostane automatický
  uvítací e-mail. Napojení na SmartEmailing listy (a tím i automatické
  rozesílání lekcí kurzu) vyžaduje API klíč.
- **Přístupy do aplikace** — automatické založení účtu / zaslání
  přihlašovacích údajů vyžaduje API aplikace be.mindful.
- **Odkazy na appku** — badge App Store / Google Play v patičce se zobrazí,
  jakmile se doplní `APP_STORE_URL` a `PLAY_STORE_URL`
  v `components/footer.tsx`.
