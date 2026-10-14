import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories, productsIn, locCategory } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { PageHero } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products & Solutions — AES Energy" },
      { name: "description", content: "Full catalog of AES OMNIGRID, OMNISAFE, OMNIDETECT, OMNIASSET and partner products." },
      { property: "og:title", content: "Products & Solutions — AES Energy" },
      { property: "og:description", content: "Explore the complete AES Energy product catalog." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { tx, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={tx("Catalog", "Katalog")} title={tx("Products & Solutions", "Ürünler ve Çözümler")}>{tx("Every AES product family and authorized partner solution in one place.", "Tüm AES ürün aileleri ve yetkili iş ortağı çözümleri tek bir yerde.")}</PageHero>
      <div className="container-page space-y-16 py-16">
        {categories.map((raw) => locCategory(raw, lang)).map((c) => (
          <section key={c.id}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="text-2xl font-extrabold">{c.name}</h2>
                <p className="text-sm text-muted-foreground">{c.tagline}</p>
              </div>
              <Link to="/products/$category" params={{ category: c.id }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">{tx("View family", "Aileyi incele")} <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">{productsIn(c.id).map((p) => <ProductCard key={p.id} p={p} />)}</div>
          </section>
        ))}
      </div>
    </>
  );
}
