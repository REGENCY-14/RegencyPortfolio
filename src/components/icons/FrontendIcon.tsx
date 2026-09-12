import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Browser window with a code-bracket motif — Frontend Development. */
export function FrontendIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="Frontend Development"
      viewBox="0 0 32 32"
      paths={["M4 8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z", "M4 12h24", "M13 17l-3 3l3 3", "M19 17l3 3l-3 3"]}
    />
  );
}
