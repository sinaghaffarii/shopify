import { ChevronLeft } from 'lucide-react';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
  last?: boolean;
}

export function InfoRow({
  icon,
  label,
  value,
  valueClassName = 'text-primary',
  last = false,
}: InfoRowProps) {
  return (
    <div
      className={`
        flex
        items-center
        gap-3
        py-3
        ${!last ? 'border-b border-dashed border-gray-200' : ''}
      `}
    >
      <div className="flex size-5 shrink-0 items-center justify-center text-gray-500">
        {icon}
      </div>

      <div className="flex items-center gap-1 text-xs">
        <span className="text-gray-500">{label}</span>

        <ChevronLeft className="size-3 text-gray-400" />

        <span className={valueClassName}>{value}</span>
      </div>
    </div>
  );
}
