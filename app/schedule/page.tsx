'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SchedulePage() {
    const [schedule, setSchedule] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchSchedule = async () => {
            const { data, error } = await supabase
                .from('schedule')
                .select('*, classes(*), instructors(*)')
                .order('start_time', { ascending: true });

            if (data) setSchedule(data);
        };
        fetchSchedule();
    }, []);

    // Helper to get classes for a specific day and time slot
    // This is a simplified view logic. Real-world would be more complex time grouping.
    // For this demo, we'll just list them by day.

    const handleBook = (scheduleId: string) => {
        router.push(`/booking?scheduleId=${scheduleId}`);
    };

    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-20">
            <div className="container-custom">
                <div className="mb-12 md:mb-16 border-b border-grid pb-8">
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-ink tracking-tighter uppercase mb-4">
                        Schedule
                    </h1>
                    <p className="font-body text-sm text-ink/60 uppercase tracking-wider max-w-xl">
                        Weekly Class Timetable. Click any slot to book.
                    </p>
                </div>

                {/* Mobile View (List) */}
                <div className="md:hidden space-y-8">
                    {days.map((day) => {
                        const dayClasses = schedule.filter(s => s.day_of_week === day);
                        if (dayClasses.length === 0) return null;

                        return (
                            <div key={day} className="border border-grid">
                                <div className="bg-ink text-white p-4 font-heading font-bold text-xl">
                                    {day}
                                </div>
                                <div className="divide-y divide-grid">
                                    {dayClasses.map((slot) => (
                                        <div
                                            key={slot.id}
                                            onClick={() => handleBook(slot.id)}
                                            className="p-4 flex justify-between items-center cursor-pointer hover:bg-clay hover:text-white transition-colors"
                                        >
                                            <span className="font-body text-sm font-bold">{slot.start_time.slice(0, 5)}</span>
                                            <div className="text-right">
                                                <span className="font-heading font-bold uppercase block">{slot.classes.name}</span>
                                                <span className="font-body text-xs opacity-70">{slot.instructors.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop View (Grid) */}
                <div className="hidden md:block overflow-x-auto">
                    <div className="grid grid-cols-7 border border-grid">
                        {days.map(day => (
                            <div key={day} className="border-r border-grid last:border-r-0">
                                <div className="p-4 border-b border-grid font-body text-xs font-bold text-ink/40 uppercase tracking-widest text-center bg-linen sticky top-0">
                                    {day}
                                </div>
                                <div className="divide-y divide-grid">
                                    {schedule
                                        .filter(s => s.day_of_week === day)
                                        .map(slot => (
                                            <div
                                                key={slot.id}
                                                onClick={() => handleBook(slot.id)}
                                                className="p-4 cursor-pointer hover:bg-ink hover:text-white transition-all duration-200 group h-32 flex flex-col justify-between"
                                            >
                                                <span className="font-body text-xs font-bold opacity-50 group-hover:opacity-100">{slot.start_time.slice(0, 5)}</span>
                                                <div>
                                                    <span className="font-heading font-bold uppercase text-sm block leading-tight mb-1">{slot.classes.name}</span>
                                                    <span className="font-body text-xs opacity-60 group-hover:opacity-80">{slot.instructors.name}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="primary" size="large" onClick={() => router.push('/booking')}>
                        Book A Class
                    </Button>
                </div>
            </div>
        </div>
    );
}
