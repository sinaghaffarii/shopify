import { ProductCard } from '@/components/layout/Products';
import { products } from '@/components/layout/Products/product.data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const RelatedProducts = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="shrink-0 text-lg font-bold text-gray-900">
          محصولات مرتبط
        </h2>

        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <Carousel
        opts={{
          direction: 'rtl',
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-[48%] ps-2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default RelatedProducts;
