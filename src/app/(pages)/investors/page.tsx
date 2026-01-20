import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function InvestorsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Investors"
          title="Risk-aware context, not activation."
          description="Observed Mode provides visibility into governance intent and reporting scope without making funding or token claims."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Scope visibility",
              body: "Access draft documents describing governance posture and operational boundaries.",
            },
            {
              title: "Reporting clarity",
              body: "Review how updates will be communicated once the transparency stack is active.",
            },
            {
              title: "No claims",
              body: "No token allocations, yields, or financial projections are published in Observed Mode.",
            },
            {
              title: "Risk discipline",
              body: "All language remains neutral and avoids promises or timelines.",
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
