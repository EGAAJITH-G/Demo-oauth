import { PageLoadingSkeleton, PageLoader } from '@/components/common/Skeleton/Skeleton';

export default function Loading() {
    return (
        <>
            <PageLoader />
            <PageLoadingSkeleton count={8} />
        </>
    );
}
