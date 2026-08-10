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
    size-8
  shrink-0
  rounded-full
  border
  border-gray-200/80
  bg-white/80
  text-gray-700
  shadow-[0_3px_10px_rgba(0,0,0,0.06)]
  backdrop-blur-sm

  transition-all
  duration-200

  hover:bg-white
  hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]

  active:scale-95

  md:size-9
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
