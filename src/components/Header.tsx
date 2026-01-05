import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          원가스
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">홈</Link>
          <Link href="/contact" className="hover:underline">문의하기</Link>
        </nav>
      </div>
    </header>
  );
}
