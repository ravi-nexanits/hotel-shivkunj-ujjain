/**
 * Amenities listed on the current hotel-shivkunj.com (homepage + Rooms page).
 * `id` maps to an icon in components/AmenityIcon.tsx.
 * Remove an item here and it disappears everywhere.
 *
 * Listed on the current Rooms page but held back until confirmed:
 * "Wheelchair Accessible" — add { id: "accessible", … } once the hotel confirms
 * step-free access to rooms and bathrooms.
 */
export type AmenityId =
  | "ac"
  | "wifi"
  | "hotwater"
  | "parking"
  | "lift"
  | "tv"
  | "roomservice"
  | "cctv"
  | "balcony"
  | "power"
  | "housekeeping"
  | "reception";

export interface Amenity {
  id: AmenityId;
  label: string;
  description: string;
}

export const amenities: Amenity[] = [
  { id: "ac", label: "Air-Conditioned Rooms", description: "Every room is air-conditioned for a cool, restful stay." },
  { id: "wifi", label: "Free Wi-Fi", description: "Stay connected with family or plan your day online." },
  { id: "hotwater", label: "24×7 Hot Water", description: "Hot water at any hour, including early darshan mornings." },
  { id: "parking", label: "Free Parking", description: "Parking space for cars and vans at the hotel." },
  { id: "lift", label: "Lift Access", description: "Lift to every floor, helpful for elders and luggage." },
  { id: "tv", label: "Smart TV", description: "A smart television in the room." },
  { id: "roomservice", label: "Room Service", description: "Ask the front desk and we will bring it to your room." },
  { id: "housekeeping", label: "Housekeeping", description: "Rooms kept clean and fresh through your stay." },
  { id: "balcony", label: "Large Balconies", description: "Open balconies with seating for family time." },
  { id: "power", label: "Power Backup", description: "Backup power so your stay is not interrupted." },
  { id: "cctv", label: "CCTV Security", description: "Round-the-clock surveillance of common areas." },
  { id: "reception", label: "24×7 Reception", description: "Front desk available day and night, even for late arrivals." },
];

export const amenityById = Object.fromEntries(amenities.map((a) => [a.id, a])) as Record<AmenityId, Amenity>;
