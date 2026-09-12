import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/**
 * The standalone checkmark motif. Used inside QaIcon's shield, and reused
 * directly (per the brief) as the checklist bullet in Engagement Options —
 * one glyph, two places, instead of two separate checkmarks drifting apart.
 */
export function CheckIcon(props: DrawnIconProps) {
  return <DrawnIcon {...props} label="Included" viewBox="0 0 24 24" paths={["M5 12.5l4.5 4.5L19 7"]} />;
}
