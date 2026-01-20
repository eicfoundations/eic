import Container from "./Container";
import { siteCopy } from "../lib/site";

export default function SiteNotice() {
  return (
    <div className="border-b border-amber-100/70 bg-amber-50/70 py-3 text-xs text-amber-900/90">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold uppercase tracking-[0.25em]">
          {siteCopy.modeLabel}
        </span>
        <span className="text-amber-900/80">{siteCopy.notice}</span>
        <span className="font-medium">{siteCopy.securityNote}</span>
      </Container>
    </div>
  );
}
