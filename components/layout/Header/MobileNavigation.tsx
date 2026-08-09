import { Button } from '@/components/ui/button';
import {
  Home,
  LayoutDashboard,
  User,
  GraduationCap,
  BookOpen,
  Search,
  Crown,
  Headphones,
  ShoppingBasket,
} from 'lucide-react';

const MobileNavigation = () => {
  return (
    <div className="md:hidden relative">
      {/* هدر بالا */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        {/* بخش راست: لوگو و عنوان */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">
            پ
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-800 leading-tight">
              بانی مد
            </h1>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              مد و پوشاک
            </p>
          </div>
        </div>

        {/* بخش چپ: آیکون‌ها */}
        <div className="flex items-center gap-2">
          <Button
            className="transition-colors relative rounded w-8"
            variant={'outline'}
          >
            <Search className="w-5 h-5 text-gray-600" strokeWidth={1.8} />
          </Button>
        </div>
      </header>

      {/* بخش ویژگی‌ها (گارانتی، پشتیبانی، کنکوریوم) */}
      <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-700">
            <Crown className="w-3.5 h-3.5 text-yellow-500" strokeWidth={2} />
            <span>گارانتی الماس</span>
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-1.5 text-xs text-gray-700">
            <Headphones
              className="w-3.5 h-3.5 text-green-500"
              strokeWidth={2}
            />
            <span>پشتیبانی ۲۴ ساعته</span>
          </div>
        </div>
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
          کنکوریوم مهروماه
          <span className="text-xs">›</span>
        </button>
      </div>

      {/* ناوبری پایین (Bottom Navigation) */}
      <nav className="fixed bottom-2 left-2 right-2 z-50 flex items-center justify-around rounded-2xl border border-white/40 bg-white/70 px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150">
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-blue-600 transition-colors"
        >
          <Home className="h-5 w-5" strokeWidth={2} />
          <span className="font-medium">خانه</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 transition-colors hover:text-blue-600"
        >
          <LayoutDashboard className="h-5 w-5" strokeWidth={1.8} />
          <span className="font-medium">دسته بندی ها</span>
        </a>

        {/* آیتم اصلی */}
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 transition-colors hover:text-blue-600"
        >
          <div className="relative">
            <div className="-mt-7 flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-blue-600 shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
              <BookOpen className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
          </div>

          <span className="mt-1 font-medium">فروشگاه</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 transition-colors hover:text-blue-600"
        >
          <ShoppingBasket className="h-5 w-5" strokeWidth={1.8} />
          <span className="font-medium">سبد خرید</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 transition-colors hover:text-blue-600"
        >
          <User className="h-5 w-5" strokeWidth={1.8} />
          <span className="font-medium">کامران</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileNavigation;
