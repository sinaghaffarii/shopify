import Image from 'next/image';

interface HeroBannerProps {
  image: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function HeroBanner({
  image,
  alt,
  priority = false,
  sizes = '100vw',
  className = '',
}: HeroBannerProps) {
  return (
    <div
      className={`
        relative
        h-full
        min-h-40
        w-full
        overflow-hidden
        rounded-xl
        ${className}
      `}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      ّ
    </div>
  );
}
