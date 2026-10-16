import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, ShieldCheck, ScanSearch, Gauge, Award } from "lucide-react";
import { categories, locCategory } from "@/data/products";
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
  const { t, tx, lang } = useLang();
  const omni = categories.filter((c) => c.id !== "other-products").map((c) => locCategory(c, lang));
  const metrics: [string, string][] = [
    ["99.9%", tx("Grid Uptime Target", "Şebeke Süreklilik Hedefi")],
    ["10,000+", tx("Monitored Points", "İzlenen Nokta")],
    ["20+", tx("Years of Engineering Experience", "Yıllık Mühendislik Deneyimi")],
    ["100%", tx("Field Tested", "Sahada Test Edildi")],
  ];
  const partners: { name: string; desc: string; url: string }[] = [
    { name: "İzoelektro", desc: tx("Slovenian manufacturer of low and medium voltage surge arresters and MV composite insulators, trusted in 40+ countries.", "Slovenya merkezli alçak ve orta gerilim parafudr ve OG kompozit izolatör üreticisi; 40'tan fazla ülkede tercih ediliyor."), url: "https://www.izoelektro.com/" },
    { name: "Greenwood Power", desc: tx("Austrian developer of non-conventional voltage and current sensors (LPIT/LPVT/LPCT) for the medium voltage grid, IEC 61869 certified.", "Orta gerilim şebekesi için IEC 61869 sertifikalı konvansiyonel olmayan gerilim ve akım sensörleri (LPIT/LPVT/LPCT) geliştiren Avusturyalı firma."), url: "https://www.greenwood-power.com/" },
    { name: "Applied Precision", desc: tx("Official distributor for Türkiye & Iraq — automated electricity meter test benches and calibration systems.", "Türkiye ve Irak resmi distribütörü — otomatik elektrik sayacı test masaları ve kalibrasyon sistemleri."), url: "https://www.appliedprecision.eu/" },
    { name: "Vicentinos", desc: tx("Silicone rubber composite insulators and line hardware for transmission and distribution.", "İletim ve dağıtım için silikon kauçuk kompozit izolatörler ve hat donanımı."), url: "https://www.vicentinos.com.br/" },
  ];
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
          <h2 className="text-3xl font-extrabold tracking-tight">{tx("The OMNI Family", "OMNI Ailesi")}</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">{tx("AES Akıllı Enerji Sistemleri has, since 2019, specialised in developing advanced-technology solutions for utilities in the fields of energy monitoring, occupational safety, materials technologies and cable test equipment. The Omni Family product range developed in this context offers integrated systems for real-time data monitoring, operational safety, asset protection and early fault detection in low- and medium-voltage distribution infrastructure. Thanks to its modular and scalable architecture, it increases grid stability while optimising maintenance processes and contributing to the effective management of investment costs.", "AES Akıllı Enerji Sistemleri, 2019 yılından bu yana enerji dağıtım şirketlerine yönelik enerji izleme, iş güvenliği, malzeme teknolojileri ve kablo test cihazları alanlarında uzmanlaşmış, ileri teknoloji çözümler geliştirmektedir. Bu kapsamda geliştirilen Omni Family ürün grubu; alçak ve orta gerilim dağıtım altyapılarında gerçek zamanlı veri izleme, operasyonel güvenlik, varlık koruma ve erken arıza tespitine yönelik entegre sistemler sunar. Modüler ve ölçeklenebilir mimarisi sayesinde şebeke kararlılığını artırırken, bakım süreçlerini optimize eder ve yatırım maliyetlerinin etkin yönetilmesine katkı sağlar.")}</p>
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
          {metrics.map(([v, l]) => (
            <div key={v}>
              <div className="text-4xl font-extrabold text-primary">{v}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold tracking-tight">{tx("Official Representations", "Resmi Temsilcilikler")}</h2>
          <p className="mt-2 text-muted-foreground">{tx("Trusted global manufacturers, represented and supported locally by AES.", "AES tarafından yerel olarak temsil edilen ve desteklenen güvenilir küresel üreticiler.")}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {partners.map(({ name, desc, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="card-hover group rounded-xl border bg-card p-8">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-2xl font-extrabold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{tx("Visit website", "Web sitesini ziyaret et")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="rounded-2xl bg-gradient-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="text-3xl font-extrabold">{tx("Ready to make your grid smarter?", "Şebekenizi daha akıllı hale getirmeye hazır mısınız?")}</h2>
            <p className="mt-3 opacity-90">{tx("Talk to our engineers about your network's monitoring and safety needs.", "Şebekenizin izleme ve güvenlik ihtiyaçlarını mühendislerimizle konuşun.")}</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 font-semibold text-navy-foreground hover:bg-navy-2">{t("sales")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
