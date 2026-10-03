export type GalleryCategory = "Rooms" | "Hotel" | "Reception" | "Ujjain";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  /**
   * Tile size in the editorial grid: "tall" spans two rows, "feature" spans two
   * columns and two rows, "single" is one cell. Keep 3 large + 4 single tiles for
   * a gap-free grid.
   */
  tile: "tall" | "feature" | "single";
}

export const gallery: GalleryImage[] = [
  { src: "/images/exterior.webp", alt: "Front of the Shivkunj building at dusk with lit balconies", category: "Hotel", tile: "tall" },
  { src: "/images/room-wide-warm.webp", alt: "Deluxe Room with double bed and warm lighting", category: "Rooms", tile: "feature" },
  { src: "/images/entrance-night.webp", alt: "Hotel entrance with plants and a wooden ceiling, lit in the evening", category: "Hotel", tile: "tall" },
  { src: "/images/room-wide-seating.webp", alt: "Room with double bed, built-in seating and table", category: "Rooms", tile: "single" },
  { src: "/images/reception-collage.webp", alt: "Reception desk and decorative details at Shivkunj", category: "Reception", tile: "single" },
  { src: "/images/lounge-seating.webp", alt: "Seating area with sofa and colourful cushions", category: "Hotel", tile: "single" },
  { src: "/images/mahakal-night.webp", alt: "Mahakaleshwar temple lit up at night with fountains", category: "Ujjain", tile: "single" },
];
