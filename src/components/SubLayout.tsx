type SubTab = {
  label: string;
  href: string;
};

type SubLayoutProps = {
  section: string;
  title: string;
  heroImage: string;
  heroPosition?: string;
  tabs?: SubTab[];
  activeHref?: string;
  children: React.ReactNode;
};

export default function SubLayout({
  section,
  title,
  heroImage,
  heroPosition,
  tabs,
  activeHref,
  children,
}: SubLayoutProps) {
  return (
    <div className="space-y-10">
      <section
        className="relative h-[220px] overflow-hidden rounded-3xl bg-neutral-900 text-white md:h-[300px]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: heroPosition ?? "50% 50%",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">{section}</h1>
        </div>
      </section>

      {tabs && tabs.length > 0 && (
        <div className="border-b">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className={`border-b-2 px-2 py-3 text-sm font-medium ${
                  activeHref === tab.href
                    ? "border-[color:var(--brand-blue)] text-[color:var(--brand-blue)]"
                    : "border-transparent text-neutral-500 hover:text-[color:var(--brand-blue-dark)]"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[color:var(--brand-blue)]">{title}</h2>
        </div>
        {children}
      </section>
    </div>
  );
}
