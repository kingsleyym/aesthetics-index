"use client";

import React from 'react';

export interface CategoryCardProps {
  category: {
    name: string;
    icon?: string;
    count: number;
    slug: string;
  };
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * CategoryCard Component
 * Card for displaying treatment category
 */
export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
  className = ""
}) => {
  return (
    <div
      className={`
        group relative rounded-2xl bg-white shadow-lg hover:shadow-xl 
        transition-all duration-300 cursor-pointer p-6 text-center
        ${className}
      `}
      onClick={onClick}
    >
      {category.icon && (
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-3xl">
          {category.icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {category.name}
      </h3>
      
      <p className="text-sm text-gray-600">
        {category.count} {category.count === 1 ? 'Praxis' : 'Praxen'}
      </p>
    </div>
  );
};
