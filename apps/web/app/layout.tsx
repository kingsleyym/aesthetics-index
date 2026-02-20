import type { Metadata } from 'next';
import './globals.css';
import { AOSProvider } from './components/AOSProvider';
import { Header, Footer } from '@aesthetics-index/ui';

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
    <html lang="de">
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
