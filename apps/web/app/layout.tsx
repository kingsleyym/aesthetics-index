import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aesthetics Index — Medical Aesthetics Directory',
  description: 'Find the best clinics for cosmetic treatments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
