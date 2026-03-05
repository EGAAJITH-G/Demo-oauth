import CategoryView from '@/components/category/CategoryView';
import { categories } from '@/data/mockData';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const categoryData = categories.find(c => c.name.toLowerCase() === slug.toLowerCase());

    if (!categoryData) return { title: 'Category Not Found' };

    return {
        title: `${categoryData.name} | LUMIÈRE Premium Collection`,
        description: categoryData.description || `Explore our ${categoryData.name} luxury collection.`,
    };
}

export default function CategoryPage({ params }) {
    const { slug } = params;
    const categoryData = categories.find(c => c.name.toLowerCase() === slug.toLowerCase());

    if (!categoryData) {
        return notFound();
    }

    return <CategoryView categoryName={categoryData.name} />;
}
