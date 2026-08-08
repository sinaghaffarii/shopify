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
} from 'lucide-react';

const MobileNavigation = () => {
  return (
    <div className="md:hidden relative">
      {/* هدر بالا */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        {/* بخش راست: لوگو و عنوان */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm shadow-sm">
            پ
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-800 leading-tight">
              پایگاه
            </h1>
            <p className="text-[10px] text-gray-500 leading-tight -mt-0.5">
              زیتا کنکور شو
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
          <span className="text-[10px]">›</span>
        </button>
      </div>

      {/* ناوبری پایین (Bottom Navigation) */}
      <nav className="bg-white border rounded shadow-lg border-gray-100 fixed bottom-2 left-2 right-2 z-50 px-2 py-1.5 flex items-center justify-around">
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-blue-600"
        >
          <Home className="w-5 h-5" strokeWidth={2} />
          <span className="text-[10px] font-medium">خانه</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
        >
          <LayoutDashboard className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-[10px] font-medium">داشبورد</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
        >
          <div className="relative">
            <div className="w-12 h-12 -mt-6 bg-blue-600 roundedll flex items-center justify-center shadow-lg shadow-blue-200">
              <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>
          <span className="text-[10px] font-medium mt-0.5">کتاب‌ها</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
        >
          <User className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-[10px] font-medium">سید حیدر</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
        >
          <GraduationCap className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-[10px] font-medium">دانشگاه</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileNavigation;
