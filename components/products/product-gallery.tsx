"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";

type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
};

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = images.length > 0 ? images : [];
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [images.length]);

  const active = safeImages[activeIndex] ?? safeImages[0];
  const thumbs = safeImages.slice(0, 5);

  if (!active) return null;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
        <div className="aspect-[4/3] w-full rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
          <Image
            src={active.src}
            alt={active.alt}
            width={1200}
            height={900}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {thumbs.slice(1, 5).map((img, idx) => {
          const realIndex = idx + 1;
          const isActive = realIndex === activeIndex;
          return (
            <button
              key={realIndex}
              type="button"
              onClick={() => setActiveIndex(realIndex)}
              className={[
                "bg-white rounded-xl p-2 border transition-colors",
                isActive ? "border-blue-500" : "border-white/10 hover:border-white/30",
              ].join(" ")}
              aria-label={`Select image ${realIndex + 1}`}
            >
              <div className="aspect-square w-full rounded-lg bg-slate-100 overflow-hidden flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

