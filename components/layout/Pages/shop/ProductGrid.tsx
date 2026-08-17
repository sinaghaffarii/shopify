import { ProductCard } from '@/components/layout/Products';
import { products } from '@/components/layout/Products/product.data';

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
