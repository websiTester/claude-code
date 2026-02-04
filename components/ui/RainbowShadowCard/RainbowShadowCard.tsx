'use client';
import React from 'react';

export type RainbowShadowCardVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type RainbowShadowCardSize = 'sm' | 'md' | 'lg';

export interface RainbowShadowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: RainbowShadowCardVariant;
  size?: RainbowShadowCardSize;
  disabled?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<RainbowShadowCardVariant, string> = {
  primary: 'bg-[var(--primary)] border-[var(--primary)]',
  secondary: 'bg-[var(--secondary)] border-[var(--secondary)]',
  success: 'bg-[var(--success)] border-[var(--success)]',
  danger: 'bg-[var(--danger)] border-[var(--danger)]',
  warning: 'bg-[var(--warning)] border-[var(--warning)]',
};

const sizeStyles: Record<RainbowShadowCardSize, string> = {
  sm: 'p-3 text-sm',
  md: 'p-6 text-base',
  lg: 'p-8 text-lg',
};

export const RainbowShadowCard = React.forwardRef<HTMLDivElement, RainbowShadowCardProps>(
  ({ variant = 'primary', size = 'md', className = '', disabled = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg relative transition-all duration-300';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    // Rainbow shadow effect
    const rainbowShadow = `
      shadow-[0_0_15px_rgba(255,0,0,0.3),0_0_30px_rgba(255,127,0,0.2),0_0_45px_rgba(255,255,0,0.2),0_0_60px_rgba(0,255,0,0.2),0_0_75px_rgba(0,0,255,0.2),0_0_90px_rgba(75,0,130,0.2),0_0_105px_rgba(148,0,211,0.2)]
      hover:shadow-[0_0_20px_rgba(255,0,0,0.4),0_0_40px_rgba(255,127,0,0.3),0_0_60px_rgba(255,255,0,0.3),0_0_80px_rgba(0,255,0,0.3),0_0_100px_rgba(0,0,255,0.3),0_0_120px_rgba(75,0,130,0.3),0_0_140px_rgba(148,0,211,0.3)]
    `.trim();

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${rainbowShadow} ${disabledStyles} ${className}`.trim();

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </div>
    );
  }
);

RainbowShadowCard.displayName = 'RainbowShadowCard';
