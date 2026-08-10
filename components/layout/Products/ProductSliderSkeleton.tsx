import { Skeleton } from '@/components/ui/skeleton';

import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductSliderSkeleton() {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border bg-white p-3 sm:p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-lg" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
