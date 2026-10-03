import type { AmenityId } from "./amenities";

/**
 * Room categories.
 *
 * Room names, occupancy, beds and starting prices confirmed by the hotel on 2026-10-03.
 * Room sizes, child and extras policy confirmed the same day. Optional fields left undefined render as a visible
 * [ADD …] marker.
 *
 * To add a room: copy an entry, give it a unique slug, and the listing page,
 * room page, sitemap and enquiry form options update automatically.
 */
export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  idealFor: string;
  /** Max occupancy, used for schema */
  guests?: number;
  /** How occupancy is shown to guests, e.g. "3 adults + 1 child" */
  guestsLabel?: string;
  /** Child policy for this room; undefined shows an [ADD …] marker */
  childPolicy?: string;
  beds?: string;
  size?: string;
  startingPrice?: number;
  amenities: AmenityId[];
  images: { src: string; alt: string }[];
  featured: boolean;
}

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    shortDescription:
      "A bright, air-conditioned room for two with a king-size bed, smart TV and space to unpack — suited to couples and solo travellers.",
    description: [
      "The Deluxe Room is a calm, well-kept space to rest between temple visits and city outings. A king-size bed, light walls and soft lighting keep it relaxed after a long day in Ujjain.",
      "There is room to unpack, a work table for planning your next day, and a smart TV for winding down. Hot water is available round the clock, which helps on early darshan mornings.",
      "Our front desk is open 24×7, so you can check in comfortably even if your train or flight arrives late at night.",
    ],
    idealFor: "Couples, solo travellers and pilgrims on a short visit",
    guests: 2,
    guestsLabel: "2 adults",
    beds: "1 king-size bed",
    size: "160 sq ft",
    startingPrice: 2800,
    amenities: ["ac", "wifi", "tv", "hotwater", "roomservice", "housekeeping", "lift", "power"],
    images: [
      { src: "/images/room-wide-warm.webp", alt: "Deluxe Room at Shivkunj with a king-size bed, cushions and warm lighting" },
      { src: "/images/room-bed-detail.webp", alt: "Close view of the made-up king-size bed with a maroon throw" },
      { src: "/images/room-wide-tv.webp", alt: "Room with king-size bed, wall-mounted TV and air conditioner" },
      { src: "/images/room-desk.webp", alt: "Room corner with a work table, chair and window seating" },
      { src: "/images/room-navy-throw.webp", alt: "King-size bed with a navy throw and bedside telephone" },
    ],
    featured: true,
  },
  {
    slug: "family-room",
    name: "Family Room",
    shortDescription:
      "A roomy layout with a king-size bed plus a single bed, sleeping 3 adults + 1 child — planned for families travelling to Ujjain together.",
    description: [
      "Travelling with parents or children? The Family Room has a king-size bed and an additional single bed, so three adults and one child can stay together comfortably, with seating space and room for luggage.",
      "Lift access to every floor makes arrival easier for elders, and our large shared balconies are a pleasant spot for morning tea together.",
      "Tell us who is travelling when you enquire. If you need an extra bed or any additional service, our team can arrange it at an extra charge.",
    ],
    idealFor: "Families, small groups and travellers with elders",
    guests: 4,
    guestsLabel: "3 adults + 1 child",
    childPolicy: "1 child stays at no extra charge",
    beds: "1 king-size bed + 1 single bed",
    size: "180 sq ft",
    startingPrice: 3499,
    amenities: ["ac", "wifi", "tv", "hotwater", "balcony", "roomservice", "housekeeping", "lift", "power", "parking"],
    images: [
      { src: "/images/room-wide-seating.webp", alt: "Spacious room with a large bed, built-in seating and a work table" },
      { src: "/images/room-wide-wardrobe.webp", alt: "Room with bed, wardrobe and wash area" },
      { src: "/images/lounge-seating.webp", alt: "Seating area with a sofa, cushions and a centre table" },
      { src: "/images/room-wide-tv.webp", alt: "Bright room with bed and wall-mounted TV" },
    ],
    featured: true,
  },
];

export function getRoom(slug: string) {
  return rooms.find((r) => r.slug === slug);
}
