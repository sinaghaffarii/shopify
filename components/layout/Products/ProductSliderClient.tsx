'use client';

import ProductCard from './ProductCard';

import type { Product } from './product.types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface ProductSliderClientProps {
  products: Product[];
}

export default function ProductSliderClient({
  products,
}: ProductSliderClientProps) {
  return (
    <Carousel
      autoplay
      loop
      navigation
      hideNavigationOnMobile
      pagination
      autoplayDelay={4000}
      spaceBetween={12}
      breakpoints={{ mobile: 2, tablet: 4, desktop: 6 }}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
