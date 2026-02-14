"use client";

import Image from "next/image";

type LightboxModalProps = {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function LightboxModal({ images, currentIndex, onClose, onNext, onPrev }: LightboxModalProps) {
  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[80] bg-black/90 p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <p className="rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-xs text-zinc-200">
          {currentIndex + 1} / {images.length}
        </p>
        <button
          className="rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-200"
          onClick={onClose}
          aria-label="Close image modal"
        >
          Close
        </button>
      </div>

      <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-zinc-100 sm:left-6 sm:px-4 sm:py-3"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <span className="hidden sm:inline">Prev</span>
          <span className="sm:hidden">{"<"}</span>
        </button>

        <div className="relative h-[75vh] w-full max-w-4xl">
          <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="100vw" />
        </div>

        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-zinc-100 sm:right-6 sm:px-4 sm:py-3"
          onClick={onNext}
          aria-label="Next image"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">{">"}</span>
        </button>
      </div>
    </div>
  );
}
