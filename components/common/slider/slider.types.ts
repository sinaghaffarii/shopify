import { ReactNode } from 'react';

export interface SliderBreakpoints {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  wide?: number;
}

type NavigationPosition = 'inside' | 'outside' | 'none';

export interface SliderProps {
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
