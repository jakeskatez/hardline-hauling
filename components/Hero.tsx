import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/IMG_9130.jpg")}
          alt="Hardline Hauling banner with services and phone number"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-28">
        <span className="inline-block rounded-full border border-orange-400/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-orange-300 sm:text-xs">
          {SITE.serviceArea}
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-zinc-100 sm:text-4xl md:text-6xl">
          Hardline Hauling - Junk Removal Done Right
        </h1>
        <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
          Owner-operated junk hauling for homes, apartments, and small businesses. Quick scheduling, fair pricing,
          and friendly service.
        </p>

        <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:flex sm:flex-wrap">
          <a
            href={SITE.phoneHref}
            className="rounded-md bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600 hover:shadow-glow"
          >
            Call Now
          </a>
          <Link
            href="/services"
            className="rounded-md border border-zinc-600 px-6 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-zinc-400"
          >
            View Services
          </Link>
          <Link
            href="/gallery"
            className="rounded-md border border-zinc-600 px-6 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-zinc-400"
          >
            See Gallery
          </Link>
        </div>

        <ul className="mt-8 grid max-w-2xl gap-2 text-sm text-zinc-300 sm:grid-cols-2">
          <li>Owner-operated</li>
          <li>Upfront pricing</li>
          <li>Same-day / next-day options</li>
          <li>Careful hauling and cleanup</li>
        </ul>
      </div>
    </section>
  );
}
