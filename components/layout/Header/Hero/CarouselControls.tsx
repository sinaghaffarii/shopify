'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselControls({
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onPrev}
        aria-label="بنر قبلی"
        className="
          absolute
          right-3
          top-1/2
          z-20
          size-9
          -translate-y-1/2
          rounded-full
          border
          border-white/40
          bg-black/20
          text-white
          shadow-lg
          backdrop-blur-md
          hover:bg-black/40
          hover:text-white
          md:right-4
          md:size-11
          lg:size-12
        "
      >
        <ChevronRight className="size-5 md:size-6" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onNext}
        aria-label="بنر بعدی"
        className="
          absolute
          left-3
          top-1/2
          z-20
          size-9
          -translate-y-1/2
          rounded-full
          border
          border-white/40
          bg-black/20
          text-white
          shadow-lg
          backdrop-blur-md
          hover:bg-black/40
          hover:text-white
          md:left-4
          md:size-11
          lg:size-12
        "
      >
        <ChevronLeft className="size-5 md:size-6" />
      </Button>
    </>
  );
}
