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
 * Header Component - Cruip Template Design
 * Glassmorphism mit gradient border via pseudo-element
 */
export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">
                Aesthetics Index
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/kategorien" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Kategorien
            </Link>
            <Link 
              href="/staedte" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Städte
            </Link>
            <Link 
              href="/magazin" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Magazin
            </Link>
            <Link 
              href="/app" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Für Praxen
            </Link>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {user ? (
              <li className="flex items-center gap-2">
                <span className="text-sm text-gray-700">{user.name}</span>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
