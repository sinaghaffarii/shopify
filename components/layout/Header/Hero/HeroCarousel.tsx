'use client';

import Autoplay from 'embla-carousel-autoplay';

import HeroBanner from './HeroBanner';
import { carouselSlides } from './carousel.data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HeroCarousel() {
  return (
    <Carousel
      opts={{ direction: 'rtl', align: 'start', loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="h-full w-full" // 👈 auto — از پدر ارث می‌بره، خودش سایز رو dictate نمی‌کنه
    >
      <CarouselContent className="ml-0 h-full">
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={slide.id} className="h-full basis-full pl-0">
            <HeroBanner
              image={slide.image}
              alt={slide.alt}
              priority={index === 0}
              sizes="100vw"
              className="h-full w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
