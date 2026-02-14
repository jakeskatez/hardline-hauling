"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxModal from "@/components/LightboxModal";

type GalleryGridProps = {
  images: { src: string; alt: string }[];
  previewCount?: number;
};

export default function GalleryGrid({ images, previewCount }: GalleryGridProps) {
  const list = previewCount ? images.slice(0, previewCount) : images;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {list.map((image, index) => (
          <button
            key={image.src}
            className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-zinc-800"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <LightboxModal
          images={list}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={() => setActiveIndex((prev) => ((prev ?? 0) + 1) % list.length)}
          onPrev={() => setActiveIndex((prev) => ((prev ?? 0) - 1 + list.length) % list.length)}
        />
      )}
    </>
  );
}
