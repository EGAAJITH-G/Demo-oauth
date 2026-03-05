"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, ArrowLeft } from 'lucide-react';
import styles from '../auth.module.css';
import { useToast } from '@/components/common/Toast/Toast';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { addToast } = useToast();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(res => setTimeout(res, 800));
        setLoading(false);
        addToast(`Reset link sent to ${email}! Check your inbox.`, 'success', 5000);
        setEmail('');
        setTimeout(() => router.push('/login'), 2000);
    };

    return (
        <div className={styles.authPageFull}>
            <div className={styles.authOverlay}></div>

            <Link href="/login" className={styles.backHome} style={{ zIndex: 20, position: 'fixed', top: 30, left: 30, color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <ArrowLeft size={16} />
                Back to Login
            </Link>

            <div className={styles.authContainerFull}>
                <div className={styles.authLogo}>LUMIÈRE</div>
                <h1 className={styles.authTitle}>Reset <span>Password</span></h1>
                <p className={styles.authSubtitle} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 30 }}>
                    Enter your email and we&apos;ll send you a link to reset your password.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <div className={styles.inputWrapper}>
                            <Mail className={styles.inputIcon} size={17} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className={styles.switchPage}>
                    Remember your password?
                    <Link href="/login">Sign In</Link>
                </div>
            </div>
        </div>
    );
}
