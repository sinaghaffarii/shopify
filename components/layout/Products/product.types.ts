import type { ElementType } from 'react';

export interface Product {
  id: number;

  title: string;
  brand?: string;

  image: string;
  alt: string;

  price: number;
  oldPrice?: number;
  discount?: number;

  href?: string;
}

export interface ProductSliderProps {
  title: string;

  products: Product[];

  icon?: ElementType;

  href?: string;

  showViewAll?: boolean;

  saleEndsAt?: string;

  className?: string;
}
