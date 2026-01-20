import Card from "../../../components/Card";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function ParticipantsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Participants"
          title="Roles designed for clarity and accountability."
          description="Participants can review draft expectations in Observed Mode. No onboarding, claims, or wallet actions are enabled."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Observers",
              body: "Follow updates, review decisions, and track transparency logs.",
            },
            {
              title: "Contributors",
              body: "Provide research, documentation, and operational feedback.",
            },
            {
              title: "Partners",
              body: "Align on shared outcomes and provide domain expertise.",
            },
          ].map((role) => (
            <Card key={role.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-stone-900">
                {role.title}
              </h3>
              <p className="text-sm leading-6 text-stone-700">{role.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
