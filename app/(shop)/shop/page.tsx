import ActiveFilterChips from '@/components/layout/Pages/shop/ActiveFilterChips';
import MobileFilterModal from '@/components/layout/Pages/shop/MobileFilterModal';
import ProductFilterSidebar from '@/components/layout/Pages/shop/ProductFilterSidebar';
import ProductGrid from '@/components/layout/Pages/shop/ProductGrid';
import ProductResultsCount from '@/components/layout/Pages/shop/ProductResultsCount';
import ProductSort from '@/components/layout/Pages/shop/ProductSort';

const SHOP_CATEGORIES = [
  'همه',
  'پوشاک',
  'کفش',
  'اکسسوری',
  'لوازم دیجیتال',
  'زیبایی و سلامت',
];

export default function ShopPage() {
  const resultsCount = 124;

  return (
    <main className="min-h-screen mb-30">
      <div className="mx-auto max-w-7xl px-4 md:p-0 py-6">
        {/* Breadcrumb */}

        <nav className="mb-5 text-xs text-muted-foreground">
          خانه
          <span className="mx-2">/</span>
          فروشگاه
        </nav>

        {/* Category Navigation */}

        <div className="mb-6 overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {SHOP_CATEGORIES.map((category, index) => (
              <button
                key={category}
                type="button"
                className={
                  index === 0
                    ? 'rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground'
                    : 'rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters */}

        <ActiveFilterChips />

        {/* Toolbar */}

        <div className="mb-5 flex flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Result count + mobile filter */}

          <div className="flex items-center justify-between gap-3">
            <ProductResultsCount count={resultsCount} />

            <div className="md:hidden">
              <MobileFilterModal />
            </div>
          </div>

          {/* Sort */}

          <ProductSort />
        </div>

        {/* Products */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Desktop Sidebar */}

          <aside className="hidden md:block">
            <ProductFilterSidebar />
          </aside>

          {/* Product Grid */}

          <section className="min-w-0">
            <ProductGrid />
          </section>
        </div>
      </div>
    </main>
  );
}
