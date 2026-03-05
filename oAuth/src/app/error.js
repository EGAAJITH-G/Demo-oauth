"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './error.module.css';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className={styles.errorPage}>
            {/* Decorative background */}
            <div className={styles.bg}>
                <div className={styles.blob1} />
                <div className={styles.blob2} />
            </div>

            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                </div>

                <p className={styles.label}>Something went wrong</p>
                <h1 className={styles.title}>
                    Unexpected <span>Error</span>
                </h1>
                <p className={styles.description}>
                    We encountered an unexpected issue. Our team has been notified.
                    Please try again or return to the homepage.
                </p>

                <div className={styles.actions}>
                    <button className={styles.retryBtn} onClick={reset}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                        Try Again
                    </button>
                    <Link href="/" className={styles.homeBtn}>
                        Return Home
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className={styles.errorDetails}>
                        <summary>Error Details (dev only)</summary>
                        <pre>{error?.message}</pre>
                    </details>
                )}
            </div>
        </div>
    );
}
