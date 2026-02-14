"use client";

import { SITE } from "@/lib/site";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-700 bg-zinc-950/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={SITE.phoneHref}
          className="flex-1 rounded-md bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call Now
        </a>
        <a
          href={SITE.smsHref}
          className="flex-1 rounded-md border border-zinc-600 px-4 py-3 text-center text-sm font-semibold text-zinc-100"
        >
          Text Us
        </a>
      </div>
    </div>
  );
}
