import HeroBanner from './HeroBanner';
import HeroCarousel from './HeroCarousel';
import { carouselSlides } from './carousel.data';

export default function HeroLayout() {
  const topBanner = carouselSlides[2];
  const bottomBanner = carouselSlides[3];

  return (
    <div
      className="
        grid
        w-full
        grid-cols-1
        gap-4

        lg:h-105
        lg:grid-cols-5
        lg:grid-rows-1
      "
    >
      {/* Main Carousel */}
      <div
        className="
          min-h-55
          w-full

          lg:col-span-3
          lg:min-h-0
        "
      >
        <HeroCarousel />
      </div>

      {/* Static Banners */}
      <div
        className="
          grid
          min-h-80
          w-full
          grid-cols-1
          gap-4

          lg:col-span-2
          lg:min-h-0
          lg:grid-rows-2
        "
      >
        {/* Top Banner */}
        <div className="min-h-40 lg:min-h-0">
          <HeroBanner
            image={topBanner.image}
            alt={topBanner.alt}
            sizes="(max-width: 1024px) 100vw, 576px"
          />
        </div>

        {/* Bottom Banner */}
        <div className="min-h-40 lg:min-h-0">
          <HeroBanner
            image={bottomBanner.image}
            alt={bottomBanner.alt}
            sizes="(max-width: 1024px) 100vw, 576px"
          />
        </div>
      </div>
    </div>
  );
}
