import Image from "next/image";
import { cn } from "@/lib/utils";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface Props {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  crumbs: Crumb[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
}

/** Inner-page hero. With an image: split editorial layout. Without: quiet text header. */
export function PageHero({ eyebrow, title, intro, crumbs, image, children }: Props) {
  return (
    <section className={cn("border-b border-line", image ? "bg-sand" : "bg-ivory")}>
      <div className={cn("container-wide", image ? "grid items-center gap-10 py-10 md:grid-cols-[1fr_1.05fr] md:gap-16 md:py-14" : "py-12 md:py-20")}>
        <div>
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="mt-s6 font-medium text-maroon" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1.1 }}>
            {title}
          </h1>
          {intro && <div className="lead mt-6 max-w-[54ch]">{intro}</div>}
          {children}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ivory md:aspect-[5/4]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 900px) 600px, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
