"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { heroSlides } from '@/data/mockData';

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = heroSlides[current];

    return (
        <section className={styles.hero}>
            {/* Background Image with fade transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                </motion.div>
            </AnimatePresence>

            <div className={styles.heroOverlay}></div>

            <div className={`container ${styles.heroContent}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${slide.id}`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={styles.info}
                    >
                        <div className={styles.subtitle}>{slide.tag}</div>
                        <h1 className={styles.title}>
                            {slide.title} <br />
                            <span>{slide.titleSpan}</span> {slide.titleEnd}
                        </h1>
                        <p className={styles.description}>{slide.desc}</p>
                        <div className={styles.actions}>
                            <Link href="/shop" className={styles.primaryBtn}>Shop Now</Link>
                            <Link href="/about" className={styles.secondaryBtn}>Our Story</Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide indicators */}
            <div className={styles.indicators}>
                {heroSlides.map((_, i) => (
                    <button
                        suppressHydrationWarning
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
