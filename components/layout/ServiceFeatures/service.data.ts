import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

export const serviceFeatures = [
  {
    id: 1,
    title: 'پرداخت امن',
    description: 'پرداخت امن و مطمئن',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'پشتیبانی ۲۴/۷',
    description: 'همیشه در کنار شما هستیم',
    icon: Headphones,
  },
  {
    id: 3,
    title: '۷ روز ضمانت بازگشت',
    description: 'خرید با خیال راحت',
    icon: RotateCcw,
  },
  {
    id: 4,
    title: 'ارسال سریع',
    description: 'ارسال سریع به سراسر کشور',
    icon: Truck,
  },
] as const;
