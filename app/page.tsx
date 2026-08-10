import Categories from '@/components/layout/Categories';
import Hero from '@/components/layout/Header/Hero/Hero';

import ProductSlider from '@/components/layout/Products/ProductSlider';

import PromoBanners from '@/components/layout/PromoBanners/PromoBanners';
import ServiceFeatures from '@/components/layout/ServiceFeatures/ServiceFeatures';

import Brands from '@/components/layout/Brands/Brands';

import BlogSection from '@/components/layout/Blog/BlogSection';
import Newsletter from '@/components/layout/Newsletter/NewsLetter';
import { products } from '@/components/layout/Products/product.data';

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen w-[95%] max-w-325">
        <Hero />

        <Categories />

        <ProductSlider
          title="شگفت‌انگیزهای امروز"
          products={products}
          href="/products/special-offers"
        />

        <ProductSlider
          title="شلوار جین مردانه"
          products={products}
          href="/category/jeans"
        />

        <ProductSlider
          title="تیشرت مردانه"
          products={products}
          href="/category/t-shirts"
        />

        <PromoBanners />

        <ServiceFeatures />

        <Brands />

        <BlogSection />

        <Newsletter />
      </main>
    </>
  );
}
