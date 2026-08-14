import { InfoRow } from '@/components/layout/Pages/Product/+components/ProductInfoRow';
import { TabButton } from '@/components/layout/Pages/Product/+components/TabButton';
import { Product } from '@/components/layout/Pages/Product/product.types';
import ProductDescription from '@/components/layout/Pages/Product/ProductDescription';
import ProductSpecifications from '@/components/layout/Pages/Product/ProductSpecifications';
import { formatPrice } from '@/utils/helpers';
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Props {
  product: Product;
}

const ProductContent = ({ product }: Props) => {
  const [activeSection, setActiveSection] = useState('description');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const hasDiscount =
    product.oldPrice !== undefined && product.oldPrice > product.price;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActiveSection(id);
  };

  useEffect(() => {
    const sections = ['description', 'specifications', 'reviews'];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-120px 0px -60% 0px',
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-[95%] max-w-325">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        {/* Main Content */}
        <div className="min-w-0">
          {/* Sticky Navigation */}
          <div className="sticky top-3 z-30">
            <div className="rounded-[20px] border border-gray-100 bg-white/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <nav className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
                  <TabButton
                    active={activeSection === 'description'}
                    onClick={() => scrollToSection('description')}
                  >
                    توضیحات
                  </TabButton>

                  <TabButton
                    active={activeSection === 'specifications'}
                    onClick={() => scrollToSection('specifications')}
                  >
                    مشخصات
                  </TabButton>

                  <TabButton
                    active={activeSection === 'reviews'}
                    onClick={() => scrollToSection('reviews')}
                  >
                    دیدگاه‌ها
                  </TabButton>
                </nav>

                <div className="hidden items-center gap-1 sm:flex">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
                    onClick={() => {
                      const sections = [
                        'description',
                        'specifications',
                        'reviews',
                      ];

                      const currentIndex = sections.indexOf(activeSection);

                      if (currentIndex > 0) {
                        scrollToSection(sections[currentIndex - 1]);
                      }
                    }}
                  >
                    <ChevronUp className="size-4" />
                  </button>

                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
                    onClick={() => {
                      const sections = [
                        'description',
                        'specifications',
                        'reviews',
                      ];

                      const currentIndex = sections.indexOf(activeSection);

                      if (currentIndex < sections.length - 1) {
                        scrollToSection(sections[currentIndex + 1]);
                      }
                    }}
                  >
                    <ChevronDown className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* Description                                                    */}
          {/* ============================================================ */}

          <ProductDescription
            product={product}
            isExpanded={isDescriptionExpanded}
            onExpand={() => setIsDescriptionExpanded(true)}
          />

          {/* ============================================================ */}
          {/* Specifications                                                 */}
          {/* ============================================================ */}

          <ProductSpecifications product={product} />

          {/* ============================================================ */}
          {/* Reviews                                                        */}
          {/* ============================================================ */}
        </div>

        {/* ================================================================= */}
        {/* Sticky Desktop Purchase Sidebar                                  */}
        {/* ================================================================= */}

        <aside className="hidden lg:block">
          <div className="sticky top-4 rounded-[23px] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="rounded-[20px] bg-[#f7f8fa] p-4">
              <h3 className="text-sm font-bold text-gray-800">مشخصات</h3>

              <InfoRow
                icon={<BarChart3 className="size-5" />}
                label="رضایت از خرید"
                value={`${formatPrice(product.likePercentage)}٪`}
              />

              <InfoRow
                icon={<Truck className="size-5" />}
                label="زمان ارسال"
                value={product.shippingTime ?? 'نامشخص'}
              />

              <InfoRow
                icon={<ShieldCheck className="size-5" />}
                label="دارای ضمانت"
                value={product.guarantee ? 'بله' : 'خیر'}
              />

              <InfoRow
                icon={<PackageCheck className="size-5" />}
                label="وضعیت موجودی"
                value={
                  product.availability === 'available' ? 'موجود' : 'ناموجود'
                }
                valueClassName={
                  product.availability === 'available'
                    ? 'text-green-600'
                    : 'text-red-500'
                }
                last
              />
            </div>

            <div className="mt-5 border-t border-dashed border-gray-200 pt-5">
              {hasDiscount && product.oldPrice !== undefined && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>

                  {product.discount !== undefined && (
                    <span className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
                      {formatPrice(product.discount)}٪
                    </span>
                  )}
                </div>
              )}

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {formatPrice(product.price)}
                </span>

                <span className="text-xs text-gray-400">تومان</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary"
              onClick={() => {
                console.log('Add to cart:', product);
              }}
            >
              <ShoppingBag className="size-5" />
              افزودن به سبد خرید
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ProductContent;
