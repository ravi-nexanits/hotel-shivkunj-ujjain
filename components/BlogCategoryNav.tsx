import Link from "next/link";
import { blogCategories } from "@/data/blog";
import { getAllPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";

/** Category chips. Categories with no posts are hidden from the nav (their page still exists). */
export function BlogCategoryNav({ active }: { active?: string }) {
  const posts = getAllPosts();
  const used = blogCategories.filter((c) => posts.some((p) => p.categorySlug === c.slug));
  const chip = "inline-flex min-h-[44px] items-center rounded-lg border px-5 text-sm font-medium transition-colors duration-instant";
  return (
    <nav aria-label="Blog categories">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href="/blog/"
            aria-current={!active ? "page" : undefined}
            className={cn(chip, !active ? "border-maroon bg-maroon text-cream" : "border-line bg-white text-ink hover:border-maroon")}
          >
            All Guides
          </Link>
        </li>
        {used.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/blog/category/${c.slug}/`}
              aria-current={active === c.slug ? "page" : undefined}
              className={cn(
                chip,
                active === c.slug ? "border-maroon bg-maroon text-cream" : "border-line bg-white text-ink hover:border-maroon",
              )}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
