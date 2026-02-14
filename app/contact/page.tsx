import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Hardline Hauling",
  description: "Call or text Hardline Hauling for a quick junk removal quote."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm uppercase tracking-[0.14em] text-orange-400">Contact</p>
      <h1 className="mt-2 font-display text-4xl text-zinc-100">Contact</h1>
      <p className="mt-4 text-zinc-300">Ready to get started? Call or text for a quick quote.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="font-display text-2xl text-zinc-100">Contact</h2>
          <p className="mt-3 text-zinc-300">Call or text and we&apos;ll respond as soon as possible.</p>
          <p className="mt-5 break-all font-display text-3xl text-orange-400 sm:text-4xl">{SITE.phoneDisplay}</p>
          <div className="mt-6 grid w-full max-w-md grid-cols-1 gap-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap">
            <a
              href={SITE.phoneHref}
              className="rounded-md bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Call Now
            </a>
            <a
              href={SITE.smsHref}
              className="rounded-md border border-zinc-600 px-6 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-zinc-400"
            >
              Text Us
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="font-display text-2xl text-zinc-100">Serving Solano County &amp; more</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Fairfield</li>
            <li>Vacaville</li>
            <li>Vallejo</li>
            <li>Suisun City</li>
            <li>Benicia (and nearby)</li>
          </ul>
          <p className="mt-5 text-zinc-400">Hours vary - call/text to confirm availability.</p>
        </article>
      </div>
    </section>
  );
}
