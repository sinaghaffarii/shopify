'use client';

import Image from 'next/image';

import categories from '@/data/categories.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

type CategoryType = {
  id: number;
  title: string;
  slug: string;
  image: string;
};

const Categories = () => {
  return (
    <Carousel
      opts={{
        direction: 'rtl',
        align: 'start',
        loop: true,
        dragFree: false,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-3">
        {categories.map((cat: CategoryType) => (
          <CarouselItem
            key={cat.id}
            className="
              pl-3
              basis-1/3
              sm:basis-1/4
              md:basis-1/5
              lg:basis-1/6
            "
          >
            <div className="my-10 flex flex-col items-center justify-center gap-3">
              <div className="flex size-20 items-center justify-center rounded-full border">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">{cat.title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Categories;
