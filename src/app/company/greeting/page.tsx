import SubLayout from "@/components/SubLayout";

const COMPANY_TABS = [
  { label: "인사말", href: "/company/greeting" },
  { label: "허가 인증서", href: "/company/certificate" },
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
            <h3 className="text-2xl font-semibold leading-snug">
              <span className="font-bold text-[color:var(--brand-blue)]">원가스</span>{" "}
              홈페이지에 오신 여러분을 환영합니다.
            </h3>
            <div className="space-y-4 text-sm leading-6 text-neutral-700">
              <p>안녕하세요. 원가스 대표입니다.</p>
              <p>“안전은 모든 것의 시작입니다.”</p>
              <p>
                원가스는 이 신념을 바탕으로, 안전한 가스 공급과 철저한 품질 관리로
                언제나 신뢰받는 파트너가 되기 위해 끊임없이 노력하고 있습니다. 고객님의
                믿음에 보답할 수 있도록, 변함없는 품질과 철저한 안전 관리로 기대에
                부응하겠습니다.
              </p>
              <p>
                원가스를 찾아주셔서 감사합니다. 앞으로도 고객님의 안전을 최우선으로
                생각하는 원가스가 되겠습니다.
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
