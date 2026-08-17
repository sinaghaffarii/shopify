'use client';

import { useProductFilters } from '@/hooks/use-product-filters';
import { SHOP_CATEGORIES } from './shop.constants';

export default function ShopCategoryNav() {
  const { filters, setFilters } = useProductFilters();
  const active = filters.category.length === 0 ? 'همه' : filters.category[0];

  return (
    <nav aria-label="دسته‌بندی محصولات" className="-mx-1 overflow-x-auto px-1 pb-1 scrollbar-none">
      <div className="flex min-w-max gap-2">
        {SHOP_CATEGORIES.map((category) => {
          const isActive = active === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() =>
                setFilters({ category: category === 'همه' ? null : [category] })
              }
              className={`h-9 rounded-md border px-3.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
