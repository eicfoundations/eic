export type NavItem = {
  label: string;
  href: string;
};

export type SiteCopy = {
  name: string;
  modeLabel: string;
  tagline: string;
  summary: string;
  notice: string;
  securityNote: string;
};

export const siteCopy: SiteCopy = {
  name: "EIC",
  modeLabel: "Draft / Observed Mode",
  tagline: "A neutral, observed scaffold for the EIC ecosystem.",
  summary:
    "This draft site captures the current working model, governance intent, and participation routes without activation flows or token mechanics.",
  notice:
    "Observed Mode means information is view-only and subject to change as documentation stabilizes.",
  securityNote: "Never share seed phrases; verify official links.",
};

export const primaryNav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Participants", href: "/participants" },
  { label: "Investors", href: "/investors" },
  { label: "Transparency", href: "/transparency" },
  { label: "Docs", href: "/docs" },
  { label: "Store", href: "/store" },
];

export const footerLinks: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Participants", href: "/participants" },
  { label: "Transparency", href: "/transparency" },
  { label: "Docs", href: "/docs" },
];
