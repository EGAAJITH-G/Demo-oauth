import { PageLoader } from '@/components/common/Skeleton/Skeleton';
import { ProductCardSkeleton } from '@/components/common/Skeleton/Skeleton';
import styles from './ShopPage.module.css';

export default function ShopLoading() {
    return (
        <>
            <PageLoader />
            <main className={styles.shopPage}>
                {/* Banner skeleton */}
                <div className={styles.shopBanner} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        height: '48px', width: '280px', borderRadius: '99px',
                        background: 'rgba(255,255,255,0.15)',
                        animation: 'pulse 1.5s ease-in-out infinite'
                    }} />
                </div>

                <div className="container" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '50px' }}>
                        {/* Sidebar skeleton */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {[120, 160, 140].map((h, i) => (
                                <div key={i} style={{
                                    height: `${h}px`,
                                    background: 'linear-gradient(90deg, var(--bg-soft) 25%, var(--border) 50%, var(--bg-soft) 75%)',
                                    backgroundSize: '1200px 100%',
                                    animation: 'shimmer 1.6s infinite linear',
                                    borderRadius: 'var(--radius-md)'
                                }} />
                            ))}
                        </div>

                        {/* Products grid skeleton */}
                        <div>
                            <div style={{
                                height: '44px', width: '220px', marginBottom: '32px',
                                background: 'linear-gradient(90deg, var(--bg-soft) 25%, var(--border) 50%, var(--bg-soft) 75%)',
                                backgroundSize: '1200px 100%',
                                animation: 'shimmer 1.6s infinite linear',
                                borderRadius: '99px'
                            }} />
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <ProductCardSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
