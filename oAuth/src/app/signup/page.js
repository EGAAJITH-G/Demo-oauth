"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import styles from '../auth.module.css';
import { useState } from 'react';
import { useToast } from '@/components/common/Toast/Toast';

export default function SignupPage() {
    const router = useRouter();
    const { addToast } = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password.length < 8) {
            addToast('Password must be at least 8 characters.', 'error');
            return;
        }
        setLoading(true);
        await new Promise(res => setTimeout(res, 800));
        setLoading(false);
        addToast('Account created! Welcome to LUMIÈRE.', 'success');
        router.push('/dashboard');
    };

    return (
        <div className={styles.authPage}>
            {/* Left decorative panel */}
            <div className={styles.authPanel}>
                <div className={styles.panelContent}>
                    <div className={styles.authLogo}>LUMIÈRE</div>
                    <div className={styles.panelDivider}></div>
                    <h2>Join the Circle</h2>
                    <p>Create your account and gain access to premium collections, exclusive deals, and personalized recommendations.</p>
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
                    <h1 className={styles.authTitle}>Create <span>Account</span></h1>
                    <p className={styles.authSubtitle}>Fill in the details below to get started.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <div className={styles.inputWrapper}>
                                <User className={styles.inputIcon} size={17} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <div className={styles.inputWrapper}>
                                <Mail className={styles.inputIcon} size={17} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
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
                                    placeholder="Min 8 characters"
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
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className={styles.switchPage}>
                        Already have an account?
                        <Link href="/login">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
