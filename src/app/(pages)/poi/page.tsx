import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function PoiPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="POI"
          title="Coming Soon"
          description="Proof of Impact (POI) documentation will be published once draft criteria are finalized."
          align="center"
        />
      </Container>
    </div>
  );
}
