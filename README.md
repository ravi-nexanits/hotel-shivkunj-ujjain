# Shivkunj, Ujjain — Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · MDX blog · static export.
Design follows `Shivkunj_website_design_guide.md`. Tokens are in `app/globals.css` and `tailwind.config.ts`.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on http://localhost:3200 |
| `npm run build` | Static site in `out/`. Upload its contents to the hosting root (`.htaccess` included). |
| `npm run images` | Re-generate responsive WebP files from `assets/source/` |
| `npm run typecheck` | TypeScript check |

## Where content lives

| To change… | Edit |
|---|---|
| Phone, WhatsApp, email, address, map, check-in times, rating/offer switches | `data/hotel.ts` |
| Rooms (add a room = add an entry) | `data/rooms.ts` |
| Amenities | `data/amenities.ts` |
| Explore Ujjain cards, nearby distances | `data/destinations.ts` |
| Guest reviews (genuine only) | `data/testimonials.ts` |
| Gallery | `data/gallery.ts` |
| Blog categories | `data/blog.ts` |
| Blog posts | `content/blog/*.mdx` |

Unverified facts appear as visible `[ADD …]` markers. See **VERIFICATION.md**.

## Adding a blog post

Create `content/blog/my-post.mdx`:

```mdx
---
title: "Post title"
slug: "my-post"                 # optional, defaults to file name
excerpt: "One or two sentences for cards and meta description."
category: "Temples"             # must match a name in data/blog.ts
publishedAt: "2026-11-01"
updatedAt: ""                   # optional
featuredImage: "/images/ram-ghat.webp"
featuredImageAlt: "Describe the image"
author: "Shivkunj"
seoTitle: ""                    # optional
seoDescription: ""              # optional
draft: false                    # true = hidden
---

Write in Markdown. `## Headings` build the table of contents.
Components: <Tip>, <Note>, <Verify>…</Verify>, <InfoGrid items={[["Label","Value"]]} />, <StayCTA />
```

Rebuild, and the post appears in the listing, its category page, the homepage
"latest posts", related posts, the sitemap, metadata and Article schema.

To move to a CMS later, replace the source adapter in `lib/blog.ts`. Components only use its `BlogPost` type.

## Images

Put originals in `assets/source/`, run `npm run images`, then reference them as
`/images/<name>.webp`. A custom `next/image` loader (`lib/image-loader.ts`) serves
the right width (320–1920) for each screen.

## Enquiries

No booking engine exists, so the site never shows live availability. The booking bar
and contact form open WhatsApp with the guest's details pre-filled. Set
`NEXT_PUBLIC_ENQUIRY_ENDPOINT` at build time to POST the form as JSON to Formspree,
Web3Forms or your own API instead.

## Redirects

`public/.htaccess` 301-redirects the old WordPress URLs (`/about-us/`, `/contact-us/`,
`/blog-news/`, the two existing posts, and the policy pages) to the new routes.
