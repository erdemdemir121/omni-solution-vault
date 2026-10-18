import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import { getCategory, productsIn, locCategory, locProduct } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { PageHero } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.category;
    const title = `${c.name} — ${c.tagline} | AES Energy`;
    return { meta: [{ property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title }, { name: "description", content: c.description }, { property: "og:title", content: title }, { property: "og:description", content: c.description }] };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: raw } = Route.useLoaderData();
  const { tx, lang } = useLang();
  const category = locCategory(raw, lang);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"default" | "az" | "za">("default");
  const list = useMemo(() => {
    let l = productsIn(category.id).filter((p) => (p.title + p.subtitleTr + p.tags.join(" ") + p.tagsTr.join(" ")).toLocaleLowerCase(lang).includes(q.toLocaleLowerCase(lang)));
    if (sort !== "default") l = [...l].sort((a, b) => (sort === "az" ? 1 : -1) * locProduct(a, lang).title.localeCompare(locProduct(b, lang).title, lang));
    return l;
  }, [category.id, q, sort, lang]);

  return (
    <>
      <PageHero eyebrow={category.tagline} title={category.name}>
        <p>{category.description}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {category.scope.map((s) => <li key={s} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary-glow" />{s}</li>)}
        </ul>
      </PageHero>
      <div className="bg-surface">
        <div className="container-page py-12">
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <label className="relative flex-1 max-w-md">
              <span className="sr-only">{tx("Search products", "Ürün ara")}</span>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={tx("Filter by name or tag…", "Ada veya etikete göre filtrele…")} className="w-full rounded-md border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <select aria-label={tx("Sort", "Sırala")} value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="rounded-md border bg-card px-3 py-2.5 text-sm">
              <option value="default">{tx("Featured", "Öne çıkanlar")}</option>
              <option value="az">{tx("Name A–Z", "Ad A–Z")}</option>
              <option value="za">{tx("Name Z–A", "Ad Z–A")}</option>
            </select>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
          {list.length === 0 && <p className="mt-8 text-muted-foreground">{tx("No products match your filter.", "Filtrenize uygun ürün bulunamadı.")}</p>}
        </div>
      </div>
    </>
  );
}
