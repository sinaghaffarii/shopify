'use client';

import { SwiperSlide } from 'swiper/react';

import HeroBanner from './HeroBanner';
import { carouselSlides } from './carousel.data';

import Slider from '@/components/common/slider/Slider';

export default function HeroCarousel() {
  return (
    <Slider
      slidesPerView={1}
      loop
      autoplay
      autoplayDelay={5000}
      pagination
      navigation
      navigationPosition="inside"
      speed={600}
      height="100%"
      className="h-full w-full"
    >
      {carouselSlides.map((slide, index) => (
        <SwiperSlide key={slide.id} className="h-full">
          <HeroBanner
            image={slide.image}
            alt={slide.alt}
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 864px"
            className="h-full"
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
}
