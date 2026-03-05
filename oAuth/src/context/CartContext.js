"use client"
import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart (or increase qty if already exists with same size & color)
    const addToCart = useCallback((product, quantity = 1, selectedSize = null, selectedColor = null) => {
        setCartItems(prev => {
            const size = selectedSize || product.sizes?.[0] || 'One Size';
            const color = selectedColor || product.colors?.[0] || '#000';
            const existing = prev.find(item =>
                item.id === product.id &&
                item.selectedSize === size &&
                item.selectedColor === color
            );
            if (existing) {
                return prev.map(item =>
                    item.id === product.id &&
                        item.selectedSize === size &&
                        item.selectedColor === color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity, selectedSize: size, selectedColor: color }];
        });
    }, []);

    // Remove one specific item variant
    const removeFromCart = useCallback((id, selectedSize, selectedColor) => {
        setCartItems(prev => prev.filter(item =>
            !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
        ));
    }, []);

    // Update quantity by delta (+1 or -1)
    const updateQuantity = useCallback((id, selectedSize, selectedColor, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    }, []);

    // Clear entire cart
    const clearCart = useCallback(() => setCartItems([]), []);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartSubtotal,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
