import React from 'react';
import { ClinicCard, ClinicCardProps } from './ClinicCard';

export interface ClinicGridProps {
  clinics: ClinicCardProps['clinic'][];
  onClinicClick: (clinic: ClinicCardProps['clinic']) => void;
  loading?: boolean;
  empty?: React.ReactNode;
  className?: string;
}

/**
 * ClinicGrid Component
 * Grid layout for clinic listings
 */
export const ClinicGrid: React.FC<ClinicGridProps> = ({
  clinics,
  onClinicClick,
  loading,
  empty,
  className = ""
}) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Lade Praxen...</p>
      </div>
    );
  }

  if (clinics.length === 0) {
    return (
      <div className="text-center py-12">
        {empty || (
          <>
            <p className="text-xl text-gray-600 mb-2">Keine Praxen gefunden</p>
            <p className="text-sm text-gray-500">Versuche andere Filter</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {clinics.map((clinic, idx) => (
        <ClinicCard
          key={idx}
          clinic={clinic}
          onClick={() => onClinicClick(clinic)}
        />
      ))}
    </div>
  );
};
