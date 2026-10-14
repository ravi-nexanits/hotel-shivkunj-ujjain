import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, BedDouble, MessageCircleQuestion, MapPinned } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BookingCTA } from "@/components/BookingCTA";
import { hotel } from "@/data/hotel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Shivkunj | Family-Managed Hotel in Ujjain",
  description:
    "Shivkunj is a family-managed hotel on the Indore–Ujjain Road, created to give pilgrims and families a clean, peaceful and welcoming place to stay in Ujjain.",
  path: "/about/",
  image: "/images/exterior-dusk.webp",
  imageAlt: "The Shivkunj hotel building in Ujjain",
});

const principles = [
  {
    icon: HeartHandshake,
    title: "Warm Welcome",
    text: "Guests should feel comfortable from the moment they arrive, whether that is at noon or at 3 a.m. after a long train journey.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Stay",
    text: "Air-conditioned, spotless rooms and the essentials that matter on a pilgrimage: hot water at any hour, good beds and quiet nights.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Helpful Assistance",
    text: "Straight answers to booking and stay questions, by phone or WhatsApp, from people who know the hotel and the city.",
  },
  {
    icon: MapPinned,
    title: "Connected to Ujjain",
    text: "Help with darshan planning, local transport and the places worth seeing, so you can spend your time on what you came for.",
  },
];

const experience = [
  { word: "Rest", text: "Calm, air-conditioned rooms to recover from the journey.", src: "/images/room-bed-detail.webp", alt: "Freshly made bed with a maroon throw" },
  { word: "Comfort", text: "Seating space, smart TV and room service when you need it.", src: "/images/lounge-seating.webp", alt: "Sofa with cushions in a seating area" },
  { word: "Hospitality", text: "A 24×7 front desk run with care.", src: "/images/entrance-night.webp", alt: "Hotel entrance lit in the evening" },
  { word: "Ujjain", text: "The temple city, a short drive away.", src: "/images/mahakal-night.webp", alt: "Mahakaleshwar temple lit at night" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Shivkunj"
        title="Hospitality Made Simple and Warm."
        crumbs={[{ name: "About", path: "/about/" }]}
        intro={
          <p>
            Shivkunj is a family-managed hotel on the Indore–Ujjain Road. It was created with one purpose: to give pilgrims and
            families a comfortable, hassle-free base while they explore Ujjain.
          </p>
        }
        image={{ src: "/images/entrance-day.webp", alt: "Entrance to Shivkunj with plants and a wooden ceiling" }}
      />

      {/* Our story */}
      <section aria-labelledby="story-title" className="section">
        <div className="container-wide grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="reveal">
            <p className="eyebrow">Our Story</p>
            <h2 id="story-title" className="heading-section mt-s6">
              Born From a Simple Wish
            </h2>
            <div className="lead mt-6 space-y-5">
              <p>
                Shivkunj began with a heartfelt idea: that the pilgrims of Ujjain deserve a place to rest that is as clean,
                peaceful and welcoming as the city is sacred.
              </p>
              <p>
                The hotel is owned and personally managed by {hotel.owner.name}, {hotel.owner.bio}. After a career built on
                precision, discipline and problem-solving, he chose to put that same care into a new purpose: looking after the
                devotees, pilgrims and families who travel to Ujjain every year.
              </p>
              <p>
                That attention to detail shows in the everyday things: spotless rooms, a front desk that answers at any hour, and
                honest, transparent pricing with no surprises.
              </p>
            </div>
          </div>
          <figure className="reveal md:pt-10">
            <div className="relative aspect-square overflow-hidden rounded-md bg-sand">
              <Image
                src="/images/owner.webp"
                alt={`${hotel.owner.name}, owner of Shivkunj`}
                fill
                sizes="(min-width: 900px) 460px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-muted">
              <span className="font-semibold text-maroon">{hotel.owner.name}</span> · Owner, Shivkunj
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="approach-title" className="section bg-white">
        <div className="container-wide">
          <div className="reveal max-w-[640px]">
            <p className="eyebrow">Our Approach</p>
            <h2 id="approach-title" className="heading-section mt-s6">
              Our Approach to Hospitality
            </h2>
          </div>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal flex gap-5 border-t border-line pt-7">
                <Icon aria-hidden size={28} strokeWidth={1.4} className="shrink-0 text-gold-text" />
                <div>
                  <h3 className="text-2xl font-medium">{title}</h3>
                  <p className="mt-2 text-md text-ink-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hotel experience */}
      <section aria-labelledby="experience-title" className="section">
        <div className="container-wide">
          <div className="reveal max-w-[640px]">
            <p className="eyebrow">The Shivkunj Experience</p>
            <h2 id="experience-title" className="heading-section mt-s6">
              What a Stay Feels Like
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {experience.map((e, i) => (
              <li key={e.word} className={i % 2 === 1 ? "reveal md:mt-12" : "reveal"}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                  <Image src={e.src} alt={e.alt} fill sizes="(min-width: 900px) 280px, 50vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-2xl font-medium">{e.word}</h3>
                <p className="mt-1 text-md text-ink-muted">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA
        eyebrow="Visit Us"
        title="Planning a Visit to Ujjain?"
        text="Take a look at our rooms, or get in touch and our team will help you plan a comfortable stay."
        primary={{ label: "Explore Rooms", href: "/rooms/" }}
        secondary={{ label: "Contact Us", href: "/contact/" }}
      />
    </>
  );
}
