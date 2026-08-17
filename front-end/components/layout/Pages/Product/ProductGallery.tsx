import { Product } from '@/components/layout/Pages/Product/product.types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  product: Product;
}

const ProductGallery = ({ product }: Props) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="xl:border-l xl:border-dashed xl:pl-8">
      <div className="relative aspect-square overflow-hidden rounded-md bg-[#f6f7fb]">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="
                    (max-width: 768px) 90vw,
                    (max-width: 1280px) 45vw,
                    420px
                  "
          className="object-cover  mix-blend-multiply transition-transform duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {product.images.map((image) => {
          const isActive = activeImage.id === image.id;

          return (
            <Button
              key={image.id}
              type="button"
              onClick={() => setActiveImage(image)}
              variant={'ghost'}
              className={`
                        relative
                        size-20
                        shrink-0
                        overflow-hidden
                        border
                        bg-gray-50
                        transition-all
                        ${
                          isActive
                            ? 'border-primary ring-2 ring-primary/10'
                            : 'border-transparent hover:border-gray-200'
                        }
                      `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
