"use client"
import styles from './FeaturedProducts.module.css';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { products } from '@/data/mockData';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FeaturedProducts() {
    const featured = products.slice(0, 8);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className={styles.featured}>
            <div className="container">
                <SectionHeader
                    subtitle="Handpicked for you"
                    title="Featured Products"
                />

                <motion.div
                    variants={containerVariants}
                    initial="visible"
                    animate="visible"
                    className={styles.grid}
                >
                    {featured.map(product => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.viewAll}
                >
                    <Link href="/shop" className={styles.viewBtn}>View All Products</Link>
                </motion.div>
            </div>
        </section>
    );
}
