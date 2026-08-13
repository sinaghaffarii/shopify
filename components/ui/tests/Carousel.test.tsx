import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

const mockEmblaApi = {
  canScrollPrev: vi.fn(() => true),
  canScrollNext: vi.fn(() => true),
  scrollPrev: vi.fn(),
  scrollNext: vi.fn(),
  on: vi.fn(),
  off: vi.fn(),
};

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(() => [vi.fn(), mockEmblaApi]),
}));

describe('Carousel', () => {
  it('should render carousel correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    expect(screen.getByRole('region')).toBeInTheDocument();

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should render carousel items as slides', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const slides = screen.getAllByRole('group');

    expect(slides).toHaveLength(2);

    expect(slides[0]).toHaveAttribute('aria-roledescription', 'slide');

    expect(slides[1]).toHaveAttribute('aria-roledescription', 'slide');
  });

  it('should call scrollNext when next button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    );

    const nextButton = screen.getByRole('button', {
      name: /next slide/i,
    });

    await user.click(nextButton);

    expect(mockEmblaApi.scrollNext).toHaveBeenCalledTimes(1);
  });

  it('should call scrollPrev when previous button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
      </Carousel>
    );

    const previousButton = screen.getByRole('button', {
      name: /previous slide/i,
    });

    await user.click(previousButton);

    expect(mockEmblaApi.scrollPrev).toHaveBeenCalledTimes(1);
  });

  it('should disable previous button when carousel cannot scroll backwards', () => {
    mockEmblaApi.canScrollPrev.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
      </Carousel>
    );

    const previousButton = screen.getByRole('button', {
      name: /previous slide/i,
    });

    expect(previousButton).toBeDisabled();
  });

  it('should disable next button when carousel cannot scroll forward', () => {
    mockEmblaApi.canScrollNext.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    );

    const nextButton = screen.getByRole('button', {
      name: /next slide/i,
    });

    expect(nextButton).toBeDisabled();
  });

  it('should scroll next when ArrowRight is pressed', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = screen.getByRole('region');

    carousel.focus();

    await user.keyboard('{ArrowRight}');

    expect(mockEmblaApi.scrollNext).toHaveBeenCalledTimes(1);
  });

  it('should scroll previous when ArrowLeft is pressed', async () => {
    const user = userEvent.setup();

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const carousel = screen.getByRole('region');

    carousel.focus();

    await user.keyboard('{ArrowLeft}');

    expect(mockEmblaApi.scrollPrev).toHaveBeenCalledTimes(1);
  });

  it('should render vertical carousel correctly', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const content = screen
      .getByText('Slide 1')
      .closest('[data-slot="carousel-item"]');

    expect(content).toHaveClass('pt-4');
  });
});
