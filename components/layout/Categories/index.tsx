'use client';

import { categories } from '@/components/layout/Categories/categories.data';
import SectionHeader from '@/components/SectionHeader';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import DoutOne from '@/components/ui/icons/DoutOne';
import Autoplay from 'embla-carousel-autoplay';

const Categories = () => {
  return (
    <div>
      <SectionHeader icon={<DoutOne className="size-6" />} title="دسته ها" />
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
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <CarouselItem
                key={cat.id}
                className="
                pl-3
                basis-1/2
                xs:basis-1/3
                sm:basis-1/4
                md:basis-1/5
                lg:basis-1/6
              "
              >
                <div className="gap-3">
                  <div className="h-20 w-full flex items-center justify-around flex-wrap rounded-xl border border-gray-200 bg-white">
                    <p className="text-sm font-medium text-gray-800">
                      {cat.name}
                    </p>
                    <Icon className="size-8 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Categories;
