import SubLayout from "@/components/SubLayout";
import { msdsPosts } from "@/data/siteData";

const SUPPORT_TABS = [
  { label: "자료실", href: "/support/archive" },
  { label: "MSDS", href: "/support/msds" },
];

export default function MsdsPage() {
  return (
    <SubLayout
      section="고객지원"
      title="MSDS"
      heroImage="/images/common/sv3.jpg"
      tabs={SUPPORT_TABS}
      activeHref="/support/msds"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border bg-white p-5 md:flex-row md:items-center">
          <div className="text-sm text-neutral-600">전체 : {msdsPosts.length}</div>
          <div className="flex w-full gap-2 md:w-auto">
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="검색어"
            />
            <button className="rounded-lg bg-[color:var(--brand-blue)] px-4 py-2 text-sm text-white hover:bg-[color:var(--brand-blue-dark)]">
              검색하기
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-500">
              <tr>
                <th className="px-4 py-3">번호</th>
                <th className="px-4 py-3">제목</th>
                <th className="px-4 py-3">작성자</th>
                <th className="px-4 py-3">등록일</th>
                <th className="px-4 py-3">조회</th>
              </tr>
            </thead>
            <tbody>
              {msdsPosts.map((post) => (
                <tr key={post.id} className="border-t">
                  <td className="px-4 py-3">{post.id}</td>
                  <td className="px-4 py-3">{post.title}</td>
                  <td className="px-4 py-3">{post.author}</td>
                  <td className="px-4 py-3">{post.date}</td>
                  <td className="px-4 py-3">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SubLayout>
  );
}
