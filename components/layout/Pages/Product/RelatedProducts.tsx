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
    <section className="mx-auto mt-12 max-w-[1500px] pb-12">
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
              className="
              pl-2
            basis-1/2
            "
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
