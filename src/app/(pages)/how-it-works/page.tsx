import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function HowItWorksPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="How It Works"
          title="Document first, activate later."
          description="Observed Mode clarifies inputs, review lanes, and publication without enabling transactional flows or token mechanics."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Inputs",
              body: "Collect draft proposals, references, and stakeholder notes.",
            },
            {
              title: "Review",
              body: "Assess proposals against governance criteria and risk posture.",
            },
            {
              title: "Publication",
              body: "Publish approved language with versioned change logs.",
            },
            {
              title: "Feedback",
              body: "Capture structured feedback for the next revision cycle.",
            },
          ].map((step) => (
            <Card key={step.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-stone-700">{step.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
