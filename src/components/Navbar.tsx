import Link from "next/link";
import Badge from "./Badge";
import Container from "./Container";
import { primaryNav, siteCopy } from "../lib/site";

export default function Navbar() {
  return (
    <header className="border-b border-stone-200/60 bg-white/80 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          className="flex items-center gap-3 text-lg font-semibold text-stone-900"
          href="/"
        >
          <span className="font-display text-2xl tracking-tight">
            {siteCopy.name}
          </span>
          <Badge label="Observed Mode" className="hidden sm:inline-flex" />
        </Link>
        <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
          {primaryNav.map((item) => (
            <Link
              className="transition hover:text-stone-900"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
