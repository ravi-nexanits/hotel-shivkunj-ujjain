import type { Metadata } from "next";
import Link from "next/link";
import { PolicyLayout } from "@/components/PolicyLayout";
import { hotel } from "@/data/hotel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cancellation & Refund Policy | Shivkunj Ujjain",
  description:
    "Shivkunj, Ujjain follows a no-refund policy. Read how cancellations, no-shows, early departures and date-change requests are handled for room bookings.",
  path: "/cancellation-policy/",
});

export default function CancellationPolicyPage() {
  return (
    <PolicyLayout
      title="Cancellation & Refund Policy"
      path="/cancellation-policy/"
      intro="Shivkunj follows a no-refund policy on all confirmed bookings. Please read this policy carefully before confirming your stay."
      sections={[
        {
          heading: "No-Refund Policy",
          body: (
            <>
              <p>
                All bookings at {hotel.legalName} are <strong>non-refundable</strong>. Once a booking is confirmed and any advance
                or full payment has been made, that amount will not be refunded under any circumstances, including cancellation,
                change of plans, no-show or early departure.
              </p>
              <p>By confirming a booking with us, you agree to this no-refund policy.</p>
            </>
          ),
        },
        {
          heading: "Cancellations",
          body: (
            <>
              <p>
                If you need to cancel, please inform us as early as possible by phone, WhatsApp or email so the room can be
                released. Cancelling a booking does not make it eligible for a refund.
              </p>
            </>
          ),
        },
        {
          heading: "No-Shows and Early Departure",
          body: (
            <ul>
              <li>
                If a guest does not arrive on the booked date and has not informed us, the booking is treated as a no-show and
                the full amount paid is retained.
              </li>
              <li>
                If a guest checks out before the booked departure date, no refund is given for the unused nights.
              </li>
            </ul>
          ),
        },
        {
          heading: "Date Change Requests",
          body: (
            <p>
              Requests to change booking dates may be considered at the sole discretion of the hotel, subject to room
              availability. Any difference in room rates for the new dates is payable by the guest. A date change, when
              accepted, does not create any right to a refund.
            </p>
          ),
        },
        {
          heading: "Festival, Peak-Date and Group Bookings",
          body: (
            <p>
              Bookings for festival periods, peak dates (such as Mahashivratri, Shravan and long weekends) and group bookings are
              also covered by this no-refund policy. Special terms agreed in writing for a group booking will be shared at the
              time of confirmation.
            </p>
          ),
        },
        {
          heading: "If We Cannot Provide Your Room",
          body: (
            <p>
              In the rare event that Shivkunj is unable to provide a confirmed room for reasons within our control, we will offer
              you a suitable alternative arrangement or return the amount you paid for the affected nights.
            </p>
          ),
        },
        {
          heading: "Related Policies",
          body: (
            <p>
              Please also read our <Link href="/terms-and-conditions/">Terms &amp; Conditions</Link> and{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
