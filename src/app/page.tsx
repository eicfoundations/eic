import type { CSSProperties } from "react";
import Link from "next/link";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Container from "../components/Container";
import CTA from "../components/CTA";
import SectionHeader from "../components/SectionHeader";
import { siteCopy } from "../lib/site";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden py-16">
        <Container className="space-y-10">
          <div className="space-y-6">
            <Badge label={siteCopy.modeLabel} className="rise" />
            <div className="space-y-5">
              <h1
                className="rise font-display text-4xl font-semibold text-stone-950 sm:text-5xl lg:text-6xl"
                style={{ "--delay": "80ms" } as CSSProperties}
              >
                EIC Observed Mode draft scaffold.
              </h1>
              <p
                className="rise max-w-2xl text-base leading-7 text-stone-700 sm:text-lg"
                style={{ "--delay": "140ms" } as CSSProperties}
              >
                {siteCopy.summary}
              </p>
            </div>
            <div
              className="rise flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ "--delay": "200ms" } as CSSProperties}
            >
              <Link
                className="rounded-full bg-stone-900 px-6 py-3 text-amber-50 transition hover:bg-stone-800"
                href="/docs"
              >
                Draft Protocol Index
              </Link>
              <Link
                className="rounded-full border border-stone-300 px-6 py-3 text-stone-800 transition hover:border-stone-500"
                href="/transparency"
              >
                Snapshot Overview
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clarity over activation",
                body: "This is a reference layer for how the EIC might operate once defined, without enabling onboarding or claims.",
              },
              {
                title: "Neutral governance framing",
                body: "Language focuses on intent and responsibilities rather than predictions or timelines.",
              },
              {
                title: "Visibility for stakeholders",
                body: "Participants and investors can review expectations and transparency standards in one place.",
              },
            ].map((card) => (
              <Card key={card.title} className="rise space-y-3">
                <h3 className="text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-stone-700">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeader
            eyebrow="Observed Mode"
            title="What is active in this draft?"
            description="Observed Mode is a snapshot: decisions, documentation, and posture are visible, while activation flows remain off."
          />
          <div className="grid gap-4">
            {[
              "Documented roles and participation lanes.",
              "Transparency commitments and reporting cadence guidance.",
              "Draft governance mechanics subject to review.",
              "No wallet connect, claims, or asset actions enabled.",
            ].map((item, index) => (
              <Card
                key={item}
                className="rise"
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
              >
                <p className="text-sm text-stone-700">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Structure"
            title="How the scaffold is organized"
            description="Each section maps to a discrete knowledge area, with neutral language and no forward-looking timelines."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Mission & principles",
                body: "Why the EIC exists, and the guiding values that shape its governance choices.",
              },
              {
                title: "Participation lanes",
                body: "Expectations and responsibilities for contributors, builders, and aligned partners.",
              },
              {
                title: "Investor overview",
                body: "Risk posture, reporting scope, and the constraints of Observed Mode.",
              },
              {
                title: "Transparency stack",
                body: "How updates are communicated, measured, and archived for accountability.",
              },
            ].map((card) => (
              <Card key={card.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-stone-700">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <CTA
            title="Read the draft documentation first"
            description="Observed Mode prioritizes clarity and verification. Review the docs to confirm what is current, what is pending, and how updates will be published."
            primaryLabel="Open Docs"
            primaryHref="/docs"
            secondaryLabel="Transparency"
            secondaryHref="/transparency"
          />
        </Container>
      </section>
    </div>
  );
}
