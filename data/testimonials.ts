/**
 * Guest reviews. ONLY add genuine reviews, copied with permission from Google or
 * another verifiable source. Never write or paraphrase a review.
 *
 * While this array is empty the Testimonials section shows clearly-marked
 * placeholders so the layout can be reviewed.
 */
export interface Testimonial {
  quote: string;
  name: string;
  source: "Google" | "Booking.com" | "MakeMyTrip" | "Direct";
  date?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [];

/** Public link to the Google reviews page. Leave "" until supplied. */
export const reviewsUrl = "";
