"use client"
import { createContext, useContext, useState, useCallback } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = useCallback((product) => {
        setWishlistItems(prev => {
            if (prev.find(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    }, []);

    const removeFromWishlist = useCallback((id) => {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const toggleWishlist = useCallback((product) => {
        setWishlistItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev.filter(item => item.id !== product.id);
            return [...prev, product];
        });
    }, []);

    const isInWishlist = useCallback((id) => {
        return wishlistItems.some(item => item.id === id);
    }, [wishlistItems]);

    const wishlistCount = wishlistItems.length;

    return (
        <WishlistContext.Provider value={{
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            wishlistCount,
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
    return ctx;
}
