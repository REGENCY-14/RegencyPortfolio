/**
 * lucide-react dropped its brand-logo icons (LinkedIn included) in the
 * installed version — this is a small custom stand-in, sized/styled to
 * match the lucide icons (Mail, X) it sits next to in the footer.
 */
export function LinkedinIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6 0h3.6v1.7h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.5 4.55 5.75V21h-4v-5.4c0-1.3-.02-3-1.85-3-1.85 0-2.15 1.4-2.15 2.9V21H9V9Z" />
    </svg>
  );
}
