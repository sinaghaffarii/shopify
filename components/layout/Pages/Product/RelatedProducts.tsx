import { formatPrice } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  relatedProducts: {
    id: number;
    title: string;
    image: string;
    price: number;
  }[];
}

const RelatedProducts = ({ relatedProducts }: Props) => {
  return (
    <section className="mx-auto mt-12 max-w-[1500px] pb-12">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="shrink-0 text-lg font-bold text-gray-900">
          محصولات مرتبط
        </h2>

        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProducts.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group overflow-hidden rounded-[18px] border border-gray-100 bg-white p-2 transition-all hover:border-gray-200 hover:shadow-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-[14px] bg-gray-50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="
                    (max-width: 640px) 45vw,
                    (max-width: 768px) 30vw,
                    220px
                  "
                className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-2">
              <h3 className="line-clamp-2 min-h-10 text-right text-xs leading-5 text-gray-800">
                {item.title}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-sm font-bold">
                  {formatPrice(item.price)}
                </span>

                <span className="text-[9px] text-gray-400">تومان</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
