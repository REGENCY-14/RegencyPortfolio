export interface NavLink {
  label: string;
  href: string;
}

/**
 * Custom labels (Journey/Projects/Hire Me instead of the more generic
 * About/Work/Contact) over the same anchors as the Mission, Work, and
 * Contact sections. No "Blog" link: this brief says to omit the
 * writing/notes section rather than fabricate posts, and a nav link with
 * nothing behind it would be worse than not having it.
 *
 * "Resume" is the one entry that's a real route (/resume) rather than a
 * same-page anchor, since it's a dedicated page, not a section of Home.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Journey", href: "#mission" },
  { label: "Projects", href: "#work" },
  { label: "Resume", href: "/resume" },
  { label: "Hire Me", href: "#contact" },
];
