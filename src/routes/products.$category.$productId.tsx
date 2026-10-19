import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, CheckCircle2, X, Send } from "lucide-react";
import { getCategory, getProduct, productsIn, locCategory, locProduct } from "@/data/products";
import { useLang } from "@/lib/i18n";

import { ProductCard, ProductPhoto } from "@/components/site/ProductCard";

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
    return { meta: [{ property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title }, { name: "description", content: p.short }, { property: "og:title", content: title }, { property: "og:description", content: p.short }] };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const data = Route.useLoaderData();
  const { tx, lang } = useLang();
  const category = locCategory(data.category, lang);
  const p = locProduct(data.product, lang);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const related = productsIn(category.id).filter((x) => x.id !== p.id);

  return (
    <>
      <div className="border-b bg-surface">
        <nav aria-label={tx("Breadcrumb", "Sayfa yolu")} className="container-page flex flex-wrap items-center gap-1.5 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">{tx("Home", "Ana Sayfa")}</Link><ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-primary">{tx("Products", "Ürünler")}</Link><ChevronRight className="h-4 w-4" />
          <Link to="/products/$category" params={{ category: category.id }} className="hover:text-primary">{category.name}</Link><ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">{p.title}</span>
        </nav>
      </div>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-2">
        <div className="space-y-4 lg:sticky lg:top-24 self-start">
          <ProductPhoto id={p.id} alt={p.title} />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{category.name}</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{p.title}</h1>
          <p className="mt-1 text-lg font-medium text-muted-foreground">{p.subtitle}</p>
          <button onClick={() => { setOpen(true); setSent(false); }} className="mt-6 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow">{tx("Inquire About This Product", "Bu Ürün Hakkında Bilgi Al")}</button>

          <div className="mt-8 space-y-3">
            {p.body.length === 0 && <p className="text-muted-foreground">{tx("Detailed information is available on request.", "Detaylı bilgi talep üzerine gönderilir.")}</p>}
            {p.body.map(([type, text], i) =>
              type === "h" ? <h2 key={i} className="pt-5 text-lg font-bold">{text}</h2>
              : type === "li" ? <div key={i} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{text}</span></div>
              : <p key={i} className="leading-relaxed text-foreground/85">{text}</p>,
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-surface py-14">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold">{tx("More from", "Diğer ürünler:")} {category.name}</h2>
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
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-muted-foreground" aria-label={tx("Close", "Kapat")}><X /></button>
            <h2 id="inq-title" className="text-xl font-bold">{tx("Product Inquiry", "Ürün Bilgi Talebi")}</h2>
            {sent ? (
              <p className="mt-6 rounded-lg bg-accent p-4 text-accent-foreground">{tx("Thank you! Our sales team will contact you shortly.", "Teşekkürler! Satış ekibimiz kısa süre içinde sizinle iletişime geçecek.")}</p>
            ) : (
              <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input readOnly value={p.title} aria-label={tx("Product", "Ürün")} className="w-full rounded-md border bg-surface px-3 py-2.5 text-sm font-semibold" />
                <input required placeholder={tx("Full name", "Ad soyad")} aria-label={tx("Full name", "Ad soyad")} className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <input placeholder={tx("Company", "Firma")} aria-label={tx("Company", "Firma")} className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <input required type="email" placeholder={tx("Email", "E-posta")} aria-label={tx("Email", "E-posta")} className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <textarea rows={3} placeholder={tx("Message", "Mesaj")} aria-label={tx("Message", "Mesaj")} className="w-full rounded-md border px-3 py-2.5 text-sm" />
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-glow"><Send className="h-4 w-4" /> {tx("Send Inquiry", "Talebi Gönder")}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
