"use client"
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import styles from './Reviews.module.css';
import { reviews } from '@/data/mockData';
import { motion } from 'framer-motion';

export default function Reviews() {
    return (
        <section className={styles.reviews}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.tag}>Client Stories</span>
                    <h2 className={styles.title}>What Our Clients <span>Say</span></h2>
                </motion.div>

                <div className={styles.reviewGrid}>
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.reviewCard}
                        >
                            <Quote className={styles.quoteIcon} size={40} />
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill={i < review.rating ? "var(--accent)" : "none"}
                                        color={i < review.rating ? "var(--accent)" : "#ddd"}
                                    />
                                ))}
                            </div>
                            <p className={styles.comment}>&quot;{review.comment}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        width={50}
                                        height={50}
                                        className={styles.avatar}
                                    />
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4>{review.name}</h4>
                                    <span>{review.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
