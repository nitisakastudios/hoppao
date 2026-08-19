import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CityProvider } from '@/components/CityProvider';
import CityPrompt from '@/components/CityPrompt';
import FloatingOrderButton from '@/components/FloatingOrderButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OrderDrawer from '@/components/OrderDrawer';
import { JsonLd, restaurantSchema } from '@/lib/schema';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hoppao.id'),
  title: 'HOPPAO: Bakpao Kukus Premium | Jogja & Surabaya',
  description:
    'Bakpao kukus dibuat dengan hati: dilipat tangan, dikukus setiap pagi di Jogja & Surabaya. Tanpa pengawet, tersedia frozen. No pork, no lard.',
  openGraph: {
    title: 'HOPPAO: Bakpao Kukus Premium | Jogja & Surabaya',
    description:
      'Dilipat tangan, dikukus setiap pagi di Jogja & Surabaya. Tersedia frozen dan pesanan event.',
    url: 'https://hoppao.id',
    siteName: 'HOPPAO',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/assets/logo.png', width: 1254, height: 1254, alt: 'Logo HOPPAO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOPPAO: Bakpao Kukus Premium | Jogja & Surabaya',
    description:
      'Dilipat tangan, dikukus setiap pagi di Jogja & Surabaya. Tersedia frozen dan pesanan event.',
    images: ['/assets/logo.png'],
  },
  icons: { icon: '/assets/pao-logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Foto hero adalah elemen LCP */}
        <link rel="preload" as="image" href="/assets/pao-1.png" fetchPriority="high" />
      </head>
      <body>
        <CityProvider>
          <a
            href="#konten"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-3 focus:text-cream"
          >
            Lompat ke konten
          </a>
          <Navbar />
          <main id="konten">{children}</main>
          <Footer />
          <OrderDrawer />
          <CityPrompt />
          <FloatingOrderButton />
        </CityProvider>
        <JsonLd data={restaurantSchema()} />
      </body>
    </html>
  );
}
