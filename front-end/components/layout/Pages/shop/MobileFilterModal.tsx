'use client';

import { SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useProductFilters } from '@/hooks/use-product-filters';
import ProductFilterContent from './ProductFiltersContent';

export default function MobileFilterModal() {
  const [open, setOpen] = useState(false);
  const { reset, activeFiltersCount } = useProductFilters();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" className="h-9 gap-2 rounded-md">
          <SlidersHorizontal className="size-4" />
          <span>فیلتر</span>
          {activeFiltersCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="flex max-h-[88dvh] max-w-[calc(100%-1rem)] flex-col gap-0 overflow-hidden rounded-md p-0 sm:max-w-lg" showCloseButton={false}>
        <DialogHeader className="shrink-0 border-b px-4 py-4 text-right">
          <div className="flex items-center justify-between gap-3">
            <div>
              <DialogTitle className="text-base font-bold">فیلتر محصولات</DialogTitle>
              <DialogDescription className="mt-1 text-xs">محصولات مورد نظر خود را انتخاب کنید.</DialogDescription>
            </div>
            <DialogClose asChild>
              <Button type="button" variant="ghost" size="icon" className="rounded-md" aria-label="بستن">
                <X className="size-5" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-4">
          <ProductFilterContent />
        </div>

        <DialogFooter className="shrink-0 border-t bg-background p-3">
          <Button type="button" variant="outline" className="flex-1 rounded-md" onClick={reset}>پاک کردن</Button>
          <DialogClose asChild>
            <Button type="button" className="flex-1 rounded-md">نمایش محصولات</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
