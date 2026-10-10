import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "tr";
const dict = {
  home: { en: "Home", tr: "Ana Sayfa" },
  about: { en: "About", tr: "Hakkımızda" },
  products: { en: "Products", tr: "Ürünler" },
  quality: { en: "Quality & Environment", tr: "Kalite & Çevre" },
  contact: { en: "Contact", tr: "İletişim" },
  quote: { en: "Get a Quote", tr: "Teklif Al" },
  allProducts: { en: "All Products", tr: "Tüm Ürünler" },
  heroTitle: { en: "Next Generation Smart Grid & Energy Reliability", tr: "Yeni Nesil Akıllı Şebeke ve Enerji Güvenilirliği" },
  heroSub: {
    en: "AES designs monitoring, protection and asset analytics solutions that reduce outages and keep field crews safe.",
    tr: "AES, kesintileri azaltan ve saha ekiplerini koruyan izleme, koruma ve varlık analitiği çözümleri geliştirir.",
  },
  explore: { en: "Explore Omni Family", tr: "Omni Ailesini Keşfet" },
  sales: { en: "Contact Sales", tr: "Satışa Ulaşın" },
  discover: { en: "Discover", tr: "Keşfet" },
  details: { en: "View Product Details", tr: "Ürün Detayları" },
} as const;

type Key = keyof typeof dict;
const Ctx = createContext<{ lang: Lang; toggle: () => void; t: (k: Key) => string }>({
  lang: "en",
  toggle: () => {},
  t: (k) => dict[k].en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <Ctx.Provider value={{ lang, toggle: () => setLang((l) => (l === "en" ? "tr" : "en")), t: (k) => dict[k][lang] }}>
      {children}
    </Ctx.Provider>
  );
}
export const useLang = () => useContext(Ctx);
