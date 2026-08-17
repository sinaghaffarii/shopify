import { useSyncExternalStore } from 'react';

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') {
        return () => {}; // در سمت سرور هیچ کاری نکن
      }
      const media = window.matchMedia(query);
      media.addEventListener('change', callback);
      return () => media.removeEventListener('change', callback);
    },
    () => {
      if (typeof window === 'undefined') return false;
      return window.matchMedia(query).matches;
    },
    () => false // مقدار پیش‌فرض برای SSR
  );
}
