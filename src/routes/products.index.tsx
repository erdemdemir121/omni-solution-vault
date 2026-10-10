import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories, productsIn } from "@/data/products";
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
  return (
    <>
      <PageHero eyebrow="Catalog" title="Products & Solutions">Every AES product family and authorized partner solution in one place.</PageHero>
      <div className="container-page space-y-16 py-16">
        {categories.map((c) => (
          <section key={c.id}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="text-2xl font-extrabold">{c.name}</h2>
                <p className="text-sm text-muted-foreground">{c.tagline}</p>
              </div>
              <Link to="/products/$category" params={{ category: c.id }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View family <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">{productsIn(c.id).map((p) => <ProductCard key={p.id} p={p} />)}</div>
          </section>
        ))}
      </div>
    </>
  );
}
