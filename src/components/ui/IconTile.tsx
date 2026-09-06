import { cn } from "@/lib/cn";

interface IconTileProps {
  children: React.ReactNode;
  className?: string;
  /** "outline" (Specializations, sage border) or "solid" (Process steps, cream fill + shadow). */
  variant?: "outline" | "solid";
}

/** 48px bordered rounded-square icon frame shared by Specializations and Process. */
export function IconTile({ children, className, variant = "outline" }: IconTileProps) {
  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-control border border-sage text-sage",
        variant === "solid" && "border-sage bg-cream shadow-[0_1px_1px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
