'use client';

import Autoplay from 'embla-carousel-autoplay';

import ProductCard from './ProductCard';

import type { Product } from './product.types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProductSliderClientProps {
  products: Product[];
}

export default function ProductSliderClient({
  products,
}: ProductSliderClientProps) {
  return (
    <Carousel
      opts={{
        direction: 'rtl',
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-3">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="
              pl-3
              basis-1/2
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
              xl:basis-1/6
            "
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
