import type { Metadata } from "next";
import Link from "next/link";
import { PolicyLayout } from "@/components/PolicyLayout";
import { hotel } from "@/data/hotel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Shivkunj Ujjain",
  description:
    "Terms and conditions for booking and staying at Shivkunj, Ujjain: check-in and check-out times, ID requirements, payments, children and extra beds, and house rules.",
  path: "/terms-and-conditions/",
});

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      path="/terms-and-conditions/"
      intro={`These terms apply to all bookings and stays at ${hotel.legalName}, Ujjain, and to the use of this website. By making a booking or staying with us, you agree to them.`}
      sections={[
        {
          heading: "Bookings and Confirmation",
          body: (
            <>
              <p>
                Booking enquiries can be made by phone, WhatsApp, email or through the enquiry form on this website. An enquiry
                is not a booking. A booking is confirmed only when the hotel confirms it to you and any required payment has been
                received.
              </p>
              <p>
                Room availability shown or discussed before confirmation is not guaranteed. The hotel reserves the right to
                accept or decline any booking.
              </p>
            </>
          ),
        },
        {
          heading: "Check-in and Check-out",
          body: (
            <ul>
              <li>
                Check-in time: <strong>{hotel.checkIn}</strong>
              </li>
              <li>
                Check-out time: <strong>{hotel.checkOut}</strong>
              </li>
              <li>
                Early check-in and late check-out are subject to availability and may be charged extra. Please ask our front
                desk in advance.
              </li>
            </ul>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                As required by law, every adult guest must present a valid government-issued photo ID at check-in (for example
                Aadhaar card, passport, driving licence or voter ID). PAN card is not accepted as address proof.
              </p>
              <p>
                Foreign nationals must present a valid passport and visa. Their details are shared with the local authorities as
                required by Indian law.
              </p>
              <p>The hotel may refuse check-in if valid identification is not provided.</p>
            </>
          ),
        },
        {
          heading: "Rates and Payments",
          body: (
            <ul>
              <li>Room rates displayed on this website are starting rates per night and may vary by date and availability.</li>
              <li>The final rate, applicable taxes and payment terms are confirmed at the time of booking.</li>
              <li>Any outstanding amount must be settled at or before check-out.</li>
            </ul>
          ),
        },
        {
          heading: "Children, Extra Beds and Additional Services",
          body: (
            <ul>
              <li>In the Family Room, one child can stay at no extra charge, within the room&apos;s occupancy of 3 adults + 1 child.</li>
              <li>{hotel.extrasPolicy}. Please request them in advance so we can arrange them.</li>
              <li>Room occupancy limits must be respected. Additional guests are allowed only with the hotel&apos;s approval.</li>
            </ul>
          ),
        },
        {
          heading: "Cancellations and Refunds",
          body: (
            <p>
              All bookings are non-refundable. Please read our <Link href="/cancellation-policy/">Cancellation &amp; Refund
              Policy</Link> for full details.
            </p>
          ),
        },
        {
          heading: "Guest Conduct",
          body: (
            <ul>
              <li>Guests are requested to respect other guests, hotel staff and the peaceful atmosphere of the property.</li>
              <li>Any illegal activity on the premises is strictly prohibited and may be reported to the authorities.</li>
              <li>Visitors in rooms are allowed only with the permission of the front desk.</li>
              <li>The hotel may ask any guest whose behaviour disturbs others or breaks these terms to leave, without a refund.</li>
            </ul>
          ),
        },
        {
          heading: "Damage and Liability",
          body: (
            <ul>
              <li>Guests are responsible for any damage to hotel property caused by them or their visitors, and will be charged for repair or replacement.</li>
              <li>Guests are responsible for their own valuables and belongings. The hotel is not liable for loss or theft of items left unattended.</li>
              <li>The hotel is not responsible for interruptions caused by events beyond its control, such as power or water supply issues from external sources, weather or government restrictions.</li>
            </ul>
          ),
        },
        {
          heading: "Use of This Website",
          body: (
            <>
              <p>
                Content on this website, including text, photographs and logos, belongs to {hotel.legalName} and may not be
                copied or reused without permission.
              </p>
              <p>
                Travel information in our blog (such as temple timings and festival dates) is provided in good faith for general
                guidance. Please confirm current details with official sources before planning your visit.
              </p>
            </>
          ),
        },
        {
          heading: "Changes and Governing Law",
          body: (
            <p>
              We may update these terms from time to time. The version on this page at the time of your booking applies. These
              terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts at Ujjain,
              Madhya Pradesh.
            </p>
          ),
        },
      ]}
    />
  );
}
