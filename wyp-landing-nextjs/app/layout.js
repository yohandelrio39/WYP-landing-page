import './globals.css'

export const metadata = {
  title: 'WYP — Watch Your Passion',
  icons: { icon: '/assets/logos/WYP_ICON_NOIR.png' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
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
