import React from "react";
import Image from "next/image";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
  className?: string;
}

/**
 * Avatar Component
 * Circular avatar (from template avatar pattern)
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  if (src) {
    return (
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-2 border-white shadow-sm ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700 border-2 border-white shadow-sm ${className}`}
    >
      {fallback || alt.slice(0, 2).toUpperCase()}
    </div>
  );
};
