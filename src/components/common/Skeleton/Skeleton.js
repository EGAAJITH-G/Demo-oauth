import styles from './Skeleton.module.css';

// Single product card skeleton
export function ProductCardSkeleton() {
    return (
        <div className={styles.cardSkeleton}>
            <div className={`${styles.shimmer} ${styles.cardImage}`} />
            <div className={`${styles.shimmer} ${styles.cardLine}`} />
            <div className={`${styles.shimmer} ${styles.cardLineFull}`} />
            <div className={`${styles.shimmer} ${styles.cardPrice}`} />
        </div>
    );
}

// Grid of product card skeletons
export function ProductGridSkeleton({ count = 8 }) {
    return (
        <div className={styles.grid}>
            {Array.from({ length: count }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}

// Top-of-page loading progress bar
export function PageLoader() {
    return <div className={styles.pageLoader} />;
}

// Full section loading with header + grid
export function PageLoadingSkeleton({ count = 8 }) {
    return (
        <div className={styles.loadingWrapper}>
            <div className="container">
                <div className={styles.loadingHeader}>
                    <div className={`${styles.shimmer} ${styles.loadingTitle}`} />
                    <div className={`${styles.shimmer} ${styles.loadingSubtitle}`} />
                </div>
                <ProductGridSkeleton count={count} />
            </div>
        </div>
    );
}
