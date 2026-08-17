export const SHOP_CATEGORIES = [
  'همه',
  'پوشاک',
  'کفش',
  'اکسسوری',
  'لوازم دیجیتال',
  'زیبایی و سلامت',
] as const;

export type ShopCategory = (typeof SHOP_CATEGORIES)[number];
