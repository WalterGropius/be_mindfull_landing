// Trvalé přesměrování starých URL na nové (301/308). Doplnit podle exportu
// stávajících URL (Sitemap + Screaming Frog + GSC) — viz docs/go-live-seo.md.
// Pozn.: Next.js sám sjednocuje trailing slash (308 na variantu bez lomítka),
// takže staré wordpressové URL s lomítkem na konci, jejichž cesta se nemění
// (např. /o-mne/ → /o-mne), není potřeba vypisovat.
const legacyRedirects = [
  // { source: "/stara-cesta", destination: "/nova-cesta", permanent: true },
]

const isPreviewDeploy = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return legacyRedirects
  },
  async headers() {
    // Staging/preview nasazení nesmí být indexováno.
    if (!isPreviewDeploy) return []
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
}

export default nextConfig
