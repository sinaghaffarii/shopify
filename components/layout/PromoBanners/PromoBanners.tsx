import PromoBanner from './PromoBanner';
import { promoBanners } from './promo.data';

export default function PromoBanners() {
  return (
    <section className="my-10 md:my-18">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {promoBanners.map((banner) => (
          <PromoBanner key={banner.id} {...banner} />
        ))}
      </div>
    </section>
  );
}
