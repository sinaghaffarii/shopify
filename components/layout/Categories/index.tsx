'use client';

import Image from 'next/image';

import categories from '@/data/categories.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type CategoryType = {
  id: number;
  title: string;
  slug: string;
  image: string;
};

const Categories = () => {
  return (
    <Carousel
      autoplay
      loop
      navigation
      hideNavigationOnMobile
      pagination
      autoplayDelay={4000}
      spaceBetween={12}
      breakpoints={{ mobile: 2, tablet: 3, desktop: 6 }}
    >
      <CarouselContent>
        {categories.map((cat: CategoryType) => (
          <CarouselItem
            key={cat.id}
            className="flex h-auto items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-3 my-10">
              <div className="flex size-20 items-center justify-center rounded-full border">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={70}
                  height={70}
                  className="rounded-full"
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
