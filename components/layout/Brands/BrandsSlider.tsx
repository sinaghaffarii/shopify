'use client';

import Image from 'next/image';
import Link from 'next/link';

import { brands } from './brands.data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function BrandsSlider() {
  return (
    <Carousel
      autoplay
      loop
      navigation
      hideNavigationOnMobile
      pagination
      autoplayDelay={4000}
      spaceBetween={12}
      breakpoints={{ mobile: 3, tablet: 4, desktop: 6, wide: 8 }}
    >
      <CarouselContent>
        {brands.map((brand) => (
          <CarouselItem key={brand.id}>
            <Link
              href={brand.href}
              className="
              flex
              h-24
              items-center
              justify-center
              rounded-xl
              border
              border-gray-100
              bg-white
              px-4
              transition-all
              duration-300
              hover:border-gray-200
              hover:shadow-[0_5px_18px_rgba(0,0,0,0.05)]
            "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={60}
                className="
                max-h-14
                w-auto
                max-w-[90%]
                object-contain
                grayscale
                opacity-80
                transition-all
                duration-300
                hover:grayscale-0
                hover:opacity-100
              "
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
