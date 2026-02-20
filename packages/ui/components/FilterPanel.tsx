'use client';

import React from 'react';
import { FilterButton } from './FilterButton';

export interface FilterPanelProps {
  filters: {
    categories: { name: string; count: number; active: boolean }[];
    cities: { name: string; count: number; active: boolean }[];
    minRating?: number;
    verifiedOnly?: boolean;
  };
  onChange: (filters: any) => void;
  className?: string;
}

/**
 * FilterPanel Component
 * Sidebar filter panel for directory pages
 */
export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Kategorien</h3>
        <div className="space-y-2">
          {filters.categories.slice(0, 5).map((cat, idx) => (
            <FilterButton
              key={idx}
              active={cat.active}
              count={cat.count}
              onClick={() => {
                // Toggle category
                const newCategories = filters.categories.map((c, i) =>
                  i === idx ? { ...c, active: !c.active } : c
                );
                onChange({ ...filters, categories: newCategories });
              }}
            >
              {cat.name}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Cities */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Stadt</h3>
        <div className="space-y-2">
          {filters.cities.map((city, idx) => (
            <FilterButton
              key={idx}
              active={city.active}
              count={city.count}
              onClick={() => {
                // Toggle city
                const newCities = filters.cities.map((c, i) =>
                  i === idx ? { ...c, active: !c.active } : { ...c, active: false }
                );
                onChange({ ...filters, cities: newCities });
              }}
            >
              {city.name}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Bewertung</h3>
        <select
          value={filters.minRating || 0}
          onChange={(e) => onChange({ ...filters, minRating: parseFloat(e.target.value) })}
          className="form-select w-full"
        >
          <option value="0">Alle</option>
          <option value="4.0">≥ 4.0 ⭐</option>
          <option value="4.5">≥ 4.5 ⭐</option>
          <option value="4.8">≥ 4.8 ⭐</option>
        </select>
      </div>

      {/* Verified Only */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.verifiedOnly || false}
            onChange={(e) => onChange({ ...filters, verifiedOnly: e.target.checked })}
            className="form-checkbox"
          />
          <span className="text-sm text-gray-700">Nur verifizierte Praxen</span>
        </label>
      </div>

      {/* Clear Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={() => onChange({
            categories: filters.categories.map(c => ({ ...c, active: false })),
            cities: filters.cities.map(c => ({ ...c, active: false })),
            minRating: 0,
            verifiedOnly: false
          })}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Filter zurücksetzen
        </button>
      </div>
    </div>
  );
};
