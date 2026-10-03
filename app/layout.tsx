import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd } from "@/components/JsonLd";
import { hotelSchema, websiteSchema, SITE_URL } from "@/lib/seo";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shivkunj Ujjain | Family-Friendly Hotel on Indore–Ujjain Road",
    template: "%s | Shivkunj Ujjain",
  },
  description:
    "Shivkunj is a family-managed hotel in Ujjain with air-conditioned rooms, free parking, lift access and 24×7 reception. Stay Blessed, Stay With Us.",
  applicationName: "Shivkunj",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#6E1F2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={lora.variable} suppressHydrationWarning>
      <head>
        {/* Enables reveal animations only when JS runs; content is visible otherwise */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={[hotelSchema(), websiteSchema()]} />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileBookingBar />
        <RevealObserver />
      </body>
    </html>
  );
}
