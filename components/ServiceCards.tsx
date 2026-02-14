import Link from "next/link";
import { SERVICES } from "@/lib/site";

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-orange-400">Services</p>
          <h2 className="mt-2 font-display text-3xl text-zinc-100">What We Handle</h2>
        </div>
        <Link href="/services" className="text-sm font-semibold text-zinc-300 hover:text-orange-400">
          View all services
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-zinc-700"
          >
            <h3 className="font-display text-2xl text-zinc-100">{service.title}</h3>
            <p className="mt-3 text-zinc-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
