'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ScheduleTicker() {
    const [items, setItems] = useState<string[]>(["LOADING SCHEDULE..."]);

    useEffect(() => {
        const fetchTodaySchedule = async () => {
            const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
            const { data, error } = await supabase
                .from('schedule')
                .select('*, classes(*)')
                .eq('day_of_week', today)
                .order('start_time', { ascending: true });

            if (data && data.length > 0) {
                const tickerItems = [
                    `TODAY'S CLASSES (${today.toUpperCase()}):`,
                    ...data.map((slot: any) => `${slot.start_time.slice(0, 5)} — ${slot.classes.name.toUpperCase()}`),
                    "///"
                ];
                setItems(tickerItems);
            } else {
                setItems([`NO CLASSES SCHEDULED FOR ${today.toUpperCase()}`, "///"]);
            }
        };
        fetchTodaySchedule();
    }, []);

    return (
        <div className="w-full border-b border-grid bg-linen overflow-hidden py-3 md:py-4">
            <div className="marquee-container flex">
                <div className="marquee-content flex items-center space-x-8 md:space-x-12 px-4">
                    {/* Triple duplication for smooth loop */}
                    {[...items, ...items, ...items].map((item, index) => (
                        <span key={index} className="text-sm md:text-base font-body font-bold tracking-widest text-ink whitespace-nowrap">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
