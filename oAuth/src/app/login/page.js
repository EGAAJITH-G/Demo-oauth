"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import styles from '../auth.module.css';
import { useState } from 'react';
import { useToast } from '@/components/common/Toast/Toast';

export default function LoginPage() {
    const router = useRouter();
    const { addToast } = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth delay
        await new Promise(res => setTimeout(res, 800));
        setLoading(false);
        addToast('Welcome back to LUMIÈRE!', 'success');
        router.push('/dashboard');
    };

    return (
        <div className={styles.authPage}>
            {/* Left decorative panel */}
            <div className={styles.authPanel}>
                <div className={styles.panelContent}>
                    <div className={styles.authLogo}>LUMIÈRE</div>
                    <div className={styles.panelDivider}></div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to your account and explore our exclusive curated collections.</p>
                </div>
            </div>

            {/* Right form panel */}
            <div className={styles.authForm}>
                <Link href="/" className={styles.backHome}>
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className={styles.authContainer}>
                    <div className={styles.authLogo}>LUMIÈRE</div>
                    <h1 className={styles.authTitle}>Sign <span>In</span></h1>
                    <p className={styles.authSubtitle}>Enter your credentials to access your account.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <div className={styles.inputWrapper}>
                                <Mail className={styles.inputIcon} size={17} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <div className={styles.inputWrapper}>
                                <Lock className={styles.inputIcon} size={17} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className={styles.eyeBtn}
                                    onClick={() => setShowPassword(!showPassword)}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            <Link href="/forgot-password" className={styles.forgotLink}>
                                Forgot password?
                            </Link>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className={styles.switchPage}>
                        Don&apos;t have an account?
                        <Link href="/signup">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
