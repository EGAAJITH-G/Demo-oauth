import Image from 'next/image';
import ShopContent from '@/components/shop/ShopContent';
import { categories } from '@/data/mockData';
import styles from './CategoryView.module.css';

export default function CategoryView({ categoryName }) {
    const categoryData = categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());

    if (!categoryData) {
        return <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>Category not found.</div>;
    }

    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryBanner}>
                <Image
                    src={categoryData.image}
                    alt={categoryData.name}
                    fill
                    priority
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={`container ${styles.bannerContent}`}>
                    <h1 className={styles.title}>{categoryData.name} <span>Collection</span></h1>
                    <p>{categoryData.description}</p>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <ShopContent initialCategory={categoryData.name} />
            </div>
        </div>
    );
}
