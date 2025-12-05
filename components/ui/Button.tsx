import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'medium', isLoading = false, children, disabled, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-body uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed sharp-corners';

        const variants = {
            primary: 'bg-clay text-white hover:bg-ink hover:text-white',
            outline: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white',
            ghost: 'bg-transparent text-ink hover:bg-gray-200',
        };

        const sizes = {
            small: 'px-4 py-2 text-xs',
            medium: 'px-6 py-3 text-sm',
            large: 'px-8 py-4 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-75" />
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-150" />
                    </span>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
