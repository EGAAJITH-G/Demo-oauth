"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Trash2, ArrowRight, Star, ShoppingCart } from 'lucide-react';
import styles from './Wishlist.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export default function WishlistPage() {
    const { addToast } = useToast();
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const moveToCart = (product) => {
        addToCart(product, 1);
        removeFromWishlist(product.id);
        addToast(`"${product.name}" moved to cart!`, 'success');
    };

    const handleRemove = (product) => {
        removeFromWishlist(product.id);
        addToast(`"${product.name}" removed from wishlist.`, 'info');
    };

    if (wishlistItems.length === 0) {
        return (
            <div className={styles.venumWishlistPage}>
                <div className={styles.venumHero}>
                    <div className={styles.heroGlow}></div>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={styles.emptyContent}
                        >
                            <div className={styles.emptyIconCircle}>
                                <Heart size={50} />
                            </div>
                            <h2 className={styles.venumTitle}>Private <span>Archive</span></h2>
                            <p className={styles.venumDesc}>Your curated selection is currently empty. Begin your acquisition journey today.</p>
                            <Link href="/shop" className={styles.venumPrimaryBtn}>Explore Collections</Link>
                        </motion.div>
                    </div>
                </div>
                <Newsletter />
            </div>
        );
    }

    return (
        <div className={styles.venumWishlistPage}>
            {/* Background elements */}
            <div className={styles.lightOne}></div>

            <section className={styles.venumHero}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.heroContent}
                    >
                        <div className={styles.badgeLabel}>Curated Selection</div>
                        <h1 className={styles.venumTitle}>Private <span>Archive</span></h1>
                        <p className={styles.venumDesc}>{wishlistItems.length} items currently secured in your archive.</p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                <div className={styles.wishlistGrid}>
                    <AnimatePresence>
                        {wishlistItems.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.venumProductCard}
                            >
                                <div className={styles.imageBox}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={styles.productImage}
                                        unoptimized
                                    />
                                    <div className={styles.cardOverlay}>
                                        <button
                                            className={styles.removeAction}
                                            onClick={() => handleRemove(product)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.productInfo}>
                                    <div className={styles.infoTop}>
                                        <span className={styles.categoryTag}>{product.category}</span>
                                        <div className={styles.rating}><Star size={10} fill="currentColor" /> 4.9</div>
                                    </div>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <div className={styles.cardBottom}>
                                        <p className={styles.productPrice}>${product.price.toLocaleString()}</p>
                                        <div className={styles.cardActions}>
                                            <button
                                                className={styles.quickAddBtn}
                                                onClick={() => moveToCart(product)}
                                                title="Add to Vault"
                                            >
                                                <ShoppingCart size={18} />
                                            </button>
                                            <Link href={`/product/${product.id}`} className={styles.detailsBtn}>
                                                View <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <Newsletter />
        </div>
    );
}
