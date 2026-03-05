"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './TrendingCarousel.module.css';
import ProductCard from '@/components/common/ProductCard/ProductCard';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { products } from '@/data/mockData';
import { motion } from 'framer-motion';

export default function TrendingCarousel() {
    const trending = products.filter(p => p.trending);

    return (
        <section className={styles.trending}>
            <div className="container">
                <SectionHeader
                    title="Trending Now"
                />

                <p className={styles.description}>The most loved pieces from our current collection</p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className={styles.swiper}
                    >
                        {trending.map(product => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
