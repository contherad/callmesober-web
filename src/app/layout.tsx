import type { Metadata } from 'next';
import { Roboto, Libre_Caslon_Text } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/shared/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const libreCaslon = Libre_Caslon_Text({
  variable: '--font-libre-caslon-text',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} \u2014 Anonymous Peer Support Hotline for Addiction Recovery`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Free, anonymous peer-to-peer support hotline for addiction recovery. Talk to someone who\u2019s been there. No judgment. Just a call.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} \u2014 Anonymous Peer Support Hotline`,
    description:
      'Free, anonymous peer support for addiction recovery. Talk to someone who gets it.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} \u2014 Anonymous Peer Support Hotline`,
    description:
      'Free, anonymous peer support for addiction recovery. No judgment. Just a call.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${libreCaslon.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
