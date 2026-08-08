import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import HeroCarousel from './HeroCarousel';

vi.mock('swiper/modules', () => ({
  Autoplay: {},
  Pagination: {},
}));

vi.mock('swiper/css', () => ({}));
vi.mock('swiper/css/pagination', () => ({}));

vi.mock('swiper/react', () => {
  const Swiper = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="swiper" className={className}>
      {children}
    </div>
  );

  const SwiperSlide = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  );

  return {
    Swiper,
    SwiperSlide,
  };
});

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} alt={alt} />
  ),
}));

vi.mock('./CarouselControls', () => ({
  default: ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
    <div>
      <button type="button" onClick={onPrev}>
        قبلی
      </button>

      <button type="button" onClick={onNext}>
        بعدی
      </button>
    </div>
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

  it('renders previous and next controls', () => {
    render(<HeroCarousel />);

    expect(screen.getByRole('button', { name: 'قبلی' })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'بعدی' })).toBeInTheDocument();
  });
});
