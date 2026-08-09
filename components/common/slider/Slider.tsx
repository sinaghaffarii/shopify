'use client';

import { ReactNode, useMemo, useRef } from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperRef } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SliderControls from './SliderControls';

interface SliderBreakpoints {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  wide?: number;
}

type NavigationPosition = 'inside' | 'outside' | 'none';

interface SliderProps {
  children: ReactNode;

  slidesPerView?: number | 'auto';

  breakpoints?: SliderBreakpoints;

  spaceBetween?: number;

  loop?: boolean;

  autoplay?: boolean;

  autoplayDelay?: number;

  pagination?: boolean;

  navigation?: boolean;

  navigationPosition?: NavigationPosition;

  hideNavigationOnMobile?: boolean;

  speed?: number;

  height?: string;

  minHeight?: string;

  className?: string;

  slideClassName?: string;
}

export default function Slider({
  children,

  slidesPerView = 3,

  breakpoints,

  spaceBetween = 16,

  loop = false,

  autoplay = false,

  autoplayDelay = 5000,

  pagination = false,

  navigation = false,

  navigationPosition = 'inside',

  hideNavigationOnMobile = false,

  speed = 600,

  height = 'auto',

  minHeight,

  className = '',
}: SliderProps) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const modules = useMemo(() => {
    const list = [];

    if (autoplay) list.push(Autoplay);

    if (pagination) list.push(Pagination);

    if (navigation) list.push(Navigation);

    return list;
  }, [autoplay, pagination, navigation]);

  const responsiveBreakpoints = breakpoints
    ? {
        0: {
          slidesPerView: breakpoints.mobile ?? slidesPerView,
        },

        768: {
          slidesPerView:
            breakpoints.tablet ?? breakpoints.mobile ?? slidesPerView,
        },

        1024: {
          slidesPerView:
            breakpoints.desktop ??
            breakpoints.tablet ??
            breakpoints.mobile ??
            slidesPerView,
        },

        1440: {
          slidesPerView:
            breakpoints.wide ??
            breakpoints.desktop ??
            breakpoints.tablet ??
            breakpoints.mobile ??
            slidesPerView,
        },
      }
    : undefined;

  const controlsClass = hideNavigationOnMobile ? 'hidden md:flex' : 'flex';

  return (
    <div
      className={`
        relative
        w-full
        ${
          navigationPosition === 'outside' && navigation
            ? 'flex items-center gap-3'
            : ''
        }
        ${className}
      `}
      style={{
        height,
        minHeight,
      }}
    >
      {navigationPosition === 'outside' && navigation && (
        <div
          className={`
              shrink-0
              ${controlsClass}
            `}
        >
          <SliderControls
            position="outside"
            direction="prev"
            onPrev={() => swiperRef.current?.swiper.slidePrev()}
            onNext={() => swiperRef.current?.swiper.slideNext()}
          />
        </div>
      )}

      <div
        className={
          navigationPosition === 'outside' && navigation
            ? 'min-w-0 flex-1'
            : 'relative h-full w-full'
        }
      >
        <Swiper
          ref={swiperRef}
          modules={modules}
          loop={loop}
          speed={speed}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          breakpoints={responsiveBreakpoints}
          autoplay={
            autoplay
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }
              : false
          }
          pagination={
            pagination
              ? {
                  clickable: true,
                }
              : false
          }
          className="h-full w-full"
        >
          {children}
        </Swiper>

        {navigationPosition === 'inside' && navigation && (
          <SliderControls
            position="inside"
            onPrev={() => swiperRef.current?.swiper.slidePrev()}
            onNext={() => swiperRef.current?.swiper.slideNext()}
          />
        )}
      </div>

      {navigationPosition === 'outside' && navigation && (
        <div
          className={`
              shrink-0
              ${controlsClass}
            `}
        >
          <SliderControls
            position="outside"
            direction="next"
            onPrev={() => swiperRef.current?.swiper.slidePrev()}
            onNext={() => swiperRef.current?.swiper.slideNext()}
          />
        </div>
      )}
    </div>
  );
}
