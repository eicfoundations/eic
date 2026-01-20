import Link from "next/link";
import Container from "./Container";
import { footerLinks, siteCopy } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-white/70 py-10 text-sm text-stone-600">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="font-display text-lg text-stone-900">{siteCopy.name}</p>
          <p className="max-w-sm text-sm text-stone-600">{siteCopy.summary}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {siteCopy.securityNote}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
          {footerLinks.map((item) => (
            <Link
              className="text-stone-600 transition hover:text-stone-900"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
