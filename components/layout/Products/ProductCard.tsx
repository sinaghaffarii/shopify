'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Product } from './product.types';
import CartLargeDuotone from '@/components/ui/icons/CartLargeDuotone';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fa-IR').format(price);
};

export default function ProductCard({ product }: ProductCardProps) {
  const originalPrice = product.price;
  const discount = product.discount ?? 0;

  const discountedPrice =
    discount > 0
      ? Math.round(originalPrice - (originalPrice * discount) / 100)
      : originalPrice;

  return (
    <article
      className="
        group
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[18px]
        border
        border-transparent
        bg-white
        px-2
        pt-2
        transition-all
        duration-200
        hover:border-gray-100
        md:p-4
      "
    >
      {/* Product Link */}
      <Link href={product.href ?? '#'} className="block h-full cursor-pointer">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-white">
          <Image
            src={product.image}
            alt={product.alt || product.title}
            fill
            sizes="
              (max-width: 640px) 150px,
              (max-width: 768px) 200px,
              (max-width: 1024px) 230px,
              250px
            "
            className="
              object-cover
              object-center
              mix-blend-multiply
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Product Title */}
        <h3
          className="
            mt-4
            mb-20
            h-[6px]
            text-right
            text-sm
            font-medium
            leading-6
            text-gray-900
            md:text-base
          "
        >
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <div className="absolute bottom-4 left-3 flex flex-col items-start">
        {product.oldPrice && product.oldPrice > product.price && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900 line-through md:text-base">
              {formatPrice(product.oldPrice)}
            </span>

            {product.discount && (
              <span className="rounded-lg bg-primary px-[7px] py-[2px] text-xs text-white">
                {formatPrice(product.discount)}٪
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-1 text-sm font-bold text-gray-900 md:text-base">
          <span>{formatPrice(product.price)}</span>

          <span className="text-xs font-normal text-gray-400">تومان</span>
        </div>
      </div>

      {/* Add To Cart */}
      <button
        type="button"
        aria-label="افزودن به سبد خرید"
        className="
          absolute
          bottom-0
          right-0
          z-10
          flex
          h-10
          w-14
          items-center
          justify-center
          rounded-[18px_0_18px_0]
          bg-gray-900
          text-white
          transition-colors
          hover:bg-gray-800
          active:scale-[0.97]
        "
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();

          // TODO: add to cart
          console.log('Add to cart:', {
            product,
          });
        }}
      >
        <CartLargeDuotone className="size-7" />
      </button>
    </article>
  );
}
