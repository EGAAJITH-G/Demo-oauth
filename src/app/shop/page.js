import ShopContent from '@/components/shop/ShopContent';
import styles from './ShopPage.module.css';
import Image from 'next/image';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export const metadata = {
    title: 'Shop | LUMIÈRE Premium Collection',
    description: 'Explore our curated selection of luxury fashion and accessories.',
};

export default function ShopPage() {
    return (
        <div className={styles.shopPage}>
            <div className={styles.shopBanner}>
                <div className={styles.bannerBg}>
                    <Image
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
                        alt="Shop banner"
                        fill
                        priority
                        className={styles.bannerImg}
                    />
                    <div className={styles.bannerOverlay} />
                </div>
                <div className={`container ${styles.bannerContent}`}>
                    <h1 className={styles.title}>All <span>Products</span></h1>
                    <p>Elevate your wardrobe with our latest high-end arrivals.</p>
                </div>
            </div>

            <div className="container">
                <ShopContent />
            </div>

            <Newsletter />
        </div>
    );
}
