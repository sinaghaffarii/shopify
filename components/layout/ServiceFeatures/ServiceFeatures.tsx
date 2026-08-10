import { serviceFeatures } from './service.data';

export default function ServiceFeatures() {
  return (
    <section className="my-8">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-white md:grid-cols-4">
        {serviceFeatures.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-5
                sm:px-6
                ${index !== 0 ? 'border-r border-gray-100' : ''}
                max-md:[&:nth-child(3)]:border-t
                max-md:[&:nth-child(4)]:border-t
              `}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon className="size-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-800 sm:text-sm">
                  {feature.title}
                </h3>

                <p className="mt-1 text-[9px] text-gray-400 sm:text-[10px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
