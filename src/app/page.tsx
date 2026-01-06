import Link from "next/link";
import MainSlider from "@/components/MainSlider";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <MainSlider />

      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-2xl border border-[color:var(--brand-blue-soft)] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900">LGC 용기 판매</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              산업·연구 현장에서 안정적으로 사용할 수 있는 LGC 용기를 공급합니다. 용도에
              맞는 사양 제안과 안전 점검 기준을 통해 신뢰할 수 있는 공급 체계를 제공합니다.
              필요 수량과 일정에 맞춰 빠르게 대응합니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-600">
              <span className="rounded-full bg-[color:var(--brand-blue-soft)] px-3 py-1">
                사양 상담
              </span>
              <span className="rounded-full bg-[color:var(--brand-blue-soft)] px-3 py-1">
                안전 점검
              </span>
              <span className="rounded-full bg-[color:var(--brand-blue-soft)] px-3 py-1">
                납기 대응
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/product/liquid"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-blue)] shadow-md hover:bg-[color:var(--brand-blue-soft)]"
              >
                제품 소개
              </Link>
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[color:var(--brand-blue-dark)]"
              >
                문의하기
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--brand-blue-soft)] bg-[color:var(--brand-blue-soft)]/40 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">영업시간</h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center justify-between">
                <span>월 · 화 · 수 · 목 · 금</span>
                <span className="font-semibold">08:00 - 17:00</span>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <span>주말 · 공휴일</span>
                <span className="font-semibold">휴무</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-neutral-600">
              방문 상담 및 출고는 사전 연락 부탁드립니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
