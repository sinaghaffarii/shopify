import { ReactNode } from 'react';

export interface SliderBreakpoints {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  wide?: number;
}

export interface SliderProps {
  children: ReactNode;
  slidesPerView?: number;
  breakpoints?: SliderBreakpoints;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pagination?: boolean;
  navigation?: boolean;
  speed?: number;
  className?: string;
}
