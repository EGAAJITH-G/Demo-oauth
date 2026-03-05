"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/mockData';
import { use } from 'react';
import {
    ShoppingCart, Heart, Star, ChevronLeft,
    ChevronRight, Share2, Shield, Truck, RotateCcw
} from 'lucide-react';
import styles from './ProductPage.module.css';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import { useToast } from '@/components/common/Toast/Toast';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductPage({ params }) {
    const resolvedParams = use(params);
    const product = products.find(p => p.id === parseInt(resolvedParams.id));
    const { addToast } = useToast();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (product && product.sizes && product.sizes.length > 1 && !selectedSize) {
            addToast('Please select a size first.', 'error');
            return;
        }
        addToCart(product, quantity, selectedSize, selectedColor);
        addToast(`"${product.name}" added to cart (Qty: ${quantity})!`, 'success');
    };

    const handleWishlist = () => {
        toggleWishlist(product);
        if (isInWishlist(product.id)) {
            addToast(`"${product.name}" removed from wishlist.`, 'info');
        } else {
            addToast(`"${product.name}" saved to wishlist ❤️`, 'success');
        }
    };

    if (!product) {
        return (
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Product Not Found</h1>
                    <Link href="/shop" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>← Back to Shop</Link>
                </div>
            </div>
        );
    }

    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const gallery = product.gallery || [product.image];

    return (
        <div className={styles.productPage}>
            {/* Breadcrumb */}
            <div className={`container ${styles.breadcrumb}`}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/shop">Shop</Link>
                <span>/</span>
                <Link href={`/category/${product.category.toLowerCase()}`}>{product.category}</Link>
                <span>/</span>
                <span className={styles.current}>{product.name}</span>
            </div>

            {/* Product Main */}
            <div className={`container ${styles.productMain}`}>
                {/* Gallery */}
                <div className={styles.gallery}>
                    {/* Thumbnails */}
                    <div className={styles.thumbs}>
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                className={`${styles.thumb} ${idx === selectedImage ? styles.activeThumb : ''}`}
                                onClick={() => setSelectedImage(idx)}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name} view ${idx + 1}`}
                                    fill
                                    className={styles.thumbImg}
                                    sizes="100px"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className={styles.mainImage}>
                        <Image
                            src={gallery[selectedImage]}
                            alt={product.name}
                            fill
                            priority
                            className={styles.mainImg}
                            sizes="(max-width: 768px) 100vw, 55vw"
                        />
                        {product.trending && (
                            <span className={styles.badge}>Trending</span>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    <div className={styles.categoryTag}>{product.category}</div>
                    <h1 className={styles.productName}>{product.name}</h1>

                    {/* Stars */}
                    <div className={styles.ratingRow}>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill={i < Math.round(product.rating) ? "var(--accent)" : "none"}
                                    color={i < Math.round(product.rating) ? "var(--accent)" : "#ddd"}
                                />
                            ))}
                        </div>
                        <span className={styles.ratingValue}>{product.rating} / 5</span>
                    </div>

                    {/* Price */}
                    <div className={styles.priceRow}>
                        <span className={styles.price}>${product.price}</span>
                        {product.oldPrice && (
                            <span className={styles.oldPrice}>${product.oldPrice}</span>
                        )}
                        {product.oldPrice && (
                            <span className={styles.discount}>
                                {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                            </span>
                        )}
                    </div>

                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.divider}></div>

                    {/* Colors */}
                    {product.colors && (
                        <div className={styles.optionGroup}>
                            <label>Colour</label>
                            <div className={styles.colorDots}>
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        className={`${styles.colorDot} ${selectedColor === color ? styles.activeColor : ''}`}
                                        style={{ background: color }}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    {product.sizes && (
                        <div className={styles.optionGroup}>
                            <label>Size</label>
                            <div className={styles.sizes}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity + Add to Cart */}
                    <div className={styles.addRow}>
                        <div className={styles.qtyControl}>
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>
                        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                            <ShoppingCart size={18} />
                            Add to Cart
                        </button>
                        <button className={styles.wishlistBtn} title="Toggle Wishlist" onClick={handleWishlist}
                            style={{ color: isInWishlist(product?.id) ? 'var(--accent)' : undefined }}
                        >
                            <Heart size={20} fill={isInWishlist(product?.id) ? 'currentColor' : 'none'} />
                        </button>
                    </div>

                    {/* Perks */}
                    <div className={styles.perks}>
                        <div className={styles.perk}>
                            <Truck size={18} />
                            <span>Free delivery on orders over $150</span>
                        </div>
                        <div className={styles.perk}>
                            <RotateCcw size={18} />
                            <span>30-day hassle-free returns</span>
                        </div>
                        <div className={styles.perk}>
                            <Shield size={18} />
                            <span>Authentic & Certified Luxury</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
                <section className={styles.related}>
                    <div className="container">
                        <h2 className={styles.relatedTitle}>
                            You May Also <span>Like</span>
                        </h2>
                        <div className={styles.relatedGrid}>
                            {related.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
