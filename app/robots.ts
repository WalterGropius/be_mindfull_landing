import type { MetadataRoute } from "next"
import { SITE_URL, IS_PRODUCTION_DEPLOY } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  // Staging/preview must never get indexed.
  if (!IS_PRODUCTION_DEPLOY) {
    return { rules: { userAgent: "*", disallow: "/" } }
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
