'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-linen pt-20 overflow-hidden border-b border-grid">
            <div className="container-custom relative z-10 flex flex-col items-center">

                {/* Massive Typography */}
                <div className="flex flex-col items-center justify-center leading-none select-none">
                    <motion.h1
                        className="text-massive font-heading font-bold text-ink tracking-tighter mix-blend-multiply"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        BODY.
                    </motion.h1>
                    <motion.h1
                        className="text-massive font-heading font-bold text-ink tracking-tighter mix-blend-multiply -mt-[2vw]"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        MIND.
                    </motion.h1>
                    <motion.h1
                        className="text-massive font-heading font-bold text-ink tracking-tighter mix-blend-multiply -mt-[2vw]"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        SWEAT.
                    </motion.h1>
                </div>

                {/* Subtext & CTA */}
                <motion.div
                    className="mt-12 md:mt-16 flex flex-col items-center gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <p className="font-body text-sm md:text-base uppercase tracking-widest text-ink/70 max-w-md text-center">
                        Authentic Yoga & Personal Training in Noida.
                        <br />
                        No Gimmicks. Just Practice.
                    </p>

                    <div className="flex gap-4">
                        <Button variant="primary" size="large">
                            Start Trial
                        </Button>
                        <Button variant="outline" size="large">
                            View Schedule
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-grid opacity-50"></div>
                <div className="absolute right-1/4 top-0 bottom-0 w-px bg-grid opacity-50"></div>
            </div>
        </section>
    );
}
