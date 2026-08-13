import Categories from '@/components/layout/Categories';
import Hero from '@/components/layout/Header/Hero/Hero';

import ProductSlider from '@/components/layout/Products/ProductSlider';

import PromoBanners from '@/components/layout/PromoBanners/PromoBanners';
import ServiceFeatures from '@/components/layout/ServiceFeatures/ServiceFeatures';

import Brands from '@/components/layout/Brands/Brands';

import BlogSection from '@/components/layout/Blog/BlogSection';
import { products } from '@/components/layout/Products/product.data';
import TShirt from '@/components/ui/icons/TShirt';
import PantsDuotone from '@/components/ui/icons/PantsDoutOne';
import PerfumeDuotone from '@/components/ui/icons/PerfumeDoutOne';

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen w-[95%] max-w-325">
        <Hero />

        <Categories />

        <ProductSlider
          title="جذاب های تابستونی"
          icon={<TShirt className="size-6" />}
          products={products}
          href="/products/special-offers"
        />

        <ProductSlider
          title="شلوار جین مردانه"
          icon={<PantsDuotone className="size-6" />}
          products={products}
          href="/category/jeans"
        />

        <ProductSlider
          title="بوی خوش زندگی"
          icon={<PerfumeDuotone className="size-6" />}
          products={products}
          href="/category/t-shirts"
        />

        <PromoBanners />

        <Brands />

        <BlogSection />

        <ServiceFeatures />
      </main>
    </>
  );
}
