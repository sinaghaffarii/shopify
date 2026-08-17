import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PromoBannerProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: string;
  className?: string;
}

export default function PromoBanner({
  title,
  description,
  buttonText,
  href,
  image,
  className = '',
}: PromoBannerProps) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        isolate
        flex
        min-h-44
        overflow-hidden
        rounded-2xl
        border
        border-black/5
        bg-gray-100
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-lg
        ${className}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            object-center
            transition-all
            duration-500
            ease-out
            group-hover:scale-105
            group-hover:blur-[4px]
          "
        />

        {/* Dark / White overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-white/90
            via-white/45
            to-transparent
            transition-all
            duration-500
            group-hover:from-white/95
            group-hover:via-white/60
          "
        />
      </div>

      {/* Glass Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          items-center
          p-4
          sm:p-5
        "
      >
        <div
          className="
            max-w-[75%]
            rounded-xl
            border
            border-white/50
            bg-white/45
            p-4
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:bg-white/65
            group-hover:shadow-md
          "
        >
          <h3 className="text-sm font-bold text-gray-900 sm:text-base">
            {title}
          </h3>

          <p className="mt-1.5 text-[10px] leading-5 text-gray-700 sm:text-xs">
            {description}
          </p>

          <span
            className="
              mt-3
              inline-flex
              items-center
              gap-1
              rounded-lg
              border
              border-gray-900/10
              bg-white/60
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-gray-800
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:shadow-sm
            "
          >
            {buttonText}

            <ArrowLeft
              className="
                size-3.5
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
