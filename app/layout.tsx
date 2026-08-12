import type { Metadata } from 'next';

import './globals.css';
import './kalameh-font-face.css';
import './vazirmatn-font-face.css';

import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer/Footer';

export const metadata: Metadata = {
  title: 'JEANIC | استایل همیشه',
  description: 'فروشگاه تخصصی شلوار لی و استایل روزمره',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fa" dir="rtl" className="antialiased" suppressHydrationWarning>
      <body className="min-h-screen bg-white" suppressHydrationWarning>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
