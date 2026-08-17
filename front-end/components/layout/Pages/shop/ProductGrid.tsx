import { ProductCard } from '@/components/layout/Products';
import type { Product } from '@/components/layout/Products/product.types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-md border border-dashed bg-background px-5 py-16 text-center">
        <h2 className="text-base font-bold">محصولی پیدا نشد</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          فیلترها یا محدوده قیمت را تغییر دهید و دوباره امتحان کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
