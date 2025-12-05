'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const { error } = await supabase.from('messages').insert([formData]);

        if (error) {
            setStatus('error');
        } else {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-0 flex flex-col">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid border-b border-grid">

                {/* Left: Info */}
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-between">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-ink tracking-tighter uppercase mb-8 md:mb-12">
                            Get In<br />Touch
                        </h1>

                        <div className="space-y-12">
                            <div>
                                <h3 className="font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Visit</h3>
                                <p className="font-heading text-2xl md:text-3xl font-bold text-ink uppercase leading-tight">
                                    B-42, Sector 18<br />
                                    Noida, UP 201301
                                </p>
                            </div>

                            <div>
                                <h3 className="font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Contact</h3>
                                <p className="font-heading text-2xl md:text-3xl font-bold text-ink uppercase leading-tight">
                                    <a href="mailto:hello@fitzyoga.com" className="hover:text-clay transition-colors">hello@fitzyoga.com</a>
                                    <br />
                                    <a href="tel:+919876543210" className="hover:text-clay transition-colors">+91 98765 43210</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <div className="aspect-video bg-gray-200 w-full grayscale relative overflow-hidden border border-grid">
                            <div className="absolute inset-0 flex items-center justify-center text-ink/20 font-heading text-2xl">
                                MAP VIEW
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="p-8 md:p-16 lg:p-24 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-12 h-full flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="group">
                                <label className="block font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full border-b border-grid py-4 text-xl font-heading font-bold text-ink bg-transparent focus:outline-none focus:border-clay transition-colors placeholder:text-ink/20"
                                    placeholder="ENTER YOUR NAME"
                                />
                            </div>

                            <div className="group">
                                <label className="block font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full border-b border-grid py-4 text-xl font-heading font-bold text-ink bg-transparent focus:outline-none focus:border-clay transition-colors placeholder:text-ink/20"
                                    placeholder="ENTER YOUR EMAIL"
                                />
                            </div>

                            <div className="group">
                                <label className="block font-body text-xs font-bold text-ink/40 uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full border-b border-grid py-4 text-xl font-heading font-bold text-ink bg-transparent focus:outline-none focus:border-clay transition-colors placeholder:text-ink/20 resize-none"
                                    placeholder="HOW CAN WE HELP?"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                variant="primary"
                                size="large"
                                className="w-full md:w-auto self-start"
                                isLoading={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </Button>

                            {status === 'success' && (
                                <span className="text-clay font-bold uppercase text-sm">Message Sent!</span>
                            )}
                            {status === 'error' && (
                                <span className="text-red-500 font-bold uppercase text-sm">Error sending.</span>
                            )}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
