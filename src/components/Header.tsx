"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "회사소개",
    href: "/company/greeting",
    matchPath: "/company",
    children: [
      { label: "인사말", href: "/company/greeting" },
      { label: "허가 인증서", href: "/company/certificate" },
      { label: "사업장소개", href: "/company/factory" },
    ],
  },
  {
    label: "제품소개",
    href: "/product/general",
    matchPath: "/product",
    children: [
      { label: "일반가스", href: "/product/general" },
      { label: "의료용가스", href: "/product/medical" },
      { label: "액체가스", href: "/product/liquid" },
      { label: "특수가스", href: "/product/special" },
      { label: "LPG", href: "/product/lpg" },
    ],
  },
  // 고객지원은 추후 관리자 CRUD 연결 시 활성화 예정
  // {
  //   label: "고객지원",
  //   href: "/support/archive",
  //   matchPath: "/support",
  //   children: [
  //     { label: "자료실", href: "/support/archive" },
  //     { label: "MSDS", href: "/support/msds" },
  //   ],
  // },
  {
    label: "상담문의",
    href: "/inquiry",
    matchPath: "/inquiry",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--brand-blue-soft)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold">
          <img
            src="/images/common/logo.png"
            alt="원가스"
            className="h-12 w-auto"
          />
          {/* <span className="hidden sm:inline">원가스</span> */}
        </Link>

        <nav className="hidden items-center gap-10 text-base font-medium lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`py-4 ${
                  pathname?.startsWith(item.matchPath)
                    ? "text-[color:var(--brand-blue)] font-semibold"
                    : "text-neutral-600 hover:text-[color:var(--brand-blue-dark)]"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-1/2 top-full hidden w-48 -translate-x-1/2 rounded-xl border border-[color:var(--brand-blue-soft)] bg-white p-3 text-sm shadow-lg group-hover:block">
                  <div className="space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-2 py-1 hover:bg-neutral-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center px-2 py-1 text-sm font-semibold text-[color:var(--brand-blue)]">
            <span className="text-2xl leading-none">≡</span>
          </summary>
          <div className="absolute right-0 top-12 w-64 rounded-2xl border border-[color:var(--brand-blue-soft)] bg-white p-4 text-base shadow-lg">
            <nav className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link href={item.href} className="font-semibold">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="space-y-1 pl-2 text-sm text-neutral-600">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
