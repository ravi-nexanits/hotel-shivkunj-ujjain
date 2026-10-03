import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  inverse?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", as: Tag = "h2", inverse, className, id }: Props) {
  return (
    <div className={cn("reveal max-w-[640px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-s6", inverse && "eyebrow-inverse", align === "center" && "justify-center")}>{eyebrow}</p>
      )}
      <Tag id={id} className={cn("heading-section", inverse && "text-cream")}>
        {title}
      </Tag>
      {intro && <p className={cn("lead mt-s8", inverse && "text-cream/85")}>{intro}</p>}
    </div>
  );
}
