import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border p-8">
        <h1 className="text-3xl font-bold">원가스</h1>
        <p className="mt-3 text-gray-700">
          가스 공급/유통 관련 소개 문구를 여기에 넣으세요.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-black px-4 py-2 text-white text-sm"
          >
            문의하기
          </Link>
          <a
            href="tel:000-0000-0000"
            className="rounded-lg border px-4 py-2 text-sm"
          >
            전화하기
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "서비스 1", desc: "서비스 설명" },
          { title: "서비스 2", desc: "서비스 설명" },
          { title: "서비스 3", desc: "서비스 설명" },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{x.title}</div>
            <div className="mt-2 text-sm text-gray-700">{x.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
