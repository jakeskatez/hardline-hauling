import { SITE } from "@/lib/site";

export default function CTA() {
  return (
    <section className="border-y border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-12 md:flex-row md:items-center">
        <h2 className="font-display text-3xl text-zinc-100 md:text-4xl">Need it gone today?</h2>
        <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap">
          <a
            href={SITE.phoneHref}
            className="rounded-md bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600 hover:shadow-glow"
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
      </div>
    </section>
  );
}
