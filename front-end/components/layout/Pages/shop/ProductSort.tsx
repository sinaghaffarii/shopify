'use client';

import { ArrowDownUp, Check } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SORT_OPTIONS, useProductFilters } from '@/hooks/use-product-filters';

export default function ProductSort() {
  const { filters, setFilters } = useProductFilters();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeLabel = SORT_OPTIONS.find((option) => option.value === filters.sort)?.label ?? 'مرتب‌سازی';

  const changeSort = (value: string) => {
    setFilters({ sort: value as typeof filters.sort });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline" className="h-9 gap-2 rounded-md">
              <ArrowDownUp className="size-4" />
              <span>{activeLabel}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={6} className="w-52 rounded-md">
            <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={filters.sort} onValueChange={changeSort}>
              {SORT_OPTIONS.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value} className="rounded-md">
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="md:hidden">
        <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline" className="h-9 gap-2 rounded-md">
              <ArrowDownUp className="size-4" />
              <span>{activeLabel}</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[calc(100%-1.5rem)] rounded-md p-0" showCloseButton>
            <div className="border-b px-4 py-4">
              <DialogTitle className="text-base font-bold">مرتب‌سازی محصولات</DialogTitle>
            </div>
            <div className="grid gap-1 p-3">
              {SORT_OPTIONS.map((option) => {
                const active = filters.sort === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => changeSort(option.value)}
                    className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm transition-colors hover:bg-muted"
                  >
                    <span>{option.label}</span>
                    {active && <Check className="size-4 text-primary" />}
                  </button>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
