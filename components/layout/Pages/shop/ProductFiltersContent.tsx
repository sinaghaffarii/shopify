'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

import { PRICE_BOUNDS, useProductFilters } from '@/hooks/use-product-filters';

const CATEGORIES = [
  'پوشاک',
  'کفش',
  'اکسسوری',
  'لوازم دیجیتال',
  'زیبایی و سلامت',
];

const BRANDS = [
  { name: 'سامسونگ', count: 24 },
  { name: 'اپل', count: 18 },
  { name: 'شیائومی', count: 31 },
  { name: 'ال‌جی', count: 9 },
  { name: 'سونی', count: 12 },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat('fa-IR').format(value);
}

export default function ProductFilterContent() {
  const { filters, toggleCategory, toggleBrand, setPriceRange } =
    useProductFilters();

  const priceRange: [number, number] = [filters.minPrice, filters.maxPrice];

  return (
    <Accordion
      type="multiple"
      defaultValue={['category', 'brand', 'price']}
      className="w-full"
    >
      {/* Category */}

      <AccordionItem value="category">
        <AccordionTrigger>دسته‌بندی</AccordionTrigger>

        <AccordionContent className="flex flex-col gap-3">
          {CATEGORIES.map((category) => (
            <Label
              key={category}
              className="flex items-center gap-2 font-normal"
            >
              <Checkbox
                checked={filters.category.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />

              {category}
            </Label>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Brand */}

      <AccordionItem value="brand">
        <AccordionTrigger>برند</AccordionTrigger>

        <AccordionContent className="flex flex-col gap-3">
          {BRANDS.map((brand) => (
            <Label
              key={brand.name}
              className="flex items-center justify-between gap-2 font-normal"
            >
              <span className="flex items-center gap-2">
                <Checkbox
                  checked={filters.brand.includes(brand.name)}
                  onCheckedChange={() => toggleBrand(brand.name)}
                />

                {brand.name}
              </span>

              <span className="text-xs text-muted-foreground">
                ({brand.count})
              </span>
            </Label>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Price */}

      <AccordionItem value="price" className="border-b-0">
        <AccordionTrigger>محدوده قیمت</AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 pt-2">
          <Slider
            min={PRICE_BOUNDS.min}
            max={PRICE_BOUNDS.max}
            step={100_000}
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value as [number, number]);
            }}
          />

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])} تومان</span>

            <span>{formatPrice(priceRange[1])} تومان</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
