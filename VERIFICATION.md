# Shivkunj — Information to Verify Before Launch

The site never invents facts. Anything unconfirmed shows on the page as a dashed
gold marker like `[ADD CURRENT STARTING PRICE]`. To find every one in code:

```bash
grep -rn "Pending\|Verify>" app components content
```

## 1. Taken from the current hotel-shivkunj.com — confirm still correct

| Item | Current value | Where to change |
|---|---|---|
| Phone | +91 78284 33133 | `data/hotel.ts` |
| WhatsApp | assumed same number (the current site uses a `wa.link/giabo8` short link that could not be resolved) | `data/hotel.ts → whatsapp` |
| Email | info@hotel-shivkunj.com | `data/hotel.ts` |
| Address | Shikhar Regency, A-09, Tapobhumi, Near Varay Grande Hotel, Indore–Ujjain Rd, Piplyaragho, Ujjain, MP 456006 | `data/hotel.ts` |
| Owner story | Mr. Sandeep Singh Chouhan, retired mechanical engineer, 40+ years' experience | `data/hotel.ts → owner`, `app/about/page.tsx` |
| Distances | Railway station 10 km/25 min · Bus stand 8 km/20 min · Indore Airport 48 km/55 min | `data/destinations.ts → nearby` |
| Amenities | AC, Wi-Fi, 24×7 hot water, free parking, lift, smart TV, room service, housekeeping, large balconies, power backup, CCTV, 24×7 reception | `data/amenities.ts` |
| "Pickup & travel assistance" | mentioned in "Local Travel Guidance" copy | `components/WhyShivkunj.tsx` |

## 2. Missing — please supply

- ~~Room categories, guests, beds, starting prices~~: confirmed 2026-10-03 (Deluxe Room: 2 adults, 1 king-size bed, from ₹2,800/night; Family Room: 3 + 1 guests, 1 king-size + 1 single bed, from ₹3,499/night).
- ~~Child / extras policy~~: confirmed 2026-10-03 (Family Room: 3 adults + 1 child, child at no extra charge; extra bed and other services charged extra).
- ~~Room sizes, check-in/out~~: confirmed 2026-10-03 (Deluxe 160 sq ft, Family 180 sq ft; check-in 11:00 AM, check-out 9:00 AM).
- **Child policy for the Deluxe Room**; extra-bed rate if it should be published. → `data/rooms.ts`
- Whether starting prices vary by date/season (the Rooms page says "may vary by date" — adjust if not).
- **Distance from Shivkunj** to Mahakaleshwar, Mahakal Lok, Ram Ghat, Kal Bhairav, Harsiddhi and Sandipani Ashram. → `data/destinations.ts`
- **Genuine guest reviews** (with permission) and the public Google reviews link. → `data/testimonials.ts`
- ~~Policy text~~: written 2026-10-03 for Privacy, Terms and Cancellation (no-refund policy). Have them reviewed by the hotel's legal adviser. The cancellation policy includes a clause that the hotel returns payment if it cannot provide a confirmed room for reasons within its control; remove it if the owner does not agree.
- Exact **Google Maps place URL** and **coordinates** (for directions + schema). → `data/hotel.ts`
- **Social media URLs** (Facebook, Instagram, YouTube). → `data/hotel.ts → social`
- An **enquiry delivery endpoint** (Formspree / Web3Forms / own API) if enquiries should arrive by email as well as WhatsApp. → env `NEXT_PUBLIC_ENQUIRY_ENDPOINT`

## 3. Deliberately held back until confirmed

- **"Rated 4.8/5" and "80+ Google reviews"** appear on the current site. They're hidden (`hotel.rating.show = false`), and `aggregateRating` schema is only emitted once they're shown.
- **10% advance / group booking offer** from the current site. Hidden (`hotel.offers.show = false`).
- **"Wheelchair Accessible"** is listed on the current Rooms page. Left out until step-free access is confirmed.

## 4. Blog facts to check before publishing

Each starter article marks time-sensitive facts with `<Verify>`:
Mahakaleshwar quick-darshan fee, Bhasma Aarti reporting time and dress code,
Mahakal Lok timings/entry, Simhastha dates, and travel time from Shivkunj.

## 5. Photos

- All room, reception, entrance and lounge photos come from the current hotel site.
- **`exterior` has a Gemini edit watermark** (sparkle, bottom-right), which suggests the photo was AI-enhanced. Please replace it with an unedited exterior photo.
- Two images on the current site were AI-generated (`ChatGPT-Image-…`). They are **not used**.
- Temple photos come from the supplied `Temple images.zip`. Confirm usage rights.
- Still wanted: bathroom, parking, balcony, and a clearly family-sized room.
