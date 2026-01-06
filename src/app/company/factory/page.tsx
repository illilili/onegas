import SubLayout from "@/components/SubLayout";

const COMPANY_TABS = [
  { label: "인사말", href: "/company/greeting" },
  { label: "허가 인증서", href: "/company/certificate" },
  { label: "사업장소개", href: "/company/factory" },
];

export default function FactoryPage() {
  return (
    <SubLayout
      section="회사소개"
      title="사업장소개"
      heroImage="/images/common/sv1.jpg"
      tabs={COMPANY_TABS}
      activeHref="/company/factory"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-[color:var(--brand-blue-soft)] shadow-sm">
          <iframe
            title="원가스 위치"
            src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8C%80%EB%8D%95%EA%B5%AC%20%EC%8B%A0%ED%83%84%EC%A7%84%EB%A1%9C%20115%EB%B2%88%EC%95%88%EA%B8%B824&output=embed"
            className="h-[320px] w-full border-0 md:h-[420px]"
            loading="lazy"
          />
        </div>
        <div className="space-y-6 rounded-2xl border border-[color:var(--brand-blue-soft)] bg-white p-6 text-sm shadow-sm">
          <div>
            <p className="text-lg font-semibold">원가스</p>
            <p className="mt-2 text-neutral-600">대전광역시 대덕구 신탄진로 115번안길24</p>
          </div>
          <div className="space-y-3 text-neutral-700">
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3">
              <span className="font-semibold">TEL</span>
              <span>042.624.4001</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3">
              <span className="font-semibold">FAX</span>
              <span>042.632.4001</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3">
              <span className="font-semibold">E-mail</span>
              <span>onegas4200@naver.com</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3">
              <span className="font-semibold">사업자 등록번호</span>
              <span>783-51-00505</span>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
