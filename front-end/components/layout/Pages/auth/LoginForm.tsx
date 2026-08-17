'use client';

import { ChevronRight, UserCircle } from 'lucide-react';
import { useState } from 'react';

type LoginMethod = 'phone' | 'password';

export default function LoginForm() {
  const [method, setMethod] = useState<LoginMethod>('phone');

  return (
    <section className="relative w-full max-w-[436px] overflow-hidden rounded-[28px] border border-white/60 bg-white px-6 py-12 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.08)]">
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />

      <button
        type="button"
        className="absolute right-5 top-5 flex h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary active:scale-95"
      >
        <ChevronRight className="size-4" />
        بازگشت
      </button>

      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <span className="text-2xl text-primary">
              <UserCircle />
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-800">
            ورود و عضویت
          </h1>
        </div>

        <div className="mt-10">
          <div className="flex rounded-2xl bg-gray-100 p-1.5">
            <button
              type="button"
              onClick={() => setMethod('phone')}
              className={`h-11 flex-1 rounded-xl text-sm font-medium transition ${
                method === 'phone'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              شماره موبایل
            </button>

            <button
              type="button"
              onClick={() => setMethod('password')}
              className={`h-11 flex-1 rounded-xl text-sm font-medium transition ${
                method === 'password'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              نام کاربری
            </button>
          </div>

          {method === 'phone' ? <PhoneLogin /> : <PasswordLogin />}
        </div>
      </div>
    </section>
  );
}

function PhoneLogin() {
  return (
    <form className="mt-6 flex flex-col gap-5">
      <div>
        <label
          htmlFor="phone"
          className="pr-1 text-[11px] font-medium text-gray-500"
        >
          شماره موبایل
        </label>

        <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10">
          <span className="text-gray-400">☎</span>

          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            dir="ltr"
            placeholder="09129123535"
            className="w-full bg-transparent text-right text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
      >
        دریافت کد ورود
      </button>

      <Terms />
    </form>
  );
}

function PasswordLogin() {
  return (
    <form className="mt-6 flex flex-col gap-5">
      <div>
        <label
          htmlFor="username"
          className="pr-1 text-[11px] font-medium text-gray-500"
        >
          نام کاربری یا ایمیل
        </label>

        <input
          id="username"
          name="username"
          type="text"
          placeholder="نام کاربری یا ایمیل"
          className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="pr-1 text-[11px] font-medium text-gray-500"
        >
          رمز عبور
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
        />
      </div>

      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 text-gray-500">
          <input type="checkbox" />
          مرا به خاطر بسپار
        </label>

        <button type="button" className="text-primary hover:underline">
          فراموشی رمز عبور
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
      >
        ورود
      </button>

      <Terms />
    </form>
  );
}

function Terms() {
  return (
    <p className="mt-2 text-center text-[11px] text-gray-400">
      ورود و عضویت شما به معنای پذیرش شرایط و قوانین است.
    </p>
  );
}
