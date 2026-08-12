'use client';

import Image from 'next/image';
import Link from 'next/link';

import { brands } from './brands.data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function BrandsSlider() {
  return (
    <Carousel
      opts={{
        direction: 'rtl',
        align: 'start',
        loop: true,
        dragFree: false,
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
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="
              pl-3
              basis-1/2
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
              xl:basis-1/6
            "
          >
            <Link
              href={brand.href}
              className="
                flex
                h-24
                w-full
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
