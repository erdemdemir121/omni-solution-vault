import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { products, locProduct } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { product?: string | undefined } => ({ product: typeof s["product"] === "string" ? (s["product"] as string) : undefined }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact — AES Energy" },
      { name: "description", content: "Contact AES Energy in Kartal, Istanbul. +90 216 504 6570 · info@aesenergy.com.tr" },
      { property: "og:title", content: "Contact AES Energy" },
      { property: "og:description", content: "Request a quote or talk to our engineering team." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const { product } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const { tx, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={tx("Get in touch", "Bize ulaşın")} title={tx("Contact Us", "İletişim")}>{tx("Request a quote, a datasheet or a technical consultation.", "Teklif, teknik föy veya teknik danışmanlık talep edin.")}</PageHero>
      <div className="container-page grid gap-10 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {[
            [MapPin, tx("Address", "Adres"), "AC Moment Istanbul B-213, 34880 Kartal / İstanbul, Türkiye", undefined],
            [Phone, tx("Phone", "Telefon"), "+90 216 504 6570", "tel:+902165046570"],
            [Mail, tx("Email", "E-posta"), "info@aesenergy.com.tr", "mailto:info@aesenergy.com.tr"],
          ].map(([I, l, v, h]) => {
            const Icon = I as typeof MapPin;
            return (
              <div key={l as string} className="flex gap-4 rounded-xl border bg-surface p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{l as string}</div>
                  {h ? <a href={h as string} className="font-semibold hover:text-primary">{v as string}</a> : <div className="font-semibold">{v as string}</div>}
                </div>
              </div>
            );
          })}
          <iframe title={tx("AES Energy location map", "AES Energy konum haritası")} className="h-72 w-full rounded-xl border" loading="lazy" src="https://www.google.com/maps?q=AC+Moment+Istanbul+Kartal&output=embed" />
        </div>
        <div className="lg:col-span-3 rounded-2xl border bg-card p-8 shadow-elevated">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h2 className="mt-4 text-2xl font-bold">{tx("Message received", "Mesajınız alındı")}</h2>
              <p className="mt-2 text-muted-foreground">{tx("Thank you — our team will reply within one business day.", "Teşekkürler — ekibimiz bir iş günü içinde dönüş yapacak.")}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
              <h2 className="sm:col-span-2 text-2xl font-bold">{tx("Send us a message", "Bize mesaj gönderin")}</h2>
              <label className="text-sm font-medium">{tx("Name", "Ad Soyad")} *<input required className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">{tx("Company", "Firma")}<input className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">{tx("Email", "E-posta")} *<input required type="email" className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">{tx("Phone", "Telefon")}<input type="tel" className={`${field} mt-1`} /></label>
              <label className="sm:col-span-2 text-sm font-medium">{tx("Product of Interest", "İlgilendiğiniz Ürün")}
                <select defaultValue={product ?? ""} className={`${field} mt-1`}>
                  <option value="">{tx("General inquiry", "Genel bilgi talebi")}</option>
                  {products.map((p) => <option key={p.id} value={p.id}>{locProduct(p, lang).title}</option>)}
                </select>
              </label>
              <label className="sm:col-span-2 text-sm font-medium">{tx("Message", "Mesaj")} *<textarea required rows={5} className={`${field} mt-1`} /></label>
              <button className="sm:col-span-2 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow"><Send className="h-4 w-4" /> {tx("Send Message", "Mesajı Gönder")}</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
