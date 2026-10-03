import Link from "next/link";
import { policyLinks, hotel, mailLink, telLink, fullAddress } from "@/data/hotel";
import { formatDate, slugify } from "@/lib/utils";
import { PageHero } from "./PageHero";

interface Props {
  title: string;
  path: string;
  intro: string;
  sections: { heading: string; body: React.ReactNode }[];
}

/** Readable document layout shared by the policy pages. */
export function PolicyLayout({ title, path, intro, sections }: Props) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} crumbs={[{ name: title, path }]} intro={<p>{intro}</p>} />
      <section className="section pt-12 md:pt-16">
        <div className="container-site grid gap-12 md:grid-cols-[1fr_260px] md:gap-16">
          <div className="prose-shiv">
            <p className="text-sm text-ink-muted">
              Last updated: <time dateTime={hotel.policiesUpdated}>{formatDate(hotel.policiesUpdated)}</time>
            </p>
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 id={slugify(s.heading)}>
                  {i + 1}. {s.heading}
                </h2>
                {s.body}
              </div>
            ))}
            <h2 id="contact">{sections.length + 1}. Contact Us</h2>
            <p>If you have any questions about this policy, please contact us:</p>
            <ul>
              <li>
                <strong>{hotel.legalName}</strong>, {fullAddress}
              </li>
              <li>
                Phone: <a href={telLink}>{hotel.phone}</a>
              </li>
              <li>
                Email: <a href={mailLink}>{hotel.email}</a>
              </li>
            </ul>
          </div>
          <aside className="space-y-10 md:sticky md:top-[calc(var(--header-h)+32px)] md:self-start">
            <nav aria-labelledby="policy-toc-title">
              <p id="policy-toc-title" className="text-xs font-semibold uppercase tracking-[2px] text-gold-text">
                On this page
              </p>
              <ol className="mt-4 space-y-2 border-l border-line pl-4 text-sm">
                {sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-ink-muted hover:text-maroon">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <nav aria-labelledby="policy-nav-title">
              <p id="policy-nav-title" className="text-xs font-semibold uppercase tracking-[2px] text-gold-text">
                Policies
              </p>
              <ul className="mt-4 space-y-1 border-l border-line pl-4">
                {policyLinks.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      aria-current={p.href === path ? "page" : undefined}
                      className="inline-flex min-h-[40px] items-center text-md text-ink-muted hover:text-maroon aria-[current=page]:font-semibold aria-[current=page]:text-maroon"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </>
  );
}
