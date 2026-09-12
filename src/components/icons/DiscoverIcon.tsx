import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Magnifying-glass motif — Discover & Scope. */
export function DiscoverIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="Discover & Scope"
      viewBox="0 0 32 32"
      paths={["M14 24a10 10 0 1 0 0-20a10 10 0 0 0 0 20Z", "M21.5 21.5L28 28"]}
    />
  );
}
