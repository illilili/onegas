import SubLayout from "@/components/SubLayout";

const COMPANY_TABS = [
  { label: "인사말", href: "/company/greeting" },
  { label: "사업장소개", href: "/company/factory" },
];

export default function GreetingPage() {
  return (
    <SubLayout
      section="회사소개"
      title="인사말"
      heroImage="/images/common/sv1.jpg"
      tabs={COMPANY_TABS}
      activeHref="/company/greeting"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <img
            src="/images/sub/greeting.jpg"
            alt="인사말"
            className="h-[320px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-[520px]"
          />
          <div className="flex h-full flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold leading-snug">
              <span className="block">안녕하십니까.</span>
              <span className="block">
                <span className="text-[color:var(--brand-blue)]">원가스</span>
                를 찾아주셔서 감사합니다.
              </span>
            </h3>
            <div className="space-y-4 text-sm leading-6 text-neutral-700">
              <p>원가스 대표 반승춘입니다.</p>
              <p>안전하게, 정확하게</p>
              <p>
                원가스는 가스 공급 시 취급 가스의 특성과 사용 환경을 고려하여, 공급과 관리가
                안정적으로 이루어질 수 있도록 하고 있습니다.
              </p>
              <p>
                정확한 공급과 지속적인 점검을 기본으로 하며, 고객이 안심하고 사용할 수 있는 가스
                공급 환경을 유지하는 데 집중하고 있습니다.
              </p>
              <p>
                앞으로도 정해진 기준에 따른 관리와 책임 있는 운영을 통해, 신뢰할 수 있는 가스 공급처로
                역할을 다하겠습니다.
              </p>
              <p>감사합니다.</p>
              <p className="font-semibold">원가스 대표 반승춘</p>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
