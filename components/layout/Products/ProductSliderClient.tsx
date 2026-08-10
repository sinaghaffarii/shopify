'use client';

import { SwiperSlide } from 'swiper/react';

import Slider from '@/components/common/slider/Slider';

import ProductCard from './ProductCard';

import type { Product } from './product.types';

interface ProductSliderClientProps {
  products: Product[];
}

export default function ProductSliderClient({
  products,
}: ProductSliderClientProps) {
  return (
    <Slider
      slidesPerView={2}
      breakpoints={{
        mobile: 2,
        tablet: 3,
        desktop: 5,
        wide: 6,
      }}
      spaceBetween={10}
      navigation
      navigationPosition="inside"
      hideNavigationOnMobile
      loop
      speed={650}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Slider>
  );
}
