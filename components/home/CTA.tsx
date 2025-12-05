'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function CTA() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section-padding bg-gradient-mesh relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Ready to Begin Your{' '}
                        <span className="block mt-2">Yoga Journey?</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join our community today and experience the transformative power of yoga.
                        Your first class is on us!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            variant="secondary"
                            size="large"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={scrollToContact}
                        >
                            Book Free Trial Class
                        </Button>
                        <Button
                            variant="ghost"
                            size="large"
                        >
                            View Class Schedule
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 text-white/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {[
                            { icon: '✓', text: '500+ Happy Members' },
                            { icon: '✓', text: '20+ Expert Instructors' },
                            { icon: '✓', text: '50+ Classes Weekly' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.text}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
