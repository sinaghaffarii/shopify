'use client';

import Image from 'next/image';

import { SwiperSlide } from 'swiper/react';

import Slider from '@/components/common/slider/Slider';

import categories from '@/data/categories.json';

// import ImageNotFound from '@/public/images/Image-not-found.png';

type CategoryType = {
  id: number;
  title: string;
  slug: string;
  image: string;
};

const Categories = () => {
  return (
    <Slider
      slidesPerView={3}
      breakpoints={{
        mobile: 3,
        tablet: 7,
        desktop: 10,
      }}
      spaceBetween={8}
      navigation
      navigationPosition="outside"
      hideNavigationOnMobile
      loop
      height="auto"
    >
      {categories.map((cat: CategoryType) => (
        <SwiperSlide
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
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Categories;
