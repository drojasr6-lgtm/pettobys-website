import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Pettobys - Comida Saludable para Perros',
  description: 'Alimento natural y nutritivo para tu mascota. 100% ingredientes naturales, sin conservantes ni colorantes artificiales. Comida fresca, práctica y lista para el consumo.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Pettobys - Comida Saludable para Perros',
    description: 'Alimento natural y nutritivo para tu mascota. 100% ingredientes naturales, sin conservantes ni colorantes artificiales.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
