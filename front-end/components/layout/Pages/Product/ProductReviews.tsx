import { ProductSectionHeader } from '@/components/layout/Pages/Product/+components/ProductSectionHeader';
import { ReviewProgress } from '@/components/layout/Pages/Product/+components/ReviewProgress';
import { Product } from '@/components/layout/Pages/Product/product.types';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/utils/helpers';
import { MessageCircle, Pencil, Star } from 'lucide-react';

interface Props {
  product: Product;
}

const ProductReviews = ({ product }: Props) => {
  return (
    <section id="reviews" className="scroll-mt-28 pt-5">
      <ProductSectionHeader number="3" title="دیدگاه‌ها" />

      <div className="rounded-md border border-gray-100 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.04)] md:p-7">
        {/* Review Summary */}
        <div className="grid gap-5 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-linear-to-br from-amber-50 to-orange-50 py-6">
            <div className="text-5xl font-black text-gray-800">
              {product.reviewCount > 0 ? product.rating : '—'}
            </div>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-[18px] text-gray-300"
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-xs text-gray-500">
              از {formatPrice(product.reviewCount)} امتیاز
            </span>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <ReviewProgress
              label="مثبت"
              value={0}
              color="bg-emerald-500"
              textColor="text-emerald-600"
            />

            <ReviewProgress
              label="بی‌طرف"
              value={0}
              color="bg-amber-400"
              textColor="text-amber-600"
            />

            <ReviewProgress
              label="منفی"
              value={0}
              color="bg-rose-500"
              textColor="text-rose-600"
            />
          </div>
        </div>

        {/* Review Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 rounded-md bg-gray-100 p-1">
            <Button type="button" variant={'default'}>
              جدیدترین
            </Button>

            <Button type="button" variant={'secondary'}>
              بیشترین امتیاز
            </Button>

            <Button type="button" variant={'secondary'}>
              کمترین امتیاز
            </Button>
          </div>

          <Button type="button" className="flex items-center gap-2">
            <Pencil className="size-4" />
            ثبت دیدگاه
          </Button>
        </div>

        {/* Empty Reviews */}
        <div className="mt-5 flex flex-col items-center gap-3 rounded-md border border-dashed border-gray-200 py-14 text-center">
          <MessageCircle className="size-11 text-gray-300" />

          <p className="text-sm text-gray-500">
            هنوز دیدگاهی ثبت نشده است. اولین نفر باشید!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
