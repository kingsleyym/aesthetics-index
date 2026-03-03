import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AOSProvider } from './components/AOSProvider';
import { Header, Footer } from '@aesthetics-index/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aesthetics Index — Finde deinen Experten für ästhetische Medizin',
  description: 'Geprüfte Ärzte, echte Bewertungen, transparente Preise. Finde die beste Praxis für Botox, Hyaluron, Lippen & mehr in München.',
  keywords: ['Ästhetische Medizin', 'Botox München', 'Hyaluron', 'Schönheitsklinik', 'Faltenbehandlung'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body className="antialiased bg-white text-gray-800 flex flex-col min-h-screen overflow-x-hidden">
        <AOSProvider>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
