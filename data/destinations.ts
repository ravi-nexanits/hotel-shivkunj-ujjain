/**
 * Explore Ujjain. `distance` is intentionally empty until the hotel confirms the
 * driving distance/time from Shivkunj; the card then shows an [ADD …] marker.
 * `guide` links the card to the most relevant blog article (internal linking).
 * Destination photos were supplied with the project brief.
 */
export interface Destination {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  distance?: string;
  guide: string;
}

export const destinations: Destination[] = [
  {
    slug: "mahakaleshwar",
    name: "Mahakaleshwar Jyotirlinga",
    description:
      "One of the twelve Jyotirlingas of Lord Shiva and the main reason many families visit Ujjain. The early-morning Bhasma Aarti is its best-known ritual.",
    image: "/images/mahakaleshwar.webp",
    imageAlt: "Decorated shikhara of the Mahakaleshwar temple against a blue sky",
    guide: "/blog/mahakaleshwar-temple-darshan-guide/",
  },
  {
    slug: "mahakal-lok",
    name: "Shri Mahakal Lok",
    description:
      "A wide walkway beside the Mahakaleshwar temple lined with sculptures and murals telling stories of Lord Shiva. Pleasant to walk in the evening when it is lit up.",
    image: "/images/mahakal-lok.webp",
    imageAlt: "Sculptures at Shri Mahakal Lok silhouetted against the evening sky",
    guide: "/blog/mahakal-lok-visitor-guide/",
  },
  {
    slug: "ram-ghat",
    name: "Ram Ghat",
    description:
      "The oldest and best-known ghat on the Shipra river. Come at sunset for the evening aarti, when lamps are offered on the water.",
    image: "/images/ram-ghat.webp",
    imageAlt: "Ram Ghat on the Shipra river with temples along the steps",
    guide: "/blog/best-places-to-visit-in-ujjain/",
  },
  {
    slug: "kal-bhairav",
    name: "Kal Bhairav Temple",
    description:
      "An ancient temple to Kal Bhairav, regarded as the guardian of Ujjain. Many visitors include it right after Mahakaleshwar darshan.",
    image: "/images/kal-bhairav.webp",
    imageAlt: "Stone entrance gateway of the Kal Bhairav temple in Ujjain",
    guide: "/blog/best-places-to-visit-in-ujjain/",
  },
  {
    slug: "harsiddhi",
    name: "Harsiddhi Temple",
    description:
      "A revered Devi temple close to Mahakaleshwar, known for its tall lamp towers that are lit on special evenings.",
    image: "/images/harsiddhi.webp",
    imageAlt: "Orange shikhara of the Harsiddhi Mata temple lit at dusk",
    guide: "/blog/best-places-to-visit-in-ujjain/",
  },
  {
    slug: "sandipani-ashram",
    name: "Sandipani Ashram",
    description:
      "The ashram where, by tradition, Lord Krishna, Balarama and Sudama studied under Guru Sandipani. A quiet, green stop that children often enjoy.",
    image: "/images/sandipani-ashram.webp",
    imageAlt: "Arched entrance gate of Maharshi Sandipani Ashram surrounded by trees",
    guide: "/blog/ujjain-travel-guide-for-families/",
  },
];

/**
 * Location section. Railway station, bus stand and airport values are as published
 * on the current Shivkunj Rooms page — confirm before launch.
 */
export const nearby: { name: string; distance?: string; note?: string }[] = [
  { name: "Mahakaleshwar Temple" },
  { name: "Shri Mahakal Lok" },
  { name: "Ujjain Railway Station", distance: "10 km · approx. 25 min", note: "Auto, e-rickshaw and Rapido available" },
  { name: "Ujjain Bus Stand", distance: "8 km · approx. 20 min", note: "Auto, e-rickshaw and Rapido available" },
  { name: "Indore Airport", distance: "48 km · approx. 55 min", note: "Cabs available at the airport" },
];
