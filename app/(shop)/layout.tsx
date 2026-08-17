import Footer from '@/components/layout/Footer/Footer';
import Navigation from '@/components/layout/Header/Navigation';

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
