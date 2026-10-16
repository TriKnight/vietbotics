"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Lang } from "@/data/applications";
import { NewsImage, newsCopy } from "@/data/news";

const NewsGallery = ({ images, title, lang }: { images: NewsImage[]; title: string; lang: Lang }) => {
  const copy = newsCopy[lang];
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${copy.photo} ${i + 1} / ${images.length}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line/10 bg-line/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Image
                src={image.src}
                alt={`${title}: ${copy.photo} ${i + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setOpen(null)}
        >
          <Image
            src={current.src}
            alt={`${title}: ${copy.photo} ${open + 1}`}
            width={current.width}
            height={current.height}
            sizes="100vw"
            className="max-h-full w-auto max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label={copy.close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              {([
                [-1, copy.previous, "left-3 md:left-6", "M15 6l-6 6 6 6"],
                [1, copy.next, "right-3 md:right-6", "M9 6l6 6-6 6"],
              ] as const).map(([delta, label, position, path]) => (
                <button
                  key={delta}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(delta);
                  }}
                  aria-label={label}
                  className={`absolute top-1/2 -translate-y-1/2 ${position} flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </button>
              ))}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-neutral-200">
                {open + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NewsGallery;
