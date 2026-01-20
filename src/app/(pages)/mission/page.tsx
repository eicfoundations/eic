import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function MissionPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Mission"
          title="A neutral framework for collective coordination."
          description="The EIC mission is to document shared intent, define responsibilities, and make governance legible without activating on-chain mechanics in Observed Mode."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Stewardship",
              body: "Prioritize long-term ecosystem health over short-term activation.",
            },
            {
              title: "Clarity",
              body: "Capture roles, decision scopes, and expectations in plain language.",
            },
            {
              title: "Verification",
              body: "Separate verified artifacts from proposed drafts and open questions.",
            },
            {
              title: "Accountability",
              body: "Publish transparent updates that can be reviewed by participants.",
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
    </div>
  );
}
