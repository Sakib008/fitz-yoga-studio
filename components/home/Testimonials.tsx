'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const testimonials = [
    {
        name: 'Anjali Verma',
        role: 'Software Engineer',
        image: '👩',
        rating: 5,
        text: 'Fitz Yoga Studio has completely transformed my life. The instructors are incredibly knowledgeable and the community is so welcoming.',
        gradient: 'from-primary to-purple',
    },
    {
        name: 'Rahul Malhotra',
        role: 'Business Owner',
        image: '👨',
        rating: 5,
        text: 'The variety of classes and flexible timings make it easy to maintain a consistent practice. Highly recommend!',
        gradient: 'from-secondary to-teal',
    },
    {
        name: 'Sneha Gupta',
        role: 'New Mother',
        image: '👩‍🍼',
        rating: 5,
        text: 'The prenatal yoga classes were amazing during my pregnancy. Now I\'m back for postnatal sessions and feeling stronger every day.',
        gradient: 'from-accent to-coral',
    },
    {
        name: 'Vikram Singh',
        role: 'Fitness Enthusiast',
        image: '🧔',
        rating: 5,
        text: 'Power yoga classes here are intense and exactly what I needed to complement my fitness routine.',
        gradient: 'from-purple to-primary',
    },
    {
        name: 'Kavita Reddy',
        role: 'Teacher',
        image: '👩‍🏫',
        rating: 5,
        text: 'Fitz stands out for its authentic approach and experienced teachers. The Yin yoga sessions are perfect for unwinding.',
        gradient: 'from-teal to-secondary',
    },
    {
        name: 'Amit Kumar',
        role: 'IT Professional',
        image: '👨‍💼',
        rating: 5,
        text: 'Started as a complete beginner and now I can\'t imagine my week without yoga. The progression has been amazing!',
        gradient: 'from-coral to-accent',
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal/10 rounded-full blur-[120px]" />

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
                        What Our{' '}
                        <span className="gradient-text">Members Say</span>
                    </h2>
                    <p className="text-xl text-light max-w-2xl mx-auto">
                        Join 500+ happy members who have transformed their lives through yoga
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card hover glow className="h-full">
                                <div className="relative z-10">
                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                className={`text-xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + i * 0.1 }}
                                            >
                                                ★
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-light leading-relaxed mb-6 italic">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl shadow-glow`}>
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-white">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
