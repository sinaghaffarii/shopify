import { ProductSectionHeader } from '@/components/layout/Pages/Product/+components/ProductSectionHeader';
import { Product } from '@/components/layout/Pages/Product/product.types';
import { ChevronDown } from 'lucide-react';

interface Props {
  isExpanded: boolean;
  onExpand: (isDescriptionExpanded: boolean) => void;
  product: Product;
}

const ProductDescription = ({ isExpanded, onExpand, product }: Props) => {
  return (
    <section id="description" className="scroll-mt-28 pt-5">
      <ProductSectionHeader number="1" title="توضیحات" />

      <div className="relative overflow-hidden rounded-[22px] border border-gray-100 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.04)] md:p-7">
        <div
          className={`
                    text-justify
                    text-sm
                    leading-8
                    text-gray-600
                    ${!isExpanded ? 'max-h-[600px] overflow-hidden' : ''}
                  `}
        >
          <p className="my-5">
            <strong className="font-bold text-gray-900">معرفی کلی</strong>

            <br />

            {product.description.introduction}
          </p>

          {product.description.sections.map((section) => (
            <div key={section.title}>
              <hr className="my-6 border-gray-100" />

              <h2 className="mb-3 mt-5 text-xl font-bold text-gray-900 md:text-2xl">
                {section.title}
              </h2>

              <p className="my-5">{section.content}</p>
            </div>
          ))}

          {product.description.advantages &&
            product.description.advantages.length > 0 && (
              <>
                <hr className="my-6 border-gray-100" />

                <h2 className="mb-3 mt-5 text-xl font-bold text-gray-900 md:text-2xl">
                  مزایا
                </h2>

                <ul className="my-4 list-outside list-disc space-y-2 pr-5">
                  {product.description.advantages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

          {product.description.disadvantages &&
            product.description.disadvantages.length > 0 && (
              <>
                <hr className="my-6 border-gray-100" />

                <h2 className="mb-3 mt-5 text-xl font-bold text-gray-900 md:text-2xl">
                  محدودیت‌ها
                </h2>

                <ul className="my-4 list-outside list-disc space-y-2 pr-5">
                  {product.description.disadvantages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

          {product.description.conclusion && (
            <>
              <hr className="my-6 border-gray-100" />

              <h2 className="mb-3 mt-5 text-xl font-bold text-gray-900 md:text-2xl">
                جمع‌بندی
              </h2>

              <p className="my-5">{product.description.conclusion}</p>
            </>
          )}
        </div>

        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 flex h-32 items-end justify-center bg-linear-to-t from-white via-white/95 to-transparent pb-4">
            <button
              type="button"
              onClick={() => onExpand(true)}
              className="
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        bg-gray-900
                        px-6
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        shadow-lg
                        transition-all
                        hover:bg-primary
                      "
            >
              مشاهده بیشتر
              <ChevronDown className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDescription;
