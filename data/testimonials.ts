/**
 * Guest reviews. ONLY add genuine reviews, copied word-for-word from Google or
 * another verifiable source. Never write or paraphrase a review.
 *
 * Source: Hotel Shivkunj Ujjain Google profile (4.9 ★, 143 reviews), copied
 * 2026-10-14. Only trailing emoji were removed; names shortened to first name + initial.
 * Leave the array empty to show placeholder cards instead.
 */
export interface Testimonial {
  quote: string;
  name: string;
  source: "Google" | "Booking.com" | "MakeMyTrip" | "Direct";
  date?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Excellent hotel with clean rooms, friendly staff, great service, and a comfortable atmosphere. Had a fantastic experience from check-in to check-out. Highly recommended, and I would definitely stay here again !",
    name: "Nitish B.",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Amazing hospitality! The owners are such a lovely and friendly couple. They took really good care of us and made us feel completely at home. Very comfortable stay and genuinely nice people. Highly recommended!",
    name: "S. K.",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Had a great experience at this hotel. The rooms were clean and comfortable, the staff was friendly, and the service was quick. The location is also very convenient. Overall, it was a peaceful stay and good value for money. Would definitely visit again.",
    name: "Sanjay B.",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "The hotel is nice clean and in a very peaceful environment! The service is also good and the owner is also very kind!",
    name: "Aarchi P.",
    source: "Google",
    rating: 5,
  },
];

/** Public link to the Google profile / reviews (supplied by the hotel). */
export const reviewsUrl = "https://share.google/AzsOdHWQhJF79T1NE";
