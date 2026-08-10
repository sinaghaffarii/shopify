'use client';

import HeroBanner from './HeroBanner';
import { carouselSlides } from './carousel.data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function HeroCarousel() {
  return (
    <Carousel
      loop
      autoplay
      autoplayDelay={5000}
      pagination
      navigation
      navigationPosition="inside"
      height="100%"
      className="h-full w-full"
    >
      <CarouselContent className="h-full">
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={slide.id} className="h-full">
            <HeroBanner
              image={slide.image}
              alt={slide.alt}
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 864px"
              className="h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
