import React from 'react';

// Define the allowed variant values as a union type
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Extend ButtonHTMLAttributes and make variant optional
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer';

  // Use Record utility type for better type safety
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20',
    secondary: 'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
    ghost: 'text-white hover:text-amber-600 bg-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;