"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { products } from '@/data/mockData';
import { User, MapPin, CreditCard, ChevronRight, Lock } from 'lucide-react';
import styles from './CheckoutPage.module.css';
import { useToast } from '@/components/common/Toast/Toast';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
    const router = useRouter();
    const { addToast } = useToast();
    const { cartItems, cartSubtotal, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const shipping = cartItems.length > 0 ? 20 : 0;
    const total = cartSubtotal + shipping;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        addToast('Order placed! Your luxury items are on their way. 🎉', 'success', 5000);
        clearCart();
        setTimeout(() => router.push('/'), 1500);
    };

    if (cartItems.length === 0) {
        return (
            <div className={styles.checkoutPage}>
                <div className="container" style={{ textAlign: 'center', paddingTop: '200px', paddingBottom: '100px' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '16px' }}>Your cart is <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>empty</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>Add some items before checking out.</p>
                    <Link href="/shop" style={{ background: 'var(--accent)', color: 'white', padding: '14px 40px', textDecoration: 'none', borderRadius: '4px', fontWeight: 600 }}>Go to Shop</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.checkoutPage}>
            <div className="container">
                <h1 className={styles.title}>Secure <span>Checkout</span></h1>

                <div className={styles.checkoutLayout}>
                    {/* Middle Content: Forms */}
                    <div className={styles.mainContent}>
                        <form onSubmit={handlePlaceOrder}>
                            {/* Billing Details */}
                            <section className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.iconCircle}><User size={20} /></div>
                                    <h2>Billing Details</h2>
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label>First Name</label>
                                        <input type="text" name="firstName" required onChange={handleInputChange} placeholder="John" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" required onChange={handleInputChange} placeholder="Doe" />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label>Email Address</label>
                                        <input type="email" name="email" required onChange={handleInputChange} placeholder="john@example.com" />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" required onChange={handleInputChange} placeholder="+1 234 567 890" />
                                    </div>
                                </div>
                            </section>

                            {/* Shipping Address */}
                            <section className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.iconCircle}><MapPin size={20} /></div>
                                    <h2>Shipping Address</h2>
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label>Street Address</label>
                                        <input type="text" name="address" required onChange={handleInputChange} placeholder="123 Luxury Ave" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>City</label>
                                        <input type="text" name="city" required onChange={handleInputChange} placeholder="New York" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>State / Province</label>
                                        <input type="text" name="state" required onChange={handleInputChange} placeholder="NY" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Zip Code</label>
                                        <input type="text" name="zip" required onChange={handleInputChange} placeholder="10001" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Country</label>
                                        <select required>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>Canada</option>
                                            <option>India</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Payment Method */}
                            <section className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.iconCircle}><CreditCard size={20} /></div>
                                    <h2>Payment Method</h2>
                                </div>
                                <div className={styles.paymentGrid}>
                                    <div
                                        className={`${styles.paymentOption} ${paymentMethod === 'card' ? styles.activePayment : ''}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <div className={styles.radioCircle}></div>
                                        <div className={styles.paymentDetails}>
                                            <h4>Credit / Debit Card</h4>
                                            <p>Secure payment via encrypted gateway</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.paymentOption} ${paymentMethod === 'upi' ? styles.activePayment : ''}`}
                                        onClick={() => setPaymentMethod('upi')}
                                    >
                                        <div className={styles.radioCircle}></div>
                                        <div className={styles.paymentDetails}>
                                            <h4>UPI / Net Banking</h4>
                                            <p>Instant transfer via your banking app</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.paymentOption} ${paymentMethod === 'cod' ? styles.activePayment : ''}`}
                                        onClick={() => setPaymentMethod('cod')}
                                    >
                                        <div className={styles.radioCircle}></div>
                                        <div className={styles.paymentDetails}>
                                            <h4>Cash on Delivery</h4>
                                            <p>Pay upon receiving your luxury parcel</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>

                    {/* Right Content: Order Summary */}
                    <aside className={styles.summary}>
                        <h3>Order <span>Summary</span></h3>

                        <div className={styles.itemsList}>
                            {cartItems.map(item => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className={styles.summaryItem}>
                                    <div className={styles.thumbWrapper}>
                                        <Image src={item.image} alt={item.name} width={60} height={70} />
                                    </div>
                                    <div className={styles.summaryItemInfo}>
                                        <h4>{item.name}</h4>
                                        <p>Qty: {item.quantity}</p>
                                        <span className={styles.itemPrice}>${item.price * item.quantity}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.calcRows}>
                            <div className={styles.calcRow}>
                                <span>Subtotal ({cartItems.reduce((a, i) => a + i.quantity, 0)} items)</span>
                                <span>${cartSubtotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.calcRow}>
                                <span>Shipping</span>
                                <span>${shipping}</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button type="submit" className={styles.placeOrderBtn} onClick={handlePlaceOrder}>
                            <Lock size={18} />
                            Place Order Now
                        </button>

                        <p className={styles.secureNote}>
                            <Lock size={12} />
                            Your data is protected by industry-standard SSL encryption.
                        </p>
                    </aside>
                </div>
            </div>
        </div>
    );
}
