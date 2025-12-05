'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const benefits = [
    {
        icon: '🧘‍♀️',
        title: 'Flexibility & Strength',
        description: 'Build lean muscle and improve your range of motion through progressive asana practice.',
        gradient: 'from-primary to-purple',
    },
    {
        icon: '🧠',
        title: 'Mental Clarity',
        description: 'Reduce stress and anxiety while enhancing focus through mindful breathing and meditation.',
        gradient: 'from-secondary to-teal',
    },
    {
        icon: '❤️',
        title: 'Heart Health',
        description: 'Improve cardiovascular function and lower blood pressure with regular yoga practice.',
        gradient: 'from-accent to-coral',
    },
    {
        icon: '⚖️',
        title: 'Better Balance',
        description: 'Enhance coordination and stability, reducing the risk of falls and injuries.',
        gradient: 'from-purple to-primary',
    },
    {
        icon: '😴',
        title: 'Quality Sleep',
        description: 'Develop healthy sleep patterns and wake up feeling refreshed and energized.',
        gradient: 'from-teal to-secondary',
    },
    {
        icon: '🌟',
        title: 'Inner Peace',
        description: 'Cultivate self-awareness and emotional balance for a more fulfilling life.',
        gradient: 'from-coral to-accent',
    },
];

export default function Benefits() {
    return (
        <section className="section-padding bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />

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
                        Transform Your Life{' '}
                        <span className="gradient-text-secondary">Through Yoga</span>
                    </h2>
                    <p className="text-xl text-light max-w-2xl mx-auto">
                        Experience the profound physical, mental, and spiritual benefits of a regular yoga practice
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card hover glow className="h-full group">
                                <CardHeader>
                                    <motion.div
                                        className="text-6xl mb-4"
                                        whileHover={{ scale: 1.2, rotate: -10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                    <CardTitle className={`mb-3 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                                        {benefit.title}
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        {benefit.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
