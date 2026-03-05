"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, Tag, ShoppingBag } from 'lucide-react';
import styles from './CartPage.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { useCart } from '@/context/CartContext';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export default function CartPage() {
    const { addToast } = useToast();
    const { cartItems, removeFromCart, updateQuantity, cartSubtotal, clearCart } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const shipping = cartItems.length > 0 ? 20 : 0;
    const total = cartSubtotal + shipping - discount;

    const handleApplyCoupon = () => {
        if (couponCode.toUpperCase() === 'LUMIERE20') {
            setDiscount(cartSubtotal * 0.2);
            addToast('Coupon applied! 20% discount added.', 'success');
        } else {
            addToast('Invalid coupon code. Try LUMIERE20.', 'error');
        }
    };

    const handleRemove = (item) => {
        removeFromCart(item.id, item.selectedSize, item.selectedColor);
        addToast(`"${item.name}" removed from cart.`, 'info');
    };

    if (cartItems.length === 0) {
        return (
            <div className={styles.cartPage}>
                <div className="container">
                    <div className={styles.emptyCart}>
                        <ShoppingBag size={80} style={{ opacity: 0.2, marginBottom: '24px' }} />
                        <h2>Your Cart is <span>Empty</span></h2>
                        <p>It looks like you haven&apos;t added anything to your cart yet.</p>
                        <Link href="/shop" className={styles.continueBtn}>Start Shopping</Link>
                    </div>
                </div>
                <Newsletter />
            </div>
        );
    }

    return (
        <div className={styles.cartPage}>
            <div className="container">
                <h1 className={styles.title}>Shopping <span>Cart</span></h1>

                <div className={styles.cartLayout}>
                    {/* Cart Items List */}
                    <div className={styles.cartContent}>
                        <div className={styles.tableHeader}>
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>
                        </div>

                        <div className={styles.itemsList}>
                            {cartItems.map(item => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className={styles.cartItem}>
                                    <div className={styles.productInfo}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={120}
                                            className={styles.itemImage}
                                        />
                                        <div className={styles.itemDetails}>
                                            <h4>{item.name}</h4>
                                            <span>Size: {item.selectedSize} | Color: {item.selectedColor}</span>
                                        </div>
                                    </div>

                                    <div className={styles.price}>${item.price}</div>

                                    <div className={styles.quantity}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    <div className={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</div>

                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => handleRemove(item)}
                                        title="Remove Item"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartFooterRow}>
                            <Link href="/shop" className={styles.backLink}>
                                <ArrowLeft size={16} />
                                Continue Shopping
                            </Link>
                            <button
                                className={styles.clearBtn}
                                onClick={() => { clearCart(); addToast('Cart cleared.', 'info'); }}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <aside className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Order <span>Summary</span></h2>

                        <div className={styles.summaryRow}>
                            <span>Subtotal ({cartItems.reduce((a, i) => a + i.quantity, 0)} items)</span>
                            <span>${cartSubtotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>${shipping}</span>
                        </div>
                        {discount > 0 && (
                            <div className={`${styles.summaryRow} ${styles.discount}`}>
                                <span>Discount (20%)</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className={`${styles.summaryRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <div className={styles.couponSection}>
                            <div className={styles.couponLabel}>
                                <Tag size={16} />
                                <span>Have a coupon?</span>
                            </div>
                            <div className={styles.couponInput}>
                                <input
                                    type="text"
                                    placeholder="LUMIERE20"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button
                                    className={styles.applyBtn}
                                    onClick={handleApplyCoupon}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <Link href="/checkout" className={styles.checkoutBtn}>
                            Proceed to Checkout
                        </Link>
                    </aside>
                </div>
            </div>

            <Newsletter />
        </div>
    );
}
