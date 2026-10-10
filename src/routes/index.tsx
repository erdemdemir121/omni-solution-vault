import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, ShieldCheck, ScanSearch, Gauge, Award } from "lucide-react";
import { categories } from "@/data/products";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AES Energy — Smart Grid & Energy Reliability" },
      { name: "description", content: "OMNI family of smart grid monitoring, safety, fault detection and asset analytics solutions from AES Energy, Istanbul." },
      { property: "og:title", content: "AES Energy — Smart Grid & Energy Reliability" },
      { property: "og:description", content: "Next generation smart grid monitoring, protection and asset analytics." },
    ],
  }),
  component: Home,
});

const icons = { omnigrid: Activity, omnisafe: ShieldCheck, omnidetect: ScanSearch, omniasset: Gauge } as const;

function Home() {
  const { t } = useLang();
  const omni = categories.filter((c) => c.id !== "other-products");
  return (
    <>
      <section className="bg-gradient-navy grid-pattern text-navy-foreground">
        <div className="container-page py-24 md:py-32">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">AES Akıllı Enerji Sistemleri</span>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">{t("heroTitle")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/75">{t("heroSub")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">{t("explore")} <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="inline-flex items-center rounded-md border border-navy-foreground/30 px-6 py-3 font-semibold text-navy-foreground hover:bg-navy-2">{t("sales")}</Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold tracking-tight">The OMNI Family</h2>
          <p className="mt-2 text-muted-foreground">Four integrated product lines for a reliable, safe and efficient grid.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {omni.map((c) => {
              const Icon = icons[c.id as keyof typeof icons];
              return (
                <Link key={c.id} to="/products/$category" params={{ category: c.id }} className="card-hover group flex flex-col rounded-xl border bg-card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent text-primary"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-xl font-extrabold">{c.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{c.tagline}</p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{t("discover")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 border-y">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["99.9%", "Grid Uptime Target"], ["10,000+", "Monitored Points"], ["20+ yrs", "Engineering Experience"], ["100%", "Field Tested"]].map(([v, l]) => (
            <div key={l}>
              <div className="text-4xl font-extrabold text-primary">{v}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold tracking-tight">Official Representations</h2>
          <p className="mt-2 text-muted-foreground">Trusted global manufacturers, represented and supported locally by AES.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Applied Precision", "Official distributor for Türkiye & Iraq — automated electricity meter test benches and calibration systems.", "applied-precision-meter-test"],
              ["Vicentinos", "Silicone rubber composite insulators and line hardware for transmission and distribution.", "vicentinos-insulators"],
            ].map(([n, d, id]) => (
              <div key={n} className="card-hover rounded-xl border bg-card p-8">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-2xl font-extrabold">{n}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
                <Link to="/products/$category/$productId" params={{ category: "other-products", productId: id }} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">View product <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-2xl bg-gradient-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="text-3xl font-extrabold">Ready to make your grid smarter?</h2>
            <p className="mt-3 opacity-90">Talk to our engineers about your network's monitoring and safety needs.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 font-semibold text-navy-foreground hover:bg-navy-2">{t("sales")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
