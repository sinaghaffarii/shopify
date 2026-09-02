import routes from "@/constant/RouteObject";

import {
  DashboardSquare01Icon,
  ShoppingBag01Icon,
  PackageIcon,
  Folder02Icon,
  UserGroupIcon,
  UserIcon,
  DiscountIcon,
  Megaphone01Icon,
  ChartBarLineIcon,
  Comment01Icon,
  Settings01Icon,
  CustomerSupportIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

type Menu = {
  id: number;
  title: string;
  link: string;
  icon: IconSvgElement;
};

const menu_list: Menu[] = [
  {
    id: 1,
    title: "داشبورد",
    link: routes.DASHBOARD,
    icon: DashboardSquare01Icon,
  },
  {
    id: 2,
    title: "سفارش‌ها",
    link: routes.ORDERS,
    icon: ShoppingBag01Icon,
  },
  {
    id: 3,
    title: "محصولات",
    link: routes.PRODUCTS,
    icon: PackageIcon,
  },
  {
    id: 4,
    title: "دسته‌بندی‌ها",
    link: routes.CATEGORIES,
    icon: Folder02Icon,
  },
  {
    id: 5,
    title: "کاربران",
    link: routes.USERS,
    icon: UserGroupIcon,
  },
  {
    id: 6,
    title: "مشتریان",
    link: routes.CUSTOMERS,
    icon: UserIcon,
  },
  {
    id: 7,
    title: "کدهای تخفیف",
    link: routes.DISCOUNT_CODE,
    icon: DiscountIcon,
  },
  {
    id: 8,
    title: "بازاریابی",
    link: routes.MARKETING,
    icon: Megaphone01Icon,
  },
  {
    id: 9,
    title: "گزارش‌ها",
    link: routes.REPORTS,
    icon: ChartBarLineIcon,
  },
  {
    id: 10,
    title: "نظرات",
    link: routes.REVIEWS,
    icon: Comment01Icon,
  },
  {
    id: 11,
    title: "تنظیمات",
    link: routes.SETTINGS,
    icon: Settings01Icon,
  },
  {
    id: 12,
    title: "پشتیبانی",
    link: routes.SUPPORT,
    icon: CustomerSupportIcon,
  },
];

export default menu_list;
