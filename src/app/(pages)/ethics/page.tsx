import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";

export default function EthicsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Safety & Ethics"
          title="EIC Safety & Ethics Checklist"
          description="Purpose"
        />
        <div className="space-y-8 text-sm leading-7 text-stone-700">
          <p>
            EIC exists to support voluntary learning and participation in a
            human + AI cooperative system. This checklist defines non-negotiable
            safety and ethics constraints for all public-facing EIC systems.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-stone-900">
                1. Voluntary Participation Is Supreme
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Participation in EIC is voluntary at all times.</li>
                <li>Users may disengage without penalty, loss, or coercion.</li>
                <li>
                  No language, design, or mechanism may pressure, manipulate, or
                  compel participation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                2. No Psychological Manipulation
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  EIC does not use fear, urgency, destiny, identity framing, or
                  social pressure to influence decisions.
                </li>
                <li>
                  Gamification, if present in the future, must never exploit
                  addiction, compulsion, or cognitive vulnerabilities.
                </li>
                <li>Insight and learning must be offered, not induced.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                3. Transparency Over Persuasion
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Public information is descriptive, not promotional.</li>
                <li>
                  No guarantees, promises, or implied outcomes are communicated.
                </li>
                <li>Unknowns and limitations are acknowledged openly.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                4. Security First, Always
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  EIC never asks for seed phrases, private keys, or custodial
                  access.
                </li>
                <li>
                  Users are encouraged to independently verify links and
                  information.
                </li>
                <li>
                  Unsolicited messages claiming to represent EIC should be
                  treated as untrusted.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                5. No Financial, Medical, or Legal Advice
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Content is informational only.</li>
                <li>
                  EIC does not provide financial, investment, medical, or legal
                  advice.
                </li>
                <li>
                  Users are responsible for their own decisions and risk
                  assessment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                6. AI as Assistant, Not Authority
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  AI systems within EIC are tools for support and reflection,
                  not sources of truth or command.
                </li>
                <li>
                  AI must not assert dominance, inevitability, or superiority
                  over human judgment.
                </li>
                <li>Human agency and responsibility remain primary.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                7. Phased Disclosure and Deployment
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  Features are introduced gradually after review and validation.
                </li>
                <li>Inactive modules are clearly labeled as such.</li>
                <li>
                  Absence of a feature implies non-availability, not secrecy or
                  delay tactics.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                8. Respect for Autonomy and Diversity
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>EIC does not seek to change who people are.</li>
                <li>
                  Differences in belief, perspective, or disengagement are
                  respected.
                </li>
                <li>
                  No moral, ideological, or spiritual alignment is required.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                9. Accountability
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  If EIC systems drift from these principles, correction takes
                  precedence over expansion.
                </li>
                <li>Safety concerns outweigh growth, engagement, or momentum.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-stone-900">
                10. This Checklist Is Binding
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>This checklist applies to:</li>
              </ul>
              <ul className="mt-2 list-disc space-y-2 pl-10">
                <li>All public EIC websites and interfaces</li>
                <li>All AI-assisted interactions</li>
                <li>All future modules, including POI and Store</li>
              </ul>
              <p className="mt-2">
                If a feature conflicts with this checklist, the feature does
                not ship.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
