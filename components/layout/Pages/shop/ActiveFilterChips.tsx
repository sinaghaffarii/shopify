'use client';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { PRICE_BOUNDS, useProductFilters } from '@/hooks/use-product-filters';

function formatPrice(value: number) {
  return new Intl.NumberFormat('fa-IR').format(value);
}

export default function ActiveFilterChips() {
  const {
    filters,
    removeCategory,
    removeBrand,
    resetPrice,
    reset,
    activeFiltersCount,
  } = useProductFilters();

  if (activeFiltersCount === 0) {
    return null;
  }

  const hasPriceFilter =
    filters.minPrice !== PRICE_BOUNDS.min ||
    filters.maxPrice !== PRICE_BOUNDS.max;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      {filters.category.map((category) => (
        <FilterChip
          key={`category-${category}`}
          onRemove={() => removeCategory(category)}
        >
          {category}
        </FilterChip>
      ))}

      {filters.brand.map((brand) => (
        <FilterChip key={`brand-${brand}`} onRemove={() => removeBrand(brand)}>
          {brand}
        </FilterChip>
      ))}

      {hasPriceFilter && (
        <FilterChip onRemove={resetPrice}>
          {formatPrice(filters.minPrice)} تا {formatPrice(filters.maxPrice)}{' '}
          تومان
        </FilterChip>
      )}

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-7 text-xs text-muted-foreground"
        onClick={reset}
      >
        پاک کردن همه
      </Button>
    </div>
  );
}

function FilterChip({
  children,
  onRemove,
}: {
  children: React.ReactNode;
  onRemove: () => void;
}) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border bg-background py-1 ps-3 pe-1.5 text-xs">
      {children}

      <button
        type="button"
        onClick={onRemove}
        className="flex size-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <X className="size-3" />

        <span className="sr-only">حذف فیلتر</span>
      </button>
    </span>
  );
}
