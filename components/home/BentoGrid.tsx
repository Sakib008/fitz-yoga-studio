'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function BentoGrid() {
    return (
        <section className="bg-linen border-b border-grid">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-grid">

                {/* Box 1: Pricing */}
                <div className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px] hover:bg-white transition-colors duration-300">
                    <div>
                        <h3 className="text-4xl font-heading font-bold text-ink mb-2">MEMBERSHIP</h3>
                        <p className="font-body text-sm text-ink/60 uppercase tracking-wider mb-8">
                            Unlimited Access. No Contracts.
                        </p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-6xl font-heading font-bold text-clay">$99</span>
                            <span className="font-body text-sm text-ink/60">/ MONTH</span>
                        </div>
                        <ul className="space-y-4 font-body text-sm text-ink mb-8">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-clay rounded-full" />
                                Unlimited Classes
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-clay rounded-full" />
                                All Studio Locations
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-clay rounded-full" />
                                Free Mat Rental
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-clay rounded-full" />
                                Guest Passes (2/mo)
                            </li>
                        </ul>
                    </div>
                    <Link href="/pricing" className="w-full">
                        <Button variant="primary" className="w-full">
                            Join Now
                        </Button>
                    </Link>
                </div>

                {/* Box 2: Location */}
                <div className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px] hover:bg-white transition-colors duration-300">
                    <div>
                        <h3 className="text-4xl font-heading font-bold text-ink mb-2">LOCATION</h3>
                        <p className="font-body text-sm text-ink/60 uppercase tracking-wider mb-8">
                            Sector 62, Noida
                        </p>
                        <div className="aspect-video bg-gray-200 w-full mb-8 grayscale hover:grayscale-0 transition-all duration-500 relative overflow-hidden">
                            {/* Placeholder for Map/Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-ink/20 font-heading text-2xl">
                                MAP VIEW
                            </div>
                        </div>
                        <address className="font-body text-sm text-ink not-italic space-y-2">
                            <p>B-42, Sector 18</p>
                            <p>Noida, UP 201301</p>
                            <p className="mt-4">Mon-Fri: 5:30 AM - 9:00 PM</p>
                            <p>Sat-Sun: 6:00 AM - 8:00 PM</p>
                        </address>
                    </div>
                    <Link href="/contact" className="w-full mt-8">
                        <Button variant="outline" className="w-full">
                            Get Directions
                        </Button>
                    </Link>
                </div>

                {/* Box 3: Drop-In / Book */}
                <div className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px] hover:bg-white transition-colors duration-300">
                    <div>
                        <h3 className="text-4xl font-heading font-bold text-ink mb-2">DROP-IN</h3>
                        <p className="font-body text-sm text-ink/60 uppercase tracking-wider mb-8">
                            Single Class Pass
                        </p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-6xl font-heading font-bold text-ink">$25</span>
                            <span className="font-body text-sm text-ink/60">/ CLASS</span>
                        </div>
                        <p className="font-body text-sm text-ink mb-8 leading-relaxed">
                            Perfect for travelers or those with a busy schedule. Book any class, any time. Mat rental included.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Link href="/booking" className="w-full">
                            <Button variant="outline" className="w-full">
                                Book A Class
                            </Button>
                        </Link>
                        <p className="text-center font-body text-xs text-ink/40 uppercase">
                            First time? Try for $15
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
