import type { StaticImageData } from "next/image";

import productImage from "@/pics/products/Medium Frequency Induction Heating Equipment.jpg";
import productImageAlt from "@/pics/products/Medium Frequency Induction Heating Equipment-2.jpg";

export type CatalogProduct = {
  title: string;
  href: string;
  image: StaticImageData;
};

export type CatalogCategory = {
  name: string;
  slug: string;
  image: StaticImageData;
  products: CatalogProduct[];
};

export const productsCatalog: CatalogCategory[] = [
  {
    name: "Medium Frequency Induction Heating Machine",
    slug: "medium-frequency-induction-heating-machine",
    image: productImage,
    products: [
      {
        title: "GS-ZP-200 Digital Medium Frequency Induction Heating Equipment",
        href: "/products/medium-frequency-induction-heating-machine/gs-zp-200-digital-medium-frequency-induction-heating-equipment.html",
        image: productImageAlt,
      },
      {
        title: "120KW Medium Frequency Induction Heating Machine",
        href: "/products/medium-frequency-induction-heating-machine/120kw-medium-frequency-induction-heating-machine.html",
        image: productImage,
      },
      {
        title: "300KW Medium Frequency Induction Heating Machine",
        href: "/products/medium-frequency-induction-heating-machine/300kw-medium-frequency-induction-heating-machine.html",
        image: productImageAlt,
      },
      {
        title: "800KW Medium Frequency Induction Heating Machine",
        href: "/products/medium-frequency-induction-heating-machine/800kw-medium-frequency-induction-heating-machine.html",
        image: productImage,
      },
      {
        title: "1200KW Medium Frequency Induction Heating Machine",
        href: "/products/medium-frequency-induction-heating-machine/1200kw-medium-frequency-induction-heating-machine.html",
        image: productImageAlt,
      },
    ],
  },
  {
    name: "High Frequency Induction Heating Machine",
    slug: "high-frequency-induction-heating-machine",
    image: productImageAlt,
    products: [
      { title: "36KW High Frequency Induction Heating Machine", href: "/contact", image: productImage },
      { title: "100KW High Frequency Induction Heating Machine", href: "/contact", image: productImageAlt },
      { title: "80KW High Frequency Induction Heating Machine", href: "/contact", image: productImage },
      { title: "Customized High Frequency Heating System", href: "/contact", image: productImageAlt },
    ],
  },
  {
    name: "Ultrasonic Frequency Induction Heating Machine",
    slug: "ultrasonic-frequency-induction-heating-machine",
    image: productImage,
    products: [
      { title: "80KW Digital Ultrasonic Induction Heating Equipment", href: "/contact", image: productImageAlt },
      { title: "300KW Super Audio Frequency Induction Heating Machine", href: "/contact", image: productImage },
      { title: "60KW Super Audio Frequency Induction Heating Machine", href: "/contact", image: productImageAlt },
      { title: "160KW Super Audio Frequency Induction Heating Machine", href: "/contact", image: productImage },
    ],
  },
  {
    name: "Induction Hardening Machine Tool",
    slug: "induction-hardening-machine-tool",
    image: productImageAlt,
    products: [
      { title: "Machine Tool Guideway Induction Hardening Equipment", href: "/contact", image: productImage },
      { title: "Dual-station Gear Induction Hardening Equipment", href: "/contact", image: productImageAlt },
      { title: "Horizontal Crankshaft Induction Hardening Equipment", href: "/contact", image: productImage },
      { title: "Multifunctional Induction Hardening Equipment Set", href: "/contact", image: productImageAlt },
    ],
  },
  {
    name: "Induction Melting Furnace",
    slug: "induction-melting-furnace",
    image: productImage,
    products: [
      { title: "160KW Induction Melting Furnace", href: "/contact", image: productImageAlt },
      { title: "60KW Induction Melting Furnace", href: "/contact", image: productImage },
      { title: "30KW Induction Melting Furnace", href: "/contact", image: productImageAlt },
      { title: "Customized Induction Melting Solution", href: "/contact", image: productImage },
    ],
  },
  {
    name: "Ultra High Frequency Induction Heating Machine",
    slug: "ultra-high-frequency-induction-heating-machine",
    image: productImageAlt,
    products: [
      { title: "60KW UHF Induction Heating Machine", href: "/contact", image: productImage },
      { title: "100KW UHF Induction Heating Machine", href: "/contact", image: productImageAlt },
      { title: "30KW UHF Induction Heating Machine", href: "/contact", image: productImage },
      { title: "Customized UHF Heating System", href: "/contact", image: productImageAlt },
    ],
  },
  {
    name: "Induction Heating Production Line",
    slug: "induction-heating-production-line",
    image: productImage,
    products: [
      { title: "Rebar Heating Production Line", href: "/contact", image: productImageAlt },
      { title: "Round Bar Heating Production Line", href: "/contact", image: productImage },
      { title: "Gear Rack Induction Hardening Production Line", href: "/contact", image: productImageAlt },
      { title: "Drive Shaft Induction Hardening Production Line", href: "/contact", image: productImage },
    ],
  },
  {
    name: "Handheld Induction Heating Machine",
    slug: "handheld-induction-heating-machine",
    image: productImageAlt,
    products: [
      { title: "Portable Induction Heating Machine", href: "/contact", image: productImage },
      { title: "Handheld Induction Heater for Bolts", href: "/contact", image: productImageAlt },
      { title: "Compact Induction Heating System", href: "/contact", image: productImage },
      { title: "Custom Handheld Heating Tool", href: "/contact", image: productImageAlt },
    ],
  },
  {
    name: "Induction Heating Coil Customization",
    slug: "induction-heating-coil-customization",
    image: productImage,
    products: [
      { title: "Induction Heating Coil for Forging", href: "/contact", image: productImageAlt },
      { title: "Induction Coil for Hardening", href: "/contact", image: productImage },
      { title: "Copper Coil Design & Manufacturing", href: "/contact", image: productImageAlt },
      { title: "One-off Coil Prototype Service", href: "/contact", image: productImage },
    ],
  },
];

export function getCatalogCategory(slug: string): CatalogCategory | undefined {
  return productsCatalog.find((c) => c.slug === slug);
}

