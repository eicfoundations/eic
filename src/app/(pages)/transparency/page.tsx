import Link from "next/link";
import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function TransparencyPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Transparency"
          title="Traceable updates with neutral language."
          description="Transparency in Observed Mode focuses on documented decisions, versioned logs, and clear change ownership."
        />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">
          <Link className="transition hover:text-stone-900" href="/ethics">
            Safety &amp; Ethics Checklist
          </Link>
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Update logs",
              body: "Every draft update includes a summary and owner record.",
            },
            {
              title: "Review checkpoints",
              body: "Drafts move through review gates before becoming official references.",
            },
            {
              title: "Archive discipline",
              body: "Prior versions remain accessible for audit and comparison.",
            },
            {
              title: "Security posture",
              body: "Never share seed phrases; verify official links.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-stone-900">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-stone-700">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
