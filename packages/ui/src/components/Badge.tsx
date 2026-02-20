import React from "react";

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "info";
  children: React.ReactNode;
  className?: string;
}

/**
 * Badge Component
 * Small pill-style badge for status/labels
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className = "",
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      role="status"
      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
