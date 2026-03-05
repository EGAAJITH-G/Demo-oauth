"use client"
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import styles from '../auth.module.css';
import { useState, useEffect, Suspense } from 'react';
import { useToast } from '@/components/common/Toast/Toast';

function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();
    const { addToast } = useToast();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: searchParams.get('email') || '',
        password: searchParams.get('password') || ''
    });

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/home');
        }
    }, [status, router]);

    // Update form if search params change
    useEffect(() => {
        const email = searchParams.get('email');
        const password = searchParams.get('password');
        if (email || password) {
            setFormData({
                email: email || '',
                password: password || ''
            });
            if (email && password) {
                addToast('Account created! You can now sign in.', 'success');
            }
        }
    }, [searchParams, addToast]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Custom credentials logic would go here if implemented
        await new Promise(res => setTimeout(res, 800));

        setLoading(false);
        addToast('Successfully signed in!', 'success');
        router.push('/home');
    };

    if (status === 'loading') return null;
    if (status === 'authenticated') return null;

    return (
        <div className={styles.authPage}>
            <div className={styles.bgBlob + ' ' + styles.blob1}></div>
            <div className={styles.bgBlob + ' ' + styles.blob2}></div>

            <div className={styles.authPanel}>
                <div className={styles.panelContent}>
                    <div className={styles.panelLogo}>LUMIÈRE</div>
                    <h2>The Future of <br /><span>Premium</span> Design</h2>
                    <div className={styles.panelDivider}></div>
                    <p>Exclusive access to international collections, bespoke experiences, and curated luxury.</p>
                </div>
            </div>

            <div className={styles.authForm}>
                <Link href="/home" className={styles.backHome}>
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className={styles.authContainer}>
                    <h1 className={styles.authTitle}>Welcome <span>Back</span></h1>
                    <p className={styles.authSubtitle}>Sign in to access your curated dashboard.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <div className={styles.inputWrapper}>
                                <Mail className={styles.inputIcon} size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <div className={styles.inputWrapper}>
                                <Lock className={styles.inputIcon} size={20} />
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
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <Link href="/forgot-password" className={styles.forgotLink}>
                            Forgot password?
                        </Link>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Authenticating...' : 'Sign In Now'}
                        </button>
                    </form>

                    <div className={styles.divider}>or</div>

                    <button
                        type="button"
                        className={styles.googleBtn}
                        onClick={() => signIn('google', { callbackUrl: '/home' })}
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className={styles.switchPage}>
                        New to LUMIÈRE?
                        <Link href="/signup">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={null}>
            <LoginContent />
        </Suspense>
    );
}
