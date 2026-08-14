/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductFeature {
  label: string;
  value: string;
}

interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  englishTitle?: string;

  category: {
    name: string;
    href: string;
  };

  images: ProductImage[];

  price: number;
  oldPrice?: number;
  discount?: number;

  brand?: string;

  rating: number;
  reviewCount: number;
  likePercentage: number;

  features: ProductFeature[];
  specifications: ProductSpecification[];

  guarantee?: string;
  shippingTime?: string;
  availability: 'available' | 'unavailable';

  notice?: string;

  description: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    advantages?: string[];
    disadvantages?: string[];
    conclusion?: string;
  };
}
