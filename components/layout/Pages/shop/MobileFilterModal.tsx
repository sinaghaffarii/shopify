'use client';

import { Dialog } from 'radix-ui';
import { SlidersHorizontal, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useProductFilters } from '@/hooks/use-product-filters';

import ProductFilterContent from './ProductFiltersContent';

export default function MobileFilterModal() {
  const { reset, activeFiltersCount } = useProductFilters();

  return (
    <Dialog.Root>
      {/* Trigger */}

      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="outline"
          className="w-fit gap-2 rounded-md"
        >
          <SlidersHorizontal className="size-4" />

          <span>فیلتر محصولات</span>

          {activeFiltersCount > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </Dialog.Trigger>

      {/* Portal */}

      <Dialog.Portal>
        {/* Overlay */}

        <Dialog.Overlay className="fixed inset-0 z-100 bg-black/50 md:hidden" />

        {/* Modal */}

        <Dialog.Content
          className="
            fixed inset-x-0 bottom-0 z-100
            flex max-h-[90vh] flex-col
            rounded-t-2xl bg-background
            shadow-xl
            outline-none
            md:hidden
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b px-5 py-4">
            <div>
              <Dialog.Title className="text-lg font-bold">
                فیلتر محصولات
              </Dialog.Title>

              <Dialog.Description className="mt-1 text-xs text-muted-foreground">
                محصولات مورد نظر خود را فیلتر کنید
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="بستن"
              >
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>

          {/* Content */}

          <div className="min-h-0 flex-1 overflow-y-auto px-5">
            <ProductFilterContent />
          </div>

          {/* Footer */}

          <div className="flex gap-2 border-t bg-background p-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={reset}
            >
              پاک کردن
            </Button>

            <Dialog.Close asChild>
              <Button type="button" className="flex-1">
                اعمال فیلتر
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
