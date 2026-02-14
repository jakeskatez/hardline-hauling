import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hardline-hauling.local"),
  title: "Hardline Hauling | Junk Removal in Solano County",
  description:
    "Owner-operated junk hauling. Furniture, appliances, cleanouts, light demo, and more. Call 720-445-0103.",
  openGraph: {
    title: "Hardline Hauling | Junk Removal in Solano County",
    description:
      "Owner-operated junk hauling. Furniture, appliances, cleanouts, light demo, and more. Call 720-445-0103.",
    images: ["/images/IMG_9130.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} bg-brand-bg text-zinc-100`}>
        <div className="min-h-screen">
          <Header />
          <main className="pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </div>
      </body>
    </html>
  );
}
