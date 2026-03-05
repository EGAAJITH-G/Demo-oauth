import ShopContent from '@/components/shop/ShopContent';
import { categories } from '@/data/mockData';
import styles from './CategoryPage.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
    return {
        title: `${categoryName} | LUMIÈRE Premium Collection`,
        description: `Explore our ${categoryName} luxury collection.`,
    };
}

export default function CategoryPage({ params }) {
    const { slug } = params;
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
    const categoryData = categories.find(c => c.name.toLowerCase() === slug.toLowerCase());

    if (!categoryData) {
        return notFound();
    }

    return (
        <div className={styles.categoryPage}>
            <div
                className={styles.categoryBanner}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${categoryData.image})` }}
            >
                <div className="container">
                    <h1 className={styles.title}>{categoryData.name} <span>Collection</span></h1>
                    <p>{categoryData.description}</p>
                </div>
            </div>

            <div className="container">
                <ShopContent initialCategory={categoryData.name} />
            </div>
        </div>
    );
}
