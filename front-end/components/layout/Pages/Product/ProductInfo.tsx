import { Product } from '@/components/layout/Pages/Product/product.types';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/utils/helpers';
import { AlertCircle, Heart, Plus, Star } from 'lucide-react';
import { useState } from 'react';

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex min-w-0 flex-col">
      {/* Desktop Actions */}
      <div className="gap-3 flex items-center justify-start">
        <Button
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          onClick={() => setIsFavorite((value) => !value)}
          size={'icon-lg'}
          variant={'secondary'}
          className={`
                    flex
                    shrink-0
                    items-center
                    justify-center
                    transition-colors
                  `}
        >
          <Heart
            className={`size-5 ${isFavorite && 'text-red-500'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </Button>
        {/* Title */}
        <h1 className="pt-2 text-xl font-bold leading-8 text-gray-900">
          {product.title}
        </h1>
      </div>

      {product.englishTitle && (
        <div className="mt-2 flex items-center gap-3">
          <h2 className="whitespace-nowrap text-sm text-gray-500">
            {product.englishTitle}
          </h2>

          <div className="h-px flex-1 border-b border-dashed border-gray-200" />
        </div>
      )}

      {/* Reviews / Like */}
      <div className="mt-5 flex flex-col gap-3 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <Heart className="size-4 text-primary" />

          <span>
            {formatPrice(product.likePercentage)}٪ از کاربران این کالا را دوست
            داشتند
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="size-4 text-primary" />

          <span>{formatPrice(product.reviewCount)} دیدگاه</span>
        </div>
      </div>

      {/* Features */}
      <div className="mt-7">
        <h3 className="mb-3 text-sm font-bold text-gray-800">ویژگی‌ها</h3>

        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <div
              key={feature.label}
              className="
                        rounded-xl
                        bg-[#f7f8fa]
                        px-3
                        py-2.5
                        transition-colors
                        hover:bg-gray-100
                      "
            >
              <span className="block text-[10px] text-gray-400">
                {feature.label}
              </span>

              <span className="mt-1 block text-xs font-bold text-gray-800">
                {feature.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      {product.notice && (
        <div className="mt-6 flex items-start gap-3 rounded-md border border-gray-100 px-4 py-3 text-xs leading-6 text-gray-500">
          <AlertCircle className="mt-1 size-4 shrink-0 text-primary" />
          <p>{product.notice}</p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
