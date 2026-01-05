import SubLayout from "@/components/SubLayout";
import { productCategories } from "@/data/siteData";

type PageProps = {
  params: { category: string } | Promise<{ category: string }>;
};

export default async function ProductCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryKey = resolvedParams?.category ?? "";
  const category =
    productCategories.find((item) => item.key === categoryKey) ?? productCategories[0];

  const tabs = productCategories.map((item) => ({
    label: item.label,
    href: `/product/${item.key}`,
  }));

  return (
    <SubLayout
      section="제품소개"
      title={category.label}
      heroImage={category.heroImage}
      tabs={tabs}
      activeHref={`/product/${category.key}`}
    >
      <div className="mx-auto grid max-w-6xl gap-6">
        {category.items.map((item) => (
          <div
            key={item.title}
            className="grid gap-6 rounded-2xl border border-[color:var(--brand-blue-soft)] bg-white p-6 shadow-sm md:grid-cols-[220px_1fr]"
          >
            {item.image ? (
              <div className="flex items-center justify-center rounded-xl bg-[color:var(--brand-blue-soft)]/40 p-4">
                <img src={item.image} alt={item.title} className="h-40 w-auto" />
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-xl bg-neutral-100 p-4 text-xs text-neutral-500">
                이미지 준비 중
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SubLayout>
  );
}

export function generateStaticParams() {
  return productCategories.map((item) => ({ category: item.key }));
}
