import CategoryView from '@/components/category/CategoryView';

export const metadata = {
    title: 'Men | LUMIÈRE Premium Collection',
    description: 'Explore our curated selection of luxury fashion for men.',
};

export default function MenCategoryPage() {
    return <CategoryView categoryName="Men" />;
}
