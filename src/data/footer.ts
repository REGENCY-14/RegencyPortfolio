import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

/**
 * Generic enough not to need custom vectors, per the brief — except the
 * installed lucide-react version has dropped its brand-logo icons
 * entirely, so GitHub and LinkedIn fall back to small custom stand-ins
 * (src/components/icons/{Github,Linkedin}Icon.tsx) sized to match. Mail
 * still comes straight from lucide-react as intended. No X/Twitter link —
 * dropped per the user, who doesn't use it as a professional channel.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/REGENCY-14/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/osman-zakaria-6577b4247", icon: LinkedinIcon },
  { label: "Email", href: "mailto:osmantimtonizakaria14@gmail.com", icon: Mail },
];

export const FOOTER_NAV = [
  { label: "Home", href: "#top" },
  { label: "Journey", href: "#mission" },
  { label: "Projects", href: "#work" },
  { label: "Hire Me", href: "#contact" },
];

export const CONTACT_EMAIL = "osmantimtonizakaria14@gmail.com";
