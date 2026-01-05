import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">문의하기</h2>
        <p className="mt-2 text-sm text-gray-700">
          아래 양식을 작성하면 담당자에게 메일로 전달됩니다.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
