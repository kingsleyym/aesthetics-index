'use client';

import React from 'react';
import { SearchBar } from './SearchBar';

export interface HeroHomeProps {
  onSearch: (query: string) => void;
}

/**
 * HeroHome Component
 * Homepage hero with search
 */
export const HeroHome: React.FC<HeroHomeProps> = ({ onSearch }) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Text Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Finde den richtigen Experten für{' '}
            <span className="text-blue-600">ästhetische Medizin</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geprüfte Ärzte, echte Bewertungen, transparente Preise in München
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar
            placeholder="Botox, Lippen, Hautarzt..."
            onSearch={onSearch}
          />
        </div>

        {/* Quick Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="text-sm text-gray-600">Beliebt:</span>
          {['Botox', 'Hyaluron', 'Lippen', 'Faltenbehandlung'].map((cat) => (
            <button
              key={cat}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
