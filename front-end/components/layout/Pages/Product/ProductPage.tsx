'use client';

import Link from 'next/link';

import { ChevronLeft, ShoppingBag } from 'lucide-react';
import ProductGallery from '@/components/layout/Pages/Product/ProductGallery';
import ProductInfo from '@/components/layout/Pages/Product/ProductInfo';
import ProductPurchaseCard from '@/components/layout/Pages/Product/ProductPurchaseCard';
import ProductContent from '@/components/layout/Pages/Product/ProductContent';
import { Product } from '@/components/layout/Pages/Product/product.types';
import { formatPrice } from '@/utils/helpers';
import RelatedProducts from '@/components/layout/Pages/Product/RelatedProducts';
import { Button } from '@/components/ui/button';

const product: Product = {
  id: 1,

  title: 'پیراهن آستین بلند یقه دکمه دار مردانه چهار خونه',

  englishTitle: "Men's long-sleeved button-down shirt",

  category: {
    name: 'مردانه',
    href: '/category/men',
  },

  images: [
    {
      id: 1,
      src: '/images/products/shirt-1.jpg',
      alt: 'پیراهن آستین بلند مردانه',
    },
    {
      id: 2,
      src: '/images/products/shirt-2.jpg',
      alt: 'پیراهن مردانه نمای دوم',
    },
    {
      id: 3,
      src: '/images/products/shirt-3.jpg',
      alt: 'پیراهن مردانه نمای سوم',
    },
  ],

  price: 1500000,
  oldPrice: 1800000,
  discount: 17,

  brand: 'ال سی',

  rating: 0,
  reviewCount: 0,
  likePercentage: 0,

  features: [
    {
      label: 'برند',
      value: 'ال سی',
    },
    {
      label: 'تولید',
      value: 'ایران',
    },
    {
      label: 'جنس',
      value: 'نخی',
    },
    {
      label: 'مدل',
      value: 'پیراهن',
    },
  ],

  specifications: [
    {
      label: 'سایز',
      value: 'xl، xxl، xxxl، md، sm',
    },
    {
      label: 'تولید',
      value: 'ایران',
    },
    {
      label: 'جنس',
      value: 'نخی',
    },
    {
      label: 'مدل',
      value: 'پیراهن',
    },
  ],

  guarantee: 'دارای ضمانت',

  shippingTime: '۱۲ ساعته',

  availability: 'available',

  notice:
    'تمامی پارچه های استفاده شده به صورت ۱۰۰ درصد نخ و دارای ضمانت می باشد.',

  description: {
    introduction:
      'این محصول با طراحی مدرن، کیفیت ساخت مناسب و استفاده از پارچه مرغوب، انتخابی مناسب برای استفاده روزمره و استایل‌های مختلف است.',

    sections: [
      {
        title: 'طراحی و ظاهر',
        content:
          'طراحی این محصول با تمرکز روی راحتی و استفاده روزمره انجام شده است. فرم مناسب لباس باعث می‌شود بتوانید آن را در موقعیت‌های مختلف استفاده کنید.',
      },
      {
        title: 'جنس و کیفیت',
        content:
          'پارچه استفاده شده در این محصول از جنس نخ بوده و برای استفاده روزمره انتخاب مناسبی محسوب می‌شود. کیفیت دوخت و جنس پارچه باعث افزایش دوام محصول شده است.',
      },
      {
        title: 'راحتی استفاده',
        content:
          'طراحی محصول به شکلی انجام شده که آزادی حرکت مناسبی داشته باشد و برای استفاده طولانی مدت احساس راحتی ایجاد کند.',
      },
      {
        title: 'مناسب برای چه کسانی است؟',
        content:
          'این محصول برای افرادی که به دنبال یک لباس ساده، کاربردی و قابل استفاده در استایل‌های روزمره هستند انتخاب مناسبی است.',
      },
    ],

    advantages: [
      'طراحی ساده و کاربردی',
      'استفاده از پارچه نخی',
      'مناسب برای استفاده روزمره',
      'تنوع سایزبندی',
      'کیفیت مناسب دوخت',
    ],

    disadvantages: [
      'تعداد محدود رنگ‌بندی',
      'عدم امکان تغییر سایز پس از ثبت سفارش',
    ],

    conclusion:
      'اگر به دنبال یک پیراهن مردانه کاربردی با طراحی ساده و جنس نخی هستید، این محصول می‌تواند انتخاب مناسبی برای استفاده روزمره باشد.',
  },
};

export default function ProductPage() {
  return (
    <main dir="rtl" className="min-h-screen pb-24 text-gray-900">
      {/* ================================================================== */}
      {/* Breadcrumb                                                         */}
      {/* ================================================================== */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 overflow-hidden py-4 text-sm">
          <Link
            href="/"
            className="shrink-0 text-gray-500 transition-colors hover:text-primary"
          >
            خانه
          </Link>

          <ChevronLeft className="size-4 shrink-0 text-gray-400" />

          <Link
            href={product.category.href}
            className="shrink-0 text-gray-500 transition-colors hover:text-primary"
          >
            {product.category.name}
          </Link>

          <ChevronLeft className="size-4 shrink-0 text-gray-400" />

          <span className="truncate text-gray-800">{product.title}</span>
        </nav>
      </div>

      {/* ================================================================== */}
      {/* Product Hero                                                       */}
      {/* ================================================================== */}

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-md bg-white p-4 shadow-[0_3px_14px_rgba(0,0,0,0.05)] md:p-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[420px_minmax(0,1fr)_300px]">
            {/* ============================================================ */}
            {/* Gallery                                                       */}
            {/* ============================================================ */}

            <ProductGallery product={product} />

            {/* ============================================================ */}
            {/* Product Info                                                  */}
            {/* ============================================================ */}

            <ProductInfo product={product} />

            {/* ============================================================ */}
            {/* Purchase / Specs Sidebar                                     */}
            {/* ============================================================ */}

            <ProductPurchaseCard product={product} />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* Product Content                                                    */}
      {/* ================================================================== */}

      <ProductContent product={product} />

      {/* ================================================================== */}
      {/* Related Products                                                   */}
      {/* ================================================================== */}

      <RelatedProducts />

      {/* ================================================================== */}
      {/* Mobile Buy Bar                                                     */}
      {/* ================================================================== */}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] text-gray-400">قیمت نهایی</span>

            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">
                {formatPrice(product.price)}
              </span>

              <span className="text-[10px] text-gray-400">تومان</span>
            </div>
          </div>

          <Button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gray-900 py-3.5 text-sm font-bold text-white"
            onClick={() => {
              console.log('Add to cart:', product);
            }}
          >
            <ShoppingBag className="size-5" />
            افزودن به سبد
          </Button>
        </div>
      </div>
    </main>
  );
}
