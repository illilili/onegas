import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";
import { getMailMeta, getTransporter } from "@/lib/mailer";
import { rateLimitOrThrow } from "@/lib/rateLimit";

function getClientIp(req: NextRequest) {
  // Vercel/프록시 환경 고려
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "0.0.0.0";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    rateLimitOrThrow(ip, 5, 60_000);

    const body = await req.json().catch(() => null);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "입력값이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // honeypot: 값이 있으면 봇으로 판단
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const transporter = getTransporter();
    const { to, from } = getMailMeta();

    const subject = `[원가스 문의] ${data.name} / ${data.phone}`;
    const text = [
      `이름: ${data.name}`,
      `연락처: ${data.phone}`,
      `이메일: ${data.email}`,
      `회사명: ${data.company ?? ""}`,
      "",
      "문의 내용:",
      data.message,
    ].join("\n");

    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      replyTo: data.email,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    const msg = typeof e?.message === "string" ? e.message : "서버 오류";
    const status = msg === "Too many requests" ? 429 : 500;
    return NextResponse.json({ message: msg }, { status });
  }
}
