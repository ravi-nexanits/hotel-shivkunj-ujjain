import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-title" className="section">
      <div className="container-wide grid items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-20">
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-sand">
            <Image
              src="/images/exterior-dusk.webp"
              alt="The Shivkunj hotel building at dusk, with lit balconies and plants on every floor"
              fill
              sizes="(min-width: 900px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 hidden w-[42%] overflow-hidden rounded-sm border-[6px] border-ivory bg-sand sm:block md:-right-10">
            <div className="relative aspect-[4/3]">
              <Image src="/images/room-bed-detail.webp" alt="" fill sizes="20vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow">Welcome to Shivkunj</p>
          <h2 id="about-preview-title" className="heading-section mt-s6">
            A Peaceful Stay for Your Ujjain Journey
          </h2>
          <div className="lead mt-6 space-y-4">
            <p>
              Shivkunj is a family-managed hotel for travellers who want a comfortable, peaceful and welcoming place to stay in
              Ujjain. Whether your visit is spiritual, a family trip or simply about discovering the city, our team is here to make
              it easy.
            </p>
            <p>
              We are on the Indore–Ujjain Road, away from the crowded old-city lanes yet easy to reach from every major route into
              Ujjain. Rooms are air-conditioned, and our large balconies give families space to sit together at the end of the day.
            </p>
          </div>
          <Link href="/about/" className="link-arrow mt-8">
            Discover Shivkunj <ArrowRight aria-hidden size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
