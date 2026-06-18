import './globals.css'

const SITE_URL = 'https://wyp.ch'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WYP — Watch Your Passion',
    template: '%s | WYP'
  },
  description: 'WYP is a Swiss licensed watch brand creating collector timepieces inspired by iconic universes — manga, anime and beyond. Limited editions — Geneva, 2026.',
  keywords: [
    'WYP', 'wyp.ch', 'wyp watch', 'Watch Your Passion',
    'Swiss licensed watch', 'collector timepiece', 'limited edition watch',
    'manga watch', 'anime watch', 'licensed manga watch', 'anime collector watch',
    'montre manga', 'montre suisse collector', 'montre édition limitée',
    'BTS watch', 'K-pop watch', 'BTS collector watch',
  ],
  authors: [{ name: 'WYP — HYPERBIEN®' }],
  creator: 'HYPERBIEN®',
  publisher: 'WYP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'WYP — Watch Your Passion',
    title: 'WYP — Watch Your Passion',
    description: 'Swiss licensed watch brand creating collector timepieces inspired by iconic universes — manga, anime and beyond. Limited editions — Geneva, 2026.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WYP — Watch Your Passion · Swiss licensed watch brand · manga & anime collector editions',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WYP — Watch Your Passion',
    description: 'Swiss licensed watch brand creating collector timepieces inspired by iconic universes — manga, anime and beyond. Limited editions — Geneva, 2026.',
    images: ['/assets/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/logos/WYP_ICON_NOIR.png', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/logos/WYP_ICON_NOIR.png', type: 'image/png' }
    ],
    shortcut: '/assets/logos/WYP_ICON_NOIR.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_URL,
  }
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WYP',
    alternateName: 'Watch Your Passion',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logos/WYP_ICON_NOIR.png`,
    description: 'Swiss licensed watch brand creating collector timepieces inspired by iconic universes — manga, anime and beyond.',
    foundingDate: '2026',
    foundingLocation: {
      '@type': 'Place',
      name: 'Geneva',
      addressCountry: 'CH'
    },
    sameAs: [
      'https://instagram.com/wyp.ch',
      'https://tiktok.com/@wyp.ch'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WYP — Watch Your Passion',
    url: SITE_URL,
    description: 'Swiss licensed watch brand creating collector timepieces inspired by iconic universes — manga, anime and beyond. Limited editions — Geneva, 2026.',
    publisher: {
      '@type': 'Organization',
      name: 'WYP'
    }
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/BDOGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BDOGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body data-theme="nuit" suppressHydrationWarning>
        {/* Inline script: restore theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('wyp-theme') || 'nuit';
                document.body.setAttribute('data-theme', t);
              } catch(e) {}
            `
          }}
        />
        {children}
      </body>
    </html>
  )
}
