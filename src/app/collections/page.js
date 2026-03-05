import CollectionsContent from '@/components/collections/CollectionsContent';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export const metadata = {
    title: 'Collections',
    description: 'Explore our curated seasonal and signature collections — crafted for the discerning taste.',
    openGraph: {
        title: 'Collections | LUMIÈRE',
        description: 'Explore our curated seasonal and signature luxury collections.',
    },
};

export default function CollectionsPage() {
    return (
        <div>
            <CollectionsContent />
            <Newsletter />
        </div>
    );
}
