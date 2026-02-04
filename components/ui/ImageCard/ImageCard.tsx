'use client';
import React from 'react';
import Image from 'next/image';

export type ImageCardVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type ImageCardSize = 'sm' | 'md' | 'lg';

export interface ImageCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  variant?: ImageCardVariant;
  size?: ImageCardSize;
  disabled?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const variantStyles: Record<ImageCardVariant, string> = {
  primary: 'border-[var(--primary)]',
  secondary: 'border-[var(--secondary)]',
  success: 'border-[var(--success)]',
  danger: 'border-[var(--danger)]',
  warning: 'border-[var(--warning)]',
};

const headerVariantStyles: Record<ImageCardVariant, string> = {
  primary: 'text-[var(--primary)]',
  secondary: 'text-[var(--secondary)]',
  success: 'text-[var(--success)]',
  danger: 'text-[var(--danger)]',
  warning: 'text-[var(--warning)]',
};

const sizeStyles: Record<ImageCardSize, {
  container: string;
  image: string;
  title: string;
  description: string;
  padding: string;
}> = {
  sm: {
    container: 'w-full max-w-[240px]',
    image: 'h-32',
    title: 'text-sm mb-1',
    description: 'text-xs',
    padding: 'p-3',
  },
  md: {
    container: 'w-full max-w-[320px]',
    image: 'h-48',
    title: 'text-lg mb-2',
    description: 'text-sm',
    padding: 'p-4',
  },
  lg: {
    container: 'w-full max-w-[400px]',
    image: 'h-64',
    title: 'text-xl mb-3',
    description: 'text-base',
    padding: 'p-6',
  },
};

export const ImageCard = React.forwardRef<HTMLElement, ImageCardProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      imageSrc,
      imageAlt,
      title,
      description,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-lg overflow-hidden bg-[var(--background)] border-2 transition-all duration-300 motion-reduce:transition-none';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

    const rainbowShadow = `
      shadow-[0_0_10px_rgba(255,0,0,0.2),0_0_20px_rgba(0,255,0,0.15),0_0_30px_rgba(0,0,255,0.15)]
      hover:shadow-[0_0_15px_rgba(255,0,0,0.3),0_0_30px_rgba(0,255,0,0.25),0_0_45px_rgba(0,0,255,0.25)]
    `.trim();

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size].container} ${rainbowShadow} ${disabledStyles} ${className}`.trim();

    return (
      <article
        ref={ref as React.Ref<HTMLElement>}
        className={combinedClassName}
        aria-disabled={disabled || undefined}
        {...props}
      >
        <div className={`relative w-full ${sizeStyles[size].image} bg-gray-200 dark:bg-gray-800`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className={sizeStyles[size].padding}>
          <h3 className={`font-bold line-clamp-2 ${sizeStyles[size].title} ${headerVariantStyles[variant]}`}>
            {title}
          </h3>
          <p className={`text-[var(--foreground)]/80 line-clamp-3 ${sizeStyles[size].description}`}>
            {description}
          </p>
        </div>
      </article>
    );
  }
);

ImageCard.displayName = 'ImageCard';
