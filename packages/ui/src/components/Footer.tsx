import React from 'react';
import Link from 'next/link';

/**
 * Footer Component
 * Site footer with links
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Tagline */}
          <div>
            <div className="text-xl font-bold text-gray-800 mb-2">
              Aesthetics Index
            </div>
            <p className="text-sm text-gray-600">
              Finde den richtigen Experten für ästhetische Medizin.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Produkt</h3>
            <ul className="space-y-2">
              <li><Link href="/kategorien" className="text-sm text-gray-600 hover:text-blue-600">Kategorien</Link></li>
              <li><Link href="/staedte" className="text-sm text-gray-600 hover:text-blue-600">Städte</Link></li>
              <li><Link href="/magazin" className="text-sm text-gray-600 hover:text-blue-600">Magazin</Link></li>
            </ul>
          </div>

          {/* Für Praxen */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Für Praxen</h3>
            <ul className="space-y-2">
              <li><Link href="/app/register" className="text-sm text-gray-600 hover:text-blue-600">Registrieren</Link></li>
              <li><Link href="/app/preise" className="text-sm text-gray-600 hover:text-blue-600">Preise</Link></li>
              <li><Link href="/app/badge" className="text-sm text-gray-600 hover:text-blue-600">Badge Widget</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-sm text-gray-600 hover:text-blue-600">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm text-gray-600 hover:text-blue-600">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-sm text-gray-600 hover:text-blue-600">AGB</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Aesthetics Index. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
