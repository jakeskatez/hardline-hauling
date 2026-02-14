import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import { GALLERY_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hardline Hauling | Junk Removal in Solano County",
  description:
    "Owner-operated junk hauling. Furniture, appliances, cleanouts, light demo, and more. Call 720-445-0103."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-orange-400">Gallery</p>
            <h2 className="mt-2 font-display text-3xl text-zinc-100">Recent Jobs</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-zinc-300 hover:text-orange-400">
            View Full Gallery
          </Link>
        </div>
        <GalleryGrid images={GALLERY_IMAGES} previewCount={4} />
      </section>

      <CTA />
    </>
  );
}
