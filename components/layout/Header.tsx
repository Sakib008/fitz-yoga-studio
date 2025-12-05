'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Classes', href: '/classes' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 bg-linen transition-all duration-300",
            isScrolled ? "border-b border-grid" : ""
        )}>
            <div className="w-full flex items-stretch h-16 md:h-20">
                {/* Logo Section */}
                <div className="flex-shrink-0 px-6 md:px-8 flex items-center border-r border-grid bg-linen z-20">
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tighter">
                        FITZ.
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-stretch">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex-1 flex items-center justify-center border-r border-grid hover:bg-white transition-colors font-body text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-stretch w-48">
                    <button className="w-full h-full bg-clay text-white font-body uppercase tracking-wider hover:bg-ink transition-colors">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden ml-auto px-6 border-l border-grid flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="font-body text-sm uppercase">Menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-grid bg-linen absolute w-full left-0 top-full border-b">
                    <nav className="flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="py-4 px-6 border-b border-grid last:border-none font-body text-sm uppercase hover:bg-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="py-4 px-6 bg-clay text-white font-body uppercase text-sm text-left">
                            Book Now
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
