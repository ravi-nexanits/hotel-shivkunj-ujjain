import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  post: BlogPost;
  showDate?: boolean;
  headingLevel?: "h2" | "h3";
}

export function BlogCard({ post, showDate = true, headingLevel: H = "h3" }: Props) {
  const href = `/blog/${post.slug}/`;
  return (
    <article className="reveal group flex flex-col">
      <Link href={href} tabIndex={-1} aria-hidden className="relative block overflow-hidden rounded-sm bg-sand">
        <div className="relative aspect-[16/10]">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            sizes="(min-width: 900px) 380px, (min-width: 640px) 50vw, 100vw"
            className="img-zoom object-cover"
          />
        </div>
      </Link>
      <p className="mt-5 flex flex-wrap items-center gap-x-3 text-xs font-semibold uppercase tracking-[1.5px] text-gold-text">
        <Link href={`/blog/category/${post.categorySlug}/`} className="hover:underline">
          {post.category}
        </Link>
        {showDate && (
          <>
            <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
            <time dateTime={post.publishedAt} className="font-medium normal-case tracking-normal text-ink-muted">
              {formatDate(post.publishedAt)}
            </time>
          </>
        )}
      </p>
      <H className="mt-3 text-xl font-medium leading-[30px]">
        <Link href={href} className="hover:underline hover:decoration-gold hover:underline-offset-4">
          {post.title}
        </Link>
      </H>
      <p className="mt-3 line-clamp-3 text-md text-ink-muted">{post.excerpt}</p>
      <Link href={href} className="link-arrow mt-4 self-start" aria-label={`Read guide: ${post.title}`}>
        Read Guide <ArrowRight aria-hidden size={18} />
      </Link>
    </article>
  );
}
