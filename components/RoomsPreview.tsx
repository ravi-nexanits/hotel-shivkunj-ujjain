import Link from "next/link";
import { rooms } from "@/data/rooms";
import { RoomCard } from "./RoomCard";
import { SectionHeading } from "./SectionHeading";

export function RoomsPreview() {
  const featured = rooms.filter((r) => r.featured).slice(0, 3);
  return (
    <section aria-labelledby="rooms-preview-title" className="section bg-white">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="rooms-preview-title"
            eyebrow="Rooms"
            title="Find the Room That Fits Your Stay"
            intro="Every room is air-conditioned, well kept and equipped so you can rest well and wake up ready for the day ahead."
          />
          <Link href="/rooms/" className="btn-secondary shrink-0 self-start md:self-auto">
            Explore Rooms
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featured.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
