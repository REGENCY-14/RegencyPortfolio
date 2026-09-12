export interface NavLink {
  label: string;
  href: string;
}

/**
 * The reference site's nav reads Home / About / Work / Blog / Contact.
 * "Blog" is dropped here: this brief explicitly says to omit the
 * writing/notes section rather than fabricate posts, and a nav link with
 * nothing behind it would be worse than not having it.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#mission" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
