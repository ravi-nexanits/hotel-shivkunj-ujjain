import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { hotel } from "@/data/hotel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Shivkunj Ujjain",
  description:
    "How Shivkunj, Ujjain collects, uses and protects the personal information you share through our website, enquiries and during your stay.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      path="/privacy-policy/"
      intro={`${hotel.legalName} respects your privacy. This policy explains what personal information we collect, how we use it and how we keep it safe.`}
      sections={[
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>We collect only the information needed to handle your enquiry and your stay:</p>
              <ul>
                <li>
                  <strong>Enquiry details:</strong> your name, phone number, email address, travel dates, number of guests, room
                  preference and any message you send us through the website form, WhatsApp, phone or email.
                </li>
                <li>
                  <strong>Stay details:</strong> identity documents and address details collected at check-in, as required by
                  law, and records of your booking and payments.
                </li>
              </ul>
              <p>We do not knowingly collect personal information from children through this website.</p>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          body: (
            <ul>
              <li>To respond to your enquiry and share availability and rates.</li>
              <li>To confirm, manage and provide your booking and stay.</li>
              <li>To meet legal obligations, such as guest registration and reporting required by the authorities.</li>
              <li>To contact you about your booking, for example arrival details or requests.</li>
            </ul>
          ),
        },
        {
          heading: "WhatsApp, Phone and Email",
          body: (
            <p>
              When you submit the enquiry form on this website, your details open in WhatsApp so you can send them to us
              directly. Messages sent through WhatsApp are also subject to WhatsApp&apos;s own privacy policy. We use the contact
              details you share only to reply to you about your stay.
            </p>
          ),
        },
        {
          heading: "Cookies and Third-Party Services",
          body: (
            <p>
              This website does not use advertising or tracking cookies. Our location map is provided by Google Maps, which may
              set its own cookies when the map loads. Please refer to Google&apos;s privacy policy for details.
            </p>
          ),
        },
        {
          heading: "Sharing Your Information",
          body: (
            <>
              <p>We do not sell or rent your personal information. We share it only:</p>
              <ul>
                <li>With government or police authorities when required by law (for example, guest registration records and Form C for foreign nationals).</li>
                <li>With service providers that help us operate, such as payment providers, only as needed for your booking.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Data Retention and Security",
          body: (
            <p>
              We keep your information only for as long as needed for your booking, our records and legal requirements. We take
              reasonable steps to protect your information from unauthorised access, loss or misuse.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          body: (
            <p>
              In line with India&apos;s Digital Personal Data Protection Act, 2023, you may ask us to access, correct or delete
              your personal information, subject to any legal requirement for us to keep it. To make a request, contact us using
              the details below.
            </p>
          ),
        },
        {
          heading: "Changes to This Policy",
          body: <p>We may update this policy from time to time. The latest version will always be available on this page.</p>,
        },
      ]}
    />
  );
}
