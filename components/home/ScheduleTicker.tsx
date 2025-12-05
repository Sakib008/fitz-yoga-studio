'use client';

import React from 'react';

const scheduleItems = [
    "TODAY'S CLASSES:",
    "07:00 AM — HATHA FLOW",
    "09:00 AM — VINYASA",
    "12:00 PM — POWER YOGA",
    "04:00 PM — ASHTANGA",
    "06:00 PM — YIN YOGA",
    "08:00 PM — MEDITATION",
    "///",
    "TOMORROW:",
    "07:00 AM — SUNRISE FLOW",
    "09:00 AM — HATHA",
    "///"
];

export default function ScheduleTicker() {
    return (
        <div className="w-full border-b border-grid bg-linen overflow-hidden py-3 md:py-4">
            <div className="marquee-container flex">
                <div className="marquee-content flex items-center space-x-8 md:space-x-12 px-4">
                    {scheduleItems.map((item, index) => (
                        <span key={`original-${index}`} className="text-sm md:text-base font-body font-bold tracking-widest text-ink whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {scheduleItems.map((item, index) => (
                        <span key={`duplicate-${index}`} className="text-sm md:text-base font-body font-bold tracking-widest text-ink whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                    {scheduleItems.map((item, index) => (
                        <span key={`duplicate-2-${index}`} className="text-sm md:text-base font-body font-bold tracking-widest text-ink whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
