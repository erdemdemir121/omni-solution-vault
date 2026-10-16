import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, FlaskConical, Calendar, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AES Energy" },
      { name: "description", content: "Founded in 2019, AES Energy brings 20+ years of electrical engineering experience to smart grid reliability and safety." },
      { property: "og:title", content: "About AES Energy" },
      { property: "og:description", content: "Our mission, vision and R&D focus on reducing outages and improving operator safety." },
    ],
  }),
  component: About,
});

function About() {
  const { tx } = useLang();
  return (
    <>
      <PageHero eyebrow={tx("Corporate Profile", "Kurumsal Profil")} title={tx("Engineering a more reliable grid", "Daha güvenilir bir şebeke tasarlıyoruz")}>
        <div className="space-y-4">
          <p>{tx("At AES, we supply and manufacture electronic products. We bring in high-quality products from abroad according to the needs of the sector.", "AES olarak elektronik ürünlerin tedariğini sağlıyor ve üretiyoruz. Sektörün ihtiyacına göre yüksek kalite ürünleri yurt dışından getiriyoruz.")}</p>
          <p>{tx("With our engineering expertise and R&D capabilities, we deliver reliable, precise and sustainable products that increase energy efficiency, improve workplace safety and optimise operational processes. Our solutions are designed to drive the transformation of the electricity distribution sector and to enable more effective and safer energy management.", "Mühendislik uzmanlığımız ve Ar-Ge yeteneklerimizle, enerji verimliliğini artıran, işyeri güvenliğini iyileştiren ve operasyonel süreçleri optimize eden güvenilir, hassas ve sürdürülebilir ürünler sunuyoruz. Çözümlerimiz, elektrik dağıtım sektörünün dönüşümünü yönlendirmek, daha etkili ve güvenli enerji yönetimi sağlamak için tasarlanmıştır.")}</p>
          <p>{tx("As AES Enerji Sistemleri, we are committed to continuously adding value to the sector with innovative solutions, strong partnerships and customer-focused services.", "AES Enerji Sistemleri olarak sektöre sürekli değer katarak yenilikçi çözümler, güçlü ortaklıklar ve müşteri odaklı hizmetler sunmaya kararlıyız.")}</p>
        </div>
      </PageHero>
      <section className="container-page grid gap-6 py-16 md:grid-cols-3">
        {[[Calendar, "2019", tx("Founded in Istanbul", "İstanbul'da kuruldu")], [Users, tx("20+ years", "20+ yıl"), tx("Cumulative engineering experience", "Toplam mühendislik deneyimi")], [Zap, tx("5 product lines", "5 ürün ailesi"), tx("OMNI family + partner solutions", "OMNI ailesi + iş ortağı çözümleri")]].map(([I, v, l]) => {
          const Icon = I as typeof Zap;
          return (
            <div key={v as string} className="rounded-xl border bg-surface p-6">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-3 text-3xl font-extrabold">{v as string}</div>
              <div className="text-sm text-muted-foreground">{l as string}</div>
            </div>
          );
        })}
      </section>
      <section className="bg-surface py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            [Target, tx("Mission", "Misyon"), tx("To deliver locally engineered, field-proven solutions that reduce power outages, shorten restoration times and protect the people who keep the grid running.", "Elektrik kesintilerini azaltan, arıza giderme sürelerini kısaltan ve şebekeyi ayakta tutan insanları koruyan, yerli olarak geliştirilmiş ve sahada kanıtlanmış çözümler sunmak.")],
            [Eye, tx("Vision", "Vizyon"), tx("To be the leading smart grid technology partner for distribution utilities across Türkiye, the Middle East and beyond.", "Türkiye, Orta Doğu ve ötesindeki dağıtım şirketlerinin önde gelen akıllı şebeke teknoloji ortağı olmak.")],
            [FlaskConical, tx("R&D Focus", "Ar-Ge Odağı"), tx("Sensor technology, fault localisation algorithms, arc flash protection and AI-driven asset health analytics — developed and tested in real field conditions.", "Sensör teknolojisi, arıza lokalizasyon algoritmaları, ark koruması ve yapay zekâ destekli varlık sağlığı analitiği — gerçek saha koşullarında geliştirilip test edilir.")],
          ].map(([I, h, d]) => {
            const Icon = I as typeof Zap;
            return (
              <div key={h as string} className="card-hover rounded-xl border bg-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-primary text-primary-foreground"><Icon className="h-6 w-6" /></span>
                <h2 className="mt-5 text-xl font-bold">{h as string}</h2>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
