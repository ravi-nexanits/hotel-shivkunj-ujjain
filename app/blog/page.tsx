import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogIndex } from "@/components/BlogIndex";
import { BlogCategoryNav } from "@/components/BlogCategoryNav";
import { BookingCTA } from "@/components/BookingCTA";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ujjain Travel Guide & Temple Tips | Shivkunj Blog",
  description:
    "Practical travel information, temple guides and local suggestions to help you plan your stay in Ujjain, from Mahakaleshwar darshan to family itineraries.",
  path: "/blog/",
  image: "/images/ram-ghat.webp",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        eyebrow="Shivkunj Travel Guide"
        title="Helpful Guides for Exploring Ujjain"
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        intro={<p>Practical travel information, temple guides and local suggestions to help you plan your stay in Ujjain.</p>}
      >
        <div className="mt-10">
          <BlogCategoryNav />
        </div>
      </PageHero>
      <section aria-label="Articles" className="section pt-12 md:pt-16">
        <div className="container-wide">
          <BlogIndex posts={posts} />
        </div>
      </section>
      <BookingCTA
        eyebrow="Stay With Us"
        title="Planning Your Ujjain Trip?"
        text="Shivkunj is a comfortable, family-managed base on the Indore–Ujjain Road. Ask us about rooms and local travel."
        primary={{ label: "Explore Rooms", href: "/rooms/" }}
      />
    </>
  );
}
