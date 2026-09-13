export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 12400, suffix: "+", label: "Test cases automated" },
  { value: 3, suffix: "", label: "Projects shipped" },
  { value: 4, suffix: "+", label: "Years across QA & frontend" },
];
