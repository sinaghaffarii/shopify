import type { ProductSliderProps } from './product.types';
import ProductSliderClient from '@/components/layout/Products/ProductSliderClient';
import SectionHeader from '@/components/SectionHeader';

export default function ProductSlider({
  title,
  products,
  icon,
}: ProductSliderProps) {
  return (
    <section className="my-10">
      {/* Header */}
      <SectionHeader title={title} icon={icon} />

      {/* Client boundary */}
      <ProductSliderClient products={products} />
    </section>
  );
}
