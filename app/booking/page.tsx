'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const steps = ['Class', 'Time', 'Details', 'Confirm'];

function BookingContent() {
    const [isMounted, setIsMounted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [classes, setClasses] = useState<any[]>([]);
    const [schedules, setSchedules] = useState<any[]>([]);
    const [selectedClass, setSelectedClass] = useState<any>(null);
    const [selectedSlot, setSelectedSlot] = useState<any>(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const preSelectedScheduleId = searchParams.get('scheduleId');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Fetch Classes on Mount
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const { data, error } = await supabase.from('classes').select('*');
                if (error) throw error;
                if (data) setClasses(data);
            } catch (err: any) {
                console.error("Error fetching classes:", err);
                setError("Failed to load classes. Please try again later.");
            }
        };
        fetchClasses();
    }, []);

    // Handle Pre-selection from Schedule Page
    useEffect(() => {
        if (preSelectedScheduleId) {
            const fetchPreSelected = async () => {
                try {
                    const { data: slot, error } = await supabase
                        .from('schedule')
                        .select('*, classes(*), instructors(*)')
                        .eq('id', preSelectedScheduleId)
                        .single();

                    if (error) throw error;

                    if (slot) {
                        setSelectedClass(slot.classes);
                        setSelectedSlot(slot);
                        setCurrentStep(2); // Jump to Details
                    }
                } catch (err) {
                    console.error("Error fetching pre-selected slot:", err);
                }
            };
            fetchPreSelected();
        }
    }, [preSelectedScheduleId]);

    // Fetch Schedule when Class is Selected
    useEffect(() => {
        if (selectedClass) {
            const fetchSchedule = async () => {
                try {
                    const { data, error } = await supabase
                        .from('schedule')
                        .select('*, instructors(*)')
                        .eq('class_id', selectedClass.id);

                    if (error) throw error;
                    if (data) setSchedules(data);
                } catch (err) {
                    console.error("Error fetching schedule:", err);
                }
            };
            fetchSchedule();
        }
    }, [selectedClass]);

    const handleBook = async () => {
        setLoading(true);
        try {
            const { error } = await supabase.from('bookings').insert({
                schedule_id: selectedSlot.id,
                user_name: formData.name,
                user_email: formData.email,
            });

            if (error) throw error;

            setBookingStatus('success');
            setCurrentStep(3);
        } catch (err) {
            console.error("Error booking class:", err);
            setBookingStatus('error');
        } finally {
            setLoading(false);
        }
    };

    if (!isMounted) return null;

    if (error) {
        return (
            <div className="bg-linen min-h-screen pt-24 pb-20 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-heading font-bold text-ink mb-4">Oops!</h2>
                    <p className="text-ink/60 mb-6">{error}</p>
                    <Button variant="primary" onClick={() => window.location.reload()}>Retry</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-20">
            <div className="container-custom max-w-3xl">
                {/* Progress Bar */}
                <div className="mb-12 flex justify-between items-center border-b border-grid pb-4">
                    {steps.map((step, index) => (
                        <div key={step} className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${index <= currentStep ? 'bg-clay border-clay text-white' : 'border-grid text-ink/40'}`}>
                                {index + 1}
                            </div>
                            <span className={`font-body text-xs uppercase tracking-wider ${index <= currentStep ? 'text-ink' : 'text-ink/40'}`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-white border border-grid p-8 md:p-12 min-h-[500px] flex flex-col">

                    {/* Step 1: Select Class */}
                    {currentStep === 0 && (
                        <>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink uppercase mb-8">Select Class</h1>
                            <div className="space-y-4 mb-12 flex-1">
                                {classes.length === 0 ? (
                                    <p className="text-ink/60">Loading classes...</p>
                                ) : (
                                    classes.map((cls) => (
                                        <div
                                            key={cls.id}
                                            onClick={() => setSelectedClass(cls)}
                                            className={`border p-6 flex justify-between items-center cursor-pointer transition-colors group ${selectedClass?.id === cls.id ? 'border-clay bg-linen' : 'border-grid hover:border-clay'}`}
                                        >
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-ink uppercase group-hover:text-clay transition-colors">{cls.name}</h3>
                                                <p className="font-body text-xs text-ink/60 uppercase mt-1">{cls.duration} Min • {cls.intensity}</p>
                                            </div>
                                            <div className={`w-6 h-6 border rounded-full flex items-center justify-center ${selectedClass?.id === cls.id ? 'border-clay' : 'border-grid group-hover:border-clay'}`}>
                                                <div className={`w-3 h-3 bg-clay rounded-full transition-opacity ${selectedClass?.id === cls.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="flex justify-end">
                                <Button variant="primary" disabled={!selectedClass} onClick={() => setCurrentStep(1)}>Next Step</Button>
                            </div>
                        </>
                    )}

                    {/* Step 2: Select Time */}
                    {currentStep === 1 && (
                        <>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink uppercase mb-8">Select Time</h1>
                            <div className="space-y-4 mb-12 flex-1">
                                {schedules.length === 0 ? (
                                    <p className="text-ink/60">No sessions available for this class.</p>
                                ) : (
                                    schedules.map((slot) => (
                                        <div
                                            key={slot.id}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`border p-6 flex justify-between items-center cursor-pointer transition-colors group ${selectedSlot?.id === slot.id ? 'border-clay bg-linen' : 'border-grid hover:border-clay'}`}
                                        >
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-ink uppercase group-hover:text-clay transition-colors">{slot.day_of_week} @ {slot.start_time.slice(0, 5)}</h3>
                                                <p className="font-body text-xs text-ink/60 uppercase mt-1">Instructor: {slot.instructors?.name}</p>
                                            </div>
                                            <div className={`w-6 h-6 border rounded-full flex items-center justify-center ${selectedSlot?.id === slot.id ? 'border-clay' : 'border-grid group-hover:border-clay'}`}>
                                                <div className={`w-3 h-3 bg-clay rounded-full transition-opacity ${selectedSlot?.id === slot.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="flex justify-between">
                                <Button variant="outline" onClick={() => setCurrentStep(0)}>Back</Button>
                                <Button variant="primary" disabled={!selectedSlot} onClick={() => setCurrentStep(2)}>Next Step</Button>
                            </div>
                        </>
                    )}

                    {/* Step 3: Details */}
                    {currentStep === 2 && (
                        <>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink uppercase mb-8">Your Details</h1>
                            <div className="space-y-8 mb-12 flex-1">
                                <div className="bg-linen p-6 border border-grid">
                                    <h4 className="font-heading font-bold text-lg uppercase mb-2">Summary</h4>
                                    <p className="font-body text-sm text-ink/80">
                                        {selectedClass?.name} <br />
                                        {selectedSlot?.day_of_week} at {selectedSlot?.start_time?.slice(0, 5)} <br />
                                        with {selectedSlot?.instructors?.name}
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b border-grid py-2 text-xl font-heading font-bold text-ink bg-transparent focus:outline-none focus:border-clay transition-colors placeholder:text-ink/20"
                                            placeholder="ENTER YOUR NAME"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border-b border-grid py-2 text-xl font-heading font-bold text-ink bg-transparent focus:outline-none focus:border-clay transition-colors placeholder:text-ink/20"
                                            placeholder="ENTER YOUR EMAIL"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <Button variant="outline" onClick={() => setCurrentStep(1)}>Back</Button>
                                <Button variant="primary" disabled={!formData.name || !formData.email} onClick={handleBook} isLoading={loading}>
                                    Confirm Booking
                                </Button>
                            </div>
                        </>
                    )}

                    {/* Step 4: Confirm */}
                    {currentStep === 3 && (
                        <div className="flex flex-col items-center justify-center flex-1 text-center">
                            <div className="w-20 h-20 bg-clay rounded-full flex items-center justify-center mb-8 text-white text-4xl">
                                ✓
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink uppercase mb-4">Booking Confirmed</h1>
                            <p className="font-body text-ink/60 mb-8 max-w-md">
                                You are all set for {selectedClass?.name} on {selectedSlot?.day_of_week}.
                                A confirmation email has been sent to {formData.email}.
                            </p>
                            <Button variant="outline" onClick={() => router.push('/')}>Return Home</Button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-linen pt-24 text-center">Loading...</div>}>
            <BookingContent />
        </Suspense>
    );
}
