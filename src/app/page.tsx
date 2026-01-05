import Link from "next/link";
import MainSlider from "@/components/MainSlider";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <MainSlider />

      <section className="text-center">
        <div className="inline-flex items-center justify-center rounded-sm bg-[color:var(--brand-blue)] px-12 py-5 text-2xl font-semibold text-white">
          GMP 인증업체
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <img
            src="/images/main/gmp.png"
            alt="GMP 인증"
            className="h-20 w-auto object-contain"
          />
          <p className="text-base font-medium text-neutral-800">
            의약품 제조 및 품질관리기준 적합판정서 획득
          </p>
          <p className="text-sm text-neutral-500">
            Certificate of GMP Compliance of a Manufacturer
          </p>
        </div>
        <Link
          href="/product/medical"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[color:var(--brand-blue)] px-8 py-3 text-sm font-semibold text-[color:var(--brand-blue)] shadow-md hover:bg-[color:var(--brand-blue-soft)]"
        >
          의료용가스 바로가기
        </Link>
      </section>
    </div>
  );
}
