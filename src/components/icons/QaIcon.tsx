import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Checkmark-in-shield motif — QA & Test Automation. */
export function QaIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="QA & Test Automation"
      viewBox="0 0 32 32"
      paths={["M16 4L27 8V15C27 22 22 27 16 29C10 27 5 22 5 15V8L16 4Z", "M11 16.5L14.5 20L21.5 12.5"]}
    />
  );
}
