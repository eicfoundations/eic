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
  tagline:
    "Energy Intelligence Coin (EIC) is a live Base Mainnet asset documented through an Observed Mode, documentation-first public site.",
  summary:
    "Energy Intelligence Coin (EIC) is maintained by Energy Intelligence Coin Emergent Technologies, with public documentation, governance context, and stewardship materials presented under EIC Foundations.",
  notice:
    "Observed Mode means public information is descriptive, view-only, and updated conservatively as documentation stabilizes.",
  securityNote: "Never share seed phrases; verify official links and the canonical contract.",
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
