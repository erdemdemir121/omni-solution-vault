import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { product?: string } => ({ product: typeof s.product === "string" ? s.product : undefined }),
  head: () => ({
    meta: [
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
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact Us">Request a quote, a datasheet or a technical consultation.</PageHero>
      <div className="container-page grid gap-10 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {[
            [MapPin, "Address", "AC Moment Istanbul B-213, 34880 Kartal / İstanbul, Türkiye", undefined],
            [Phone, "Phone", "+90 216 504 6570", "tel:+902165046570"],
            [Mail, "Email", "info@aesenergy.com.tr", "mailto:info@aesenergy.com.tr"],
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
          <iframe title="AES Energy location map" className="h-72 w-full rounded-xl border" loading="lazy" src="https://www.google.com/maps?q=AC+Moment+Istanbul+Kartal&output=embed" />
        </div>
        <div className="lg:col-span-3 rounded-2xl border bg-card p-8 shadow-elevated">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h2 className="mt-4 text-2xl font-bold">Message received</h2>
              <p className="mt-2 text-muted-foreground">Thank you — our team will reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
              <h2 className="sm:col-span-2 text-2xl font-bold">Send us a message</h2>
              <label className="text-sm font-medium">Name *<input required className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">Company<input className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">Email *<input required type="email" className={`${field} mt-1`} /></label>
              <label className="text-sm font-medium">Phone<input type="tel" className={`${field} mt-1`} /></label>
              <label className="sm:col-span-2 text-sm font-medium">Product of Interest
                <select defaultValue={product ?? ""} className={`${field} mt-1`}>
                  <option value="">General inquiry</option>
                  {products.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                </select>
              </label>
              <label className="sm:col-span-2 text-sm font-medium">Message *<textarea required rows={5} className={`${field} mt-1`} /></label>
              <button className="sm:col-span-2 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-glow"><Send className="h-4 w-4" /> Send Message</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
