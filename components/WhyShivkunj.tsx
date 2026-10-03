import Image from "next/image";

// Benefits drawn from the current Shivkunj site; each is a service the hotel already describes.
const points = [
  { title: "Comfortable Rooms", text: "Air-conditioned, clean rooms with hot water at any hour — so you can rest properly after travel." },
  { title: "Family-Friendly Stay", text: "Family-managed hospitality, lift access for elders, and large balconies to sit together." },
  { title: "Convenient Ujjain Location", text: "On the Indore–Ujjain Road, away from old-city congestion and easy to reach by car or cab." },
  { title: "Round-the-Clock Reception", text: "Arriving late at night or early in the morning? Share your train or flight details and your room will be ready." },
  { title: "Simple Direct Booking", text: "Speak directly with our team by phone or WhatsApp for availability, rates and special requests." },
  { title: "Local Travel Guidance", text: "Ask us about darshan planning, local transport and pickup assistance for your Ujjain visit." },
];

export function WhyShivkunj() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="container-wide grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-[calc(var(--header-h)+40px)] md:self-start">
          <p className="eyebrow reveal">Why Shivkunj</p>
          <h2 id="why-title" className="heading-section reveal mt-s6">
            A Stay Designed Around Your Ujjain Journey
          </h2>
          <p className="lead reveal mt-6 max-w-[44ch]">
            Owned and personally managed by a family that cares about the small things — from a spotless room to a timely
            answer on WhatsApp.
          </p>
          <div className="reveal relative mt-10 hidden aspect-[3/4] max-w-[420px] overflow-hidden rounded-md bg-sand md:block">
            <Image
              src="/images/room-wide-seating.webp"
              alt="A Shivkunj room with built-in seating beside the bed"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {points.map((p, i) => (
            <li key={p.title} className="reveal grid grid-cols-[56px_1fr] gap-4 py-8 sm:grid-cols-[80px_1fr]">
              <span className="text-3xl font-medium leading-none text-gold-text sm:text-[40px]" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium sm:text-2xl">{p.title}</h3>
                <p className="mt-2 text-md text-ink-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
