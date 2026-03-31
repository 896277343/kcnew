import fs from "node:fs";
import path from "node:path";
import type { StaticImageData } from "next/image";

function toSafeFileBase(title: string): string {
  return title
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[\\/:*?"<>|]/g, "-");
}

function publicFileExists(relativePath: string): boolean {
  const absolutePath = path.join(process.cwd(), "public", relativePath);
  return fs.existsSync(absolutePath);
}

export function getProductGalleryImages(options: {
  title: string;
  fallbackImages?: Array<string | StaticImageData>;
}): Array<{ src: string | StaticImageData; alt: string }> {
  const base = toSafeFileBase(options.title);
  const candidates = Array.from({ length: 5 }, (_, idx) => {
    const fileName = `${base}-${idx + 1}.jpg`;
    const publicPath = `product-gallery/${fileName}`;
    return { publicPath, src: `/${publicPath}`, alt: options.title };
  });

  const existing = candidates.filter((c) => publicFileExists(c.publicPath));
  if (existing.length > 0) return existing;

  const fallbacks = options.fallbackImages ?? [];
  return fallbacks.map((src) => ({ src, alt: options.title }));
}

