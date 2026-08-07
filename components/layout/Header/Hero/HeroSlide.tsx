import Image from 'next/image';

interface HeroSlideProps {
  image: string;
}

export default function HeroSlide({ image }: HeroSlideProps) {
  return (
    <article className="relative h-113 w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={image.split('/')?.[2]}
        fill
        priority
        className="object-cover"
      />
    </article>
  );
}
