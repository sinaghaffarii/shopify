'use client';

import HeroSlide from './HeroSlide';
import CarouselControls from './CarouselControls';
import { carouselSlides } from './carousel.data';
import { useHeroCarousel } from './useHeroCarousel';

export default function HeroCarousel() {
  const { emblaRef, scrollPrev, scrollNext } = useHeroCarousel();

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {carouselSlides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <HeroSlide image={slide.image} />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls onPrev={scrollPrev} onNext={scrollNext} />
    </section>
  );
}
