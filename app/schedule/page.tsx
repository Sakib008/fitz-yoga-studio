'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

const scheduleData = [
    { time: '07:00 AM', mon: 'Hatha Flow', tue: 'Vinyasa', wed: 'Ashtanga', thu: 'Power Yoga', fri: 'Hatha Flow', sat: 'Sunrise Yoga', sun: 'Restorative' },
    { time: '09:00 AM', mon: 'Vinyasa', tue: 'Hatha Flow', wed: 'Power Yoga', thu: 'Ashtanga', fri: 'Vinyasa', sat: 'Community Class', sun: 'Meditation' },
    { time: '12:00 PM', mon: 'Power Yoga', tue: 'Ashtanga', wed: 'Vinyasa', thu: 'Hatha Flow', fri: 'Power Yoga', sat: 'Workshop', sun: '-' },
    { time: '04:00 PM', mon: 'Ashtanga', tue: 'Power Yoga', wed: 'Hatha Flow', thu: 'Vinyasa', fri: 'Ashtanga', sat: '-', sun: '-' },
    { time: '06:00 PM', mon: 'Yin Yoga', tue: 'Restorative', wed: 'Yin Yoga', thu: 'Restorative', fri: 'Yin Yoga', sat: '-', sun: '-' },
    { time: '08:00 PM', mon: 'Meditation', tue: 'Nidra', wed: 'Meditation', thu: 'Nidra', fri: 'Sound Bath', sat: '-', sun: '-' },
];

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default function SchedulePage() {
    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-20">
            <div className="container-custom">
                <div className="mb-12 md:mb-16 border-b border-grid pb-8">
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-ink tracking-tighter uppercase mb-4">
                        Schedule
                    </h1>
                    <p className="font-body text-sm text-ink/60 uppercase tracking-wider max-w-xl">
                        Weekly Class Timetable. All levels welcome. Mats provided.
                        <br />
                        Please arrive 10 minutes early.
                    </p>
                </div>

                {/* Mobile View (List) */}
                <div className="md:hidden space-y-8">
                    {days.map((day, dayIndex) => (
                        <div key={day} className="border border-grid">
                            <div className="bg-ink text-white p-4 font-heading font-bold text-xl">
                                {day}
                            </div>
                            <div className="divide-y divide-grid">
                                {scheduleData.map((slot, index) => {
                                    const classKey = day.toLowerCase() as keyof typeof slot;
                                    const className = slot[classKey];
                                    if (className === '-' || !className) return null;

                                    return (
                                        <div key={index} className="p-4 flex justify-between items-center">
                                            <span className="font-body text-sm font-bold text-ink">{slot.time}</span>
                                            <span className="font-heading font-bold text-ink uppercase">{className}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View (Grid) */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse border border-grid text-left">
                        <thead>
                            <tr>
                                <th className="p-4 border-r border-b border-grid font-body text-xs font-bold text-ink/40 uppercase tracking-widest w-24">
                                    Time
                                </th>
                                {days.map(day => (
                                    <th key={day} className="p-4 border-r border-b border-grid font-body text-xs font-bold text-ink/40 uppercase tracking-widest">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((row, index) => (
                                <tr key={index} className="group hover:bg-ink hover:text-white transition-colors duration-200">
                                    <td className="p-4 border-r border-b border-grid font-body text-xs font-bold whitespace-nowrap group-hover:text-white/60">
                                        {row.time}
                                    </td>
                                    {days.map(day => {
                                        const classKey = day.toLowerCase() as keyof typeof row;
                                        const className = row[classKey];
                                        return (
                                            <td key={day} className="p-4 border-r border-b border-grid font-heading font-bold uppercase text-sm md:text-base cursor-pointer hover:bg-clay hover:text-white transition-colors duration-200">
                                                {className !== '-' ? className : ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="primary" size="large">
                        Book A Class
                    </Button>
                </div>
            </div>
        </div>
    );
}
