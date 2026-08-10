import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'دسته‌بندی محصولات',
    links: [
      ['لباس مردانه', '/category/men'],
      ['لباس زنانه', '/category/women'],
      ['کیف و کفش', '/category/bag-shoes'],
      ['اکسسوری', '/category/accessories'],
    ],
  },
  {
    title: 'خدمات مشتریان',
    links: [
      ['تماس با ما', '/contact'],
      ['پیگیری سفارش', '/orders'],
      ['راهنمای خرید', '/guide'],
      ['سوالات متداول', '/faq'],
    ],
  },
  {
    title: 'دسترسی سریع',
    links: [
      ['محصولات جدید', '/products/new'],
      ['پرفروش‌ها', '/products/bestsellers'],
      ['تخفیف‌ها', '/products/discounts'],
      ['مجله', '/blog'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 bg-gray-50/70">
      <div className="mx-auto w-[95%] max-w-325 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                ل
              </div>

              <span className="font-bold text-gray-800">لباسینو</span>
            </div>

            <p className="max-w-xs text-xs leading-6 text-gray-400">
              فروشگاه آنلاین پوشاک و اکسسوری با هدف ارائه محصولات باکیفیت و
              تجربه خرید ساده و مطمئن.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm transition-colors hover:text-blue-600"
              >
                <Image
                  src="/icons/social/instagram.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                aria-label="Telegram"
                className="flex size-10 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm transition-colors hover:text-blue-600"
              >
                <Image
                  src="/icons/social/telegram.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                aria-label="TikTok"
                className="flex size-10 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm transition-colors hover:text-blue-600"
              >
                <Image
                  src="/icons/social/tiktok.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-md bg-white text-gray-500 shadow-sm transition-colors hover:text-blue-600"
              >
                <Image
                  src="/icons/social/linkedin.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-bold text-gray-800">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[11px] text-gray-400 transition-colors hover:text-blue-600"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-5 text-center">
          <p className="text-[10px] text-gray-400">
            © ۱۴۰۵ لباسینو - تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
