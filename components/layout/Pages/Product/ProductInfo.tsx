import { Product } from '@/components/layout/Pages/Product/product.types';
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
      {/* Title */}
      <h1 className="pt-2 text-xl font-bold leading-8 text-gray-900">
        {product.title}
      </h1>

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
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gray-100 px-4 py-3 text-xs leading-6 text-gray-500">
          <AlertCircle className="mt-1 size-4 shrink-0 text-primary" />

          <p>{product.notice}</p>
        </div>
      )}

      {/* Desktop Actions */}
      <div className="mt-auto hidden gap-3 pt-8 md:flex">
        <button
          type="button"
          className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gray-900
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    hover:bg-primary
                    active:scale-[0.98]
                  "
          onClick={() => {
            console.log('Add to cart:', product);
          }}
        >
          <Plus className="size-5" />

          <span>افزودن به سبد خرید</span>
        </button>

        <button
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          onClick={() => setIsFavorite((value) => !value)}
          className={`
                    flex
                    size-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    transition-colors
                    ${
                      isFavorite
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white'
                    }
                  `}
        >
          <Heart
            className="size-5"
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
