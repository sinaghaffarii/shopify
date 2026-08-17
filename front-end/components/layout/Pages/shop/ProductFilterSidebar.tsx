'use client';

import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProductFilters } from '@/hooks/use-product-filters';
import ProductFilterContent from './ProductFiltersContent';

export default function ProductFilterSidebar() {
  const { reset, activeFiltersCount } = useProductFilters();

  return (
    <aside className="sticky top-4 overflow-hidden rounded-md border bg-background">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="font-bold">فیلترها</h2>
        {activeFiltersCount > 0 && (
          <Button type="button" variant="ghost" size="sm" className="gap-1 rounded-md text-xs text-destructive" onClick={reset}>
            <RotateCcw className="size-3.5" />
            حذف فیلترها
          </Button>
        )}
      </div>
      <div className="max-h-[calc(100vh-160px)] overflow-y-auto px-4">
        <ProductFilterContent />
      </div>
    </aside>
  );
}
