import { Product } from '@/components/layout/Pages/Product/product.types';
import { InfoRow } from '@/components/layout/Pages/Product/+components/ProductInfoRow';
import { formatPrice } from '@/utils/helpers';
import { BarChart3, Check, ShieldCheck, Truck, X } from 'lucide-react';

interface Props {
  product: Product;
}

const ProductPurchaseCard = ({ product }: Props) => {
  const hasDiscount =
    product.oldPrice !== undefined && product.oldPrice > product.price;

  return (
    <aside className="lg:block">
      <div className="rounded-md bg-[#f7f8fa] p-4">
        <h3 className="text-sm font-bold text-gray-800">مشخصات</h3>

        <div className="mt-2">
          {/* Satisfaction */}
          <InfoRow
            icon={<BarChart3 className="size-5" />}
            label="رضایت از خرید"
            value={`${formatPrice(product.likePercentage)}٪`}
          />

          {/* Shipping */}
          <InfoRow
            icon={<Truck className="size-5" />}
            label="زمان ارسال"
            value={product.shippingTime ?? 'نامشخص'}
          />

          {/* Guarantee */}
          <InfoRow
            icon={<ShieldCheck className="size-5" />}
            label="دارای ضمانت"
            value={product.guarantee ? 'بله' : 'خیر'}
          />

          {/* Availability */}
          <InfoRow
            icon={
              product.availability === 'available' ? (
                <Check className="size-5 text-green-600" />
              ) : (
                <X className="size-5 text-red-500" />
              )
            }
            label="وضعیت موجودی"
            value={product.availability === 'available' ? 'موجود' : 'ناموجود'}
            valueClassName={
              product.availability === 'available'
                ? 'text-green-600'
                : 'text-red-500'
            }
            last
          />
        </div>
      </div>

      {/* Price */}
      <div className="mt-5 border-t border-dashed border-gray-200 pt-5">
        {hasDiscount && product.oldPrice !== undefined && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>

            {product.discount !== undefined && (
              <span className="rounded-md bg-primary px-2 py-1 text-xs font-medium text-white">
                {formatPrice(product.discount)}٪
              </span>
            )}
          </div>
        )}

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>

          <span className="text-xs text-gray-400">تومان</span>
        </div>
      </div>
    </aside>
  );
};

export default ProductPurchaseCard;
