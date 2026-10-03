"use client";

import Image from "next/image";
import { useState } from "react";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lightbox, type LightboxImage } from "./Lightbox";

/** Room photo mosaic: one large image + up to four thumbnails, all opening the lightbox. */
export function RoomGallery({ images, roomName }: { images: LightboxImage[]; roomName: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const shown = images.slice(0, 5);
  return (
    <>
      <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
        {shown.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-xs bg-sand",
              i === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto" : "hidden aspect-[4/3] md:block",
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes={i === 0 ? "(min-width: 900px) 640px, 100vw" : "320px"}
              className="img-zoom object-cover"
            />
            <span className="sr-only">Open photo {i + 1} of {images.length}</span>
          </button>
        ))}
      </div>
      <button type="button" onClick={() => setIndex(0)} className="btn-secondary btn-sm mt-4">
        <Images aria-hidden size={17} /> View all {images.length} photos
      </button>
      <Lightbox images={images} index={index} onChange={setIndex} label={`${roomName} photos`} />
    </>
  );
}
