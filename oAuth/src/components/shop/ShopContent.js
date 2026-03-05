"use client"
import { useState, useEffect, useMemo } from 'react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import { ChevronDown, SlidersHorizontal, Grid, List, Search } from 'lucide-react';
import styles from './ShopContent.module.css';

export default function ShopContent({ initialCategory = 'All' }) {
    const [category, setCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState(1000);
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];

    const filteredProducts = useMemo(() => {
        let result = products.filter(p => {
            const matchCategory = category === 'All' || p.category === category;
            const matchPrice = p.price <= priceRange;
            const matchRating = p.rating >= rating;
            return matchCategory && matchPrice && matchRating;
        });

        if (sortBy === 'low') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'high') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'newest') {
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        return result;
    }, [category, priceRange, rating, sortBy]);

    useEffect(() => {
        // No-op effect to satisfy rules about useEffect having dependencies,
        // but state resets are now handled in event handlers for better performance.
    }, [category, priceRange, rating, sortBy]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className={styles.shopWrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.filterGroup}>
                    <h3>Categories</h3>
                    <ul>
                        {categories.map(cat => (
                            <li
                                key={cat}
                                className={category === cat ? styles.active : ''}
                                onClick={() => { setCategory(cat); setCurrentPage(1); }}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.filterGroup}>
                    <h3>Price Range</h3>
                    <div className={styles.rangeWrapper}>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange}
                            onChange={(e) => {
                                setPriceRange(parseInt(e.target.value));
                                setCurrentPage(1);
                            }}
                            className={styles.range}
                        />
                        <div className={styles.rangeLabels}>
                            <span>$0</span>
                            <span>${priceRange}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <h3>Minimum Rating</h3>
                    <div className={styles.ratingFilters}>
                        {[4, 3, 2].map(r => (
                            <div
                                key={r}
                                className={`${styles.ratingOption} ${rating === r ? styles.activeRating : ''}`}
                                onClick={() => {
                                    setRating(rating === r ? 0 : r);
                                    setCurrentPage(1);
                                }}
                            >
                                <span>{r}+ Stars</span>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            <main className={styles.content}>
                <div className={styles.controls}>
                    <div className={styles.resultsCount}>
                        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} results
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.sortWrapper}>
                            <span>Sort by:</span>
                            <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }} className={styles.select}>
                                <option value="newest">Newest Arrivals</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {currentItems.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className={styles.noResults}>
                        <Search size={48} />
                        <p>No products found matching your filters.</p>
                        <button onClick={() => { setCategory('All'); setPriceRange(1000); setRating(0); }}>Reset Filters</button>
                    </div>
                )}

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={currentPage === i + 1 ? styles.activePage : ''}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
