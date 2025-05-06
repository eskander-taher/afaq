import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button'
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 ease-in-out';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gold hover:bg-gold-hover text-white shadow-md',
    secondary: 'bg-royal-blue hover:bg-opacity-90 text-white shadow-md',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:bg-opacity-10'
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 ml-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 mr-0">{icon}</span>}
    </button>
  );
};

export default Button;