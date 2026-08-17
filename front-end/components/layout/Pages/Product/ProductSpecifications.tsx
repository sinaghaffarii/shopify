import { ProductSectionHeader } from '@/components/layout/Pages/Product/+components/ProductSectionHeader';
import { Product } from '@/components/layout/Pages/Product/product.types';

interface Props {
  product: Product;
}

const ProductSpecifications = ({ product }: Props) => {
  return (
    <section id="specifications" className="scroll-mt-28 pt-5">
      <ProductSectionHeader number="2" title="مشخصات" />

      <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  مشخصات
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  مقدار
                </th>
              </tr>
            </thead>

            <tbody>
              {product.specifications.map((specification) => (
                <tr
                  key={specification.label}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {specification.label}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {specification.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
