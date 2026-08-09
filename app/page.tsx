import Categories from '@/components/layout/Categories';
import Hero from '@/components/layout/Header/Hero/Hero';

export default function Home() {
  return (
    <main className="container mx-auto w-[95%] max-w-325 min-h-screen">
      <Hero />
      <Categories />
    </main>
  );
}
