import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Leaf, HardHat } from "lucide-react";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality, Environment & Safety — AES Energy" },
      { name: "description", content: "AES Energy's quality, environmental and occupational health & safety policies." },
      { property: "og:title", content: "Quality, Environment & Safety — AES Energy" },
      { property: "og:description", content: "Our commitments to quality, the environment and workplace safety." },
    ],
  }),
  component: Quality,
});

const policies = [
  { icon: BadgeCheck, title: "Quality Policy", std: "ISO 9001", items: ["Meet customer and regulatory requirements in every delivery", "Continuously improve products through field feedback", "Use traceable, calibrated test equipment", "Train our team to the highest technical standards"] },
  { icon: Leaf, title: "Environmental Policy", std: "ISO 14001", items: ["Minimise waste and energy consumption in operations", "Design products for long service life and recyclability", "Comply with all environmental legislation", "Support grid efficiency to reduce emissions"] },
  { icon: HardHat, title: "Occupational Health & Safety", std: "ISO 45001", items: ["Zero-harm approach for employees and field crews", "Risk assessment before every site activity", "Products engineered to keep operators outside hazard zones", "Open reporting culture for near-misses"] },
];

function Quality() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Quality, Environment & Safety">Integrated management principles that guide how we design, build and support every product.</PageHero>
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
