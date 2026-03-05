"use client"
import styles from './Categories.module.css';
import Image from 'next/image';
import { categories } from '@/data/mockData';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Categories() {
    return (
        <section className={styles.categories}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Shop by <span>Category</span></h2>
                </motion.div>

                <div className={styles.categoryGrid}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${styles.categoryCard} ${index === 1 ? styles.large : ''}`}
                        >
                            <Link href={`/category/${cat.name.toLowerCase()}`}>
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.info}>
                                        <h3>{cat.name}</h3>
                                        <span>{cat.count} Items</span>
                                        <span className={styles.shopBtn}>Discover</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
