import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { telLink, whatsappLink } from "@/data/hotel";

/** Sticky Call | WhatsApp | Book Now bar under 900px (guide §9). Body has matching bottom padding. */
export function MobileBookingBar() {
  return (
    <nav
      aria-label="Quick booking actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="grid h-[var(--mobile-bar-h)] grid-cols-[1fr_1fr_1.35fr] items-center gap-2 px-3">
        <li>
          <a href={telLink} className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xs text-xs font-semibold text-maroon">
            <Phone aria-hidden size={19} strokeWidth={1.75} />
            Call
          </a>
        </li>
        <li>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xs text-xs font-semibold text-maroon"
          >
            <MessageCircle aria-hidden size={19} strokeWidth={1.75} />
            WhatsApp
          </a>
        </li>
        <li>
          <Link href="/contact/#enquiry" className="btn-primary btn-sm w-full gap-2">
            <CalendarCheck aria-hidden size={18} strokeWidth={1.75} />
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
