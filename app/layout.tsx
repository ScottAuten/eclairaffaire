import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: {
    default: `${NAP.businessName} | French Éclair & Choux Pastry Bakery in Weston, FL`,
    template: `%s | ${NAP.businessName}`,
  },
  description:
    'Éclair Affaire Weston is the premier French éclair and choux pastry bakery in Weston, FL. Sophisticated, handcrafted pastries. Dine-in, curbside pickup, and delivery. 4.8★ on Google.',
  metadataBase: new URL(NAP.siteUrl),
  openGraph: {
    siteName: NAP.businessName,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/eclair-affaire-store-mobile.webp" media="(max-width: 768px)" />
        <link rel="preload" as="image" href="/images/eclair-affaire-store.webp" media="(min-width: 769px)" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
