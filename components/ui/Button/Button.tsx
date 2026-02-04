'use client';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)]',
  secondary: 'bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-[var(--secondary-foreground)]',
  success: 'bg-[var(--success)] hover:bg-[var(--success-hover)] text-[var(--success-foreground)]',
  danger: 'bg-[var(--danger)] hover:bg-[var(--danger-hover)] text-[var(--danger-foreground)]',
  warning: 'bg-[var(--warning)] hover:bg-[var(--warning-hover)] text-[var(--warning-foreground)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', disabled = false, children, ...props }, ref) => {
    const baseStyles = 'font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const disabledStyles = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--primary)]';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
