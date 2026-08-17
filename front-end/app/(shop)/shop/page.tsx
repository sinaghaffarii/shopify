'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import ActiveFilterChips from '@/components/layout/Pages/shop/ActiveFilterChips';
import MobileFilterModal from '@/components/layout/Pages/shop/MobileFilterModal';
import ProductFilterSidebar from '@/components/layout/Pages/shop/ProductFilterSidebar';
import ProductGrid from '@/components/layout/Pages/shop/ProductGrid';
import ProductResultsCount from '@/components/layout/Pages/shop/ProductResultsCount';
import ProductSort from '@/components/layout/Pages/shop/ProductSort';
import ShopCategoryNav from '@/components/layout/Pages/shop/ShopCategoryNav';
import { products } from '@/components/layout/Products/product.data';
import { useProductFilters } from '@/hooks/use-product-filters';
import { filterAndSortProducts } from '@/components/layout/Pages/shop/shop.utils';

export default function ShopPage() {
  const { filters } = useProductFilters();
  const visibleProducts = filterAndSortProducts(products, filters);

  return (
    <main className="min-h-screen pb-24 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 md:px-0">
        <nav aria-label="مسیر صفحه" className="mb-5 flex items-center gap-1 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">خانه</Link>
          <ChevronLeft className="size-3.5" />
          <span className="text-foreground">فروشگاه</span>
        </nav>

        <header className="mb-6 rounded-md border bg-background p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">فروشگاه</h1>
              <p className="mt-1 text-sm text-muted-foreground">محصولات را بر اساس دسته، برند و قیمت پیدا کنید.</p>
            </div>
            <ProductResultsCount count={visibleProducts.length} />
          </div>
          <ShopCategoryNav />
        </header>

        <ActiveFilterChips />

        <div className="mb-5 flex flex-col gap-3 rounded-md border bg-background p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-2">
            <ProductResultsCount count={visibleProducts.length} />
            <div className="md:hidden"><MobileFilterModal /></div>
          </div>
          <div className="flex justify-end"><ProductSort /></div>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,1fr)]">
          <div className="hidden md:block"><ProductFilterSidebar /></div>
          <section aria-label="لیست محصولات" className="min-w-0"><ProductGrid products={visibleProducts} /></section>
        </div>
      </div>
    </main>
  );
}
