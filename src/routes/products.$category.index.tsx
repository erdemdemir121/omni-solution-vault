import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import { getCategory, productsIn } from "@/data/products";
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
    return { meta: [{ title }, { name: "description", content: c.description }, { property: "og:title", content: title }, { property: "og:description", content: c.description }] };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"default" | "az" | "za">("default");
  const list = useMemo(() => {
    let l = productsIn(category.id).filter((p) => (p.title + p.subtitleTr + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase()));
    if (sort !== "default") l = [...l].sort((a, b) => (sort === "az" ? 1 : -1) * a.title.localeCompare(b.title));
    return l;
  }, [category.id, q, sort]);

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
              <span className="sr-only">Search products</span>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by name or tag…" className="w-full rounded-md border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="rounded-md border bg-card px-3 py-2.5 text-sm">
              <option value="default">Featured</option>
              <option value="az">Name A–Z</option>
              <option value="za">Name Z–A</option>
            </select>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
          {list.length === 0 && <p className="mt-8 text-muted-foreground">No products match your filter.</p>}
        </div>
      </div>
    </>
  );
}
