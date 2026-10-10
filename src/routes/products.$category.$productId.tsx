import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Download, CheckCircle2, X, Send } from "lucide-react";
import { getCategory, getProduct, productsIn } from "@/data/products";
import { Tag } from "@/components/site/Layout";
import { ProductCard, Schematic } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$category/$productId")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    const product = getProduct(params.category, params.productId);
    if (!category || !product) throw notFound();
    return { category, product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    const title = `${p.title} | ${loaderData.category.name} — AES Energy`;
    return { meta: [{ title }, { name: "description", content: p.short }, { property: "og:title", content: title }, { property: "og:description", content: p.short }] };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { category, product: p } = Route.useLoaderData();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const related = productsIn(category.id).filter((x) => x.id !== p.id);

  return (
    <>
      <div className="border-b bg-surface">
        <nav aria-label="Breadcrumb" className="container-page flex flex-wrap items-center gap-1.5 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-primary">Products</Link><ChevronRight className="h-4 w-4" />
          <Link to="/products/$category" params={{ category: category.id }} className="hover:text-primary">{category.name}</Link><ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">{p.title}</span>
        </nav>
      </div>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-2">
        <div className="space-y-4 lg:sticky lg:top-24 self-start">
          <Schematic label={`${category.name} / ${p.id}`} />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => <div key={i} className="aspect-video rounded-lg bg-gradient-navy grid-pattern opacity-80" />)}
          </div>
          <button onClick={() => alert("Datasheet will be sent upon request. Please contact info@aesenergy.com.tr")} className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary px-4 py-3 font-semibold text-primary hover:bg-accent">
            <Download className="h-4 w-4" /> Download Datasheet (PDF)
          </button>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{category.name}</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{p.title}</h1>
          <p className="mt-1 text-lg font-medium text-muted-foreground">{p.subtitleTr}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          <p className="mt-6 leading-relaxed text-foreground/85">{p.overview}</p>
          <button onClick={() => { setOpen(true); setSent(false); }} className="mt-6 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow">Inquire About This Product</button>

          <h2 className="mt-10 text-xl font-bold">Key Features</h2>
          <ul className="mt-4 space-y-3">
            {p.features.map((f) => <li key={f} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><span>{f}</span></li>)}
          </ul>

          <h2 className="mt-10 text-xl font-bold">Technical Specifications</h2>
          <div className="mt-4 overflow-hidden rounded-xl border">
            <table className="w-full text-sm">
              <tbody>
                {p.specs.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-card" : "bg-surface"}>
                    <th scope="row" className="w-2/5 px-4 py-3 text-left font-semibold">{k}</th>
                    <td className="px-4 py-3 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-surface py-14">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold">More from {category.name}</h2>
            <div className="mt-6 flex snap-x gap-6 overflow-x-auto pb-4">
              {related.map((r) => <div key={r.id} className="w-[min(100%,26rem)] shrink-0 snap-start"><ProductCard p={r} /></div>)}
            </div>
          </div>
        </section>
      )}

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-labelledby="inq-title">
          <div className="absolute inset-0 bg-navy/60" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-elevated">
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-muted-foreground" aria-label="Close"><X /></button>
            <h2 id="inq-title" className="text-xl font-bold">Product Inquiry</h2>
            {sent ? (
              <p className="mt-6 rounded-lg bg-accent p-4 text-accent-foreground">Thank you! Our sales team will contact you shortly.</p>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input readOnly value={p.title} aria-label="Product" className="w-full rounded-md border bg-surface px-3 py-2.5 text-sm font-semibold" />
                <input required placeholder="Full name" aria-label="Full name" className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <input placeholder="Company" aria-label="Company" className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <input required type="email" placeholder="Email" aria-label="Email" className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <textarea rows={3} placeholder="Message" aria-label="Message" className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-glow"><Send className="h-4 w-4" /> Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
