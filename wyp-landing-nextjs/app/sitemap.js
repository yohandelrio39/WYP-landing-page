const SITE_URL = 'https://wyp-landing-page.vercel.app' // TODO: switch to https://wyp.watch when domain is live

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
