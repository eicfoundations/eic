import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function StorePage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Store"
          title="Coming Soon"
          description="Merchandise and asset listings are not available in Observed Mode."
          align="center"
        />
      </Container>
    </div>
  );
}
