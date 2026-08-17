import { UserRound, Dumbbell, Footprints, Sparkles, Gem } from 'lucide-react';

export const categories = [
  {
    id: 1,
    name: 'کالکشن مردانه',
    icon: UserRound,
    href: '/collection/men',
  },
  {
    id: 2,
    name: 'کالکشن زنانه',
    icon: UserRound,
    href: '/collection/women',
  },
  {
    id: 3,
    name: 'کالکشن اسپورت',
    icon: Dumbbell,
    href: '/collection/sport',
  },
  {
    id: 4,
    name: 'کالکشن کفش',
    icon: Footprints,
    href: '/collection/shoes',
  },
  {
    id: 5,
    name: 'کالکشن عطر و ادکلن',
    icon: Sparkles,
    href: '/collection/perfume',
  },
  {
    id: 6,
    name: 'کالکشن اکسسوری',
    icon: Gem,
    href: '/collection/accessories',
  },
] as const;
