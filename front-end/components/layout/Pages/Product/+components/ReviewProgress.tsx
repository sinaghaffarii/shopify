import { formatPrice } from '@/utils/helpers';

interface ReviewProgressProps {
  label: string;
  value: number;
  color: string;
  textColor: string;
}

export function ReviewProgress({
  label,
  value,
  color,
  textColor,
}: ReviewProgressProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-14 shrink-0 text-sm font-semibold ${textColor}`}>
        {label}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      <span className="w-16 shrink-0 text-left text-xs text-gray-500">
        {formatPrice(value)}٪
      </span>
    </div>
  );
}
