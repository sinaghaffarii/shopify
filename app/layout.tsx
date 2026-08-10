import type { Metadata } from 'next';

import './globals.css';
import './kalameh-font-face.css';

import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer/Footer';

export const metadata: Metadata = {
  title: 'لباسینو',
  description: 'فروشگاه آنلاین پوشاک و اکسسوری',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
