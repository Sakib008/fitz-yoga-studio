'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

const instructors = [
    {
        name: 'Sarah J.',
        specialty: 'Vinyasa',
        image: 'bg-gray-300', // Placeholder
    },
    {
        name: 'Michael R.',
        specialty: 'Ashtanga',
        image: 'bg-gray-400', // Placeholder
    },
    {
        name: 'Priya K.',
        specialty: 'Hatha',
        image: 'bg-gray-500', // Placeholder
    },
    {
        name: 'David L.',
        specialty: 'Power',
        image: 'bg-gray-600', // Placeholder
    },
];

export default function Instructors() {
    return (
        <section className="bg-linen border-b border-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid">
                {instructors.map((instructor) => (
                    <div
                        key={instructor.name}
                        className="group relative h-[400px] overflow-hidden cursor-pointer"
                    >
                        {/* Image Placeholder */}
                        <div className={`absolute inset-0 ${instructor.image} grayscale group-hover:grayscale-0 transition-all duration-500`} />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-2xl font-heading font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {instructor.name}
                            </h3>
                            <p className="font-body text-sm text-white/80 uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {instructor.specialty}
                            </p>
                        </div>

                        {/* Default Visible Name (Hidden on Hover) */}
                        <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
                            <h3 className="text-2xl font-heading font-bold text-ink bg-white/80 backdrop-blur-sm px-4 py-2">
                                {instructor.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
