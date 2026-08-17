'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import type { Product } from './product.types';

interface ProductCardProps { product: Product; }
const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = Boolean(product.oldPrice && product.oldPrice > product.price);

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-md border bg-card transition-shadow duration-200 hover:shadow-md">
      <div className="relative">
        <Link href={product.href ?? '#'} className="block" aria-label={product.title}>
          <div className="relative aspect-square overflow-hidden bg-muted/20">
            <Image
              src={product.image}
              alt={product.alt || product.title}
              fill
              sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, (max-width: 1279px) 23vw, 270px"
              className="object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        {hasDiscount && product.discount ? (
          <span className="absolute start-2 top-2 rounded-md bg-primary px-2 py-1 text-[11px] font-semibold text-primary-foreground">
            {formatPrice(product.discount)}٪
          </span>
        ) : null}
        <button type="button" aria-label="افزودن به علاقه‌مندی‌ها" className="absolute end-2 top-2 flex size-8 items-center justify-center rounded-md border bg-background/90 backdrop-blur hover:bg-background">
          <Heart className="size-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-3.5">
        {product.brand && <span className="mb-1 text-[11px] text-muted-foreground">{product.brand}</span>}
        <Link href={product.href ?? '#'}>
          <h3 className="line-clamp-2 min-h-10 text-right text-sm font-medium leading-5 text-foreground transition-colors group-hover:text-primary">{product.title}</h3>
        </Link>

        <div className="mt-auto flex items-end justify-between gap-2 pt-4">
          <div className="min-w-0">
            {hasDiscount && product.oldPrice ? <div className="text-[11px] text-muted-foreground line-through">{formatPrice(product.oldPrice)} تومان</div> : <div className="h-4" />}
            <div className="mt-0.5 flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-sm font-bold sm:text-base">{formatPrice(product.price)}</span>
              <span className="text-[10px] text-muted-foreground">تومان</span>
            </div>
          </div>

          <button type="button" aria-label="افزودن به سبد خرید" className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform hover:opacity-90 active:scale-95" onClick={(event) => { event.preventDefault(); event.stopPropagation(); console.log('Add to cart:', product); }}>
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
