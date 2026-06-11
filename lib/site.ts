// Canonical production origin. Override with NEXT_PUBLIC_SITE_URL when the
// final domain differs (e.g. https://www.bemindful.cz).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bemindful.cz"

// True only for the production deployment. Vercel sets VERCEL_ENV to
// "production" | "preview" | "development"; outside Vercel we fall back to
// treating any production build as production.
export const IS_PRODUCTION_DEPLOY = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production"
