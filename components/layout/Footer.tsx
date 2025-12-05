'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-linen text-ink border-t border-grid">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid">

                {/* Brand Column */}
                <div className="p-8 md:p-12 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-4xl font-heading font-bold tracking-tighter mb-4">FITZ.</h2>
                        <p className="font-body text-xs uppercase tracking-widest text-ink/60 max-w-[200px]">
                            Authentic Yoga & Movement Studio.
                            Est. 2025.
                        </p>
                    </div>
                    <div className="mt-12">
                        <p className="font-body text-xs text-ink/40">
                            © 2025 Fitz Yoga Studio.
                        </p>
                    </div>
                </div>

                {/* Links Column */}
                <div className="p-8 md:p-12">
                    <h4 className="font-body text-xs font-bold uppercase tracking-widest mb-6 text-ink/40">
                        Sitemap
                    </h4>
                    <ul className="space-y-3 font-body text-sm uppercase tracking-wider">
                        <li><Link href="#" className="hover:text-clay transition-colors">Classes</Link></li>
                        <li><Link href="#" className="hover:text-clay transition-colors">Schedule</Link></li>
                        <li><Link href="#" className="hover:text-clay transition-colors">Instructors</Link></li>
                        <li><Link href="#" className="hover:text-clay transition-colors">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-clay transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="p-8 md:p-12">
                    <h4 className="font-body text-xs font-bold uppercase tracking-widest mb-6 text-ink/40">
                        Contact
                    </h4>
                    <ul className="space-y-3 font-body text-sm uppercase tracking-wider">
                        <li>
                            <a href="mailto:hello@fitzyoga.com" className="hover:text-clay transition-colors">
                                hello@fitzyoga.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919876543210" className="hover:text-clay transition-colors">
                                +91 98765 43210
                            </a>
                        </li>
                        <li className="pt-4 text-ink/60">
                            B-42, Sector 18<br />
                            Noida, UP 201301
                        </li>
                    </ul>
                </div>

                {/* Social Column */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <h4 className="font-body text-xs font-bold uppercase tracking-widest mb-6 text-ink/40">
                            Social
                        </h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 border border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 border border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 pt-12 border-t border-grid md:border-t-0 md:pt-0">
                        <p className="font-body text-xs text-ink/40 uppercase">
                            Designed by Skylance
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
