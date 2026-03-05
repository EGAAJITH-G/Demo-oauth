"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CollectionsContent.module.css';

const collections = [
    {
        id: 1,
        slug: 'summer-luxe',
        name: 'Summer Luxe',
        tag: 'SS 2024',
        description: 'Light fabrics, sun-kissed palettes and effortless silhouettes for the season.',
        items: 24,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
        featured: true,   // spans 2 rows
    },
    {
        id: 2,
        slug: 'noir-essentials',
        name: 'Noir Essentials',
        tag: 'All Season',
        description: 'The power of black — timeless, intentional, refined.',
        items: 18,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
        featured: false,
    },
    {
        id: 3,
        slug: 'golden-hour',
        name: 'Golden Hour',
        tag: 'Exclusive',
        description: 'Gold-accented accessories and warm tones that celebrate every moment.',
        items: 15,
        image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=1200&auto=format&fit=crop',
        featured: false,
    },
    {
        id: 4,
        slug: 'the-modern-man',
        name: 'The Modern Man',
        tag: 'Men\'s Edit',
        description: 'Precision tailoring meets contemporary style for the man who leads.',
        items: 20,
        image: '/images/categories/mens-edit.png',
        featured: true,  // spans 2 cols
    },
    {
        id: 5,
        slug: 'resort-wear',
        name: 'Resort Wear',
        tag: 'Cruise 2024',
        description: 'Destination-ready looks crafted for warmth, leisure and pure indulgence.',
        items: 22,
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
        featured: false,
    },
    {
        id: 6,
        slug: 'signature-accessories',
        name: 'Signature Accessories',
        tag: 'Curated',
        description: 'Watches, jewellery and leather goods — completing every look flawlessly.',
        items: 30,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop',
        featured: false,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] },
    }),
};

export default function CollectionsContent() {
    return (
        <>
            {/* ── HERO BANNER ── */}
            <section className={styles.banner}>
                <div className={styles.bannerBg}>
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
                        alt="Collections banner"
                        fill
                        priority
                        className={styles.bannerImg}
                        sizes="100vw"
                    />
                    <div className={styles.bannerOverlay} />
                </div>
                <div className={`container ${styles.bannerContent}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.bannerTag}>Curated for Excellence</span>
                        <h1 className={styles.bannerTitle}>
                            Our <em>Collections</em>
                        </h1>
                        <p className={styles.bannerDesc}>
                            Each collection is a story — told through fabric, form and the finest craftsmanship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── COLLECTIONS BENTO GRID ── */}
            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {collections.map((col, i) => (
                            <motion.div
                                key={col.id}
                                className={`${styles.card} ${col.featured ? styles.featured : ''}`}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-60px' }}
                            >
                                {/* Image */}
                                <div className={styles.imgWrap}>
                                    <Image
                                        src={col.image}
                                        alt={col.name}
                                        fill
                                        className={styles.img}
                                        sizes="(max-width:768px) 100vw, 50vw"
                                    />
                                    <div className={styles.cardOverlay} />
                                </div>

                                {/* Content */}
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTop}>
                                        <span className={styles.cardTag}>{col.tag}</span>
                                        <span className={styles.cardCount}>{col.items} Pieces</span>
                                    </div>
                                    <h2 className={styles.cardName}>{col.name}</h2>
                                    <p className={styles.cardDesc}>{col.description}</p>
                                    <Link
                                        href={`/shop?collection=${col.slug}`}
                                        className={styles.cardBtn}
                                    >
                                        View Collection
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA STRIP ── */}
            <section className={styles.cta}>
                <div className="container">
                    <motion.div
                        className={styles.ctaBox}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className={styles.ctaTag}>Members Only</span>
                        <h2 className={styles.ctaTitle}>Exclusive Access Awaits</h2>
                        <p className={styles.ctaDesc}>
                            Join LUMIÈRE and unlock early access to every new collection, member-only pricing and personal styling.
                        </p>
                        <div className={styles.ctaBtns}>
                            <Link href="/shop" className={styles.ctaPrimary}>Shop All</Link>
                            <Link href="/login" className={styles.ctaSecondary}>Become a Member</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
