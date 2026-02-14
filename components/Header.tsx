"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/AC7C7A54-F087-4781-9ADD-510FF7993736.png"
            alt="Hardline Hauling logo badge"
            width={42}
            height={42}
            className="rounded"
            priority
          />
          <span className="truncate font-display text-base tracking-wide text-zinc-100 sm:text-lg">Hardline Hauling</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-orange-400 ${
                pathname === item.href ? "text-orange-400" : "text-zinc-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 hover:shadow-glow"
          >
            Call Now
          </a>
        </div>

        <button
          className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm ${
                  pathname === item.href ? "bg-zinc-800 text-orange-400" : "text-zinc-200"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 rounded-md bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
