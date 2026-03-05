"use client"
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, Heart, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import ThemeToggle from '@/components/common/ThemeToggle/ThemeToggle';
import { products } from '@/data/mockData';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

// transparent={true}  → starts clear on hero, becomes solid on scroll (homepage)
// transparent={false} → always solid (all other pages: shop, about, contact, etc.)
export default function Navbar({ transparent = false }) {
    const [isScrolled, setIsScrolled] = useState(!transparent);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef(null);
    const router = useRouter();
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();

    useEffect(() => {
        // If it's NOT a transparent page, it should ALWAYS be scrolled (solid)
        if (!transparent) {
            requestAnimationFrame(() => {
                setIsScrolled(true);
            });
            return;
        }

        // If it IS a transparent page, handle scroll logic
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [transparent]);

    // Close search on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false);
                setSearchQuery('');
                setSearchResults([]);
            }
        };
        if (isSearchOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isSearchOpen]);

    // Search logic (derived)
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
        ).slice(0, 5);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setIsSearchOpen(false);
        setSearchQuery('');
        router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    };

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}>
                <div className={`container ${styles.navContainer}`}>

                    {/* LOGO */}
                    <div className={styles.logo}>
                        <Link href="/">LUMIÈRE</Link>
                    </div>

                    {/* NAV LINKS */}
                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
                        <li><Link href="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link></li>
                        <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>

                    {/* ACTION ICONS */}
                    <div className={styles.navActions}>
                        <button
                            suppressHydrationWarning
                            className={styles.iconBtn}
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search size={20} />
                        </button>
                        <Link href="/dashboard" className={styles.iconBtn} aria-label="Account">
                            <User size={20} />
                        </Link>
                        <Link href="/wishlist" className={`${styles.iconBtn} ${styles.badgeWrap}`} aria-label="Wishlist">
                            <Heart size={20} />
                            {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
                        </Link>
                        <Link href="/cart" className={`${styles.iconBtn} ${styles.badgeWrap}`} aria-label="Cart">
                            <ShoppingCart size={20} />
                            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                        </Link>

                        {/* Theme Toggle */}
                        <div className={styles.themeWrap}>
                            <ThemeToggle />
                        </div>

                        {/* Hamburger */}
                        <button
                            suppressHydrationWarning
                            className={styles.hamburger}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className={styles.searchOverlay}>
                    <div className={styles.searchBox} ref={searchRef}>
                        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                            <Search size={20} className={styles.searchIcon} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search products, categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            <button
                                type="button"
                                className={styles.searchClose}
                                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            >
                                <X size={20} />
                            </button>
                        </form>
                        {searchResults.length > 0 && (
                            <ul className={styles.searchResults}>
                                {searchResults.map(p => (
                                    <li key={p.id}>
                                        <Link
                                            href={`/product/${p.id}`}
                                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                                            className={styles.resultItem}
                                        >
                                            <span className={styles.resultName}>{p.name}</span>
                                            <span className={styles.resultCategory}>{p.category} · ${p.price}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {searchQuery && searchResults.length === 0 && (
                            <p className={styles.noResults}>No products found for &quot;{searchQuery}&quot;</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
