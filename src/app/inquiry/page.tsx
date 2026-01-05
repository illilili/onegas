import ContactForm from "@/components/ContactForm";
import SubLayout from "@/components/SubLayout";

export default function InquiryPage() {
  return (
    <SubLayout
      section="상담문의"
      title="상담문의"
      heroImage="/images/common/sv4.jpg"
      heroPosition="50% 70%"
      tabs={[{ label: "상담문의", href: "/inquiry" }]}
      activeHref="/inquiry"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <p className="text-center text-sm text-neutral-600">
          문의 내용을 작성해 주시면 담당자가 빠르게 연락드리겠습니다.
        </p>
        <ContactForm />
      </div>
    </SubLayout>
  );
}
