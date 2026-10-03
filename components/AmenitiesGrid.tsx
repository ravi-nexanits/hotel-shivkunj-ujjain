import { amenities } from "@/data/amenities";
import { AmenityIcon } from "./AmenityIcon";
import { SectionHeading } from "./SectionHeading";

export function AmenitiesGrid() {
  return (
    <section aria-labelledby="amenities-title" className="section bg-sand">
      <div className="container-wide">
        <SectionHeading
          id="amenities-title"
          eyebrow="Amenities"
          title="Comforts That Make Your Stay Easier"
          intro="The practical things that matter when you are travelling with family or setting out early for darshan."
        />
        <ul className="mt-12 grid gap-x-10 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
          {amenities.map((a) => (
            <li key={a.id} className="reveal flex gap-4 border-b border-line py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gold-text">
                <AmenityIcon id={a.id} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{a.label}</h3>
                <p className="mt-0.5 text-sm text-ink-muted">{a.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
