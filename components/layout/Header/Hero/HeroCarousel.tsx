'use client';

import { useRef } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import HeroBanner from './HeroBanner';
import CarouselControls from './CarouselControls';
import { carouselSlides } from './carousel.data';

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="relative h-full w-full">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        loop
        slidesPerView={1}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-main-swiper h-full w-full"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="h-full w-full">
            <HeroBanner
              image={slide.image}
              alt={slide.alt}
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 60vw, 864px"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselControls onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
}
