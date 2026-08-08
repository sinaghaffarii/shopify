import HeroLayout from './HeroLayout';

export default function Hero() {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto w-full max-w-360">
        <HeroLayout />
      </div>
    </section>
  );
}

// | نوع بنر                 | نسبت پیشنهادی |        سایز طراحی |
// | ----------------------- | ------------:     | ----------------: |
// | **Swiper اصلی Desktop**  |      حدود 2:1 | **1200 × 600 px** |
// | **بنر کناری Desktop**      |      حدود 1.5:1 |     **600 × 400 px** |
// | **Swiper Mobile**       |      حدود 2:1 |  **750 × 375 px** |
// | **بنر Mobile**           |       حدود 2:1 |  **750 × 375 px** |
