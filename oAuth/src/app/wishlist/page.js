"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import styles from './Wishlist.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
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
            <div className={styles.wishlistPage}>
                <div className="container">
                    <div className={styles.emptyWishlist}>
                        <Heart size={80} className={styles.emptyIcon} />
                        <h2>Your Wishlist is <span>Empty</span></h2>
                        <p>Save your favorite items to keep track of them.</p>
                        <Link href="/shop" className={styles.shopNowBtn}>Discover Products</Link>
                    </div>
                </div>
                <Newsletter />
            </div>
        );
    }

    return (
        <div className={styles.wishlistPage}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>My <span>Wishlist</span></h1>
                    <p className={styles.subtitle}>{wishlistItems.length} product{wishlistItems.length !== 1 ? 's' : ''} saved for later</p>
                </header>

                <div className={styles.grid}>
                    {wishlistItems.map((product) => (
                        <div key={product.id} className={styles.wishlistCard}>
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemove(product)}
                                title="Remove from wishlist"
                            >
                                <Trash2 size={18} />
                            </button>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.content}>
                                <span className={styles.category}>{product.category}</span>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.price}>${product.price}</p>

                                <div className={styles.actions}>
                                    <button
                                        className={styles.moveToCartBtn}
                                        onClick={() => moveToCart(product)}
                                    >
                                        <ShoppingBag size={18} />
                                        Move to Cart
                                    </button>
                                    <Link href={`/product/${product.id}`} className={styles.viewDetails}>
                                        View Details <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Newsletter />
        </div>
    );
}
