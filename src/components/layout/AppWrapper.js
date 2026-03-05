"use client"
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export default function AppWrapper({ children }) {
    const pathname = usePathname();

    // Pages where the navbar starts transparent (like Home)
    const isTransparentPage = pathname === '/';

    // Pages without Navbar/Footer (Auth pages)
    const isAuthPage = pathname?.startsWith('/login') ||
        pathname?.startsWith('/signup') ||
        pathname?.startsWith('/forgot-password');

    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <div suppressHydrationWarning style={{ width: '100%', position: 'relative' }}>
            <Navbar transparent={isTransparentPage} />
            <main style={{
                minHeight: '80vh',
                width: '100%',
                // Add padding top for fixed navbar on non-transparent pages
                paddingTop: isTransparentPage ? '0' : '80px'
            }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
