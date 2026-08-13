import Image from 'next/image';
import Link from 'next/link';
import { Send, Play, Phone, Mail, Code2 } from 'lucide-react';
import Instagram from '@/components/ui/icons/Instagram';

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const quickLinks = [
  {
    title: 'پنل کاربری',
    href: '/account',
  },
  {
    title: 'پشتیبانی',
    href: '/support',
  },
  {
    title: 'دسته ها',
    href: '/cats',
  },
  {
    title: 'سوالات متداول',
    href: '/faq',
  },
];

const popularLinks = [
  {
    title: 'کالکشن مردانه',
    href: '/',
  },
  {
    title: 'کالکشن زنانه',
    href: '/',
  },
  {
    title: 'کالکشن کودکان',
    href: '/',
  },
  {
    title: 'کت و شلوار',
    href: '/product/suit',
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    label: 'Telegram',
    href: '#',
    icon: Send,
  },
  {
    label: 'Video',
    href: '#',
    icon: Play,
  },
];

/* -------------------------------------------------------------------------- */
/*                               Shared Components                            */
/* -------------------------------------------------------------------------- */

function FooterLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center border p-1.5 rounded-lg bg-white"
    >
      <Image
        src="/images/logo.jpg"
        alt="Jin Jin"
        width={172}
        height={37}
        className="h-[37px] w-auto object-contain"
      />
    </Link>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: typeof quickLinks;
}) {
  return (
    <div className="gap-2 text-sm">
      <p className="text-base font-bold tracking-wide text-white">{title}</p>

      <div className="mt-7 flex flex-col gap-3 text-[#f7f8fa]">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="
              transform
              transition-all
              hover:-translate-x-[9px]
              hover:text-white
            "
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <div
          key={label}
          className="
            flex
            items-center
            justify-center
            rounded-[8px]
            text-white
            transition-all
            hover:-translate-y-[5px]
          "
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="size-5" />
          </a>
        </div>
      ))}
    </div>
  );
}

function TrustBadge({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile
          ? `
          flex
            h-[46px]
            w-[46px]
            items-center
            justify-center
            overflow-hidden
            rounded-[13px]
            border
            border-gray-700
            shadow-none
            bg-white
          `
          : `
            flex
            size-22
            items-center
            justify-center
            overflow-hidden
            rounded-[20px]
            border
            border-gray-700
            shadow-none
            bg-white
          `
      }
    >
      <div className="relative flex h-auto w-full flex-auto flex-col overflow-hidden p-3">
        <div className="flex h-full w-full items-center justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="origin"
          >
            <Image
              src="/images/logo.jpg"
              alt="نماد اعتماد الکترونیکی"
              width={70}
              height={70}
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Desktop Footer                                */
/* -------------------------------------------------------------------------- */

function DesktopFooter() {
  return (
    <div className="footermainsec -mt-14 hidden border-t-2 border-black bg-black px-3 pt-4 text-white md:block lg:px-9">
      {/* ------------------------------------------------------------------ */}
      {/* Support Bar                                                        */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          footerToosh
          mx-auto
          mt-6
          flex
          w-full
          max-w-[1100px]
          flex-row-reverse
          items-center
          justify-between
          gap-4
          rounded-3xl
          bg-[#1c252c]
          px-6
          py-6
        "
      >
        {/* Phone */}

        <div className="flex items-center gap-8">
          <a
            href="tel:0912345678"
            className="
              boxer-tells
              flex
              cursor-pointer
              items-center
              gap-2
              transition-opacity
              hover:opacity-80
            "
          >
            <span
              className="one-number translate-y-[2px] text-[#fff]"
              dir="ltr"
              style={{ unicodeBidi: 'plaintext' }}
            >
              0912345678
            </span>

            <div className="h-[20px] w-[1px] border-l border-gray-500" />

            <span className="text-number text-lg">
              <Phone className="-translate-y-[1px] size-6" />
            </span>
          </a>
        </div>

        {/* Support Hours */}

        <span className="support translate-y-[2px] text-lg text-[#f7f8fa]">
          ما از ساعت <span className="!text-white">9</span> تا{' '}
          <span className="!text-white">12</span> پاسخگوی شما هستیم.
        </span>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Main Content                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          mx-auto
          mb-8
          grid
          max-w-[1100px]
          grid-cols-2
          gap-10
          gap-y-20
          py-14
          lg:grid-cols-3
        "
      >
        {/* ---------------------------------------------------------------- */}
        {/* Brand                                                             */}
        {/* ---------------------------------------------------------------- */}

        <div>
          <FooterLogo />

          <div className="mt-6 lg:max-w-xl">
            <p className="max-w-[70%] text-[15px] leading-7 text-[#f7f8fa]">
              تهران، خیابان پاسداران، کوچه ۲، برج میلاد
            </p>
          </div>

          {/* Social */}

          <div
            className="
              footerToosh
              mt-6
              flex
              w-fit
              gap-2
              rounded-[12px]
              bg-[#1c252c]
              p-3
            "
          >
            <SocialLinks />
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Navigation                                                        */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex gap-20">
          <FooterLinks title="دسترسی سریع" links={quickLinks} />

          <FooterLinks title="محبوب ها" links={popularLinks} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Trust Badge                                                       */}
        {/* ---------------------------------------------------------------- */}

        <div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <TrustBadge />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          mx-auto
          flex
          max-w-[1100px]
          flex-row
          items-center
          justify-between
          border-t
          border-dashed
          border-gray-500
          pb-10
          pt-6
        "
      >
        <p className="flex items-end text-xs">
          تمامی حقوق برای فروشگاه جین جین محفوظ است.
        </p>

        <div className="flex items-start justify-start gap-4">
          <Code2 className="size-[25px] pt-0.5 opacity-80" />

          <div className="flex flex-col-reverse items-start justify-center gap-1">
            <Link
              href="/"
              className="
                flex
                flex-row-reverse
                items-center
                justify-center
                gap-2
                text-xs
                transition-colors
                duration-300
                hover:text-purple-400
              "
            >
              Jin Jin
            </Link>

            <p className="text-xs text-[#f7f8fa]">طراحی توسط</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Mobile Footer                                */
/* -------------------------------------------------------------------------- */

function MobileFooter() {
  return (
    <div
      className="
        footermainsec
        mx-3
        mb-28
        mt-10
        rounded-[50px]
        border-t-2
        border-black
        bg-black
        px-3
        pt-4
        text-white
        md:hidden
      "
    >
      <div className="flex flex-col items-center justify-center">
        {/* ---------------------------------------------------------------- */}
        {/* Logo                                                             */}
        {/* ---------------------------------------------------------------- */}

        <Link href="/" className="inline-flex items-center pt-5">
          <Image
            src="/images/logo.jpg"
            alt="Jin Jin"
            width={172}
            height={37}
            className="
              h-[37px]
              max-h-[31px]
              w-full
              max-w-[172px]
              object-contain
            "
          />
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* Links                                                            */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-8 flex gap-10">
          <FooterLinks title="بخش ها" links={quickLinks} />

          <FooterLinks title="محبوب ها" links={popularLinks} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Trust Badge                                                      */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-8 flex gap-3">
          <TrustBadge mobile />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Address + Support                                                */}
        {/* ---------------------------------------------------------------- */}

        <div
          className="
            flex
            w-full
            flex-col-reverse
            items-center
            justify-between
            gap-4
            pt-5
          "
        >
          <div className="max-w-[210px]">
            <p className="text-center text-[12px] leading-5 text-[#fff]">
              تهران، خیابان پاسداران، کوچه ۲، برج میلاد
            </p>
          </div>

          <span className="support text-center text-[12px] text-[#f7f8fa]">
            ما از ساعت <span className="!text-white">9</span> تا{' '}
            <span className="!text-white">12</span> پاسخگوی شما هستیم
          </span>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Contact                                                          */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-5 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <a
              href="tel:0912345678"
              dir="ltr"
              className="
                boxer-tells
                flex
                flex-row-reverse
                items-center
                gap-1
                text-[12px]
                text-[#f7f8fa]
              "
            >
              <Phone className="size-3 text-white" />

              <span className="one-number" style={{ unicodeBidi: 'plaintext' }}>
                0912345678
              </span>
            </a>

            <a
              href="mailto:info@jinjin.ir"
              dir="ltr"
              className="
                boxer-tells
                flex
                flex-row-reverse
                items-center
                gap-1
                text-[12px]
                text-[#f7f8fa]
              "
            >
              <Mail className="size-3 text-white" />

              <span className="tow-number !text-[#f7f8fa]">info@jinjin.ir</span>
            </a>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Social                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="socials mt-4 flex gap-4">
          <SocialLinks />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          mt-6
          mb-14
          flex
          flex-col-reverse
          items-center
          justify-center
          gap-2
          border-t-[0.5px]
          border-[#f7f8fa9b]
          pb-2
          pt-3
        "
      >
        <p className="text-[10px]">
          تمامی حقوق برای فروشگاه جین جین محفوظ است.
        </p>

        <Link
          href="/"
          className="
            flex
            flex-row-reverse
            items-center
            justify-center
            gap-2
            text-[10px]
            text-[#f7f8fa]
            transition-colors
            duration-300
            hover:text-purple-400
          "
        >
          Jin Jin
          <Code2 className="size-[18px] opacity-80" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="bg-black rounded-xl md:rounded-t-xl w-[95%] md:w-full mx-auto">
      <DesktopFooter />
      <MobileFooter />
    </footer>
  );
}
