'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { Product } from './product.types';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fa-IR').format(price);
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative w-full min-w-0 overflow-hidden rounded-xl border border-gray-100 bg-white transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
      {/* Discount */}
      {product.discount && (
        <span className="absolute right-2 top-2 z-20 rounded-md border border-white/60 bg-emerald-500/90 px-2 py-1 text-[10px] font-medium text-white shadow-sm backdrop-blur-sm sm:text-xs">
          {product.discount}٪
        </span>
      )}

      {/* Favorite */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="افزودن به علاقه‌مندی‌ها"
        className="absolute left-2 top-2 z-20 size-8 rounded-full border border-white/70 bg-white/70 text-gray-400 shadow-sm backdrop-blur-md hover:bg-white hover:text-emerald-500"
      >
        <Heart className="size-4" />
      </Button>

      <Link href={product.href ?? '#'} className="flex h-full flex-col">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden ">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="
              (max-width: 640px) 45vw,
              (max-width: 768px) 30vw,
              (max-width: 1024px) 22vw,
              180px
            "
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>

        {/* Content */}
        <div className="flex min-h-[125px] flex-1 flex-col px-3 pb-4 pt-3">
          <div>
            <h3 className="line-clamp-2 text-xs font-medium leading-5 text-gray-800 sm:text-sm">
              {product.title}
            </h3>

            {product.brand && (
              <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                {product.brand}
              </p>
            )}
          </div>

          <div className="mt-auto pt-3">
            {product.oldPrice && (
              <p className="text-[10px] text-gray-400 line-through sm:text-xs">
                {formatPrice(product.oldPrice)} تومان
              </p>
            )}

            <p className="mt-1 text-xs font-bold text-gray-900 sm:text-sm">
              {formatPrice(product.price)}

              <span className="mr-1 text-[9px] font-normal text-gray-500">
                تومان
              </span>
            </p>
          </div>
        </div>
      </Link>

      {/* Add to cart */}
      <div className="absolute bottom-0 left-0 z-20">
        <div className="relative flex size-[48px] items-end justify-start">
          <div className="absolute inset-0 rounded-tr-[20px] bg-gray-50" />

          <Button
            type="button"
            size="icon"
            variant={'secondary'}
            aria-label="افزودن به سبد خرید"
            // className="relative z-10 mb-2 mr-2 size-10 rounded-full bg-gray-900 text-white shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all hover:bg-blue-600 active:scale-95"
            className="absolute left-2 top-2 z-20 size-8 rounded-full border border-white/70 bg-white/70 text-gray-400 shadow-sm backdrop-blur-md hover:bg-white hover:text-emerald-500"
          >
            <ShoppingCart className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
