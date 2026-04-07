"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
};

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = images.length > 0 ? images : [];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [images.length]);

  const active = safeImages[activeIndex] ?? safeImages[0];
  const thumbs = safeImages.slice(0, 3);
  const hasMultipleImages = thumbs.length > 1;

  const goToIndex = React.useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    []
  );

  const showPrevious = React.useCallback(() => {
    setActiveIndex((current) => (current === 0 ? thumbs.length - 1 : current - 1));
  }, [thumbs.length]);

  const showNext = React.useCallback(() => {
    setActiveIndex((current) => (current === thumbs.length - 1 ? 0 : current + 1));
  }, [thumbs.length]);

  React.useEffect(() => {
    if (!isPreviewOpen || !hasMultipleImages) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleImages, isPreviewOpen, showNext, showPrevious]);

  if (!active) return null;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="w-full rounded-2xl bg-white p-4 shadow-2xl md:p-6">
        <div className="group relative h-[360px] md:h-[400px] w-full rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 z-10 block"
            onClick={() => setIsPreviewOpen(true)}
            aria-label="Open product image preview"
          />
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={active.src}
              alt={active.alt}
              width={1200}
              height={900}
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
              priority
            />
          </div>
          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-white opacity-0 transition-opacity hover:bg-slate-950/85 group-hover:opacity-100"
                aria-label="Show previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-white opacity-0 transition-opacity hover:bg-slate-950/85 group-hover:opacity-100"
                aria-label="Show next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {thumbs.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={`${img.alt}-${idx}`}
              type="button"
              onClick={() => goToIndex(idx)}
              className={[
                "bg-white rounded-xl p-2 border shadow-sm transition-all",
                isActive
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-slate-200 hover:border-blue-300",
              ].join(" ")}
              aria-label={`Select image ${idx + 1}`}
            >
              <div className="aspect-[4/3] w-full rounded-lg bg-slate-100 overflow-hidden flex items-center justify-center">
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

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="fixed left-1/2 top-1/2 z-50 flex h-[92vh] w-[94vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl outline-none md:p-6"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Product image preview"
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <p className="text-sm font-medium text-white/80">Product Image Preview</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                onClick={() => setIsPreviewOpen(false)}
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex-1 w-full overflow-hidden rounded-xl bg-white/5">
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1200}
                className="h-full w-full object-contain"
              />
              {hasMultipleImages ? (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white transition-colors hover:bg-slate-900"
                    aria-label="Show previous preview image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white transition-colors hover:bg-slate-900"
                    aria-label="Show next preview image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

