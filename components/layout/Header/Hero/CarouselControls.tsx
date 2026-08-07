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
    <div className="absolute bottom-6 right-6 z-20 flex gap-3">
      <Button onClick={onPrev} variant={'ghost'} className="shadow-lg">
        <ChevronRight />
      </Button>

      <Button onClick={onNext} variant={'ghost'} className="shadow-lg">
        <ChevronLeft />
      </Button>
    </div>
  );
}
