import { withBasePath } from "@/lib/basePath";

export const SITE = {
  name: "Hardline Hauling",
  tagline: "Junk Removal",
  phoneDisplay: "720-445-0103",
  phoneHref: "tel:7204450103",
  smsHref: "sms:7204450103",
  serviceArea: "Serving Solano County & more"
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export const SERVICES = [
  {
    title: "Junk Removal",
    description: "Cleanouts, clutter, and bulk pickups.",
    whatItIs: "General junk hauling for homes, apartments, and small business spaces.",
    whatWeTake: "Bagged clutter, old household items, and mixed non-hazardous junk.",
    goodFor: "Move-outs, garage clear-outs, and reclaiming storage space."
  },
  {
    title: "Furniture / Appliance Removal",
    description: "Couches, mattresses, fridges, washers and more.",
    whatItIs: "Safe removal of heavy furniture and large appliances.",
    whatWeTake: "Sofas, sectionals, mattresses, refrigerators, washers, dryers, tables.",
    goodFor: "Single-item pickups, upgrades, and property turnover prep."
  },
  {
    title: "Light Demo",
    description: "Tear-down of sheds, fencing, and small fixtures (non-structural).",
    whatItIs: "Non-structural teardown and debris haul-away.",
    whatWeTake: "Old sheds, broken fencing, small built-ins, and detached fixtures.",
    goodFor: "Backyard refreshes and clearing out damaged small structures."
  },
  {
    title: "Delivery / Pickup",
    description: "Help moving bulky items when you need a hand.",
    whatItIs: "Local pickup and drop-off help for oversized items.",
    whatWeTake: "Furniture, appliances, marketplace finds, and bulky household goods.",
    goodFor: "When your vehicle is too small or you need labor plus hauling."
  }
];

export const GALLERY_IMAGES = [
  {
    src: withBasePath("/images/IMG_8796.jpg"),
    alt: "Hardline Hauling trailer loaded for a junk removal job close-up"
  },
  {
    src: withBasePath("/images/IMG_8795.jpg"),
    alt: "Hardline Hauling trailer loaded for a junk removal job wide view"
  },
  {
    src: withBasePath("/images/IMG_8624.jpg"),
    alt: "Hardline Hauling trailer at night after a cleanup job"
  },
  {
    src: withBasePath("/images/IMG_8464.jpg"),
    alt: "Hardline Hauling driveway pickup with loaded trailer"
  },
  {
    src: withBasePath("/images/IMG_8463.jpg"),
    alt: "Rear angle of loaded Hardline Hauling trailer"
  },
  {
    src: withBasePath("/images/IMG_9130.jpg"),
    alt: "Hardline Hauling service banner with phone and offerings"
  }
];
