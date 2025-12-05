'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

const classes = [
    {
        id: '01',
        name: 'Hatha Flow',
        desc: 'A balanced practice focusing on alignment and breath. Perfect for building a strong foundation.',
        intensity: 'Moderate',
        temp: 'Normal',
        duration: '60 Min',
    },
    {
        id: '02',
        name: 'Vinyasa',
        desc: 'Dynamic flow linking breath with movement. Expect to sweat and challenge your coordination.',
        intensity: 'High',
        temp: 'Warm (28°C)',
        duration: '60 Min',
    },
    {
        id: '03',
        name: 'Ashtanga',
        desc: 'Traditional sequence of postures. Disciplined, rigorous, and meditative.',
        intensity: 'Very High',
        temp: 'Normal',
        duration: '90 Min',
    },
    {
        id: '04',
        name: 'Yin Yoga',
        desc: 'Slow-paced style with poses held for longer periods. Targets deep connective tissues.',
        intensity: 'Low',
        temp: 'Normal',
        duration: '60 Min',
    },
    {
        id: '05',
        name: 'Power Yoga',
        desc: 'Strength-based practice designed to build muscle and endurance.',
        intensity: 'High',
        temp: 'Hot (32°C)',
        duration: '45 Min',
    },
    {
        id: '06',
        name: 'Restorative',
        desc: 'Gentle practice using props to support the body in positions of ease and comfort.',
        intensity: 'Low',
        temp: 'Normal',
        duration: '60 Min',
    },
];

export default function ClassesPage() {
    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-20">
            <div className="container-custom">
                <div className="mb-12 md:mb-16 border-b border-grid pb-8">
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-ink tracking-tighter uppercase mb-4">
                        Classes
                    </h1>
                    <p className="font-body text-sm text-ink/60 uppercase tracking-wider max-w-xl">
                        Diverse practices for every body and mind.
                        <br />
                        Find your flow.
                    </p>
                </div>

                <div className="grid grid-cols-1 divide-y divide-grid border-t border-grid">
                    {classes.map((cls) => (
                        <div key={cls.id} className="group py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white transition-colors duration-300 px-4 md:px-0">
                            {/* Index */}
                            <div className="md:col-span-2 font-body text-sm font-bold text-clay">
                                {cls.id}
                            </div>

                            {/* Title & Desc */}
                            <div className="md:col-span-5">
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-4 uppercase">
                                    {cls.name}
                                </h2>
                                <p className="font-body text-base text-ink/80 max-w-md leading-relaxed">
                                    {cls.desc}
                                </p>
                            </div>

                            {/* Tech Specs */}
                            <div className="md:col-span-3 space-y-2">
                                <div className="flex justify-between border-b border-grid pb-1">
                                    <span className="font-body text-xs text-ink/40 uppercase">Intensity</span>
                                    <span className="font-body text-xs text-ink uppercase font-bold">{cls.intensity}</span>
                                </div>
                                <div className="flex justify-between border-b border-grid pb-1">
                                    <span className="font-body text-xs text-ink/40 uppercase">Temp</span>
                                    <span className="font-body text-xs text-ink uppercase font-bold">{cls.temp}</span>
                                </div>
                                <div className="flex justify-between border-b border-grid pb-1">
                                    <span className="font-body text-xs text-ink/40 uppercase">Duration</span>
                                    <span className="font-body text-xs text-ink uppercase font-bold">{cls.duration}</span>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="md:col-span-2 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button variant="outline" size="small">
                                    Book Class
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
