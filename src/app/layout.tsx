import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conciencia Ecológica - Investigación para un futuro urbano sostenible",
  description: "Estudio la sustentabilidad y la termodinámica urbana para entender el metabolismo social y proponer estrategias públicas y ciudadanas que mejoren la vida en las ciudades.",
  keywords: ["sustentabilidad", "termodinámica urbana", "metabolismo urbano", "ciudades sostenibles", "investigación ambiental"],
  authors: [{ name: "Dra. Dainiz Noray Montoya García" }],
  openGraph: {
    title: "Conciencia Ecológica",
    description: "Investigación para un futuro urbano sostenible",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
