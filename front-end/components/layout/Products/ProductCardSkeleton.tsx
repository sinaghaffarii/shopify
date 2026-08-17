import { Skeleton } from '@/components/ui/skeleton';

export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <Skeleton className="aspect-4/5 w-full rounded-none" />

      <div className="space-y-3 p-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-1/2" />

        <div className="space-y-2">
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>
    </div>
  );
}
