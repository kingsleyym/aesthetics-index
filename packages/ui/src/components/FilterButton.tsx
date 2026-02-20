"use client";

import React from 'react';

export interface FilterButtonProps {
  active?: boolean;
  onClick?: () => void;
  count?: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * FilterButton Component
 * Toggle button for filters (categories, cities, etc.)
 */
export const FilterButton: React.FC<FilterButtonProps> = ({
  active = false,
  onClick,
  count,
  children,
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-between gap-2 px-4 py-2 rounded-lg border transition-all
        ${active 
          ? 'border-blue-500 bg-blue-50 text-blue-700' 
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
        }
        ${className}
      `}
    >
      <span className="font-medium">{children}</span>
      {count !== undefined && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          active ? 'bg-blue-200' : 'bg-gray-200'
        }`}>
          {count}
        </span>
      )}
    </button>
  );
};
