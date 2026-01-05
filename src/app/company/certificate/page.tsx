import SubLayout from "@/components/SubLayout";

const COMPANY_TABS = [
  { label: "인사말", href: "/company/greeting" },
  { label: "허가 인증서", href: "/company/certificate" },
  { label: "사업장소개", href: "/company/factory" },
];

const CERTIFICATES = [
  { src: "/images/certificates/certificate-1.jpg", alt: "중소기업확인서" },
  { src: "/images/certificates/certificate-2.jpg", alt: "중소기업확인서(소기업)" },
  { src: "/images/certificates/certificate-3.jpg", alt: "원가스 지점 사업자등록증" },
  { src: "/images/certificates/certificate-4.jpg", alt: "원가스 사업자등록증" },
  { src: "/images/certificates/certificate-5.jpg", alt: "의약품도매상허가증" },
  { src: "/images/certificates/certificate-6.jpg", alt: "의료기기판매업허가증" },
  { src: "/images/certificates/certificate-7.jpg", alt: "여성기업확인서" },
  { src: "/images/certificates/certificate-8.jpg", alt: "액화석유가스판매사업허가증" },
  { src: "/images/certificates/certificate-9.jpg", alt: "식품소분판매업 영업신고증" },
  { src: "/images/certificates/certificate-10.jpg", alt: "고압가스판매허가증" },
  { src: "/images/certificates/certificate-11.jpg", alt: "고압가스 제조(충전)허가증" },
  { src: "/images/certificates/certificate-12.jpg", alt: "고압가스 일반제조 허가증" },
  { src: "/images/certificates/certificate-13.jpg", alt: "고압가스 운반자 등록증명서" },
  { src: "/images/certificates/certificate-14.jpg", alt: "건설업등록증" },
  { src: "/images/certificates/certificate-15.jpg", alt: "ISO인증서" },
  { src: "/images/certificates/certificate-16.jpg", alt: "GMP적합판정서" },
];

export default function CertificatePage() {
  return (
    <SubLayout
      section="회사소개"
      title="허가 인증서"
      heroImage="/images/common/sv1.jpg"
      tabs={COMPANY_TABS}
      activeHref="/company/certificate"
    >
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((item) => (
          <div key={item.src} className="rounded-2xl border bg-white p-3 shadow-sm">
            <img src={item.src} alt={item.alt} className="h-auto w-full rounded-xl" />
          </div>
        ))}
      </div>
    </SubLayout>
  );
}
