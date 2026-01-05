"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
  company?: string;
  // honeypot (봇 방지)
  website: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setResult({ ok: false, msg: data?.message ?? "전송 실패" });
        return;
      }

      setResult({ ok: true, msg: "접수 완료. 빠르게 연락드릴게요." });
      setForm({ name: "", phone: "", email: "", message: "", company: "", website: "" });
    } catch {
      setResult({ ok: false, msg: "네트워크 오류" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border p-6 space-y-4 max-w-xl">
      {/* honeypot: 사람이면 비워둠 */}
      <input
        value={form.website}
        onChange={(e) => onChange("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium">이름</label>
          <input
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="홍길동"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">연락처</label>
          <input
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="010-0000-0000"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">이메일</label>
          <input
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="example@email.com"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">회사명(선택)</label>
          <input
            value={form.company ?? ""}
            onChange={(e) => onChange("company", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="OO가스"
          />
        </div>

        <div>
          <label className="text-sm font-medium">문의 내용</label>
          <textarea
            value={form.message}
            onChange={(e) => onChange("message", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm min-h-[140px]"
            placeholder="문의 내용을 입력하세요."
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-4 py-2 text-white text-sm disabled:opacity-60"
      >
        {loading ? "전송 중..." : "문의 접수"}
      </button>

      {result && (
        <p className={`text-sm ${result.ok ? "text-green-600" : "text-red-600"}`}>
          {result.msg}
        </p>
      )}
    </form>
  );
}
