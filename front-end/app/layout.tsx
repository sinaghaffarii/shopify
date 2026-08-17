import type { Metadata } from 'next';

import './globals.css';
import './kalameh-font-face.css';
import './vazirmatn-font-face.css';
import { NuqsAdapter } from 'nuqs/adapters/next';

export const metadata: Metadata = {
  title: 'Shopify | استایل همیشه',
  description: 'فروشگاه تخصصی شلوار لی و استایل روزمره',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fa" dir="rtl" className="antialiased" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f7f8fa]">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
