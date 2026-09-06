export interface Stat {
  value: number;
  decimals: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 99.4, decimals: 1, suffix: "%", label: "PIPELINE PASS DETERMINISM" },
  { value: 14, decimals: 0, suffix: "k+", label: "PLAYWRIGHT SUITES RUN MONTHLY" },
  { value: 42, decimals: 0, suffix: "ms", label: "MEDIAN COMPONENT RENDER LATENCY" },
  { value: 10, decimals: 0, suffix: "+", label: "ENTERPRISE SYSTEMS DELIVERED" },
];
