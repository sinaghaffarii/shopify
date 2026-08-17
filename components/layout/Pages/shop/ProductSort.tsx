'use client';

import { ArrowDownUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { SORT_OPTIONS, useProductFilters } from '@/hooks/use-product-filters';

export default function ProductSort() {
  const { filters, setFilters } = useProductFilters();

  const activeLabel =
    SORT_OPTIONS.find((option) => option.value === filters.sort)?.label ??
    'مرتب‌سازی';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="w-fit gap-2 rounded-md"
        >
          <ArrowDownUp className="size-4" />

          <span>{activeLabel}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={6} className="w-52">
        <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={filters.sort}
          onValueChange={(value) => {
            setFilters({
              sort: value as typeof filters.sort,
            });
          }}
        >
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
