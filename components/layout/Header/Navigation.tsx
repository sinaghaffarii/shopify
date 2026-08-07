'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return <>{isDesktop ? <DesktopNavigation /> : <MobileNavigation />}</>;
};

export default Navigation;
