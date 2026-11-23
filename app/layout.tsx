import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dezy It',
  description: 'Created by Dezy It',
  generator: 'Dezy It',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
     
      {/* End Google Tag Manager */}
      
      <body className={`${geist.className} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
           <script>
  (function () {
    var s = document.createElement('script');
    s.src = 'https://agent-api-prod.vercel.app/widget.js';
    s.setAttribute('data-widget-key', 'wk_99c1dbe124de4b97b27d6ecb5b6fa897');
    s.setAttribute('data-api-url', 'https://agent-api-prod.vercel.app');
    s.defer = true;
    document.head.appendChild(s);
  })();
</script>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}
