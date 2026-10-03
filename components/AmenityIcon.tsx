import {
  AirVent,
  Wifi,
  ShowerHead,
  CircleParking,
  ArrowUpDown,
  Tv,
  ConciergeBell,
  Cctv,
  Sun,
  BatteryCharging,
  Sparkles,
  Clock,
  type LucideIcon,
} from "lucide-react";
import type { AmenityId } from "@/data/amenities";

const icons: Record<AmenityId, LucideIcon> = {
  ac: AirVent,
  wifi: Wifi,
  hotwater: ShowerHead,
  parking: CircleParking,
  lift: ArrowUpDown,
  tv: Tv,
  roomservice: ConciergeBell,
  cctv: Cctv,
  balcony: Sun,
  power: BatteryCharging,
  housekeeping: Sparkles,
  reception: Clock,
};

/** Decorative outline icon; the amenity label is always shown as text beside it. */
export function AmenityIcon({ id, size = 22, className }: { id: AmenityId; size?: number; className?: string }) {
  const Icon = icons[id];
  return <Icon aria-hidden size={size} strokeWidth={1.5} className={className} />;
}
