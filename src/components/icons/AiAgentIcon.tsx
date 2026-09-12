import { DrawnIcon, type DrawnIconProps } from "@/components/icons/DrawnIcon";

/** Node/graph motif — AI Agent Building. */
export function AiAgentIcon(props: DrawnIconProps) {
  return (
    <DrawnIcon
      {...props}
      label="AI Agent Building"
      viewBox="0 0 32 32"
      paths={[
        "M16 6a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z",
        "M7 20a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z",
        "M25 20a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z",
        "M16 29a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z",
        "M16 6v4M16 22v3M9 15.5L14 12M23 15.5L18 12M9.5 19L14 24.5M22.5 19L18 24.5",
      ]}
    />
  );
}
