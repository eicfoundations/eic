import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function PoiPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="POI (Inactive)"
          title="Coming Soon"
          description="Proof of Insight (POI) is conceptual and not active at this time. It provides no rewards and confers no access or status in Draft / Observed Mode."
          align="center"
        />
      </Container>
    </div>
  );
}
