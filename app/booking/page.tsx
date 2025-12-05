'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

const steps = ['Class', 'Time', 'Details', 'Confirm'];

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(0);

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

                <div className="bg-white border border-grid p-8 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink uppercase mb-8">
                        Select Class
                    </h1>

                    {/* Step 1 Content (Placeholder for now) */}
                    <div className="space-y-4 mb-12">
                        {['Hatha Flow', 'Vinyasa', 'Ashtanga', 'Power Yoga'].map((cls) => (
                            <div key={cls} className="border border-grid p-6 flex justify-between items-center hover:border-clay cursor-pointer transition-colors group">
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-ink uppercase group-hover:text-clay transition-colors">{cls}</h3>
                                    <p className="font-body text-xs text-ink/60 uppercase mt-1">60 Min • Moderate Intensity</p>
                                </div>
                                <div className="w-6 h-6 border border-grid rounded-full group-hover:border-clay flex items-center justify-center">
                                    <div className="w-3 h-3 bg-clay rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <Button variant="primary" onClick={() => setCurrentStep(Math.min(currentStep + 1, 3))}>
                            Next Step
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
