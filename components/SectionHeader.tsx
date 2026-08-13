import Link from 'next/link';
import { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  href?: string;
  linkText?: string;
  icon: ReactNode;
};

const SectionHeader = ({
  title,
  href = '/',
  linkText = 'نمایش همه',
  icon,
}: SectionHeaderProps) => {
  return (
    <header className="flex items-center justify-start gap-3 mb-4">
      <div className="flex w-fit items-center justify-center rounded-lg border bg-white p-2">
        {icon}
      </div>

      <div className="flex items-start justify-start flex-col">
        <h1 className="text-sm font-semibold md:text-base lg:text-xl">
          {title}
        </h1>

        <Link href={href} className="text-xs opacity-60">
          {linkText}
        </Link>
      </div>
    </header>
  );
};

export default SectionHeader;
