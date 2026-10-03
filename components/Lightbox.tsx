"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useFocusTrap } from "@/lib/useFocusTrap";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  index: number | null;
  onChange: (i: number | null) => void;
  label?: string;
}

/** Accessible lightbox: Escape closes, ←/→ navigate, focus is contained, swipe on touch (guide §19). */
export function Lightbox({ images, index, onChange, label = "Photo viewer" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const open = index !== null;
  const close = useCallback(() => onChange(null), [onChange]);
  useFocusTrap(ref, open, close);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, go]);

  const touchX = useRef<number | null>(null);

  if (!open || typeof document === "undefined") return null;
  const img = images[index];

  return createPortal(
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[80] flex flex-col bg-[#140709]/95 text-cream"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm text-cream/80" aria-live="polite">
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={close}
          data-autofocus
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cream/30 hover:bg-cream/10"
        >
          <X aria-hidden size={22} />
          <span className="sr-only">Close photo viewer</span>
        </button>
      </div>
      <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
        <Image key={img.src} src={img.src} alt={img.alt} fill sizes="100vw" className="object-contain p-2 sm:p-10" />
      </div>
      <div className="flex items-center justify-between gap-4 px-4 pb-6 pt-3 sm:px-6">
        <button type="button" onClick={() => go(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cream/30 hover:bg-cream/10">
          <ChevronLeft aria-hidden size={24} />
          <span className="sr-only">Previous photo</span>
        </button>
        <p className="line-clamp-2 flex-1 text-center text-sm text-cream/85">{img.alt}</p>
        <button type="button" onClick={() => go(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cream/30 hover:bg-cream/10">
          <ChevronRight aria-hidden size={24} />
          <span className="sr-only">Next photo</span>
        </button>
      </div>
    </div>,
    document.body,
  );
}
