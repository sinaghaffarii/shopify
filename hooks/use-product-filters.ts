'use client';

import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from 'nuqs';

export const SORT_OPTIONS = [
  {
    value: 'newest',
    label: 'جدیدترین',
  },
  {
    value: 'popular',
    label: 'محبوب‌ترین',
  },
  {
    value: 'best-selling',
    label: 'پرفروش‌ترین',
  },
  {
    value: 'cheapest',
    label: 'ارزان‌ترین',
  },
  {
    value: 'most-expensive',
    label: 'گران‌ترین',
  },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]['value'];

const SORT_VALUES = SORT_OPTIONS.map((option) => option.value) as [
  SortValue,
  ...SortValue[],
];

export const PRICE_BOUNDS = {
  min: 0,
  max: 20_000_000,
};

const filterParsers = {
  category: parseAsArrayOf(parseAsString).withDefault([]),

  brand: parseAsArrayOf(parseAsString).withDefault([]),

  sort: parseAsStringLiteral(SORT_VALUES).withDefault('newest'),

  minPrice: parseAsInteger.withDefault(PRICE_BOUNDS.min),

  maxPrice: parseAsInteger.withDefault(PRICE_BOUNDS.max),
};

export function useProductFilters() {
  const [filters, setFilters] = useQueryStates(filterParsers, {
    shallow: true,
  });

  function toggleCategory(value: string) {
    setFilters((prev) => ({
      category: prev.category.includes(value)
        ? prev.category.filter((item) => item !== value)
        : [...prev.category, value],
    }));
  }

  function toggleBrand(value: string) {
    setFilters((prev) => ({
      brand: prev.brand.includes(value)
        ? prev.brand.filter((item) => item !== value)
        : [...prev.brand, value],
    }));
  }

  function setPriceRange(range: [number, number]) {
    setFilters({
      minPrice: range[0],
      maxPrice: range[1],
    });
  }

  function removeCategory(value: string) {
    setFilters((prev) => ({
      category: prev.category.filter((item) => item !== value),
    }));
  }

  function removeBrand(value: string) {
    setFilters((prev) => ({
      brand: prev.brand.filter((item) => item !== value),
    }));
  }

  function resetPrice() {
    setFilters({
      minPrice: null,
      maxPrice: null,
    });
  }

  function reset() {
    setFilters(null);
  }

  const activeFiltersCount =
    filters.category.length +
    filters.brand.length +
    (filters.minPrice !== PRICE_BOUNDS.min ||
    filters.maxPrice !== PRICE_BOUNDS.max
      ? 1
      : 0);

  return {
    filters,
    setFilters,
    toggleCategory,
    toggleBrand,
    setPriceRange,
    removeCategory,
    removeBrand,
    resetPrice,
    reset,
    activeFiltersCount,
  };
}
