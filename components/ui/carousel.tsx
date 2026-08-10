'use client';

import * as React from 'react';

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

type CarouselApi = UseEmblaCarouselType[1];

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

type CarouselOptions = UseCarouselParameters[0];

type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;

  /**
   * تعداد اسلایدهای قابل‌مشاهده هم‌زمان.
   * مثال: 3
   */
  slidesPerView?: number | 'auto';

  /**
   * تعداد اسلاید قابل‌مشاهده بر اساس سایز صفحه.
   */
  breakpoints?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    wide?: number;
  };

  /**
   * فاصله بین اسلایدها (px).
   */
  spaceBetween?: number;

  /**
   * فعال‌سازی حلقه بی‌نهایت.
   */
  loop?: boolean;

  /**
   * فعال‌سازی پخش خودکار.
   */
  autoplay?: boolean;

  /**
   * تأخیر پخش خودکار (میلی‌ثانیه).
   */
  autoplayDelay?: number;

  /**
   * نمایش دکمه‌های قبلی/بعدی.
   */
  navigation?: boolean;

  /**
   * محل قرارگیری دکمه‌های ناوبری.
   */
  navigationPosition?: 'inside' | 'outside';

  /**
   * مخفی کردن دکمه‌های ناوبری در موبایل.
   */
  hideNavigationOnMobile?: boolean;

  /**
   * نمایش نقاط صفحه‌بندی (pagination).
   */
  pagination?: boolean;

  /**
   * ارتفاع کاروسل.
   */
  height?: string;

  /**
   * حداقل ارتفاع کاروسل.
   */
  minHeight?: string;

  /**
   * کلاس اضافی برای آیتم‌های کاروسل.
   */
  itemClassName?: string;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];

  api: CarouselApi;

  scrollPrev: () => void;

  scrollNext: () => void;

  scrollTo: (index: number) => void;

  canScrollPrev: boolean;

  canScrollNext: boolean;

  selectedIndex: number;

  scrollSnapCount: number;

  orientation: 'horizontal' | 'vertical';

  slidesPerView: number | 'auto';

  breakpoints?: CarouselProps['breakpoints'];

  spaceBetween: number;

  navigation: boolean;

  navigationPosition: 'inside' | 'outside';

  hideNavigationOnMobile: boolean;

  pagination: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

/**
 * تبدیل تعداد اسلاید به درصد basis؛ 'auto' همون‌طور که هست باقی می‌مونه.
 */
function getBasis(slides: number | 'auto') {
  return slides === 'auto' ? 'auto' : `${100 / slides}%`;
}

/**
 * وضعیت اسکرول/انتخاب کاروسل رو با subscribe شدن به رویدادهای
 * embla از طریق useSyncExternalStore می‌خونه. این روش، برخلاف
 * ترکیب useState + useEffect که setState رو مستقیم صدا می‌زد،
 * الگوی توصیه‌شده‌ی React برای sync کردن با یک external store است.
 */
function useEmblaState(api: CarouselApi) {
  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      if (!api) return () => {};

      api.on('select', onStoreChange);
      api.on('reInit', onStoreChange);

      return () => {
        api.off('select', onStoreChange);
        api.off('reInit', onStoreChange);
      };
    },
    [api]
  );

  const canScrollPrev = React.useSyncExternalStore(
    subscribe,
    () => api?.canScrollPrev() ?? false,
    () => false
  );

  const canScrollNext = React.useSyncExternalStore(
    subscribe,
    () => api?.canScrollNext() ?? false,
    () => false
  );

  const selectedIndex = React.useSyncExternalStore(
    subscribe,
    () => api?.selectedScrollSnap() ?? 0,
    () => 0
  );

  const scrollSnapCount = React.useSyncExternalStore(
    subscribe,
    () => api?.scrollSnapList().length ?? 0,
    () => 0
  );

  return { canScrollPrev, canScrollNext, selectedIndex, scrollSnapCount };
}

function Carousel({
  orientation = 'horizontal',

  opts,

  setApi,

  plugins = [],

  slidesPerView = 1,

  breakpoints,

  spaceBetween = 16,

  loop = false,

  autoplay = false,

  autoplayDelay = 5000,

  navigation = false,

  navigationPosition = 'inside',

  hideNavigationOnMobile = false,

  pagination = false,

  height = 'auto',

  minHeight,

  itemClassName,

  className,

  children,

  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  /*
   * پلاگین autoplay فقط یک بار ساخته می‌شود (lazy state، نه ref، چون
   * خوندن ref در حین render مجاز نیست) و همیشه در لیست پلاگین‌های
   * embla حضور دارد. روشن/خاموش شدنش بعداً از طریق play()/stop()
   * کنترل می‌شود، نه با اضافه/حذف کردنش از آرایه‌ی پلاگین‌ها — این کار
   * مانع از ری‌اینیت ناخواسته‌ی کل کاروسل هنگام تغییر prop می‌شود.
   */
  const [autoplayPlugin] = React.useState(() =>
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const finalPlugins = React.useMemo(
    () => [...plugins, autoplayPlugin],
    [plugins, autoplayPlugin]
  );

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      loop,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    finalPlugins
  );

  const { canScrollPrev, canScrollNext, selectedIndex, scrollSnapCount } =
    useEmblaState(api);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);

  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const scrollTo = React.useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );

  React.useEffect(() => {
    setApi?.(api);
  }, [api, setApi]);

  // روشن/خاموش کردن autoplay بر اساس prop، بدون ری‌اینیت کاروسل.
  // با کمتر از ۲ اسلاید (مثلاً هنگام لود شدن دیتا) اصلاً play() صدا زده نمی‌شود،
  // چون پلاگین autoplay با آرایه‌ی خالی/تک‌عضوی خطا می‌دهد.
  React.useEffect(() => {
    if (!api) return;

    if (autoplay && scrollSnapCount > 1) {
      autoplayPlugin.play();
    } else {
      autoplayPlugin.stop();
    }
  }, [api, autoplay, autoplayPlugin, scrollSnapCount]);

  const mobileSlides = breakpoints?.mobile ?? slidesPerView;
  const tabletSlides = breakpoints?.tablet ?? mobileSlides;
  const desktopSlides = breakpoints?.desktop ?? tabletSlides;
  const wideSlides = breakpoints?.wide ?? desktopSlides;

  const style = {
    height,
    minHeight,
    '--carousel-mobile-basis': getBasis(mobileSlides),
    '--carousel-tablet-basis': getBasis(tabletSlides),
    '--carousel-desktop-basis': getBasis(desktopSlides),
    '--carousel-wide-basis': getBasis(wideSlides),
    '--carousel-gap': `${spaceBetween}px`,
  } as React.CSSProperties;

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,

        api,

        opts,

        orientation,

        scrollPrev,

        scrollNext,

        scrollTo,

        canScrollPrev,

        canScrollNext,

        selectedIndex,

        scrollSnapCount,

        slidesPerView,

        breakpoints,

        spaceBetween,

        navigation,

        navigationPosition,

        hideNavigationOnMobile,

        pagination,

        itemClassName,
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        className={cn('relative w-full', className)}
        style={style}
        {...props}
      >
        {navigation && navigationPosition === 'outside' && (
          <div
            className={cn(
              'shrink-0',
              hideNavigationOnMobile ? 'hidden md:flex' : 'flex'
            )}
          >
            <CarouselPrevious className="static translate-y-0" />
          </div>
        )}

        <div
          className={cn(
            'h-full',
            navigation && navigationPosition === 'outside' && 'min-w-0 flex-1'
          )}
        >
          {children}
        </div>

        {navigation && navigationPosition === 'outside' && (
          <div
            className={cn(
              'shrink-0',
              hideNavigationOnMobile ? 'hidden md:flex' : 'flex'
            )}
          >
            <CarouselNext className="static translate-y-0" />
          </div>
        )}

        {pagination && <CarouselPagination />}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation, spaceBetween } = useCarousel();

  return (
    <div ref={carouselRef} className="h-full overflow-hidden">
      <div
        data-slot="carousel-content"
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          className
        )}
        style={{ gap: `${spaceBetween}px` }}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation, itemClassName } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0',
        orientation === 'horizontal'
          ? 'basis-(--carousel-mobile-basis)'
          : 'basis-auto',
        'md:basis-(--carousel-tablet-basis)',
        'lg:basis-(--carousel-desktop-basis)',
        'min-[1440px]:basis-(--carousel-wide-basis)',
        itemClassName,
        className
      )}
      {...props}
    />
  );
}

const NAV_BUTTON_BASE =
  'size-8 shrink-0 rounded-full border border-gray-200/80 bg-white/80 text-gray-700 shadow-[0_3px_10px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] active:scale-95 md:size-9';

type CarouselNavButtonProps = React.ComponentProps<typeof Button> & {
  side: 'left' | 'right';
};

/**
 * استایل و جای‌گیری مشترک دکمه‌های قبلی/بعدی. جهت هر دکمه (چپ/راست)
 * از بیرون تعیین می‌شود تا با جهت RTL هماهنگ بمونه.
 */
function CarouselNavButton({
  side,
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}: CarouselNavButtonProps) {
  const { orientation, navigationPosition, hideNavigationOnMobile } =
    useCarousel();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(
        NAV_BUTTON_BASE,
        navigationPosition === 'inside' &&
          orientation === 'horizontal' &&
          (side === 'right'
            ? 'absolute right-3 top-1/2 z-30 -translate-y-1/2'
            : 'absolute left-3 top-1/2 z-30 -translate-y-1/2'),
        navigationPosition === 'outside' && 'static',
        hideNavigationOnMobile && 'hidden md:flex',
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious(props: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <CarouselNavButton
      side="right"
      data-slot="carousel-previous"
      aria-label="قبلی"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowRight className="size-5" />
      <span className="sr-only">قبلی</span>
    </CarouselNavButton>
  );
}

function CarouselNext(props: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <CarouselNavButton
      side="left"
      data-slot="carousel-next"
      aria-label="بعدی"
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowLeft className="size-5" />
      <span className="sr-only">بعدی</span>
    </CarouselNavButton>
  );
}

function CarouselPagination() {
  const { scrollTo, selectedIndex, scrollSnapCount } = useCarousel();

  if (scrollSnapCount <= 1) {
    return null;
  }

  return (
    <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
      {Array.from({
        length: scrollSnapCount,
      }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`رفتن به اسلاید ${index + 1}`}
          aria-current={selectedIndex === index ? 'true' : undefined}
          onClick={() => scrollTo(index)}
          className={cn(
            'h-2 rounded-full transition-all duration-300',
            selectedIndex === index
              ? 'w-5 bg-primary'
              : 'w-2 bg-gray-300 hover:bg-gray-400'
          )}
        />
      ))}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
  useCarousel,
};
