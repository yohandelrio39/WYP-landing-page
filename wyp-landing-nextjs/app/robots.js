const SITE_URL = 'https://wyp-landing-page.vercel.app' // TODO: switch to https://wyp.watch when domain is live

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
