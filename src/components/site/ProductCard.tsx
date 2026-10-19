import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { locProduct, type Product } from "@/data/products";
import { Tag } from "./Layout";
import { useLang } from "@/lib/i18n";
import { productImages } from "@/data/images";

export function ProductCard({ p: raw }: { p: Product }) {
  const { t, lang } = useLang();
  const p = locProduct(raw, lang);
  return (
    <article className="card-hover flex flex-col overflow-hidden rounded-xl border bg-card">
      {productImages[p.id] && <div className="h-56 shrink-0 overflow-hidden bg-surface"><img src={productImages[p.id]} alt={p.title} loading="lazy" className="h-full w-full object-cover" /></div>}
      <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{p.subtitle}</p>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.short}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((tg) => <Tag key={tg}>{tg}</Tag>)}</div>
      <Link to="/products/$category/$productId" params={{ category: p.category, productId: p.id }} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
        {t("details")} <ArrowRight className="h-4 w-4" />
      </Link>
      </div>
    </article>
  );
}

export function Schematic({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-navy grid-pattern">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-primary-glow" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M20 150 H120 L150 90 L180 210 L210 120 L230 150 H380" strokeWidth="2.5" />
        <circle cx="120" cy="150" r="6" fill="currentColor" />
        <circle cx="230" cy="150" r="6" fill="currentColor" />
        <rect x="260" y="60" width="90" height="60" rx="6" opacity=".6" />
        <rect x="50" y="200" width="90" height="60" rx="6" opacity=".6" />
        <path d="M305 120 V150 M95 200 V150" strokeDasharray="4 4" />
      </svg>
      <span className="absolute bottom-3 left-3 rounded bg-navy/80 px-2 py-1 font-mono text-xs text-navy-foreground">{label}</span>
    </div>
  );
}

export function ProductPhoto({ id, alt }: { id: string; alt: string }) {
  const src = productImages[id];
  if (!src) return <Schematic label={id} />;
  return <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-card"><img src={src} alt={alt} className="h-full w-full object-contain p-4" /></div>;
}
