import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Room } from "@/data/rooms";
import { amenityById } from "@/data/amenities";
import { cn } from "@/lib/utils";
import { AmenityIcon } from "./AmenityIcon";
import { RoomFacts, RoomPrice } from "./RoomFacts";

interface Props {
  room: Room;
  /** "large" = horizontal layout used on /rooms */
  size?: "default" | "large";
  headingLevel?: "h2" | "h3";
}

export function RoomCard({ room, size = "default", headingLevel: H = "h3" }: Props) {
  const large = size === "large";
  const cover = room.images[0];
  return (
    <article
      className={cn(
        "reveal group flex flex-col overflow-hidden rounded-sm border border-line bg-white transition-[border-color,box-shadow] duration-fast hover:border-maroon/30 hover:shadow-[0_24px_50px_-34px_rgba(42,33,28,0.5)]",
        large && "md:grid md:grid-cols-[1.15fr_1fr]",
      )}
    >
      <Link href={`/rooms/${room.slug}/`} tabIndex={-1} aria-hidden className="relative block overflow-hidden bg-sand">
        <div className={cn("relative aspect-[4/3]", large && "md:aspect-auto md:h-full md:min-h-[420px]")}>
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={large ? "(min-width: 900px) 640px, 100vw" : "(min-width: 900px) 600px, 100vw"}
            className="img-zoom object-cover"
          />
        </div>
      </Link>
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", large && "md:p-10")}>
        <H className="heading-card">
          <Link href={`/rooms/${room.slug}/`} className="hover:underline hover:decoration-gold hover:underline-offset-4">
            {room.name}
          </Link>
        </H>
        <RoomFacts room={room} className="mt-3" />
        <p className="mt-4 text-md text-ink-muted">{room.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Key amenities in the ${room.name}`}>
          {room.amenities.slice(0, large ? 6 : 4).map((id) => (
            <li key={id} className="inline-flex items-center gap-1.5 rounded-lg bg-sand px-3 py-1.5 text-xs font-medium text-ink">
              <AmenityIcon id={id} size={14} className="text-gold-text" />
              {amenityById[id].label}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <RoomPrice room={room} />
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={`/rooms/${room.slug}/`} className="link-arrow" aria-label={`View ${room.name}`}>
              View Room <ArrowRight aria-hidden size={18} />
            </Link>
            <Link
              href={`/contact/?room=${room.slug}#enquiry`}
              className="btn-primary btn-sm"
              aria-label={`Book the ${room.name}`}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
