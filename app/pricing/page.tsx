'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const plans = [
    {
        name: 'Drop-In',
        price: '25',
        period: 'class',
        desc: 'Single class pass. Valid for 7 days.',
        features: ['Access to any class', 'Mat rental included', 'Towel service', 'No commitment'],
        cta: 'Buy Pass',
        highlight: false,
    },
    {
        name: 'Monthly',
        price: '99',
        period: 'month',
        desc: 'Unlimited access. Auto-renews.',
        features: ['Unlimited classes', 'All locations', 'Guest passes (2/mo)', 'Workshop discounts', 'Free freeze (1/yr)'],
        cta: 'Join Now',
        highlight: true,
    },
    {
        name: '10 Class Pack',
        price: '200',
        period: 'pack',
        desc: 'Shareable pack. Valid for 3 months.',
        features: ['20% savings', 'Share with friends', 'Rollover unused classes', 'All locations'],
        cta: 'Buy Pack',
        highlight: false,
    },
];

export default function PricingPage() {
    return (
        <div className="bg-linen min-h-screen pt-20 md:pt-24 pb-20">
            <div className="container-custom">
                <div className="mb-12 md:mb-16 border-b border-grid pb-8">
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-ink tracking-tighter uppercase mb-4">
                        Pricing
                    </h1>
                    <p className="font-body text-sm text-ink/60 uppercase tracking-wider max-w-xl">
                        Simple, transparent rates. No hidden fees.
                        <br />
                        Invest in yourself.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-grid border border-grid bg-white">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`p-8 md:p-12 flex flex-col h-full relative ${plan.highlight ? 'bg-ink text-white' : 'bg-linen text-ink'}`}>
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-clay text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-heading font-bold uppercase mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-sm font-bold">$</span>
                                    <span className="text-6xl font-heading font-bold tracking-tighter">{plan.price}</span>
                                    <span className="text-xs uppercase opacity-60">/ {plan.period}</span>
                                </div>
                                <p className="font-body text-sm opacity-70 border-b border-dashed border-current pb-4 mb-4">
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-12 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 font-body text-sm">
                                        <span className="text-clay text-lg leading-none">▪</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/booking" className="w-full">
                                <Button
                                    variant={plan.highlight ? 'primary' : 'outline'}
                                    className={`w-full ${plan.highlight ? 'bg-clay border-clay hover:bg-white hover:text-ink' : ''}`}
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border-t border-grid pt-8 text-center">
                    <h3 className="text-2xl font-heading font-bold uppercase mb-4">Private Training</h3>
                    <p className="font-body text-sm text-ink/60 max-w-2xl mx-auto mb-8">
                        Personalized instruction tailored to your goals. Available for individuals and small groups.
                        Starting at $80/session.
                    </p>
                    <Button variant="outline">Inquire Now</Button>
                </div>
            </div>
        </div>
    );
}
