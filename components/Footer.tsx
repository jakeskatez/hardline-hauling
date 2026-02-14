import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/AC7C7A54-F087-4781-9ADD-510FF7993736.png"
              alt="Hardline Hauling logo"
              width={48}
              height={48}
              className="rounded"
            />
            <p className="font-display text-xl text-zinc-100">Hardline Hauling</p>
          </div>
          <p className="mt-3 text-sm text-zinc-300">Hardline Hauling - Junk Removal</p>
        </div>

        <div>
          <h2 className="font-display text-lg text-zinc-100">Contact</h2>
          <a href={SITE.phoneHref} className="mt-3 block text-zinc-200 hover:text-orange-400">
            {SITE.phoneDisplay}
          </a>
          <p className="mt-2 text-zinc-400">{SITE.serviceArea}</p>
        </div>

        <div>
          <h2 className="font-display text-lg text-zinc-100">Quick Links</h2>
          <div className="mt-3 flex flex-col gap-2 text-zinc-300">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-orange-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
