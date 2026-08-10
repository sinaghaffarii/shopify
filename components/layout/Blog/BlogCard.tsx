import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock3, Eye, Heart } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt?: string;
  image: string;
  href: string;
  category?: string;
  readTime: string;
  views?: number;
  likes?: number;
}

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('fa-IR').format(value);
};

export default function BlogCard({
  title,
  excerpt,
  image,
  href,
  category = 'مقالات',
  readTime,
  views = 0,
  likes = 0,
}: BlogCardProps) {
  return (
    <article
      className="
        group
        relative
        isolate
        overflow-hidden
        rounded-2xl
        border
        border-white/20
        bg-gray-100
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <Link href={href} className="relative block aspect-[4/5] overflow-hidden">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-105
            group-hover:blur-[2px]
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[65%]
            bg-gradient-to-t
            from-black/80
            via-black/35
            to-transparent
          "
        />

        {/* Category */}
        <div className="absolute right-3 top-3">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/30
              bg-white/20
              px-2.5
              py-1
              text-[10px]
              font-medium
              text-white
              shadow-sm
              backdrop-blur-md
            "
          >
            {category}
          </span>
        </div>

        {/* Glass Content */}
        <div
          className="
            absolute
            inset-x-3
            bottom-3
            rounded-xl
            border
            border-white/20
            bg-white/15
            p-3
            text-white
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:bg-white/25
            group-hover:backdrop-blur-lg
          "
        >
          {/* Title */}
          <h3
            className="
              line-clamp-2
              text-sm
              font-bold
              leading-6
              text-white
            "
          >
            {title}
          </h3>

          {/* Optional excerpt */}
          {excerpt && (
            <p
              className="
                mt-1
                line-clamp-1
                text-[10px]
                leading-5
                text-white/70
              "
            >
              {excerpt}
            </p>
          )}

          {/* Stats */}
          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              border-t
              border-white/15
              pt-2.5
            "
          >
            <div className="flex items-center gap-3 text-[9px] text-white/70">
              {/* Views */}
              <span className="inline-flex items-center gap-1">
                <Eye className="size-3" />
                {formatNumber(views)}
              </span>

              {/* Likes */}
              <span className="inline-flex items-center gap-1">
                <Heart className="size-3" />
                {formatNumber(likes)}
              </span>

              {/* Read time */}
              <span className="inline-flex items-center gap-1">
                <Clock3 className="size-3" />
                {readTime}
              </span>
            </div>

            {/* Read article */}
            <span
              className="
                inline-flex
                items-center
                gap-1
                text-[9px]
                font-medium
                text-white
                transition-all
                duration-300
                group-hover:gap-1.5
              "
            >
              مطالعه
              <ArrowLeft
                className="
                  size-3
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
