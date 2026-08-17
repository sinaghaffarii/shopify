import ProductPage from '@/components/layout/Pages/Product/ProductPage';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function page({ params }: ProductPageProps) {
  const { slug } = await params;

  return <ProductPage key={slug} />;
}
