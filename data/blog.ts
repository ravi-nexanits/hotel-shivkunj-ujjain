/**
 * Blog categories. A post's frontmatter `category` must match one of these names.
 * Each category gets its own page at /blog/category/<slug>/ automatically.
 */
export const blogCategories = [
  { name: "Ujjain Travel Guide", slug: "ujjain-travel-guide", description: "Planning help for your trip to Ujjain." },
  { name: "Temples", slug: "temples", description: "Darshan guides and temple visiting tips." },
  { name: "Things to Do", slug: "things-to-do", description: "Places to see and experiences around the city." },
  { name: "Travel Tips", slug: "travel-tips", description: "Practical advice on seasons, transport and packing." },
  { name: "Hotel Guides", slug: "hotel-guides", description: "Help choosing and booking your stay." },
  { name: "Festivals & Events", slug: "festivals-and-events", description: "Ujjain's festivals and what to expect." },
] as const;

export type BlogCategoryName = (typeof blogCategories)[number]["name"];

export const POSTS_PER_PAGE = 9;
