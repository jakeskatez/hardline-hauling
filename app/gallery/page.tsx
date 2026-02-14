import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Hardline Hauling",
  description: "Recent hauls and cleanouts by Hardline Hauling."
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm uppercase tracking-[0.14em] text-orange-400">Gallery</p>
      <h1 className="mt-2 font-display text-4xl text-zinc-100">Gallery</h1>
      <p className="mt-4 text-zinc-300">Recent hauls and cleanouts.</p>
      <div className="mt-10">
        <GalleryGrid images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
