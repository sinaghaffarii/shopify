import { features } from '@/components/layout/ServiceFeatures/service.data';

export default function Features() {
  return (
    <section className="container mt-8 text-[#1B1F22] dark:text-gray-100">
      <div className="my-10 rounded-3xl border border-gray-200 bg-[#f5f8fa] px-6 py-8 dark:border-gray-700 dark:bg-gray-800 md:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center md:h-[50px] md:w-[50px]">
                  <Icon
                    className="h-7 w-7 text-[#495666] md:h-9 md:w-9"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="line-clamp-1 text-[12px] font-bold text-[#495666] md:text-[16px]">
                    {feature.title}
                  </span>

                  <span className="line-clamp-1 text-[10px] font-bold text-gray-500 dark:text-gray-400 md:text-[12px]">
                    {feature.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
