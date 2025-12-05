'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const pricingPlans = [
    {
        name: 'Drop-In',
        price: '₹500',
        period: 'per class',
        description: 'Perfect for trying out our classes',
        features: [
            'Access to any class',
            'No commitment required',
            'Valid for 1 class',
            'Towel & mat included',
        ],
        gradient: 'from-purple to-primary',
        popular: false,
    },
    {
        name: 'Monthly',
        price: '₹3,999',
        period: 'per month',
        description: 'Best value for regular practitioners',
        features: [
            'Unlimited classes',
            'Priority booking',
            'Free workshops access',
            'Nutrition consultation',
            'Towel & mat included',
            'Locker facility',
        ],
        gradient: 'from-primary to-secondary',
        popular: true,
    },
    {
        name: 'Quarterly',
        price: '₹10,999',
        period: 'per quarter',
        description: 'Save more with long-term commitment',
        features: [
            'Unlimited classes',
            'Priority booking',
            'All workshops included',
            'Personal training session',
            'Nutrition consultation',
            'Towel & mat included',
            'Locker facility',
            'Guest passes (2/month)',
        ],
        gradient: 'from-secondary to-teal',
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-dark-light relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />

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
                        Flexible{' '}
                        <span className="gradient-text-secondary">Membership Plans</span>
                    </h2>
                    <p className="text-xl text-light max-w-2xl mx-auto">
                        Choose the plan that fits your lifestyle and wellness goals
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <motion.div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-glow">
                                        Most Popular
                                    </span>
                                </motion.div>
                            )}

                            <Card
                                hover
                                glow={plan.popular}
                                className={`h-full ${plan.popular ? 'scale-105 shadow-glow-xl' : ''}`}
                            >
                                <div className="relative z-10">
                                    <CardHeader>
                                        <CardTitle className={`text-2xl mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                            {plan.name}
                                        </CardTitle>
                                        <CardDescription className="mb-6">{plan.description}</CardDescription>

                                        {/* Price */}
                                        <div className="mb-6">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-heading font-bold text-white">
                                                    {plan.price}
                                                </span>
                                                <span className="text-gray">
                                                    {plan.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start gap-2 text-light"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.15 + i * 0.05 }}
                                                >
                                                    <span className={`bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mt-1 font-bold`}>✓</span>
                                                    <span>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Button
                                            variant={plan.popular ? 'primary' : 'outline'}
                                            size="large"
                                            className="w-full"
                                        >
                                            Get Started
                                        </Button>
                                    </CardHeader>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-light">
                        All plans include access to our premium facilities and expert guidance.
                        <br />
                        <span className="gradient-text font-semibold">First class is free for new members!</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
