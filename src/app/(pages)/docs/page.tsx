import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function DocsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Docs"
          title="Draft documentation index."
          description="Documentation is organized by scope and governance topic. Each entry is draft-only until marked verified."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Governance charter",
              body: "Defines roles, responsibilities, and decision boundaries.",
            },
            {
              title: "Operational cadence",
              body: "Explains how updates are proposed, reviewed, and published.",
            },
            {
              title: "Risk & compliance",
              body: "Summarizes risk posture, constraints, and disclosure expectations.",
            },
            {
              title: "Reference glossary",
              body: "Shared terms and definitions used throughout the draft.",
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
