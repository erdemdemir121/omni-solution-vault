import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Zap, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { categories, locCategory } from "@/data/products";
import { useLang } from "@/lib/i18n";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="AES Energy home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
        <Zap className="h-5 w-5" fill="currentColor" />
      </span>
      <span className={`leading-tight ${light ? "text-navy-foreground" : "text-foreground"}`}>
        <span className="block text-lg font-extrabold tracking-tight">AES Energy</span>
        <span className="block text-[10px] uppercase tracking-[0.18em] opacity-70">Akıllı Enerji Sistemleri</span>
      </span>
    </Link>
  );
}

const linkCls = "text-sm font-medium text-navy-foreground/80 hover:text-navy-foreground transition-colors";
const active = { className: "text-navy-foreground" };

export function Navbar() {
  const { t, lang, toggle, tx } = useLang();
  const cats = categories.map((c) => locCategory(c, lang));
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy-2">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo light />
        <nav className="hidden lg:flex items-center gap-7" aria-label={tx("Main", "Ana menü")}>
          <Link to="/" className={linkCls} activeProps={active} activeOptions={{ exact: true }}>{t("home")}</Link>
          <Link to="/about" className={linkCls} activeProps={active}>{t("about")}</Link>
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button className={`${linkCls} flex items-center gap-1`} aria-expanded={dd} onClick={() => setDd((v) => !v)}>
              {t("products")} <ChevronDown className="h-4 w-4" />
            </button>
            {dd && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-72 rounded-xl border bg-popover p-2 shadow-elevated">
                  <Link to="/products" className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-accent" onClick={() => setDd(false)}>{t("allProducts")}</Link>
                  {cats.map((c) => (
                    <Link key={c.id} to="/products/$category" params={{ category: c.id }} onClick={() => setDd(false)} className="block rounded-lg px-3 py-2 hover:bg-accent">
                      <div className="text-sm font-semibold text-foreground">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.tagline}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/quality" className={linkCls} activeProps={active}>{t("quality")}</Link>
          <Link to="/contact" className={linkCls} activeProps={active}>{t("contact")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="flex items-center gap-1 rounded-md border border-navy-2 px-2.5 py-1.5 text-xs font-semibold text-navy-foreground hover:bg-navy-2" aria-label={tx("Switch to Turkish", "İngilizceye geç")}>
            <Globe className="h-3.5 w-3.5" /> {lang === "en" ? "EN" : "TR"}
          </button>
          <Link to="/contact" className="hidden sm:inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">{t("quote")}</Link>
          <button className="lg:hidden p-2 text-navy-foreground" onClick={() => setOpen(true)} aria-label={tx("Open menu", "Menüyü aç")}><Menu /></button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-navy p-6">
            <div className="flex justify-between items-center mb-8">
              <Logo light />
              <button onClick={() => setOpen(false)} className="text-navy-foreground" aria-label={tx("Close menu", "Menüyü kapat")}><X /></button>
            </div>
            <nav className="flex flex-col gap-4" onClick={() => setOpen(false)}>
              <Link to="/" className={linkCls}>{t("home")}</Link>
              <Link to="/about" className={linkCls}>{t("about")}</Link>
              <Link to="/products" className={linkCls}>{t("products")}</Link>
              {cats.map((c) => (
                <Link key={c.id} to="/products/$category" params={{ category: c.id }} className={`${linkCls} pl-4`}>{c.name}</Link>
              ))}
              <Link to="/quality" className={linkCls}>{t("quality")}</Link>
              <Link to="/contact" className={linkCls}>{t("contact")}</Link>
              <Link to="/contact" className="mt-4 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">{t("quote")}</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { lang, tx } = useLang();
  const cats = categories.map((c) => locCategory(c, lang));
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-navy-foreground/70">{tx("Smart grid monitoring, protection and asset analytics since 2019.", "2019'dan beri akıllı şebeke izleme, koruma ve varlık analitiği.")}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">{tx("Products", "Ürünler")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {cats.map((c) => (
              <li key={c.id}><Link to="/products/$category" params={{ category: c.id }} className="hover:text-navy-foreground">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">{tx("Company", "Kurumsal")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/about" className="hover:text-navy-foreground">{tx("About Us", "Hakkımızda")}</Link></li>
            <li><Link to="/quality" className="hover:text-navy-foreground">{tx("Quality & Environment", "Kalite & Çevre")}</Link></li>
            <li><Link to="/contact" className="hover:text-navy-foreground">{tx("Contact", "İletişim")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">{tx("Contact", "İletişim")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />AC Moment Istanbul B-213, 34880 Kartal / İstanbul</li>
            <li className="flex gap-2"><Phone className="h-4 w-4" /><a href="tel:+902165046570">+90 216 504 6570</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4" /><a href="mailto:info@aesenergy.com.tr">info@aesenergy.com.tr</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-2 py-5 text-center text-xs text-navy-foreground/60">© {new Date().getFullYear()} AES Akıllı Enerji Sistemleri. {tx("All rights reserved.", "Tüm hakları saklıdır.")}</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="bg-gradient-navy grid-pattern text-navy-foreground">
      <div className="container-page py-16 md:py-20">
        {eyebrow && <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">{eyebrow}</span>}
        <h1 className="mt-4 max-w-3xl text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-navy-foreground/75">{children}</div>}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-md border border-primary/20 bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">{children}</span>;
}
