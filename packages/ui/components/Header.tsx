'use client';

import React from 'react';
import Link from 'next/link';

export interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  } | null;
}

/**
 * Header Component
 * Glassmorphism header (from template)
 * Fixed positioning, backdrop blur
 */
export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-2xl bg-white/90 backdrop-blur-xs shadow-lg px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">
              Aesthetics Index
            </span>
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/kategorien" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Kategorien
            </Link>
            <Link href="/staedte" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Städte
            </Link>
            <Link href="/magazin" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Magazin
            </Link>
            <Link href="/app" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Für Praxen
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
            ) : (
              <>
                <Link href="/login" className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                  Login
                </Link>
                <Link href="/register" className="btn-sm bg-linear-to-t from-blue-600 to-blue-500 text-white">
                  Registrieren
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
