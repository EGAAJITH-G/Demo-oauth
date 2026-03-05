import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
    title: '404 – Page Not Found | LUMIÈRE',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className={styles.notFoundPage}>
            {/* Decorative background */}
            <div className={styles.bg}>
                <div className={styles.blob1} />
                <div className={styles.blob2} />
            </div>

            <div className={styles.content}>
                {/* Giant 404 */}
                <div className={styles.codeWrapper} aria-hidden="true">
                    <span className={styles.digit}>4</span>
                    <span className={styles.zeroRing}>
                        <span className={styles.zeroInner}>0</span>
                    </span>
                    <span className={styles.digit}>4</span>
                </div>

                <p className={styles.label}>Page Not Found</p>
                <h1 className={styles.title}>
                    Lost in <span>Luxury</span>
                </h1>
                <p className={styles.description}>
                    The page you&apos;re looking for seems to have wandered off our collection.
                    Let us guide you back to something beautiful.
                </p>

                <div className={styles.actions}>
                    <Link href="/" className={styles.homeBtn}>
                        Return Home
                    </Link>
                    <Link href="/shop" className={styles.shopBtn}>
                        Browse Collection
                    </Link>
                </div>

                {/* Quick links */}
                <div className={styles.quickLinks}>
                    <span>Quick Links:</span>
                    <Link href="/collections">Collections</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/cart">Cart</Link>
                </div>
            </div>
        </div>
    );
}
