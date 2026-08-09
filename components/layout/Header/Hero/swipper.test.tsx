import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import HeroCarousel from './HeroCarousel';

vi.mock('@/components/common/slider/Slider', () => ({
  default: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="slider" className={className}>
      {children}
    </div>
  ),
}));

vi.mock('swiper/react', () => ({
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt={alt} />
  ),
}));

describe('HeroCarousel', () => {
  it('renders all slides', () => {
    render(<HeroCarousel />);

    expect(screen.getAllByTestId('swiper-slide')).toHaveLength(4);
  });

  it('renders slide images with correct alt text', () => {
    render(<HeroCarousel />);

    expect(screen.getByAltText('بنر محصولات هیدرودرم')).toBeInTheDocument();

    expect(screen.getByAltText('بنر محصولات جویی')).toBeInTheDocument();

    expect(screen.getByAltText('بنر محصولات مای')).toBeInTheDocument();

    expect(screen.getByAltText('بنر محصولات پیگمنت')).toBeInTheDocument();
  });

  it('renders the slider', () => {
    render(<HeroCarousel />);

    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });
});
