export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} 원가스</div>
        <div className="mt-1">사업자정보/주소/대표번호 등을 여기에</div>
      </div>
    </footer>
  );
}