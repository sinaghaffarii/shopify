'use client';

import { Button } from '@/components/ui/button';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;

  position?: 'inside' | 'outside';

  direction?: 'prev' | 'next';
}

export default function SliderControls({
  onPrev,
  onNext,
  position = 'inside',
  direction,
}: SliderControlsProps) {
  const buttonClass = `
    size-7
    shrink-0

    rounded-md

    border
    border-white/40

    bg-white/30

    text-gray-800

    shadow-lg

    backdrop-blur-md
    backdrop-saturate-150

    transition-all
    duration-200

    hover:bg-white/50
    hover:shadow-xl

    active:scale-95

    md:size-8
    lg:size-9
  `;

  // Outside
  if (position === 'outside') {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={direction === 'prev' ? onPrev : onNext}
        aria-label={direction === 'prev' ? 'قبلی' : 'بعدی'}
        className={buttonClass}
      >
        {direction === 'prev' ? (
          <ChevronRight className="size-5" />
        ) : (
          <ChevronLeft className="size-5" />
        )}
      </Button>
    );
  }

  // Inside
  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"

        onClick={onPrev}
        aria-label="قبلی"
        className={`
          ${buttonClass}
          absolute
          right-3
          top-1/2
          z-50
          -translate-y-1/2
        `}
      >
        <ChevronRight className="size-5" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onNext}
        aria-label="بعدی"
        className={`
          ${buttonClass}

          absolute
          left-3
          top-1/2
          z-30
          -translate-y-1/2
        `}
      >
        <ChevronLeft className="size-5" />
      </Button>
    </>
  );
}
