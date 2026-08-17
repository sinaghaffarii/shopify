import type { Product } from '@/components/layout/Products/product.types';
import type { SortValue } from '@/hooks/use-product-filters';

export function filterAndSortProducts(
  products: Product[],
  filters: {
    category: string[];
    brand: string[];
    minPrice: number;
    maxPrice: number;
    sort: SortValue;
  },
) {
  const filtered = products.filter((product) => {
    const categoryMatch =
      filters.category.length === 0 ||
      (product.category ? filters.category.includes(product.category) : false);

    const brandMatch =
      filters.brand.length === 0 ||
      (product.brand ? filters.brand.includes(product.brand) : false);

    const priceMatch =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;

    return categoryMatch && brandMatch && priceMatch;
  });

  return [...filtered].sort((a, b) => {
    switch (filters.sort) {
      case 'cheapest':
        return a.price - b.price;
      case 'most-expensive':
        return b.price - a.price;
      case 'popular':
      case 'best-selling':
        return (b.discount ?? 0) - (a.discount ?? 0);
      case 'newest':
      default:
        return b.id - a.id;
    }
  });
}
