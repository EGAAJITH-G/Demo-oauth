import Hero from '@/components/home/Hero/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts/FeaturedProducts';
import Categories from '@/components/home/Categories/Categories';
import TrendingCarousel from '@/components/home/TrendingCarousel/TrendingCarousel';
import Reviews from '@/components/home/Reviews/Reviews';
import Newsletter from '@/components/home/Newsletter/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <TrendingCarousel />
      <Reviews />
      <Newsletter />
    </>
  );
}
