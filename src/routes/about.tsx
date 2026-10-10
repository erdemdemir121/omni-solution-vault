import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, FlaskConical, Calendar, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/site/Layout";

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
  return (
    <>
      <PageHero eyebrow="Corporate Profile" title="Engineering a more reliable grid">
        AES Akıllı Enerji Sistemleri was founded in 2019 in Istanbul by engineers with over 20 years of cumulative experience in electrical engineering and energy distribution.
      </PageHero>
      <section className="container-page grid gap-6 py-16 md:grid-cols-3">
        {[[Calendar, "2019", "Founded in Istanbul"], [Users, "20+ years", "Cumulative engineering experience"], [Zap, "5 product lines", "OMNI family + partner solutions"]].map(([I, v, l]) => {
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
            [Target, "Mission", "To deliver locally engineered, field-proven solutions that reduce power outages, shorten restoration times and protect the people who keep the grid running."],
            [Eye, "Vision", "To be the leading smart grid technology partner for distribution utilities across Türkiye, the Middle East and beyond."],
            [FlaskConical, "R&D Focus", "Sensor technology, fault localisation algorithms, arc flash protection and AI-driven asset health analytics — developed and tested in real field conditions."],
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
