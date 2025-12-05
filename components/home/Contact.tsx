'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="section-padding bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Get in{' '}
                        <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-light max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card glow className="h-full">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />

                                <Textarea
                                    label="Message"
                                    name="message"
                                    placeholder="Tell us about your yoga goals..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    className="w-full"
                                    isLoading={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-2xl bg-secondary/20 border border-secondary/30 text-white text-center"
                                    >
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-2xl bg-red-500/20 border border-red-500/30 text-white text-center"
                                    >
                                        ✗ Failed to send message. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        {[
                            {
                                icon: '📍',
                                title: 'Visit Us',
                                content: 'Sector 62, Noida, Uttar Pradesh 201301',
                                gradient: 'from-primary to-purple',
                            },
                            {
                                icon: '📞',
                                title: 'Call Us',
                                content: '+91 98765 43210',
                                gradient: 'from-secondary to-teal',
                            },
                            {
                                icon: '✉️',
                                title: 'Email Us',
                                content: 'hello@fitzyoga.com',
                                gradient: 'from-accent to-coral',
                            },
                            {
                                icon: '⏰',
                                title: 'Working Hours',
                                content: 'Mon - Sat: 6:00 AM - 9:00 PM\nSunday: 7:00 AM - 6:00 PM',
                                gradient: 'from-purple to-primary',
                            },
                        ].map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hover className="group">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-3xl shadow-glow flex-shrink-0`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-heading font-bold mb-2 bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}>
                                                {info.title}
                                            </h3>
                                            <p className="text-light whitespace-pre-line">
                                                {info.content}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
