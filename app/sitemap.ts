import type { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"
import { SITE_URL } from "@/lib/site"

// Marketing pages only — order/checkout pages (/objednavka/*) are reachable
// but intentionally left out of the sitemap.
const staticRoutes = [
  "",
  "/kurzy/start-to-pause",
  "/kurzy/foundations",
  "/kurzy/membership",
  "/kurzy/skupinovy-kurz",
  "/kurzy/firmy",
  "/o-mne",
  "/kontakt",
  "/blog",
  "/ochrana-osobnich-udaju",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))

  const posts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [...pages, ...posts]
}
