import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'default' | 'sm';
  loading?: boolean;
  children: React.ReactNode;
}

/**
 * Button Component
 * Based on Cruip template .btn classes
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', loading, children, className = '', disabled, ...props }, ref) => {
    // Base classes (from template)
    const baseClasses = size === 'sm' ? 'btn-sm' : 'btn';
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-linear-to-t from-blue-600 to-blue-500 text-white hover:bg-[length:100%_150%]',
      secondary: 'bg-white text-gray-800 shadow-sm hover:bg-gray-50',
      ghost: 'bg-transparent text-gray-800 shadow-none hover:bg-gray-50',
      dark: 'bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900',
    };
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';