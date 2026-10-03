/**
 * Central hotel settings. Change contact details here and every page, CTA,
 * footer, schema block and WhatsApp link updates.
 *
 * Values marked "current site" were taken from hotel-shivkunj.com on 2026-10-03.
 * Confirm them with the hotel before launch (see VERIFICATION.md).
 * Leave a field as "" when unknown: the UI then shows a visible [ADD …] marker.
 */
export const hotel = {
  name: "Shivkunj",
  legalName: "Hotel Shivkunj",
  tagline: "Stay Blessed, Stay With Us",
  siteUrl: "https://hotel-shivkunj.com",
  city: "Ujjain",
  state: "Madhya Pradesh",
  country: "IN",

  // current site
  phone: "+91 78284 33133",
  phoneHref: "+917828433133",
  // The current site links WhatsApp via wa.link/giabo8; assumed to be the same
  // number as the phone. CONFIRM.
  whatsapp: "917828433133",
  email: "info@hotel-shivkunj.com",

  address: {
    line1: "Shikhar Regency, A-09, Tapobhumi",
    line2: "Near Varay Grande Hotel, Indore–Ujjain Road",
    locality: "Piplyaragho, Ujjain",
    region: "Madhya Pradesh",
    postalCode: "456006",
  },
  // Search-based link until the exact Google Business Profile URL is supplied.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Shivkunj+Tapobhumi+Indore+Ujjain+Road+Ujjain",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Hotel+Shivkunj,+Shikhar+Regency,+Tapobhumi,+Indore-Ujjain+Road,+Ujjain&output=embed",
  // Fill with exact coordinates from Google Business Profile for schema.
  geo: null as null | { lat: number; lng: number },

  // Confirmed by the hotel 2026-10-03. Display text + 24h value for schema.
  checkIn: "11:00 PM",
  checkOut: "9:00 AM",
  checkInTime24: "23:00",
  checkOutTime24: "09:00",
  /** Shown as "Last updated" on the policy pages */
  policiesUpdated: "2026-10-03",

  // Confirmed by the hotel 2026-10-03
  extrasPolicy: "Extra bed and other additional services are charged extra",

  owner: {
    name: "Mr. Sandeep Singh Chouhan",
    // current site (About page)
    bio: "a retired mechanical engineer with over 40 years of experience",
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  /**
   * The current About page shows "Rated 4.8/5" and the homepage "80+ Google reviews".
   * Kept hidden until the live Google figure is checked — set show: true and
   * update the numbers once verified.
   */
  rating: { show: false, value: 4.8, count: 80, source: "Google" },

  /** Ask before publishing: the current site advertises 10% off advance and group bookings. */
  offers: { show: false, text: "10% off on advance and group bookings" },
} as const;

export const fullAddress = [
  hotel.address.line1,
  hotel.address.line2,
  hotel.address.locality,
  `${hotel.address.region} ${hotel.address.postalCode}`,
].join(", ");

export function whatsappLink(message = "Hello Shivkunj, I would like to enquire about a room.") {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${hotel.phoneHref}`;
export const mailLink = `mailto:${hotel.email}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Rooms", href: "/rooms/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  { label: "Cancellation Policy", href: "/cancellation-policy/" },
] as const;
