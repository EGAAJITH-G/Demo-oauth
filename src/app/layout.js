import { WishlistProvider } from '@/context/WishlistContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/components/common/Toast/Toast';
import { CartProvider } from '@/context/CartContext';
import AppWrapper from '@/components/layout/AppWrapper';
import './globals.css';

export const metadata = {
  title: {
    default: 'LUMIÈRE | Premium E-Commerce Experience',
    template: '%s | LUMIÈRE',
  },
  description: 'Discover the latest in high-end fashion and lifestyle essentials. Curated luxury collections for the discerning individual.',
  keywords: ['luxury fashion', 'premium clothing', 'designer accessories', 'LUMIÈRE', 'high-end fashion', 'luxury e-commerce'],
  authors: [{ name: 'LUMIÈRE Team' }],
  creator: 'LUMIÈRE',
  metadataBase: 'https://lumiere-shop.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lumiere-shop.com',
    siteName: 'LUMIÈRE',
    title: 'LUMIÈRE | Premium E-Commerce Experience',
    description: 'Discover the latest in high-end fashion and lifestyle essentials.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'LUMIÈRE Premium Fashion',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMIÈRE | Premium E-Commerce',
    description: 'Discover the latest in high-end fashion and luxury accessories.',
    images: ['/og-image.jpg'],
    creator: '@lumiere_shop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

// Viewport must be a separate export in Next.js 15+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <ToastProvider>
                <AppWrapper>
                  {children}
                </AppWrapper>
              </ToastProvider>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
