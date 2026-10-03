import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BookingBar } from "@/components/BookingBar";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutPreview } from "@/components/AboutPreview";
import { RoomsPreview } from "@/components/RoomsPreview";
import { WhyShivkunj } from "@/components/WhyShivkunj";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BookingCTA } from "@/components/BookingCTA";
import { ExploreUjjain } from "@/components/ExploreUjjain";
import { Gallery } from "@/components/Gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { LocationSection } from "@/components/LocationSection";
import { BlogPreview } from "@/components/BlogPreview";
import { gallery } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";

const title = "Shivkunj Ujjain | Family-Friendly Hotel on Indore–Ujjain Road";

export const metadata: Metadata = buildMetadata({
  title,
  description:
    "Stay at Shivkunj, a family-managed hotel in Ujjain with air-conditioned rooms, free parking, lift and 24×7 reception: a peaceful base for Mahakaleshwar darshan and exploring the city.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container-wide relative z-10 -mt-20 md:-mt-24">
        <BookingBar />
      </div>
      <div className="pt-14 md:pt-20">
        <TrustStrip />
      </div>
      <AboutPreview />
      <RoomsPreview />
      <WhyShivkunj />
      <AmenitiesGrid />
      <BookingCTA
        title="Planning Your Stay in Ujjain?"
        text="Speak directly with the Shivkunj team for room availability, booking assistance and stay-related questions."
        secondary={{ label: "WhatsApp Us", href: "", whatsapp: true }}
      />
      <ExploreUjjain />
      <section aria-labelledby="gallery-title" className="section bg-white">
        <div className="container-wide">
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="A Glimpse of Shivkunj" />
          <div className="mt-12">
            <Gallery images={gallery} />
          </div>
        </div>
      </section>
      <Testimonials />
      <LocationSection />
      <BlogPreview />
      <BookingCTA
        eyebrow="Stay Blessed, Stay With Us"
        title="Your Ujjain Stay Starts Here."
        text="Comfortable rooms, warm hospitality and a peaceful place to return to after exploring Ujjain."
        primary={{ label: "Book Your Stay", href: "/contact/#enquiry" }}
        secondary={{ label: "Contact Shivkunj", href: "/contact/" }}
        image="/images/entrance-night.webp"
      />
    </>
  );
}
