'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const categories = [
    {
        id: '01',
        name: 'Hatha',
        desc: 'Foundation & Alignment',
        time: '60 MIN',
    },
    {
        id: '02',
        name: 'Vinyasa',
        desc: 'Breath & Flow',
        time: '60 MIN',
    },
    {
        id: '03',
        name: 'Ashtanga',
        desc: 'Discipline & Heat',
        time: '90 MIN',
    },
    {
        id: '04',
        name: 'Yin',
        desc: 'Deep Stretch & Calm',
        time: '60 MIN',
    },
    {
        id: '05',
        name: 'Power',
        desc: 'Strength & Sweat',
        time: '45 MIN',
    },
    {
        id: '06',
        name: 'Prenatal',
        desc: 'Care & Connection',
        time: '60 MIN',
    },
];

export default function ClassCategories() {
    return (
        <section id="classes" className="bg-linen border-b border-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid border-b border-grid">
                {categories.map((category, index) => (
                    <div
                        key={category.name}
                        className="group relative h-64 md:h-80 p-8 flex flex-col justify-between hover:bg-white transition-colors duration-300 cursor-pointer border-b md:border-b-0 border-grid lg:border-b-0"
                    >
                        <div className="flex justify-between items-start">
                            <span className="font-body text-xs font-bold text-clay">
                                {category.id}
                            </span>
                            <span className="font-body text-xs text-ink/50 border border-ink/20 px-2 py-1 rounded-full">
                                {category.time}
                            </span>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                {category.name}
                            </h3>
                            <p className="font-body text-sm text-ink/60 uppercase tracking-wider">
                                {category.desc}
                            </p>
                        </div>

                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-2xl text-clay">→</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-16 flex justify-center">
                <Button variant="outline" size="large">
                    View Full Schedule
                </Button>
            </div>
        </section>
    );
}
