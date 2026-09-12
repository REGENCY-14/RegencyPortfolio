import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Stacked-layers motif — Build & Test. */
export function BuildIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="Build & Test"
      viewBox="0 0 32 32"
      paths={["M16 4L28 10L16 16L4 10L16 4Z", "M4 16L16 22L28 16", "M4 22L16 28L28 22"]}
    />
  );
}
