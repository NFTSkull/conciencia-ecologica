import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conciencia Ecológica - Dr. Dainiz Noray Montoya García',
  description: 'Investigación, divulgación y consultoría en ciencias ambientales. Cursos especializados y blog sobre sustentabilidad, metabolismo urbano y complejidad socio-ambiental.',
  keywords: 'ciencias ambientales, sustentabilidad, metabolismo urbano, complejidad socio-ambiental, consultoría ambiental, cursos ambientales',
  authors: [{ name: 'Dr. Dainiz Noray Montoya García' }],
  creator: 'Dr. Dainiz Noray Montoya García',
  publisher: 'Conciencia Ecológica',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    title: 'Conciencia Ecológica - Dr. Dainiz Noray Montoya García',
    description: 'Investigación, divulgación y consultoría en ciencias ambientales.',
    siteName: 'Conciencia Ecológica',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Conciencia Ecológica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conciencia Ecológica - Dr. Dainiz Noray Montoya García',
    description: 'Investigación, divulgación y consultoría en ciencias ambientales.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
