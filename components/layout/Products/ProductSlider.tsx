import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import Countdown from './CountDown';

import type { ProductSliderProps } from './product.types';
import ProductSliderClient from '@/components/layout/Products/ProductSliderClient';

export default function ProductSlider({
  title,
  products,
  icon: Icon,
  href,
  showViewAll = true,
  saleEndsAt,
}: ProductSliderProps) {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-gray-100 p-3 sm:p-4">
      {/* Header */}
      <header className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          {Icon && (
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <Icon className="size-5" />
            </div>
          )}

          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold text-gray-900 sm:text-base">
              {title}
            </h2>

            {saleEndsAt && (
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[10px] text-gray-400">پایان فروش:</span>

                <Countdown endsAt={saleEndsAt} />
              </div>
            )}
          </div>
        </div>

        {showViewAll && href && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="shrink-0 gap-1 px-2 text-xs text-blue-600 hover:bg-white"
          >
            <Link href={href}>
              مشاهده همه
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
        )}
      </header>

      {/* Client boundary */}
      <ProductSliderClient products={products} />
    </section>
  );
}
