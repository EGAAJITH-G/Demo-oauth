"use client"
import styles from './Newsletter.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.newsletterBox}>
                {/* Right: Background Image Side */}
                <div className={styles.imageSide}>
                    <Image
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop"
                        alt="Luxury Fashion Newsletter"
                        fill
                        className={styles.bgImage}
                        sizes="50vw"
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.imageQuote}>
                        <p>&ldquo;Style is a way to say who you are without having to speak.&rdquo;</p>
                        <span>— Rachel Zoe</span>
                    </div>
                </div>

                {/* Left: Content Side */}
                <motion.div
                    className={styles.contentSide}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className={styles.tag}>Members Only</span>

                    <h2 className={styles.title}>
                        Join Our <span>Exclusive</span> List
                    </h2>

                    <p className={styles.description}>
                        Get early access to new arrivals, exclusive sales, and fashion inspiration curated just for you.
                    </p>

                    {/* Benefits */}
                    <ul className={styles.benefits}>
                        <li><span className={styles.dot}></span>Early access to new collections</li>
                        <li><span className={styles.dot}></span>Members-only discounts up to 30%</li>
                        <li><span className={styles.dot}></span>Personalized style recommendations</li>
                    </ul>

                    {/* Form */}
                    {!submitted ? (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputWrapper}>
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    placeholder="Your email address"
                                    className={styles.input}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <button suppressHydrationWarning type="submit" className={styles.submitBtn}>
                                    <span>Subscribe</span>
                                    <Send size={16} />
                                </button>
                            </div>
                            <p className={styles.disclaimer}>
                                *By subscribing you agree to our Terms and Privacy Policy.
                            </p>
                        </form>
                    ) : (
                        <motion.div
                            className={styles.successMsg}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className={styles.successIcon}>
                                <Check size={24} />
                            </div>
                            <div>
                                <h4>You&apos;re in!</h4>
                                <p>Welcome to the Lumière circle. Check your inbox.</p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
