import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Hardline Hauling",
  description: "Simple, transparent hauling and heavy-lifting support for cleanouts and single-item pickups."
};

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-orange-400" fill="none" aria-hidden="true">
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm uppercase tracking-[0.14em] text-orange-400">Services</p>
      <h1 className="mt-2 font-display text-4xl text-zinc-100">Services</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">Simple, transparent hauling - we handle the heavy lifting.</p>
      <p className="mt-2 max-w-2xl text-zinc-400">
        From single-item pickups to full cleanouts - we&apos;ll load, haul, and leave your space clean.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article key={service.title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="flex items-center gap-2">
              <ServiceIcon />
              <h2 className="font-display text-2xl text-zinc-100">{service.title}</h2>
            </div>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p>
                <span className="font-semibold text-zinc-100">What it is:</span> {service.whatItIs}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">What we take:</span> {service.whatWeTake}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">Good for:</span> {service.goodFor}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="font-display text-2xl text-zinc-100">What We Typically Haul</h3>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Furniture, mattresses</li>
            <li>Appliances</li>
            <li>Yard waste (bagged/contained)</li>
            <li>Cardboard and misc household items</li>
            <li>Garage cleanouts</li>
            <li>Light construction debris (non-hazardous)</li>
          </ul>
        </article>

        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="font-display text-2xl text-zinc-100">What We Don&apos;t Take</h3>
          <p className="mt-4 text-zinc-300">
            Hazardous chemicals, paint, asbestos, medical waste, and similar restricted materials.
          </p>
          <p className="mt-3 text-zinc-400">Ask if unsure.</p>
        </article>
      </div>

      <div className="mt-12 rounded-xl border border-orange-400/30 bg-orange-500/10 p-6">
        <h3 className="font-display text-2xl text-zinc-100">Call/Text for a quick quote</h3>
        <a
          href={SITE.phoneHref}
          className="mt-4 inline-block rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
