interface SectionHeaderProps {
  number: string;
  title: string;
}

export function ProductSectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
        {number}
      </span>

      <h2 className="text-lg font-extrabold text-gray-800">{title}</h2>

      <span className="h-px flex-1 bg-linear-to-l from-gray-200 to-transparent" />
    </div>
  );
}
