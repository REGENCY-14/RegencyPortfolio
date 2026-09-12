import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Rocket motif — Ship & Automate. */
export function ShipIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="Ship & Automate"
      viewBox="0 0 32 32"
      paths={[
        "M16 4C20 6 23 11 23 16C23 20 21 24 16 28C11 24 9 20 9 16C9 11 12 6 16 4Z",
        "M16 18a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z",
        "M9 20L5 24M23 20L27 24",
      ]}
    />
  );
}
