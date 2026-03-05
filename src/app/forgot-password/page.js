"use client"
import Link from 'next/link';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import styles from '../auth.module.css';
import { useState } from 'react';
import { useToast } from '@/components/common/Toast/Toast';

export default function ForgotPasswordPage() {
    const { addToast } = useToast();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate email sending
        await new Promise(res => setTimeout(res, 1200));
        setLoading(false);
        setSubmitted(true);
        addToast('Recovery instructions sent!', 'success');
    };

    return (
        <div className={styles.authPageFull}>
            <div className={styles.bgBlob + ' ' + styles.blob1}></div>
            <div className={styles.bgBlob + ' ' + styles.blob2}></div>

            <div className={styles.authContainerFull}>
                {!submitted ? (
                    <>
                        <h1 className={styles.authTitle}>Reset <span>Password</span></h1>
                        <p className={styles.authSubtitle}>Enter your email to receive recovery instructions.</p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <div className={styles.inputWrapper}>
                                    <Mail className={styles.inputIcon} size={20} />
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className={styles.submittedContent}>
                        <h2 className={styles.authTitle}>Check Your <span>Inbox</span></h2>
                        <p className={styles.authSubtitle}>
                            We&apos;ve sent a password reset link to <strong>{email}</strong>.
                            Please check your email and follow the instructions.
                        </p>
                        <button
                            className={styles.submitBtn}
                            onClick={() => setSubmitted(false)}
                            style={{ marginTop: '20px' }}
                        >
                            Try another email
                        </button>
                    </div>
                )}

                <div className={styles.switchPage}>
                    <Link href="/login" className={styles.backHome} style={{ position: 'static', background: 'none', border: 'none', justifyContent: 'center' }}>
                        <ArrowLeft size={16} style={{ marginRight: '8px' }} />
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}
