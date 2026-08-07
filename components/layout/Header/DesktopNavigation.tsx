import React from 'react';
import { Search, User, LogIn, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesktopNavigation = () => {
  return (
    <div className="w-[95%] max-w-325 mx-auto mt-3 space-y-3">
      {/* هدر اصلی */}
      <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.08)] px-5 py-3 flex items-center justify-between">
        {/* بخش راست: لوگو و عنوان */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm">
            ک
          </div>
          <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
            کتابام
          </span>
        </div>

        {/* بخش وسط: جستجو */}
        <div className="flex-1 max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full bg-gray-50/80 border border-gray-200/80 rounded-md py-2.5 px-5 pr-12 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400"
            strokeWidth={2}
          />
        </div>

        {/* بخش چپ: ورود و ثبت نام */}
        <div className="flex items-center gap-2.5">
          <Button variant={'secondary'} className="p-5">
            <LogIn className="w-4 h-4" strokeWidth={1.8} />
            ورود | ثبت نام
          </Button>
        </div>
      </div>

      {/* نوار منو */}
      <div className="bg-white rounded-md shadow-[0_1px_6px_rgba(0,0,0,0.08)] px-6 py-3 flex items-center gap-8 text-sm text-gray-700 overflow-x-auto">
        <a
          href="#"
          className="hover:text-blue-600 transition-colors font-medium whitespace-nowrap"
        >
          دسته بندی محصولات
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          پیگیری سفارشات
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          راهنمای خرید
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          <BookOpen className="w-3.5 h-3.5 text-gray-400" />
          خرید کتاب دست دوم
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          تماس با ما
        </a>
      </div>
    </div>
  );
};

export default DesktopNavigation;
