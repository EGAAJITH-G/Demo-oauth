"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import styles from './ProductCard.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
    const { addToast } = useToast();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        addToast(`"${product.name}" added to cart!`, 'success');
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        if (inWishlist) {
            addToast(`"${product.name}" removed from wishlist`, 'info');
        } else {
            addToast(`"${product.name}" saved to wishlist ❤️`, 'success');
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className={styles.image}
                    priority={product.trending}
                />
                <div className={styles.overlay}>
                    <div className={styles.actions}>
                        <button
                            suppressHydrationWarning
                            title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                            className={`${styles.iconBtn} ${inWishlist ? styles.wishlisted : ''}`}
                            onClick={handleWishlist}
                        >
                            <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
                        </button>
                        <Link href={`/product/${product.id}`} title="Quick View" className={styles.iconBtn}>
                            <Eye size={18} />
                        </Link>
                    </div>
                    <button suppressHydrationWarning className={styles.addToCartBtn} onClick={handleAddToCart}>
                        <ShoppingCart size={18} />
                        <span>Add to Cart</span>
                    </button>
                </div>
                {product.trending && <span className={styles.badge}>Trending</span>}
            </div>
            <Link href={`/product/${product.id}`} className={styles.info}>
                <div className={styles.topInfo}>
                    <span className={styles.category}>{product.category}</span>
                    <div className={styles.rating}>
                        <Star size={12} fill="var(--accent)" color="var(--accent)" />
                        <span>{product.rating}</span>
                    </div>
                </div>
                <h3 className={styles.name}>{product.name}</h3>
                <span className={styles.price}>${product.price}</span>
            </Link>
        </div>
    );
}
