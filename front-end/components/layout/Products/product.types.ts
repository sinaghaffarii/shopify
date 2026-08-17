import type { ReactNode } from 'react';

export interface ProductSize { id: string; label: string; available: boolean; }
export interface ProductColor { id: string; name: string; hex?: string; available: boolean; }

export interface Product {
  id: number;
  title: string;
  brand?: string;
  category?: string;
  image: string;
  alt: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  href?: string;
  sizes?: ProductSize[];
  colors?: ProductColor[];
}

export interface ProductSliderProps {
  title: string;
  products: Product[];
  icon?: ReactNode;
  href?: string;
  showViewAll?: boolean;
  saleEndsAt?: string;
  className?: string;
}
