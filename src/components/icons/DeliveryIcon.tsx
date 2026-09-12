import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Milestone-flag motif — Delivery & QA Coaching. */
export function DeliveryIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="Delivery & QA Coaching"
      viewBox="0 0 32 32"
      paths={["M8 28V4", "M8 5h16l-4.5 5.5L24 16H8"]}
    />
  );
}
