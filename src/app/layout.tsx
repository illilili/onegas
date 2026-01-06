import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "원가스",
  description: "원가스 가스 공급 및 산업용 가스 솔루션",
  icons: {
    icon: "/images/common/logo-2.PNG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-neutral-900">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
