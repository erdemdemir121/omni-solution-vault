import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Leaf, HardHat } from "lucide-react";
import { siteImages } from "@/data/images";
import { PageHero } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Quality, Environment & Safety — AES Energy" },
      { name: "description", content: "AES Energy's quality, environmental and occupational health & safety policies." },
      { property: "og:title", content: "Quality, Environment & Safety — AES Energy" },
      { property: "og:description", content: "Our commitments to quality, the environment and workplace safety." },
    ],
  }),
  component: Quality,
});

const policiesData = [
  { icon: BadgeCheck, title: ["Quality Policy", "Kalite Politikası"], std: "ISO 9001", itemsTr: ["Her teslimatta müşteri ve mevzuat gerekliliklerini karşılamak", "Saha geri bildirimleriyle ürünlerimizi sürekli iyileştirmek", "İzlenebilir, kalibreli test ekipmanı kullanmak", "Ekibimizi en yüksek teknik standartlarda eğitmek"], items: ["Meet customer and regulatory requirements in every delivery", "Continuously improve products through field feedback", "Use traceable, calibrated test equipment", "Train our team to the highest technical standards"] },
  { icon: Leaf, title: ["Environmental Policy", "Çevre Politikası"], std: "ISO 14001", itemsTr: ["Operasyonlarda atık ve enerji tüketimini en aza indirmek", "Ürünleri uzun ömür ve geri dönüştürülebilirlik için tasarlamak", "Tüm çevre mevzuatına uymak", "Emisyonları azaltmak için şebeke verimliliğini desteklemek"], items: ["Minimise waste and energy consumption in operations", "Design products for long service life and recyclability", "Comply with all environmental legislation", "Support grid efficiency to reduce emissions"] },
  { icon: HardHat, title: ["Occupational Health & Safety", "İş Sağlığı ve Güvenliği"], std: "ISO 45001", itemsTr: ["Çalışanlar ve saha ekipleri için sıfır zarar yaklaşımı", "Her saha faaliyetinden önce risk değerlendirmesi", "Operatörleri tehlike bölgelerinin dışında tutan ürünler", "Ramak kala olaylar için açık raporlama kültürü"], items: ["Zero-harm approach for employees and field crews", "Risk assessment before every site activity", "Products engineered to keep operators outside hazard zones", "Open reporting culture for near-misses"] },
];

function Quality() {
  const { tx, lang } = useLang();
  const policies = policiesData.map((p) => ({ ...p, title: lang === "tr" ? p.title[1] : p.title[0], items: lang === "tr" ? p.itemsTr : p.items }));
  return (
    <>
      <PageHero image={siteImages.quality} eyebrow={tx("Policies", "Politikalar")} title={tx("Quality, Environment & Safety", "Kalite, Çevre ve Güvenlik")}>{tx("Integrated management principles that guide how we design, build and support every product.", "Her ürünü nasıl tasarladığımıza, ürettiğimize ve desteklediğimize yön veren entegre yönetim ilkeleri.")}</PageHero>
      <div className="container-page grid gap-6 py-16 lg:grid-cols-3">
        {policies.map(({ icon: Icon, title, std, items }) => (
          <section key={title} className="rounded-xl border bg-card p-8">
            <div className="flex items-center justify-between">
              <Icon className="h-8 w-8 text-primary" />
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{std}</span>
            </div>
            <h2 className="mt-5 text-xl font-bold">{title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </section>
        ))}
      </div>
    </>
  );
}
