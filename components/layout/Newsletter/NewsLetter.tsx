export default function Newsletter() {
  return (
    <section className="my-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-sm font-bold text-gray-900">
            از جدیدترین تخفیف‌ها مطلع شوید
          </h2>

          <p className="mt-1 text-[10px] text-gray-400">
            ایمیل خود را وارد کنید تا جدیدترین پیشنهادها را برایتان ارسال کنیم.
          </p>
        </div>

        <form className="flex w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="ایمیل شما"
            className="h-10 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-xs outline-none transition-colors placeholder:text-gray-400 focus:border-blue-400"
          />

          <button
            type="submit"
            className="h-10 rounded-lg bg-blue-600 px-5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
          >
            عضویت
          </button>
        </form>
      </div>
    </section>
  );
}
