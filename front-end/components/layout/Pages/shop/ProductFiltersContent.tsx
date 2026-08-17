'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { PRICE_BOUNDS, useProductFilters } from '@/hooks/use-product-filters';
import { products } from '@/components/layout/Products/product.data';

const CATEGORIES = ['پوشاک', 'کفش', 'اکسسوری', 'لوازم دیجیتال', 'زیبایی و سلامت'];
const BRANDS = Array.from(new Set(products.map((product) => product.brand).filter(Boolean))).map((name) => ({
  name: name as string,
  count: products.filter((product) => product.brand === name).length,
}));

function formatPrice(value: number) {
  return new Intl.NumberFormat('fa-IR').format(value);
}

export default function ProductFilterContent() {
  const { filters, toggleCategory, toggleBrand, setPriceRange } = useProductFilters();
  const priceRange: [number, number] = [filters.minPrice, filters.maxPrice];

  return (
    <Accordion type="multiple" defaultValue={['category', 'brand', 'price']} className="w-full">
      <AccordionItem value="category">
        <AccordionTrigger>دسته‌بندی</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          {CATEGORIES.map((category) => (
            <Label key={category} className="flex min-h-9 cursor-pointer items-center gap-2 font-normal">
              <Checkbox checked={filters.category.includes(category)} onCheckedChange={() => toggleCategory(category)} />
              {category}
            </Label>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="brand">
        <AccordionTrigger>برند</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          {BRANDS.map((brand) => (
            <Label key={brand.name} className="flex min-h-9 cursor-pointer items-center justify-between gap-2 font-normal">
              <span className="flex items-center gap-2"><Checkbox checked={filters.brand.includes(brand.name)} onCheckedChange={() => toggleBrand(brand.name)} />{brand.name}</span>
              <span className="text-xs text-muted-foreground">({brand.count})</span>
            </Label>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price" className="border-b-0">
        <AccordionTrigger>محدوده قیمت</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 pt-2 pb-4">
          <Slider min={PRICE_BOUNDS.min} max={PRICE_BOUNDS.max} step={100_000} value={priceRange} onValueChange={(value) => setPriceRange(value as [number, number])} />
          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{formatPrice(priceRange[0])} تومان</span>
            <span>{formatPrice(priceRange[1])} تومان</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
