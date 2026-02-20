"use client";

import React from 'react';
import { Badge } from './Badge';
import { Rating } from './Rating';

export interface ClinicCardProps {
  clinic: {
    name: string;
    city: string;
    rating: number;
    reviewCount: number;
    image: string;
    categories: string[];
    verified: boolean;
  };
  onClick?: () => void;
  className?: string;
}

/**
 * ClinicCard Component
 * Card for displaying clinic in listings/grid
 */
export const ClinicCard: React.FC<ClinicCardProps> = ({
  clinic,
  onClick,
  className = ""
}) => {
  return (
    <div
      className={`rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-video bg-gray-200">
        <img
          src={clinic.image}
          alt={clinic.name}
          className="w-full h-full object-cover"
        />
        {clinic.verified && (
          <div className="absolute top-3 right-3">
            <Badge variant="success">Verifiziert</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {clinic.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          {clinic.city}
        </p>

        <div className="mb-3">
          <Rating value={clinic.rating} count={clinic.reviewCount} showValue size="sm" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {clinic.categories.slice(0, 3).map((cat, idx) => (
            <Badge key={idx} variant="default">
              {cat}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
