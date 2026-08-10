import Link from 'next/link';

import BrandsSlider from './BrandsSlider';

export default function Brands() {
  return (
    <section className="my-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900 sm:text-base">
          برندهای محبوب
        </h2>

        <Link
          href="/brands"
          className="text-xs font-medium text-blue-600 hover:text-blue-700"
        >
          مشاهده همه
        </Link>
      </div>

      <BrandsSlider />
    </section>
  );
}
