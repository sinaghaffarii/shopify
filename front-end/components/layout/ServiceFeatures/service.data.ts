import {
  Headphones,
  LucideIcon,
  RotateCcw,
  ShieldCheck,
  Truck,
} from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: FeatureItem[] = [
  {
    title: 'امنیت کامل',
    description: 'دارای درگاه ایمن و مطمئن',
    icon: ShieldCheck,
  },
  {
    title: 'بهترین قیمت',
    description: 'مطمئن باش کف قیمت بازار',
    icon: RotateCcw,
  },
  {
    title: 'پشتیبانی خوب',
    description: 'همیشه آنلاینیم',
    icon: Headphones,
  },
  {
    title: 'ارسال سریع',
    description: 'ارسال فوری تهران و شهر ها',
    icon: Truck,
  },
];
