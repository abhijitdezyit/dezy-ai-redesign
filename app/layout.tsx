// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "My Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          id="agent-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var s = document.createElement('script');
                s.src = 'https://agent-api-prod.vercel.app/widget.js';
                s.setAttribute('data-widget-key', 'wk_99c1dbe124de4b97b27d6ecb5b6fa897');
                s.setAttribute('data-api-url', 'https://agent-api-prod.vercel.app');
                s.defer = true;
                document.head.appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
