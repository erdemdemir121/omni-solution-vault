import type { Lang } from "@/lib/i18n";
import { rawProducts, type Block } from "./catalog.gen";

export type { Block };
export type CategoryId = "omnigrid" | "omnisafe" | "omnidetect" | "omniasset" | "other-products";

interface CategoryText { name: string; tagline: string; description: string; scope: string[] }
export interface Category extends CategoryText { id: CategoryId; tr: CategoryText }

export interface Product {
  id: string;
  category: CategoryId;
  title: string;
  subtitleTr: string;
  short: string;
  body: Block[];
  tags: string[];
  tagsTr: string[];
  tr: { short: string; body: Block[] };
}

// Category descriptions are taken from the official AES website (aesenergy.com.tr).
export const categories: Category[] = [
  {
    id: "omnigrid",
    name: "OMNIGRID",
    tagline: "Energy management & smart grid",
    description: "OMNIGRID, a member of the Omni family, offers state-of-the-art solutions for energy management and smart grid integration. Its advanced structure increases grid stability and facilitates real-time monitoring. It provides end-to-end grid visibility to electric distribution companies.",
    scope: [],
    tr: {
      name: "OMNIGRID",
      tagline: "Enerji yönetimi ve akıllı şebeke",
      description: "Omni ailesinin bir üyesi olan OMNIGRID, enerji yönetimi ve akıllı şebeke entegrasyonu için en son teknolojiye sahip çözümler sunmaktadır. Gelişmiş yapısı, şebeke istikrarını artırır ve gerçek zamanlı izlemeyi kolaylaştırır. Elektrik dağıtım şirketlerine uçtan uca şebeke görünürlüğü sağlar.",
      scope: [],
    },
  },
  {
    id: "omnisafe",
    name: "OMNISAFE",
    tagline: "Field personnel safety",
    description: "OMNISAFE, a member of the Omni family, was developed to enhance the safety of field personnel and secure high-risk distribution operations. It offers intelligent protection against electrical, fire, and mechanical hazards.",
    scope: [],
    tr: {
      name: "OMNISAFE",
      tagline: "Saha personeli güvenliği",
      description: "Omni ailesinin bir üyesi olan OMNISAFE, saha personelinin güvenliğini artırmak ve yüksek riskli dağıtım operasyonlarını güvence altına almak için geliştirilmiştir. Elektrik, yangın ve mekanik tehlikelere karşı akıllı koruma sunar.",
      scope: [],
    },
  },
  {
    id: "omnidetect",
    name: "OMNIDETECT",
    tagline: "Early fault detection",
    description: "OMNIDETECT, a member of the Omni family, consists of advanced monitoring and detection systems designed to identify faults and abnormal conditions in electrical distribution infrastructure at an early stage. It continuously monitors critical parameters such as thermal variations, partial discharge, and electrical anomalies to detect potential failures before they occur.",
    scope: [],
    tr: {
      name: "OMNIDETECT",
      tagline: "Erken arıza tespiti",
      description: "Omni ailesinin bir üyesi olan OMNIDETECT, elektrik dağıtım altyapısındaki arızaları ve anormal durumları erken aşamada tespit etmek için tasarlanmış gelişmiş izleme ve algılama sistemlerinden oluşmaktadır. Potansiyel arızaları oluşmadan önce tespit etmek için termal değişimler, kısmi deşarj ve elektriksel anormallikler gibi kritik parametreleri sürekli olarak izler.",
      scope: [],
    },
  },
  {
    id: "omniasset",
    name: "OMNIASSET",
    tagline: "Asset protection & lifetime",
    description: "OMNIASSET, a member of the Omni family, consists of specialized products designed to protect and extend the life of physical assets in electrical distribution infrastructure. It optimizes investment costs by providing protection against harsh environmental conditions.",
    scope: [],
    tr: {
      name: "OMNIASSET",
      tagline: "Varlık koruma ve ömür uzatma",
      description: "Omni ailesinin bir üyesi olan OMNIASSET, elektrik dağıtım altyapısındaki fiziksel varlıkların korunması ve ömrünün uzatılması için tasarlanmış özel ürünlerden oluşmaktadır. Zorlu çevre koşullarına karşı koruma sağlayarak yatırım maliyetlerini optimize eder.",
      scope: [],
    },
  },
  {
    id: "other-products",
    name: "Other Products",
    tagline: "Lighting & meter testing",
    description: "Since 2019, AES Smart Energy Systems has been developing cutting-edge solutions for electricity distribution companies, specializing in energy monitoring, occupational safety, material technologies, and cable testing devices.",
    scope: [],
    tr: {
      name: "Diğer Ürünler",
      tagline: "Aydınlatma ve sayaç test",
      description: "AES Enerji Sistemleri, 2019 yılından bu yana enerji dağıtım şirketlerine yönelik enerji izleme, iş güvenliği, malzeme teknolojileri ve kablo test cihazları alanlarında uzmanlaşmış, son teknoloji çözümler geliştiriyor.",
      scope: [],
    },
  },
];

// Display names (EN / TR). Turkish names follow the official site's Turkish menu.
const names: Record<string, [string, string]> = {
  "lv-scada": ["Low Voltage Monitoring System (LV SCADA)", "Alçak Gerilim SCADA Analizörü"],
  "overhead-line-monitoring": ["Overhead Line Monitoring System", "Havai Hat İzleme Sistemi"],
  "demand-control-device": ["Demand Control Device", "Demand Kontrol Cihazı"],
  "smart-bushing": ["Smart Bushing", "Akıllı Buşing"],
  "battery-rectifier-management": ["Battery Rectifier Management System", "Akü Doğrultucu Yönetim Sistemi"],
  "personal-voltage-detector": ["Personal Voltage Detector", "Kişisel Gerilim Dedektörü"],
  "regional-electric-field-detector": ["Regional Voltage Detector", "Bölgesel Elektrik Alan Dedektörü"],
  "microcapsule-fire-barrier": ["Microcapsule Fire Extinguisher", "Mikro Kapsül Yangın Bariyeri"],
  "vlf-test-system": ["VLF Test System", "VLF Arıza Tespit Cihazı"],
  "deflection-measurement-device": ["Deflection Measurement Device", "Sehim Ölçüm Cihazı"],
  "real-time-ice-load-meter": ["Real-Time Ice Load Meter", "Gerçek Zamanlı Buz Yükü Ölçer"],
  "thermochromic-cable-clips": ["Thermochromic Cable Clips", "Termokromik Kablo Klipsleri"],
  "corrosion-inhibitor": ["Corrosion Inhibitor", "Korozyon İnhibitörü"],
  "insulator-cover": ["Insulator Cover", "İzolatör Kılıfı"],
  "polymeric-mv-fuse": ["Polymeric (Composite) MV Fuse", "Polimerik (Kompozit) OG Sigortası"],
  "polymer-axial-lighting-poles": ["Polymer (Composite) 'Axial' Lighting Poles", "Polimer (Kompozit) 'Eksenel' Aydınlatma Direkleri"],
  "meter-test-bench": ["Meter Test Bench", "Sayaç Ayar Masası"],
  "aes-lighting-products": ["AES Lighting Products", "AES Aydınlatma Ürünleri"],
};

function summary(body: Block[]): string {
  const p = body.find(([t, s]) => t === "p" && s.length > 40);
  if (p) return p[1].length > 220 ? p[1].slice(0, 217).replace(/\s+\S*$/, "") + "…" : p[1];
  return body.filter(([t]) => t === "li").slice(0, 3).map(([, s]) => s).join(" · ");
}

export const products: Product[] = rawProducts.map((r) => {
  const [en, tr] = names[r.id] ?? [r.title, r.titleTr];
  // Use the Turkish body when the English page is empty, and vice versa.
  const body = r.body.length ? r.body : r.bodyTr;
  const bodyTr = r.bodyTr.length ? r.bodyTr : r.body;
  return {
    id: r.id,
    category: r.category as CategoryId,
    title: en,
    subtitleTr: tr,
    short: summary(body),
    body,
    tags: [],
    tagsTr: [],
    tr: { short: summary(bodyTr), body: bodyTr },
  };
});

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (cat: string, id: string) => products.find((p) => p.category === cat && p.id === id);
export const productsIn = (cat: string) => products.filter((p) => p.category === cat);

export const locCategory = (c: Category, lang: Lang) => ({ id: c.id, ...(lang === "tr" ? c.tr : c) });
export const locProduct = (p: Product, lang: Lang) =>
  lang === "tr"
    ? { id: p.id, category: p.category, title: p.subtitleTr, subtitle: p.title, tags: p.tagsTr, short: p.tr.short, body: p.tr.body }
    : { id: p.id, category: p.category, title: p.title, subtitle: p.subtitleTr, tags: p.tags, short: p.short, body: p.body };
